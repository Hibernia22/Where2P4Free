(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directions-tab-directions-tab-module"],{

/***/ "./node_modules/@ionic-native/google-maps/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/google-maps/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: LatLng, LatLngBounds, VisibleRegion, StreetViewSource, GoogleMapsEvent, GoogleMapsAnimation, GoogleMapsMapTypeId, GoogleMaps, BaseClass, BaseArrayClass, Circle, Environment, Geocoder, LocationService, Encoding, Poly, Spherical, StreetViewPanorama, GoogleMap, GroundOverlay, HtmlInfoWindow, Marker, MarkerCluster, Polygon, Polyline, TileOverlay, KmlOverlay, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLng", function() { return LatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLngBounds", function() { return LatLngBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibleRegion", function() { return VisibleRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewSource", function() { return StreetViewSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsEvent", function() { return GoogleMapsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAnimation", function() { return GoogleMapsAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsMapTypeId", function() { return GoogleMapsMapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseArrayClass", function() { return BaseArrayClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geocoder", function() { return Geocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poly", function() { return Poly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spherical", function() { return Spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlInfoWindow", function() { return HtmlInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerCluster", function() { return MarkerCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileOverlay", function() { return TileOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlOverlay", function() { return KmlOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = undefined;


var TARGET_ELEMENT_FINDING_QUERYS = [
    'ion-router-outlet #',
    '.show-page #',
];
var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    LatLngBounds.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    LatLngBounds.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    LatLngBounds.prototype.extend = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "extend", { "sync": true }, arguments); };
    LatLngBounds.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    LatLngBounds.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return LatLngBounds;
}());

var VisibleRegion = /** @class */ (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    VisibleRegion.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    VisibleRegion.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    VisibleRegion.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return VisibleRegion;
}());

/**
 * @hidden
 */
var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
var GoogleMaps = /** @class */ (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    GoogleMaps.create = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            else if (typeof element === 'object') {
                options = element;
                element = null;
            }
            var googleMap = new GoogleMap(element, options);
            googleMap.set('_overlays', {});
            return googleMap;
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    GoogleMaps.createPanorama = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            return new StreetViewPanorama(element, options);
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    GoogleMaps.pluginName = "GoogleMaps";
    GoogleMaps.pluginRef = "plugin.google.maps";
    GoogleMaps.plugin = "cordova-plugin-googlemaps";
    GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
    GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
    GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
    GoogleMaps.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
    GoogleMaps.platforms = ["Android", "iOS", "Browser"];
    GoogleMaps = __decorate([], GoogleMaps);
    return GoogleMaps;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));

var displayErrorMessage = function (element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.innerHTML = message;
    errorDiv.style.color = 'red';
    errorDiv.style.position = 'absolute';
    errorDiv.style.width = '80%';
    errorDiv.style.height = '50%';
    errorDiv.style.top = '0px';
    errorDiv.style.bottom = '0px';
    errorDiv.style.right = '0px';
    errorDiv.style.left = '0px';
    errorDiv.style.padding = '0px';
    errorDiv.style.margin = 'auto';
    element.style.position = 'relative';
    element.style.backgroundColor = '#ccc7';
    element.appendChild(errorDiv);
};
var ɵ0 = displayErrorMessage;
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
    if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = _this;
        }
        else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
            var _overlays = _objectInstance.getMap().get('_overlays') || {};
            var overlay = _overlays[args[args.length - 1].getId()];
            if (!overlay) {
                var markerJS = args[args.length - 1];
                var markerId_1 = markerJS.getId();
                var markerCluster = _objectInstance;
                overlay = new Marker(markerCluster.getMap(), markerJS);
                _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
                markerJS.one(markerJS.getId() + '_remove', function () {
                    var overlays = _objectInstance.getMap().get('_overlays');
                    if (overlays) {
                        overlays[markerId_1] = null;
                        delete overlays[markerId_1];
                    }
                });
            }
            args[args.length - 1] = overlay;
        }
        else {
            args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
    }
    return args;
};
var ɵ1 = normalizeArgumentsOfEventListener;
var BaseClass = /** @class */ (function () {
    function BaseClass(objInstance) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (!objInstance) {
                objInstance = new (GoogleMaps.getPlugin().BaseClass)();
            }
            this._objectInstance = objInstance;
        }
        else {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
    }
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addEventListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
                return _this.addEventListenerOnce(eventName);
            }
        })();
    };
    BaseClass.prototype.get = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "get", { "sync": true }, arguments); };
    BaseClass.prototype.set = function (key, value, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "set", { "sync": true }, arguments); };
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "bindTo", { "sync": true }, arguments); };
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.hasEventListener = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hasEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.empty = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "trigger", { "sync": true }, arguments);
    };
    BaseClass.prototype.destroy = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "destroy", { "sync": true }, arguments); };
    BaseClass.prototype.removeEventListener = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.off = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "off", { "sync": true }, arguments); };
    BaseClass.pluginName = "GoogleMaps";
    BaseClass.plugin = "cordova-plugin-googlemaps";
    BaseClass.pluginRef = "plugin.google.maps.BaseClass";
    BaseClass = __decorate([
        __metadata("design:paramtypes", [Object])
    ], BaseClass);
    return BaseClass;
}());

var BaseArrayClass = /** @class */ (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this = _super.call(this, initialData) || this;
        }
        else if (Array.isArray(initialData)) {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        }
        else {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }
        return _this;
    }
    BaseArrayClass.prototype.empty = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseArrayClass.prototype.forEach = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "forEach", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    BaseArrayClass.prototype.map = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "map", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    BaseArrayClass.prototype.filter = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "filter", { "sync": true }, arguments); };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    BaseArrayClass.prototype.getArray = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getArray", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getAt = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getLength = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLength", { "sync": true }, arguments); };
    BaseArrayClass.prototype.indexOf = function (element) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "indexOf", { "sync": true }, arguments); };
    BaseArrayClass.prototype.reverse = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "reverse", { "sync": true }, arguments); };
    BaseArrayClass.prototype.sort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "sort", { "sync": true }, arguments); };
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "insertAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.pop = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "pop", { "sync": true }, arguments); };
    BaseArrayClass.prototype.push = function (element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "push", { "sync": true }, arguments); };
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAt", { "sync": true }, arguments); };
    BaseArrayClass.pluginName = "BaseArrayClass";
    BaseArrayClass.plugin = "cordova-plugin-googlemaps";
    BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
    BaseArrayClass = __decorate([
        __metadata("design:paramtypes", [Object])
    ], BaseArrayClass);
    return BaseArrayClass;
}(BaseClass));

var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Circle.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () {
        return this._map;
    };
    Circle.prototype.setCenter = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCenter", { "sync": true }, arguments); };
    Circle.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Circle.prototype.getRadius = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRadius", { "sync": true }, arguments); };
    Circle.prototype.setRadius = function (radius) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRadius", { "sync": true }, arguments); };
    Circle.prototype.setFillColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Circle.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Circle.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Circle.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Circle.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Circle.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Circle.prototype.getBounds = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBounds", { "sync": true }, arguments); };
    Circle.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Circle.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    return Circle;
}(BaseClass));

var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Set environment variables.
     */
    Environment.setEnv = function (envOptions) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation This method is static. Please use Environment.getLicenseInfo()
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
    };
    /**
     * @deprecation This method is static. Please use Environment.setBackgroundColor()
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
    };
    Environment.plugin = "cordova-plugin-googlemaps";
    Environment.pluginName = "GoogleMaps";
    Environment.pluginRef = "plugin.google.maps.environment";
    Environment.repo = "";
    Environment = __decorate([], Environment);
    return Environment;
}());

var Geocoder = /** @class */ (function () {
    function Geocoder() {
    }
    /**
     * @deprecation This method is static. Please use Geocoder.geocode()
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    Geocoder.pluginName = "GoogleMaps";
    Geocoder.pluginRef = "plugin.google.maps.Geocoder";
    Geocoder.plugin = "cordova-plugin-googlemaps";
    Geocoder.repo = "";
    Geocoder = __decorate([], Geocoder);
    return Geocoder;
}());

var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    LocationService.getMyLocation = function (options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    LocationService.hasPermission = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    LocationService.pluginName = "GoogleMaps";
    LocationService.pluginRef = "plugin.google.maps.LocationService";
    LocationService.plugin = "cordova-plugin-googlemaps";
    LocationService.repo = "";
    LocationService = __decorate([], LocationService);
    return LocationService;
}());

var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.encodePath(path);
    };
    /**
     * @deprecation This method is static. Please use Encoding.decodePath()
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
    };
    /**
     * @deprecation This method is static. Please use Encoding.encodePath()
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
    };
    Encoding.pluginName = "GoogleMaps";
    Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
    Encoding.plugin = "cordova-plugin-googlemaps";
    Encoding.repo = "";
    Encoding = __decorate([], Encoding);
    return Encoding;
}());

var Poly = /** @class */ (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly.pluginName = "GoogleMaps";
    Poly.pluginRef = "plugin.google.maps.geometry.poly";
    Poly.plugin = "cordova-plugin-googlemaps";
    Poly.repo = "";
    Poly = __decorate([], Poly);
    return Poly;
}());

var Spherical = /** @class */ (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffset()
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeLength()
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeArea()
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeSignedArea()
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeHeading()
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.interpolate()
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
    };
    Spherical.pluginName = "GoogleMaps";
    Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
    Spherical.plugin = "cordova-plugin-googlemaps";
    Spherical.repo = "";
    Spherical = __decorate([], Spherical);
    return Spherical;
}());

var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = this;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, 100);
                }), options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
        return _this;
    }
    StreetViewPanorama.prototype.setPov = function (pov) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPov", {}, arguments); };
    StreetViewPanorama.prototype.setPosition = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", {}, arguments); };
    StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanningGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getZoomGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getStreetNamesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getNavigationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLinks = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLinks", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLocation", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanoId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanoId", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    var _a;
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
    StreetViewPanorama = __decorate([
        __metadata("design:paramtypes", [Object, Object])
    ], StreetViewPanorama);
    return StreetViewPanorama;
}(BaseClass));

var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options, elFindTimeout) {
        if (elFindTimeout === void 0) { elFindTimeout = 2000; }
        var _this = this;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var numAttempts = 0;
                    var durationBetweenAttemptsMs = 100;
                    var maxAttempts = Math.floor(elFindTimeout / durationBetweenAttemptsMs);
                    var timer = setInterval(function () {
                        var targets;
                        for (var i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element))
                                // Filter out el which are already map layers
                                .filter(function (target) {
                                return !target.hasAttribute('__pluginmapid');
                            });
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (numAttempts++ < maxAttempts) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && (targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100)) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, durationBetweenAttemptsMs);
                }), options)) || this;
            }
            else if (element === null && options) {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            console.error(errorMessage.join(''));
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
        }
        return _this;
    }
    GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                if (!domNode) {
                    _this._objectInstance.setDiv();
                    return;
                }
                if (typeof domNode === 'string') {
                    (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                        var i, targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                resolve(targets[0]);
                                return;
                            }
                        }
                        reject('Can not find [#' + domNode + '] element');
                    }))
                        .then(function (element) {
                        _this._objectInstance.setDiv(element);
                    });
                }
                else {
                    if (domNode instanceof HTMLElement &&
                        !domNode.offsetParent &&
                        domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                        _this._objectInstance.setDiv(domNode);
                    }
                    else {
                        throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
                    }
                }
            }
        })();
    };
    GoogleMap.prototype.getDiv = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDiv", { "sync": true }, arguments); };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMapTypeId", { "sync": true }, arguments); };
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCamera", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCamera", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.getCameraPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraPosition", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTarget = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraZoom = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTilt = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTarget = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTilt = function (tiltAngle) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.panBy = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "panBy", { "sync": true }, arguments); };
    GoogleMap.prototype.getVisibleRegion = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisibleRegion", { "sync": true }, arguments); };
    GoogleMap.prototype.getMyLocation = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getMyLocation", {}, arguments); };
    GoogleMap.prototype.setClickable = function (isClickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GoogleMap.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    GoogleMap.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "clear", {}, arguments); };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromLatLngToPoint", {}, arguments); };
    GoogleMap.prototype.fromPointToLatLng = function (point) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromPointToLatLng", {}, arguments); };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationButtonEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.getFocusedBuilding = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFocusedBuilding", {}, arguments); };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIndoorEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTrafficEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCompassEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAllGesturesEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPadding", { "sync": true }, arguments); };
    GoogleMap.prototype.setOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOptions", { "sync": true }, arguments); };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarker(options, function (marker) {
                        if (marker) {
                            var overlayId_1 = marker.getId();
                            var overlay_1 = new Marker(_this, marker);
                            _this.get('_overlays')[overlayId_1] = overlay_1;
                            marker.one(overlayId_1 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_1] = null;
                                    overlay_1.destroy();
                                }
                            });
                            resolve(overlay_1);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var marker = _this._objectInstance.addMarker(options);
                var overlayId = marker.getId();
                var overlay = new Marker(_this, marker);
                _this.get('_overlays')[overlayId] = overlay;
                marker.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                        if (markerCluster) {
                            var overlayId_2 = markerCluster.getId();
                            var overlay_2 = new MarkerCluster(_this, markerCluster);
                            _this.get('_overlays')[overlayId_2] = overlay_2;
                            markerCluster.one('remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_2] = null;
                                    overlay_2.destroy();
                                }
                            });
                            markerCluster.set('_overlays', new BaseArrayClass());
                            resolve(overlay_2);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var markerCluster = _this._objectInstance.addMarkerCluster(options);
                var overlayId = markerCluster.getId();
                var overlay = new MarkerCluster(_this, markerCluster);
                _this.get('_overlays')[overlayId] = overlay;
                markerCluster.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                markerCluster.set('_overlays', new BaseArrayClass());
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addCircle(options, function (circle) {
                        if (circle) {
                            var overlayId_3 = circle.getId();
                            var overlay_3 = new Circle(_this, circle);
                            _this.get('_overlays')[overlayId_3] = overlay_3;
                            circle.one(overlayId_3 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_3] = null;
                                    overlay_3.destroy();
                                }
                            });
                            resolve(overlay_3);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var circle = _this._objectInstance.addCircle(options);
                var overlayId = circle.getId();
                var overlay = new Circle(_this, circle);
                _this.get('_overlays')[overlayId] = overlay;
                circle.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolygon(options, function (polygon) {
                        if (polygon) {
                            var overlayId_4 = polygon.getId();
                            var overlay_4 = new Polygon(_this, polygon);
                            _this.get('_overlays')[overlayId_4] = overlay_4;
                            polygon.one(overlayId_4 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_4] = null;
                                    overlay_4.destroy();
                                }
                            });
                            resolve(overlay_4);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polygon = _this._objectInstance.addPolygon(options);
                var overlayId = polygon.getId();
                var overlay = new Polygon(_this, polygon);
                _this.get('_overlays')[overlayId] = overlay;
                polygon.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolyline(options, function (polyline) {
                        if (polyline) {
                            var overlayId_5 = polyline.getId();
                            var overlay_5 = new Polyline(_this, polyline);
                            _this.get('_overlays')[overlayId_5] = overlay_5;
                            polyline.one(overlayId_5 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_5] = null;
                                    overlay_5.destroy();
                                }
                            });
                            resolve(overlay_5);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polyline = _this._objectInstance.addPolyline(options);
                var overlayId = polyline.getId();
                var overlay = new Polyline(_this, polyline);
                _this.get('_overlays')[overlayId] = overlay;
                polyline.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                        if (tileOverlay) {
                            var overlayId_6 = tileOverlay.getId();
                            var overlay_6 = new TileOverlay(_this, tileOverlay);
                            _this.get('_overlays')[overlayId_6] = overlay_6;
                            tileOverlay.one(overlayId_6 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_6] = null;
                                    overlay_6.destroy();
                                }
                            });
                            resolve(overlay_6);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var tileOverlay = _this._objectInstance.addTileOverlay(options);
                var overlayId = tileOverlay.getId();
                var overlay = new TileOverlay(_this, tileOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                tileOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                        if (groundOverlay) {
                            var overlayId_7 = groundOverlay.getId();
                            var overlay_7 = new GroundOverlay(_this, groundOverlay);
                            _this.get('_overlays')[overlayId_7] = overlay_7;
                            groundOverlay.one(overlayId_7 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_7] = null;
                                    overlay_7.destroy();
                                }
                            });
                            resolve(overlay_7);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var groundOverlay = _this._objectInstance.addGroundOverlay(options);
                var overlayId = groundOverlay.getId();
                var overlay = new GroundOverlay(_this, groundOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                groundOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                        if (kmlOverlay) {
                            var overlayId_8 = kmlOverlay.getId();
                            var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                            _this.get('_overlays')[overlayId_8] = overlay_8;
                            kmlOverlay.one(overlayId_8 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_8] = null;
                                    overlay_8.destroy();
                                }
                            });
                            resolve(overlay_8);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.toDataURL = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toDataURL", {}, arguments); };
    var _b;
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
    GoogleMap = __decorate([
        __metadata("design:paramtypes", [Object, Object, Object])
    ], GoogleMap);
    return GoogleMap;
}(BaseClass));

