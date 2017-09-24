var require = meteorInstall({"lib":{"yogiben.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/yogiben.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// import { Customers } from '/imports/api/customers';                                                                 // 1
// AdminConfig = {                                                                                                     // 4
//     collections: {                                                                                                  // 5
//         Customers: {                                                                                                // 6
//             collectionObject: Customers,                                                                            // 7
//         }                                                                                                           // 8
//     },                                                                                                              // 9
//     userSchema: new SimpleSchema({                                                                                  // 10
//         'profile.gender': {                                                                                         // 11
//             type: String,                                                                                           // 12
//             allowedValues: ['male', 'female']                                                                       // 13
//         }                                                                                                           // 14
//     })                                                                                                              // 15
// };                                                                                                                  // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"server":{"QPSFunctions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QPSFunctions.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var module1 = module;                                                                                                  // 1
module1.export({                                                                                                       // 1
    createVirtualProxies: function () {                                                                                // 1
        return createVirtualProxies;                                                                                   // 1
    },                                                                                                                 // 1
    getVirtualProxies: function () {                                                                                   // 1
        return getVirtualProxies;                                                                                      // 1
    },                                                                                                                 // 1
    logoutUser: function () {                                                                                          // 1
        return logoutUser;                                                                                             // 1
    },                                                                                                                 // 1
    getRedirectURL: function () {                                                                                      // 1
        return getRedirectURL;                                                                                         // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module1.watch(require("meteor/meteor"), {                                                                              // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Customers = void 0,                                                                                                // 1
    dummyCustomers = void 0,                                                                                           // 1
    dummyCustomer = void 0;                                                                                            // 1
module1.watch(require("/imports/api/customers"), {                                                                     // 1
    Customers: function (v) {                                                                                          // 1
        Customers = v;                                                                                                 // 1
    },                                                                                                                 // 1
    dummyCustomers: function (v) {                                                                                     // 1
        dummyCustomers = v;                                                                                            // 1
    },                                                                                                                 // 1
    dummyCustomer: function (v) {                                                                                      // 1
        dummyCustomer = v;                                                                                             // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var REST_Log = void 0;                                                                                                 // 1
module1.watch(require("/imports/api/APILogs"), {                                                                       // 1
    REST_Log: function (v) {                                                                                           // 1
        REST_Log = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var gitHubLinks = void 0;                                                                                              // 1
module1.watch(require("/imports/ui/UIHelpers"), {                                                                      // 1
    gitHubLinks: function (v) {                                                                                        // 1
        gitHubLinks = v;                                                                                               // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var senseConfig = void 0,                                                                                              // 1
    enigmaServerConfig = void 0,                                                                                       // 1
    authHeaders = void 0,                                                                                              // 1
    QRSconfig = void 0,                                                                                                // 1
    qliksrv = void 0,                                                                                                  // 1
    QRSCertConfig = void 0,                                                                                            // 1
    configCerticates = void 0,                                                                                         // 1
    validateJSON = void 0;                                                                                             // 1
module1.watch(require("/imports/api/config.js"), {                                                                     // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    enigmaServerConfig: function (v) {                                                                                 // 1
        enigmaServerConfig = v;                                                                                        // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    },                                                                                                                 // 1
    QRSconfig: function (v) {                                                                                          // 1
        QRSconfig = v;                                                                                                 // 1
    },                                                                                                                 // 1
    qrsSrv: function (v) {                                                                                             // 1
        qliksrv = v;                                                                                                   // 1
    },                                                                                                                 // 1
    QRSCertConfig: function (v) {                                                                                      // 1
        QRSCertConfig = v;                                                                                             // 1
    },                                                                                                                 // 1
    configCerticates: function (v) {                                                                                   // 1
        configCerticates = v;                                                                                          // 1
    },                                                                                                                 // 1
    validateJSON: function (v) {                                                                                       // 1
        validateJSON = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 4);                                                                                                                 // 1
var lodash = void 0;                                                                                                   // 1
module1.watch(require("lodash"), {                                                                                     // 1
    "default": function (v) {                                                                                          // 1
        lodash = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 5);                                                                                                                 // 1
                                                                                                                       //
var fs = require('fs-extra');                                                                                          // 15
                                                                                                                       //
var path = require('path');                                                                                            // 16
                                                                                                                       //
var os = require('os');                                                                                                // 17
                                                                                                                       //
var ip = require('ip'); //                                                                                             // 18
// ─── IMPORT CONFIG FOR QLIK SENSE QRS ───────────────────────────────────────────                                    // 21
//                                                                                                                     // 22
                                                                                                                       //
                                                                                                                       //
_ = lodash; //                                                                                                         // 36
// ─── CREATE VIRTUAL PROXIES ─────────────────────────────────────────────────────                                    // 39
//                                                                                                                     // 40
// http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-Virtual-Proxy-Create.htm
                                                                                                                       //
function createVirtualProxies() {                                                                                      // 43
    var file, proxySettings, _iterator, _isArray, _i, _ref, vpToCreate, existingProxies, found, virtualProxy, createVirtualProxy;
                                                                                                                       //
    return _regenerator2.default.async(function () {                                                                   // 43
        function createVirtualProxies$(_context) {                                                                     // 43
            while (1) {                                                                                                // 43
                switch (_context.prev = _context.next) {                                                               // 43
                    case 0:                                                                                            // 43
                        createVirtualProxy = function () {                                                             // 84
                            function createVirtualProxy(virtualProxy) {                                                // 43
                                // get id of local node so we can link the virtual proxy to a load balancing node      // 86
                                virtualProxy.loadBalancingServerNodes = [{                                             // 87
                                    id: getServerNodeConfiguration().id                                                // 88
                                }];                                                                                    // 87
                                                                                                                       //
                                try {                                                                                  // 90
                                    check(virtualProxy, Object);                                                       // 91
                                    console.log('------CREATE VIRTUAL PROXY: ', virtualProxy.prefix);                  // 92
                                    var request = qliksrv + '/qrs/virtualproxyconfig/';                                // 94
                                    response = HTTP.call('POST', request, {                                            // 95
                                        params: {                                                                      // 96
                                            xrfkey: senseConfig.xrfkey                                                 // 97
                                        },                                                                             // 96
                                        'npmRequestOptions': configCerticates,                                         // 99
                                        data: virtualProxy                                                             // 100
                                    });                                                                                // 95
                                    return response.data;                                                              // 102
                                } catch (err) {                                                                        // 103
                                    console.error('create virtual proxy failed', err);                                 // 104
                                } // }                                                                                 // 105
                                                                                                                       //
                            }                                                                                          // 107
                                                                                                                       //
                            return createVirtualProxy;                                                                 // 43
                        }();                                                                                           // 43
                                                                                                                       //
                        console.log('------------------------------------');                                           // 44
                        console.log('CREATE VIRTUAL PROXIES');                                                         // 45
                        console.log('------------------------------------');                                           // 46
                        file = path.join(Meteor.settings.broker.automationBaseFolder, 'proxy', 'import', 'virtualProxySettings.json');
                        _context.prev = 5;                                                                             // 43
                        _context.next = 8;                                                                             // 43
                        return _regenerator2.default.awrap(fs.readJson(file));                                         // 43
                                                                                                                       //
                    case 8:                                                                                            // 43
                        proxySettings = _context.sent;                                                                 // 50
                        _context.prev = 9;                                                                             // 43
                        validateJSON(proxySettings);                                                                   // 52
                        _context.next = 16;                                                                            // 43
                        break;                                                                                         // 43
                                                                                                                       //
                    case 13:                                                                                           // 43
                        _context.prev = 13;                                                                            // 43
                        _context.t0 = _context["catch"](9);                                                            // 43
                        throw new Error('Cant read the virtual proxy definitions file: virtualProxySettings.json in your automation folder');
                                                                                                                       //
                    case 16:                                                                                           // 43
                        _iterator = proxySettings, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
                                                                                                                       //
                    case 17:                                                                                           // 43
                        if (!_isArray) {                                                                               // 43
                            _context.next = 23;                                                                        // 43
                            break;                                                                                     // 43
                        }                                                                                              // 43
                                                                                                                       //
                        if (!(_i >= _iterator.length)) {                                                               // 43
                            _context.next = 20;                                                                        // 43
                            break;                                                                                     // 43
                        }                                                                                              // 43
                                                                                                                       //
                        return _context.abrupt("break", 34);                                                           // 43
                                                                                                                       //
                    case 20:                                                                                           // 43
                        _ref = _iterator[_i++];                                                                        // 43
                        _context.next = 27;                                                                            // 43
                        break;                                                                                         // 43
                                                                                                                       //
                    case 23:                                                                                           // 43
                        _i = _iterator.next();                                                                         // 43
                                                                                                                       //
                        if (!_i.done) {                                                                                // 43
                            _context.next = 26;                                                                        // 43
                            break;                                                                                     // 43
                        }                                                                                              // 43
                                                                                                                       //
                        return _context.abrupt("break", 34);                                                           // 43
                                                                                                                       //
                    case 26:                                                                                           // 43
                        _ref = _i.value;                                                                               // 43
                                                                                                                       //
                    case 27:                                                                                           // 43
                        vpToCreate = _ref;                                                                             // 58
                                                                                                                       //
                        if (vpToCreate.websocketCrossOriginWhiteList) {                                                // 59
                            vpToCreate.websocketCrossOriginWhiteList.push(Meteor.settings.public.qlikSenseHost);       // 60
                            vpToCreate.websocketCrossOriginWhiteList.push(ip.address());                               // 61
                            vpToCreate.websocketCrossOriginWhiteList.push(os.hostname());                              // 62
                        }                                                                                              // 63
                                                                                                                       //
                        existingProxies = getVirtualProxies(); // CHECK IF VIRT. PROXY ALREADY EXISTS IN SENSE         // 64
                                                                                                                       //
                        found = existingProxies.some(function (existingVP) {                                           // 67
                            return existingVP.prefix === vpToCreate.prefix;                                            // 68
                        });                                                                                            // 69
                                                                                                                       //
                        if (!found) {                                                                                  // 70
                            virtualProxy = createVirtualProxy(vpToCreate); // THE VIRTUAL PROXY HAS BEEN CREATED, NOW LINK IT TO THE CENTRAL PROXY
                                                                                                                       //
                            linkVirtualProxyToProxy(virtualProxy);                                                     // 73
                        } else {                                                                                       // 74
                            console.log('Virtual proxy ' + vpToCreate.prefix + ' already existed. We do not update existing ones.');
                        }                                                                                              // 76
                                                                                                                       //
                    case 32:                                                                                           // 43
                        _context.next = 17;                                                                            // 43
                        break;                                                                                         // 43
                                                                                                                       //
                    case 34:                                                                                           // 43
                        _context.next = 40;                                                                            // 43
                        break;                                                                                         // 43
                                                                                                                       //
                    case 36:                                                                                           // 43
                        _context.prev = 36;                                                                            // 43
                        _context.t1 = _context["catch"](5);                                                            // 43
                        console.error(_context.t1);                                                                    // 79
                        throw new Error('unable to create virtual proxies', _context.t1);                              // 43
                                                                                                                       //
                    case 40:                                                                                           // 43
                    case "end":                                                                                        // 43
                        return _context.stop();                                                                        // 43
                }                                                                                                      // 43
            }                                                                                                          // 43
        }                                                                                                              // 43
                                                                                                                       //
        return createVirtualProxies$;                                                                                  // 43
    }(), null, this, [[5, 36], [9, 13]]);                                                                              // 43
}                                                                                                                      // 43
                                                                                                                       //
// http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-Virtual-Proxy-Link.htm 
function linkVirtualProxyToProxy(virtualProxy) {                                                                       // 111
    // console.log('linkVirtualProxyToProxy', virtualProxy.id);                                                        // 112
    // GET ID OF PROXY ON THIS HOST                                                                                    // 114
    var proxyId = getProxyId(); // GET THE CONFIG OF THE PROXY (WHICH CONTAINS VIRTUAL PROXIES)                        // 115
                                                                                                                       //
    var proxyConfig = getProxyServiceConfiguration(proxyId); // ADD THE NEW VIRTUAL PROXY TO THE EXISTING PROXY LIST   // 117
                                                                                                                       //
    proxyConfig.settings.virtualProxies.push(virtualProxy); //UPDATE SOME PROXY SETTINGS                               // 119
                                                                                                                       //
    proxyConfig.settings.unencryptedListenPort = Meteor.settings.public.qlikSensePort; //HTTP                          // 122
                                                                                                                       //
    proxyConfig.settings.listenPort = Meteor.settings.public.qlikSensePortSecure; //HTTPS                              // 123
                                                                                                                       //
    proxyConfig.settings.allowHttp = Meteor.settings.public.qlikSenseAllowHTTP; //OVERWRITE THE SETTINGS WITH THE COMPLETE UPDATED OBJECT.
                                                                                                                       //
    updateProxy(proxyId, proxyConfig);                                                                                 // 127
}                                                                                                                      // 128
                                                                                                                       //
function updateProxy(proxyId, proxyConfig) {                                                                           // 130
    try {                                                                                                              // 131
        check(proxyId, String);                                                                                        // 132
        check(proxyConfig, Object);                                                                                    // 133
        console.log('proxyConfig', proxyConfig.settings.virtualProxies);                                               // 134
        var request = qliksrv + '/qrs/proxyservice/' + proxyId;                                                        // 136
        response = HTTP.call('PUT', request, {                                                                         // 137
            params: {                                                                                                  // 138
                xrfkey: senseConfig.xrfkey                                                                             // 139
            },                                                                                                         // 138
            'npmRequestOptions': configCerticates,                                                                     // 141
            data: proxyConfig                                                                                          // 142
        });                                                                                                            // 137
    } catch (err) {                                                                                                    // 144
        console.error('create virtual proxy failed', err);                                                             // 145
    }                                                                                                                  // 146
}                                                                                                                      // 147
                                                                                                                       //
function getProxyId() {                                                                                                // 149
    try {                                                                                                              // 150
        var request = qliksrv + '/qrs/proxyservice/?xrfkey=' + senseConfig.xrfkey;                                     // 151
        response = HTTP.call('GET', request, {                                                                         // 152
            'npmRequestOptions': configCerticates                                                                      // 153
        });                                                                                                            // 152
        return response.data[0].id;                                                                                    // 155
    } catch (err) {                                                                                                    // 156
        console.error('create virtual proxy failed', err);                                                             // 157
    }                                                                                                                  // 158
}                                                                                                                      // 159
                                                                                                                       //
function getProxyServiceConfiguration(proxyId) {                                                                       // 161
    try {                                                                                                              // 163
        check(proxyId, String);                                                                                        // 164
        var request = qliksrv + '/qrs/proxyservice/' + proxyId + '?xrfkey=' + senseConfig.xrfkey;                      // 166
        response = HTTP.call('GET', request, {                                                                         // 167
            'npmRequestOptions': configCerticates                                                                      // 168
        }); //SAVE RPOXY CONFIG TO THE EXPORT FOLDER                                                                   // 167
                                                                                                                       //
        var file = path.join(Meteor.settings.broker.automationBaseFolder, 'proxy', 'export', 'proxyServiceConfiguration.json');
        fs.outputFile(file, JSON.stringify(response.data, null, 2), 'utf-8');                                          // 173
        return response.data;                                                                                          // 175
    } catch (err) {                                                                                                    // 176
        console.error('create virtual proxy failed', err);                                                             // 177
    }                                                                                                                  // 178
}                                                                                                                      // 179
                                                                                                                       //
function getVirtualProxies() {                                                                                         // 181
    // console.log('--------------------------GET VIRTUAL PROXIES');//                                                 // 182
    try {                                                                                                              // 183
        var request = qliksrv + '/qrs/virtualproxyconfig/';                                                            // 184
        response = HTTP.call('GET', request, {                                                                         // 185
            params: {                                                                                                  // 186
                xrfkey: senseConfig.xrfkey                                                                             // 187
            },                                                                                                         // 186
            npmRequestOptions: configCerticates                                                                        // 189
        });                                                                                                            // 185
        var file = path.join(Meteor.settings.broker.automationBaseFolder, 'proxy', 'export', 'virtualProxyServiceConfiguration.json'); // SAVE PROXY FILE TO DISK
                                                                                                                       //
        fs.outputFile(file, JSON.stringify(response.data, null, 2), 'utf-8');                                          // 195
        return response.data;                                                                                          // 196
    } catch (err) {                                                                                                    // 197
        console.error('create virtual proxy failed', err);                                                             // 198
    }                                                                                                                  // 199
}                                                                                                                      // 200
                                                                                                                       //
// function getCentralProxy() {                                                                                        // 202
//     console.log('getCentralProxy: GET /qrs/ServerNodeConfiguration?filter=isCentral')                               // 203
// }                                                                                                                   // 204
function getServerNodeConfiguration() {                                                                                // 207
    try {                                                                                                              // 208
        var request = qliksrv + '/qrs/servernodeconfiguration/local?xrfkey=' + senseConfig.xrfkey;                     // 209
        response = HTTP.call('GET', request, {                                                                         // 210
            'npmRequestOptions': configCerticates                                                                      // 211
        });                                                                                                            // 210
        return response.data;                                                                                          // 213
    } catch (err) {                                                                                                    // 214
        console.error('create virtual proxy failed', err);                                                             // 215
    }                                                                                                                  // 216
} //                                                                                                                   // 217
// ─── METEOR METHODS ─────────────────────────────────────────────────────────────                                    // 220
//                                                                                                                     // 221
                                                                                                                       //
                                                                                                                       //
Meteor.methods({                                                                                                       // 224
    currentlyLoggedInUser: function () {                                                                               // 225
        // console.log("Meteor will now look which user is currently logged in, and request a ticket for this ID, and add his group memberships.");
        var call = {};                                                                                                 // 227
        call.action = 'STEP 3: Server received request to create ticket';                                              // 228
        call.request = 'Meteor server received a incoming method call from the browser. The meteor server will now look which user is currently logged in, and create a ticket for this ID, and add his group memberships.';
        REST_Log(call, Meteor.userId()); // first find the customers that have a logged in users (mongo returns a complete document)
                                                                                                                       //
        var customer = Customers.findOne({                                                                             // 233
            generationUserId: Meteor.userId(),                                                                         // 234
            'users.currentlyLoggedIn': true                                                                            // 235
        }); // console.log('In our local database we can find the customer with the currentlyLoggedIn set to true for user: ' + loggedInUser + ', the customer which contains the user that the user selected with the dropdown: ', customer);
        // now we have the document, we can look in the array of users, to find the one that is logged in.             // 239
                                                                                                                       //
        var user;                                                                                                      // 240
                                                                                                                       //
        if (!customer) {                                                                                               // 241
            // if no user is selected, just insert john as a dummy                                                     // 241
            // const error = 'You have not selected a user you want to simulate the Single Sign on with. For demo purposes we now selected John for you. You can also select your own user in step 4 of the SaaS demo';
            var response = {}; // console.log('dummyCustomer :', dummyCustomer);                                       // 243
                                                                                                                       //
            response.user = dummyCustomer.user;                                                                        // 245
            response.customer = dummyCustomer; // throw new Meteor.Warning('No user', error);                          // 246
        } else {                                                                                                       // 248
            var user = _.find(customer.users, {                                                                        // 249
                'currentlyLoggedIn': true                                                                              // 250
            });                                                                                                        // 249
                                                                                                                       //
            var response = {};                                                                                         // 252
            response.user = user;                                                                                      // 253
            response.customer = customer;                                                                              // 254
        } // console.log('the response is: ', response);                                                               // 255
                                                                                                                       //
                                                                                                                       //
        return response;                                                                                               // 257
    },                                                                                                                 // 258
    getRedirectUrl: function (proxyRestUri, targetId, loggedInUser) {                                                  // 259
        var response = Meteor.call('currentlyLoggedInUser');                                                           // 260
        var customer = response.customer;                                                                              // 261
        var user = response.user; // console.log('UserID currently logged in in the demo platform: ' + loggedInUser + '. Meteor server side thinks the meteor.userId is ' + Meteor.userId() + '. We use this as the UDC name');
        // Create a paspoort (ticket) request: user directory, user identity and attributes                            // 265
                                                                                                                       //
        var passport = {                                                                                               // 266
            'UserDirectory': Meteor.userId(),                                                                          // 267
            // Specify a dummy value to ensure userID's are unique E.g. "Dummy", or in my case, I use the logged in user, so each user who uses the demo can logout only his users, or the name of the customer domain if you need a Virtual proxy per customer
            'UserId': user.name,                                                                                       // 268
            // the current user that we are going to login with                                                        // 268
            'Attributes': [{                                                                                           // 269
                'group': customer.name.toUpperCase()                                                                   // 270
            }, // attributes supply the group membership from the source system to Qlik Sense                          // 269
            {                                                                                                          // 272
                'group': user.country.toUpperCase()                                                                    // 273
            }, {                                                                                                       // 272
                'group': user.group.toUpperCase()                                                                      // 276
            }]                                                                                                         // 275
        }; // console.log('Request ticket for this user passport": ', passport);                                       // 266
        // logging only                                                                                                // 282
                                                                                                                       //
        var call = {};                                                                                                 // 283
        call.action = 'STEP 4: User and group information received from customer database, now we can request a ticket';
        call.url = gitHubLinks.createpassport;                                                                         // 285
        call.request = 'Request ticket for this user and his groups (an array of values which you can use in the security rules): ": ' + JSON.stringify(passport);
        REST_Log(call, Meteor.userId());                                                                               // 287
        return getRedirectURL(passport, proxyRestUri, targetId, Meteor.userId());                                      // 289
    },                                                                                                                 // 290
    getTicketNumber: function (userProperties, virtualProxy) {                                                         // 291
        // only get a ticket number for a SPECIFIC virtual proxy                                                       // 291
        try {                                                                                                          // 292
            // check(userProperties.user, String);                                                                     // 293
            check(userProperties.group, String);                                                                       // 294
        } catch (err) {                                                                                                // 295
            throw new Meteor.Error('Failed to login into Qlik Sense via a ticket', 'Please go to the landing page and select your group. We could not request a ticket because the userId or groups (technical, generic) are not provided');
        }                                                                                                              // 297
                                                                                                                       //
        var passport = {                                                                                               // 298
            'UserDirectory': Meteor.userId(),                                                                          // 299
            // Specify a dummy value to ensure userID's are unique E.g. "Dummy", or in my case, I use the logged in user, so each user who uses the demo can logout only his users, or the name of the customer domain if you need a Virtual proxy per customer
            'UserId': Meteor.userId(),                                                                                 // 300
            // the current user that we are going to login with                                                        // 300
            'Attributes': [{                                                                                           // 301
                'group': 'slideGenerator'                                                                              // 302
            }, // attributes supply the group membership from the source system to Qlik Sense                          // 301
            {                                                                                                          // 304
                'group': userProperties.group                                                                          // 305
            }, {                                                                                                       // 304
                'group': 'ITALY'                                                                                       // 308
            }]                                                                                                         // 307
        }; //get the ticket number and return it to the client                                                         // 298
                                                                                                                       //
        return Meteor.call('requestTicketWithPassport', virtualProxy, passport);                                       // 313
    },                                                                                                                 // 314
    //only for demo purposes! never supply groups from the client...                                                   // 315
    requestTicketWithPassport: function (virtualProxy, passport) {                                                     // 316
        console.log('getTicketNumber passport', passport); // http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/ProxyServiceAPI/Content/ProxyServiceAPI/ProxyServiceAPI-ProxyServiceAPI-Authentication-Ticket-Add.htm
                                                                                                                       //
        var proxyGetTicketURI = 'https://' + senseConfig.host + ':' + Meteor.settings.private.proxyPort + '/qps/' + virtualProxy + '/ticket'; // "proxyRestUri": "https://ip-172-31-22-22.eu-central-1.compute.internal:4243/qps/meteor/",
                                                                                                                       //
        try {                                                                                                          // 321
            var response = HTTP.call('POST', proxyGetTicketURI, {                                                      // 322
                'npmRequestOptions': configCerticates,                                                                 // 323
                headers: authHeaders,                                                                                  // 324
                params: {                                                                                              // 325
                    'xrfkey': senseConfig.xrfkey                                                                       // 326
                },                                                                                                     // 325
                data: passport // the user and group info for which we want to create a ticket                         // 328
                                                                                                                       //
            });                                                                                                        // 322
        } catch (err) {                                                                                                // 330
            console.error('REST call to request a ticket failed', err);                                                // 331
            throw new Meteor.Error('Request ticket failed', err.message);                                              // 332
        }                                                                                                              // 333
                                                                                                                       //
        return response.data.Ticket;                                                                                   // 334
    },                                                                                                                 // 335
    resetLoggedInUser: function () {                                                                                   // 336
        // console.log("***Method resetLoggedInUsers");                                                                // 337
        // console.log('call the QPS logout api, to invalidate the session cookie for each user in our local database');
        // reset the local database. set all users to not logged in. We need this code because we do a simulation of the login and not a real end user login.
        Customers.find({                                                                                               // 341
            'generationUserId': Meteor.userId()                                                                        // 342
        }).forEach(function (customer) {                                                                               // 341
            var updatedUsers = _.map(customer.users, function (user) {                                                 // 345
                if (user) {                                                                                            // 346
                    user.currentlyLoggedIn = false;                                                                    // 347
                } // and just logout everybody in the user list                                                        // 348
                                                                                                                       //
                                                                                                                       //
                logoutUser(Meteor.userId(), user.name);                                                                // 351
                return user;                                                                                           // 352
            });                                                                                                        // 353
                                                                                                                       //
            Customers.update(customer._id, {                                                                           // 355
                $set: {                                                                                                // 356
                    users: updatedUsers                                                                                // 357
                }                                                                                                      // 356
            });                                                                                                        // 355
        }); // logoutUser(Meteor.userId(), Meteor.userId()); //logout the user for the slide generator                 // 360
    },                                                                                                                 // 362
    logoutPresentationUser: function (UDC, name) {                                                                     // 363
        console.log('logoutPresentationUser(UDC, name)', UDC, name);                                                   // 364
        logoutUser(UDC, name, Meteor.settings.public.slideGenerator.virtualProxy);                                     // 365
    },                                                                                                                 // 366
    logoutVirtualProxyClientUsageUser: function (UDC, name) {                                                          // 367
        console.log('logout virtual proxy client usuage User(UDC, name)', UDC, name);                                  // 368
        logoutUser(UDC, name, Meteor.settings.public.virtualProxyClientUsage);                                         // 369
    },                                                                                                                 // 370
    simulateUserLogin: function (name) {                                                                               // 371
        check(name, String);                                                                                           // 372
        Meteor.call('resetLoggedInUser'); // console.log('*** Reset all logged in user done, now write in our local database the name for the current simulated user: generationUserId: ' + Meteor.userId() + ' & users.name:' + name);
                                                                                                                       //
        var query = [{                                                                                                 // 375
            'generationUserId': Meteor.userId(),                                                                       // 376
            'users.name': name                                                                                         // 377
        }, {                                                                                                           // 375
            $set: {                                                                                                    // 379
                'users.$.currentlyLoggedIn': true                                                                      // 380
            }                                                                                                          // 379
        }];                                                                                                            // 378
        Customers.update({                                                                                             // 384
            'generationUserId': Meteor.userId(),                                                                       // 385
            'users.name': name                                                                                         // 386
        }, {                                                                                                           // 384
            $set: {                                                                                                    // 388
                'users.$.currentlyLoggedIn': true                                                                      // 389
            }                                                                                                          // 388
        }, {}, function (error, numberAffectedDocuments) {                                                             // 387
            if (numberAffectedDocuments === 0) {                                                                       // 392
                // if nothing is updated, insert some dummy customers                                                  // 392
                // console.log('simulateUserLogin numberAffectedDocuments: ', numberAffectedDocuments);                // 393
                // name does not yet exist in the customers created by the current demo user. So insert our dummy customers.numberAffectedDocuments
                insertDummyCustomers(Meteor.userId());                                                                 // 395
                Customers.update({                                                                                     // 396
                    'generationUserId': Meteor.userId(),                                                               // 397
                    'users.name': name                                                                                 // 398
                }, {                                                                                                   // 396
                    $set: {                                                                                            // 400
                        'users.$.currentlyLoggedIn': true                                                              // 401
                    }                                                                                                  // 400
                });                                                                                                    // 399
            }                                                                                                          // 404
        });                                                                                                            // 405
    }                                                                                                                  // 406
});                                                                                                                    // 224
Meteor.methods({                                                                                                       // 409
    'resetPasswordOrCreateUser': function (user) {                                                                     // 410
        try {                                                                                                          // 411
            // console.log('reset the password of the user before logging him in');                                    // 412
            check(user.email, String);                                                                                 // 413
            check(user.password, String);                                                                              // 414
        } catch (err) {                                                                                                // 415
            throw new Meteor.Error('Missing Qlik.com user data', 'The user misses important information from its Qlik.com account');
        }                                                                                                              // 418
                                                                                                                       //
        var userExists = Accounts.findUserByEmail(user.email);                                                         // 419
        var userId = {};                                                                                               // 420
                                                                                                                       //
        if (user.email === 'mbj@qlik.com') {                                                                           // 421
            throw new Meteor.Error('Admin account', 'Please login as a different user on Qlik.com');                   // 422
        } else if (userExists) {                                                                                       // 423
            // console.log('########### found user, now reset his password: ', userExists);                            // 424
            userId = userExists._id;                                                                                   // 425
            Accounts.setPassword(userId, user.password);                                                               // 426
        } else {                                                                                                       // 427
            userId = Accounts.createUser(user);                                                                        // 428
            Roles.addUsersToRoles(userId, ['untrusted'], 'GLOBAL'); // https://github.com/alanning/meteor-roles        // 429
        }                                                                                                              // 430
                                                                                                                       //
        return userId;                                                                                                 // 431
    }                                                                                                                  // 432
});                                                                                                                    // 409
                                                                                                                       //
function insertDummyCustomers(generationUserId) {                                                                      // 435
    // console.log('insertDummyCustomers called for generationUserId: ', generationUserId);                            // 436
    _.each(dummyCustomers, function (customer) {                                                                       // 437
        customer.generationUserId = generationUserId;                                                                  // 438
        Customers.insert(customer);                                                                                    // 439
    });                                                                                                                // 440
} //Each proxy has its own session cookie, so you have to logout the users per proxy used.                             // 441
                                                                                                                       //
                                                                                                                       //
function logoutUser(UDC, name, proxy) {                                                                                // 444
    if (!proxy) {                                                                                                      // 445
        proxy = senseConfig.virtualProxyClientUsage;                                                                   // 446
    } // use use the proxy for the dummy users from step 4                                                             // 447
    // console.log('******** QPS Functions: logout the current: ' + name + ' on proxy: ' + proxy);                     // 448
                                                                                                                       //
                                                                                                                       //
    if (name) {                                                                                                        // 450
        // //console.log('Make QPS-logout call, We authenticate to Sense using the options (including a certificate) object in the HTTPs call: '); //, configCerticates);
        // //console.log('Meteor tries to logout the user on this URL: https://' + senseConfig.SenseServerInternalLanIP + ':4243/qps/' + senseConfig.virtualProxyClientUsage + '/user/' + senseConfig.UDC + '/' + name);
        try {                                                                                                          // 453
            var call = {};                                                                                             // 454
            call.action = 'Logout user: ' + name;                                                                      // 455
            call.url = gitHubLinks.logoutUser;                                                                         // 456
            call.request = 'https://' + senseConfig.SenseServerInternalLanIP + ':4243/qps/' + proxy + '/user/' + UDC + '/' + name + '?xrfkey=' + senseConfig.xrfkey;
            call.response = HTTP.call('DELETE', call.request, {                                                        // 458
                'npmRequestOptions': configCerticates                                                                  // 459
            });                                                                                                        // 458
            REST_Log(call, UDC); // the UDC is the by definition the userId of meteor in our approach...               // 462
            // console.log('The HTTP REQUEST to Sense QPS API:', call.request);                                        // 463
            // console.log('The HTTP RESPONSE from Sense QPS API: ', call.response);                                   // 464
        } catch (err) {                                                                                                // 465
            console.error(err);                                                                                        // 466
            throw new Meteor.Error('Logout user failed', err.message);                                                 // 467
        }                                                                                                              // 468
    }                                                                                                                  // 469
}                                                                                                                      // 470
                                                                                                                       //
function getRedirectURL(passport, proxyRestUri, targetId, generationUserId) {                                          // 473
    check(passport, Object);                                                                                           // 474
    check(proxyRestUri, String);                                                                                       // 475
    check(targetId, String);                                                                                           // 476
    check(generationUserId, String); // console.log('entered server side requestTicket module for user and passport', passport, proxyRestUri);
    // see https://help.qlik.com/en-US/sense-developer/3.0/Subsystems/ProxyServiceAPI/Content/ProxyServiceAPI/ProxyServiceAPI-ProxyServiceAPI-Authentication-Ticket-Add.htm
                                                                                                                       //
    var ticketRequestBody = passport;                                                                                  // 482
    ticketRequestBody.TargetId = targetId; // console.log('The passport for requesting a ticket: ', passport);         // 483
                                                                                                                       //
    try {                                                                                                              // 486
        var call = {};                                                                                                 // 487
        call.action = 'STEP 5: Request ticket at endpoint received from Sense: ' + proxyRestUri;                       // 488
        call.request = proxyRestUri + 'ticket'; // we use the proxy rest uri which we got from the redirect from the proxy (the first bounce)
                                                                                                                       //
        call.url = gitHubLinks.requestTicket;                                                                          // 490
        call.response = HTTP.call('POST', call.request, {                                                              // 491
            'npmRequestOptions': configCerticates,                                                                     // 492
            headers: authHeaders,                                                                                      // 493
            params: {                                                                                                  // 494
                'xrfkey': senseConfig.xrfkey                                                                           // 495
            },                                                                                                         // 494
            data: passport // the user and group info for which we want to create a ticket                             // 497
                                                                                                                       //
        });                                                                                                            // 491
        REST_Log(call, generationUserId);                                                                              // 499
    } catch (err) {                                                                                                    // 500
        console.error('REST call to request a ticket failed', err);                                                    // 501
        throw new Meteor.Error('Request ticket failed', err.message);                                                  // 502
    } // console.log('The HTTP REQUEST to Sense QPS API:', call.request);                                              // 503
    // console.log('The HTTP RESPONSE from Sense QPS API: ', call.response);                                           // 506
                                                                                                                       //
                                                                                                                       //
    var ticketResponse = call.response.data;                                                                           // 507
    call.action = 'STEP 6: Use response from our ticket request to create redirect url';                               // 508
    call.request = 'Use the redirect url we got back and the ticket string to make a redirect url for the client. Format: ' + ticketResponse.TargetUri + '?QlikTicket=' + ticketResponse.Ticket + '. JSON received: ' + ticketResponse;
    REST_Log(call); // Build redirect URL for the client including the ticket                                          // 510
                                                                                                                       //
    if (ticketResponse.TargetUri.indexOf('?') > 0) {                                                                   // 514
        redirectURI = ticketResponse.TargetUri + '&QlikTicket=' + ticketResponse.Ticket;                               // 515
    } else {                                                                                                           // 516
        redirectURI = ticketResponse.TargetUri + '?QlikTicket=' + ticketResponse.Ticket;                               // 517
    }                                                                                                                  // 518
                                                                                                                       //
    if (!redirectURI) {                                                                                                // 520
        redirectURI = 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + senseConfig.virtualProxyClientUsage + '/' + hub;
    } // console.log('Meteor server side created this redirect url: ', redirectURI);                                   // 522
                                                                                                                       //
                                                                                                                       //
    return redirectURI;                                                                                                // 524
}                                                                                                                      // 525
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSAPI.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSAPI.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var module1 = module;                                                                                                  // 1
module1.export({                                                                                                       // 1
    myQRS: function () {                                                                                               // 1
        return myQRS;                                                                                                  // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module1.watch(require("meteor/meteor"), {                                                                              // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var http = void 0;                                                                                                     // 1
module1.watch(require("meteor/meteor"), {                                                                              // 1
    http: function (v) {                                                                                               // 1
        http = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var configCerticates = void 0,                                                                                         // 1
    senseConfig = void 0,                                                                                              // 1
    authHeaders = void 0,                                                                                              // 1
    qrsSrv = void 0;                                                                                                   // 1
module1.watch(require("/imports/api/config"), {                                                                        // 1
    configCerticates: function (v) {                                                                                   // 1
        configCerticates = v;                                                                                          // 1
    },                                                                                                                 // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrsSrv: function (v) {                                                                                             // 1
        qrsSrv = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
var myQRS = function () {                                                                                              // 10
    function myQRSMain() {                                                                                             // 10
        this.get = function () {                                                                                       // 12
            function get(path) {                                                                                       // 12
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};                   // 12
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                     // 12
                var endpoint = checkPath(path);                                                                        // 13
                console.log('QRS module received GET request for endpoint', endpoint); // copy the params to one object
                                                                                                                       //
                var newParams = Object.assign({                                                                        // 17
                    xrfkey: senseConfig.xrfkey                                                                         // 17
                }, params);                                                                                            // 17
                                                                                                                       //
                try {                                                                                                  // 18
                    var response = HTTP.get(endpoint, {                                                                // 19
                        npmRequestOptions: configCerticates,                                                           // 20
                        params: newParams,                                                                             // 21
                        data: {}                                                                                       // 22
                    });                                                                                                // 19
                    return response.data;                                                                              // 24
                } catch (err) {                                                                                        // 25
                    var error = 'QRS HTTP GET FAILED FOR ' + endpoint;                                                 // 26
                    console.error(err);                                                                                // 27
                    throw new Meteor.Error(500, error);                                                                // 28
                }                                                                                                      // 29
            }                                                                                                          // 30
                                                                                                                       //
            return get;                                                                                                // 12
        }();                                                                                                           // 12
                                                                                                                       //
        this.post = function () {                                                                                      // 32
            function post(path) {                                                                                      // 32
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};                   // 32
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                     // 32
                var endpoint = checkPath(path); // copy the params to one object                                       // 33
                                                                                                                       //
                var newParams = Object.assign({                                                                        // 36
                    'xrfkey': senseConfig.xrfkey                                                                       // 36
                }, params);                                                                                            // 36
                                                                                                                       //
                try {                                                                                                  // 37
                    var response = HTTP.post(endpoint, {                                                               // 38
                        npmRequestOptions: configCerticates,                                                           // 39
                        params: newParams,                                                                             // 40
                        data: data                                                                                     // 41
                    });                                                                                                // 38
                    return response.data;                                                                              // 43
                } catch (err) {                                                                                        // 44
                    console.error('HTTP POST FAILED FOR ' + endpoint, err);                                            // 45
                }                                                                                                      // 46
            }                                                                                                          // 47
                                                                                                                       //
            return post;                                                                                               // 32
        }();                                                                                                           // 32
                                                                                                                       //
        this.del = function () {                                                                                       // 49
            function del(path) {                                                                                       // 49
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};                   // 49
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                     // 49
                var endpoint = checkPath(path);                                                                        // 50
                console.log('endpoint', endpoint);                                                                     // 51
                console.log('data', data); // copy the params to one object.                                           // 52
                                                                                                                       //
                var newParams = Object.assign({                                                                        // 55
                    xrfkey: senseConfig.xrfkey                                                                         // 55
                }, params);                                                                                            // 55
                                                                                                                       //
                try {                                                                                                  // 56
                    var response = HTTP.del(endpoint, {                                                                // 57
                        npmRequestOptions: configCerticates,                                                           // 58
                        params: newParams,                                                                             // 59
                        data: data                                                                                     // 60
                    }); // console.log('response', response)                                                           // 57
                                                                                                                       //
                    return response.data;                                                                              // 63
                } catch (err) {                                                                                        // 64
                    console.error('QRS HTTP DEL FAILED FOR ' + endpoint, err);                                         // 65
                }                                                                                                      // 66
            }                                                                                                          // 67
                                                                                                                       //
            return del;                                                                                                // 49
        }();                                                                                                           // 49
                                                                                                                       //
        this.put = function () {                                                                                       // 69
            function put(path) {                                                                                       // 69
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};                   // 69
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                     // 69
                var endpoint = checkPath(path); // copy the params to one object                                       // 70
                                                                                                                       //
                var newParams = Object.assign({                                                                        // 73
                    'xrfkey': senseConfig.xrfkey                                                                       // 73
                }, params);                                                                                            // 73
                                                                                                                       //
                try {                                                                                                  // 74
                    var response = HTTP.put(endpoint, {                                                                // 75
                        npmRequestOptions: configCerticates,                                                           // 76
                        params: newParams,                                                                             // 77
                        data: data                                                                                     // 78
                    });                                                                                                // 75
                    return response.data;                                                                              // 80
                } catch (err) {                                                                                        // 81
                    console.error('HTTP PUT FAILED FOR ' + endpoint, err);                                             // 82
                }                                                                                                      // 83
            }                                                                                                          // 84
                                                                                                                       //
            return put;                                                                                                // 69
        }();                                                                                                           // 69
    }                                                                                                                  // 86
                                                                                                                       //
    return myQRSMain;                                                                                                  // 10
}();                                                                                                                   // 10
                                                                                                                       //
function checkPath(path) {                                                                                             // 88
    try {                                                                                                              // 89
        check(path, String);                                                                                           // 90
    } catch (err) {                                                                                                    // 91
        throw Error("QRS module can use path: " + path + " for the QRS API, settings.json correct?");                  // 92
    }                                                                                                                  // 93
                                                                                                                       //
    return qrsSrv + path;                                                                                              // 94
}                                                                                                                      // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsApp.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsApp.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
    uploadAndPublishTemplateApps: function () {                                                                        // 1
        return uploadAndPublishTemplateApps;                                                                           // 1
    },                                                                                                                 // 1
    generateStreamAndApp: function () {                                                                                // 1
        return generateStreamAndApp;                                                                                   // 1
    },                                                                                                                 // 1
    setAppIDs: function () {                                                                                           // 1
        return setAppIDs;                                                                                              // 1
    },                                                                                                                 // 1
    createAppConnection: function () {                                                                                 // 1
        return createAppConnection;                                                                                    // 1
    },                                                                                                                 // 1
    copyApp: function () {                                                                                             // 1
        return copyApp;                                                                                                // 1
    },                                                                                                                 // 1
    getApps: function () {                                                                                             // 1
        return getApps;                                                                                                // 1
    },                                                                                                                 // 1
    deleteApp: function () {                                                                                           // 1
        return deleteApp;                                                                                              // 1
    },                                                                                                                 // 1
    publishApp: function () {                                                                                          // 1
        return publishApp;                                                                                             // 1
    },                                                                                                                 // 1
    importApp: function () {                                                                                           // 1
        return importApp;                                                                                              // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var http = void 0;                                                                                                     // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    http: function (v) {                                                                                               // 1
        http = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var Apps = void 0,                                                                                                     // 1
    TemplateApps = void 0,                                                                                             // 1
    GeneratedResources = void 0;                                                                                       // 1
module.watch(require("/imports/api/apps"), {                                                                           // 1
    Apps: function (v) {                                                                                               // 1
        Apps = v;                                                                                                      // 1
    },                                                                                                                 // 1
    TemplateApps: function (v) {                                                                                       // 1
        TemplateApps = v;                                                                                              // 1
    },                                                                                                                 // 1
    GeneratedResources: function (v) {                                                                                 // 1
        GeneratedResources = v;                                                                                        // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var QSStream = void 0;                                                                                                 // 1
module.watch(require("/imports/api/server/QRSFunctionsStream"), {                                                      // 1
    "*": function (v) {                                                                                                // 1
        QSStream = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var gitHubLinks = void 0;                                                                                              // 1
module.watch(require("/imports/ui/UIHelpers"), {                                                                       // 1
    gitHubLinks: function (v) {                                                                                        // 1
        gitHubLinks = v;                                                                                               // 1
    }                                                                                                                  // 1
}, 4);                                                                                                                 // 1
var Streams = void 0;                                                                                                  // 1
module.watch(require("/imports/api/streams"), {                                                                        // 1
    Streams: function (v) {                                                                                            // 1
        Streams = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 5);                                                                                                                 // 1
var Customers = void 0;                                                                                                // 1
module.watch(require("/imports/api/customers"), {                                                                      // 1
    Customers: function (v) {                                                                                          // 1
        Customers = v;                                                                                                 // 1
    }                                                                                                                  // 1
}, 6);                                                                                                                 // 1
var createVirtualProxies = void 0;                                                                                     // 1
module.watch(require("/imports/api/server/QPSFunctions"), {                                                            // 1
    createVirtualProxies: function (v) {                                                                               // 1
        createVirtualProxies = v;                                                                                      // 1
    }                                                                                                                  // 1
}, 7);                                                                                                                 // 1
                                                                                                                       //
var qlikHDRServer = void 0,                                                                                            // 1
    senseConfig = void 0,                                                                                              // 1
    enigmaServerConfig = void 0,                                                                                       // 1
    authHeaders = void 0,                                                                                              // 1
    qrsSrv = void 0,                                                                                                   // 1
    qrs = void 0,                                                                                                      // 1
    QRSconfig = void 0,                                                                                                // 1
    _SSBIApp = void 0,                                                                                                 // 1
    configCerticates = void 0,                                                                                         // 1
    _slideGeneratorAppId = void 0;                                                                                     // 1
                                                                                                                       //
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    qlikHDRServer: function (v) {                                                                                      // 1
        qlikHDRServer = v;                                                                                             // 1
    },                                                                                                                 // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    enigmaServerConfig: function (v) {                                                                                 // 1
        enigmaServerConfig = v;                                                                                        // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrsSrv: function (v) {                                                                                             // 1
        qrsSrv = v;                                                                                                    // 1
    },                                                                                                                 // 1
    qrs: function (v) {                                                                                                // 1
        qrs = v;                                                                                                       // 1
    },                                                                                                                 // 1
    QRSconfig: function (v) {                                                                                          // 1
        QRSconfig = v;                                                                                                 // 1
    },                                                                                                                 // 1
    _SSBIApp: function (v) {                                                                                           // 1
        _SSBIApp = v;                                                                                                  // 1
    },                                                                                                                 // 1
    configCerticates: function (v) {                                                                                   // 1
        configCerticates = v;                                                                                          // 1
    },                                                                                                                 // 1
    _slideGeneratorAppId: function (v) {                                                                               // 1
        _slideGeneratorAppId = v;                                                                                      // 1
    }                                                                                                                  // 1
}, 8);                                                                                                                 // 1
var APILogs = void 0,                                                                                                  // 1
    REST_Log = void 0;                                                                                                 // 1
module.watch(require("/imports/api/APILogs"), {                                                                        // 1
    APILogs: function (v) {                                                                                            // 1
        APILogs = v;                                                                                                   // 1
    },                                                                                                                 // 1
    REST_Log: function (v) {                                                                                           // 1
        REST_Log = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 9);                                                                                                                 // 1
var lodash = void 0;                                                                                                   // 1
module.watch(require("lodash"), {                                                                                      // 1
    "default": function (v) {                                                                                          // 1
        lodash = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 10);                                                                                                                // 1
_ = lodash; //                                                                                                         // 48
// ─── INSTALL NPM MODULES ────────────────────────────────────────────────────────                                    // 51
//                                                                                                                     // 52
                                                                                                                       //
var path = require('path');                                                                                            // 53
                                                                                                                       //
var fs = require('fs-extra');                                                                                          // 54
                                                                                                                       //
var enigma = require('enigma.js'); // var QRS = require('qrs');                                                        // 55
                                                                                                                       //
                                                                                                                       //
var promise = require('bluebird');                                                                                     // 57
                                                                                                                       //
var request = require('request'); //                                                                                   // 58
// ─── UPLOAD APPS FOR THE INITIAL SETUP OF QLIK SENSE ─────────────────────────                                       // 61
//                                                                                                                     // 62
// UPLOAD TEMPLATES APPS FROM FOLDER, AND PUBLISH INTO THE TEMPLATES STREAM                                            // 65
                                                                                                                       //
                                                                                                                       //
function uploadAndPublishTemplateApps() {                                                                              // 66
    var _this = this;                                                                                                  // 66
                                                                                                                       //
    var newFolder, everyOneStreamId, templateStreamId, APIAppsStreamID, appsInFolder;                                  // 66
    return _regenerator2.default.async(function () {                                                                   // 66
        function uploadAndPublishTemplateApps$(_context2) {                                                            // 66
            while (1) {                                                                                                // 66
                switch (_context2.prev = _context2.next) {                                                             // 66
                    case 0:                                                                                            // 66
                        console.log('------------------------------------');                                           // 67
                        console.log('uploadAndPublishTemplateApps');                                                   // 68
                        console.log('------------------------------------');                                           // 69
                        newFolder = path.join(Meteor.settings.broker.automationBaseFolder, 'apps');                    // 70
                        console.log('uploadAndPublishTemplateApps: Read all files in the template apps folder "' + newFolder + '" and upload them to Qlik Sense.'); //GET THE ID OF THE IMPORTANT STREAMS (streams that QRSMeteor needs)
                                                                                                                       //
                        everyOneStreamId = QSStream.getStreamByName(Meteor.settings.public.EveryoneAppStreamName).id;  // 74
                        templateStreamId = QSStream.getStreamByName(Meteor.settings.public.TemplateAppStreamName).id;  // 75
                        APIAppsStreamID = QSStream.getStreamByName(Meteor.settings.public.APIAppStreamName).id;        // 76
                        _context2.prev = 8;                                                                            // 66
                        check(newFolder, String);                                                                      // 78
                        check(everyOneStreamId, String);                                                               // 79
                        check(templateStreamId, String);                                                               // 80
                        check(APIAppsStreamID, String);                                                                // 81
                        _context2.next = 19;                                                                           // 66
                        break;                                                                                         // 66
                                                                                                                       //
                    case 15:                                                                                           // 66
                        _context2.prev = 15;                                                                           // 66
                        _context2.t0 = _context2["catch"](8);                                                          // 66
                        console.error('You did not specify the templateAppsFrom, everyone, api apps or template stream name in the settings.json file?');
                        throw new Meteor.Error('Missing Settings', 'You did not specify the everone, api apps or template stream name in the settings.json file?');
                                                                                                                       //
                    case 19:                                                                                           // 66
                        _context2.next = 21;                                                                           // 66
                        return _regenerator2.default.awrap(fs.readdir(newFolder));                                     // 66
                                                                                                                       //
                    case 21:                                                                                           // 66
                        appsInFolder = _context2.sent;                                                                 // 88
                        _context2.next = 24;                                                                           // 66
                        return _regenerator2.default.awrap(Promise.all(appsInFolder.map(function () {                  // 66
                            function _callee(QVF) {                                                                    // 91
                                var appName, filePath, appId, copiedAppId;                                             // 91
                                return _regenerator2.default.async(function () {                                       // 91
                                    function _callee$(_context) {                                                      // 91
                                        while (1) {                                                                    // 91
                                            switch (_context.prev = _context.next) {                                   // 91
                                                case 0:                                                                // 91
                                                    _context.prev = 0;                                                 // 91
                                                    //GET THE NAME OF THE APP AND CREATE A FILEPATH                    // 93
                                                    appName = QVF.substr(0, QVF.indexOf('.'));                         // 94
                                                    filePath = path.join(newFolder, QVF); //ONLY UPLOAD APPS IF THEY DO NOT ALREADY EXIST
                                                                                                                       //
                                                    if (getApps(appName).length) {                                     // 91
                                                        _context.next = 10;                                            // 91
                                                        break;                                                         // 91
                                                    }                                                                  // 91
                                                                                                                       //
                                                    _context.next = 6;                                                 // 91
                                                    return _regenerator2.default.awrap(uploadApp(filePath, appName));  // 91
                                                                                                                       //
                                                case 6:                                                                // 91
                                                    appId = _context.sent;                                             // 100
                                                                                                                       //
                                                    //BASED ON THE APP WE WANT TO PUBLISH IT INTO A DIFFERENT STREAM                      
                                                    if (appName === 'SSBI') {                                          // 103
                                                        //should be published in the everyone stream                   // 103
                                                        _SSBIApp = appId; // for the client side HTML/IFrames etc.                                
                                                                                                                       //
                                                        publishApp(appId, appName, everyOneStreamId);                  // 105
                                                    } else if (appName === 'Sales') {                                  // 106
                                                        //THIS ONE NEEDS TO BE COPIED AND PUBLISHED INTO 2 STREAMS: AS TEMPLATE AND FOR THE EVERYONE STREAM.
                                                        publishApp(appId, appName, everyOneStreamId);                  // 107
                                                        copiedAppId = copyApp(appId, appName);                         // 108
                                                        publishApp(copiedAppId, appName, templateStreamId);            // 109
                                                    } else if (appName === 'Slide generator') {                        // 110
                                                        _slideGeneratorAppId = appId, publishApp(appId, appName, APIAppsStreamID);
                                                    } else {                                                           // 113
                                                        //Insert into template apps stream                             // 114
                                                        publishApp(appId, appName, templateStreamId);                  // 115
                                                    }                                                                  // 116
                                                                                                                       //
                                                    _context.next = 11;                                                // 91
                                                    break;                                                             // 91
                                                                                                                       //
                                                case 10:                                                               // 91
                                                    console.log('App ' + appName + ' already exists in Qlik Sense');   // 118
                                                                                                                       //
                                                case 11:                                                               // 91
                                                    ;                                                                  // 119
                                                    _context.next = 18;                                                // 91
                                                    break;                                                             // 91
                                                                                                                       //
                                                case 14:                                                               // 91
                                                    _context.prev = 14;                                                // 91
                                                    _context.t0 = _context["catch"](0);                                // 91
                                                    console.error(_context.t0);                                        // 121
                                                    throw new Meteor.Error('Unable to upload the app to Qlik Sense. ', _context.t0);
                                                                                                                       //
                                                case 18:                                                               // 91
                                                case "end":                                                            // 91
                                                    return _context.stop();                                            // 91
                                            }                                                                          // 91
                                        }                                                                              // 91
                                    }                                                                                  // 91
                                                                                                                       //
                                    return _callee$;                                                                   // 91
                                }(), null, _this, [[0, 14]]);                                                          // 91
                            }                                                                                          // 91
                                                                                                                       //
                            return _callee;                                                                            // 91
                        }())));                                                                                        // 91
                                                                                                                       //
                    case 24:                                                                                           // 66
                        return _context2.abrupt("return", _context2.sent);                                             // 66
                                                                                                                       //
                    case 25:                                                                                           // 66
                    case "end":                                                                                        // 66
                        return _context2.stop();                                                                       // 66
                }                                                                                                      // 66
            }                                                                                                          // 66
        }                                                                                                              // 66
                                                                                                                       //
        return uploadAndPublishTemplateApps$;                                                                          // 66
    }(), null, this, [[8, 15]]);                                                                                       // 66
}                                                                                                                      // 66
                                                                                                                       //
function generateStreamAndApp(customers, generationUserId) {                                                           // 127
    // console.log('METHOD called: generateStreamAndApp for the template apps as stored in the database of the fictive OEM');
    var templateApps = checkTemplateAppExists(generationUserId); //is a template app selected, and does the guid still exist in Sense? if yes, return the valid templates
                                                                                                                       //
    checkCustomersAreSelected(customers); //have we selected a  customer to do the generation for?                     // 131
                                                                                                                       //
    for (var _iterator = customers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;                                                                                                      // 132
                                                                                                                       //
        if (_isArray) {                                                                                                // 132
            if (_i >= _iterator.length) break;                                                                         // 132
            _ref = _iterator[_i++];                                                                                    // 132
        } else {                                                                                                       // 132
            _i = _iterator.next();                                                                                     // 132
            if (_i.done) break;                                                                                        // 132
            _ref = _i.value;                                                                                           // 132
        }                                                                                                              // 132
                                                                                                                       //
        var customer = _ref;                                                                                           // 132
                                                                                                                       //
        for (var _iterator2 = templateApps, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;                                                                                                 // 133
                                                                                                                       //
            if (_isArray2) {                                                                                           // 133
                if (_i2 >= _iterator2.length) break;                                                                   // 133
                _ref2 = _iterator2[_i2++];                                                                             // 133
            } else {                                                                                                   // 133
                _i2 = _iterator2.next();                                                                               // 133
                if (_i2.done) break;                                                                                   // 133
                _ref2 = _i2.value;                                                                                     // 133
            }                                                                                                          // 133
                                                                                                                       //
            var _templateApp = _ref2;                                                                                  // 133
            generateAppForTemplate(_templateApp, customer, generationUserId);                                          // 134
        }                                                                                                              // 135
    }                                                                                                                  // 136
                                                                                                                       //
    ;                                                                                                                  // 136
}                                                                                                                      // 137
                                                                                                                       //
;                                                                                                                      // 137
                                                                                                                       //
function setAppIDs(params) {                                                                                           // 139
    console.log('------------------------------------');                                                               // 140
    console.log('SET APP IDs');                                                                                        // 141
    console.log('------------------------------------');                                                               // 142
                                                                                                                       //
    try {                                                                                                              // 143
        console.log('check if all settings.json parameters are set...');                                               // 144
        check(Meteor.settings.public.slideGenerator, {                                                                 // 145
            name: String,                                                                                              // 146
            stream: String,                                                                                            // 147
            selectionSheet: String,                                                                                    // 148
            dataObject: String,                                                                                        // 149
            slideObject: String,                                                                                       // 150
            virtualProxy: String                                                                                       // 151
        });                                                                                                            // 145
        check(Meteor.settings.public.SSBI, {                                                                           // 153
            name: String,                                                                                              // 154
            stream: String,                                                                                            // 155
            sheetId: String                                                                                            // 156
        });                                                                                                            // 153
    } catch (err) {                                                                                                    // 158
        console.error('Missing parameters in your settings.json file for the SSBI or slidegenerator...', err);         // 159
    }                                                                                                                  // 160
                                                                                                                       //
    try {                                                                                                              // 162
        var slideGeneratorApps = getApps(Meteor.settings.public.slideGenerator.name, Meteor.settings.public.slideGenerator.stream);
        var SSBIApps = getApps(Meteor.settings.public.SSBI.name, Meteor.settings.public.SSBI.stream);                  // 164
                                                                                                                       //
        if (slideGeneratorApps.length > 1) {                                                                           // 165
            throw new Error('Can not automatically set the app ID for the slide generator. You have not one but you have multiple slide generator apps under the name ' + Meteor.settings.public.slideGenerator.name + ' in the stream ' + Meteor.settings.public.slideGenerator.stream);
        }                                                                                                              // 167
                                                                                                                       //
        if (SSBIApps.length > 1) {                                                                                     // 168
            throw new Error('Can not automatically set the app ID for the Self Service BI app. You have not one but you have multiple Self Service apps under the name ' + Meteor.settings.public.SSBI.name + ' in the stream ' + Meteor.settings.public.SSBI.stream);
        }                                                                                                              // 170
                                                                                                                       //
        senseConfig.SSBIApp = SSBIApps[0].id; //                                                                       // 171
                                                                                                                       //
        console.log('The SSBI app id has been set to ', senseConfig.SSBIApp);                                          // 172
        senseConfig.slideGeneratorAppId = slideGeneratorApps[0].id;                                                    // 174
        console.log('The slide generator app id has been set to ', senseConfig.slideGeneratorAppId);                   // 175
    } catch (err) {                                                                                                    // 176
        console.error(err);                                                                                            // 177
        throw new Meteor.Error('The slideGenerator or Self Service BI app can not be found in Qlik sense, or you did not have all parameters set as defined in the the settings.json example file.', err);
    }                                                                                                                  // 179
}                                                                                                                      // 180
                                                                                                                       //
function generateAppForTemplate(templateApp, customer, generationUserId) {                                             // 183
    console.log('--------------------------GENERATE APPS FOR TEMPLATE'); // console.log(templateApp);                  // 184
    // console.log('############## START CREATING THE TEMPLATE ' + templateApp.name + ' FOR THIS CUSTOMER: ' + customer.name + ' FOR generationUserId: ' + generationUserId);
                                                                                                                       //
    var call = {};                                                                                                     // 187
    call.action = 'Start of generation of app ' + templateApp.name + ' for ' + customer.name;                          // 188
    call.createdBy = generationUserId;                                                                                 // 189
    call.request = 'Start creating app ' + templateApp.name + ' for customer ' + customer.name;                        // 190
    REST_Log(call, generationUserId);                                                                                  // 191
                                                                                                                       //
    try {                                                                                                              // 193
        var streamId = checkStreamStatus(customer, generationUserId); //create a stream for the customer if it not already exists 
                                                                                                                       //
        var customerDataFolder = createDirectory(customer.name); //for data like XLS/qvd specific for a customer       // 195
                                                                                                                       //
        var newAppId = copyApp(templateApp.id, templateApp.name, generationUserId);                                    // 196
        var result = reloadAppAndReplaceScriptviaEngine(newAppId, templateApp.name, streamId, customer, customerDataFolder, '', generationUserId);
        var publishedAppId = publishApp(newAppId, templateApp.name, streamId, customer.name, generationUserId); //logging only
                                                                                                                       //
        var _call = {};                                                                                                // 201
        _call.action = 'Finished generation for ' + customer.name;                                                     // 202
        _call.request = templateApp.name + ' has been created and reloaded with data from the ' + customer.name + ' database';
        REST_Log(_call, generationUserId);                                                                             // 204
        console.log('############## FINISHED CREATING THE TEMPLATE ' + templateApp.name + ' FOR THIS CUSTOMER: ' + customer.name);
        GeneratedResources.insert({                                                                                    // 206
            'generationUserId': generationUserId,                                                                      // 207
            'customer': customer.name,                                                                                 // 208
            'streamId': streamId,                                                                                      // 209
            'appId': newAppId                                                                                          // 210
        });                                                                                                            // 206
    } catch (err) {                                                                                                    // 212
        console.error('Failed to generate...', err);                                                                   // 213
        throw new Meteor.Error('Generation failed', 'The server has an internal error, please check the server command logs');
    }                                                                                                                  // 215
                                                                                                                       //
    return;                                                                                                            // 216
}                                                                                                                      // 217
                                                                                                                       //
; //Example to demo that you can also use the Engine API to get all the apps, or reload an app, set the script etc.    // 217
//source based on loic's work: https://github.com/pouc/qlik-elastic/blob/master/app.js                                 // 221
                                                                                                                       //
function reloadAppAndReplaceScriptviaEngine(appId, newAppName, streamId, customer, customerDataFolder, scriptReplace, generationUserId) {
    var config, qix, call, qConnectionId, script, replaceScript;                                                       // 222
    return _regenerator2.default.async(function () {                                                                   // 222
        function reloadAppAndReplaceScriptviaEngine$(_context3) {                                                      // 222
            while (1) {                                                                                                // 222
                switch (_context3.prev = _context3.next) {                                                             // 222
                    case 0:                                                                                            // 222
                        replaceScript = function () {                                                                  // 298
                            function replaceScript(script) {                                                           // 222
                                //var scriptMarker = '§dummyDatabaseString§';                                          // 299
                                // if you want to replace the database connection per customer use the script below.   // 300
                                //return doc.setScript(script.replace(scriptMarker, scriptReplace)).then(function (result) {
                                //you can also change the sense database connection: https://github.com/mindspank/qsocks/blob/master/examples/App/create-dataconnection.js
                                return script;                                                                         // 303
                            }                                                                                          // 304
                                                                                                                       //
                            return replaceScript;                                                                      // 222
                        }();                                                                                           // 222
                                                                                                                       //
                        console.log('--------------------------REPLACE SCRIPT AND RELOAD APP');                        // 223
                        check(appId, String);                                                                          // 224
                        check(customer.name, String);                                                                  // 225
                        check(customerDataFolder, String);                                                             // 226
                        check(generationUserId, String); //set the app ID to be used in the enigma connection to the engine API
                                                                                                                       //
                        config = Object.assign({}, enigmaServerConfig);                                                // 230
                        config.appId = appId;                                                                          // 231
                        _context3.prev = 8;                                                                            // 222
                        _context3.next = 11;                                                                           // 222
                        return _regenerator2.default.awrap(enigma.getService('qix', config));                          // 222
                                                                                                                       //
                    case 11:                                                                                           // 222
                        qix = _context3.sent;                                                                          // 235
                        call = {};                                                                                     // 236
                        call.action = 'Connect to Qlik Sense';                                                         // 237
                        call.request = 'Connect to Engine API (using Enigma.js) using an appId: ' + appId;             // 238
                        call.url = gitHubLinks.replaceAndReloadApp;                                                    // 239
                        REST_Log(call, generationUserId);                                                              // 240
                        _context3.prev = 17;                                                                           // 222
                        //create folder connection                                                                     // 243
                        console.log('create folder connection, if you see a warning below that means the connection already existed.');
                        _context3.next = 21;                                                                           // 222
                        return _regenerator2.default.awrap(qix.app.createConnection({                                  // 222
                            "qName": customer.name,                                                                    // 246
                            "qType": "folder",                                                                         // 247
                            "qConnectionString": customerDataFolder                                                    // 248
                        }));                                                                                           // 245
                                                                                                                       //
                    case 21:                                                                                           // 222
                        qConnectionId = _context3.sent;                                                                // 245
                        call = {};                                                                                     // 250
                        call.action = 'Create data/folder connection';                                                 // 251
                        call.url = '';                                                                                 // 252
                        call.request = 'Link to a folder on the server where users can put files/QVD, or create a REST/ODBC/OLEDB... database connection.';
                        call.response = 'created folder connection: ' + qConnectionId;                                 // 254
                        console.log('created folder connection: ', qConnectionId);                                     // 255
                        _context3.next = 33;                                                                           // 222
                        break;                                                                                         // 222
                                                                                                                       //
                    case 30:                                                                                           // 222
                        _context3.prev = 30;                                                                           // 222
                        _context3.t0 = _context3["catch"](17);                                                         // 222
                        console.info('No issue, existing customer so his data folder connection already exists', _context3.t0);
                                                                                                                       //
                    case 33:                                                                                           // 222
                        _context3.next = 35;                                                                           // 222
                        return _regenerator2.default.awrap(qix.app.getScript());                                       // 222
                                                                                                                       //
                    case 35:                                                                                           // 222
                        script = _context3.sent;                                                                       // 261
                        call = {};                                                                                     // 262
                        call.action = 'Get data load script';                                                          // 263
                        call.url = gitHubLinks.getScript;                                                              // 264
                        call.request = 'We extracted the following load script from the app';                          // 265
                        call.response = script;                                                                        // 266
                        REST_Log(call, generationUserId); //set the new script                                         // 267
                                                                                                                       //
                        call = {};                                                                                     // 270
                        _context3.next = 45;                                                                           // 222
                        return _regenerator2.default.awrap(qix.app.setScript(replaceScript(script)));                  // 222
                                                                                                                       //
                    case 45:                                                                                           // 222
                        call.response = _context3.sent;                                                                // 271
                        //we now just include the old script in this app                                               // 271
                        call.action = 'Insert customer specific data load script for its database';                    // 272
                        call.url = gitHubLinks.setScript;                                                              // 273
                        call.request = 'The script of the app has been replaced with a customer specific one. Normally you would replace the database connection for each customer. Or you can insert a customer specific script to enable customization per customer. ';
                        REST_Log(call, generationUserId); //reload the app                                             // 275
                                                                                                                       //
                        call = {};                                                                                     // 278
                        _context3.next = 53;                                                                           // 222
                        return _regenerator2.default.awrap(qix.app.doReload());                                        // 222
                                                                                                                       //
                    case 53:                                                                                           // 222
                        call.response = _context3.sent;                                                                // 279
                        call.action = 'Reload the app';                                                                // 280
                        call.url = gitHubLinks.reloadApp;                                                              // 281
                        call.request = 'Has the app been reloaded with customer specific data?';                       // 282
                        REST_Log(call, generationUserId); //save the app                                               // 283
                                                                                                                       //
                        call = {};                                                                                     // 286
                        call.action = 'Save app';                                                                      // 287
                        call.url = gitHubLinks.saveApp;                                                                // 288
                        call.request = 'App with GUID ' + appId + ' has been saved to disk';                           // 289
                        REST_Log(call, generationUserId);                                                              // 290
                        _context3.next = 65;                                                                           // 222
                        return _regenerator2.default.awrap(qix.app.doSave());                                          // 222
                                                                                                                       //
                    case 65:                                                                                           // 222
                        REST_Log(call, generationUserId);                                                              // 293
                        _context3.next = 71;                                                                           // 222
                        break;                                                                                         // 222
                                                                                                                       //
                    case 68:                                                                                           // 222
                        _context3.prev = 68;                                                                           // 222
                        _context3.t1 = _context3["catch"](8);                                                          // 222
                        console.error('error in reloadAppAndReplaceScriptviaEngine via Enigma.JS, did you used the correct schema definition in the settings.json file?', _context3.t1);
                                                                                                                       //
                    case 71:                                                                                           // 222
                    case "end":                                                                                        // 222
                        return _context3.stop();                                                                       // 222
                }                                                                                                      // 222
            }                                                                                                          // 222
        }                                                                                                              // 222
                                                                                                                       //
        return reloadAppAndReplaceScriptviaEngine$;                                                                    // 222
    }(), null, this, [[8, 68], [17, 30]]);                                                                             // 222
}                                                                                                                      // 222
                                                                                                                       //
function createAppConnection(type, name, path) {                                                                       // 307
    var config, qix, qConnectionId;                                                                                    // 307
    return _regenerator2.default.async(function () {                                                                   // 307
        function createAppConnection$(_context4) {                                                                     // 307
            while (1) {                                                                                                // 307
                switch (_context4.prev = _context4.next) {                                                             // 307
                    case 0:                                                                                            // 307
                        //set the app ID to be used in the enigma connection to the engine API                         // 309
                        config = Object.assign({}, enigmaServerConfig);                                                // 310
                        config.appId = getApps('sales', 'Everyone')[0].id;                                             // 311
                        console.log('createAppConnection: ' + type + ' ' + name + ' ' + path + ' using the slide generator app to create the connection: ' + config.appId);
                                                                                                                       //
                        try {                                                                                          // 314
                            check(type, String);                                                                       // 315
                            check(path, String);                                                                       // 316
                            check(name, String);                                                                       // 317
                            check(senseConfig.slideGeneratorAppId, String);                                            // 318
                        } catch (error) {                                                                              // 319
                            console.error('Missing parameters to create a data connection', error);                    // 320
                        }                                                                                              // 321
                                                                                                                       //
                        _context4.prev = 4;                                                                            // 307
                        _context4.next = 7;                                                                            // 307
                        return _regenerator2.default.awrap(enigma.getService('qix', config));                          // 307
                                                                                                                       //
                    case 7:                                                                                            // 307
                        qix = _context4.sent;                                                                          // 325
                        //create folder connection                                                                     // 327
                        console.log('create folder connection, if you see a warning below that means the connection already existed.');
                        _context4.next = 11;                                                                           // 307
                        return _regenerator2.default.awrap(qix.app.createConnection({                                  // 307
                            "qName": name,                                                                             // 330
                            "qType": type,                                                                             // 331
                            "qConnectionString": path                                                                  // 332
                        }));                                                                                           // 329
                                                                                                                       //
                    case 11:                                                                                           // 307
                        qConnectionId = _context4.sent;                                                                // 329
                        console.log('created folder connection: ', qConnectionId);                                     // 334
                        _context4.next = 18;                                                                           // 307
                        break;                                                                                         // 307
                                                                                                                       //
                    case 15:                                                                                           // 307
                        _context4.prev = 15;                                                                           // 307
                        _context4.t0 = _context4["catch"](4);                                                          // 307
                        console.error('Failed to create folder connection', _context4.t0);                             // 336
                                                                                                                       //
                    case 18:                                                                                           // 307
                    case "end":                                                                                        // 307
                        return _context4.stop();                                                                       // 307
                }                                                                                                      // 307
            }                                                                                                          // 307
        }                                                                                                              // 307
                                                                                                                       //
        return createAppConnection$;                                                                                   // 307
    }(), null, this, [[4, 15]]);                                                                                       // 307
}                                                                                                                      // 307
                                                                                                                       //
function deleteDirectoryAndDataConnection(customerName) {                                                              // 340
    console.log('deleteDirectoryAndDataConnection'); //@TODO a bit dangerous, so better to do by hand. Make sure you can't delete root folder... 
    // https://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty                                // 343
}                                                                                                                      // 344
                                                                                                                       //
function createDirectory(customerName) {                                                                               // 346
    var dir = path.join(Meteor.settings.broker.customerDataDir, customerName);                                         // 347
    fs.ensureDir(dir, function (err) {                                                                                 // 348
        if (err) {                                                                                                     // 349
            console.error(err); // => null                                                                             // 350
                                                                                                                       //
            throw new Meteor.Error('Server error', 'Unable to create new directory for customer/department: ' + customerName);
        }                                                                                                              // 352
    });                                                                                                                // 353
    return dir;                                                                                                        // 354
}                                                                                                                      // 355
                                                                                                                       //
function checkCustomersAreSelected(customers) {                                                                        // 357
    if (!customers.length) {                                                                                           // 358
        // = 0                                                                                                         // 358
        throw new Meteor.Error('No customers', 'user has not specified at least one customer for which an app can be generated');
    }                                                                                                                  // 360
}                                                                                                                      // 361
                                                                                                                       //
; // CHECK IF SELECTED TEMPLATE APP EXISTS IN QLIK SENSE                                                               // 361
//These are the apps that the OEM partner has in his database, but do they still exists on the qliks sense side?       // 364
                                                                                                                       //
function checkTemplateAppExists(generationUserId) {                                                                    // 365
    var templateApps = TemplateApps.find({                                                                             // 366
        'generationUserId': Meteor.userId()                                                                            // 367
    }).fetch();                                                                                                        // 366
                                                                                                                       //
    if (templateApps.length === 0) {                                                                                   // 370
        //user has not specified a template                                                                            // 370
        throw new Meteor.Error('No Template', 'user has not specified a template for which apps can be generated');    // 371
    }                                                                                                                  // 372
                                                                                                                       //
    currentAppsInSense = getApps();                                                                                    // 374
                                                                                                                       //
    if (!currentAppsInSense) {                                                                                         // 375
        throw new Meteor.Error('No apps have been received from Qlik Sense. Therefore you have selected a Qlik Sense App: ' + templateApp.name + ' with guid: ' + templateApp.id + ' which does not exist in Sense anymore. Have you deleted the template in Sense?');
    }                                                                                                                  // 377
                                                                                                                       //
    _.each(templateApps, function (templateApp) {                                                                      // 378
        var templateFound = _.some(currentAppsInSense, ['id', templateApp.id]);                                        // 379
                                                                                                                       //
        if (!templateFound) {                                                                                          // 381
            throw new Meteor.Error('You have selected a Qlik Sense App: ' + templateApp.name + ' with guid: ' + templateApp.id + ' which does not exist in Sense anymore. Have you deleted the template in Sense?');
        } else {// console.log('checkTemplateAppExists: True, template guid exist: ', templateApp.id);                 // 383
        }                                                                                                              // 385
    });                                                                                                                // 386
                                                                                                                       //
    return templateApps;                                                                                               // 387
}                                                                                                                      // 388
                                                                                                                       //
; //                                                                                                                   // 388
// ─── UPLOAD APP ─────────────────────────────────────────────────────────────────                                    // 391
//                                                                                                                     // 392
                                                                                                                       //
function uploadApp(filePath, appName) {                                                                                // 395
    return _regenerator2.default.async(function () {                                                                   // 395
        function uploadApp$(_context5) {                                                                               // 395
            while (1) {                                                                                                // 395
                switch (_context5.prev = _context5.next) {                                                             // 395
                    case 0:                                                                                            // 395
                        console.log('Upload app: ' + appName + ' from path: ' + filePath);                             // 396
                        _context5.next = 3;                                                                            // 395
                        return _regenerator2.default.awrap(new Promise(function (resolve, reject) {                    // 395
                            var formData = {                                                                           // 398
                                my_file: fs.createReadStream(filePath)                                                 // 399
                            };                                                                                         // 398
                            request.post({                                                                             // 402
                                url: qlikHDRServer + '/qrs/app/upload?name=' + appName + '&xrfkey=' + senseConfig.xrfkey,
                                headers: {                                                                             // 404
                                    'Content-Type': 'application/vnd.qlik.sense.app',                                  // 405
                                    'hdr-usr': senseConfig.headerValue,                                                // 406
                                    'X-Qlik-xrfkey': senseConfig.xrfkey                                                // 407
                                },                                                                                     // 404
                                formData: formData                                                                     // 409
                            }, function (error, res, body) {                                                           // 402
                                if (!error) {                                                                          // 411
                                    var appId = JSON.parse(body).id;                                                   // 412
                                    console.log('Uploaded "' + appName + '.qvf" to Qlik Sense and got appID: ' + appId);
                                    resolve(appId);                                                                    // 414
                                } else {                                                                               // 415
                                    console.error("Failed to upload app" + appName, error);                            // 416
                                    reject(error);                                                                     // 417
                                }                                                                                      // 418
                            });                                                                                        // 419
                        }));                                                                                           // 420
                                                                                                                       //
                    case 3:                                                                                            // 395
                        return _context5.abrupt("return", _context5.sent);                                             // 395
                                                                                                                       //
                    case 4:                                                                                            // 395
                    case "end":                                                                                        // 395
                        return _context5.stop();                                                                       // 395
                }                                                                                                      // 395
            }                                                                                                          // 395
        }                                                                                                              // 395
                                                                                                                       //
        return uploadApp$;                                                                                             // 395
    }(), null, this);                                                                                                  // 395
} //                                                                                                                   // 395
// ─── COPYAPP ────────────────────────────────────────────────────────────────────                                    // 423
//                                                                                                                     // 424
                                                                                                                       //
                                                                                                                       //
function copyApp(guid, name, generationUserId) {                                                                       // 427
    check(guid, String);                                                                                               // 428
    check(name, String); // console.log('QRS Functions copy App, copy the app id: ' + guid + ' to app with name: ', name);
                                                                                                                       //
    var call = {};                                                                                                     // 431
                                                                                                                       //
    try {                                                                                                              // 433
        call.request = qrsSrv + '/qrs/app/' + guid + '/copy';                                                          // 434
        call.response = HTTP.post(call.request, {                                                                      // 435
            'npmRequestOptions': configCerticates,                                                                     // 436
            params: {                                                                                                  // 437
                'xrfkey': senseConfig.xrfkey,                                                                          // 438
                "name": name                                                                                           // 439
            },                                                                                                         // 437
            data: {}                                                                                                   // 441
        });                                                                                                            // 435
        REST_Log(call, generationUserId);                                                                              // 445
        var newGuid = call.response.data.id; // console.log('Step 2: the new app id is: ', newGuid);                   // 446
        //addTag('App', newGuid);                                                                                      // 448
                                                                                                                       //
        return newGuid;                                                                                                // 449
    } catch (err) {                                                                                                    // 450
        console.error(err);                                                                                            // 451
        call.action = 'Copy app FAILED';                                                                               // 452
        call.response = err.message;                                                                                   // 453
        REST_Log(call, generationUserId);                                                                              // 454
        throw new Meteor.Error('Copy app for selected customers failed', err.message);                                 // 455
    }                                                                                                                  // 456
}                                                                                                                      // 457
                                                                                                                       //
; //                                                                                                                   // 457
// ─── CHECKSTREAMSTATUS ──────────────────────────────────────────────────────────                                    // 460
//                                                                                                                     // 461
                                                                                                                       //
function checkStreamStatus(customer, generationUserId) {                                                               // 464
    // console.log('checkStreamStatus for: ' + customer.name);                                                         // 465
    var stream = Streams.findOne({                                                                                     // 466
        name: customer.name                                                                                            // 467
    }); //Find the stream for the name of the customer in Mongo, and get his Id from the returned object               // 466
                                                                                                                       //
    var streamId = '';                                                                                                 // 469
                                                                                                                       //
    if (stream) {                                                                                                      // 470
        // console.log('Stream already exists: ', stream.id);                                                          // 471
        streamId = stream.id;                                                                                          // 472
    } else {                                                                                                           // 473
        // console.log('No stream for customer exist, so create one: ' + customer.name);                               // 474
        streamId = QSStream.createStream(customer.name, generationUserId).id; // console.log('Step 1: the (new) stream ID for ' + customer.name + ' is: ', streamId);
    }                                                                                                                  // 477
                                                                                                                       //
    return streamId;                                                                                                   // 479
} // export function getAppsViaEngine() {                                                                              // 480
//     // console.log('server: QSSOCKS getApps');                                                                      // 484
//     return qsocks.Connect(engineConfig)                                                                             // 485
//         .then(function(global) {                                                                                    // 486
//             //We can now interact with the global class, for example fetch the document list.                       // 487
//             //qsocks mimics the Engine API, refer to the Engine API documentation or the engine api explorer for available methods.
//             global.getDocList()                                                                                     // 489
//                 .then(function(docList) {                                                                           // 490
//                     return docList;                                                                                 // 491
//                 });                                                                                                 // 492
//         });                                                                                                         // 494
// };                                                                                                                  // 495
// http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-Get-All-As-Full.htm
//                                                                                                                     // 500
// ─── GETAPPS ────────────────────────────────────────────────────────────────────                                    // 501
//                                                                                                                     // 502
                                                                                                                       //
                                                                                                                       //
function getApps(name, stream) {                                                                                       // 504
    var path = '/qrs/app/full'; //if a name/stream is provided only search the apps with this name                     // 505
                                                                                                                       //
    if (name) {                                                                                                        // 508
        path += "?filter=Name eq '" + name + "'";                                                                      // 509
                                                                                                                       //
        if (stream) {                                                                                                  // 510
            path += " and stream.name eq '" + stream + "'";                                                            // 511
        }                                                                                                              // 512
    }                                                                                                                  // 513
                                                                                                                       //
    var call = {                                                                                                       // 515
        action: 'Get list of apps',                                                                                    // 516
        request: path                                                                                                  // 517
    }; // REST_Log(call,generationUserId);                                                                             // 515
                                                                                                                       //
    return qrs.get(call.request);                                                                                      // 520
}                                                                                                                      // 521
                                                                                                                       //
; //                                                                                                                   // 521
// ─── DELETEAPP ──────────────────────────────────────────────────────────────────                                    // 524
//                                                                                                                     // 525
                                                                                                                       //
function deleteApp(guid) {                                                                                             // 528
    var generationUserId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Not defined';          // 528
    console.log('QRSApp deleteApp: ', guid);                                                                           // 529
                                                                                                                       //
    try {                                                                                                              // 530
        var call = {};                                                                                                 // 531
        call.request = qrsSrv + '/qrs/app/' + guid;                                                                    // 532
        call.response = HTTP.del(call.request, {                                                                       // 533
            params: {                                                                                                  // 534
                xrfkey: senseConfig.xrfkey                                                                             // 535
            },                                                                                                         // 534
            npmRequestOptions: configCerticates,                                                                       // 537
            data: {}                                                                                                   // 538
        }); // Meteor.call('updateLocalSenseCopy');                                                                    // 533
        //logging only                                                                                                 // 542
                                                                                                                       //
        call.action = 'Delete app';                                                                                    // 543
        call.url = gitHubLinks.deleteApp;                                                                              // 544
        call.response = call.response;                                                                                 // 545
        REST_Log(call, generationUserId);                                                                              // 546
        return call.response;                                                                                          // 547
    } catch (err) {                                                                                                    // 548
        console.error(err);                                                                                            // 549
        throw new Meteor.Error('App delete failed', err.message);                                                      // 550
    }                                                                                                                  // 551
}                                                                                                                      // 552
                                                                                                                       //
; //                                                                                                                   // 552
// ─── PUBLISHAPP ─────────────────────────────────────────────────────────────────                                    // 556
//                                                                                                                     // 557
                                                                                                                       //
function publishApp(appGuid, appName, streamId, customerName, generationUserId) {                                      // 560
    console.log('Publish app: ' + appName + ' to stream: ' + streamId);                                                // 561
    check(appGuid, String);                                                                                            // 562
    check(appName, String);                                                                                            // 563
    check(streamId, String);                                                                                           // 564
                                                                                                                       //
    try {                                                                                                              // 566
        var call = {};                                                                                                 // 567
        call.request = qrsSrv + '/qrs/app/' + appGuid + '/publish?name=' + appName + '&stream=' + streamId;            // 568
        call.response = HTTP.put(call.request, {                                                                       // 569
            params: {                                                                                                  // 570
                xrfkey: senseConfig.xrfkey                                                                             // 571
            },                                                                                                         // 570
            npmRequestOptions: configCerticates,                                                                       // 573
            data: {}                                                                                                   // 574
        }); //logging into database                                                                                    // 569
                                                                                                                       //
        call.action = 'Publish app';                                                                                   // 579
        call.url = gitHubLinks.publishApp;                                                                             // 580
        REST_Log(call, generationUserId);                                                                              // 581
        return call.response;                                                                                          // 582
    } catch (err) {                                                                                                    // 583
        console.error(err); // // IF APP ALREADY EXISTED TRY TO PUBLISH OVERWRITE IT (REPLACE)                         // 584
        // if(err.response.statusCode == 400){                                                                         // 587
        //     replaceApp()                                                                                            // 588
        // }                                                                                                           // 589
        // console.error('statusCode:', err.response.statusCode);                                                      // 590
        // console.info('Try to PUBLISH OVERWRITE THE APP, SINCE IT WAS ALREADY PUBLISHED');                           // 591
                                                                                                                       //
        throw new Meteor.Error('Publication of app ' + appName + ' for customer ' + customerName + ' failed: ', err.message);
    }                                                                                                                  // 593
}                                                                                                                      // 594
                                                                                                                       //
; // REPLACE APP                                                                                                       // 594
// export function replaceApp(targetApp, replaceByApp, generationUserId) {                                             // 597
//     console.log('Function: Replace app: ' + targetApp + ' by app ' + targetApp);                                    // 598
//     check(appGuid, String);                                                                                         // 599
//     check(replaceByApp, String);                                                                                    // 600
//     try {                                                                                                           // 602
//         const result = HTTP.put(qlikHDRServer + '/qrs/app/' + replaceByApp + '/replace?app=' + targetApp + '&xrfkey=' + senseConfig.xrfkey, {
//             headers: {                                                                                              // 604
//                 'hdr-usr': senseConfig.headerValue,                                                                 // 605
//                 'X-Qlik-xrfkey': senseConfig.xrfkey                                                                 // 606
//             }                                                                                                       // 607
//         });                                                                                                         // 608
//         //logging into database                                                                                     // 610
//         const call = {};                                                                                            // 611
//         call.action = 'Replace app';                                                                                // 612
//         call.request = 'HTTP.put(' + qlikHDRServer + '/qrs/app/' + replaceByApp + '/replace?app=' + targetApp + '&xrfkey=' + senseConfig.xrfkey;
//         call.response = result;                                                                                     // 614
//         call.url = 'http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-App-Replace.htm';
//         REST_Log(call, generationUserId);                                                                           // 616
//         return result;                                                                                              // 617
//     } catch (err) {                                                                                                 // 618
//         console.error(err);                                                                                         // 619
//         throw new Meteor.Error('Publication of app ' + appName + ' for customer ' + customerName + ' failed: ', err.message);
//     }                                                                                                               // 621
// };                                                                                                                  // 622
// function createTag(name) {                                                                                          // 625
//     check(name, String);                                                                                            // 626
//     // console.log('QRS Functions Appp, create a tag: ' + name);                                                    // 627
//     try {                                                                                                           // 629
//         const result = HTTP.post(qlikHDRServer + '/qrs/Tag', {                                                      // 630
//             headers: authHeaders,                                                                                   // 631
//             params: {                                                                                               // 632
//                 'xrfkey': senseConfig.xrfkey                                                                        // 633
//             },                                                                                                      // 634
//             data: {                                                                                                 // 635
//                 "name": name                                                                                        // 636
//             }                                                                                                       // 637
//         })                                                                                                          // 638
//         //logging only                                                                                              // 640
//         const call = {};                                                                                            // 641
//         call.action = 'create Tag';                                                                                 // 642
//         call.request = 'HTTP.get(http://' + senseConfig.SenseServerInternalLanIP + ':' + senseConfig.port + '/' + senseConfig.virtualProxy + '/qrs/tag';
//         call.response = result;                                                                                     // 644
//         REST_Log(call, generationUserId);                                                                           // 645
//         return result;                                                                                              // 647
//     } catch (err) {                                                                                                 // 648
//         console.error(err);                                                                                         // 649
//         throw new Meteor.Error('Tag: ' + name + ' create failed ', err.message);                                    // 650
//     }                                                                                                               // 651
// };                                                                                                                  // 652
// function addTag(type, guid, tagName) {                                                                              // 654
//     check(type, String);                                                                                            // 655
//     check(guid, String);                                                                                            // 656
//     //check if tag with tagName already exists                                                                      // 658
//     var selectionId = createSelection(type, guid);                                                                  // 660
//     addTagViaSyntheticToType('App', selectionId, tagGuid)                                                           // 661
// }                                                                                                                   // 663
// function createSelection(type, guid) {                                                                              // 665
//     check(type, String);                                                                                            // 666
//     check(guid, String);                                                                                            // 667
//     console.log('QRS Functions APP, create selection for type: ', type + ' ' + guid);                               // 668
//     try {                                                                                                           // 670
//         const result = HTTP.post(qlikHDRServer + '/qrs/Selection', {                                                // 671
//             headers: authHeaders,                                                                                   // 672
//             params: {                                                                                               // 673
//                 'xrfkey': senseConfig.xrfkey                                                                        // 674
//             },                                                                                                      // 675
//             data: {                                                                                                 // 676
//                 items: [{                                                                                           // 677
//                     type: type,                                                                                     // 678
//                     objectID: guid                                                                                  // 679
//                 }]                                                                                                  // 680
//             }                                                                                                       // 681
//         })                                                                                                          // 682
//         console.log('the result of selection for type: ', type + ' ' + guid);                                       // 683
//         console.log(result);                                                                                        // 684
//         return result.id;                                                                                           // 685
//     } catch (err) {                                                                                                 // 686
//         console.error(err);                                                                                         // 687
//         throw new Meteor.Error('Selection: ' + type + ' failed for guid ' + guid, err.message);                     // 688
//     }                                                                                                               // 689
// };                                                                                                                  // 690
// function deleteSelection(selectionId) {                                                                             // 692
//     check(selectionId, String);                                                                                     // 693
//     console.log('QRS Functions APP, deleteSelection selection for selectionId: ', selectionId);                     // 694
//     try {                                                                                                           // 696
//         const result = HTTP.delete(qlikHDRServer + '/qrs/Selection/' + selectionId, {                               // 697
//             headers: authHeaders,                                                                                   // 698
//             params: {                                                                                               // 699
//                 'xrfkey': senseConfig.xrfkey                                                                        // 700
//             }                                                                                                       // 701
//         })                                                                                                          // 702
//         console.log(result);                                                                                        // 703
//         return result.id;                                                                                           // 704
//     } catch (err) {                                                                                                 // 705
//         console.error(err);                                                                                         // 706
//         throw new Meteor.Error('Selection delete failed: ', err.message);                                           // 707
//     }                                                                                                               // 708
// };                                                                                                                  // 709
// function buildModDate() {                                                                                           // 711
//     var d = new Date();                                                                                             // 712
//     return d.toISOString();                                                                                         // 713
// }                                                                                                                   // 714
// function addTagViaSyntheticToType(type, selectionId, tagGuid) {                                                     // 716
//     check(type, String);                                                                                            // 717
//     check(guid, String);                                                                                            // 718
//     console.log('QRS Functions Appp, Update all entities of a specific type: ' + type + ' in the selection set identified by {id} ' + selectionId + ' based on an existing synthetic object. : ');
//     try {                                                                                                           // 721
//         const result = HTTP.put(qlikHDRServer + '/qrs/Selection/' + selectionId + '/' + type + '/synthetic', {      // 722
//             headers: authHeaders,                                                                                   // 723
//             params: {                                                                                               // 724
//                 'xrfkey': senseConfig.xrfkey                                                                        // 725
//             },                                                                                                      // 726
//             data: {                                                                                                 // 727
//                 "latestModifiedDate": buildModDate(),                                                               // 728
//                 "properties": [{                                                                                    // 729
//                     "name": "refList_Tag",                                                                          // 730
//                     "value": {                                                                                      // 731
//                         "added": [tagGuid]                                                                          // 732
//                     },                                                                                              // 733
//                     "valueIsModified": true                                                                         // 734
//                 }],                                                                                                 // 735
//                 "type": type                                                                                        // 736
//             }                                                                                                       // 737
//         })                                                                                                          // 738
//         console.log('the result of selection for type: ', type + ' ' + guid);                                       // 739
//         console.log(result);                                                                                        // 740
//         return result;                                                                                              // 741
//     } catch (err) {                                                                                                 // 742
//         console.error(err);                                                                                         // 743
//         throw new Meteor.Error('Selection: ' + type + ' failed for guid ' + guid, err.message);                     // 744
//     }                                                                                                               // 745
// };                                                                                                                  // 746
// async function uploadPublishTemplateApps() {                                                                        // 749
//     //check if template apps have been uploaded and published in the templates stream                               // 750
//     // if (true) { // (!Apps.find({ "stream.name": "Templates" }).count()) {                                        // 751
//     console.warn('no template apps found, so upload from the templates dir.');                                      // 752
//     var folder = Meteor.settings.private.templateAppsFrom;                                                          // 753
//     // var folder = await copyTemplatesToQRSFolder();                                                               // 754
//     console.log('apps folder', folder);                                                                             // 755
//     uploadAndPublishApps(folder);                                                                                   // 756
//     // } else {}                                                                                                    // 757
// }                                                                                                                   // 758
// //upload and publish all apps found in the folder to the templates stream                                           // 760
// async function copyTemplatesToQRSFolder() {                                                                         // 761
//     var newFolder = Meteor.settings.private.templateAppsTo + '\\' + process.env.USERDOMAIN + '\\' + process.env.USERNAME;
//     try {                                                                                                           // 763
//         await fs.copy(Meteor.settings.private.templateAppsFrom, newFolder, {                                        // 764
//             overwrite: true                                                                                         // 765
//         }); //"QLIK-AB0Q2URN5T\\Qlikexternal",                                                                      // 766
//         return newFolder                                                                                            // 767
//     } catch (err) {                                                                                                 // 768
//         console.error('error copy Templates from ' + Meteor.settings.private.templateAppsFrom + ' To QRSFolder ' + Meteor.settings.private.templateAppsDir, err);
//     }                                                                                                               // 770
// }                                                                                                                   // 771
// For a system service account, the app must be in the %ProgramData%\Qlik\Sense\Repository\DefaultApps folder.        // 773
// For any other account, the app must be in the %ProgramData%\Qlik\Sense\Apps\<login domain>\<login user> folder.     // 774
//so you have to copy your apps there first. in a fresh sense installation.                                            // 775
                                                                                                                       //
function importApp(fileName, name) {// check(fileName, String);                                                        // 776
    // check(name, String);                                                                                            // 778
    // console.log('QRS Functions import App, with name ' + name + ', with fileName: ', fileName);                     // 779
    // try {                                                                                                           // 781
    //     const call = {};                                                                                            // 782
    //     call.action = 'Import app';                                                                                 // 783
    //     call.url = 'http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-App-Import-App.htm'
    //     call.request = qlikHDRServer + '/qrs/app/import?keepData=true&name=' + name + '&xrfkey=' + senseConfig.xrfkey; //using header auth.
    //     call.response = HTTP.post(call.request, {                                                                   // 786
    //         headers: {                                                                                              // 787
    //             'hdr-usr': senseConfig.headerValue,                                                                 // 788
    //             'X-Qlik-xrfkey': senseConfig.xrfkey                                                                 // 789
    //         },                                                                                                      // 790
    //         data: '"Sales.qvf"'                                                                                     // 791
    //     });                                                                                                         // 792
    //     REST_Log(call, generationUserId);                                                                           // 794
    //     var newGuid = call.response.data.id;                                                                        // 795
    //     return newGuid;                                                                                             // 796
    // } catch (err) {                                                                                                 // 797
    //     console.error(err);                                                                                         // 798
    //     const call = {};                                                                                            // 799
    //     call.action = 'Import app FAILED';                                                                          // 800
    //     call.response = err.message;                                                                                // 801
    //     REST_Log(call, generationUserId);                                                                           // 802
    //     throw new Meteor.Error('Import app failed', err.message);                                                   // 803
    // }                                                                                                               // 804
                                                                                                                       //
    var generationUserId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no user set';          // 776
}                                                                                                                      // 805
                                                                                                                       //
; //https://www.npmjs.com/package/request#forms                                                                        // 805
// function uploadApp(filePath, fileSize, appName) {                                                                   // 808
//     console.log('QRS Functions upload App, with name ' + appName + ', with fileSize: ', fileSize + ' and filePath ' + filePath);
//     var formData = {                                                                                                // 810
//         my_file: fs.createReadStream(filePath)                                                                      // 811
//     };                                                                                                              // 812
//     request.post({                                                                                                  // 813
//         url: qlikHDRServer + '/qrs/app/upload?name=' + appName + '&xrfkey=' + senseConfig.xrfkey,                   // 814
//         headers: {                                                                                                  // 815
//             'Content-Type': 'application/vnd.qlik.sense.app',                                                       // 816
//             'hdr-usr': senseConfig.headerValue,                                                                     // 817
//             'X-Qlik-xrfkey': senseConfig.xrfkey                                                                     // 818
//         },                                                                                                          // 819
//         formData: formData                                                                                          // 820
//     }, function optionalCallback(err, httpResponse, body) {                                                         // 821
//         if (err) {                                                                                                  // 822
//             return console.error('upload failed:', err);                                                            // 823
//         }                                                                                                           // 824
//         console.log('Upload successful!  Server responded with:', body);                                            // 825
//     });                                                                                                             // 826
// }                                                                                                                   // 827
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsCustomProperties.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsCustomProperties.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    createCustomProperty: function () {                                                                                // 1
        return createCustomProperty;                                                                                   // 1
    },                                                                                                                 // 1
    updateCustomPropertyByName: function () {                                                                          // 1
        return updateCustomPropertyByName;                                                                             // 1
    },                                                                                                                 // 1
    deleteCustomProperty: function () {                                                                                // 1
        return deleteCustomProperty;                                                                                   // 1
    },                                                                                                                 // 1
    getCustomProperties: function () {                                                                                 // 1
        return getCustomProperties;                                                                                    // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var myQRS = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSAPI"), {                                                                  // 1
    myQRS: function (v) {                                                                                              // 1
        myQRS = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var senseConfig = void 0,                                                                                              // 1
    qrs = void 0;                                                                                                      // 1
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrs: function (v) {                                                                                                // 1
        qrs = v;                                                                                                       // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
var fs = require('fs-extra');                                                                                          // 4
                                                                                                                       //
var path = require('path');                                                                                            // 5
                                                                                                                       //
function createCustomProperty(name, choiceValues) {                                                                    // 13
    console.log('------------------------------------');                                                               // 14
    console.log('createCustomProperty', name + ' ' + choiceValues.toString());                                         // 15
    console.log('------------------------------------');                                                               // 16
                                                                                                                       //
    try {                                                                                                              // 18
        check(name, String);                                                                                           // 19
        check(choiceValues, Array);                                                                                    // 20
    } catch (err) {                                                                                                    // 21
        throw new Meteor.Error('Missing values', 'You did not specify a name or choice values for the custom property');
    }                                                                                                                  // 23
                                                                                                                       //
    var customProperty = {                                                                                             // 25
        "name": name,                                                                                                  // 26
        "valueType": "Text",                                                                                           // 27
        "objectTypes": ["App", "ContentLibrary", "DataConnection", "ReloadTask", "Stream", "User"],                    // 28
        "choiceValues": choiceValues                                                                                   // 29
    };                                                                                                                 // 25
    console.log('customProperty', customProperty);                                                                     // 31
    var result = qrs.post('/qrs/CustomPropertyDefinition', null, customProperty);                                      // 32
    console.log('result of create custom property: ', result);                                                         // 33
}                                                                                                                      // 34
                                                                                                                       //
function updateCustomPropertyByName(name, newProperty) {                                                               // 37
    console.log('%%%%%%%%%%%%%%%%%%%% updateCustomPropertyByName(name, newProperty)', updateCustomPropertyByName(name, newProperty));
                                                                                                                       //
    try {                                                                                                              // 40
        check(newName, String);                                                                                        // 41
        check(newProperty, Object);                                                                                    // 42
    } catch (err) {                                                                                                    // 43
        throw new Meteor.Error('Missing values', 'You did not specify a name or update object for the custom property');
    }                                                                                                                  // 45
                                                                                                                       //
    var customProperty = getCustomProperties(name)[0];                                                                 // 47
    newProperty.modifiedDate = customProperty.modifiedDate; //you can only update when you supply the original modified date, otherwise you get a 409 error. 
                                                                                                                       //
    var result = qrs.put('/qrs/CustomPropertyDefinition/' + customProperty.id, null, result);                          // 49
    console.log('result after update', result);                                                                        // 50
}                                                                                                                      // 52
                                                                                                                       //
function deleteCustomProperty(name) {                                                                                  // 54
    console.log('deleteCustomProperty(name)', name);                                                                   // 55
    var customProperty = getCustomProperties(name)[0];                                                                 // 57
                                                                                                                       //
    if (customProperty) {                                                                                              // 58
        var result = qrs.del('/qrs/CustomPropertyDefinition/' + customProperty.id);                                    // 59
        console.log('result after delete', result);                                                                    // 60
    }                                                                                                                  // 61
}                                                                                                                      // 63
                                                                                                                       //
function getCustomProperties(name) {                                                                                   // 65
    var filter = name ? {                                                                                              // 66
        filter: "Name eq '" + name + "'"                                                                               // 66
    } : null;                                                                                                          // 66
    var customProperties = qrs.get('/qrs/CustomPropertyDefinition/full', filter);                                      // 67
    var file = path.join(Meteor.settings.broker.automationBaseFolder, 'customProperties', 'export', 'ExtractedCustomProperties.json'); // SAVE FILE TO DISK
                                                                                                                       //
    fs.outputFile(file, JSON.stringify(customProperties, null, 2), 'utf-8');                                           // 72
    return customProperties;                                                                                           // 74
}                                                                                                                      // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsExtension.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsExtension.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
    uploadExtensions: function () {                                                                                    // 1
        return uploadExtensions;                                                                                       // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var myQRS = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSAPI"), {                                                                  // 1
    myQRS: function (v) {                                                                                              // 1
        myQRS = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
var qlikHDRServer = void 0,                                                                                            // 1
    senseConfig = void 0,                                                                                              // 1
    enigmaServerConfig = void 0,                                                                                       // 1
    authHeaders = void 0,                                                                                              // 1
    qrsSrv = void 0,                                                                                                   // 1
    QRSconfig = void 0,                                                                                                // 1
    _SSBIApp = void 0,                                                                                                 // 1
    configCerticates = void 0,                                                                                         // 1
    _slideGeneratorAppId = void 0;                                                                                     // 1
                                                                                                                       //
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    qlikHDRServer: function (v) {                                                                                      // 1
        qlikHDRServer = v;                                                                                             // 1
    },                                                                                                                 // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    enigmaServerConfig: function (v) {                                                                                 // 1
        enigmaServerConfig = v;                                                                                        // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrsSrv: function (v) {                                                                                             // 1
        qrsSrv = v;                                                                                                    // 1
    },                                                                                                                 // 1
    QRSconfig: function (v) {                                                                                          // 1
        QRSconfig = v;                                                                                                 // 1
    },                                                                                                                 // 1
    _SSBIApp: function (v) {                                                                                           // 1
        _SSBIApp = v;                                                                                                  // 1
    },                                                                                                                 // 1
    configCerticates: function (v) {                                                                                   // 1
        configCerticates = v;                                                                                          // 1
    },                                                                                                                 // 1
    _slideGeneratorAppId: function (v) {                                                                               // 1
        _slideGeneratorAppId = v;                                                                                      // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
//                                                                                                                     // 22
// ─── INSTALL NPM MODULES ────────────────────────────────────────────────────────                                    // 23
//                                                                                                                     // 24
var fs = require('fs-extra');                                                                                          // 26
                                                                                                                       //
var path = require('path');                                                                                            // 27
                                                                                                                       //
var enigma = require('enigma.js');                                                                                     // 28
                                                                                                                       //
var promise = require('bluebird');                                                                                     // 29
                                                                                                                       //
var request = require('request');                                                                                      // 30
                                                                                                                       //
var qrs = new myQRS(); // export async function automaticUploadExtensions() {                                          // 31
//     console.log('Automatically download the extensions from Github and upload to Qlik Sense');                      // 34
//     var url = 'https://github.com/kai/qlik-sense-timeline.git';                                                     // 35
//     var req = request.get(url);                                                                                     // 36
//     console.log('req', req)                                                                                         // 37
// }                                                                                                                   // 39
                                                                                                                       //
function uploadExtensions() {                                                                                          // 41
    var _this = this;                                                                                                  // 41
                                                                                                                       //
    var extensionsFolder, extensions;                                                                                  // 41
    return _regenerator2.default.async(function () {                                                                   // 41
        function uploadExtensions$(_context2) {                                                                        // 41
            while (1) {                                                                                                // 41
                switch (_context2.prev = _context2.next) {                                                             // 41
                    case 0:                                                                                            // 41
                        console.log('--------------------------UPLOAD EXTENSIONS'); // LOAD ALL EXTENSIONS IN FOLDER   // 42
                                                                                                                       //
                        extensionsFolder = '';                                                                         // 44
                        _context2.prev = 2;                                                                            // 41
                        extensionsFolder = path.join(Meteor.settings.broker.automationBaseFolder, 'extensions');       // 46
                        console.log('extensionsFolder', extensionsFolder);                                             // 47
                        _context2.next = 7;                                                                            // 41
                        return _regenerator2.default.awrap(fs.readdir(extensionsFolder));                              // 41
                                                                                                                       //
                    case 7:                                                                                            // 41
                        extensions = _context2.sent;                                                                   // 48
                        _context2.next = 13;                                                                           // 41
                        break;                                                                                         // 41
                                                                                                                       //
                    case 10:                                                                                           // 41
                        _context2.prev = 10;                                                                           // 41
                        _context2.t0 = _context2["catch"](2);                                                          // 41
                        throw error('error loading all extensions in folder.', _context2.t0);                          // 41
                                                                                                                       //
                    case 13:                                                                                           // 41
                        _context2.next = 15;                                                                           // 41
                        return _regenerator2.default.awrap(Promise.all(extensions.map(function () {                    // 41
                            function _callee(extension) {                                                              // 54
                                var filePath, result;                                                                  // 54
                                return _regenerator2.default.async(function () {                                       // 54
                                    function _callee$(_context) {                                                      // 54
                                        while (1) {                                                                    // 54
                                            switch (_context.prev = _context.next) {                                   // 54
                                                case 0:                                                                // 54
                                                    console.log('Current extension', extension);                       // 55
                                                    _context.prev = 1;                                                 // 54
                                                    //CREATE A FILEPATH                                                // 57
                                                    filePath = path.join(extensionsFolder, extension); //UPLOAD THE APP, GET THE APP ID BACK
                                                                                                                       //
                                                    _context.next = 5;                                                 // 54
                                                    return _regenerator2.default.awrap(uploadExtension('', filePath));
                                                                                                                       //
                                                case 5:                                                                // 54
                                                    result = _context.sent;                                            // 61
                                                    _context.next = 12;                                                // 54
                                                    break;                                                             // 54
                                                                                                                       //
                                                case 8:                                                                // 54
                                                    _context.prev = 8;                                                 // 54
                                                    _context.t0 = _context["catch"](1);                                // 54
                                                    console.error(_context.t0);                                        // 63
                                                    throw new Meteor.Error('Unable to upload the app to Qlik Sense. ', _context.t0);
                                                                                                                       //
                                                case 12:                                                               // 54
                                                case "end":                                                            // 54
                                                    return _context.stop();                                            // 54
                                            }                                                                          // 54
                                        }                                                                              // 54
                                    }                                                                                  // 54
                                                                                                                       //
                                    return _callee$;                                                                   // 54
                                }(), null, _this, [[1, 8]]);                                                           // 54
                            }                                                                                          // 54
                                                                                                                       //
                            return _callee;                                                                            // 54
                        }())));                                                                                        // 54
                                                                                                                       //
                    case 15:                                                                                           // 41
                    case "end":                                                                                        // 41
                        return _context2.stop();                                                                       // 41
                }                                                                                                      // 41
            }                                                                                                          // 41
        }                                                                                                              // 41
                                                                                                                       //
        return uploadExtensions$;                                                                                      // 41
    }(), null, this, [[2, 10]]);                                                                                       // 41
}                                                                                                                      // 41
                                                                                                                       //
function uploadExtension(password, filePath) {                                                                         // 71
    var formData;                                                                                                      // 71
    return _regenerator2.default.async(function () {                                                                   // 71
        function uploadExtension$(_context3) {                                                                         // 71
            while (1) {                                                                                                // 71
                switch (_context3.prev = _context3.next) {                                                             // 71
                    case 0:                                                                                            // 71
                        console.log('uploadApp: try to upload extension from path: ' + filePath);                      // 73
                        formData = {                                                                                   // 74
                            my_file: fs.createReadStream(filePath)                                                     // 75
                        }; // qrs.post('/qrs/extension/upload?pwd=' + password, data)                                  // 74
                                                                                                                       //
                        _context3.next = 4;                                                                            // 71
                        return _regenerator2.default.awrap(new Promise(function (resolve, reject) {                    // 71
                            request.post({                                                                             // 81
                                url: qlikHDRServer + '/qrs/extension/upload?&xrfkey=' + senseConfig.xrfkey,            // 82
                                //removed password parameter, assume blank                                             // 82
                                headers: {                                                                             // 83
                                    'hdr-usr': senseConfig.headerValue,                                                // 84
                                    'X-Qlik-xrfkey': senseConfig.xrfkey                                                // 85
                                },                                                                                     // 83
                                formData: formData                                                                     // 87
                            }, function (error, res, body) {                                                           // 81
                                if (!error) {                                                                          // 89
                                    try {                                                                              // 90
                                        var id = JSON.parse(body).id;                                                  // 91
                                        console.log('Uploaded "' + path.basename(filePath) + ' to Qlik Sense and got id: ' + id); //
                                    } catch (err) {                                                                    // 93
                                        console.log('Qlik Sense reported: ', body);                                    // 94
                                    }                                                                                  // 95
                                                                                                                       //
                                    resolve();                                                                         // 96
                                } else {                                                                               // 97
                                    reject(error);                                                                     // 98
                                }                                                                                      // 99
                            });                                                                                        // 100
                        }));                                                                                           // 101
                                                                                                                       //
                    case 4:                                                                                            // 71
                        return _context3.abrupt("return", _context3.sent);                                             // 71
                                                                                                                       //
                    case 5:                                                                                            // 71
                    case "end":                                                                                        // 71
                        return _context3.stop();                                                                       // 71
                }                                                                                                      // 71
            }                                                                                                          // 71
        }                                                                                                              // 71
                                                                                                                       //
        return uploadExtension$;                                                                                       // 71
    }(), null, this);                                                                                                  // 71
}                                                                                                                      // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsLicense.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsLicense.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    getLicense: function () {                                                                                          // 1
        return getLicense;                                                                                             // 1
    },                                                                                                                 // 1
    insertLicense: function () {                                                                                       // 1
        return insertLicense;                                                                                          // 1
    },                                                                                                                 // 1
    insertUserAccessRule: function () {                                                                                // 1
        return insertUserAccessRule;                                                                                   // 1
    },                                                                                                                 // 1
    getSystemRules: function () {                                                                                      // 1
        return getSystemRules;                                                                                         // 1
    },                                                                                                                 // 1
    saveSystemRules: function () {                                                                                     // 1
        return saveSystemRules;                                                                                        // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var myQRS = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSAPI"), {                                                                  // 1
    myQRS: function (v) {                                                                                              // 1
        myQRS = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var senseConfig = void 0,                                                                                              // 1
    qrs = void 0;                                                                                                      // 1
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrs: function (v) {                                                                                                // 1
        qrs = v;                                                                                                       // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
var fs = require('fs-extra');                                                                                          // 4
                                                                                                                       //
var path = require('path'); //                                                                                         // 5
// ─── IMPORT CONFIG FOR QLIK SENSE QRS AND ENGINE API ────────────────────────────                                    // 9
//                                                                                                                     // 10
                                                                                                                       //
                                                                                                                       //
var demoUserAccessRule = "SAAS DEMO - License rule to grant user access"; // http://help.qlik.com/en-US/sense-developer/June2017/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-License-Add.htm //
                                                                                                                       //
function getLicense() {                                                                                                // 22
    var lic = qrs.get('/qrs/license');                                                                                 // 23
    return lic;                                                                                                        // 24
}                                                                                                                      // 25
                                                                                                                       //
function insertLicense() {                                                                                             // 27
    console.log('------------------------------------');                                                               // 28
    console.log('INSERT LICENSE');                                                                                     // 29
    console.log('------------------------------------');                                                               // 30
    var existingLicense = qrs.get('/qrs/license');                                                                     // 31
    var newLicense = Meteor.settings.private.license;                                                                  // 32
                                                                                                                       //
    try {                                                                                                              // 34
        console.log('check if all settings.json parameters are set...');                                               // 35
        check(Meteor.settings.private.license, {                                                                       // 36
            serial: String,                                                                                            // 37
            name: String,                                                                                              // 38
            organization: String                                                                                       // 39
        });                                                                                                            // 36
        check(Meteor.settings.private.LicenseControlNumber, Number);                                                   // 41
    } catch (err) {                                                                                                    // 42
        console.error('Missing parameters in your settings.json file for your Qlik Sense license', err);               // 43
    }                                                                                                                  // 44
                                                                                                                       //
    if (!existingLicense) {                                                                                            // 46
        // try {                                                                                                       // 47
        //     console.log('Update the existing license');                                                             // 48
        //     newLicense.id = existingLicense.id;                                                                     // 49
        //     var response = qrs.del('/qrs/license/' + existingLicense.id);                                           // 50
        //     // var response = qrs.put('/qrs/license/' + newLicense.id, newLicense, { control: Meteor.settings.private.LicenseControlNumber });
        //     // console.error('Stop license insertion, license for ' + lic.organization + ' is already included: ', lic.serial);
        //     // throw Error('You are trying to insert a license while the Qlik Sense is already licensed, please remove the existing one in the QMC');
        // } catch (err) {                                                                                             // 54
        //     // lic did not already exist.                                                                           // 55
        // }                                                                                                           // 56
        var response = qrs.post('/qrs/license', {                                                                      // 57
            control: Meteor.settings.private.LicenseControlNumber                                                      // 57
        }, newLicense);                                                                                                // 57
        console.log('No existing license present, therefore inserted license into Qlik Sense.');                       // 58
    }                                                                                                                  // 59
}                                                                                                                      // 60
                                                                                                                       //
function insertUserAccessRule() {                                                                                      // 62
    console.log('insert UserAccess Rule for all users');                                                               // 63
    var licenseRule = {                                                                                                // 64
        "name": demoUserAccessRule,                                                                                    // 65
        "category": "License",                                                                                         // 66
        "rule": "((user.name like \"*\"))",                                                                            // 67
        "type": "Custom",                                                                                              // 68
        "privileges": ["create", "read", "update"],                                                                    // 69
        "resourceFilter": "License.UserAccessGroup_507c9aa5-8812-44d9-ade8-32809785eecf",                              // 70
        "actions": 1,                                                                                                  // 71
        "ruleContext": "QlikSenseOnly",                                                                                // 72
        "disabled": false,                                                                                             // 73
        "comment": "Rule to set up automatic user access for each user that has received a ticket via your SaaS platform",
        "disabledActions": ["useaccesstype"]                                                                           // 75
    };                                                                                                                 // 64
    var ruleExist = getSystemRules(demoUserAccessRule);                                                                // 77
                                                                                                                       //
    if (typeof ruleExist[0] == 'undefined' || ruleExist.length === 0) {                                                // 78
        console.log('Create a new user license rule since it did not exist.');                                         // 79
        var response = qrs.post('/qrs/SystemRule', null, licenseRule);                                                 // 80
    }                                                                                                                  // 81
}                                                                                                                      // 82
                                                                                                                       //
function getSystemRules(name) {                                                                                        // 84
    console.log('Get system rules with name: ' + name);                                                                // 85
    var filter = name ? {                                                                                              // 87
        filter: "Name eq '" + name + "'"                                                                               // 87
    } : null;                                                                                                          // 87
    var rules = qrs.get('/qrs/SystemRule/full', filter);                                                               // 88
    var file = path.join(Meteor.settings.broker.automationBaseFolder, 'securityrules', 'export', 'ExtractedSystemRules.json'); // SAVE FILE TO DISK
                                                                                                                       //
    fs.outputFile(file, JSON.stringify(rules, null, 2), 'utf-8');                                                      // 93
    return rules;                                                                                                      // 95
}                                                                                                                      // 96
                                                                                                                       //
function saveSystemRules() {                                                                                           // 97
    var rules = qrs.get('/qrs/SystemRule');                                                                            // 98
    var file = path.join(Meteor.settings.broker.automationBaseFolder, 'securityrules', 'export', 'ExtractedSystemRules.json'); // SAVE FILE TO DISK
                                                                                                                       //
    fs.outputFile(file, JSON.stringify(rules, null, 2), 'utf-8');                                                      // 103
}                                                                                                                      // 104
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsStream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsStream.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    initSenseStreams: function () {                                                                                    // 1
        return initSenseStreams;                                                                                       // 1
    },                                                                                                                 // 1
    deleteStream: function () {                                                                                        // 1
        return deleteStream;                                                                                           // 1
    },                                                                                                                 // 1
    getStreamByName: function () {                                                                                     // 1
        return getStreamByName;                                                                                        // 1
    },                                                                                                                 // 1
    getStreams: function () {                                                                                          // 1
        return getStreams;                                                                                             // 1
    },                                                                                                                 // 1
    createStream: function () {                                                                                        // 1
        return createStream;                                                                                           // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var GeneratedResources = void 0;                                                                                       // 1
module.watch(require("/imports/api/apps.js"), {                                                                        // 1
    GeneratedResources: function (v) {                                                                                 // 1
        GeneratedResources = v;                                                                                        // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var gitHubLinks = void 0;                                                                                              // 1
module.watch(require("/imports/ui/UIHelpers"), {                                                                       // 1
    gitHubLinks: function (v) {                                                                                        // 1
        gitHubLinks = v;                                                                                               // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var senseConfig = void 0,                                                                                              // 1
    authHeaders = void 0,                                                                                              // 1
    qrsSrv = void 0,                                                                                                   // 1
    qrs = void 0,                                                                                                      // 1
    configCerticates = void 0;                                                                                         // 1
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    },                                                                                                                 // 1
    qrsSrv: function (v) {                                                                                             // 1
        qrsSrv = v;                                                                                                    // 1
    },                                                                                                                 // 1
    qrs: function (v) {                                                                                                // 1
        qrs = v;                                                                                                       // 1
    },                                                                                                                 // 1
    configCerticates: function (v) {                                                                                   // 1
        configCerticates = v;                                                                                          // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var REST_Log = void 0;                                                                                                 // 1
module.watch(require("/imports/api/APILogs"), {                                                                        // 1
    REST_Log: function (v) {                                                                                           // 1
        REST_Log = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 4);                                                                                                                 // 1
var qlikServer = 'http://' + senseConfig.SenseServerInternalLanIP + ':' + senseConfig.port + '/' + senseConfig.virtualProxy; //
// ─── CREATE STREAMS FOR THE INITIAL SETUP OF QLIK SENSE ─────────────────────────                                    // 13
//                                                                                                                     // 14
                                                                                                                       //
function initSenseStreams() {                                                                                          // 17
    console.log('------------------------------------');                                                               // 18
    console.log('Create initial streams');                                                                             // 19
    console.log('------------------------------------');                                                               // 20
                                                                                                                       //
    for (var _iterator = Meteor.settings.public.StreamsToCreateAutomatically, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;                                                                                                      // 22
                                                                                                                       //
        if (_isArray) {                                                                                                // 22
            if (_i >= _iterator.length) break;                                                                         // 22
            _ref = _iterator[_i++];                                                                                    // 22
        } else {                                                                                                       // 22
            _i = _iterator.next();                                                                                     // 22
            if (_i.done) break;                                                                                        // 22
            _ref = _i.value;                                                                                           // 22
        }                                                                                                              // 22
                                                                                                                       //
        var streamName = _ref;                                                                                         // 22
                                                                                                                       //
        try {                                                                                                          // 23
            console.log('Try to create stream: ' + streamName + ' if it not already exists');                          // 24
                                                                                                                       //
            if (!getStreamByName(streamName)) {                                                                        // 25
                createStream(streamName);                                                                              // 26
            }                                                                                                          // 27
        } catch (err) {                                                                                                // 28
            console.log(err);                                                                                          // 29
        }                                                                                                              // 30
    }                                                                                                                  // 31
}                                                                                                                      // 32
                                                                                                                       //
function deleteStream(guid, generationUserId) {                                                                        // 39
    console.log('deleteStream: ', guid);                                                                               // 40
                                                                                                                       //
    try {                                                                                                              // 41
        var request = qrsSrv + '/qrs/stream/' + guid;                                                                  // 43
        var response = HTTP.del(request, {                                                                             // 44
            'npmRequestOptions': configCerticates                                                                      // 45
        }); // Logging                                                                                                 // 44
                                                                                                                       //
        var call = {};                                                                                                 // 49
        call.action = 'Delete stream';                                                                                 // 50
        call.request = "HTTP.del(" + qlikServer + '/qrs/stream/' + guid + '?xrfkey=' + senseConfig.xrfkey;             // 51
        call.response = response;                                                                                      // 52
        REST_Log(call, generationUserId);                                                                              // 53
        Meteor.call('updateLocalSenseCopy');                                                                           // 54
        return response;                                                                                               // 55
    } catch (err) {// console.error(err);                                                                              // 56
        // throw new Meteor.Error('Delete stream failed', err.message);                                                // 58
    }                                                                                                                  // 59
}                                                                                                                      // 60
                                                                                                                       //
; //                                                                                                                   // 60
// ─── GET STREAM BY NAME ────────────────────────────────────────────────────────────                                 // 64
//                                                                                                                     // 65
                                                                                                                       //
function getStreamByName(name) {                                                                                       // 68
    try {                                                                                                              // 69
        var request = qrsSrv + "/qrs/stream/full?filter=Name eq '" + name + "'";                                       // 70
        var response = HTTP.get(request, {                                                                             // 71
            params: {                                                                                                  // 72
                xrfkey: senseConfig.xrfkey                                                                             // 72
            },                                                                                                         // 72
            npmRequestOptions: configCerticates,                                                                       // 73
            data: {}                                                                                                   // 74
        });                                                                                                            // 71
        return response.data[0];                                                                                       // 77
    } catch (err) {                                                                                                    // 78
        console.error(err);                                                                                            // 79
        throw Error('get streamByName failed', err.message);                                                           // 80
    }                                                                                                                  // 81
}                                                                                                                      // 82
                                                                                                                       //
function getStreams() {                                                                                                // 89
    try {                                                                                                              // 90
        var call = {};                                                                                                 // 91
        call.action = 'Get list of streams';                                                                           // 92
        call.request = qrsSrv + '/qrs/stream/full';                                                                    // 93
        call.response = HTTP.get(call.request, {                                                                       // 94
            params: {                                                                                                  // 95
                xrfkey: senseConfig.xrfkey                                                                             // 95
            },                                                                                                         // 95
            npmRequestOptions: configCerticates,                                                                       // 96
            data: {}                                                                                                   // 97
        }); // REST_Log(call);                                                                                         // 94
                                                                                                                       //
        return call.response.data;                                                                                     // 100
    } catch (err) {                                                                                                    // 101
        console.error(err);                                                                                            // 102
        throw new Meteor.Error('getStreams failed', err.message);                                                      // 103
    }                                                                                                                  // 104
}                                                                                                                      // 105
                                                                                                                       //
; //                                                                                                                   // 105
// ─── CREATE STREAM ──────────────────────────────────────────────────────────────                                    // 108
//                                                                                                                     // 109
                                                                                                                       //
function createStream(name, generationUserId) {                                                                        // 112
    console.log('QRS Functions Stream, create the stream with name', name);                                            // 113
                                                                                                                       //
    try {                                                                                                              // 116
        check(name, String);                                                                                           // 117
        var response = qrs.post('/qrs/stream', null, {                                                                 // 118
            name: name                                                                                                 // 118
        }); // Meteor.call('updateLocalSenseCopy');                                                                    // 118
        //logging                                                                                                      // 121
                                                                                                                       //
        var call = {                                                                                                   // 122
            action: 'Create stream',                                                                                   // 123
            url: gitHubLinks.createStream,                                                                             // 124
            request: "HTTP.post(qlikServer + '/qrs/stream', { headers: " + JSON.stringify(authHeaders) + ", params: { 'xrfkey': " + senseConfig.xrfkey + "}, data: { name: " + name + "}}) --> USE OF HEADER AUTH ONLY FOR DEMO/REVERSE PROXY PURPOSES",
            response: response                                                                                         // 126
        };                                                                                                             // 122
        REST_Log(call, generationUserId);                                                                              // 129
        console.log('call.response;', call.response);                                                                  // 130
        return call.response;                                                                                          // 131
    } catch (err) {                                                                                                    // 132
        console.error(err);                                                                                            // 133
        throw new Meteor.Error('Create stream failed ', err.message);                                                  // 134
    }                                                                                                                  // 135
}                                                                                                                      // 136
                                                                                                                       //
;                                                                                                                      // 136
Meteor.methods({                                                                                                       // 139
    deleteStream: function (guid) {                                                                                    // 140
        check(guid, String); //logging only                                                                            // 141
                                                                                                                       //
        var call = {};                                                                                                 // 143
        call.action = 'Delete stream';                                                                                 // 144
        call.request = 'Delete stream: ' + guid;                                                                       // 145
        REST_Log(call);                                                                                                // 146
        var id = deleteStream(guid, Meteor.userId());                                                                  // 148
        Meteor.call('updateLocalSenseCopy');                                                                           // 149
        return id;                                                                                                     // 150
    },                                                                                                                 // 151
    createStream: function (name) {                                                                                    // 152
        var streamId = createStream(name);                                                                             // 153
        Meteor.call('updateLocalSenseCopy'); //store in the database that the user generated something, so we can later on remove it.
                                                                                                                       //
        GeneratedResources.insert({                                                                                    // 157
            'generationUserId': Meteor.userId(),                                                                       // 158
            'customer': null,                                                                                          // 159
            'streamId': streamId.data.id,                                                                              // 160
            'appId': null                                                                                              // 161
        });                                                                                                            // 157
        return streamId;                                                                                               // 163
    },                                                                                                                 // 164
    getStreams: function () {                                                                                          // 165
        return getStreams();                                                                                           // 166
    }                                                                                                                  // 167
});                                                                                                                    // 139
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QRSFunctionsSystemRules.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/server/QRSFunctionsSystemRules.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
    getSecurityRules: function () {                                                                                    // 1
        return getSecurityRules;                                                                                       // 1
    },                                                                                                                 // 1
    disableDefaultSecurityRules: function () {                                                                         // 1
        return disableDefaultSecurityRules;                                                                            // 1
    },                                                                                                                 // 1
    createSecurityRules: function () {                                                                                 // 1
        return createSecurityRules;                                                                                    // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var qrs = void 0,                                                                                                      // 1
    validateJSON = void 0;                                                                                             // 1
module.watch(require("/imports/api/config.js"), {                                                                      // 1
    qrs: function (v) {                                                                                                // 1
        qrs = v;                                                                                                       // 1
    },                                                                                                                 // 1
    validateJSON: function (v) {                                                                                       // 1
        validateJSON = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var QSLic = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSFunctionsLicense"), {                                                     // 1
    "*": function (v) {                                                                                                // 1
        QSLic = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
// import { APILogs } from '/imports/api/APILogs';                                                                     // 4
var fs = require('fs-extra');                                                                                          // 5
                                                                                                                       //
var path = require('path');                                                                                            // 6
                                                                                                                       //
function getSecurityRules(name) {                                                                                      // 14
    return QSLic.getSystemRules(name);                                                                                 // 15
}                                                                                                                      // 16
                                                                                                                       //
function disableDefaultSecurityRules() {                                                                               // 18
    console.log('------------------------------------');                                                               // 19
    console.log('disable Default SecurityRules');                                                                      // 20
    console.log('------------------------------------');                                                               // 21
    Meteor.settings.security.rulesToDisable.forEach(function (ruleName) {                                              // 22
        console.log('From Meteor.settings.security.rulesToDisable, Disable security rule: ', ruleName);                // 23
        var ruleDefinition = QSLic.getSystemRules(ruleName)[0];                                                        // 25
                                                                                                                       //
        if (ruleDefinition) {                                                                                          // 26
            ruleDefinition.disabled = true;                                                                            // 27
            var response = qrs.put('/qrs/SystemRule/' + ruleDefinition.id, null, ruleDefinition);                      // 28
        } else {                                                                                                       // 29
            console.warn('The system rule does not exist in Sense: ' + ruleName);                                      // 30
        }                                                                                                              // 31
    });                                                                                                                // 32
}                                                                                                                      // 33
                                                                                                                       //
function createSecurityRules() {                                                                                       // 35
    var file, securityRules;                                                                                           // 35
    return _regenerator2.default.async(function () {                                                                   // 35
        function createSecurityRules$(_context) {                                                                      // 35
            while (1) {                                                                                                // 35
                switch (_context.prev = _context.next) {                                                               // 35
                    case 0:                                                                                            // 35
                        console.log('------------------------------------');                                           // 36
                        console.log('create security rules in Qlik Sense based on import file');                       // 37
                        console.log('------------------------------------');                                           // 38
                        file = path.join(Meteor.settings.broker.automationBaseFolder, 'securityrules', 'import', 'securityRuleSettings.json'); // READ THE FILE 
                                                                                                                       //
                        _context.next = 6;                                                                             // 35
                        return _regenerator2.default.awrap(fs.readJson(file));                                         // 35
                                                                                                                       //
                    case 6:                                                                                            // 35
                        securityRules = _context.sent;                                                                 // 43
                        _context.prev = 7;                                                                             // 35
                        validateJSON(securityRules);                                                                   // 45
                        _context.next = 14;                                                                            // 35
                        break;                                                                                         // 35
                                                                                                                       //
                    case 11:                                                                                           // 35
                        _context.prev = 11;                                                                            // 35
                        _context.t0 = _context["catch"](7);                                                            // 35
                        throw new Error('Cant read the security rule definitions file: ' + file);                      // 35
                                                                                                                       //
                    case 14:                                                                                           // 35
                        securityRules.forEach(function (rule) {                                                        // 50
                            //check if the rule already exists in Sense                                                // 51
                            if (!QSLic.getSystemRules(rule.name).length) {                                             // 52
                                //if not exist, create it                                                              // 53
                                var response = qrs.post('/qrs/SystemRule', null, rule);                                // 54
                            } else {                                                                                   // 55
                                console.log('Security rule "' + rule.name + '" already existed');                      // 56
                            }                                                                                          // 57
                        });                                                                                            // 58
                                                                                                                       //
                    case 15:                                                                                           // 35
                    case "end":                                                                                        // 35
                        return _context.stop();                                                                        // 35
                }                                                                                                      // 35
            }                                                                                                          // 35
        }                                                                                                              // 35
                                                                                                                       //
        return createSecurityRules$;                                                                                   // 35
    }(), null, this, [[7, 11]]);                                                                                       // 35
}                                                                                                                      // 35
                                                                                                                       //
function stringToJSON(myString) {                                                                                      // 61
    var myJSONString = JSON.stringify(myString);                                                                       // 62
    var myEscapedJSONString = myJSONString.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
    console.log('myEscapedJSONString', myEscapedJSONString);                                                           // 72
}                                                                                                                      // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"APILogs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/APILogs.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    APILogs: function () {                                                                                             // 1
        return APILogs;                                                                                                // 1
    },                                                                                                                 // 1
    REST_Log: function () {                                                                                            // 1
        return REST_Log;                                                                                               // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
    Mongo: function (v) {                                                                                              // 1
        Mongo = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var APILogs = new Mongo.Collection('apiLogs');                                                                         // 3
                                                                                                                       //
function REST_Log(call) {                                                                                              // 5
    var userId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Not defined';                    // 5
    call.createDate = new Date();                                                                                      // 6
    call.generationUserId = userId;                                                                                    // 7
                                                                                                                       //
    if (Meteor.isServer) {                                                                                             // 8
        APILogs.rawCollection().insert(call);                                                                          // 9
    } else {                                                                                                           // 10
        APILogs.insert(call);                                                                                          // 11
    }                                                                                                                  // 12
                                                                                                                       //
    return;                                                                                                            // 13
}                                                                                                                      // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"apps.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/apps.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Apps: function () {                                                                                                  // 1
    return Apps;                                                                                                       // 1
  },                                                                                                                   // 1
  TemplateApps: function () {                                                                                          // 1
    return TemplateApps;                                                                                               // 1
  },                                                                                                                   // 1
  GeneratedResources: function () {                                                                                    // 1
    return GeneratedResources;                                                                                         // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Apps = new Mongo.Collection('apps');                                                                               // 3
var TemplateApps = new Mongo.Collection('templateApps');                                                               // 4
var GeneratedResources = new Mongo.Collection('generatedResources');                                                   // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"config.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/config.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
    senseConfig: function () {                                                                                         // 1
        return senseConfig;                                                                                            // 1
    },                                                                                                                 // 1
    missingParameters: function () {                                                                                   // 1
        return missingParameters;                                                                                      // 1
    },                                                                                                                 // 1
    compareKeys: function () {                                                                                         // 1
        return compareKeys;                                                                                            // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
    Mongo: function (v) {                                                                                              // 1
        Mongo = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Random = void 0;                                                                                                   // 1
module.watch(require("meteor/random"), {                                                                               // 1
    Random: function (v) {                                                                                             // 1
        Random = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
    "default": function (v) {                                                                                          // 1
        _ = v;                                                                                                         // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
var _QIXSchema = require('/node_modules/enigma.js/schemas/qix/12.20.0/schema.json'); //This is the config that we need to make available on the client (the webpage)
                                                                                                                       //
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 11
    var _senseConfig = {                                                                                               // 12
        "host": Meteor.settings.public.qlikSenseHost,                                                                  // 13
        "port": Meteor.settings.public.qlikSensePort,                                                                  // 14
        "virtualProxyClientUsage": Meteor.settings.public.virtualProxyClientUsage,                                     // 15
        "virtualProxySlideGenerator": Meteor.settings.public.slideGenerator.virtualProxy,                              // 16
        "webIntegrationDemoPort": Meteor.settings.public.webIntegrationDemoPort,                                       // 17
        "QIXSchema": _QIXSchema //ssbi and slide generator app id are set automatically on main.js (client side, via a call to the server)
        // config.SSBIAppId =                                                                                          // 20
        // config.slideGeneratorAppId =                                                                                // 21
                                                                                                                       //
    };                                                                                                                 // 12
} //SERVER SIDE                                                                                                        // 23
                                                                                                                       //
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 27
    var validateJSON = function (body) {                                                                               // 27
        try {                                                                                                          // 144
            var data = JSON.parse(body); // if came to here, then valid                                                // 145
                                                                                                                       //
            return data;                                                                                               // 147
        } catch (e) {                                                                                                  // 148
            // failed to parse                                                                                         // 149
            return null;                                                                                               // 150
        }                                                                                                              // 151
    };                                                                                                                 // 152
                                                                                                                       //
    var generateXrfkey = function () {                                                                                 // 27
        return Random.hexString(16);                                                                                   // 165
    }; // //https://www.npmjs.com/package/qrs                                                                          // 166
    //HEADER AUTHENTICATION                                                                                            // 169
                                                                                                                       //
                                                                                                                       //
    module.export({                                                                                                    // 1
        authHeaders: function () {                                                                                     // 1
            return authHeaders;                                                                                        // 1
        },                                                                                                             // 1
        _certs: function () {                                                                                          // 1
            return _certs;                                                                                             // 1
        },                                                                                                             // 1
        configCerticates: function () {                                                                                // 1
            return configCerticates;                                                                                   // 1
        },                                                                                                             // 1
        enigmaServerConfig: function () {                                                                              // 1
            return enigmaServerConfig;                                                                                 // 1
        },                                                                                                             // 1
        validateJSON: function () {                                                                                    // 1
            return validateJSON;                                                                                       // 1
        },                                                                                                             // 1
        engineConfig: function () {                                                                                    // 1
            return engineConfig;                                                                                       // 1
        },                                                                                                             // 1
        qlikHDRServer: function () {                                                                                   // 1
            return qlikHDRServer;                                                                                      // 1
        },                                                                                                             // 1
        qrsSrv: function () {                                                                                          // 1
            return qrsSrv;                                                                                             // 1
        },                                                                                                             // 1
        qrs: function () {                                                                                             // 1
            return qrs;                                                                                                // 1
        },                                                                                                             // 1
        QRSconfig: function () {                                                                                       // 1
            return QRSconfig;                                                                                          // 1
        }                                                                                                              // 1
    });                                                                                                                // 1
    var crypto = void 0;                                                                                               // 1
    module.watch(require("crypto"), {                                                                                  // 1
        "default": function (v) {                                                                                      // 1
            crypto = v;                                                                                                // 1
        }                                                                                                              // 1
    }, 3);                                                                                                             // 1
    var myQRS = void 0;                                                                                                // 1
    module.watch(require("/imports/api/server/QRSAPI"), {                                                              // 1
        myQRS: function (v) {                                                                                          // 1
            myQRS = v;                                                                                                 // 1
        }                                                                                                              // 1
    }, 4);                                                                                                             // 1
    console.log('This Sense SaaS demo tool uses this config as defined in the settings-XYZ.json file in the root folder: ', Meteor.settings.private);
                                                                                                                       //
    var fs = require('fs-extra');                                                                                      // 30
                                                                                                                       //
    var path = require('path'); // import fs from 'fs';                                                                // 31
                                                                                                                       //
                                                                                                                       //
    var bluebird = require('bluebird');                                                                                // 36
                                                                                                                       //
    var WebSocket = require('ws');                                                                                     // 37
                                                                                                                       //
    var _senseConfig = {                                                                                               // 39
        "host": Meteor.settings.public.qlikSenseHost,                                                                  // 40
        "SenseServerInternalLanIP": Meteor.settings.private.SenseServerInternalLanIP,                                  // 41
        "port": Meteor.settings.public.qlikSensePort,                                                                  // 42
        "useSSL": Meteor.settings.private.useSSL,                                                                      // 43
        "xrfkey": generateXrfkey(),                                                                                    // 44
        "virtualProxy": Meteor.settings.private.virtualProxy,                                                          // 45
        //used to connect via REST to Sense, we authenticate via a http header. not for production!!!                  // 45
        "virtualProxyClientUsage": Meteor.settings.public.virtualProxyClientUsage,                                     // 46
        "headerKey": Meteor.settings.private.headerKey,                                                                // 47
        "headerValue": process.env.USERDOMAIN + '\\' + process.env.USERNAME,                                           // 48
        //"QLIK-AB0Q2URN5T\\Qlikexternal",                                                                             // 48
        "isSecure": Meteor.settings.private.isSecure,                                                                  // 49
        "qrsPort": Meteor.settings.private.qrsPort,                                                                    // 50
        "enginePort": Meteor.settings.private.enginePort                                                               // 51
    };                                                                                                                 // 39
                                                                                                                       //
    if (missingParameters(_senseConfig)) {                                                                             // 54
        throw 'Missing parameters in _senseConfig, you did not populate the settings.json file in the project root of MeteorQRS, or with docker: did you mount the volume with the config including the settings.json file? (with the correct name)';
    }                                                                                                                  // 56
                                                                                                                       //
    if (!_senseConfig.host) {                                                                                          // 58
        throw new Meteor.Error('You have not started this meteor project with: meteor --settings settings-development.json ? You missed the reference to this settings file, or it is empty?');
    } //CONFIG FOR HTTP MODULE WITH HEADER AUTH (TO MAKE REST CALLS TO SENSE VIA HTTP CALLS)                           // 60
                                                                                                                       //
                                                                                                                       //
    var authHeaders = {                                                                                                // 63
        'hdr-usr': _senseConfig.headerValue,                                                                           // 64
        'X-Qlik-xrfkey': _senseConfig.xrfkey //                                                                        // 65
                                                                                                                       //
    };                                                                                                                 // 63
                                                                                                                       //
    if (!Meteor.settings.private.certificatesDirectory) {                                                              // 67
        Meteor.settings.private.certificatesDirectory = 'C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\.Local Certificates';
        console.log('Meteor.settings.private.certificatesDirectory was empty, setting it to default: ', Meteor.settings.broker.customerDataDir);
    }                                                                                                                  // 70
                                                                                                                       //
    var _certs = {                                                                                                     // 71
        ca: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/root.pem'),                              // 72
        key: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/client_key.pem'),                       // 73
        cert: fs.readFileSync(Meteor.settings.private.certificatesDirectory + '/client.pem') //if you use windows and this tool runs on the same machine, you can keep the parameters empty
        // and we use the user the node service runs under...                                                          // 78
                                                                                                                       //
    };                                                                                                                 // 71
    var qlikUserDomain = '';                                                                                           // 79
    var qlikUser = '';                                                                                                 // 80
                                                                                                                       //
    if (!Meteor.settings.broker.connectToSenseAsUserDirectory) {                                                       // 82
        qlikUserDomain = $(process.env.USERDOMAIN);                                                                    // 83
        qlikUser = $(process.env.USERDOMAIN);                                                                          // 84
    } else {                                                                                                           // 85
        qlikUserDomain = Meteor.settings.broker.connectToSenseAsUserDirectory;                                         // 86
        qlikUser = Meteor.settings.broker.connectToSenseAsUser;                                                        // 87
    }                                                                                                                  // 88
                                                                                                                       //
    var configCerticates = {                                                                                           // 90
        rejectUnauthorized: false,                                                                                     // 91
        hostname: _senseConfig.SenseServerInternalLanIP,                                                               // 92
        headers: {                                                                                                     // 93
            'x-qlik-xrfkey': _senseConfig.xrfkey,                                                                      // 94
            'X-Qlik-User': "UserDirectory=" + qlikUserDomain + ";UserId=" + qlikUser,                                  // 95
            //`UserDirectory=INTERNAL;UserId=sa_repository` you need to give this user extra roles before this works   // 95
            'Content-Type': 'application/json'                                                                         // 96
        },                                                                                                             // 93
        key: _certs.key,                                                                                               // 98
        cert: _certs.cert,                                                                                             // 99
        ca: _certs.ca                                                                                                  // 100
    };                                                                                                                 // 90
    console.log('configCerticates: we connect to Qlik Sense using these credentials: ', configCerticates); //used for engimaJS, the engine API javascript wrapper
                                                                                                                       //
    var _engineConfig = {                                                                                              // 105
        host: _senseConfig.SenseServerInternalLanIP,                                                                   // 106
        isSecure: _senseConfig.isSecure,                                                                               // 107
        port: Meteor.settings.private.enginePort,                                                                      // 108
        headers: {                                                                                                     // 109
            'X-Qlik-User': "UserDirectory=" + qlikUserDomain + ";UserId=" + qlikUser                                   // 110
        },                                                                                                             // 109
        ca: _certs.ca,                                                                                                 // 112
        key: _certs.key,                                                                                               // 113
        cert: _certs.cert,                                                                                             // 114
        passphrase: Meteor.settings.private.passphrase,                                                                // 115
        rejectUnauthorized: false,                                                                                     // 116
        // Don't reject self-signed certs                                                                              // 116
        appname: null,                                                                                                 // 117
        QIXSchema: _QIXSchema                                                                                          // 118
    };                                                                                                                 // 105
    var enigmaServerConfig = {                                                                                         // 121
        schema: _engineConfig.QIXSchema,                                                                               // 122
        // appId: appId,                                                                                               // 123
        session: {                                                                                                     // 124
            host: _engineConfig.host,                                                                                  // 125
            port: _engineConfig.port                                                                                   // 126
        },                                                                                                             // 124
        Promise: bluebird,                                                                                             // 128
        createSocket: function (url) {                                                                                 // 129
            return new WebSocket(url, {                                                                                // 130
                ca: _certs.ca,                                                                                         // 131
                key: _certs.key,                                                                                       // 132
                cert: _certs.cert,                                                                                     // 133
                headers: {                                                                                             // 134
                    'X-Qlik-User': "UserDirectory=" + qlikUserDomain + ";UserId=" + qlikUser                           // 135
                }                                                                                                      // 134
            });                                                                                                        // 130
        }                                                                                                              // 138
    };                                                                                                                 // 121
    var engineConfig = _engineConfig;                                                                                  // 155
    var qlikHDRServer = 'http://' + _senseConfig.SenseServerInternalLanIP + ':' + _senseConfig.port + '/' + _senseConfig.virtualProxy;
    var qrsSrv = 'https://' + _senseConfig.SenseServerInternalLanIP + ':' + _senseConfig.qrsPort;                      // 160
    var qrs = new myQRS();                                                                                             // 162
    var QRSconfig = {                                                                                                  // 170
        authentication: 'header',                                                                                      // 171
        host: _senseConfig.host,                                                                                       // 172
        port: _senseConfig.port,                                                                                       // 173
        useSSL: false,                                                                                                 // 174
        virtualProxy: _senseConfig.virtualProxy,                                                                       // 175
        //header proxy                                                                                                 // 175
        headerKey: _senseConfig.headerKey,                                                                             // 176
        headerValue: _senseConfig.headerValue //'mydomain\\justme'                                                     // 177
                                                                                                                       //
    };                                                                                                                 // 170
    Meteor.startup(function () {                                                                                       // 181
        function _callee() {                                                                                           // 181
            var file, exampleSettingsFile, keysEqual;                                                                  // 181
            return _regenerator2.default.async(function () {                                                           // 181
                function _callee$(_context) {                                                                          // 181
                    while (1) {                                                                                        // 181
                        switch (_context.prev = _context.next) {                                                       // 181
                            case 0:                                                                                    // 181
                                console.log('------------------------------------');                                   // 182
                                console.log('Validate settings.json parameters');                                      // 183
                                console.log('------------------------------------');                                   // 184
                                Meteor.absolutePath = path.resolve('.').split(path.sep + '.meteor')[0];                // 185
                                console.log('Meteor tries to find the settings.json file in Meteor.absolutePath:', Meteor.absolutePath);
                                file = path.join(Meteor.absolutePath, 'settings-development-example.json'); // READ THE FILE 
                                                                                                                       //
                                _context.next = 8;                                                                     // 181
                                return _regenerator2.default.awrap(fs.readJson(file));                                 // 181
                                                                                                                       //
                            case 8:                                                                                    // 181
                                exampleSettingsFile = _context.sent;                                                   // 190
                                _context.prev = 9;                                                                     // 181
                                validateJSON(exampleSettingsFile);                                                     // 192
                                _context.next = 16;                                                                    // 181
                                break;                                                                                 // 181
                                                                                                                       //
                            case 13:                                                                                   // 181
                                _context.prev = 13;                                                                    // 181
                                _context.t0 = _context["catch"](9);                                                    // 181
                                throw new Error('Meteor wants to check your settings.json with the parameters in the example settings.json in the project root. Error: Cant read the example settings definitions file: ' + file);
                                                                                                                       //
                            case 16:                                                                                   // 181
                                keysEqual = compareKeys(Meteor.settings, exampleSettingsFile);                         // 197
                                                                                                                       //
                                if (keysEqual) {                                                                       // 181
                                    _context.next = 19;                                                                // 181
                                    break;                                                                             // 181
                                }                                                                                      // 181
                                                                                                                       //
                                throw new Meteor.Error('Settings file incomplete', "Please verify if you have all the keys as specified in the settings-development-example.json in the project root folder. In my dev environment: C:UsersQlikexternalDocumentsGitHubQRSMeteor");
                                                                                                                       //
                            case 19:                                                                                   // 181
                            case "end":                                                                                // 181
                                return _context.stop();                                                                // 181
                        }                                                                                              // 181
                    }                                                                                                  // 181
                }                                                                                                      // 181
                                                                                                                       //
                return _callee$;                                                                                       // 181
            }(), null, this, [[9, 13]]);                                                                               // 181
        }                                                                                                              // 181
                                                                                                                       //
        return _callee;                                                                                                // 181
    }());                                                                                                              // 181
} //exit server side config                                                                                            // 203
                                                                                                                       //
                                                                                                                       //
var senseConfig = _senseConfig;                                                                                        // 205
                                                                                                                       //
function missingParameters(obj) {                                                                                      // 222
    for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                     // 223
        if (obj[key] !== null && obj[key] != "") return false;                                                         // 224
    }                                                                                                                  // 226
                                                                                                                       //
    return true;                                                                                                       // 227
}                                                                                                                      // 228
                                                                                                                       //
function compareKeys(a, b) {                                                                                           // 230
    var aKeys = Object.keys(a).sort();                                                                                 // 231
    var bKeys = Object.keys(b).sort();                                                                                 // 232
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);                                                            // 233
}                                                                                                                      // 234
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/customers.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    Customers: function () {                                                                                           // 1
        return Customers;                                                                                              // 1
    },                                                                                                                 // 1
    dummyCustomer: function () {                                                                                       // 1
        return dummyCustomer;                                                                                          // 1
    },                                                                                                                 // 1
    dummyCustomers: function () {                                                                                      // 1
        return dummyCustomers;                                                                                         // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
    Mongo: function (v) {                                                                                              // 1
        Mongo = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Customers = new Mongo.Collection('customers');                                                                     // 2
Meteor.methods({                                                                                                       // 4
    updateUserForCustomer: function (updatedUser) {                                                                    // 5
        var selection = {                                                                                              // 6
            'generationUserId': Meteor.userId(),                                                                       // 7
            'users.name': updatedUser.name                                                                             // 8
        };                                                                                                             // 6
        Customers.update(selection, {                                                                                  // 10
            $set: {                                                                                                    // 11
                'users.$': updatedUser                                                                                 // 11
            }                                                                                                          // 11
        });                                                                                                            // 11
    }                                                                                                                  // 12
});                                                                                                                    // 4
Customers.attachSchema(new SimpleSchema({                                                                              // 15
    name: {                                                                                                            // 16
        type: String,                                                                                                  // 17
        label: "Customer name"                                                                                         // 18
    },                                                                                                                 // 16
    checked: {                                                                                                         // 20
        type: Boolean,                                                                                                 // 21
        label: "Selected for the generation?",                                                                         // 22
        optional: true,                                                                                                // 23
        defaultValue: true                                                                                             // 24
    },                                                                                                                 // 20
    createdAt: {                                                                                                       // 26
        type: Date,                                                                                                    // 27
        label: "Date created",                                                                                         // 28
        optional: true                                                                                                 // 29
    },                                                                                                                 // 26
    createdBy: {                                                                                                       // 31
        type: Object,                                                                                                  // 32
        label: "Date created",                                                                                         // 33
        optional: true                                                                                                 // 34
    },                                                                                                                 // 31
    generationUserId: {                                                                                                // 36
        type: String,                                                                                                  // 37
        autoValue: function () {                                                                                       // 38
            return this.userId;                                                                                        // 39
        }                                                                                                              // 40
    },                                                                                                                 // 36
    users: {                                                                                                           // 42
        type: [Object],                                                                                                // 43
        optional: true                                                                                                 // 44
    },                                                                                                                 // 42
    "users.$": {                                                                                                       // 46
        type: Object                                                                                                   // 47
    },                                                                                                                 // 46
    "users.$.name": {                                                                                                  // 49
        type: String                                                                                                   // 50
    },                                                                                                                 // 49
    "users.$.group": {                                                                                                 // 52
        type: String,                                                                                                  // 53
        allowedValues: ['Consumer', 'Contributor', 'Developer', 'Admin', 'Global auditor']                             // 54
    },                                                                                                                 // 52
    "users.$.currentlyLoggedIn": {                                                                                     // 56
        type: Boolean,                                                                                                 // 57
        optional: true                                                                                                 // 58
    },                                                                                                                 // 56
    "users.$.country": {                                                                                               // 60
        type: String,                                                                                                  // 61
        allowedValues: ['Germany', 'United States', 'Italy']                                                           // 62
    }                                                                                                                  // 60
}));                                                                                                                   // 15
var dummyCustomer = {                                                                                                  // 66
    "name": faker.company.companyName(),                                                                               // 67
    "checked": true,                                                                                                   // 68
    "user": {                                                                                                          // 69
        "name": 'John',                                                                                                // 70
        "group": "Consumer",                                                                                           // 71
        "currentlyLoggedIn": false,                                                                                    // 72
        "country": "Germany"                                                                                           // 73
    }                                                                                                                  // 69
};                                                                                                                     // 66
var dummyCustomers = [{                                                                                                // 77
    "name": faker.company.companyName(),                                                                               // 78
    "checked": true,                                                                                                   // 79
    "users": [{                                                                                                        // 80
        "name": 'John',                                                                                                // 81
        "group": "Consumer",                                                                                           // 82
        "currentlyLoggedIn": false,                                                                                    // 83
        "country": "Germany"                                                                                           // 84
    }, {                                                                                                               // 80
        "name": 'Linda',                                                                                               // 86
        "group": "Contributor",                                                                                        // 87
        "currentlyLoggedIn": false,                                                                                    // 88
        "country": "United States"                                                                                     // 89
    }, {                                                                                                               // 85
        "name": 'Martin',                                                                                              // 91
        "group": "Developer",                                                                                          // 92
        "currentlyLoggedIn": false,                                                                                    // 93
        "country": "Italy"                                                                                             // 94
    }, {                                                                                                               // 90
        "name": 'Paul',                                                                                                // 96
        "group": "Admin",                                                                                              // 97
        "currentlyLoggedIn": false,                                                                                    // 98
        "country": "Italy"                                                                                             // 99
    }]                                                                                                                 // 95
}, {                                                                                                                   // 77
    "name": faker.company.companyName(),                                                                               // 102
    "checked": true,                                                                                                   // 103
    "users": [{                                                                                                        // 104
        "name": faker.name.findName(),                                                                                 // 105
        "group": "Consumer",                                                                                           // 106
        "currentlyLoggedIn": false,                                                                                    // 107
        "country": "Italy"                                                                                             // 108
    }]                                                                                                                 // 104
}, {                                                                                                                   // 101
    "name": faker.company.companyName(),                                                                               // 111
    "checked": true,                                                                                                   // 112
    "users": [{                                                                                                        // 113
        "name": faker.name.findName(),                                                                                 // 114
        "group": "Consumer",                                                                                           // 115
        "currentlyLoggedIn": false,                                                                                    // 116
        "country": "Italy"                                                                                             // 117
    }] // {                                                                                                            // 113
    //     "name": "QPMG Accountants",                                                                                 // 121
    //     "checked": true,                                                                                            // 122
    //     "users": [{                                                                                                 // 123
    //         "name": "Ron",                                                                                          // 124
    //         "group": "Global Auditor",                                                                              // 125
    //         "currentlyLoggedIn": false,                                                                             // 126
    //         "country": "Italy"                                                                                      // 127
    //     }]                                                                                                          // 128
    // }                                                                                                               // 129
    // { "name": "A&R Partners", "checked": true },                                                                    // 134
    //     { "name": "A2Z Solutions", "checked": true },                                                               // 135
    //     { "name": "Aaron D. Meyer & Associates", "checked": true },                                                 // 136
    //     { "name": "Aaron Products", "checked": true },                                                              // 137
    // { "name": "Active Data", "checked": true },                                                                     // 138
    // { "name": "Ben and Jerry’s", "checked": true },                                                                 // 139
    // { "name": "Benedict", "checked": true },                                                                        // 140
    // { "name": "Bizmarts", "checked": true },                                                                        // 141
    // { "name": "C & C  Design", "checked": true },                                                                   // 142
    // { "name": "C & J Engineering", "checked": true },                                                               // 143
    // { "name": "CAF Systemhaus", "checked": true },                                                                  // 144
    // { "name": "CAM Group", "checked": true },                                                                       // 145
    // { "name": "Caribian Specialties", "checked": true },                                                            // 146
    // { "name": "City Fresh Foods", "checked": true },                                                                // 147
    // { "name": "Clearout", "checked": true },                                                                        // 148
    // { "name": "David Spencer Ltd.", "checked": true },                                                              // 149
    // { "name": "Dayton Malleable Inc.", "checked": true },                                                           // 150
    // { "name": "DCP Research", "checked": true },                                                                    // 151
    // { "name": "DCS International", "checked": true },                                                               // 152
    // { "name": "DCS Laboratory", "checked": true },                                                                  // 153
    // { "name": "Deak-Perera Group.", "checked": true },                                                              // 154
    // { "name": "Earth", "checked": true },                                                                           // 155
    // { "name": "eDistrict", "checked": true },                                                                       // 156
    // { "name": "EDP", "checked": true },                                                                             // 157
    // { "name": "Ethyl Corporation", "checked": true },                                                               // 158
    // { "name": "Federal Focus", "checked": true },                                                                   // 159
    // { "name": "Fill It", "checked": true },                                                                         // 160
    // { "name": "Filmotype", "checked": true },                                                                       // 161
    // { "name": "Fins", "checked": true },                                                                            // 162
    // { "name": "Gate", "checked": true },                                                                            // 163
    // { "name": "Gulf and Western Industries", "checked": true },                                                     // 164
    // { "name": "Harte-Hanks (formerly Locator)", "checked": true },                                                  // 165
    // { "name": "Harvard Trust Company", "checked": true },                                                           // 166
    // { "name": "HCHS", "checked": true },                                                                            // 167
    // { "name": "Healtheon", "checked": true },                                                                       // 168
    // { "name": "Hetrick Systems", "checked": true },                                                                 // 169
    // { "name": "Home Team", "checked": true },                                                                       // 170
    // { "name": "Homebound", "checked": true },                                                                       // 171
    // { "name": "IBVA", "checked": true },                                                                            // 172
    // { "name": "Icon", "checked": true },                                                                            // 173
    // { "name": "Icon Site Builders", "checked": true },                                                              // 174
    // { "name": "Idyllwild", "checked": true },                                                                       // 175
    // { "name": "J. S. Lee Associates", "checked": true },                                                            // 176
    // { "name": "K International", "checked": true },                                                                 // 177
    // { "name": "K.C. Irving", "checked": true },                                                                     // 178
    // { "name": "Kari & Associates", "checked": true },                                                               // 179
    // { "name": "Karsing", "checked": true },                                                                         // 180
    // { "name": "Kazinformcom", "checked": true },                                                                    // 181
    // { "name": "KentISP", "checked": true },                                                                         // 182
    // { "name": "Kool-Seal", "checked": true },                                                                       // 183
    // { "name": "Laker Airways", "checked": true },                                                                   // 184
    // { "name": "Livermore  Laboratories (LSLI)", "checked": true },                                                  // 185
    // { "name": "LiveWire BBS and   Favourite Links", "checked": true },                                              // 186
    // { "name": "MATRIX", "checked": true },                                                                          // 187
    // { "name": "Miles Laboratories, Inc.", "checked": true },                                                        // 188
    // { "name": "NACSCORP", "checked": true },                                                                        // 189
    // { "name": "Onestar", "checked": true },                                                                         // 190
    // { "name": "Pace", "checked": true },                                                                            // 191
    // { "name": "Pacific Group", "checked": true },                                                                   // 192
    // { "name": "Pacific Matics", "checked": true },                                                                  // 193
    // { "name": "Pacific Sierra Research", "checked": true },                                                         // 194
    // { "name": "Pacific Voice", "checked": true },                                                                   // 195
    // { "name": "Pacific West Enterprises", "checked": true },                                                        // 196
    // { "name": "PacificServ", "checked": true },                                                                     // 197
    // { "name": "Panngea", "checked": true },                                                                         // 198
    // { "name": "PAP (Maintenance)", "checked": true },                                                               // 199
    // { "name": "Paracel", "checked": true },                                                                         // 200
    // { "name": "Patient", "checked": true },                                                                         // 201
    // { "name": "Pinnacle Micro", "checked": true },                                                                  // 202
    // { "name": "QualServe", "checked": true },                                                                       // 203
    // { "name": "Quantum 4Xyte  Architects", "checked": true },                                                       // 204
    // { "name": "Qwest", "checked": true },                                                                           // 205
    // { "name": "R&R Group", "checked": true },                                                                       // 206
    // { "name": "R.J. Matter & Associates", "checked": true },                                                        // 207
    // { "name": "Ra Co Amo", "checked": true },                                                                       // 208
    // { "name": "RC", "checked": true },                                                                              // 209
    // { "name": "Ready-to-Run", "checked": true },                                                                    // 210
    // { "name": "Remedy", "checked": true },                                                                          // 211
    // { "name": "Renegade info Crew", "checked": true },                                                              // 212
    // { "name": "Reuters Usability Group", "checked": true },                                                         // 213
    // { "name": "ReviewBooth", "checked": true },                                                                     // 214
    // { "name": "RFI Corporation", "checked": true },                                                                 // 215
    // { "name": "Road Warrior International", "checked": true },                                                      // 216
    // { "name": "Robust Code", "checked": true },                                                                     // 217
    // { "name": "Sage", "checked": true },                                                                            // 218
    // { "name": "Sagent", "checked": true },                                                                          // 219
    // { "name": "Salamander Junction", "checked": true },                                                             // 220
    // { "name": "Satronix", "checked": true },                                                                        // 221
    // { "name": "Satyam", "checked": true },                                                                          // 222
    // { "name": "Scientific Atlanta", "checked": true },                                                              // 223
    // { "name": "ScotGold Products", "checked": true },                                                               // 224
    // { "name": "Screen Saver.com", "checked": true },                                                                // 225
    // { "name": "Sifton Properties Limited", "checked": true },                                                       // 226
    // { "name": "Sigma", "checked": true },                                                                           // 227
    // { "name": "Signature", "checked": true },                                                                       // 228
    // { "name": "SignatureFactory", "checked": true },                                                                // 229
    // { "name": "Soloman Brothers", "checked": true },                                                                // 230
    // { "name": "Southern Company", "checked": true },                                                                // 231
    // { "name": "Stone Consolidated Corporation", "checked": true },                                                  // 232
    // { "name": "Talou", "checked": true },                                                                           // 233
    // { "name": "Tampere", "checked": true },                                                                         // 234
    // { "name": "Tandy Corporation", "checked": true },                                                               // 235
    // { "name": "Tangent", "checked": true },                                                                         // 236
    // { "name": "Tao Group", "checked": true },                                                                       // 237
    // { "name": "Target Marketing", "checked": true },                                                                // 238
    // { "name": "Team ASA", "checked": true },                                                                        // 239
    // { "name": "Team Financial Management Systems", "checked": true },                                               // 240
    // { "name": "Teca-Print", "checked": true },                                                                      // 241
    // { "name": "Time Warner", "checked": true },                                                                     // 242
    // { "name": "Towmotor Corporation", "checked": true },                                                            // 243
    // { "name": "Tredegar Company", "checked": true },                                                                // 244
    // { "name": "Trend Line Corporation", "checked": true },                                                          // 245
    // { "name": "U. S. Exchange", "checked": true },                                                                  // 246
    // { "name": "Unison Management Concepts", "checked": true },                                                      // 247
    // { "name": "United States  (USIT)", "checked": true },                                                           // 248
    // { "name": "UUmail", "checked": true },                                                                          // 249
    // { "name": "ValiCert", "checked": true },                                                                        // 250
    // { "name": "Valley  Solutions", "checked": true },                                                               // 251
    // { "name": "Valpatken", "checked": true },                                                                       // 252
    // { "name": "Vanstar", "checked": true },                                                                         // 253
    // { "name": "Venable", "checked": true },                                                                         // 254
    // { "name": "Venred", "checked": true },                                                                          // 255
    // { "name": "Watcom International", "checked": true },                                                            // 256
    // { "name": "Xentec", "checked": true },                                                                          // 257
    // { "name": "Xilinx", "checked": true },                                                                          // 258
    // { "name": "XVT", "checked": true },                                                                             // 259
    // { "name": "Zero Assumption Recovery", "checked": true },                                                        // 260
    // { "name": "Zilog", "checked": true },                                                                           // 261
    // { "name": "Zitel", "checked": true },                                                                           // 262
                                                                                                                       //
}];                                                                                                                    // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"streams.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/streams.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Streams: function () {                                                                                               // 1
    return Streams;                                                                                                    // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Streams = new Mongo.Collection('streams');                                                                         // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"accounts-config.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/accounts-config.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AccountsTemplates.configure({                                                                                          // 2
    // Behavior                                                                                                        // 3
    confirmPassword: false,                                                                                            // 4
    enablePasswordChange: true,                                                                                        // 5
    forbidClientAccountCreation: false,                                                                                // 6
    overrideLoginErrors: true,                                                                                         // 7
    sendVerificationEmail: false,                                                                                      // 8
    lowercaseUsername: false,                                                                                          // 9
    focusFirstInput: true,                                                                                             // 10
    // Appearance                                                                                                      // 12
    showAddRemoveServices: false,                                                                                      // 13
    showForgotPasswordLink: false,                                                                                     // 14
    showLabels: true,                                                                                                  // 15
    showPlaceholders: true,                                                                                            // 16
    showResendVerificationEmailLink: false,                                                                            // 17
    // Client-side Validation                                                                                          // 19
    continuousValidation: false,                                                                                       // 20
    negativeFeedback: false,                                                                                           // 21
    negativeValidation: true,                                                                                          // 22
    positiveValidation: true,                                                                                          // 23
    positiveFeedback: true,                                                                                            // 24
    showValidating: true,                                                                                              // 25
    // // Privacy Policy and Terms of Use                                                                              // 27
    // privacyUrl: 'privacy',                                                                                          // 28
    // termsUrl: 'terms-of-use',                                                                                       // 29
    // Redirects                                                                                                       // 31
    homeRoutePath: '/',                                                                                                // 32
    redirectTimeout: 4000,                                                                                             // 33
    // // Hooks                                                                                                        // 35
    // onLogoutHook: myLogoutFunc,                                                                                     // 36
    // onSubmitHook: mySubmitFunc,                                                                                     // 37
    // preSignUpHook: myPreSubmitFunc,                                                                                 // 38
    // postSignUpHook: myPostSubmitFunc,                                                                               // 39
    // Texts                                                                                                           // 41
    texts: {                                                                                                           // 42
        button: {                                                                                                      // 43
            signUp: "Register now to start using the Qlik Sense SaaS demo"                                             // 44
        },                                                                                                             // 43
        socialSignUp: "Register",                                                                                      // 46
        socialIcons: {                                                                                                 // 47
            "meteor-developer": "fa fa-rocket"                                                                         // 48
        },                                                                                                             // 47
        title: {                                                                                                       // 50
            forgotPwd: "Recover Your Password"                                                                         // 51
        }                                                                                                              // 50
    }                                                                                                                  // 42
});                                                                                                                    // 2
AccountsTemplates.configureRoute('signIn');                                                                            // 56
AccountsTemplates.configureRoute('changePwd'); // AccountsTemplates.configureRoute('enrollAccount');                   // 57
// AccountsTemplates.configureRoute('forgotPwd');                                                                      // 59
// AccountsTemplates.configureRoute('resetPwd');                                                                       // 60
                                                                                                                       //
AccountsTemplates.configureRoute('signUp');                                                                            // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"UIHelpers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/UIHelpers.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    gitHubLinks: function () {                                                                                         // 1
        return gitHubLinks;                                                                                            // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
var Apps = void 0,                                                                                                     // 1
    TemplateApps = void 0;                                                                                             // 1
module.watch(require("/imports/api/apps"), {                                                                           // 1
    Apps: function (v) {                                                                                               // 1
        Apps = v;                                                                                                      // 1
    },                                                                                                                 // 1
    TemplateApps: function (v) {                                                                                       // 1
        TemplateApps = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Streams = void 0;                                                                                                  // 1
module.watch(require("/imports/api/streams"), {                                                                        // 1
    Streams: function (v) {                                                                                            // 1
        Streams = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var Customers = void 0;                                                                                                // 1
module.watch(require("/imports/api/customers"), {                                                                      // 1
    Customers: function (v) {                                                                                          // 1
        Customers = v;                                                                                                 // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var senseConfig = void 0;                                                                                              // 1
module.watch(require("/imports/api/config"), {                                                                         // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var gitHubLinks = {                                                                                                    // 17
    createStream: 'https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsStream.js#L53',       // 18
    copyApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L175",              // 19
    replaceAndReloadApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L69",   // 20
    publishApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L281",           // 21
    requestTicket: "https://github.com/QHose/QRSMeteor/blob/50bf903dc67d8d1b3757b572e8b2dedbb63202da/imports/api/server/QPSFunctions.js#L213",
    createPasport: "https://github.com/QHose/QRSMeteor/blob/50bf903dc67d8d1b3757b572e8b2dedbb63202da/imports/api/server/QPSFunctions.js#L56",
    redirectURLReceived: "https://github.com/QHose/QRSMeteor/blob/master/imports/SSO/client/SSO.js#L88",               // 24
    deleteApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L263",            // 25
    logoutUser: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QPSFunctions.js#L174",              // 26
    saveApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L127",              // 27
    getScript: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L94",             // 28
    setScript: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L106",            // 29
    reloadApp: "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QRSFunctionsApp.js#L119"             // 30
};                                                                                                                     // 17
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 33
    var freshEnvironment = function () {                                                                               // 33
        if (!Customers.find().count() && !TemplateApps.find().count()) {                                               // 253
            // Session.set('currentStep', 0);                                                                          // 254
            return true;                                                                                               // 255
        }                                                                                                              // 256
    };                                                                                                                 // 257
                                                                                                                       //
    var currentStep = function () {                                                                                    // 33
        // console.log('the current step session', Session.get('currentStep'));//                                      // 289
        //step 0: fresh/resetted environment                                                                           // 291
        if (freshEnvironment()) {                                                                                      // 292
            return 0;                                                                                                  // 293
        } //step 1 insert customers                                                                                    // 294
        else if (Session.get('currentStep') === 1) {                                                                   // 292
                Router.go('users');                                                                                    // 297
                return 1;                                                                                              // 298
            } //step 2 there are customers, but no template                                                            // 299
            else if ( // (Customers.find().count() && !TemplateApps.find().count()) &&                                 // 296
                Session.get('currentStep') === 2) {                                                                    // 303
                    return 2;                                                                                          // 304
                } //step 3                                                                                             // 305
                else if ( // Customers.find().count() &&                                                               // 301
                    // TemplateApps.find().count() &&                                                                  // 309
                    Session.get('currentStep') === 3 && !Session.equals('loadingIndicator', 'loading')) {              // 310
                        // console.log('loading indicator is ', Session.get('loadingIndicator') )                      // 312
                        return 3;                                                                                      // 313
                    } //step 4                                                                                         // 314
                    else if (Session.get('currentStep') === 4 // &&                                                    // 307
                        // Customers.find().count() &&                                                                 // 319
                        // TemplateApps.find().count()                                                                 // 320
                        ) {                                                                                            // 316
                                return 4;                                                                              // 322
                            } else if (Session.equals('loadingIndicator', 'loading')) {                                // 323
                            return;                                                                                    // 324
                        } else {                                                                                       // 325
                            Session.set('currentStep', 3);                                                             // 326
                            return 3;                                                                                  // 327
                        }                                                                                              // 328
    };                                                                                                                 // 329
                                                                                                                       //
    module.export({                                                                                                    // 1
        freshEnvironment: function () {                                                                                // 1
            return freshEnvironment;                                                                                   // 1
        },                                                                                                             // 1
        currentStep: function () {                                                                                     // 1
            return currentStep;                                                                                        // 1
        }                                                                                                              // 1
    });                                                                                                                // 1
                                                                                                                       //
    var Cookies = require('js-cookie'); // console.log('Setup generic helper functions, for functions every template needs');
                                                                                                                       //
                                                                                                                       //
    Template.registerHelper('formatDate', function (date) {                                                            // 37
        return moment(date).format('DD-MM-YYYY');                                                                      // 38
    }); // // Template.registerHelper('formatNumber', function(myNumber) {                                             // 40
    //     var commaFormat = d3.format(",");                                                                           // 43
    //     // The expression /,/g is a regular expression that matches all commas.                                     // 44
    //     return commaFormat(myNumber)                                                                                // 45
    //         .replace(/,/g, ".");                                                                                    // 46
    // });                                                                                                             // 47
                                                                                                                       //
    Template.registerHelper('URL_Youtube_howToDemo', function () {                                                     // 49
        return 'https://www.youtube.com/embed/OulQS-1fH-A?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk';                    // 50
    });                                                                                                                // 51
    Template.registerHelper('URL_Youtube_quickIntro', function () {                                                    // 52
        return '';                                                                                                     // 53
    });                                                                                                                // 54
    Template.registerHelper('URL_Youtube_1mflashyIntro', function () {                                                 // 56
        return 'https://www.youtube.com/embed/W3gDKdv6K8Y';                                                            // 57
    });                                                                                                                // 58
    Template.registerHelper('URL_Youtube_playlist', function () {                                                      // 60
        return 'https://www.youtube.com/playlist?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk';                             // 61
    });                                                                                                                // 62
    Template.registerHelper('URL_Youtube_integrated_flow', function () {                                               // 63
        return "https://www.youtube.com/embed/M49nv6on5Eg?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk";                    // 64
    });                                                                                                                // 65
    Template.registerHelper('URL_Youtube_generic_security_intro', function () {                                        // 67
        return "https://www.youtube.com/embed/sdCVsMzTf64";                                                            // 68
    });                                                                                                                // 69
    Template.registerHelper('URL_Youtube_webintegration_introduction', function () {                                   // 72
        return "https://www.youtube.com/embed/zuNvZ_UTmow?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk";                    // 73
    }); //QAP                                                                                                          // 74
                                                                                                                       //
    Template.registerHelper('URL_Youtube_webintegration_extended', function () {                                       // 77
        return "https://www.youtube.com/embed/yLTqzftDa7s";                                                            // 78
    });                                                                                                                // 79
    Template.registerHelper('URL_Youtube_architecture_introduction', function () {                                     // 81
        return "https://www.youtube.com/embed/sv5nKDvmRPI?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk";                    // 82
    });                                                                                                                // 83
    Template.registerHelper('URL_Youtube_security_introduction', function () {                                         // 85
        return "https://www.youtube.com/embed/XJ9dOHoMiXE?list=PLqJfqgR62cVAZxS34WGnByjASKrGf0Fpk";                    // 86
    });                                                                                                                // 87
    Template.registerHelper('URL_Youtube_security_deepDive', function () {                                             // 89
        return "https://www.youtube.com/embed/iamo6RLc5Pg";                                                            // 90
    });                                                                                                                // 91
    Template.registerHelper('URL_Youtube_concept_behind', function () {                                                // 93
        return "https://www.youtube.com/embed/1PjcTFnC4Mo";                                                            // 94
    });                                                                                                                // 95
    Template.registerHelper('doc_demo_manual', function () {                                                           // 97
        return '/docs/How to demo the Qlik Sense SaaS demo platform.pdf';                                              // 98
    });                                                                                                                // 99
    Template.registerHelper('doc_sec_function_task_matrix', function () {                                              // 101
        return '/docs/QlikSense Authorizations - Function and Tasks_Demo.xlsx';                                        // 102
    });                                                                                                                // 103
    Template.registerHelper('doc_securtityIntegration', function () {                                                  // 105
        return 'https://community.qlik.com/docs/DOC-17599';                                                            // 106
    });                                                                                                                // 107
    Template.registerHelper('doc_processIntegration', function () {                                                    // 108
        return 'https://community.qlik.com/docs/DOC-17831';                                                            // 109
    });                                                                                                                // 110
    Template.registerHelper('doc_integrationOverview', function () {                                                   // 113
        return 'https://community.qlik.com/docs/DOC-9533';                                                             // 114
    });                                                                                                                // 115
    Template.registerHelper('doc_sourceCode', function () {                                                            // 117
        return '/docs/Qlik Sense SaaS demo tool documentation of source code.docx';                                    // 118
    });                                                                                                                // 119
    Template.registerHelper('doc_demo_setup_instructions', function () {                                               // 121
        return '/docs/Qlik Sense SaaS demo tool setup instructions.docx';                                              // 122
    });                                                                                                                // 123
    Template.registerHelper('doc_webIntegration', function () {                                                        // 125
        return 'https://community.qlik.com/docs/DOC-17834';                                                            // 126
    });                                                                                                                // 127
    Template.registerHelper('doc_dataIntegration', function () {                                                       // 128
        return 'https://onedrive.live.com/view.aspx?cid=0805405928a75727&id=documents&resid=805405928A75727%211330&app=OneNote&authkey=!ANwk5S8KPC__-dw&&wd=target%28%2F%2FEMBEDDED%20ANALYTICS.one%7Cbf2972be-48a0-46fa-af7a-f6d2f80cf06b%2FData%20integration%20Combine%20sources%20into%20one%20associative%20model%7Ce669a0a2-9a83-470e-aae8-ba63ac500038%2F%29';
    });                                                                                                                // 130
    Template.registerHelper('seq_ticketing_flow', function () {                                                        // 132
        return "http://knsv.github.io/mermaid/live_editor/#/view/c2VxdWVuY2VEaWFncmFtCkJyb3dzZXItPj5NZXRlb3Igd2ViIGludGVncmF0aW9uIGRlbW86IFVzZXIgbG9ncyBpbiBpbnRvIE1ldGVvciAKQnJvd3Nlci0-PiBQcm94eTogSUZyYW1lIHRyaWVzIHRvIG9wZW4gU2Vuc2UgY29udGVudCB2aWEgbGluayB0aGF0IGNvbnRhaW5zIC9wcm94eS8KUHJveHktPj5NZXRlb3IgU1NPIGNsaWVudDogUmVkaXJlY3QgcmVxdWVzdCB0byB3ZWJwYWdlIG9uIHRoZSBjbGllbnQgKGNsaWVudCBzaWRlIHJvdXRlKS4KCk5vdGUgcmlnaHQgb2YgUHJveHk6IFByb3h5IGFsc28gaW5jbHVkZXMgdGFyZ2V0SWQgPSA8SUQgZm9yIHRoZSBvcmlnaW5hbCBVUkkgdGhhdCB0aGUgdXNlciB0cmllcyB0byBhY2Nlc3M-LCBhbmQgcHJveHlSZXN0VXJpID0gPHRoZSBVUkkgd2hlcmUgdGhlIGF1dGhlbnRpY2F0aW9uIG1vZHVsZSBjYW4gYWNjZXNzIHRoZSBSRVNUIEFQST4KTWV0ZW9yIFNTTyBjbGllbnQtPk1ldGVvciBzZXJ2ZXI6ICBjbGllbnQgY2FsbHMgKHVzZXIgYXdhcmUpIHNlcnZlciBzaWRlIG1ldGhvZApOb3RlIHJpZ2h0IG9mIE1ldGVvciBzZXJ2ZXI6IFNpbmNlIHRoZSB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluIGluIE1ldGVvciwgd2UgY2FuIHJlcXVlc3QgdGhlIHVzZXJJRCBhbmQgZ3JvdXAgbWVtYmVyc2hpcCBmcm9tIHRoZSBNZXRlb3Igc2Vzc2lvbi4gVHJ1c3QgbWVjaGFuaXNtOiBTZXJ2ZXIgaW1wb3J0ZWQgUWxpayBTZW5zZSBjbGllbnQgY2VydGlmaWNhdGUuCk1ldGVvciBzZXJ2ZXItPj5RUFMgQVBJOiBSZXF1ZXN0IHRpY2tldCBhdCBRUFMgQVBJLCBwcm92aWRlIHRoZSB1c2VySWQgYW5kIGdyb3VwcyBpbiBKU09OLgpOb3RlIHJpZ2h0IG9mIE1ldGVvciBzZXJ2ZXI6IE9wdGlvbmFsbHkgaW5jbHVkZSB0aGUgcmVkaXJlY3QgcGFyYW1ldGVyIHRvIGZvcndhcmQgdGhlIHVzZXIgYmFjayB0byB0aGUgcGFnZSBoZSBpbml0aWFsbHkgdHJpZWQgdG8gYWNjZXNzLgpRUFMgQVBJLS0-Pk1ldGVvciBzZXJ2ZXI6IFFQUyBBUEkgcmV0dXJucyBhIHRpY2tldCBudW1iZXIgKGFuZCBwb3NzaWJseSByZWRpcmVjdCBVUkwpIHdoaWNoIHlvdSBoYXZlIHRvIGFwcGVuZCBpbiB0aGUgVVJMIApNZXRlb3Igc2VydmVyLS0-PiBNZXRlb3Igd2ViIGludGVncmF0aW9uIGRlbW86IENyZWF0ZSBhIHJlZGlyZWN0IFVSTCB3aGljaCB0aGUgY2xpZW50IGNvZGUgY2FuIHB1dCBpbiB0aGUgYnJvd3NlciBVUkwgYmFyLiAKTm90ZSByaWdodCBvZiBNZXRlb3Igd2ViIGludGVncmF0aW9uIGRlbW86IENsaWVudCBzaWRlIGNvZGUsIHJlcGxhY2VzIHRoZSB1cmwgaW4gYnJvd3NlciwgYW5kIGZvcndhcmRzIHRoZSB1c2VyIHRvIFFsaWsgU2Vuc2UuIFVzZXIgbm93IHJlY2VpdmVzIGEgUWxpayBTZW5zZSBzZXNzaW9uIGNvb2tpZSAoc2VlIHZpcnR1YWwgcHJveHkgY29uZmlnKSwgYW5kIGFuZCBzdWNoIHNpbmdsZSBzaWduIG9uIGlzIGNvbmZpZ3VyZWQu";
    });                                                                                                                // 134
    Template.registerHelper('github_create_stream', function () {                                                      // 136
        return gitHubLinks.createStream;                                                                               // 137
    });                                                                                                                // 138
    Template.registerHelper('github_copy_app', function () {                                                           // 140
        return gitHubLinks.copyApp;                                                                                    // 141
    });                                                                                                                // 142
    Template.registerHelper('github_replace_and_reload_app', function () {                                             // 144
        return gitHubLinks.replaceAndReloadApp;                                                                        // 145
    });                                                                                                                // 146
    Template.registerHelper('github_publish_app', function () {                                                        // 148
        return gitHubLinks.publishApp;                                                                                 // 149
    });                                                                                                                // 150
    Template.registerHelper('github_logout_user', function () {                                                        // 152
        return "https://github.com/QHose/QRSMeteor/blob/master/imports/api/server/QPSFunctions.js#L18";                // 153
    });                                                                                                                // 154
    Template.registerHelper('senseServerHub', function () {                                                            // 156
        return 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + senseConfig.virtualProxyClientUsage + '/hub';
    });                                                                                                                // 158
    Template.registerHelper('senseServerDevHub', function () {                                                         // 160
        return 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + senseConfig.virtualProxyClientUsage + '/dev-hub';
    });                                                                                                                // 162
    Template.registerHelper('senseServerQMC', function () {                                                            // 164
        return 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + senseConfig.virtualProxyClientUsage + '/qmc';
    });                                                                                                                // 166
    Template.registerHelper('senseServer', function () {                                                               // 168
        return 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + senseConfig.virtualProxyClientUsage;      // 169
    });                                                                                                                // 170
    Template.registerHelper('webIntegrationDemo', function () {                                                        // 172
        return 'http://' + Meteor.settings.public.webIntegrationHost + ':' + Meteor.settings.public.webIntegrationDemoPort;
    }); //Integration presentation Iframe selector                                                                     // 174
                                                                                                                       //
    Template.registerHelper('IFrameURLChapterSelection', function () {                                                 // 177
        var appId = Cookies.get('slideGeneratorAppId'); //senseConfig.slideGeneratorAppId;                             // 178
                                                                                                                       //
        var IntegrationPresentationSelectionSheet = Meteor.settings.public.slideGenerator.selectionSheet; //'DYTpxv'; selection sheet of the slide generator
                                                                                                                       //
        var proxy = Meteor.settings.public.slideGenerator.virtualProxy;                                                // 180
        return 'http://' + senseConfig.host + ':' + senseConfig.port + '/' + proxy + '/single/?appid=' + appId + '&sheet=' + IntegrationPresentationSelectionSheet + '&opt=currsel';
    }); // Template.registerHelper('authenticatedSlideGenerator', function() {                                         // 182
    //     return Session.get('authenticatedSlideGenerator');                                                          // 185
    // });                                                                                                             // 186
                                                                                                                       //
    Template.registerHelper('shrinkForSlideSorter', function () {                                                      // 188
        return Cookies.get('showSlideSorter') === "true" ? "shrink" : ""; //                                           // 189
    });                                                                                                                // 190
    Template.registerHelper('groupSelectedSlideGenerator', function () {                                               // 192
        return Session.get('groupForPresentation'); //user selected a presentation type?                               // 193
    }); //role that defines your role in the whole integration.qlik.com site, based on this we make selections in the slide generator.
                                                                                                                       //
    Template.registerHelper('mainUserRole', function () {                                                              // 197
        return Cookies.get('currentMainRole');                                                                         // 198
    });                                                                                                                // 199
    Template.registerHelper('isSelected', function () {                                                                // 201
        return someValue ? 'selected' : '';                                                                            // 202
    });                                                                                                                // 203
    Template.registerHelper('customers', function () {                                                                 // 205
        return Customers.find({});                                                                                     // 206
    }); //used for Aldeed autoform                                                                                     // 207
                                                                                                                       //
    Template.registerHelper("Customers", Customers);                                                                   // 210
    Template.registerHelper('noCustomers', function () {                                                               // 212
        return !Customers.find({}).count();                                                                            // 213
    });                                                                                                                // 215
    Template.registerHelper('noTemplateApps', function () {                                                            // 217
        return !TemplateApps.find({}).count();                                                                         // 218
    }); //generic helpers to return the collection to the blaze template                                               // 220
                                                                                                                       //
    Template.registerHelper('customersCollection', function () {                                                       // 223
        return Customers.find({}, {                                                                                    // 224
            sort: {                                                                                                    // 225
                checked: -1                                                                                            // 226
            }                                                                                                          // 225
        });                                                                                                            // 224
    });                                                                                                                // 229
    Template.registerHelper('templateAppsCollection', function () {                                                    // 231
        return TemplateApps.find();                                                                                    // 232
    });                                                                                                                // 233
    Template.registerHelper('appsCollection', function () {                                                            // 235
        return Apps.find();                                                                                            // 236
    });                                                                                                                // 237
    Template.registerHelper('streamsCollection', function () {                                                         // 239
        return Streams.find();                                                                                         // 240
    });                                                                                                                // 241
    Template.registerHelper('freshEnvironment', function () {                                                          // 243
        return freshEnvironment();                                                                                     // 244
    });                                                                                                                // 245
    Template.registerHelper('loading', function () {                                                                   // 247
        // console.log('loading indicator in helper is: ', Session.get('loadingIndicator'));                           // 248
        return Session.get('loadingIndicator');                                                                        // 249
    });                                                                                                                // 250
    ;                                                                                                                  // 257
    Template.registerHelper('readyToSelectTemplate', function () {                                                     // 259
        return currentStep() === 2;                                                                                    // 260
    });                                                                                                                // 261
    Template.registerHelper('templateButNoCustomer', function () {                                                     // 263
        return !Customers.find().count() && TemplateApps.find().count();                                               // 264
    });                                                                                                                // 267
    Template.registerHelper('readyToGenerate', function () {                                                           // 269
        return currentStep() === 3 && !Session.equals('loadingIndicator', 'loading');                                  // 270
    });                                                                                                                // 271
    Template.registerHelper('step3', function () {                                                                     // 273
        return Session.get('currentStep') === 3;                                                                       // 274
    });                                                                                                                // 275
    Template.registerHelper('step3or4', function () {                                                                  // 277
        return Session.get('currentStep') === 3 || Session.get('currentStep') === 4 || Session.equals('loadingIndicator', 'loading');
    });                                                                                                                // 281
    Template.registerHelper('stepEqualTo', function (stepNr) {                                                         // 283
        // console.log('value of currentStep() ', currentStep());                                                      // 284
        return currentStep() === stepNr;                                                                               // 285
    });                                                                                                                // 286
    Template.registerHelper('generationFinished', function () {                                                        // 331
        return Session.equals('loadingIndicator', 'loading') || Session.get('generated?');                             // 332
    });                                                                                                                // 333
    Template.registerHelper('readyToTestSSO', function () {                                                            // 335
        return currentStep() === 4;                                                                                    // 336
    });                                                                                                                // 337
    Template.registerHelper('and', function (a, b) {                                                                   // 339
        return a && b;                                                                                                 // 340
    });                                                                                                                // 341
    Template.registerHelper('or', function (a, b) {                                                                    // 342
        return a || b;                                                                                                 // 343
    });                                                                                                                // 344
}                                                                                                                      // 346
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"accounts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/accounts.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// ServiceConfiguration.configurations.upsert({                                                                        // 1
//     service: "facebook"                                                                                             // 2
// }, {                                                                                                                // 3
//     $set: {                                                                                                         // 4
//         appId: Meteor.settings.private.facebook.clientId,                                                           // 5
//         loginStyle: "popup",                                                                                        // 6
//         secret: Meteor.settings.private.facebook.secret                                                             // 7
//     }                                                                                                               // 8
// });                                                                                                                 // 9
// ServiceConfiguration.configurations.upsert({                                                                        // 11
//     service: "github"                                                                                               // 12
// }, {                                                                                                                // 13
//     $set: {                                                                                                         // 14
//         clientId: Meteor.settings.private.github.clientId,                                                          // 15
//         loginStyle: "popup",                                                                                        // 16
//         secret: Meteor.settings.private.github.secret                                                               // 17
//     }                                                                                                               // 18
// });                                                                                                                 // 19
// ServiceConfiguration.configurations.upsert({                                                                        // 21
//     service: "linkedin"                                                                                             // 22
// },{                                                                                                                 // 23
//     loginStyle: "popup",                                                                                            // 24
//     service: "linkedin",                                                                                            // 25
//     clientId: Meteor.settings.private.linkedin.clientId,                                                            // 26
//     secret: Meteor.settings.private.linkedin.secret,                                                                // 27
// });                                                                                                                 // 28
// ServiceConfiguration.configurations.upsert({                                                                        // 31
//     service: "twitter"                                                                                              // 32
// },{                                                                                                                 // 33
//     service: "twitter",                                                                                             // 34
//     consumerKey: Meteor.settings.private.twitter.clientId,                                                          // 35
//     loginStyle: "popup",                                                                                            // 36
//     secret: Meteor.settings.private.twitter.secret                                                                  // 37
// });                                                                                                                 // 38
// ServiceConfiguration.configurations.upsert({                                                                        // 41
//     service: "google"                                                                                               // 42
// }, {                                                                                                                // 43
//     $set: {                                                                                                         // 44
//         clientId: Meteor.settings.private.google.clientId,                                                          // 45
//         loginStyle: "popup",                                                                                        // 46
//         secret: Meteor.settings.private.google.secret                                                               // 47
//     }                                                                                                               // 48
// });                                                                                                                 // 49
var numberOfUsers = Meteor.users.find().count();                                                                       // 52
console.log('Checking the user accounts, number of users is: ' + numberOfUsers);                                       // 53
                                                                                                                       //
if (!numberOfUsers) {                                                                                                  // 55
    var id = Accounts.createUser({                                                                                     // 56
        username: 'demo',                                                                                              // 57
        email: 'demo@qlik.com',                                                                                        // 58
        password: 'schiphol',                                                                                          // 59
        profile: {                                                                                                     // 60
            name: 'Qlik test user'                                                                                     // 60
        }                                                                                                              // 60
    });                                                                                                                // 56
    console.log('user created with id: ', id);                                                                         // 62
    Roles.addUsersToRoles(id, 'test', Roles.GLOBAL_GROUP);                                                             // 63
    id = Accounts.createUser({                                                                                         // 65
        username: 'admin',                                                                                             // 66
        email: 'mbj@qlik.com',                                                                                         // 67
        password: 'Qlik456464',                                                                                        // 68
        profile: {                                                                                                     // 69
            name: 'Qlik admin user'                                                                                    // 69
        }                                                                                                              // 69
    });                                                                                                                // 65
    console.log('user created with id: ', id);                                                                         // 71
    Roles.addUsersToRoles(id, 'admin', Roles.GLOBAL_GROUP);                                                            // 72
}                                                                                                                      // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"proxy.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/proxy.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//SETUP PROXY SERVER TO RUN METEOR QRS AND WEB INTEGRATION DEMO BOTH ON PORT 80                                        // 1
var proxy = require('redbird')({                                                                                       // 3
  port: Meteor.settings.public.proxyPort,                                                                              // 3
  ntlm: true,                                                                                                          // 3
  bunyan: false                                                                                                        // 3
}); //bunyan:true for logging output in the console                                                                    // 3
// Route to any local ip, for example from docker containers.                                                          // 4
                                                                                                                       //
                                                                                                                       //
proxy.register(Meteor.settings.public.qlikSenseHost, "http://localhost:3000"); //need subdomain otherwise meteor root-URL does not work
                                                                                                                       //
proxy.register(Meteor.settings.public.webIntegrationHost, "http://localhost:3030"); //need subdomain otherwise meteor root-URL does not work
                                                                                                                       //
proxy.register('slides.qlik.com', "http://localhost:3060"); //need subdomain otherwise meteor root-URL does not work   // 8
                                                                                                                       //
proxy.register('integration.qlik.com', "http://localhost:3000"); //need subdomain otherwise meteor root-URL does not work
                                                                                                                       //
proxy.register('saasdemo.qlik.com', "http://localhost:3000"); //need subdomain otherwise meteor root-URL does not work
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/publications.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Apps = void 0,                                                                                                     // 1
    TemplateApps = void 0,                                                                                             // 1
    GeneratedResources = void 0;                                                                                       // 1
module.watch(require("/imports/api/apps"), {                                                                           // 1
    Apps: function (v) {                                                                                               // 1
        Apps = v;                                                                                                      // 1
    },                                                                                                                 // 1
    TemplateApps: function (v) {                                                                                       // 1
        TemplateApps = v;                                                                                              // 1
    },                                                                                                                 // 1
    GeneratedResources: function (v) {                                                                                 // 1
        GeneratedResources = v;                                                                                        // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var Streams = void 0;                                                                                                  // 1
module.watch(require("/imports/api/streams"), {                                                                        // 1
    Streams: function (v) {                                                                                            // 1
        Streams = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var Customers = void 0;                                                                                                // 1
module.watch(require("/imports/api/customers"), {                                                                      // 1
    Customers: function (v) {                                                                                          // 1
        Customers = v;                                                                                                 // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var APILogs = void 0;                                                                                                  // 1
module.watch(require("/imports/api/APILogs"), {                                                                        // 1
    APILogs: function (v) {                                                                                            // 1
        APILogs = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
    "default": function (v) {                                                                                          // 1
        moment = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 4);                                                                                                                 // 1
//only fill the local mongoDB that runs in the browser with data that belongs to the user...                           // 8
//https://www.meteor.com/tutorials/blaze/publish-and-subscribe                                                         // 9
Meteor.publish('apps', function (generatedAppsFromUser) {                                                              // 10
    if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {                                              // 11
        return Apps.find();                                                                                            // 12
    } else {                                                                                                           // 14
        //console.log('Client subscribed to collection, with these generated app ids: ', generatedAppsFromUser);       // 15
        if (!generatedAppsFromUser) {                                                                                  // 16
            generatedAppsFromUser = []; // console.log('##### No generated resources exists yet, so only show the template apps')
        } else {// console.log('### publication recevied these generated app ids for the user: ', generatedAppsFromUser);
            }                                                                                                          // 21
                                                                                                                       //
        return Apps.find({                                                                                             // 22
            $or: [{                                                                                                    // 23
                "id": {                                                                                                // 23
                    "$in": generatedAppsFromUser                                                                       // 23
                }                                                                                                      // 23
            }, {                                                                                                       // 23
                "stream.name": "Templates" //, { "stream.name": "Everyone" }                                           // 23
                                                                                                                       //
            }]                                                                                                         // 23
        });                                                                                                            // 22
    }                                                                                                                  // 26
                                                                                                                       //
    this.ready();                                                                                                      // 27
});                                                                                                                    // 28
Meteor.publish('streams', function (generatedStreamsFromUser) {                                                        // 30
    if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {                                              // 31
        return Streams.find();                                                                                         // 32
    } else {                                                                                                           // 34
        if (!generatedStreamsFromUser) {                                                                               // 35
            generatedStreamsFromUser = [];                                                                             // 36
        }                                                                                                              // 37
                                                                                                                       //
        return Streams.find({                                                                                          // 38
            $or: [{                                                                                                    // 39
                "id": {                                                                                                // 39
                    "$in": generatedStreamsFromUser                                                                    // 39
                }                                                                                                      // 39
            }, {                                                                                                       // 39
                "name": "Templates" //, { "name": "Everyone" }                                                         // 39
                                                                                                                       //
            }]                                                                                                         // 39
        });                                                                                                            // 38
    }                                                                                                                  // 43
                                                                                                                       //
    this.ready();                                                                                                      // 44
});                                                                                                                    // 45
Meteor.publish('templateApps', function () {                                                                           // 46
    return TemplateApps.find({                                                                                         // 47
        'generationUserId': this.userId                                                                                // 47
    });                                                                                                                // 47
    this.ready();                                                                                                      // 48
});                                                                                                                    // 49
Meteor.publish('generatedResources', function () {                                                                     // 51
    return GeneratedResources.find({                                                                                   // 52
        'generationUserId': this.userId                                                                                // 52
    });                                                                                                                // 52
    this.ready();                                                                                                      // 53
});                                                                                                                    // 54
Meteor.publish('customers', function () {                                                                              // 56
    return Customers.find({                                                                                            // 57
        'generationUserId': this.userId                                                                                // 57
    });                                                                                                                // 57
    this.ready();                                                                                                      // 58
});                                                                                                                    // 59
Meteor.publish('apiLogs', function () {                                                                                // 61
    // const selector = {                                                                                              // 62
    //     "createDate": {                                                                                             // 63
    //         $lt: new Date(),                                                                                        // 64
    //         $gte: new Date(new Date().setDate(new Date().getDate() - 0.05))  //show only the last hour  of api logs
    //     }                                                                                                           // 66
    //};                                                                                                               // 67
    //     today: function() {                                                                                         // 68
    //     var now = moment().toDate();                                                                                // 69
    //     return Posts.find({createdAt : { $gte : now }});                                                            // 70
    // }                                                                                                               // 71
    var selector = {                                                                                                   // 73
        sort: {                                                                                                        // 74
            createDate: -1                                                                                             // 74
        },                                                                                                             // 74
        limit: 30                                                                                                      // 75
    };                                                                                                                 // 73
    return APILogs.find({                                                                                              // 78
        'generationUserId': this.userId                                                                                // 78
    }, selector);                                                                                                      // 78
    this.ready();                                                                                                      // 79
});                                                                                                                    // 80
Meteor.publish('users', function () {                                                                                  // 82
    //See https://github.com/alanning/meteor-roles                                                                     // 83
    if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {                                              // 84
        return Meteor.users.find();                                                                                    // 85
    } else {                                                                                                           // 86
        // user not authorized. do not publish secrets                                                                 // 87
        this.stop();                                                                                                   // 88
        return;                                                                                                        // 89
    }                                                                                                                  // 90
});                                                                                                                    // 91
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"restEndpoints.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/restEndpoints.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//https://atmospherejs.com/simple/json-routes                                                                          // 1
JsonRoutes.add("get", "/OneCustomerWithUsers", function (req, res, next) {                                             // 3
    // var id = req.params.id;                                                                                         // 4
    var sampleData = customer1;                                                                                        // 5
    JsonRoutes.sendResult(res, {                                                                                       // 7
        data: customer1                                                                                                // 8
    });                                                                                                                // 7
});                                                                                                                    // 10
JsonRoutes.add("get", "/multipleCustomersWithUsers", function (req, res, next) {                                       // 12
    // var id = req.params.id;                                                                                         // 13
    var sampleData = [customer1, customer2];                                                                           // 14
    JsonRoutes.sendResult(res, {                                                                                       // 16
        data: [customer1, customer2]                                                                                   // 17
    });                                                                                                                // 16
});                                                                                                                    // 19
var customer1 = {                                                                                                      // 21
    "_id": "EXpapRzZXc52B3joK",                                                                                        // 22
    "name": "Ullrich - Barrows",                                                                                       // 23
    "checked": true,                                                                                                   // 24
    "users": [{                                                                                                        // 25
        "name": "John",                                                                                                // 26
        "group": "Consumer",                                                                                           // 27
        "currentlyLoggedIn": false,                                                                                    // 28
        "country": "Germany"                                                                                           // 29
    }, {                                                                                                               // 25
        "name": "Linda",                                                                                               // 31
        "group": "Contributor",                                                                                        // 32
        "currentlyLoggedIn": false,                                                                                    // 33
        "country": "United States"                                                                                     // 34
    }, {                                                                                                               // 30
        "name": "Martin",                                                                                              // 36
        "group": "Developer",                                                                                          // 37
        "currentlyLoggedIn": false,                                                                                    // 38
        "country": "Italy"                                                                                             // 39
    }, {                                                                                                               // 35
        "name": "Paul",                                                                                                // 41
        "group": "Admin",                                                                                              // 42
        "currentlyLoggedIn": false,                                                                                    // 43
        "country": "Italy"                                                                                             // 44
    }],                                                                                                                // 40
    "generationUserId": "rZPZYbaWM33ZHNr6Z"                                                                            // 46
};                                                                                                                     // 21
var customer2 = {                                                                                                      // 49
    "_id": "EXpapRzZXc52B3joK",                                                                                        // 50
    "name": "Ullrich - Barrows",                                                                                       // 51
    "checked": true,                                                                                                   // 52
    "users": [{                                                                                                        // 53
        "name": "John",                                                                                                // 54
        "group": "Consumer",                                                                                           // 55
        "currentlyLoggedIn": false,                                                                                    // 56
        "country": "Germany"                                                                                           // 57
    }, {                                                                                                               // 53
        "name": "Linda",                                                                                               // 59
        "group": "Contributor",                                                                                        // 60
        "currentlyLoggedIn": false,                                                                                    // 61
        "country": "United States"                                                                                     // 62
    }, {                                                                                                               // 58
        "name": "Martin",                                                                                              // 64
        "group": "Developer",                                                                                          // 65
        "currentlyLoggedIn": false,                                                                                    // 66
        "country": "Italy"                                                                                             // 67
    }, {                                                                                                               // 63
        "name": "Paul",                                                                                                // 69
        "group": "Admin",                                                                                              // 70
        "currentlyLoggedIn": false,                                                                                    // 71
        "country": "Italy"                                                                                             // 72
    }],                                                                                                                // 68
    "generationUserId": "rZPZYbaWM33ZHNr6Z"                                                                            // 74
};                                                                                                                     // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/routes.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var REST_Log = void 0;                                                                                                 // 1
module.watch(require("/imports/api/APILogs"), {                                                                        // 1
    REST_Log: function (v) {                                                                                           // 1
        REST_Log = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
Router.route('/updateSenseInfo/apps', function (request, response, next) {                                             // 3
    // console.log('++++++++++++We got an incoming REST Call from the Sense Notification handler for APPS, this means the Sense Repository has changed');
    //logging only                                                                                                     // 5
    // var call = {};                                                                                                  // 6
    // call.action = 'Notification apps'                                                                               // 7
    // call.request = 'We got an incoming REST Call from the Sense Notification handler for APPS, this means the Sense Repository has changed';
    // REST_Log(call);                                                                                                 // 9
    Meteor.call('updateLocalSenseCopyApps');                                                                           // 10
}, {                                                                                                                   // 11
    where: 'server'                                                                                                    // 11
});                                                                                                                    // 11
Router.route('/updateSenseInfo/streams', function (request, response, next) {                                          // 13
    // console.log('++++++++++++We got an incoming REST Call from the Sense Notification handler for STREAMS, this means the Sense Repository has changed');
    //logging only                                                                                                     // 15
    // var call = {};                                                                                                  // 16
    // call.action = 'Notification streams'                                                                            // 17
    // call.request = 'We got an incoming REST Call from the Sense Notification handler for APPS, this means the Sense Repository has changed';
    // REST_Log(call);                                                                                                 // 19
    Meteor.call('updateLocalSenseCopyStreams');                                                                        // 20
}, {                                                                                                                   // 21
    where: 'server'                                                                                                    // 21
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seeds.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/seeds.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Customers = void 0;                                                                                                // 1
module.watch(require("../imports/api/customers.js"), {                                                                 // 1
  Customers: function (v) {                                                                                            // 1
    Customers = v;                                                                                                     // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var customers = // [{"name":"A&R Partners","checked":true},                                                            // 3
// {"name":"A2Z Solutions","checked":true},                                                                            // 5
// {"name":"Aaron D. Meyer & Associates","checked":true},                                                              // 6
// {"name":"Aaron Products","checked":true},                                                                           // 7
// {"name":"Active Data","checked":true},                                                                              // 8
// {"name":"Ben and Jerry’s","checked":true},                                                                          // 9
// {"name":"Benedict","checked":true},                                                                                 // 10
// {"name":"Bizmarts","checked":true},                                                                                 // 11
// {"name":"C & C  Design","checked":true},                                                                            // 12
// {"name":"C & J Engineering","checked":true},                                                                        // 13
// {"name":"CAF Systemhaus","checked":true},                                                                           // 14
// {"name":"CAM Group","checked":true},                                                                                // 15
// {"name":"Caribian Specialties","checked":true},                                                                     // 16
// {"name":"City Fresh Foods","checked":true},                                                                         // 17
// {"name":"Clearout","checked":true},                                                                                 // 18
// {"name":"David Spencer Ltd.","checked":true},                                                                       // 19
// {"name":"Dayton Malleable Inc.","checked":true},                                                                    // 20
// {"name":"DCP Research","checked":true},                                                                             // 21
// {"name":"DCS International","checked":true},                                                                        // 22
// {"name":"DCS Laboratory","checked":true},                                                                           // 23
// {"name":"Deak-Perera Group.","checked":true},                                                                       // 24
// {"name":"Earth","checked":true},                                                                                    // 25
// {"name":"eDistrict","checked":true},                                                                                // 26
// {"name":"EDP","checked":true},                                                                                      // 27
// {"name":"Ethyl Corporation","checked":true},                                                                        // 28
// {"name":"Federal Focus","checked":true},                                                                            // 29
// {"name":"Fill It","checked":true},                                                                                  // 30
// {"name":"Filmotype","checked":true},                                                                                // 31
// {"name":"Fins","checked":true},                                                                                     // 32
// {"name":"Gate","checked":true},                                                                                     // 33
// {"name":"Gulf and Western Industries","checked":true},                                                              // 34
// {"name":"Harte-Hanks (formerly Locator)","checked":true},                                                           // 35
// {"name":"Harvard Trust Company","checked":true},                                                                    // 36
// {"name":"HCHS","checked":true},                                                                                     // 37
// {"name":"Healtheon","checked":true},                                                                                // 38
// {"name":"Hetrick Systems","checked":true},                                                                          // 39
// {"name":"Home Team","checked":true},                                                                                // 40
// {"name":"Homebound","checked":true},                                                                                // 41
// {"name":"IBVA","checked":true},                                                                                     // 42
// {"name":"Icon","checked":true},                                                                                     // 43
// {"name":"Icon Site Builders","checked":true},                                                                       // 44
// {"name":"Idyllwild","checked":true},                                                                                // 45
// {"name":"J. S. Lee Associates","checked":true},                                                                     // 46
// {"name":"K International","checked":true},                                                                          // 47
// {"name":"K.C. Irving","checked":true},                                                                              // 48
// {"name":"Kari & Associates","checked":true},                                                                        // 49
// {"name":"Karsing","checked":true},                                                                                  // 50
// {"name":"Kazinformcom","checked":true},                                                                             // 51
// {"name":"KentISP","checked":true},                                                                                  // 52
// {"name":"Kool-Seal","checked":true},                                                                                // 53
// {"name":"Laker Airways","checked":true},                                                                            // 54
// {"name":"Livermore  Laboratories (LSLI)","checked":true},                                                           // 55
// {"name":"LiveWire BBS and   Favourite Links","checked":true},                                                       // 56
// {"name":"MATRIX","checked":true},                                                                                   // 57
// {"name":"Miles Laboratories, Inc.","checked":true},                                                                 // 58
// {"name":"NACSCORP","checked":true},                                                                                 // 59
// {"name":"Onestar","checked":true},                                                                                  // 60
// {"name":"Pace","checked":true},                                                                                     // 61
// {"name":"Pacific Group","checked":true},                                                                            // 62
// {"name":"Pacific Matics","checked":true},                                                                           // 63
// {"name":"Pacific Sierra Research","checked":true},                                                                  // 64
// {"name":"Pacific Voice","checked":true},                                                                            // 65
// {"name":"Pacific West Enterprises","checked":true},                                                                 // 66
// {"name":"PacificServ","checked":true},                                                                              // 67
// {"name":"Panngea","checked":true},                                                                                  // 68
// {"name":"PAP (Maintenance)","checked":true},                                                                        // 69
// {"name":"Paracel","checked":true},                                                                                  // 70
// {"name":"Patient","checked":true},                                                                                  // 71
// {"name":"Pinnacle Micro","checked":true},                                                                           // 72
// {"name":"QualServe","checked":true},                                                                                // 73
// {"name":"Quantum 4Xyte  Architects","checked":true},                                                                // 74
// {"name":"Qwest","checked":true},                                                                                    // 75
// {"name":"R&R Group","checked":true},                                                                                // 76
// {"name":"R.J. Matter & Associates","checked":true},                                                                 // 77
// {"name":"Ra Co Amo","checked":true},                                                                                // 78
// {"name":"RC","checked":true},                                                                                       // 79
// {"name":"Ready-to-Run","checked":true},                                                                             // 80
// {"name":"Remedy","checked":true},                                                                                   // 81
// {"name":"Renegade info Crew","checked":true},                                                                       // 82
// {"name":"Reuters Usability Group","checked":true},                                                                  // 83
// {"name":"ReviewBooth","checked":true},                                                                              // 84
// {"name":"RFI Corporation","checked":true},                                                                          // 85
// {"name":"Road Warrior International","checked":true},                                                               // 86
// {"name":"Robust Code","checked":true},                                                                              // 87
// {"name":"Sage","checked":true},                                                                                     // 88
// {"name":"Sagent","checked":true},                                                                                   // 89
// {"name":"Salamander Junction","checked":true},                                                                      // 90
// {"name":"Satronix","checked":true},                                                                                 // 91
// {"name":"Satyam","checked":true},                                                                                   // 92
// {"name":"Scientific Atlanta","checked":true},                                                                       // 93
// {"name":"ScotGold Products","checked":true},                                                                        // 94
// {"name":"Screen Saver.com","checked":true},                                                                         // 95
// {"name":"Sifton Properties Limited","checked":true},                                                                // 96
// {"name":"Sigma","checked":true},                                                                                    // 97
// {"name":"Signature","checked":true},                                                                                // 98
// {"name":"SignatureFactory","checked":true},                                                                         // 99
// {"name":"Soloman Brothers","checked":true},                                                                         // 100
// {"name":"Southern Company","checked":true},                                                                         // 101
// {"name":"Stone Consolidated Corporation","checked":true},                                                           // 102
// {"name":"Talou","checked":true},                                                                                    // 103
// {"name":"Tampere","checked":true},                                                                                  // 104
// {"name":"Tandy Corporation","checked":true},                                                                        // 105
// {"name":"Tangent","checked":true},                                                                                  // 106
// {"name":"Tao Group","checked":true},                                                                                // 107
// {"name":"Target Marketing","checked":true},                                                                         // 108
// {"name":"Team ASA","checked":true},                                                                                 // 109
// {"name":"Team Financial Management Systems","checked":true},                                                        // 110
// {"name":"Teca-Print","checked":true},                                                                               // 111
// {"name":"Time Warner","checked":true},                                                                              // 112
// {"name":"Towmotor Corporation","checked":true},                                                                     // 113
// {"name":"Tredegar Company","checked":true},                                                                         // 114
// {"name":"Trend Line Corporation","checked":true},                                                                   // 115
// {"name":"U. S. Exchange","checked":true},                                                                           // 116
// {"name":"Unison Management Concepts","checked":true},                                                               // 117
// {"name":"United States  (USIT)","checked":true},                                                                    // 118
// {"name":"UUmail","checked":true},                                                                                   // 119
// {"name":"ValiCert","checked":true},                                                                                 // 120
// {"name":"Valley  Solutions","checked":true},                                                                        // 121
// {"name":"Valpatken","checked":true},                                                                                // 122
// {"name":"Vanstar","checked":true},                                                                                  // 123
// {"name":"Venable","checked":true},                                                                                  // 124
// {"name":"Venred","checked":true},                                                                                   // 125
// {"name":"Watcom International","checked":true},                                                                     // 126
// {"name":"Xentec","checked":true},                                                                                   // 127
// {"name":"Xilinx","checked":true},                                                                                   // 128
// {"name":"XVT","checked":true},                                                                                      // 129
// {"name":"Zero Assumption Recovery","checked":true},                                                                 // 130
// {"name":"Zilog","checked":true},                                                                                    // 131
// {"name":"Zitel","checked":true},                                                                                    // 132
// {"name":"Zocalo","checked":true}]                                                                                   // 133
[{                                                                                                                     // 134
  "name": "Shell",                                                                                                     // 134
  "collection": "Shell"                                                                                                // 134
}, {                                                                                                                   // 134
  "name": "Esso",                                                                                                      // 135
  "collection": "Esso"                                                                                                 // 135
}, {                                                                                                                   // 135
  "name": "BP",                                                                                                        // 136
  "collection": "BP"                                                                                                   // 136
}]; //if (Customers.find().count() === 0){                                                                             // 136
// _.each(customers, function(customer){                                                                               // 139
//  Customers.insert(customer);                                                                                        // 140
//    console.log("Inserted "+ customer.name);                                                                         // 141
// })                                                                                                                  // 142
//}                                                                                                                    // 143
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regenerator = require("babel-runtime/regenerator");                                                               //
                                                                                                                       //
var _regenerator2 = _interopRequireDefault(_regenerator);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var http = void 0;                                                                                                     // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    http: function (v) {                                                                                               // 1
        http = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var Apps = void 0,                                                                                                     // 1
    TemplateApps = void 0,                                                                                             // 1
    GeneratedResources = void 0;                                                                                       // 1
module.watch(require("/imports/api/apps"), {                                                                           // 1
    Apps: function (v) {                                                                                               // 1
        Apps = v;                                                                                                      // 1
    },                                                                                                                 // 1
    TemplateApps: function (v) {                                                                                       // 1
        TemplateApps = v;                                                                                              // 1
    },                                                                                                                 // 1
    GeneratedResources: function (v) {                                                                                 // 1
        GeneratedResources = v;                                                                                        // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
var APILogs = void 0,                                                                                                  // 1
    REST_Log = void 0;                                                                                                 // 1
module.watch(require("/imports/api/APILogs"), {                                                                        // 1
    APILogs: function (v) {                                                                                            // 1
        APILogs = v;                                                                                                   // 1
    },                                                                                                                 // 1
    REST_Log: function (v) {                                                                                           // 1
        REST_Log = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 3);                                                                                                                 // 1
var Streams = void 0;                                                                                                  // 1
module.watch(require("/imports/api/streams"), {                                                                        // 1
    Streams: function (v) {                                                                                            // 1
        Streams = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 4);                                                                                                                 // 1
var Customers = void 0;                                                                                                // 1
module.watch(require("/imports/api/customers"), {                                                                      // 1
    Customers: function (v) {                                                                                          // 1
        Customers = v;                                                                                                 // 1
    }                                                                                                                  // 1
}, 5);                                                                                                                 // 1
var QSApp = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSFunctionsApp"), {                                                         // 1
    "*": function (v) {                                                                                                // 1
        QSApp = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 6);                                                                                                                 // 1
var QSStream = void 0;                                                                                                 // 1
module.watch(require("/imports/api/server/QRSFunctionsStream"), {                                                      // 1
    "*": function (v) {                                                                                                // 1
        QSStream = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 7);                                                                                                                 // 1
var QSLic = void 0;                                                                                                    // 1
module.watch(require("/imports/api/server/QRSFunctionsLicense"), {                                                     // 1
    "*": function (v) {                                                                                                // 1
        QSLic = v;                                                                                                     // 1
    }                                                                                                                  // 1
}, 8);                                                                                                                 // 1
var QSProxy = void 0;                                                                                                  // 1
module.watch(require("/imports/api/server/QPSFunctions"), {                                                            // 1
    "*": function (v) {                                                                                                // 1
        QSProxy = v;                                                                                                   // 1
    }                                                                                                                  // 1
}, 9);                                                                                                                 // 1
var QSSystem = void 0;                                                                                                 // 1
module.watch(require("/imports/api/server/QRSFunctionsSystemRules"), {                                                 // 1
    "*": function (v) {                                                                                                // 1
        QSSystem = v;                                                                                                  // 1
    }                                                                                                                  // 1
}, 10);                                                                                                                // 1
var QSExtensions = void 0;                                                                                             // 1
module.watch(require("/imports/api/server/QRSFunctionsExtension"), {                                                   // 1
    "*": function (v) {                                                                                                // 1
        QSExtensions = v;                                                                                              // 1
    }                                                                                                                  // 1
}, 11);                                                                                                                // 1
var QSCustomProps = void 0;                                                                                            // 1
module.watch(require("/imports/api/server/QRSFunctionsCustomProperties"), {                                            // 1
    "*": function (v) {                                                                                                // 1
        QSCustomProps = v;                                                                                             // 1
    }                                                                                                                  // 1
}, 12);                                                                                                                // 1
var senseConfig = void 0,                                                                                              // 1
    authHeaders = void 0;                                                                                              // 1
module.watch(require("/imports/api/config"), {                                                                         // 1
    senseConfig: function (v) {                                                                                        // 1
        senseConfig = v;                                                                                               // 1
    },                                                                                                                 // 1
    authHeaders: function (v) {                                                                                        // 1
        authHeaders = v;                                                                                               // 1
    }                                                                                                                  // 1
}, 13);                                                                                                                // 1
module.watch(require("/imports/startup/accounts-config.js"));                                                          // 1
                                                                                                                       //
var path = require('path');                                                                                            // 40
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 43
    process.env.ROOT_URL = 'http://' + Meteor.settings.public.qlikSenseHost;                                           // 44
    console.log('********* We expect Qlik Sense to run on host: ', process.env.ROOT_URL + ':' + Meteor.settings.public.qlikSensePort); // console.log('********* For END USERS we expect Sense to run on host: ', Meteor.settings.public.qlikSenseHost + ':' + Meteor.settings.public.qlikSensePort);
                                                                                                                       //
    initQlikSense();                                                                                                   // 47
    removeGeneratedResources();                                                                                        // 48
    optimizeMongoDB();                                                                                                 // 49
}); //                                                                                                                 // 50
// ─── SETUP QLIK SENSE AFTER A CLEAN QlIK SENSE INSTALL ─────────────────────────────────────                         // 54
//                                                                                                                     // 55
//Check if Qlik Sense has been properly setup for this MeteorQRS tool.                                                 // 57
                                                                                                                       //
function initQlikSense() {                                                                                             // 58
    var senseDemoMaterials, QlikConfigured;                                                                            // 58
    return _regenerator2.default.async(function () {                                                                   // 58
        function initQlikSense$(_context) {                                                                            // 58
            while (1) {                                                                                                // 58
                switch (_context.prev = _context.next) {                                                               // 58
                    case 0:                                                                                            // 58
                        console.log('------------------------------------');                                           // 59
                        console.log('INIT QLIK SENSE');                                                                // 60
                        console.log('Project root folder: ', Meteor.absolutePath);                                     // 61
                        senseDemoMaterials = path.join(Meteor.absolutePath, 'Sense Demo materials');                   // 62
                        console.log('senseDemoMaterials', senseDemoMaterials);                                         // 63
                                                                                                                       //
                        if (!Meteor.settings.broker.automationBaseFolder) {                                            // 64
                            Meteor.settings.broker.automationBaseFolder = path.join(Meteor.absolutePath, '.automation');
                            console.log('Meteor.settings.broker.automationBaseFolder was empty, setting it to default: ', Meteor.settings.broker.automationBaseFolder);
                        }                                                                                              // 67
                                                                                                                       //
                        if (!Meteor.settings.broker.customerDataDir) {                                                 // 68
                            Meteor.settings.broker.customerDataDir = path.join(Meteor.absolutePath, 'customerData');   // 69
                            console.log('Meteor.settings.broker.customerDataDir was empty, setting it to default: ', Meteor.settings.broker.customerDataDir);
                        }                                                                                              // 71
                                                                                                                       //
                        console.log('------------------------------------');                                           // 72
                        Meteor.call('updateLocalSenseCopy');                                                           // 73
                        _context.prev = 9;                                                                             // 58
                        //By checking if a stream exist we try to figure out if this is a fresh or already existing Qlik Sense installation.
                        QlikConfigured = QSStream.getStreamByName(Meteor.settings.public.TemplateAppStreamName);       // 77
                                                                                                                       //
                        if (!(!QlikConfigured || Meteor.settings.broker.runInitialQlikSenseSetup)) {                   // 58
                            _context.next = 28;                                                                        // 58
                            break;                                                                                     // 58
                        }                                                                                              // 58
                                                                                                                       //
                        console.log('Template stream does not yet exist or the runInitialQlikSenseSetup setting has been set to true, so we expect to have a fresh Qlik Sense installation for which we now automatically populate with the apps, streams, license, security rules etc.'); // QSLic.insertLicense();
                                                                                                                       //
                        QSLic.insertUserAccessRule();                                                                  // 81
                        QSSystem.disableDefaultSecurityRules();                                                        // 82
                        _context.next = 17;                                                                            // 58
                        return _regenerator2.default.awrap(QSProxy.createVirtualProxies());                            // 58
                                                                                                                       //
                    case 17:                                                                                           // 58
                        _context.next = 19;                                                                            // 58
                        return _regenerator2.default.awrap(timeout(4000));                                             // 58
                                                                                                                       //
                    case 19:                                                                                           // 58
                        _context.next = 21;                                                                            // 58
                        return _regenerator2.default.awrap(QSSystem.createSecurityRules());                            // 58
                                                                                                                       //
                    case 21:                                                                                           // 58
                        QSStream.initSenseStreams();                                                                   // 86
                        _context.next = 24;                                                                            // 58
                        return _regenerator2.default.awrap(QSApp.uploadAndPublishTemplateApps());                      // 58
                                                                                                                       //
                    case 24:                                                                                           // 58
                        _context.next = 26;                                                                            // 58
                        return _regenerator2.default.awrap(QSApp.createAppConnection('folder', 'Import demo', senseDemoMaterials));
                                                                                                                       //
                    case 26:                                                                                           // 58
                        QSExtensions.uploadExtensions();                                                               // 90
                        QSLic.saveSystemRules();                                                                       // 91
                                                                                                                       //
                    case 28:                                                                                           // 58
                        _context.next = 33;                                                                            // 58
                        break;                                                                                         // 58
                                                                                                                       //
                    case 30:                                                                                           // 58
                        _context.prev = 30;                                                                            // 58
                        _context.t0 = _context["catch"](9);                                                            // 58
                        console.error(_context.t0);                                                                    // 94
                                                                                                                       //
                    case 33:                                                                                           // 58
                        //set the app Id for the self service bi and the slide generator app, for use in the IFrames etc.
                        console.log('------------------------------------');                                           // 98
                        console.log('SET APP IDs');                                                                    // 99
                        console.log('------------------------------------');                                           // 100
                        QSApp.setAppIDs();                                                                             // 101
                                                                                                                       //
                    case 37:                                                                                           // 58
                    case "end":                                                                                        // 58
                        return _context.stop();                                                                        // 58
                }                                                                                                      // 58
            }                                                                                                          // 58
        }                                                                                                              // 58
                                                                                                                       //
        return initQlikSense$;                                                                                         // 58
    }(), null, this, [[9, 30]]);                                                                                       // 58
} //helper functions to await a set timeout                                                                            // 58
                                                                                                                       //
                                                                                                                       //
function timeout(ms) {                                                                                                 // 106
    return new Promise(function (resolve) {                                                                            // 107
        return setTimeout(resolve, ms);                                                                                // 107
    });                                                                                                                // 107
}                                                                                                                      // 108
                                                                                                                       //
function sleep(fn) {                                                                                                   // 109
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {          // 109
        args[_key - 1] = arguments[_key];                                                                              // 109
    }                                                                                                                  // 109
                                                                                                                       //
    return _regenerator2.default.async(function () {                                                                   // 109
        function sleep$(_context2) {                                                                                   // 109
            while (1) {                                                                                                // 109
                switch (_context2.prev = _context2.next) {                                                             // 109
                    case 0:                                                                                            // 109
                        _context2.next = 2;                                                                            // 109
                        return _regenerator2.default.awrap(timeout(3000));                                             // 109
                                                                                                                       //
                    case 2:                                                                                            // 109
                        return _context2.abrupt("return", fn.apply(undefined, args));                                  // 109
                                                                                                                       //
                    case 3:                                                                                            // 109
                    case "end":                                                                                        // 109
                        return _context2.stop();                                                                       // 109
                }                                                                                                      // 109
            }                                                                                                          // 109
        }                                                                                                              // 109
                                                                                                                       //
        return sleep$;                                                                                                 // 109
    }(), null, this);                                                                                                  // 109
} //                                                                                                                   // 109
// ─── REMOVE STREAMS AND APPS CREATED DURING THE SAAS DEMO ───────────────────────                                    // 115
//                                                                                                                     // 116
                                                                                                                       //
                                                                                                                       //
function removeGeneratedResources() {                                                                                  // 118
    // console.log('remove the all generated resources on each server start');                                         // 119
    // Meteor.setTimeout(function() {                                                                                  // 120
    //     console.log('remove all generated resources in mongo and qlik sense periodically by making use of a server side timer');
    //     Meteor.call('removeGeneratedResources', {});                                                                // 122
    // }, 0); //remove all logs directly at startup                                                                    // 123
    if (Meteor.settings.broker.automaticCleanUpGeneratedApps === "Yes") {                                              // 124
        Meteor.setInterval(function () {                                                                               // 125
            console.log('remove all generated resources in mongo and qlik sense periodically by making use of a server side timer');
            Meteor.call('removeGeneratedResources', {});                                                               // 127
        }, 1 * 86400000); //remove all logs every 1 day                                                                // 128
    }                                                                                                                  // 129
}                                                                                                                      // 130
                                                                                                                       //
function optimizeMongoDB() {                                                                                           // 132
    // console.log('## setting up mongo indexes on generationUserId in the generated resources, customers and other collections, to increase mongo performance');
    TemplateApps._ensureIndex({                                                                                        // 134
        "generationUserId": 1,                                                                                         // 135
        "id": 1                                                                                                        // 136
    });                                                                                                                // 134
                                                                                                                       //
    GeneratedResources._ensureIndex({                                                                                  // 138
        "generationUserId": 1,                                                                                         // 139
        "id": 1                                                                                                        // 140
    });                                                                                                                // 138
                                                                                                                       //
    Apps._ensureIndex({                                                                                                // 142
        "id": 1                                                                                                        // 143
    });                                                                                                                // 142
                                                                                                                       //
    Customers._ensureIndex({                                                                                           // 145
        "generationUserId": 1                                                                                          // 146
    });                                                                                                                // 145
                                                                                                                       //
    Streams._ensureIndex({                                                                                             // 148
        "id": 1                                                                                                        // 149
    });                                                                                                                // 148
                                                                                                                       //
    APILogs._ensureIndex({                                                                                             // 151
        "createdBy": 1                                                                                                 // 152
    });                                                                                                                // 151
                                                                                                                       //
    APILogs._ensureIndex({                                                                                             // 154
        "createDate": 1                                                                                                // 155
    });                                                                                                                // 154
} //                                                                                                                   // 157
// ─── GET AN UPDATE WHEN QLIK SENSE HAS CHANGED ──────────────────────────────────                                    // 160
//                                                                                                                     // 161
// function createNotificationListeners() {                                                                            // 164
//     //Create notification listener in Qlik sense https://help.qlik.com/en-US/sense-developer/3.1/Subsystems/RepositoryServiceAPI/Content/RepositoryServiceAPI/RepositoryServiceAPI-Notification-Remove-Change-Subscription.htm
//     //console.log('********* On meteor startup, Meteor tool registers itself at Qlik Sense to get notifications from Sense on changes to apps and streams.');
//     //console.log('********* we try to register a notification on this URL: HTTP post to http://' + senseConfig.SenseServerInternalLanIP + ':' + senseConfig.port + '/' + senseConfig.virtualProxy + '/qrs/notification?name=app');
//     //console.log('********* The notification URL for Streams is: ' + Meteor.settings.private.notificationURL + '/streams');
//     try {                                                                                                           // 170
//         const resultApp = HTTP.post('http://' + senseConfig.SenseServerInternalLanIP + ':' + senseConfig.port + '/' + senseConfig.virtualProxy + '/qrs/notification?name=app', {
//             headers: authHeaders,                                                                                   // 172
//             params: { 'xrfkey': senseConfig.xrfkey },                                                               // 173
//             data: Meteor.settings.private.notificationURL + '/apps'                                                 // 174
//         })                                                                                                          // 175
//         const resultStream = HTTP.post('http://' + senseConfig.SenseServerInternalLanIP + ':' + senseConfig.port + '/' + senseConfig.virtualProxy + '/qrs/notification?name=stream', {
//                 headers: authHeaders,                                                                               // 178
//                 params: { 'xrfkey': senseConfig.xrfkey },                                                           // 179
//                 data: Meteor.settings.private.notificationURL + '/streams'                                          // 180
//             })                                                                                                      // 181
//             //console.log('Register notication success');                                                           // 182
//             // //console.log('the result from sense register App notification was: ', resultApp);                   // 183
//             // //console.log('the result from sense register Stream notification was: ', resultStream);             // 184
//     } catch (err) {                                                                                                 // 185
//         console.error('Create notification subscription in sense qrs failed', err);                                 // 186
//         // throw new Meteor.Error('Create notification subscription in sense qrs failed', err);                     // 187
//     }                                                                                                               // 188
// }                                                                                                                   // 189
//                                                                                                                     // 191
// ─── METEOR METHODS ─────────────────────────────────────────────────────────────                                    // 192
//                                                                                                                     // 193
                                                                                                                       //
                                                                                                                       //
Meteor.methods({                                                                                                       // 196
    getAppIDs: function () {                                                                                           // 197
        return {                                                                                                       // 198
            SSBI: senseConfig.SSBIApp,                                                                                 // 199
            // QSApp.getApps(Meteor.settings.public.SSBI.name, Meteor.settings.public.SSBI.stream)[0].id,              // 199
            slideGenerator: senseConfig.slideGeneratorAppId //QSApp.getApps(Meteor.settings.public.slideGenerator.name, Meteor.settings.public.slideGenerator.stream)[0].id
                                                                                                                       //
        };                                                                                                             // 198
    },                                                                                                                 // 202
    generateStreamAndApp: function (customers) {                                                                       // 203
        check(customers, Array);                                                                                       // 204
        Meteor.call('removeGeneratedResources', {                                                                      // 206
            'generationUserId': Meteor.userId()                                                                        // 207
        }); //first clean the environment                                                                              // 206
                                                                                                                       //
        QSApp.generateStreamAndApp(customers, this.userId); //then, create the new stuff                               // 209
                                                                                                                       //
        if (!Meteor.settings.multiTenantScenario) {                                                                    // 211
            //on premise installation for a single tenant (e.g. with MS Active Directory)                              // 211
            var customerNames = customers.map(function (c) {                                                           // 212
                return c.name;                                                                                         // 213
            });                                                                                                        // 214
            QSCustomProps.createCustomProperty('customers', customerNames); //for non OEM scenarios (with MS AD), people like to use custom properties for authorization instead of the groups via a ticket.
        }                                                                                                              // 216
                                                                                                                       //
        Meteor.call('updateLocalSenseCopy');                                                                           // 217
    },                                                                                                                 // 218
    resetEnvironment: function () {                                                                                    // 219
        Meteor.call('resetLoggedInUser'); //logout all users before removing all the current customers. This to prevent the screen stays logged in at an old user.
                                                                                                                       //
        Meteor.call('removeGeneratedResources', {                                                                      // 221
            'generationUserId': Meteor.userId()                                                                        // 222
        });                                                                                                            // 221
        TemplateApps.remove({                                                                                          // 224
            'generationUserId': Meteor.userId()                                                                        // 225
        });                                                                                                            // 224
        Customers.remove({                                                                                             // 227
            'generationUserId': Meteor.userId()                                                                        // 228
        });                                                                                                            // 227
        APILogs.remove({                                                                                               // 230
            'generationUserId': Meteor.userId()                                                                        // 231
        });                                                                                                            // 230
                                                                                                                       //
        if (!Meteor.settings.multiTenantScenario) {                                                                    // 233
            //on premise installation for a single tenant (e.g. with MS Active Directory)                              // 233
            QSCustomProps.deleteCustomProperty('customers');                                                           // 234
        }                                                                                                              // 235
    },                                                                                                                 // 236
    upsertTemplate: function (selector, currentApp) {                                                                  // 237
        console.log('upsert template');                                                                                // 238
        TemplateApps.upsert(selector, {                                                                                // 239
            $set: {                                                                                                    // 240
                name: currentApp.name,                                                                                 // 241
                id: currentApp.id,                                                                                     // 242
                generationUserId: Meteor.userId()                                                                      // 243
            }                                                                                                          // 240
        });                                                                                                            // 239
    },                                                                                                                 // 246
    removeTemplate: function (selector, currentApp) {                                                                  // 247
        console.log('remove template');                                                                                // 248
        TemplateApps.remove(selector);                                                                                 // 249
    },                                                                                                                 // 250
    removeGeneratedResources: function (generationUserSelection) {                                                     // 251
        //console.log('remove GeneratedResources method, before we make new ones');                                    // 252
        //logging only                                                                                                 // 253
        if (generationUserSelection) {                                                                                 // 254
            var call = {};                                                                                             // 255
            call.action = 'Remove generated resources';                                                                // 256
            call.request = 'Remove all apps and streams in Qlik Sense for userId: ' + generationUserSelection.generationUserId;
            REST_Log(call, generationUserSelection);                                                                   // 258
        }                                                                                                              // 259
                                                                                                                       //
        GeneratedResources.find(generationUserSelection).forEach(function (resource) {                                 // 260
            // this.unblock()                                                                                          // 262
            //console.log('resetEnvironment for userId', Meteor.userId());generationUserSelection.generationUserId     // 263
            //If not selection was given, we want to reset the whole environment, so also delete the streams.          // 265
            // if (!generationUserSelection.generationUserId) {                                                        // 266
            try {                                                                                                      // 267
                Meteor.call('deleteStream', resource.streamId); //added random company names, so this should not be an issue //26-9 can't delete stream, because each user creates a stream with the same name...
            } catch (err) {} //console.error('No issue, but you can manually remove this id from the generated database. We got one resource in the generated list, that has already been removed manually', resource);
            //don't bother if generated resources do not exists, just continue                                         // 271
            // }                                                                                                       // 272
            //delete apps always                                                                                       // 273
                                                                                                                       //
                                                                                                                       //
            try {                                                                                                      // 274
                Meteor.call('deleteApp', resource.appId);                                                              // 275
            } catch (err) {//console.error('No issue, but you can manually remove this id from the generated database. We got one resource in the generated list, that has already been removed manually', resource);
            }                                                                                                          // 278
        });                                                                                                            // 279
        GeneratedResources.remove(generationUserSelection);                                                            // 280
        APILogs.remove(generationUserSelection);                                                                       // 281
    },                                                                                                                 // 282
    copyApp: function (guid, name) {                                                                                   // 283
        check(guid, String);                                                                                           // 284
        check(name, String);                                                                                           // 285
        var id = QSApp.copyApp(guid, name);                                                                            // 286
        Meteor.call('updateLocalSenseCopy');                                                                           // 287
        return id;                                                                                                     // 288
    },                                                                                                                 // 289
    copyAppSelectedCustomers: function (currentApp) {                                                                  // 290
        //the app the user clicked on                                                                                  // 290
        if (!currentApp) {                                                                                             // 291
            throw new Meteor.Error('No App selected to copy');                                                         // 292
        }                                                                                                              // 293
                                                                                                                       //
        ;                                                                                                              // 293
        customers = Customers.find({                                                                                   // 295
            'generationUserId': Meteor.userId(),                                                                       // 296
            checked: true                                                                                              // 297
        }); //all selected customers                                                                                   // 295
                                                                                                                       //
        if (!customers) {                                                                                              // 299
            throw new Meteor.Error('No customers selected to copy the app for');                                       // 300
        }                                                                                                              // 301
                                                                                                                       //
        ;                                                                                                              // 301
        customers.forEach(function (customer) {                                                                        // 303
            var newAppId = Meteor.call('copyApp', currentApp.id, customer.name + '-' + currentApp.name);               // 305
            Meteor.call('updateLocalSenseCopy'); //store in the database that the user generated something, so we can later on remove it.
                                                                                                                       //
            GeneratedResources.insert({                                                                                // 309
                'generationUserId': Meteor.userId(),                                                                   // 310
                'customer': null,                                                                                      // 311
                'streamId': null,                                                                                      // 312
                'appId': newAppId                                                                                      // 313
            });                                                                                                        // 309
        });                                                                                                            // 315
    },                                                                                                                 // 316
    deleteApp: function (guid) {                                                                                       // 317
        check(guid, String);                                                                                           // 318
                                                                                                                       //
        if (guid !== Meteor.settings.public.templateAppId) {                                                           // 319
            //logging only                                                                                             // 320
            var call = {};                                                                                             // 321
            call.action = 'Delete app';                                                                                // 322
            call.request = 'Delete app: ' + guid;                                                                      // 323
            REST_Log(call);                                                                                            // 324
            var id = QSApp.deleteApp(guid);                                                                            // 326
            Meteor.call('updateLocalSenseCopy');                                                                       // 327
            return id;                                                                                                 // 328
        } else {                                                                                                       // 329
            throw new Meteor.Error("you can't delete the template app with guid: ", guid);                             // 330
        }                                                                                                              // 331
    },                                                                                                                 // 332
    removeAllCustomers: function () {                                                                                  // 333
        return Customers.remove({                                                                                      // 334
            'generationUserId': Meteor.userId()                                                                        // 335
        });                                                                                                            // 334
    }                                                                                                                  // 337
});                                                                                                                    // 196
Meteor.methods({                                                                                                       // 340
    updateLocalSenseCopyApps: function () {                                                                            // 341
        //delete the local content of the database before updating it                                                  // 342
        Apps.remove({}); //Update the Apps with fresh info from Sense                                                  // 343
                                                                                                                       //
        _.each(QSApp.getApps(), function (app) {                                                                       // 346
            Apps.insert(app);                                                                                          // 347
        });                                                                                                            // 348
    },                                                                                                                 // 349
    updateLocalSenseCopyStreams: function () {                                                                         // 350
        //delete the local content of the database before updating it                                                  // 351
        Streams.remove({}); //Update the Streams with fresh info from Sense                                            // 352
                                                                                                                       //
        _.each(QSStream.getStreams(), function (stream) {                                                              // 355
            Streams.insert(stream);                                                                                    // 356
        });                                                                                                            // 357
    },                                                                                                                 // 358
    updateLocalSenseCopy: function () {                                                                                // 359
        // //console.log('Method: update the local mongoDB with fresh data from Qlik Sense: call QRS API getStreams and getApps');
        //delete the local content of the database before updating it                                                  // 361
        Apps.remove({});                                                                                               // 362
        Streams.remove({}); //Update the Apps and Streams with fresh info from Sense                                   // 363
                                                                                                                       //
        _.each(QSApp.getApps(), function (app) {                                                                       // 366
            Apps.insert(app);                                                                                          // 367
        });                                                                                                            // 368
                                                                                                                       //
        _.each(QSStream.getStreams(), function (stream) {                                                              // 370
            Streams.insert(stream);                                                                                    // 371
        });                                                                                                            // 372
    },                                                                                                                 // 373
    getSecurityRules: function () {                                                                                    // 374
        return QSSystem.getSecurityRules();                                                                            // 375
    }                                                                                                                  // 376
}); // checkSenseIsReady() {                                                                                           // 340
//     //console.log('Method: checkSenseIsReady, TRY TO SEE IF WE CAN CONNECT TO QLIK SENSE ENGINE VIA QSOCKS');       // 383
//     // try {                                                                                                        // 385
//     // qsocks.Connect(engineConfig)                                                                                 // 386
//     //     .then(function(global) {                                                                                 // 387
//     //         // Connected                                                                                         // 388
//     //         //console.log('Meteor is connected via Qsocks to Sense Engine API using certificate authentication');
//     //         return true;                                                                                         // 390
//     //     }, function(err) {                                                                                       // 391
//     //         // Something went wrong                                                                              // 392
//     //         console.error('Meteor could not connect to Sense with the config settings specified. The error is: ', err.message);
//     //         console.error('the settings are: ', engineConfig)                                                    // 394
//     //         return false                                                                                         // 395
//     //         // throw new Meteor.Error('Could not connect to Sense Engine API', err.message);                     // 396
//     //     });                                                                                                      // 397
//     //TRY TO SEE IF WE CAN CONNECT TO SENSE VIA HTTP                                                                // 399
//     try{                                                                                                            // 400
//         const result = HTTP.get('http://' + senseConfig.SenseServerInternalLanIP +':' + senseConfig.port + '/'+ senseConfig.virtualProxy + '/qrs/app/full', { //?xrfkey=' + senseConfig.xrfkey, {
//             headers: authHeaders,                                                                                   // 402
//             params: { 'xrfkey': senseConfig.xrfkey }                                                                // 403
//         })//http get                                                                                                // 404
//         //console.log(result);                                                                                      // 405
//         if(result.statuscode === 200){                                                                              // 406
//             //console.log('We got a result back from Sense with statuscode 200: Success')                           // 407
//             return true;}                                                                                           // 408
//         else{return false}                                                                                          // 409
//     } catch (err) {                                                                                                 // 410
//         return false;                                                                                               // 411
//         // throw new Meteor.Error('Could not connect via HTTP to Qlik Sense: Is Sense running? Are the firewalls open? Have you exported the certificate for this host? virtualProxy setup?');
//     }                                                                                                               // 413
// }                                                                                                                   // 414
//GET APPS USING QSOCKS (FOR DEMO PURPOSE ONLY, CAN ALSO BE DONE WITH QRS API)                                         // 416
// getApps() {                                                                                                         // 417
//     return QSApp.getApps();                                                                                         // 418
//     // appListSync = Meteor.wrapAsync(qsocks.Connect(engineConfig)                                                  // 419
//     //     .then(function(global) {                                                                                 // 420
//     //         global.getDocList()                                                                                  // 421
//     //             .then(function(docList) {                                                                        // 422
//     //                 return (docList);                                                                            // 423
//     //             });                                                                                              // 424
//     //     })                                                                                                       // 425
//     //     .catch(err => {                                                                                          // 426
//     //         throw new Meteor.Error(err)                                                                          // 427
//     //     }));                                                                                                     // 428
//     // result = appListSync();                                                                                      // 429
//     // return result;                                                                                               // 430
// },                                                                                                                  // 432
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/yogiben.js");
require("./server/accounts.js");
require("./server/proxy.js");
require("./server/publications.js");
require("./server/restEndpoints.js");
require("./server/routes.js");
require("./server/seeds.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
