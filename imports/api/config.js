import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';
import _ from 'meteor/underscore';
const _QIXSchema = require('/node_modules/enigma.js/schemas/qix/12.20.0/schema.json');

//This is the config that we need to make available on the client (the webpage)
if (Meteor.isClient) {
    var _senseConfig = {
        "host": Meteor.settings.public.host,
        "port": Meteor.settings.public.port,
        "virtualProxyClientUsage": Meteor.settings.public.virtualProxyClientUsage,
        "webIntegrationDemoPort": Meteor.settings.public.webIntegrationDemoPort,
        "QIXSchema": _QIXSchema
    };
}


//SERVER SIDE
if (Meteor.isServer) {
    console.log('This Sense SaaS demo tool uses this config as defined in the settings-XYZ.json file in the root folder: ', Meteor.settings.private);
    import crypto from 'crypto';
    import fs from 'fs';
    const bluebird = require('bluebird');
    const WebSocket = require('ws');

    var _senseConfig = {
        "host": Meteor.settings.public.host,
        "SenseServerInternalLanIP": Meteor.settings.private.SenseServerInternalLanIP,
        "port": Meteor.settings.public.port,
        "useSSL": Meteor.settings.private.useSSL,
        "xrfkey": generateXrfkey(),
        "virtualProxy": Meteor.settings.private.virtualProxy, //used to connect via REST to Sense, we authenticate via a http header. not for production!!!
        "virtualProxyClientUsage": Meteor.settings.public.virtualProxyClientUsage,
        "headerKey": Meteor.settings.private.headerKey,
        "headerValue": process.env.USERDOMAIN + '\\' + process.env.USERNAME, //"QLIK-AB0Q2URN5T\\Qlikexternal",
        "isSecure": Meteor.settings.private.isSecure,
    };

    if (!_senseConfig.host) {
        throw new Meteor.Error('You have not started this meteor project with: meteor --settings settings-development.json ? You missed the reference to this settings file, or it is empty?');
    }

    //CONFIG FOR HTTP MODULE WITH HEADER AUTH (TO MAKE REST CALLS TO SENSE VIA HTTP CALLS)
    export const authHeaders = {
        'hdr-usr': _senseConfig.headerValue,
        'X-Qlik-xrfkey': _senseConfig.xrfkey
    }

    export const _certs = {
        ca: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/root.pem'),
        key: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/client_key.pem'),
        cert: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/client.pem'),
    }

    export var certicate_communication_options = {
        rejectUnauthorized: false,
        hostname: _senseConfig.SenseServerInternalLanIP,
        headers: {
            'x-qlik-xrfkey': _senseConfig.xrfkey,
            'X-Qlik-User': `UserDirectory=${process.env.USERDOMAIN};UserId=${process.env.USERNAME}`,
            'Content-Type': 'application/json'
        },
        key: _certs.key,
        cert: _certs.cert
    };

    //used for engimaJS, the engine API javascript wrapper
    var _engineConfig = {
        host: _senseConfig.SenseServerInternalLanIP,
        isSecure: _senseConfig.isSecure,
        port: Meteor.settings.private.enginePort,
        headers: {
            'X-Qlik-User': `UserDirectory=${process.env.USERDOMAIN};UserId=${process.env.USERNAME}`,
        },
        ca: _certs.ca,
        key: _certs.key,
        cert: _certs.cert,
        passphrase: Meteor.settings.private.passphrase,
        rejectUnauthorized: false, // Don't reject self-signed certs
        appname: null,
        QIXSchema: _QIXSchema
    };

    export const enigmaServerConfig = {
        schema: _engineConfig.QIXSchema,
        // appId: appId,
        session: {
            host: _engineConfig.host,
            port: _engineConfig.port,
        },
        Promise: bluebird,
        createSocket(url) {
            return new WebSocket(url, {
                ca: _engineConfig.ca,
                key: _engineConfig.key,
                cert: _engineConfig.cert,
                headers: {
                    'X-Qlik-User': `UserDirectory=${process.env.USERDOMAIN};UserId=${process.env.USERNAME}`,
                },
            });
        },
        // handleLog: logRow => console.log(JSON.stringify(logRow)),
    }
}


export const engineConfig = _engineConfig;
export const senseConfig = _senseConfig;



function generateXrfkey() {
    return Random.hexString(16);
}

// //https://www.npmjs.com/package/qrs
// export const QRSconfig = {
//     authentication: 'certificates',
//     host: _engineConfig.host,
//     useSSL: true,
//     ca: _engineConfig.ca,
//     key: _engineConfig.key,
//     cert: _engineConfig.cert,
//     port: _engineConfig.port,
//     headerKey: 'X-Qlik-User',
//     headerValue: `UserDirectory=${process.env.USERDOMAIN};UserId=${process.env.USERNAME}`
// };