var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    GroundOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () {
        return this._map;
    };
    GroundOverlay.prototype.setBounds = function (bounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBounds", { "sync": true }, arguments); };
    GroundOverlay.prototype.setBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.getBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.setImage = function (imageUrl) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setImage", { "sync": true }, arguments); };
    GroundOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return GroundOverlay;
}(BaseClass));

var HtmlInfoWindow = /** @class */ (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
    }
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBackgroundColor", {}, arguments); };
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setContent", {}, arguments); };
    HtmlInfoWindow.prototype.open = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "open", {}, arguments); };
    HtmlInfoWindow.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "close", {}, arguments); };
    HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
    HtmlInfoWindow.pluginName = "GoogleMaps";
    HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
    HtmlInfoWindow.repo = "";
    HtmlInfoWindow = __decorate([
        __metadata("design:paramtypes", [])
    ], HtmlInfoWindow);
    return HtmlInfoWindow;
}(BaseClass));

var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Marker.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () {
        return this._map;
    };
    Marker.prototype.setPosition = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", { "sync": true }, arguments); };
    Marker.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    Marker.prototype.showInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "showInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.hideInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hideInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.setAnimation = function (animation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAnimation", { "sync": true }, arguments); };
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDisableAutoPan", { "sync": true }, arguments); };
    Marker.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Marker.prototype.isVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isVisible", { "sync": true }, arguments); };
    Marker.prototype.setTitle = function (title) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTitle", { "sync": true }, arguments); };
    Marker.prototype.getTitle = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTitle", { "sync": true }, arguments); };
    Marker.prototype.setSnippet = function (snippet) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setSnippet", { "sync": true }, arguments); };
    Marker.prototype.getSnippet = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getSnippet", { "sync": true }, arguments); };
    Marker.prototype.setOpacity = function (alpha) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    Marker.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    Marker.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Marker.prototype.setIconAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIconAnchor", { "sync": true }, arguments); };
    Marker.prototype.setInfoWindowAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setInfoWindowAnchor", { "sync": true }, arguments); };
    Marker.prototype.isInfoWindowShown = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isInfoWindowShown", { "sync": true }, arguments); };
    Marker.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Marker.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Marker.prototype.setDraggable = function (draggable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDraggable", { "sync": true }, arguments); };
    Marker.prototype.isDraggable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isDraggable", { "sync": true }, arguments); };
    Marker.prototype.setFlat = function (flat) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFlat", { "sync": true }, arguments); };
    Marker.prototype.setIcon = function (icon) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIcon", { "sync": true }, arguments); };
    Marker.prototype.setRotation = function (rotation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRotation", { "sync": true }, arguments); };
    Marker.prototype.getRotation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRotation", { "sync": true }, arguments); };
    return Marker;
}(BaseClass));

var MarkerCluster = /** @class */ (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    MarkerCluster.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarker = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarker", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarkers = function (markers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarkers", { "sync": true }, arguments); };
    MarkerCluster.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () {
        return this._map;
    };
    return MarkerCluster;
}(BaseClass));

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polygon.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () {
        return this._map;
    };
    Polygon.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polygon.prototype.setHoles = function (holes) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setHoles", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    Polygon.prototype.setFillColor = function (fillColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Polygon.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Polygon.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polygon.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polygon.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polygon.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polygon.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polygon.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polygon.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.setGeodesic = function (geodesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeodesic", { "sync": true }, arguments); };
    Polygon.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    return Polygon;
}(BaseClass));

var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polyline.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () {
        return this._map;
    };
    Polyline.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polyline.prototype.setGeoDesic = function (geoDesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeoDesic", { "sync": true }, arguments); };
    Polyline.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    Polyline.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polyline.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polyline.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polyline.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polyline.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polyline.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return Polyline;
}(BaseClass));

var TileOverlay = /** @class */ (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    TileOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () {
        return this._map;
    };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.getFadeIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getTileSize = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTileSize", { "sync": true }, arguments); };
    TileOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return TileOverlay;
}(BaseClass));

var KmlOverlay = /** @class */ (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    KmlOverlay.prototype.getDefaultViewport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDefaultViewport", { "sync": true }, arguments); };
    KmlOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    KmlOverlay.prototype.getMap = function () { return this._map; };
    KmlOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return KmlOverlay;
}(BaseClass));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBNjVJQTtBQTc1SUEsT0FBTyxzR0FPTCxpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxJQUFNLDZCQUE2QixHQUFhO0lBQzlDLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2YsQ0FBQzs7SUFrQkEsZ0JBQVksR0FBVyxFQUFFLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDM0IsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztpQkFuREg7Ozs7SUFxRUUsc0JBQVksTUFBa0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FB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QUFDO0lBQ25CLENBQUM7SUFPRCwrQkFBUyxhQUFDLE1BQWU7SUFRekIsK0JBQVM7SUFTVCwrQkFBUyxhQUFDLE1BQWM7SUFReEIsK0JBQVM7SUFTVCxnQ0FBVSxhQUFDLE9BQWU7SUFRMUIsZ0NBQVU7SUFTVixnQ0FBVSxhQUFDLE9BQWdCO0lBUTNCLGdDQUFVO0lBUVYsaUNBQVc7SUFRWCw0QkFBTTtzQkF4MElSO0VBOHRJaUMsU0FBUzs7O0lBb0hWLDhCQUFTO0lBSXZDLG9CQUFZLElBQWUsRUFBRSxlQUFvQjtRQUFqRCxZQUNFLGtCQUFNLGVBQWUsQ0FBQyxTQVd2QjtRQVZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNsQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNO1lBQ2xDLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUNuQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPO1lBQ25DLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBTUQsdUNBQWtCO0lBT2xCLDBCQUFLO0lBRUw7OztPQUdHO0lBQ0gsMkJBQU0sR0FBTixjQUFzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBT3pDLCtCQUFVLGFBQUMsT0FBZ0I7SUFPM0IsK0JBQVU7SUFPVixpQ0FBWSxhQUFDLFNBQWtCO0lBTy9CLGlDQUFZO0lBTVosMkJBQU07cUJBdjVJUjtFQWsxSWdDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG4gIGdldFByb21pc2Vcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVM6IHN0cmluZ1tdID0gW1xuICAnaW9uLXJvdXRlci1vdXRsZXQgIycsXG4gICcuc2hvdy1wYWdlICMnLFxuXTtcblxuZXhwb3J0IHR5cGUgTWFwVHlwZSA9XG4gICdNQVBfVFlQRV9OT1JNQUwnXG4gIHwgJ01BUF9UWVBFX1JPQURNQVAnXG4gIHwgJ01BUF9UWVBFX1NBVEVMTElURSdcbiAgfCAnTUFQX1RZUEVfSFlCUklEJ1xuICB8ICdNQVBfVFlQRV9URVJSQUlOJ1xuICB8ICdNQVBfVFlQRV9OT05FJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXRMbmcgaW1wbGVtZW50cyBJTGF0TG5nIHtcblxuICBsYXQ6IG51bWJlcjtcbiAgbG5nOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXQgPSBsYXQ7XG4gICAgdGhpcy5sbmcgPSBsbmc7XG4gIH1cblxuICBlcXVhbHMob3RoZXI6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgPT09IG90aGVyLmxhdCAmJiB0aGlzLmxuZyA9PT0gb3RoZXIubG5nO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgKyAnLCcgKyB0aGlzLmxuZztcbiAgfVxuXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgNjtcblxuICAgIHJldHVybiB0aGlzLmxhdC50b0ZpeGVkKHByZWNpc2lvbikgKyAnLCcgKyB0aGlzLmxuZy50b0ZpeGVkKHByZWNpc2lvbik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nQm91bmRzIHtcbiAgbm9ydGhlYXN0OiBJTGF0TG5nO1xuICBzb3V0aHdlc3Q6IElMYXRMbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTGF0TG5nQm91bmRzIGltcGxlbWVudHMgSUxhdExuZ0JvdW5kcyB7XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc291dGh3ZXN0OiBJTGF0TG5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwb2ludHM/OiBJTGF0TG5nW10pIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKSkuTGF0TG5nQm91bmRzKHBvaW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgYm91bmRzIHRvIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZXh0ZW5kKExhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY2VudGVyIG9mIHRoaXMgTGF0TG5nQm91bmRzXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENlbnRlcigpOiBMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcENvbnRyb2xPcHRpb25zIHtcblxuICAvKipcbiAgICogVHVybnMgdGhlIGNvbXBhc3Mgb24gb3Igb2ZmLlxuICAgKi9cbiAgY29tcGFzcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBteUxvY2F0aW9uIGJ1dHRvbiBvbiBvciBvZmYuIElmIHR1cm5zIG9uIHRoaXMgYnV0dG9uLCB0aGUgYXBwbGljYXRpb24gZGlzcGxheXMgYSBwZXJtaXNzaW9uIGRpYWxvZyB0byBvYnRhaW4gdGhlIGdlb2xvY2F0aW9uIGRhdGEuXG4gICAqL1xuICBteUxvY2F0aW9uQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIG15TG9jYXRpb24gY29udHJvbChibHVlIGRvdCkgb24gb3Igb2ZmLiBJZiB0dXJucyBvbiB0aGlzIGNvbnRyb2wsIHRoZSBhcHBsaWNhdGlvbiBkaXNwbGF5cyBhIHBlcm1pc3Npb24gZGlhbG9nIHRvIG9idGFpbiB0aGUgZ2VvbG9jYXRpb24gZGF0YS5cbiAgICovXG4gIG15TG9jYXRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgaW5kb29yIHBpY2tlciBvbiBvciBvZmYuXG4gICAqL1xuICBpbmRvb3JQaWNrZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAqKkFuZHJvaWQqKlxuICAgKiBUdXJucyB0aGUgbWFwIHRvb2xiYXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgbWFwVG9vbGJhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICoqQW5kcm9pZCoqXG4gICAqIFR1cm5zIHRoZSB6b29tIGNvbnRyb2xsZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcEdlc3R1cmVPcHRpb25zIHtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHNjcm9sbCBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgc2Nyb2xsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHRpbHQgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHRpbHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgem9vbSBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSByb3RhdGUgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHJvdGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFpvb21PcHRpb25zIHtcbiAgbWluWm9vbT86IG51bWJlcjtcbiAgbWF4Wm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQYWRkaW5nT3B0aW9ucyB7XG4gIGxlZnQ/OiBudW1iZXI7XG4gIHRvcD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xuICByaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQcmVmZXJlbmNlT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYW5kIG1heGltdW0gem9vbSBsZXZlbHMgZm9yIHpvb21pbmcgZ2VzdHVyZXMuXG4gICAqL1xuICB6b29tPzogR29vZ2xlTWFwWm9vbU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFBhZGRpbmdzIG9mIGNvbnRyb2xzLlxuICAgKi9cbiAgcGFkZGluZz86IEdvb2dsZU1hcFBhZGRpbmdPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgM0QgYnVpbGRpbmdzIGxheWVyIG9uIG9yIG9mZi5cbiAgICovXG4gIGJ1aWxkaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYm91bmRzIGxpbWl0IGZvciB1c2VyIHBhbm5pbmcgZ2VzdHVyZS5cbiAgICovXG4gIGdlc3R1cmVCb3VuZHM/OiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBtYXBUeXBlIFtvcHRpb25zXVxuICAgKi9cbiAgbWFwVHlwZT86IE1hcFR5cGUgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbnRyb2xzIFtvcHRpb25zXVxuICAgKi9cbiAgY29udHJvbHM/OiBHb29nbGVNYXBDb250cm9sT3B0aW9ucztcblxuICAvKipcbiAgICogZ2VzdHVyZXMgW29wdGlvbnNdXG4gICAqL1xuICBnZXN0dXJlcz86IEdvb2dsZU1hcEdlc3R1cmVPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBNYXAgc3R5bGVzIFtvcHRpb25zXVxuICAgKiBAcmVmIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3N0eWxlLXJlZmVyZW5jZVxuICAgKi9cbiAgc3R5bGVzPzogYW55W107XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgY2FtZXJhIHBvc2l0aW9uIFtvcHRpb25zXVxuICAgKi9cbiAgY2FtZXJhPzogQ2FtZXJhUG9zaXRpb248YW55PjtcblxuICAvKipcbiAgICogcHJlZmVyZW5jZXMgW29wdGlvbnNdXG4gICAqL1xuICBwcmVmZXJlbmNlcz86IEdvb2dsZU1hcFByZWZlcmVuY2VPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3NpdGlvbjxUPiB7XG4gIC8qKlxuICAgKiBUaGUgY2VudGVyIGxvY2F0aW9uIG9mIHRoZSBjYW1lcmEgdmlldy5cbiAgICpcbiAgICogW3VzYWdlIDFdXG4gICAqXG4gICAqIGxldCBjYW1lcmFQb3M6IENhbWVyYVBvc2l0aW9uPElMYXRMbmc+ID0ge1xuICAgKiAgIHRhcmdldDoge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgem9vbTogMTBcbiAgICogfVxuICAgKlxuICAgKiBbdXNhZ2UgMl0gVGhlIHpvb20gcHJvcGVydHkgaXMgaWdub3JlZCB3aGVuIHlvdSBzcGVjaWZ5IG11bHRpcGxlIHBvc2l0aW9uXG4gICAqXG4gICAqIGxldCBjYW1lcmFQb3M6IENhbWVyYVBvc2l0aW9uPElMYXRMbmdbXT4gPSB7XG4gICAqICAgdGFyZ2V0OiBbXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn1cbiAgICogICBdXG4gICAqIH1cbiAgICovXG4gIHRhcmdldD86IFQ7XG4gIC8qKlxuICAgKiBWaWV3IGFuZ2xlXG4gICAqL1xuICB0aWx0PzogbnVtYmVyO1xuICAvKipcbiAgICogWm9vbSBsZXZlbFxuICAgKi9cbiAgem9vbT86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1hcCBvcmllbnRhdGlvblxuICAgKi9cbiAgYmVhcmluZz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIENhbWVyYSBwYWRkaW5nIGluIHBpeGVsXG4gICAqL1xuICBwYWRkaW5nPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU9wdGlvbnMge1xuICAvKipcbiAgICogQ2VudGVyIHBvc2l0aW9uIG9mIGNpcmNsZVxuICAgKi9cbiAgY2VudGVyOiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgY2lyY2xlIGluIG1ldGVyXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgaW5zaWRlIGNvbG9yIG9mIGNpcmNsZVxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGhlIENJUkNMRV9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gaGlkZVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2RlclJlcXVlc3Qge1xuXG4gIC8qKlxuICAgKiBUaGUgYWRkcmVzcyBwcm9wZXJ0eSBvciBwb3NpdGlvbiBwcm9wZXJ0eSBpcyByZXF1aXJlZC5cbiAgICogWW91IGNhbiBub3Qgc3BlY2lmeSBib3RoIHByb3BlcnR5IGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqXG4gICAqIFtnZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIGFkZHJlc3M6IFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiXG4gICAqIH1cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTJdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogW1xuICAgKiAgICBcIkxvcyBBbmdlbGVzLCBDYWxpZm9ybmlhLCBVU0FcIixcbiAgICogICAgXCJTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLCBVU0FcIixcbiAgICogICBdXG4gICAqIH1cbiAgICovXG4gIGFkZHJlc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICpcbiAgICogW3JldmVyc2UtZ2VvY29kaW5nIHVzYWdlMV1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBwb3NpdGlvbjoge1wibGF0XCI6IDM3LjQyMTY1NSwgXCJsbmdcIjogLTEyMi4wODU2Mzd9XG4gICAqIH1cbiAgICpcbiAgICogW3JldmVyc2UtZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBwb3NpdGlvbjogW1xuICAgKiAgICB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN30sXG4gICAqICAgIHtcImxhdFwiOiAzNy4zMzIsIFwibG5nXCI6IC0xMjIuMDMwNzgxfVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgcG9zaXRpb24/OiBJTGF0TG5nIHwgSUxhdExuZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVzdWx0IHtcbiAgYWRtaW5BcmVhPzogc3RyaW5nO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICBjb3VudHJ5Q29kZT86IHN0cmluZztcbiAgZXh0cmE/OiB7XG4gICAgZmVhdHVyZU5hbWU/OiBzdHJpbmc7XG4gICAgbGluZXM/OiBzdHJpbmdbXTtcbiAgICBwZXJtaXNlcz86IHN0cmluZztcbiAgICBwaG9uZT86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmdcbiAgfTtcbiAgbG9jYWxlPzogc3RyaW5nO1xuICBsb2NhbGl0eT86IHN0cmluZztcbiAgcG9zaXRpb24/OiBJTGF0TG5nO1xuICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICBzdWJBZG1pbkFyZWE/OiBzdHJpbmc7XG4gIHN1YkxvY2FsaXR5Pzogc3RyaW5nO1xuICBzdWJUaG9yb3VnaGZhcmU/OiBzdHJpbmc7XG4gIHRob3JvdWdoZmFyZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVUkwgb2Ygb3ZlcmxheVxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJvdW5kcywgYXJyYXkgb2YgSUxhdExuZ1xuICAgKi9cbiAgYm91bmRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGhlIEdST1VORF9PVkVSTEFZX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3BhY2l0eS4gRnJvbSAwLjAgdG8gMS4wIC5cbiAgICovXG4gIG9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJlYXJpbmdcbiAgICovXG4gIGJlYXJpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckljb24ge1xuICB1cmw/OiBzdHJpbmc7XG4gIHNpemU/OiB7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGljb24gaW1hZ2UgdXJsIG9yIHByb3BlcnRpZXMuIEFsc28geW91IGNhbiBzcGVjaWZ5IEhUTUwgQ29sb3IgdmFsdWVzLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc3BlY2lmeSB0aGUgaW1hZ2UgYXMgQmFzZTY0XG4gICAqL1xuICBpY29uPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc25pcHBldCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHNuaXBwZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgcG9zaXRpb246IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqICBTcGVjaWZ5IHRoZSBhbmNob3Igb2YgdGhlIEluZm9XaW5kb3dcbiAgICovXG4gIGluZm9XaW5kb3dBbmNob3I/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogXHRTcGVjaWZ5IHRoZSBhbmNob3Igb2YgaWNvbiBpbWFnZVxuICAgKi9cbiAgYW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGVuYWJsZSB0byBkcmFnIHRoZSBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSkgSW1wb3J0YW50ISBEcmFnIHN0YXJ0cyBhZnRlciBsb25nIHByZXNzZWQgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgYSBmbGF0IG1hcmtlci4gKERlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgcm90YXRpb24gYW5nbGUuIChEZWZhdWx0OiAwKVxuICAgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlLiAoRGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb25zIGZvciB0aXRsZS4gVGhpcyBwcm9wZXJ0eSB3b3JrIGZvciBub3JtYWwgSW5mb1dpbmRvdy5cbiAgICovXG4gIHN0eWxlcz86IGFueTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqL1xuICBhbmltYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvIHBhbm5pbmcgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b1Bhbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTGFiZWwge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGJvbGQgZm9udFxuICAgKi9cbiAgYm9sZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmb250IHNpemUgaW4gcGl4ZWxcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjb2xvciBzdHJpbmdzXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGl0YWxpYyBmb250XG4gICAqL1xuICBpdGFsaWM/OiBib29sZWFuO1xuXG59XG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckNsdXN0ZXJJY29uIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgY2x1c3RlcmluZ1xuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhbmNob3IgcG9zaXRpb24gb2YgdGhlIG1hcmtlclxuICAgKi9cbiAgYW5jaG9yPzogYW55O1xuXG4gIC8qKlxuICAgKiBsYWJlbCBvcHRpb24gZm9yIGNsdXN0ZXJlZCBtYXJrZXJcbiAgICovXG4gIGxhYmVsPzogTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIGljb24gdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBzaXplXG4gICAqL1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgb2YgY2x1c3RlcmluZ1xuICAgKiAoZGVmYXVsdDogMTUsIG1heDogMTgpXG4gICAqL1xuICBtYXhab29tTGV2ZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyYXcgYSByZWN0YW5nbGUgdGhhdCBjb250YWlucyBhbGwgbG9jYXRpb25zIG9mIGNsdXN0ZXJlZCB3aGVuIHlvdSB0YXAgb24gYSBjbHVzdGVyIG1hcmtlci5cbiAgICogKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBib3VuZHNEcmF3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gbGlzdFxuICAgKiBbXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEFcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQlwiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19LFxuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBDXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX1cbiAgICogXVxuICAgKi9cbiAgbWFya2VyczogTWFya2VyT3B0aW9uc1tdO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25zIG9mIGNsdXN0ZXJpbmdcbiAgICogW1xuICAgKiAgIHtpY29uOiBcImFzc2V0cy9zbWFsbC5wbmdcIiwgbWluOiAyLCBtYXg6IDEwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbWlkZGxlLnBuZ1wiLCBtaW46IDExLCBtYXg6IDMwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbGFyZ2UucG5nXCIsIG1pbjogMzF9XG4gICAqIF1cbiAgICovXG4gIGljb25zOiBNYXJrZXJDbHVzdGVySWNvbltdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb24ge1xuICBsYXRMbmc/OiBMYXRMbmc7XG4gIGVsYXBzZWRSZWFsdGltZU5hbm9zPzogYW55O1xuICB0aW1lPzogc3RyaW5nO1xuICBhY2N1cmFjeT86IGFueTtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgYWx0aXR1ZGU/OiBhbnk7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBwcm92aWRlcj86IGFueTtcbiAgaGFzaENvZGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlMb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdHJ5IHRvIHVzZSBHUFMgbWFuZGF0b3J5LlxuICAgKiBJbiBmYWxzZSwgdGhlIHBsdWdpbiB0cnkgdG8gdXNlIEdQUyBhbmQgbmV0d29yay5cbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlnb24gYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgcG9seWdvblxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlnb25cbiAgICogKEludmlzaWJsZSBwb2x5Z29uIGlzIG5vdCBjbGlja2FibGUsIGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXVtdIHRvIGNyZWF0ZSBob2xlcyBpbiBwb2x5Z29uXG4gICAqL1xuICBob2xlcz86IElMYXRMbmdbXVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZR09OX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdIHRvIHNwZWNpZnkgdGhlIHZlcnRpeGVzLlxuICAgKiBZb3UgbmVlZCB0byBjb250YWluIHR3byBwb2ludHMgYXQgbGVhc3QuXG4gICAqL1xuICBwb2ludHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgcG9seWxpbmVcbiAgICogKEludmlzaWJsZSBwb2x5bGluZSBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZHJhdyB0aGUgY3VydmUgcG9seWxpbmUgYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUxJTkVfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVGhpcyBjYWxsYmFjayBtdXN0IFJldHVybnMgc3RyaW5nIG9mIGltYWdlIFVSTCwgb3IgUHJvbWlzZS5cbiAgICogSWYgbm8gdGlsZSwgeW91IG5lZWQgdG8gUmV0dXJucyBudWxsLlxuICAgKi9cbiAgLy8gZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPjtcbiAgZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgdGlsZWxheWVyXG4gICAqIChkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXggb2YgdGlsZWxheWVyXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDUxMnB4XG4gICAqL1xuICB0aWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRGVmYXVsdDogMS4wXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSB0aWxlIGluZm9ybWF0aW9uIG92ZXIgdGhlIHRpbGUgaW1hZ2VzLlxuICAgKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvRGF0YVVybE9wdGlvbnMge1xuICAvKipcbiAgICogVHJ1ZSBpZiB5b3Ugd2FudCBnZXQgaGlnaCBxdWFsaXR5IG1hcCBzbmFwc2hvdFxuICAgKi9cbiAgdW5jb21wcmVzcz86IGJvb2xlYW47XG59XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBtYXAuYWRkS21sT3ZlcmxheSgpIG1ldGhvZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEttbE92ZXJsYXlPcHRpb25zIHtcbiAgLypcbiAgICogVGhlIHVybCBvciBmaWxlIHBhdGggb2YgS01MIGZpbGUuIEtNWiBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qXG4gICAqIERvIG5vdCBmaXJlIHRoZSBLTUxfQ0xJQ0sgZXZlbnQgaWYgZmFsc2UuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLypcbiAgICogRG8gbm90IGRpc3BsYXkgdGhlIGRlZmF1bHQgaW5mb1dpbmRvdyBpZiB0cnVlLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgc3VwcHJlc3NJbmZvV2luZG93cz86IGJvb2xlYW47XG5cbiAgLypcbiAgICogaWNvbiBvcHRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBNYXJrZXJJY29uO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIEVudmlyb25tZW50LnNldEVudigpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW52T3B0aW9ucyB7XG4gIC8qXG4gICAqIEFQSSBrZXkgZm9yIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHYzIGZvciBgaHR0cHM6YCAob24gc2VydmVyKVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9SRUxFQVNFPzogc3RyaW5nO1xuXG4gIC8qXG4gICAqIEFQSSBrZXkgZm9yIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHYzIGZvciBgaHR0cDpgIChsb2NhbCBkZXZlbG9wbWVudClcbiAgICovXG4gIEFQSV9LRVlfRk9SX0JST1dTRVJfREVCVUc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpc2libGVSZWdpb24gaW1wbGVtZW50cyBJTGF0TG5nQm91bmRzIHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogVGhlIG5vcnRoZWFzdCBvZiB0aGUgYm91bmRzIHRoYXQgY29udGFpbnMgdGhlIGZhckxlZnQsIGZhclJpZ2h0LCBuZWFyTGVmdCBhbmQgbmVhclJpZ2h0LlxuICAgKiBTaW5jZSB0aGUgbWFwIHZpZXcgaXMgYWJsZSB0byByb3RhdGUsIHRoZSBmYXJSaWdodCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG5vcnRoZWFzdC5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm9ydGhlYXN0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc291dGh3ZXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIG5lYXJMZWZ0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgc291dGh3ZXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzb3V0aHdlc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJMZWZ0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBmYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmFyUmlnaHQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtcmlnaHQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBmYXJSaWdodDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIG5lYXJMZWZ0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLWxlZnQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuZWFyTGVmdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIG5lYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIGJvdHRvbS1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJSaWdodDogSUxhdExuZztcblxuICAvKipcbiAgICogY29uc3RhbnQgdmFsdWUgOiBgVmlzaWJsZVJlZ2lvbmBcbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXRod2VzdDogTGF0TG5nQm91bmRzLCBub3J0aGVhc3Q6IExhdExuZ0JvdW5kcywgZmFyTGVmdDogSUxhdExuZywgZmFyUmlnaHQ6IElMYXRMbmcsIG5lYXJMZWZ0OiBJTGF0TG5nLCBuZWFyUmlnaHQ6IElMYXRMbmcpIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKSkuVmlzaWJsZVJlZ2lvbihzb3V0aHdlc3QsIG5vcnRoZWFzdCwgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0LCBuZWFyUmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRvIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBmb3JtIFwibGF0X3N3LGxuZ19zdyxsYXRfbmUsbG5nX25lXCIgZm9yIHRoaXMgYm91bmRzLCB3aGVyZSBcInN3XCIgY29ycmVzcG9uZHMgdG8gdGhlIHNvdXRod2VzdCBjb3JuZXIgb2YgdGhlIGJvdW5kaW5nIGJveCwgd2hpbGUgXCJuZVwiIGNvcnJlc3BvbmRzIHRvIHRoZSBub3J0aGVhc3QgY29ybmVyIG9mIHRoYXQgYm94LlxuICAgKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGxhdC9sbmcgaXMgaW4gdGhpcyBib3VuZHMuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjb250YWlucyhMYXRMbmc6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0cmVldFZpZXdTb3VyY2UgPSB7XG4gIERFRkFVTFQ6ICdERUZBVUxUJyxcbiAgT1VURE9PUjogJ09VVERPT1InXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldFBvdk9wdGlvbiB7XG4gIGJlYXJpbmc6IG51bWJlcjtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3U2V0UG9zaXRpb25PcHRpb24ge1xuICB0YXJnZXQ6IElMYXRMbmc7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcmFkaXVzPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3Q2FtZXJhUGFubyB7XG4gIHRhcmdldDogc3RyaW5nO1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICB0aWx0PzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3Q2FtZXJhUG9zaXRpb24ge1xuICB0YXJnZXQ6IElMYXRMbmc7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICB0aWx0PzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDb250cm9sT3B0aW9ucyB7XG4gIHN0cmVldE5hbWVzPzogYm9vbGVhbjtcbiAgbmF2aWdhdGlvbj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdHZXN0dXJlT3B0aW9ucyB7XG4gIHBhbm5pbmc/OiBib29sZWFuO1xuICB6b29taW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3T3B0aW9ucyB7XG5cbiAgLypcbiAgICogY2FtZXJhOiBbb3B0aW9uc10gSW5pdGlhbCBjYW1lcmEgcG9zaXRpb25cbiAgICovXG4gIGNhbWVyYT86IFN0cmVldFZpZXdDYW1lcmFQYW5vIHwgU3RyZWV0Vmlld0NhbWVyYVBvc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBjb250cm9scyBbb3B0aW9uc11cbiAgICovXG4gIGNvbnRyb2xzPzogU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogU3RyZWV0Vmlld0dlc3R1cmVPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdOYXZpZ2F0aW9uTGluayB7XG5cbiAgLyoqXG4gICAqIHBhbm9yYW1hIElkXG4gICAqL1xuICBwYW5vSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogYmVhcmluZyAoaGVhZGluZylcbiAgICovXG4gIGJlYXJpbmc6IG51bWJlcjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdMb2NhdGlvbiB7XG5cbiAgbGF0TG5nOiBJTGF0TG5nO1xuXG4gIGxpbmtzOiBTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXTtcblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFlvdSBjYW4gbGlzdGVuIHRvIHRoZXNlIGV2ZW50cyB3aGVyZSBhcHByb3ByaWF0ZVxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0V2ZW50ID0ge1xuICBNQVBfUkVBRFk6ICdtYXBfcmVhZHknLFxuICBNQVBfQ0xJQ0s6ICdtYXBfY2xpY2snLFxuICBNQVBfTE9OR19DTElDSzogJ21hcF9sb25nX2NsaWNrJyxcbiAgUE9JX0NMSUNLOiAncG9pX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQ0xJQ0s6ICdteV9sb2NhdGlvbl9jbGljaycsXG4gIE1ZX0xPQ0FUSU9OX0JVVFRPTl9DTElDSzogJ215X2xvY2F0aW9uX2J1dHRvbl9jbGljaycsXG4gIElORE9PUl9CVUlMRElOR19GT0NVU0VEOiAnaW5kb29yX2J1aWxkaW5nX2ZvY3VzZWQnLFxuICBJTkRPT1JfTEVWRUxfQUNUSVZBVEVEOiAnaW5kb29yX2xldmVsX2FjdGl2YXRlZCcsXG4gIENBTUVSQV9NT1ZFX1NUQVJUOiAnY2FtZXJhX21vdmVfc3RhcnQnLFxuICBDQU1FUkFfTU9WRTogJ2NhbWVyYV9tb3ZlJyxcbiAgQ0FNRVJBX01PVkVfRU5EOiAnY2FtZXJhX21vdmVfZW5kJyxcbiAgT1ZFUkxBWV9DTElDSzogJ292ZXJsYXlfY2xpY2snLFxuICBQT0xZR09OX0NMSUNLOiAncG9seWdvbl9jbGljaycsXG4gIFBPTFlMSU5FX0NMSUNLOiAncG9seWxpbmVfY2xpY2snLFxuICBDSVJDTEVfQ0xJQ0s6ICdjaXJjbGVfY2xpY2snLFxuICBHUk9VTkRfT1ZFUkxBWV9DTElDSzogJ2dyb3VuZG92ZXJsYXlfY2xpY2snLFxuICBJTkZPX0NMSUNLOiAnaW5mb19jbGljaycsXG4gIElORk9fTE9OR19DTElDSzogJ2luZm9fbG9uZ19jbGljaycsXG4gIElORk9fQ0xPU0U6ICdpbmZvX2Nsb3NlJyxcbiAgSU5GT19PUEVOOiAnaW5mb19vcGVuJyxcbiAgTUFSS0VSX0NMSUNLOiAnbWFya2VyX2NsaWNrJyxcbiAgTUFSS0VSX0RSQUc6ICdtYXJrZXJfZHJhZycsXG4gIE1BUktFUl9EUkFHX1NUQVJUOiAnbWFya2VyX2RyYWdfc3RhcnQnLFxuICBNQVJLRVJfRFJBR19FTkQ6ICdtYXJrZXJfZHJhZ19lbmQnLFxuICBNQVBfRFJBRzogJ21hcF9kcmFnJyxcbiAgTUFQX0RSQUdfU1RBUlQ6ICdtYXBfZHJhZ19zdGFydCcsXG4gIE1BUF9EUkFHX0VORDogJ21hcF9kcmFnX2VuZCcsXG4gIEtNTF9DTElDSzogJ2ttbF9jbGljaycsXG4gIFBBTk9SQU1BX1JFQURZOiAncGFub3JhbWFfcmVhZHknLFxuICBQQU5PUkFNQV9DQU1FUkFfQ0hBTkdFOiAncGFub3JhbWFfY2FtZXJhX2NoYW5nZScsXG4gIFBBTk9SQU1BX0xPQ0FUSU9OX0NIQU5HRTogJ3Bhbm9yYW1hX2xvY2F0aW9uX2NoYW5nZScsXG4gIFBBTk9SQU1BX0NMSUNLOiAncGFub3JhbWFfY2xpY2snXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNBbmltYXRpb24gPSB7XG4gIEJPVU5DRTogJ0JPVU5DRScsXG4gIERST1A6ICdEUk9QJ1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzTWFwVHlwZUlkID0ge1xuICBOT1JNQUw6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBST0FETUFQOiAnTUFQX1RZUEVfTk9STUFMJyxcbiAgU0FURUxMSVRFOiAnTUFQX1RZUEVfU0FURUxMSVRFJyxcbiAgSFlCUklEOiAnTUFQX1RZUEVfSFlCUklEJyxcbiAgVEVSUkFJTjogJ01BUF9UWVBFX1RFUlJBSU4nLFxuICBOT05FOiAnTUFQX1RZUEVfTk9ORSdcbn07XG5cbi8qKlxuICogQG5hbWUgQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwc1xuICogQGRlc2NyaXB0aW9uXG4gKiBFbWJlZCBuYXRpdmUgR29vZ2xlIE1hcHMgdmlld3MgaW50byB5b3VyIGFwcC5cbiAqIFRoaXMgdmVyc2lvbiBpcyBhaW1lZCBmb3IgaW9uaWMgdjQvYmV0YS5cbiAqIFlvdSBuZWVkIHRvIHVzZSBbY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwc0AyLjQuMV0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcykgd2l0aCB0aGlzIHBsdWdpbi5cbiAqXG4gKlxuICogUHJlcmVxdWlzaXRlczpcbiAqICAtIFtHZW5lcmF0ZSBBUEkga2V5c10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlLWdvb2dsZS1tYXBzL2Jsb2IvbWFzdGVyL2RvY3VtZW50cy9hcGlfa2V5L2dlbmVyYXRlX2FwaV9rZXkubWQpXG4gKlxuICogRGVtbzpcbiAqICAtIFtCcm93c2VyIHBsYXRmb3JtXShodHRwczovL21hcHNwbHVnaW4uZ2l0aHViLmlvL2lvbmljLWdvb2dsZW1hcHMtcXVpY2tkZW1vLXY0LylcbiAqXG4gKiBEb2N1bWVudGF0aW9uOlxuICogIC0gW0FQSSBSZWZlcmVuY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLW5hdGl2ZS1nb29nbGUtbWFwcyNkb2N1bWVudGF0aW9uKVxuICogIC0gW092ZXJ2aWV3IHNsaWRlXShodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9wcmVzZW50YXRpb24vZC9lLzJQQUNYLTF2U2NvaG8xZW5zYlI0cUNJOUFJdVFONTVCWlZ2SzczcEFqSTdzdW1EdlczQ3J4eEhucm1wWFdVangyLThDcEZpYnFVMUVqTEtDUmh1dGhKL3B1Yj9zdGFydD1mYWxzZSZsb29wPWZhbHNlJmRlbGF5bXM9MzAwMClcbiAqXG4gKiBVc2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtcbiAqICBHb29nbGVNYXBzLFxuICogIEdvb2dsZU1hcCxcbiAqICBHb29nbGVNYXBzRXZlbnQsXG4gKiAgR29vZ2xlTWFwT3B0aW9ucyxcbiAqICBDYW1lcmFQb3NpdGlvbixcbiAqICBNYXJrZXJPcHRpb25zLFxuICogIE1hcmtlclxuICogfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1tYXBzJztcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL1wiO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gKiAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gKiAgIG1hcDogR29vZ2xlTWFwO1xuICogICBjb25zdHJ1Y3RvcigpIHsgfVxuICpcbiAqICAgaW9uVmlld0RpZExvYWQoKSB7XG4gKiAgICB0aGlzLmxvYWRNYXAoKTtcbiAqICAgfVxuICpcbiAqICBsb2FkTWFwKCkge1xuICpcbiAqICAgICBsZXQgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyA9IHtcbiAqICAgICAgIGNhbWVyYToge1xuICogICAgICAgICB0YXJnZXQ6IHtcbiAqICAgICAgICAgICBsYXQ6IDQzLjA3NDE5MDQsXG4gKiAgICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgICB9LFxuICogICAgICAgICB6b29tOiAxOCxcbiAqICAgICAgICAgdGlsdDogMzBcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcF9jYW52YXMnLCBtYXBPcHRpb25zKTtcbiAqXG4gKiAgICAgbGV0IG1hcmtlcjogTWFya2VyID0gdGhpcy5tYXAuYWRkTWFya2VyU3luYyh7XG4gKiAgICAgICB0aXRsZTogJ0lvbmljJyxcbiAqICAgICAgIGljb246ICdibHVlJyxcbiAqICAgICAgIGFuaW1hdGlvbjogJ0RST1AnLFxuICogICAgICAgcG9zaXRpb246IHtcbiAqICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICBsbmc6IC04OS4zODA5ODAyXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogICAgIG1hcmtlci5vbihHb29nbGVNYXBzRXZlbnQuTUFSS0VSX0NMSUNLKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIGFsZXJ0KCdjbGlja2VkJyk7XG4gKiAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEdvb2dsZU1hcHNcbiAqIEdvb2dsZU1hcFxuICogU3RyZWV0Vmlld1xuICogQ2lyY2xlXG4gKiBFbmNvZGluZ1xuICogRW52aXJvbm1lbnRcbiAqIEdlb2NvZGVyXG4gKiBHcm91bmRPdmVybGF5XG4gKiBIdG1sSW5mb1dpbmRvd1xuICogR2VvY29kZXJcbiAqIExhdExuZ1xuICogTGF0TG5nQm91bmRzXG4gKiBNYXJrZXJcbiAqIE1hcmtlckNsdXN0ZXJcbiAqIFBvbHlnb25cbiAqIFBvbHlsaW5lXG4gKiBTcGhlcmljYWxcbiAqIEttbE92ZXJsYXlcbiAqIFBvbHlcbiAqIFRpbGVPdmVybGF5XG4gKiBCYXNlQ2xhc3NcbiAqIEJhc2VBcnJheUNsYXNzXG4gKiBAaW50ZXJmYWNlc1xuICogR29vZ2xlTWFwT3B0aW9uc1xuICogQ2FtZXJhUG9zaXRpb25cbiAqIENpcmNsZU9wdGlvbnNcbiAqIEdlb2NvZGVyUmVxdWVzdFxuICogR2VvY29kZXJSZXN1bHRcbiAqIEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gKiBJTGF0TG5nXG4gKiBNYXJrZXJJY29uXG4gKiBNYXJrZXJPcHRpb25zXG4gKiBNYXJrZXJDbHVzdGVySWNvblxuICogTWFya2VyQ2x1c3Rlck9wdGlvbnNcbiAqIE15TG9jYXRpb25cbiAqIE15TG9jYXRpb25PcHRpb25zXG4gKiBQb2x5Z29uT3B0aW9uc1xuICogUG9seWxpbmVPcHRpb25zXG4gKiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAqIEttbE92ZXJsYXlPcHRpb25zXG4gKiBWaXNpYmxlUmVnaW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIGRvY3VtZW50OiAnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9uYXRpdmUvZ29vZ2xlLW1hcHMvJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIC0tdmFyaWFibGUgQVBJX0tFWV9GT1JfQU5EUk9JRD1cIllPVVJfQU5EUk9JRF9BUElfS0VZX0lTX0hFUkVcIiAtLXZhcmlhYmxlIEFQSV9LRVlfRk9SX0lPUz1cIllPVVJfSU9TX0FQSV9LRVlfSVNfSEVSRVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUElfS0VZX0ZPUl9BTkRST0lEJywgJ0FQSV9LRVlfRk9SX0lPUyddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR29vZ2xlTWFwIGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge0dvb2dsZU1hcE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBHb29nbGVNYXBPcHRpb25zLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucyk6IEdvb2dsZU1hcCB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gZWxlbWVudCBhcyBHb29nbGVNYXBPcHRpb25zO1xuICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdvb2dsZU1hcDogR29vZ2xlTWFwID0gbmV3IEdvb2dsZU1hcChlbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgc3RyaW5nLCBvcHRpb25zKTtcbiAgICAgIGdvb2dsZU1hcC5zZXQoJ19vdmVybGF5cycsIHt9KTtcbiAgICAgIHJldHVybiBnb29nbGVNYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgU3RyZWV0VmlldyBpbnN0YW5jZVxuICAgKiBAcGFyYW0gZWxlbWVudCB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnQgSUQgb3IgcmVmZXJlbmNlIHRvIGF0dGFjaCB0aGUgbWFwIHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlZXRWaWV3T3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHJldHVybiB7U3RyZWV0Vmlld1Bhbm9yYW1hfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVBhbm9yYW1hKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpOiBTdHJlZXRWaWV3UGFub3JhbWEge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBtdXN0IGJlIHVuZGVyIDxib2R5PicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VsZW1lbnQudGFnTmFtZX1bX19wbHVnaW5NYXBJZD0nJHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpfSddIGhhcyBhbHJlYWR5IG1hcC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBTdHJlZXRWaWV3UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5RXJyb3JNZXNzYWdlID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZXJyb3JEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yRGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gIGVycm9yRGl2LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIGVycm9yRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgZXJyb3JEaXYuc3R5bGUud2lkdGggPSAnODAlJztcbiAgZXJyb3JEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwJSc7XG4gIGVycm9yRGl2LnN0eWxlLnRvcCA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUubGVmdCA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLm1hcmdpbiA9ICdhdXRvJztcblxuICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYzcnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lciA9IChfb2JqZWN0SW5zdGFuY2U6IGFueSwgYXJnczogYW55W10pOiBhbnlbXSA9PiB7XG4gIGlmIChhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VDbGFzcykge1xuICAgIGlmIChhcmdzW2FyZ3MubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ01hcCcgfHwgYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdTdHJlZXRWaWV3UGFub3JhbWEnKSB7XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAoX29iamVjdEluc3RhbmNlLl9fcGdtSWQuaW5kZXhPZignbWFya2VyY2x1c3Rlcl8nKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IF9vdmVybGF5czogYW55ID0gX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJykgfHwge307XG4gICAgICBsZXQgb3ZlcmxheTogTWFya2VyID0gX292ZXJsYXlzW2FyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpXTtcbiAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICBjb25zdCBtYXJrZXJKUzogYW55ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBtYXJrZXJJZDogc3RyaW5nID0gbWFya2VySlMuZ2V0SWQoKTtcbiAgICAgICAgY29uc3QgbWFya2VyQ2x1c3RlcjogTWFya2VyQ2x1c3RlciA9IF9vYmplY3RJbnN0YW5jZSBhcyBNYXJrZXJDbHVzdGVyO1xuICAgICAgICBvdmVybGF5ID0gbmV3IE1hcmtlcihtYXJrZXJDbHVzdGVyLmdldE1hcCgpLCBtYXJrZXJKUyk7XG4gICAgICAgIF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW21hcmtlcklkXSA9IG92ZXJsYXk7XG4gICAgICAgIG1hcmtlckpTLm9uZShtYXJrZXJKUy5nZXRJZCgpICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheXM6IGFueSA9IF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpO1xuICAgICAgICAgIGlmIChvdmVybGF5cykge1xuICAgICAgICAgICAgb3ZlcmxheXNbbWFya2VySWRdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBvdmVybGF5c1ttYXJrZXJJZF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IG92ZXJsYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW2FyZ3NbYXJncy5sZW5ndGggLSAxXS5nZXRJZCgpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBzcGx1Z2luL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMtZG9jL2Jsb2IvbWFzdGVyL3YyLjAuMC9jbGFzcy9CYXNlQ2xhc3MvUkVBRE1FLm1kXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuQmFzZUNsYXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2xhc3Mge1xuICBwcm90ZWN0ZWQgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob2JqSW5zdGFuY2U/OiBhbnkpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoIW9iakluc3RhbmNlKSB7XG4gICAgICAgIG9iakluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VDbGFzcykoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gb2JqSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgZXhlY3V0aW5nIGFueSBtZXRob2RzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGhhbmRsZXIgZm9yIHRoZSBldmVudCB0aGF0IGlzIHRocm93biBieSB0aGUgdGFyZ2V0LCB3aGVyZSB0aGUgbWluaW11bSBpbnRlcnZhbCBiZXR3ZWVuIGV2ZW50cyAoaW4gbWlsbGlzZWNvbmRzKSBpcyBzcGVjaWZpZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGhyb3R0bGVJbnRlcnZhbCB7bnVtYmVyfSB0aHJvdHRsZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgdGhyb3R0bGVJbnRlcnZhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gIC8vICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRFdmVudExpc3RlbmVyT25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25lKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJlc29sdmUobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd29ya3Mgb25jZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTGlzdGVuZXJPbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tHb29nbGVNYXBzXSBcImFkZExpc3RlbmVyT25jZVwiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJhZGRFdmVudExpc3RlbmVyT25jZVwiLicpO1xuICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJPbmNlKGV2ZW50TmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBrZXkgbmFtZSBmb3IgdGhlIHZhbHVlLiBgKGtleSlfY2hhbmdlZGAgd2lsbCBiZSBmaXJlZCB3aGVuIHlvdSBzZXQgdmFsdWUgdGhyb3VnaCB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHZhbHVlIHthbnl9XG4gICAqIEBwYXJhbSBub05vdGlmeSB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBmaXJpbmcgdGhlIGAoa2V5KV9jaGFuZ2VkYCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleSB0byBhbm90aGVyIG9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXQge2FueX0gVGhlIHRhcmdldCBvYmplY3QgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRhcmdldEtleT8ge3N0cmluZ30gW29wdGlvbnNdICBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLiBJZiB5b3Ugb21pdCB0aGlzLCB0aGUgYGtleWAgYXJndW1lbnQgaXMgdXNlZC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBgKGtleSlfY2hhbmdlZGAgZXZlbnQgd2hlbiB5b3UgYmluZCBmaXJzdCB0aW1lLCBiZWNhdXNlIHRoZSBpbnRlcm5hbCBzdGF0dXMgaXMgY2hhbmdlZCBmcm9tIGB1bmRlZmluZWRgIHRvIHNvbWV0aGluZy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGJpbmRUbyhrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnksIHRhcmdldEtleT86IHN0cmluZywgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIC8vIG9uVGhyb3R0bGVkKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vblRocm90dGxlZChldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAvLyAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJPbmNlYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb25lKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbmUoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmVzb2x2ZShuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoaXMgb2JqZWN0IGhhcyBldmVudCBsaXN0ZW5lciBmb3IgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhhc0V2ZW50TGlzdGVuZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc3RvcmVkIHZhbHVlc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7YW55fSBbb3B0aW9uc10gVGhlIGRhdGEgeW91IHdhbnQgdG8gcGFzcyB0byBldmVudCBsaXN0ZXJuZXJzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55W10pOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIG9mZigpIGFuZCBlbXB0eSgpXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmplY3RJbnN0YW5jZS50eXBlID09PSAnTWFwJykge1xuICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXAgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0SWQoKV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcihzKVxuICAgKiBUaGUgYHJlbW92ZUV2ZW50TGlzdGVuZXIoKWAgaGFzIHRocmVlIHVzYWdlczpcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiLCBsaXN0ZW5lckZ1bmN0aW9uKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBvbmUgcGFydGljdWxhciBldmVudCBsaXN0ZW5lclxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBhZGRlZCBmb3IgdGhlIGV2ZW50IG5hbWUuXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmBcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VBcnJheUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2VBcnJheUNsYXNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQXJyYXlDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFycmF5Q2xhc3M8VD4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhPzogVFtdIHwgYW55KSB7XG4gICAgaWYgKGluaXRpYWxEYXRhIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykge1xuICAgICAgc3VwZXIoaW5pdGlhbERhdGEpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsRGF0YSkpIHtcbiAgICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykoaW5pdGlhbERhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShbXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5KG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZm9yRWFjaChmbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBmb3JFYWNoQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZvckVhY2goZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIHRoZW4gUmV0dXJucyBhIG5ldyB2YWx1ZS5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBtYXAoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBtYXBBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5tYXAoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYG1hcEFzeW5jYCwgYnV0IGtlZXAgdGhlIGV4ZWN1dGlvbiBvcmRlclxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwU2VyaWVzKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAobmV3RWxlbWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm1hcFNlcmllcyhmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlcigpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1RbXX0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZmlsdGVyKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJBc3luYygpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8VFtdPn0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgZmlsdGVyQXN5bmMoZm46IChlbGVtZW50OiBULCBjYWxsYmFjazogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZCk6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5maWx0ZXIoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgQXJyYXkuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleE9mKCkgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5LCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5kZXhPZihlbGVtZW50OiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJldmVyc2UoKSBtZXRob2QgcmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXZlcnNlKCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzb3J0KCkgbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbiBwbGFjZSBhbmQgcmV0dXJucyB0aGUgYXJyYXkuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzb3J0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgaW5zZXJ0X2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpbnNlcnRBdChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwb3Aobm9Ob3RpZnk/OiBib29sZWFuKTogVCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb25lIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gZWxlbWVudCB7b2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwdXNoKGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVBdChpbmRleDogbnVtYmVyLCBub05vdGlmeT86IGJvb2xlYW4pOiBUIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgc2V0X2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQ2lyY2xlL1JFQURNRS5tZFxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2VudGVyKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2VudGVyIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHJhZGl1cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSByYWRpdXMuXG4gICAqIEBwYXJhbSByYWRpdXMge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSB3aWR0aC5cbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0dGVyIGNvbG9yKS5cbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIGNsaWNrYWJsZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2lyY2xlIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgekluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF0TG5nQm91bmRzIChyZWN0YW5nbGUpIHRoYXQgY29udGFpbnMgdGhlIGNpcmNsZS5cbiAgICogQHJldHVybiB7TGF0TG5nQm91bmRzfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qm91bmRzKCk6IExhdExuZ0JvdW5kcyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjaXJjbGUgdmlzaWJpbGl0eVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIHZpc2libGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5lbnZpcm9ubWVudCcsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICovXG4gIHN0YXRpYyBzZXRFbnYoZW52T3B0aW9uczogRW52T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRFbnYoZW52T3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcGVuIHNvdXJjZSBzb2Z0d2FyZSBsaWNlbnNlIGluZm9ybWF0aW9uIGZvciBHb29nbGUgTWFwcyBTREsgZm9yIGlPUy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc3RhdGljIGdldExpY2Vuc2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCh0ZXh0OiBzdHJpbmcpID0+IHJlc29sdmUodGV4dCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29sb3JcbiAgICovXG4gIHN0YXRpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZXRMaWNlbnNlSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpJyk7XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKScpO1xuICAgIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5HZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpJyk7XG4gICAgcmV0dXJuIEdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgcG9zaXRpb24gdG8gYWRkcmVzcyBhbmQgdmljZSB2ZXJzYVxuICAgKiBAcGFyYW0ge0dlb2NvZGVyUmVxdWVzdH0gcmVxdWVzdCBSZXF1ZXN0IG9iamVjdCB3aXRoIGVpdGhlciBhbiBhZGRyZXNzIG9yIGEgcG9zaXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+Pn1cbiAgICovXG4gIHN0YXRpYyBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0LmFkZHJlc3MgaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QuYWRkcmVzcykgfHxcbiAgICAgIHJlcXVlc3QucG9zaXRpb24gaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QucG9zaXRpb24pKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogW1xuICAgICAgLy8gICAgXCJLeW90bywgSmFwYW5cIixcbiAgICAgIC8vICAgIFwiVG9reW8sIEphcGFuXCJcbiAgICAgIC8vICAgXVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAobXZjQXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChtdmNBcnJheSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQmFzZUFycmF5Q2xhc3MobXZjQXJyYXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogXCJLeW90bywgSmFwYW5cIlxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChyZXN1bHRzOiBHZW9jb2RlclJlc3VsdFtdKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkxvY2F0aW9uU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZGV2aWNlIGxvY2F0aW9uIHdpdGhvdXQgbWFwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TXlMb2NhdGlvbj59XG4gICAqL1xuICBzdGF0aWMgZ2V0TXlMb2NhdGlvbihvcHRpb25zPzogTXlMb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE15TG9jYXRpb24+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIGhhcyBnZW9sb2NhdGlvbiBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBzdGF0aWMgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVuY29kaW5nIHtcblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhdGggc3RyaW5nIGludG8gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzLlxuICAgKiBAcGFyYW0gZW5jb2RlZCB7c3RyaW5nfSBhbiBlbmNvZGVkIHBhdGggc3RyaW5nXG4gICAqIEBwYXJhbSBwcmVjaXNpb24/IHtudW1iZXJ9IGRlZmF1bHQ6IDVcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZVBhdGgoZW5jb2RlZDogc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpOiBJTGF0TG5nW10ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZGVjb2RlUGF0aChlbmNvZGVkLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBzZXF1ZW5jZSBvZiBMYXRMbmdzIGludG8gYW4gZW5jb2RlZCBwYXRoIHN0cmluZy5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fSBhIHNlcXVlbmNlIG9mIExhdExuZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZVBhdGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBzdHJpbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZW5jb2RlUGF0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmRlY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogSUxhdExuZ1tdIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZGVjb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmRlY29kZVBhdGgoZW5jb2RlZCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmVuY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlbmNvZGVQYXRoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZW5jb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmVuY29kZVBhdGgocGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5wb2x5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIFBvbHkge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpcyBpbiB0aGUgcG9seWdvbiBwYXRoXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7SUxhdExuZ31cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXX1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBjb250YWluc0xvY2F0aW9uKGxvY2F0aW9uOiBJTGF0TG5nLCBwYXRoOiBJTGF0TG5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbiwgcGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgb24gdGhlIHBvbHlsaW5lIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzTG9jYXRpb25PbkVkZ2UobG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkucG9seS5pc0xvY2F0aW9uT25FZGdlKGxvY2F0aW9uLCBwYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWwge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSwgaW4gbWV0ZXJzLCBiZXR3ZWVuIHR3byBMYXRMbmdzLlxuICAgKiBAcGFyYW0gbG9jYXRpb25BIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gbG9jYXRpb25CIHtJTGF0TG5nfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHJlc3VsdGluZyBmcm9tIG1vdmluZyBhIGRpc3RhbmNlIGZyb20gYW4gb3JpZ2luIGluIHRoZSBzcGVjaWZpZWQgaGVhZGluZyAoZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGgpXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gZGlzdGFuY2Uge251bWJlcn1cbiAgICogQHBhcmFtIGhlYWRpbmcge251bWJlcn1cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBvZiBvcmlnaW4gd2hlbiBwcm92aWRlZCB3aXRoIGEgTGF0TG5nIGRlc3RpbmF0aW9uLCBtZXRlcnMgdHJhdmVsbGVkIGFuZCBvcmlnaW5hbCBoZWFkaW5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGguIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsIHdoZW4gbm8gc29sdXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9IFRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdHJhdmVsbGVkLCBpbiBtZXRlcnMuXG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9IFRoZSBoZWFkaW5nIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGguXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0T3JpZ2luKHRvOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIHBhdGguXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVMZW5ndGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgY29tcHV0ZWQgYXJlYSB1c2VzIHRoZSBzYW1lIHVuaXRzIGFzIHRoZSByYWRpdXMuXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgc2lnbmVkIGFyZWEgbWF5IGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGF0aC5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVTaWduZWRBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWFkaW5nIGZyb20gb25lIExhdExuZyB0byBhbm90aGVyIExhdExuZy4gSGVhZGluZ3MgYXJlIGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIE5vcnRoIHdpdGhpbiB0aGUgcmFuZ2UgKC0xODAsMTgwKS5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVIZWFkaW5nKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHdoaWNoIGxpZXMgdGhlIGdpdmVuIGZyYWN0aW9uIG9mIHRoZSB3YXkgYmV0d2VlbiB0aGUgb3JpZ2luIExhdExuZyBhbmQgdGhlIGRlc3RpbmF0aW9uIExhdExuZy5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9ICAgICBUaGUgTGF0TG5nIGZyb20gd2hpY2ggdG8gc3RhcnQuXG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ30gICAgICAgVGhlIExhdExuZyB0b3dhcmQgd2hpY2ggdG8gdHJhdmVsLlxuICAgKiBAcGFyYW0gZnJhY3Rpb24ge251bWJlcn0gIEEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHRvIHRyYXZlbCBmcm9tIDAuMCB0byAxLjAgLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmludGVycG9sYXRlKGZyb20sIHRvLCBmcmFjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldChmcm9tOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldCgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldE9yaWdpbih0bzogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbih0bywgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlTGVuZ3RoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVBcmVhKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlSGVhZGluZyhmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZygpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuaW50ZXJwb2xhdGUoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbnRlcnBvbGF0ZShmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZywgZnJhY3Rpb246IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0cmVldFZpZXdQYW5vcmFtYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVldFZpZXdQYW5vcmFtYSBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpIHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIHBhbm9yYW1hXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoID49IDEwMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50LnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuU3RyZWV0Vmlldy5nZXRQYW5vcmFtYShnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZWxlbWVudCkpO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KysgPCAyMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPCAxMDAgfHwgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPCAxMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9pbnQgb2YgdmlldyBmb3IgdGhlIFN0cmVldCBWaWV3IHBhbm9yYW1hLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldFBvdihwb3Y6IFN0cmVldFZpZXdDYW1lcmFQYW5vKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBTdHJlZXRWaWV3UGFub3JhbWEgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3NpdGlvbihjYW1lcmFQb3NpdGlvbjogU3RyaW5nIHwgU3RyZWV0Vmlld1NldFBvc2l0aW9uT3B0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byB1c2UgcGFuIGFyb3VuZCBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgcGFubmluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5uaW5nR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gem9vbSBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgem9vbWluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRab29tR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gc2VlIHN0cmVldCBuYW1lcyBvbiB0aGUgcGFub3JhbWEuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3RyZWV0TmFtZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBzdHJlZXQgbmFtZXMgY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3RyZWV0TmFtZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gbW92ZSBiZXR3ZWVuIHBhbm9yYW1hcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXROYXZpZ2F0aW9uRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgbmF2aWdhdGlvbiBjb250cm9sIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXROYXZpZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmF2aWdhdGlvbiBsaW5rcyAoU3RyZWV0Vmlld0xvY2F0aW9uLmxpbmtzKVxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExpbmtzKCk6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TG9jYXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMb2NhdGlvbigpOiBTdHJlZXRWaWV3TG9jYXRpb24geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBhbm9yYW1hIGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBhbm9JZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIChTdHJlZXRWaWV3TG9jYXRpb24ubGF0TG5nKVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQb3NpdGlvbigpOiBJTGF0TG5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBwYW5vcmFtYSBjb21wbGV0ZWx5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogZWxGaW5kVGltZW91dCBpcyBoaWRkZW4gcGFyYW1ldGVyLCBtYWlubHkgZm9yIHRlc3QuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcCBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucywgZWxGaW5kVGltZW91dCA9IDIwMDApIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIG1hcFxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbXVzdCBiZSB1bmRlciA8Ym9keT4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudC50YWdOYW1lICsgJyBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLk1hcC5nZXRNYXAoZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGxldCBudW1BdHRlbXB0cyA9IDA7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb25CZXR3ZWVuQXR0ZW1wdHNNcyA9IDEwMDtcbiAgICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IE1hdGguZmxvb3IoZWxGaW5kVGltZW91dCAvIGR1cmF0aW9uQmV0d2VlbkF0dGVtcHRzTXMpO1xuXG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgZWwgd2hpY2ggYXJlIGFscmVhZHkgbWFwIGxheWVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbdGFyZ2V0c1swXSwgb3B0aW9uc10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bUF0dGVtcHRzKysgPCBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmICh0YXJnZXRzWzBdLm9mZnNldFdpZHRoIDwgMTAwIHx8IHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIHRoZSBlbGVtZW50IFsjJyArIGVsZW1lbnQgKyAnXScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBkdXJhdGlvbkJldHdlZW5BdHRlbXB0c01zKTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBudWxsICYmIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKG51bGwsIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIGRpdlxuICAgKiBAcGFyYW0gZG9tTm9kZSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IFtvcHRpb25zXSBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSBtYXAgaW4gYW4gaHRtbCBlbGVtZW50LCB5b3UgbmVlZCB0byBzcGVjaWZ5IGFuIGVsZW1lbnQgb3IgaWQuIElmIG9taXQgdGhpcyBhcmd1bWVudCwgdGhlIG1hcCBpcyBkZXRhY2hlZCBmcm9tIHdlYnZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIHNldERpdihkb21Ob2RlPzogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvbU5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAoZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGksIHRhcmdldHM6IGFueVtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZG9tTm9kZSkpO1xuICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXRzWzBdIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZWplY3QoJ0NhbiBub3QgZmluZCBbIycgKyBkb21Ob2RlICsgJ10gZWxlbWVudCcpO1xuICAgICAgfSkpXG4gICAgICAudGhlbigoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0RGl2KGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb21Ob2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgICAgICAhZG9tTm9kZS5vZmZzZXRQYXJlbnQgJiZcbiAgICAgICAgICBkb21Ob2RlLm9mZnNldFdpZHRoID49IDEwMCAmJiBkb21Ob2RlLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0RGl2KGRvbU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRvbU5vZGUudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBIVE1MIGVsZW1lbnRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREaXYoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBtYXAgdHlwZSBpZFxuICAgKiBAcGFyYW0gbWFwVHlwZUlkIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNYXBUeXBlSWQobWFwVHlwZUlkOiBNYXBUeXBlIHwgc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGggYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBhbmltYXRlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhKGNhbWVyYVBvc2l0aW9uOiBDYW1lcmFQb3NpdGlvbjxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBpbiB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbUluKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgb3V0IHRoZSBjYW1lcmEgd2l0aG91dCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG1vdmVDYW1lcmFab29tT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIGNhbWVyYS5cbiAgICogQHJldHVybiB7Q2FtZXJhUG9zaXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFQb3NpdGlvbigpOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgdGFyZ2V0IHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFUYXJnZXQoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgem9vbSBsZXZlbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFab29tKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgYmVhcmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFCZWFyaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgdGlsdCAodmlldyBhbmdsZSlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGlsdCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNlbnRlciBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIHZpZXdcbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZyB8IElMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVRhcmdldChsYXRMbmc6IElMYXRMbmcgfCBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgem9vbSBsZXZlbCBvZiB0aGUgY2FtZXJhXG4gICAqIEBwYXJhbSB6b29tTGV2ZWwge251bWJlcn0gWm9vbSBsZXZlbFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhWm9vbSh6b29tTGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY2FtZXJhIHZpZXcgYW5nbGVcbiAgICogQHBhcmFtIHRpbHRBbmdsZSB7bnVtYmVyfSBUaWx0IGFuZ2xlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFUaWx0KHRpbHRBbmdsZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHBhcmFtIGJlYXJpbmcge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYUJlYXJpbmcoYmVhcmluZzogYW55KTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAgYnkgdGhlIGdpdmVuIGRpc3RhbmNlIGluIHBpeGVsc1xuICAgKiBAcGFyYW0geCB7bnVtYmVyfVxuICAgKiBAcGFyYW0geSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlzaWJsZSByZWdpb24gKHNvdXRoV2VzdCBhbmQgbm9ydGhFYXN0KVxuICAgKiBAcmV0dXJuIHtWaXNpYmxlUmVnaW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZVJlZ2lvbigpOiBWaXNpYmxlUmVnaW9uIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGRldmljZSBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE15TG9jYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldE15TG9jYXRpb24ob3B0aW9ucz86IE15TG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxNeUxvY2F0aW9uPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TXlMb2NhdGlvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5Mb2NhdGlvblNlcnZpY2UuZ2V0TXlMb2NhdGlvbihvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBpZ25vcmUgYWxsIGNsaWNrcyBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBpc0NsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShpc0NsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBtYXAgY29tcGxldGVseVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5nZXQoJ19vdmVybGF5cycpKS5mb3JFYWNoKChvdmVybGF5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG92ZXJsYXlzLCBzdWNoIGFzIG1hcmtlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdldCgnX292ZXJsYXlzJykpLmZvckVhY2goKG92ZXJsYXlJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmNsZWFyKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgdW5pdCBmcm9tIExhdExuZyB0byB0aGUgcGl4ZWxzIGZyb20gdGhlIGxlZnQvdG9wIG9mIHRoZSBtYXAgZGl2XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBmcm9tTGF0TG5nVG9Qb2ludChsYXRMbmc6IElMYXRMbmcpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHVuaXQgZnJvbSB0aGUgcGl4ZWxzIGZyb20gdGhlIGxlZnQvdG9wIHRvIHRoZSBMYXRMbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYXRMbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGZyb21Qb2ludFRvTGF0TG5nKHBvaW50OiBudW1iZXJbXSk6IFByb21pc2U8TGF0TG5nPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBNeUxvY2F0aW9uIGNvbnRyb2wgKGJsdWUgZG90KVxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE15TG9jYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBNeUxvY2F0aW9uIGJ1dHRvblxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE15TG9jYXRpb25CdXR0b25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudGx5IGZvY3VzZWQgYnVpbGRpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEZvY3VzZWRCdWlsZGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBpbmRvb3IgbWFwXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW5kb29yRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgdHJhZmZpYyBsYXllclxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFRyYWZmaWNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBjb21wYXNzIGJ1dHRvblxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENvbXBhc3NFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcmVmZXJlbmNlIGZvciB3aGV0aGVyIGFsbCBnZXN0dXJlcyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEFsbEdlc3R1cmVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpc2liaWxpdHkgb2YgdGhlIG1hcFxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgbWFwIHBhZGRpbmcgKHNhbWUgYXMgQ1NTIHBhZGRpbmcgcnVsZSlcbiAgICogQHBhcmFtIHRvcCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcmlnaHQge251bWJlcn1cbiAgICogQHBhcmFtIGxlZnQge251bWJlcn1cbiAgICogQHBhcmFtIGJvdHRvbSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFkZGluZyh0b3A6IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlcik6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEdvb2dsZU1hcE9wdGlvbnMpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWFya2VyPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlciB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE1hcmtlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyKG9wdGlvbnMsIChtYXJrZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAobWFya2VyKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXIuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5OiBNYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIG1hcmtlcik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIG1hcmtlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAUmV0dXJucyB7TWFya2VyfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJTeW5jKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBNYXJrZXIge1xuICAgIGNvbnN0IG1hcmtlcjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheTogTWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCBtYXJrZXIpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBtYXJrZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgY2x1c3RlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyQ2x1c3Rlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxNYXJrZXJDbHVzdGVyPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zOiBNYXJrZXJDbHVzdGVyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyQ2x1c3RlciB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE1hcmtlckNsdXN0ZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlckNsdXN0ZXIob3B0aW9ucywgKG1hcmtlckNsdXN0ZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAobWFya2VyQ2x1c3Rlcikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZCA9IG1hcmtlckNsdXN0ZXIuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IE1hcmtlckNsdXN0ZXIodGhpcywgbWFya2VyQ2x1c3Rlcik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIG1hcmtlckNsdXN0ZXIub25lKCdyZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWFya2VyQ2x1c3Rlci5zZXQoJ19vdmVybGF5cycsIG5ldyBCYXNlQXJyYXlDbGFzcygpKTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGNsdXN0ZXIgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlckNsdXN0ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBSZXR1cm5zIHtNYXJrZXJDbHVzdGVyfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJDbHVzdGVyU3luYyhvcHRpb25zOiBNYXJrZXJDbHVzdGVyT3B0aW9ucyk6IE1hcmtlckNsdXN0ZXIge1xuICAgIGNvbnN0IG1hcmtlckNsdXN0ZXI6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlckNsdXN0ZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXJDbHVzdGVyLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheTogTWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyKHRoaXMsIG1hcmtlckNsdXN0ZXIpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBtYXJrZXJDbHVzdGVyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtYXJrZXJDbHVzdGVyLnNldCgnX292ZXJsYXlzJywgbmV3IEJhc2VBcnJheUNsYXNzKCkpO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaXJjbGVcbiAgICogQHBhcmFtIG9wdGlvbnMge0NpcmNsZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxDaXJjbGU+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRDaXJjbGUob3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8Q2lyY2xlIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Q2lyY2xlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRDaXJjbGUob3B0aW9ucywgKGNpcmNsZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChjaXJjbGUpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGNpcmNsZS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgQ2lyY2xlKHRoaXMsIGNpcmNsZSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGNpcmNsZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNpcmNsZSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q2lyY2xlT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtDaXJjbGV9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZENpcmNsZVN5bmMob3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IENpcmNsZSB7XG4gICAgY29uc3QgY2lyY2xlOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRDaXJjbGUob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBjaXJjbGUuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IENpcmNsZSh0aGlzLCBjaXJjbGUpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBjaXJjbGUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWdvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWdvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxQb2x5Z29uPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWdvbihvcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbiB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFBvbHlnb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlnb24ob3B0aW9ucywgKHBvbHlnb246IGFueSkgPT4ge1xuICAgICAgICBpZiAocG9seWdvbikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWdvbi5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWdvbih0aGlzLCBwb2x5Z29uKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgcG9seWdvbi5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlnb24gaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlnb25PcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1BvbHlnb259XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlnb25TeW5jKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUG9seWdvbiB7XG4gICAgY29uc3QgcG9seWdvbjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWdvbihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlnb24uZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlnb24odGhpcywgcG9seWdvbik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHBvbHlnb24ub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5bGluZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWxpbmVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UG9seWxpbmU+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5bGluZShvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8UG9seWxpbmU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlsaW5lKG9wdGlvbnMsIChwb2x5bGluZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChwb2x5bGluZSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWxpbmUuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlsaW5lKHRoaXMsIHBvbHlsaW5lKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgcG9seWxpbmUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5bGluZSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWxpbmVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1BvbHlsaW5lfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5bGluZVN5bmMob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUG9seWxpbmUge1xuICAgIGNvbnN0IHBvbHlsaW5lOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5bGluZShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlsaW5lLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5bGluZSh0aGlzLCBwb2x5bGluZSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHBvbHlsaW5lLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtUaWxlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxUaWxlT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFRpbGVPdmVybGF5KG9wdGlvbnM6IFRpbGVPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8VGlsZU92ZXJsYXkgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxUaWxlT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkVGlsZU92ZXJsYXkob3B0aW9ucywgKHRpbGVPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHRpbGVPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSB0aWxlT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGlsZU92ZXJsYXkodGhpcywgdGlsZU92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICB0aWxlT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRpbGUgb3ZlcmxheSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7VGlsZU92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1RpbGVPdmVybGF5fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRUaWxlT3ZlcmxheVN5bmMob3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogVGlsZU92ZXJsYXkge1xuICAgIGNvbnN0IHRpbGVPdmVybGF5OiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaWxlT3ZlcmxheShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHRpbGVPdmVybGF5LmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaWxlT3ZlcmxheSh0aGlzLCB0aWxlT3ZlcmxheSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHRpbGVPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge0dyb3VuZE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R3JvdW5kT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEdyb3VuZE92ZXJsYXkob3B0aW9uczogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEdyb3VuZE92ZXJsYXkgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxHcm91bmRPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRHcm91bmRPdmVybGF5KG9wdGlvbnMsIChncm91bmRPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGdyb3VuZE92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGdyb3VuZE92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IEdyb3VuZE92ZXJsYXkodGhpcywgZ3JvdW5kT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGdyb3VuZE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91bmQgb3ZlcmxheSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7R3JvdW5kT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7R3JvdW5kT3ZlcmxheX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkR3JvdW5kT3ZlcmxheVN5bmMob3B0aW9uczogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBHcm91bmRPdmVybGF5IHtcbiAgICBjb25zdCBncm91bmRPdmVybGF5OiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRHcm91bmRPdmVybGF5KG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gZ3JvdW5kT3ZlcmxheS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgR3JvdW5kT3ZlcmxheSh0aGlzLCBncm91bmRPdmVybGF5KTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgZ3JvdW5kT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGttbCBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtLbWxPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPEttbE92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRLbWxPdmVybGF5KG9wdGlvbnM6IEttbE92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxLbWxPdmVybGF5PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8S21sT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkS21sT3ZlcmxheShvcHRpb25zLCAoa21sT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmIChrbWxPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBrbWxPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBLbWxPdmVybGF5KHRoaXMsIGttbE92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBrbWxPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYXNlNjQgZW5jb2RlZCBzY3JlZW4gY2FwdHVyZSBvZiB0aGUgbWFwLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VG9EYXRhVXJsT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHRvRGF0YVVSTChvcHRpb25zPzogVG9EYXRhVXJsT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgR3JvdW5kT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJvdW5kcyBvZiB0aGUgR3JvdW5kT3ZlcmxheVxuICAgKiBAcGFyYW0gYm91bmRzIHsgSUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Qm91bmRzKGJvdW5kczogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYmVhcmluZyBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGJlYXJpbmcge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEJlYXJpbmcoYmVhcmluZzogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBiZWFyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCZWFyaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGltYWdlIG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gaW1hZ2VVcmwge3N0cmluZ30gVVJMIG9mIGltYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbWFnZShpbWFnZVVybDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBvcGFjaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheSBmcm9tIDAuMCB0byAxLjBcbiAgICogQHBhcmFtIG9wYWNpdHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBvcGFjaXR5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ3JvdW5kIG92ZXJsYXkgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdyb3VuZCBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGdyb3VuZCBvdmVybGF5IHpJbmRleCBvcmRlclxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBncm91bmQgb3ZlcmxheSB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5IdG1sSW5mb1dpbmRvdycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxJbmZvV2luZG93IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuSHRtbEluZm9XaW5kb3cpKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJhY2tncm91bmRDb2xvclxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB5b3VyIEhUTUwgY29udGVudHMuXG4gICAqIEBwYXJhbSBjb250ZW50IHthbnl9IFN0cmluZyBjb250YWluaW5nIHRleHQgb3IgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSBjc3NPcHRpb25zPyB7YW55fSBDU1Mgc3R5bGVzIGZvciB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgSFRNTEluZm9XaW5kb3dcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRDb250ZW50KGNvbnRlbnQ6IHN0cmluZyB8IEVsZW1lbnQsIGNzc09wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBodG1sSW5mb1dpbmRvd1xuICAgKiBAcGFyYW0gbWFya2VyIHtNYXJrZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgb3BlbihtYXJrZXI6IGFueSk6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIGh0bWxJbmZvV2luZG93XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogdm9pZCB7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWFya2VyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9zaXRpb24obGF0TG5nOiBJTGF0TG5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciBwb3NpdGlvbi5cbiAgICogQHJldHVybiB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBvc2l0aW9uKCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBub3JtYWwgaW5mb1dpbmRvdyBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvd0luZm9XaW5kb3coKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgbm9ybWFsIGluZm9XaW5kb3cgb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhpZGVJbmZvV2luZG93KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGFuaW1hdGlvbiBlaXRoZXIgYERST1BgIG9yIGBCT1VOQ0VgXG4gICAqIEBwYXJhbSBhbmltYXRpb24ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEFuaW1hdGlvbihhbmltYXRpb246IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSAqKmRvIG5vdCB3YW50KiogdG8gbW92ZSB0aGUgbWFwIHdoZW4geW91IGNsaWNrIG9uIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSBkaXNhYmxlQXV0b1BhbiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERpc2FibGVBdXRvUGFuKGRpc2FibGVBdXRvUGFuOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGhpZGUgdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIHZpc2libGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWFya2VyIGlzIHZpc2libGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aXRsZSBvZiB0aGUgbm9ybWFsIGluZm9XaW5kb3cuXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRpdGxlIHN0cmluZ3MuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgc25pcHBldCBvZiB0aGUgbm9ybWFsIGluZm9XaW5kb3cuXG4gICAqIEBwYXJhbSBzbmlwcGV0IHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTbmlwcGV0KHNuaXBwZXQ6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNuaXBwZXQgc3RyaW5ncy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U25pcHBldCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBtYXJrZXIgb3BhY2l0eSBmcm9tIDAuMCB0byAxLjAuXG4gICAqIEBwYXJhbSBhbHBoYSB7bnVtYmVyfSBPcGFjaXR5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KGFscGhhOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgb3BhY2l0eS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBPcGFjaXR5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGluZm8gd2luZG93IGFuY2hvci4gVGhpcyBkZWZhdWx0cyB0byA1MCUgZnJvbSB0aGUgbGVmdCBvZiB0aGUgaW1hZ2UgYW5kIGF0IHRoZSBib3R0b20gb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0geCB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIGxlZnQgb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIHRvcCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJY29uQW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW5mbyB3aW5kb3cgYW5jaG9yLiBUaGlzIGRlZmF1bHRzIHRvIDUwJSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSBhbmQgYXQgdGhlIHRvcCBvZiB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gbGVmdCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEluZm9XaW5kb3dBbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGluZm9XaW5kb3cgaXMgc2hvd24gb24gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNJbmZvV2luZG93U2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gei1pbmRleFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHotaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSBhbGxvdyBhbGwgdXNlcnMgdG8gZHJhZyB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gZHJhZ2dhYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWFya2VyIGRyYWcgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzRHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBiZSBmbGF0IG1hcmtlci5cbiAgICogQHBhcmFtIGZsYXQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGbGF0KGZsYXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBpY29uIHVybCBhbmQvb3Igc2l6ZVxuICAgKiBAcGFyYW0gaWNvblxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SWNvbihpY29uOiBNYXJrZXJJY29uKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWFya2VyIHJvdGF0aW9uIGFuZ2xlLlxuICAgKiBAcGFyYW0gcm90YXRpb24ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJvdGF0aW9uKHJvdGF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgcm90YXRpb24gYW5nbGUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJvdGF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXJrZXJDbHVzdGVyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb25lIG1hcmtlciBsb2NhdGlvblxuICAgKiBAcGFyYW0gbWFya2VyIHtNYXJrZXJPcHRpb25zfSBvbmUgbG9jYXRpb25cbiAgICogQHBhcmFtIHNraXBSZWRyYXc/IHtib29sZWFufSBtYXJrZXIgY2x1c3RlciBkb2VzIG5vdCByZWRyYXcgdGhlIG1hcmtlciBjbHVzdGVyIGlmIHRydWUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRNYXJrZXIobWFya2VyOiBNYXJrZXJPcHRpb25zKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG1hcmtlciBsb2NhdGlvbnNcbiAgICogQHBhcmFtIG1hcmtlcnMge01hcmtlck9wdGlvbnNbXX0gbXVsdGlwbGUgbG9jYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZE1hcmtlcnMobWFya2VyczogTWFya2VyT3B0aW9uc1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJrZXIgY2x1c3RlclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXQoJ19vdmVybGF5cycsIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHBvaW50cy5cbiAgICogQHBhcmFtIHBvaW50cyB7SUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9pbnRzKHBvaW50czogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3MuXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBwb2ludHMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmc+fVxuICAgKi9cbiAgZ2V0UG9pbnRzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+IHtcbiAgICByZXR1cm4gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIGhvbGVzLlxuICAgKiBAcGFyYW0gaG9sZXMge0lMYXRMbmdbXVtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SG9sZXMoaG9sZXM6IElMYXRMbmdbXVtdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3MuXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBob2xlcy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPn1cbiAgICovXG4gIGdldEhvbGVzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4ge1xuICAgIGNvbnN0IGhvbGVzOiBJTGF0TG5nW11bXSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpO1xuICAgIGNvbnN0IHJlc3VsdHM6IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4gPSBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPigpO1xuICAgIGhvbGVzLmZvckVhY2goKGhvbGU6IElMYXRMbmdbXSkgPT4ge1xuICAgICAgcmVzdWx0cy5wdXNoKGhvbGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKVxuICAgKiBAcGFyYW0gZmlsbENvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoZmlsbENvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGaWxsQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcilcbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgcG9seWdvblxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyBjbGlja2FibGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBwb2x5Z29uXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gekluZGV4IG9yZGVyLlxuICAgKiBAcGFyYW0gekluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHBvbHlnb24uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBzdHJva2Ugd2lkdGhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwb2x5Z29uIHN0cm9rZSB3aWR0aFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLlxuICAgKiBAcGFyYW0gZ2VvZGVzaWMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyBnZW9kZXNpYy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEdlb2Rlc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBwb2ludHMuXG4gICAqIEBwYXJhbSBwb2ludHMge0lMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvaW50cyhwb2ludHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzXG4gICAqIFlvdSBjYW4gbW9kaWZ5IHRoZSBwb2ludHMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmc+fVxuICAgKi9cbiAgZ2V0UG9pbnRzKCk6IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+IHtcbiAgICByZXR1cm4gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KHRoaXMuX29iamVjdEluc3RhbmNlLmdldFBvaW50cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5bGluZSBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLlxuICAgKiBAcGFyYW0gZ2VvRGVzaWMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRHZW9EZXNpYyhnZW9EZXNpYzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgZ2VvZGVzaWNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEdlb2Rlc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIHBvbHlsaW5lXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIHBvbHlsaW5lXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgY29sb3JcbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5bGluZSBjb2xvclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBzdHJva2Ugd2lkdGhcbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzdHJva2Ugd2lkdGggKHVuaXQ6IHBpeGVsKS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgekluZGV4IG9yZGVyLlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5bGluZSB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcG9seWxpbmVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRpbGVPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIHRpbGVzIHNob3VsZCBmYWRlIGluLlxuICAgKiBAcGFyYW0gZmFkZUluIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmFkZUluKGZhZGVJbjogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSB0aWxlcyBzaG91bGQgZmFkZSBpblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmFkZUluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHpJbmRleCBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHpJbmRleCBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG9wYWNpdHkgb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3BhY2l0eSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvcGFjaXR5IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGlsZSBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aWxlIHNpemVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFRpbGVTaXplKCk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGlsZSBvdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBLbWxPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdjYW1lcmEnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9vYmplY3RJbnN0YW5jZS5jYW1lcmEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAna21sRGF0YScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX29iamVjdEluc3RhbmNlLmttbERhdGEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpZXdwb3J0IHRvIGNvbnRhaW5zIGFsbCBvdmVybGF5c1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGVmYXVsdFZpZXdwb3J0KCk6IENhbWVyYVBvc2l0aW9uPElMYXRMbmcgfCBJTGF0TG5nW10+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogR29vZ2xlTWFwIHsgcmV0dXJuIHRoaXMuX21hcDsgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIGttbCBvdmVybGF5XG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGttbCBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIEttbE92ZXJsYXlcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgS21sT3ZlcmxheSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgS21sT3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/pages/directions-tab/directions-tab.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/directions-tab/directions-tab.module.ts ***!
  \***************************************************************/
/*! exports provided: DirectionsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsTabPageModule", function() { return DirectionsTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _directions_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directions-tab.page */ "./src/app/pages/directions-tab/directions-tab.page.ts");







var routes = [
    {
        path: '',
        component: _directions_tab_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsTabPage"]
    }
];
var DirectionsTabPageModule = /** @class */ (function () {
    function DirectionsTabPageModule() {
    }
    DirectionsTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_directions_tab_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsTabPage"]]
        })
    ], DirectionsTabPageModule);
    return DirectionsTabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/directions-tab/directions-tab.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/directions-tab/directions-tab.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\"> \n    <ion-title>Where2P4Free</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map_canvas\">\n      \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/directions-tab/directions-tab.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/directions-tab/directions-tab.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlyZWN0aW9ucy10YWIvRDpcXElvbmljIEFwcHNcXFdoZXJlMlA0RnJlZS9zcmNcXGFwcFxccGFnZXNcXGRpcmVjdGlvbnMtdGFiXFxkaXJlY3Rpb25zLXRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXJlY3Rpb25zLXRhYi9kaXJlY3Rpb25zLXRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/directions-tab/directions-tab.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/directions-tab/directions-tab.page.ts ***!
  \*************************************************************/
/*! exports provided: DirectionsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsTabPage", function() { return DirectionsTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");





var DirectionsTabPage = /** @class */ (function () {
    function DirectionsTabPage(platform, restService) {
        this.platform = platform;
        this.restService = restService;
        this.variable = false;
        if (this.variable = false) {
            this.variable = true;
        }
        else {
            this.getLocations();
        }
    }
    DirectionsTabPage.prototype.goToMyLocation = function () {
        var _this = this;
        this.map.getMyLocation().then(function (location) {
            _this.map.moveCamera({
                target: location.latLng,
                zoom: 18,
            });
            var marker = _this.map.addMarkerSync({
                icon: 'blue',
                position: location.latLng,
            });
            var htmlInfoWindow = new _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
            var frame = document.createElement('div');
            frame.innerHTML = [
                "\n          <p>Current Location</p>\n          <form>\n            <ion-button type=\"submit\" class=\"refreshMap\">Refresh</ion-button>\n          </form>\n        "
            ].join("");
            frame.getElementsByClassName("refreshMap")[0].addEventListener("click", function () {
                console.log('Map refreshed!');
            });
            htmlInfoWindow.setContent(frame, {
                width: "125px",
                height: "125px"
            });
            htmlInfoWindow.open(marker);
            _this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).subscribe(function (data) {
                console.log("Click MAP", data);
            });
        });
    };
    DirectionsTabPage.prototype.getLocations = function () {
        var _this = this;
        this.restService.getLocations().then(function (data) {
            _this.locations = data;
            var _loop_1 = function (i) {
                var marker = _this.map.addMarkerSync({
                    position: {
                        lat: _this.locations[i]['latitude'],
                        lng: _this.locations[i]['longitude'],
                    },
                });
                var htmlInfoWindow = new _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
                var frame = document.createElement('div');
                frame.innerHTML = [
                    "<p>" + _this.locations[i]['location'] + "</p>",
                    "\n            <ion-button class=\"updateMarker\">Update</ion-button>\n            <ion-button class=\"removeMarker\">Remove</ion-button>\n          "
                ].join("");
                frame.getElementsByClassName("updateMarker")[0].addEventListener("click", function () {
                    var htmlInfoWindow = new _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
                    var frame = document.createElement('div');
                    frame.innerHTML = [
                        "\n              <p>Enter details below:</p>     \n              <label>Location:</label>\n              <p><input type=\"text\" id=\"location\" name=\"location\" required></p>\n              <label>Description:</label>\n              <p><input type=\"text\" id=\"description\" name=\"description\" required></p>\n              <label>Type:</label>\n              <p><select id=\"typeList\"></p>\n                  <option></option>\n                  <option>Male</option>\n                  <option>Female</option>  \n                  <option>Gender Neutral</option>\n                  <option>Disabled</option>\n                </select>\n              <p><ion-button class=\"updateRestroom\">Update</ion-button>\n              <ion-button class=\"closeInfoWindow\">Close</ion-button></p>\n            "
                    ].join(",");
                    frame.getElementsByClassName("updateRestroom")[0].addEventListener("click", function () {
                        var location = document.getElementById("location").value;
                        var description = document.getElementById("description").value;
                        var type = document.getElementById("type").value;
                        var updateRestroomLocation = {};
                        updateRestroomLocation['toiletID'] = _this.locations[i]['toiletID'];
                        updateRestroomLocation['location'] = location;
                        updateRestroomLocation['description'] = description;
                        updateRestroomLocation['type'] = type;
                        updateRestroomLocation['latitude'] = _this.locations[i]['latitude'];
                        updateRestroomLocation['longitude'] = _this.locations[i]['longitude'];
                        _this.restService.updateLocation(updateRestroomLocation).then(function (result) {
                            console.log(result);
                        }, function (err) {
                            console.log(err);
                        });
                    });
                    frame.getElementsByClassName("closeInfoWindow")[0].addEventListener("click", function () {
                        htmlInfoWindow.close();
                    });
                    htmlInfoWindow.setContent(frame, {
                        width: "275px",
                        height: "325px"
                    });
                    htmlInfoWindow.open(marker);
                });
                frame.getElementsByClassName("removeMarker")[0].addEventListener("click", function () {
                    var removeMarkerLocation = {};
                    removeMarkerLocation['toiletID'] = _this.locations[i]['toiletID'];
                    _this.restService.removeLocation(removeMarkerLocation).then(function (result) {
                        console.log(result);
                    }, function (err) {
                        console.log(err);
                    });
                    marker.remove();
                });
                htmlInfoWindow.setContent(frame, {
                    width: "275px",
                    height: "125px"
                });
                marker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                    htmlInfoWindow.open(marker);
                });
            };
            for (var i = 0; i < _this.locations.length; i++) {
                _loop_1(i);
            }
        });
    };
    DirectionsTabPage.prototype.addMarkerLocation = function () {
        var _this = this;
        this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_LONG_CLICK).subscribe(function (data) {
            _this.location = data;
            var _loop_2 = function (i) {
                var marker = _this.map.addMarkerSync({
                    position: {
                        lat: _this.location[i]['lat'],
                        lng: _this.location[i]['lng'],
                    },
                });
                var htmlInfoWindow = new _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
                var frame = document.createElement('div');
                frame.innerHTML = [
                    "   \n              <p>Marker added. Do you wish to add this restroom</p>\n              <ion-button class=\"addMarker\">Add</ion-button>\n              <ion-button class=\"removeMarker\">Remove</ion-button>\n            "
                ].join("");
                frame.getElementsByClassName("addMarker")[0].addEventListener("click", function () {
                    var htmlInfoWindow = new _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
                    var frame = document.createElement('div');
                    frame.innerHTML = [
                        "   \n                <p>Enter information below:</p>                                                                       \n                <label>Location:</label>\n                <p><input type=\"text\" id=\"location\" name=\"location\"></p>\n                <label>Description:</label>\n                <p><input type=\"text\" id=\"description\" name=\"description\"></p>\n                <label>Type:</label>\n                <p><select id=\"typeList\"></p>\n                  <option></option>\n                  <option>Male</option>\n                  <option>Female</option>  \n                  <option>Gender Neutral</option>\n                  <option>Disabled</option>\n                </select>\n                <p><ion-button class=\"addRestroom\">Submit</ion-button>\n                <ion-button class=\"closeInfoWindow\">Close</ion-button></p>                                                       \n              "
                    ].join("");
                    frame.getElementsByClassName("addRestroom")[0].addEventListener("click", function () {
                        var location = document.getElementById("location").value;
                        var description = document.getElementById("description").value;
                        var type = document.getElementById("typeList").value;
                        var addRestroomLocation = {};
                        addRestroomLocation['location'] = location;
                        addRestroomLocation['description'] = description;
                        addRestroomLocation['type'] = type;
                        addRestroomLocation['lat'] = _this.location[i]['lat'];
                        addRestroomLocation['lng'] = _this.location[i]['lng'];
                        _this.restService.addLocation(addRestroomLocation).then(function (result) {
                            console.log(result);
                        }, function (err) {
                            console.log(err);
                        });
                    });
                    frame.getElementsByClassName("closeInfoWindow")[0].addEventListener("click", function () {
                        console.log('InfoWindow closed!');
                        htmlInfoWindow.close();
                    });
                    htmlInfoWindow.setContent(frame, {
                        width: "275px",
                        height: "325px"
                    });
                    htmlInfoWindow.open(marker);
                });
                frame.getElementsByClassName("removeMarker")[0].addEventListener("click", function () {
                    console.log('Marker removed!');
                    marker.remove();
                });
                htmlInfoWindow.setContent(frame, {
                    width: "275px",
                    height: "125px"
                });
                marker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                    htmlInfoWindow.open(marker);
                });
            };
            for (var i = 0; i < _this.location.length; i++) {
                _loop_2(i);
            }
        });
    };
    DirectionsTabPage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["Environment"].setEnv({
                    'API_KEY_FOR_BROWSER_RELEASE': '',
                });
                this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('map_canvas');
                this.goToMyLocation();
                this.addMarkerLocation();
                return [2 /*return*/];
            });
        });
    };
    DirectionsTabPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadMap()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DirectionsTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directions-tab',
            template: __webpack_require__(/*! ./directions-tab.page.html */ "./src/app/pages/directions-tab/directions-tab.page.html"),
            styles: [__webpack_require__(/*! ./directions-tab.page.scss */ "./src/app/pages/directions-tab/directions-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
    ], DirectionsTabPage);
    return DirectionsTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=directions-tab-directions-tab-module.js.map