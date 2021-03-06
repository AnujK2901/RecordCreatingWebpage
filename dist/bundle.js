!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) {
            return t[e]
        }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    n(1), t.exports = n(2)
}, function (t, e, n) {
    "use strict";
    n.r(e), e.default = n.p + "bundle.css"
}, function (t, e, n) {
    "use strict";
    n.r(e);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var i = function (t, e) {
        return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    };

    function r(t, e) {
        function n() {
            this.constructor = t
        }

        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    var o = function () {
        return (o = Object.assign || function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    };

    function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var i, r, o = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (t) {
            r = {error: t}
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return a
    }

    function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
        return t
    }

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var u = function () {
        function t(t) {
            void 0 === t && (t = {}), this.adapter_ = t
        }

        return Object.defineProperty(t, "cssClasses", {
            get: function () {
                return {}
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function () {
                return {}
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function () {
                return {}
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function () {
                return {}
            }, enumerable: !0, configurable: !0
        }), t.prototype.init = function () {
        }, t.prototype.destroy = function () {
        }, t
    }(), c = function () {
        function t(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            this.root_ = t, this.initialize.apply(this, s(n)), this.foundation_ = void 0 === e ? this.getDefaultFoundation() : e, this.foundation_.init(), this.initialSyncWithDOM()
        }

        return t.attachTo = function (e) {
            return new t(e, new u({}))
        }, t.prototype.initialize = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        }, t.prototype.getDefaultFoundation = function () {
            throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
        }, t.prototype.initialSyncWithDOM = function () {
        }, t.prototype.destroy = function () {
            this.foundation_.destroy()
        }, t.prototype.listen = function (t, e, n) {
            this.root_.addEventListener(t, e, n)
        }, t.prototype.unlisten = function (t, e, n) {
            this.root_.removeEventListener(t, e, n)
        }, t.prototype.emit = function (t, e, n) {
            var i;
            void 0 === n && (n = !1), "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                bubbles: n,
                detail: e
            }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e), this.root_.dispatchEvent(i)
        }, t
    }();

    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    function l(t) {
        return void 0 === t && (t = window), !!function (t) {
            void 0 === t && (t = window);
            var e = !1;
            try {
                var n = {
                    get passive() {
                        return e = !0, !1
                    }
                }, i = function () {
                };
                t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n)
            } catch (t) {
                e = !1
            }
            return e
        }
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */(t) && {passive: !0}
    }

    function d(t, e) {
        if (t.closest) return t.closest(e);
        for (var n = t; n;) {
            if (p(n, e)) return n;
            n = n.parentElement
        }
        return null
    }

    function p(t, e) {
        return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
    }

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var _, h = {
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded"
    }, f = {
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top"
    }, m = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: .6,
        PADDING: 10,
        TAP_DELAY_MS: 300
    };
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var g = ["touchstart", "pointerdown", "mousedown", "keydown"],
        v = ["touchend", "pointerup", "mouseup", "contextmenu"], y = [], E = function (t) {
            function e(n) {
                var i = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return i.activationAnimationHasEnded_ = !1, i.activationTimer_ = 0, i.fgDeactivationRemovalTimer_ = 0, i.fgScale_ = "0", i.frame_ = {
                    width: 0,
                    height: 0
                }, i.initialSize_ = 0, i.layoutFrame_ = 0, i.maxRadius_ = 0, i.unboundedCoords_ = {
                    left: 0,
                    top: 0
                }, i.activationState_ = i.defaultActivationState_(), i.activationTimerCallback_ = function () {
                    i.activationAnimationHasEnded_ = !0, i.runDeactivationUXLogicIfReady_()
                }, i.activateHandler_ = function (t) {
                    return i.activate_(t)
                }, i.deactivateHandler_ = function () {
                    return i.deactivate_()
                }, i.focusHandler_ = function () {
                    return i.handleFocus()
                }, i.blurHandler_ = function () {
                    return i.handleBlur()
                }, i.resizeHandler_ = function () {
                    return i.layout()
                }, i
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return h
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return f
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return m
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, browserSupportsCssVars: function () {
                            return !0
                        }, computeBoundingRect: function () {
                            return {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0}
                        }, containsEventTarget: function () {
                            return !0
                        }, deregisterDocumentInteractionHandler: function () {
                        }, deregisterInteractionHandler: function () {
                        }, deregisterResizeHandler: function () {
                        }, getWindowPageOffset: function () {
                            return {x: 0, y: 0}
                        }, isSurfaceActive: function () {
                            return !0
                        }, isSurfaceDisabled: function () {
                            return !0
                        }, isUnbounded: function () {
                            return !0
                        }, registerDocumentInteractionHandler: function () {
                        }, registerInteractionHandler: function () {
                        }, registerResizeHandler: function () {
                        }, removeClass: function () {
                        }, updateCssVariable: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                var t = this, n = this.supportsPressRipple_();
                if (this.registerRootHandlers_(n), n) {
                    var i = e.cssClasses, r = i.ROOT, o = i.UNBOUNDED;
                    requestAnimationFrame((function () {
                        t.adapter_.addClass(r), t.adapter_.isUnbounded() && (t.adapter_.addClass(o), t.layoutInternal_())
                    }))
                }
            }, e.prototype.destroy = function () {
                var t = this;
                if (this.supportsPressRipple_()) {
                    this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));
                    var n = e.cssClasses, i = n.ROOT, r = n.UNBOUNDED;
                    requestAnimationFrame((function () {
                        t.adapter_.removeClass(i), t.adapter_.removeClass(r), t.removeCssVars_()
                    }))
                }
                this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_()
            }, e.prototype.activate = function (t) {
                this.activate_(t)
            }, e.prototype.deactivate = function () {
                this.deactivate_()
            }, e.prototype.layout = function () {
                var t = this;
                this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame((function () {
                    t.layoutInternal_(), t.layoutFrame_ = 0
                }))
            }, e.prototype.setUnbounded = function (t) {
                var n = e.cssClasses.UNBOUNDED;
                t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
            }, e.prototype.handleFocus = function () {
                var t = this;
                requestAnimationFrame((function () {
                    return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)
                }))
            }, e.prototype.handleBlur = function () {
                var t = this;
                requestAnimationFrame((function () {
                    return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)
                }))
            }, e.prototype.supportsPressRipple_ = function () {
                return this.adapter_.browserSupportsCssVars()
            }, e.prototype.defaultActivationState_ = function () {
                return {
                    activationEvent: void 0,
                    hasDeactivationUXRun: !1,
                    isActivated: !1,
                    isProgrammatic: !1,
                    wasActivatedByPointer: !1,
                    wasElementMadeActive: !1
                }
            }, e.prototype.registerRootHandlers_ = function (t) {
                var e = this;
                t && (g.forEach((function (t) {
                    e.adapter_.registerInteractionHandler(t, e.activateHandler_)
                })), this.adapter_.isUnbounded() && this.adapter_.registerResizeHandler(this.resizeHandler_)), this.adapter_.registerInteractionHandler("focus", this.focusHandler_), this.adapter_.registerInteractionHandler("blur", this.blurHandler_)
            }, e.prototype.registerDeactivationHandlers_ = function (t) {
                var e = this;
                "keydown" === t.type ? this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_) : v.forEach((function (t) {
                    e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_)
                }))
            }, e.prototype.deregisterRootHandlers_ = function () {
                var t = this;
                g.forEach((function (e) {
                    t.adapter_.deregisterInteractionHandler(e, t.activateHandler_)
                })), this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter_.isUnbounded() && this.adapter_.deregisterResizeHandler(this.resizeHandler_)
            }, e.prototype.deregisterDeactivationHandlers_ = function () {
                var t = this;
                this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_), v.forEach((function (e) {
                    t.adapter_.deregisterDocumentInteractionHandler(e, t.deactivateHandler_)
                }))
            }, e.prototype.removeCssVars_ = function () {
                var t = this, n = e.strings;
                Object.keys(n).forEach((function (e) {
                    0 === e.indexOf("VAR_") && t.adapter_.updateCssVariable(n[e], null)
                }))
            }, e.prototype.activate_ = function (t) {
                var e = this;
                if (!this.adapter_.isSurfaceDisabled()) {
                    var n = this.activationState_;
                    if (!n.isActivated) {
                        var i = this.previousActivationEvent_;
                        if (!(i && void 0 !== t && i.type !== t.type)) n.isActivated = !0, n.isProgrammatic = void 0 === t, n.activationEvent = t, n.wasActivatedByPointer = !n.isProgrammatic && (void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type)), void 0 !== t && y.length > 0 && y.some((function (t) {
                            return e.adapter_.containsEventTarget(t)
                        })) ? this.resetActivationState_() : (void 0 !== t && (y.push(t.target), this.registerDeactivationHandlers_(t)), n.wasElementMadeActive = this.checkElementMadeActive_(t), n.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame((function () {
                            y = [], n.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (n.wasElementMadeActive = e.checkElementMadeActive_(t), n.wasElementMadeActive && e.animateActivation_()), n.wasElementMadeActive || (e.activationState_ = e.defaultActivationState_())
                        })))
                    }
                }
            }, e.prototype.checkElementMadeActive_ = function (t) {
                return void 0 === t || "keydown" !== t.type || this.adapter_.isSurfaceActive()
            }, e.prototype.animateActivation_ = function () {
                var t = this, n = e.strings, i = n.VAR_FG_TRANSLATE_START, r = n.VAR_FG_TRANSLATE_END, o = e.cssClasses,
                    a = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
                this.layoutInternal_();
                var c = "", l = "";
                if (!this.adapter_.isUnbounded()) {
                    var d = this.getFgTranslationCoordinates_(), p = d.startPoint, _ = d.endPoint;
                    c = p.x + "px, " + p.y + "px", l = _.x + "px, " + _.y + "px"
                }
                this.adapter_.updateCssVariable(i, c), this.adapter_.updateCssVariable(r, l), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter_.removeClass(a), this.adapter_.computeBoundingRect(), this.adapter_.addClass(s), this.activationTimer_ = setTimeout((function () {
                    return t.activationTimerCallback_()
                }), u)
            }, e.prototype.getFgTranslationCoordinates_ = function () {
                var t, e = this.activationState_, n = e.activationEvent;
                return {
                    startPoint: t = {
                        x: (t = e.wasActivatedByPointer ? function (t, e, n) {
                            if (!t) return {x: 0, y: 0};
                            var i, r, o = e.x, a = e.y, s = o + n.left, u = a + n.top;
                            if ("touchstart" === t.type) {
                                var c = t;
                                i = c.changedTouches[0].pageX - s, r = c.changedTouches[0].pageY - u
                            } else {
                                var l = t;
                                i = l.pageX - s, r = l.pageY - u
                            }
                            return {x: i, y: r}
                        }(n, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2
                        }).x - this.initialSize_ / 2, y: t.y - this.initialSize_ / 2
                    },
                    endPoint: {
                        x: this.frame_.width / 2 - this.initialSize_ / 2,
                        y: this.frame_.height / 2 - this.initialSize_ / 2
                    }
                }
            }, e.prototype.runDeactivationUXLogicIfReady_ = function () {
                var t = this, n = e.cssClasses.FG_DEACTIVATION, i = this.activationState_, r = i.hasDeactivationUXRun,
                    o = i.isActivated;
                (r || !o) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter_.addClass(n), this.fgDeactivationRemovalTimer_ = setTimeout((function () {
                    t.adapter_.removeClass(n)
                }), m.FG_DEACTIVATION_MS))
            }, e.prototype.rmBoundedActivationClasses_ = function () {
                var t = e.cssClasses.FG_ACTIVATION;
                this.adapter_.removeClass(t), this.activationAnimationHasEnded_ = !1, this.adapter_.computeBoundingRect()
            }, e.prototype.resetActivationState_ = function () {
                var t = this;
                this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout((function () {
                    return t.previousActivationEvent_ = void 0
                }), e.numbers.TAP_DELAY_MS)
            }, e.prototype.deactivate_ = function () {
                var t = this, e = this.activationState_;
                if (e.isActivated) {
                    var n = o({}, e);
                    e.isProgrammatic ? (requestAnimationFrame((function () {
                        return t.animateDeactivation_(n)
                    })), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame((function () {
                        t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(n), t.resetActivationState_()
                    })))
                }
            }, e.prototype.animateDeactivation_ = function (t) {
                var e = t.wasActivatedByPointer, n = t.wasElementMadeActive;
                (e || n) && this.runDeactivationUXLogicIfReady_()
            }, e.prototype.layoutInternal_ = function () {
                var t = this;
                this.frame_ = this.adapter_.computeBoundingRect();
                var n = Math.max(this.frame_.height, this.frame_.width);
                this.maxRadius_ = this.adapter_.isUnbounded() ? n : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) + e.numbers.PADDING;
                var i = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
                this.adapter_.isUnbounded() && i % 2 != 0 ? this.initialSize_ = i - 1 : this.initialSize_ = i, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_()
            }, e.prototype.updateLayoutCssVars_ = function () {
                var t = e.strings, n = t.VAR_FG_SIZE, i = t.VAR_LEFT, r = t.VAR_TOP, o = t.VAR_FG_SCALE;
                this.adapter_.updateCssVariable(n, this.initialSize_ + "px"), this.adapter_.updateCssVariable(o, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = {
                    left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                    top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                }, this.adapter_.updateCssVariable(i, this.unboundedCoords_.left + "px"), this.adapter_.updateCssVariable(r, this.unboundedCoords_.top + "px"))
            }, e
        }(u), I = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.disabled = !1, e
            }

            return r(e, t), e.attachTo = function (t, n) {
                void 0 === n && (n = {isUnbounded: void 0});
                var i = new e(t);
                return void 0 !== n.isUnbounded && (i.unbounded = n.isUnbounded), i
            }, e.createAdapter = function (t) {
                return {
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, browserSupportsCssVars: function () {
                        return function (t, e) {
                            void 0 === e && (e = !1);
                            var n, i = t.CSS;
                            if ("boolean" == typeof _ && !e) return _;
                            if (!(i && "function" == typeof i.supports)) return !1;
                            var r = i.supports("--css-vars", "yes"),
                                o = i.supports("(--css-vars: yes)") && i.supports("color", "#00000000");
                            return n = r || o, e || (_ = n), n
                        }(window)
                    }, computeBoundingRect: function () {
                        return t.root_.getBoundingClientRect()
                    }, containsEventTarget: function (e) {
                        return t.root_.contains(e)
                    }, deregisterDocumentInteractionHandler: function (t, e) {
                        return document.documentElement.removeEventListener(t, e, l())
                    }, deregisterInteractionHandler: function (e, n) {
                        return t.root_.removeEventListener(e, n, l())
                    }, deregisterResizeHandler: function (t) {
                        return window.removeEventListener("resize", t)
                    }, getWindowPageOffset: function () {
                        return {x: window.pageXOffset, y: window.pageYOffset}
                    }, isSurfaceActive: function () {
                        return p(t.root_, ":active")
                    }, isSurfaceDisabled: function () {
                        return Boolean(t.disabled)
                    }, isUnbounded: function () {
                        return Boolean(t.unbounded)
                    }, registerDocumentInteractionHandler: function (t, e) {
                        return document.documentElement.addEventListener(t, e, l())
                    }, registerInteractionHandler: function (e, n) {
                        return t.root_.addEventListener(e, n, l())
                    }, registerResizeHandler: function (t) {
                        return window.addEventListener("resize", t)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, updateCssVariable: function (e, n) {
                        return t.root_.style.setProperty(e, n)
                    }
                }
            }, Object.defineProperty(e.prototype, "unbounded", {
                get: function () {
                    return Boolean(this.unbounded_)
                }, set: function (t) {
                    this.unbounded_ = Boolean(t), this.setUnbounded_()
                }, enumerable: !0, configurable: !0
            }), e.prototype.activate = function () {
                this.foundation_.activate()
            }, e.prototype.deactivate = function () {
                this.foundation_.deactivate()
            }, e.prototype.layout = function () {
                this.foundation_.layout()
            }, e.prototype.getDefaultFoundation = function () {
                return new E(e.createAdapter(this))
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this.root_;
                this.unbounded = "mdcRippleIsUnbounded" in t.dataset
            }, e.prototype.setUnbounded_ = function () {
                this.foundation_.setUnbounded(Boolean(this.unbounded_))
            }, e
        }(c), b = {
            FIXED_CLASS: "mdc-top-app-bar--fixed",
            FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
            SHORT_CLASS: "mdc-top-app-bar--short",
            SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
            SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
        }, T = {DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100, MAX_TOP_APP_BAR_HEIGHT: 128}, A = {
            ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
            NAVIGATION_EVENT: "MDCTopAppBar:nav",
            NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
            ROOT_SELECTOR: ".mdc-top-app-bar",
            TITLE_SELECTOR: ".mdc-top-app-bar__title"
        }, C = function (t) {
            function e(n) {
                return t.call(this, o({}, e.defaultAdapter, n)) || this
            }

            return r(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return A
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return b
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return T
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, hasClass: function () {
                            return !1
                        }, setStyle: function () {
                        }, getTopAppBarHeight: function () {
                            return 0
                        }, notifyNavigationIconClicked: function () {
                        }, getViewportScrollY: function () {
                            return 0
                        }, getTotalActionItems: function () {
                            return 0
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.handleTargetScroll = function () {
            }, e.prototype.handleWindowResize = function () {
            }, e.prototype.handleNavigationClick = function () {
                this.adapter_.notifyNavigationIconClicked()
            }, e
        }(u), O = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.wasDocked_ = !0, n.isDockedShowing_ = !0, n.currentAppBarOffsetTop_ = 0, n.isCurrentlyBeingResized_ = !1, n.resizeThrottleId_ = 0, n.resizeDebounceId_ = 0, n.lastScrollPosition_ = n.adapter_.getViewportScrollY(), n.topAppBarHeight_ = n.adapter_.getTopAppBarHeight(), n
            }

            return r(e, t), e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.adapter_.setStyle("top", "")
            }, e.prototype.handleTargetScroll = function () {
                var t = Math.max(this.adapter_.getViewportScrollY(), 0), e = t - this.lastScrollPosition_;
                this.lastScrollPosition_ = t, this.isCurrentlyBeingResized_ || (this.currentAppBarOffsetTop_ -= e, this.currentAppBarOffsetTop_ > 0 ? this.currentAppBarOffsetTop_ = 0 : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ && (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_), this.moveTopAppBar_())
            }, e.prototype.handleWindowResize = function () {
                var t = this;
                this.resizeThrottleId_ || (this.resizeThrottleId_ = setTimeout((function () {
                    t.resizeThrottleId_ = 0, t.throttledResizeHandler_()
                }), T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized_ = !0, this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_), this.resizeDebounceId_ = setTimeout((function () {
                    t.handleTargetScroll(), t.isCurrentlyBeingResized_ = !1, t.resizeDebounceId_ = 0
                }), T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)
            }, e.prototype.checkForUpdate_ = function () {
                var t = -this.topAppBarHeight_, e = this.currentAppBarOffsetTop_ < 0, n = this.currentAppBarOffsetTop_ > t,
                    i = e && n;
                if (i) this.wasDocked_ = !1; else {
                    if (!this.wasDocked_) return this.wasDocked_ = !0, !0;
                    if (this.isDockedShowing_ !== n) return this.isDockedShowing_ = n, !0
                }
                return i
            }, e.prototype.moveTopAppBar_ = function () {
                if (this.checkForUpdate_()) {
                    var t = this.currentAppBarOffsetTop_;
                    Math.abs(t) >= this.topAppBarHeight_ && (t = -T.MAX_TOP_APP_BAR_HEIGHT), this.adapter_.setStyle("top", t + "px")
                }
            }, e.prototype.throttledResizeHandler_ = function () {
                var t = this.adapter_.getTopAppBarHeight();
                this.topAppBarHeight_ !== t && (this.wasDocked_ = !1, this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t, this.topAppBarHeight_ = t), this.handleTargetScroll()
            }, e
        }(C), S = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.wasScrolled_ = !1, e
            }

            return r(e, t), e.prototype.handleTargetScroll = function () {
                this.adapter_.getViewportScrollY() <= 0 ? this.wasScrolled_ && (this.adapter_.removeClass(b.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !1) : this.wasScrolled_ || (this.adapter_.addClass(b.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !0)
            }, e
        }(O), L = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.isCollapsed_ = !1, n.isAlwaysCollapsed_ = !1, n
            }

            return r(e, t), Object.defineProperty(e.prototype, "isCollapsed", {
                get: function () {
                    return this.isCollapsed_
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                t.prototype.init.call(this), this.adapter_.getTotalActionItems() > 0 && this.adapter_.addClass(b.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter_.hasClass(b.SHORT_COLLAPSED_CLASS))
            }, e.prototype.setAlwaysCollapsed = function (t) {
                this.isAlwaysCollapsed_ = !!t, this.isAlwaysCollapsed_ ? this.collapse_() : this.maybeCollapseBar_()
            }, e.prototype.getAlwaysCollapsed = function () {
                return this.isAlwaysCollapsed_
            }, e.prototype.handleTargetScroll = function () {
                this.maybeCollapseBar_()
            }, e.prototype.maybeCollapseBar_ = function () {
                this.isAlwaysCollapsed_ || (this.adapter_.getViewportScrollY() <= 0 ? this.isCollapsed_ && this.uncollapse_() : this.isCollapsed_ || this.collapse_())
            }, e.prototype.uncollapse_ = function () {
                this.adapter_.removeClass(b.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !1
            }, e.prototype.collapse_ = function () {
                this.adapter_.addClass(b.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !0
            }, e
        }(C), R = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t) {
                void 0 === t && (t = function (t) {
                    return I.attachTo(t)
                }), this.navIcon_ = this.root_.querySelector(A.NAVIGATION_ICON_SELECTOR);
                var e = [].slice.call(this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR));
                this.navIcon_ && e.push(this.navIcon_), this.iconRipples_ = e.map((function (e) {
                    var n = t(e);
                    return n.unbounded = !0, n
                })), this.scrollTarget_ = window
            }, e.prototype.initialSyncWithDOM = function () {
                this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_), this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_), this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.addEventListener("click", this.handleNavigationClick_);
                var t = this.root_.classList.contains(b.FIXED_CLASS);
                this.root_.classList.contains(b.SHORT_CLASS) || t || window.addEventListener("resize", this.handleWindowResize_)
            }, e.prototype.destroy = function () {
                this.iconRipples_.forEach((function (t) {
                    return t.destroy()
                })), this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.removeEventListener("click", this.handleNavigationClick_);
                var e = this.root_.classList.contains(b.FIXED_CLASS);
                this.root_.classList.contains(b.SHORT_CLASS) || e || window.removeEventListener("resize", this.handleWindowResize_), t.prototype.destroy.call(this)
            }, e.prototype.setScrollTarget = function (t) {
                this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.scrollTarget_ = t, this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this, e = {
                    hasClass: function (e) {
                        return t.root_.classList.contains(e)
                    }, addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, setStyle: function (e, n) {
                        return t.root_.style.setProperty(e, n)
                    }, getTopAppBarHeight: function () {
                        return t.root_.clientHeight
                    }, notifyNavigationIconClicked: function () {
                        return t.emit(A.NAVIGATION_EVENT, {})
                    }, getViewportScrollY: function () {
                        var e = t.scrollTarget_, n = t.scrollTarget_;
                        return void 0 !== e.pageYOffset ? e.pageYOffset : n.scrollTop
                    }, getTotalActionItems: function () {
                        return t.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR).length
                    }
                };
                return this.root_.classList.contains(b.SHORT_CLASS) ? new L(e) : this.root_.classList.contains(b.FIXED_CLASS) ? new S(e) : new O(e)
            }, e
        }(c), N = {
            LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
            LABEL_SHAKE: "mdc-floating-label--shake",
            ROOT: "mdc-floating-label"
        }, D = function (t) {
            function e(n) {
                var i = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return i.shakeAnimationEndHandler_ = function () {
                    return i.handleShakeAnimationEnd_()
                }, i
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return N
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, getWidth: function () {
                            return 0
                        }, registerInteractionHandler: function () {
                        }, deregisterInteractionHandler: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                this.adapter_.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, e.prototype.destroy = function () {
                this.adapter_.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, e.prototype.getWidth = function () {
                return this.adapter_.getWidth()
            }, e.prototype.shake = function (t) {
                var n = e.cssClasses.LABEL_SHAKE;
                t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
            }, e.prototype.float = function (t) {
                var n = e.cssClasses, i = n.LABEL_FLOAT_ABOVE, r = n.LABEL_SHAKE;
                t ? this.adapter_.addClass(i) : (this.adapter_.removeClass(i), this.adapter_.removeClass(r))
            }, e.prototype.handleShakeAnimationEnd_ = function () {
                var t = e.cssClasses.LABEL_SHAKE;
                this.adapter_.removeClass(t)
            }, e
        }(u), H = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.shake = function (t) {
                this.foundation_.shake(t)
            }, e.prototype.float = function (t) {
                this.foundation_.float(t)
            }, e.prototype.getWidth = function () {
                return this.foundation_.getWidth()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new D({
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, getWidth: function () {
                        return function (t) {
                            var e = t;
                            if (null !== e.offsetParent) return e.scrollWidth;
                            var n = e.cloneNode(!0);
                            n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
                            var i = n.scrollWidth;
                            return document.documentElement.removeChild(n), i
                        }(t.root_)
                    }, registerInteractionHandler: function (e, n) {
                        return t.listen(e, n)
                    }, deregisterInteractionHandler: function (e, n) {
                        return t.unlisten(e, n)
                    }
                })
            }, e
        }(c),
        w = {LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active", LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"},
        P = function (t) {
            function e(n) {
                var i = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return i.transitionEndHandler_ = function (t) {
                    return i.handleTransitionEnd(t)
                }, i
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return w
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, hasClass: function () {
                            return !1
                        }, setStyle: function () {
                        }, registerEventHandler: function () {
                        }, deregisterEventHandler: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                this.adapter_.registerEventHandler("transitionend", this.transitionEndHandler_)
            }, e.prototype.destroy = function () {
                this.adapter_.deregisterEventHandler("transitionend", this.transitionEndHandler_)
            }, e.prototype.activate = function () {
                this.adapter_.removeClass(w.LINE_RIPPLE_DEACTIVATING), this.adapter_.addClass(w.LINE_RIPPLE_ACTIVE)
            }, e.prototype.setRippleCenter = function (t) {
                this.adapter_.setStyle("transform-origin", t + "px center")
            }, e.prototype.deactivate = function () {
                this.adapter_.addClass(w.LINE_RIPPLE_DEACTIVATING)
            }, e.prototype.handleTransitionEnd = function (t) {
                var e = this.adapter_.hasClass(w.LINE_RIPPLE_DEACTIVATING);
                "opacity" === t.propertyName && e && (this.adapter_.removeClass(w.LINE_RIPPLE_ACTIVE), this.adapter_.removeClass(w.LINE_RIPPLE_DEACTIVATING))
            }, e
        }(u), x = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.activate = function () {
                this.foundation_.activate()
            }, e.prototype.deactivate = function () {
                this.foundation_.deactivate()
            }, e.prototype.setRippleCenter = function (t) {
                this.foundation_.setRippleCenter(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new P({
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, hasClass: function (e) {
                        return t.root_.classList.contains(e)
                    }, setStyle: function (e, n) {
                        return t.root_.style.setProperty(e, n)
                    }, registerEventHandler: function (e, n) {
                        return t.listen(e, n)
                    }, deregisterEventHandler: function (e, n) {
                        return t.unlisten(e, n)
                    }
                })
            }, e
        }(c), F = {NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"}, M = {NOTCH_ELEMENT_PADDING: 8}, B = {
            NO_LABEL: "mdc-notched-outline--no-label",
            OUTLINE_NOTCHED: "mdc-notched-outline--notched",
            OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
        }, V = function (t) {
            function e(n) {
                return t.call(this, o({}, e.defaultAdapter, n)) || this
            }

            return r(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return F
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return B
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return M
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, setNotchWidthProperty: function () {
                        }, removeNotchWidthProperty: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.notch = function (t) {
                var n = e.cssClasses.OUTLINE_NOTCHED;
                t > 0 && (t += M.NOTCH_ELEMENT_PADDING), this.adapter_.setNotchWidthProperty(t), this.adapter_.addClass(n)
            }, e.prototype.closeNotch = function () {
                var t = e.cssClasses.OUTLINE_NOTCHED;
                this.adapter_.removeClass(t), this.adapter_.removeNotchWidthProperty()
            }, e
        }(u), k = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialSyncWithDOM = function () {
                this.notchElement_ = this.root_.querySelector(F.NOTCH_ELEMENT_SELECTOR);
                var t = this.root_.querySelector("." + D.cssClasses.ROOT);
                t ? (t.style.transitionDuration = "0s", this.root_.classList.add(B.OUTLINE_UPGRADED), requestAnimationFrame((function () {
                    t.style.transitionDuration = ""
                }))) : this.root_.classList.add(B.NO_LABEL)
            }, e.prototype.notch = function (t) {
                this.foundation_.notch(t)
            }, e.prototype.closeNotch = function () {
                this.foundation_.closeNotch()
            }, e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new V({
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, setNotchWidthProperty: function (e) {
                        return t.notchElement_.style.setProperty("width", e + "px")
                    }, removeNotchWidthProperty: function () {
                        return t.notchElement_.style.removeProperty("width")
                    }
                })
            }, e
        }(c), U = {ROOT: "mdc-text-field-character-counter"}, j = {ROOT_SELECTOR: "." + U.ROOT}, G = function (t) {
            function e(n) {
                return t.call(this, o({}, e.defaultAdapter, n)) || this
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return U
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return j
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        setContent: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.setCounterValue = function (t, e) {
                t = Math.min(t, e), this.adapter_.setContent(t + " / " + e)
            }, e
        }(u), q = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundation", {
                get: function () {
                    return this.foundation_
                }, enumerable: !0, configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new G({
                    setContent: function (e) {
                        t.root_.textContent = e
                    }
                })
            }, e
        }(c), z = {
            ARIA_CONTROLS: "aria-controls",
            INPUT_SELECTOR: ".mdc-text-field__input",
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
        }, W = {
            DENSE: "mdc-text-field--dense",
            DISABLED: "mdc-text-field--disabled",
            FOCUSED: "mdc-text-field--focused",
            FULLWIDTH: "mdc-text-field--fullwidth",
            HELPER_LINE: "mdc-text-field-helper-line",
            INVALID: "mdc-text-field--invalid",
            NO_LABEL: "mdc-text-field--no-label",
            OUTLINED: "mdc-text-field--outlined",
            ROOT: "mdc-text-field",
            TEXTAREA: "mdc-text-field--textarea",
            WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
            WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
        }, X = {DENSE_LABEL_SCALE: .923, LABEL_SCALE: .75},
        K = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
        Y = ["color", "date", "datetime-local", "month", "range", "time", "week"], Z = ["mousedown", "touchstart"],
        Q = ["click", "keydown"], J = function (t) {
            function e(n, i) {
                void 0 === i && (i = {});
                var r = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return r.isFocused_ = !1, r.receivedUserInput_ = !1, r.isValid_ = !0, r.useNativeValidation_ = !0, r.helperText_ = i.helperText, r.characterCounter_ = i.characterCounter, r.leadingIcon_ = i.leadingIcon, r.trailingIcon_ = i.trailingIcon, r.inputFocusHandler_ = function () {
                    return r.activateFocus()
                }, r.inputBlurHandler_ = function () {
                    return r.deactivateFocus()
                }, r.inputInputHandler_ = function () {
                    return r.handleInput()
                }, r.setPointerXOffset_ = function (t) {
                    return r.setTransformOrigin(t)
                }, r.textFieldInteractionHandler_ = function () {
                    return r.handleTextFieldInteraction()
                }, r.validationAttributeChangeHandler_ = function (t) {
                    return r.handleValidationAttributeChange(t)
                }, r
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return W
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return z
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return X
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldAlwaysFloat_", {
                get: function () {
                    var t = this.getNativeInput_().type;
                    return Y.indexOf(t) >= 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldFloat", {
                get: function () {
                    return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldShake", {
                get: function () {
                    return !this.isFocused_ && !this.isValid() && !!this.getValue()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, hasClass: function () {
                            return !0
                        }, registerTextFieldInteractionHandler: function () {
                        }, deregisterTextFieldInteractionHandler: function () {
                        }, registerInputInteractionHandler: function () {
                        }, deregisterInputInteractionHandler: function () {
                        }, registerValidationAttributeChangeHandler: function () {
                            return new MutationObserver((function () {
                            }))
                        }, deregisterValidationAttributeChangeHandler: function () {
                        }, getNativeInput: function () {
                            return null
                        }, isFocused: function () {
                            return !1
                        }, activateLineRipple: function () {
                        }, deactivateLineRipple: function () {
                        }, setLineRippleTransformOrigin: function () {
                        }, shakeLabel: function () {
                        }, floatLabel: function () {
                        }, hasLabel: function () {
                            return !1
                        }, getLabelWidth: function () {
                            return 0
                        }, hasOutline: function () {
                            return !1
                        }, notchOutline: function () {
                        }, closeOutline: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.adapter_.isFocused() ? this.inputFocusHandler_() : this.adapter_.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter_.floatLabel(!0)), this.adapter_.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.registerInputInteractionHandler("input", this.inputInputHandler_), Z.forEach((function (e) {
                    t.adapter_.registerInputInteractionHandler(e, t.setPointerXOffset_)
                })), Q.forEach((function (e) {
                    t.adapter_.registerTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
                })), this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.destroy = function () {
                var t = this;
                this.adapter_.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.deregisterInputInteractionHandler("input", this.inputInputHandler_), Z.forEach((function (e) {
                    t.adapter_.deregisterInputInteractionHandler(e, t.setPointerXOffset_)
                })), Q.forEach((function (e) {
                    t.adapter_.deregisterTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
                })), this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)
            }, e.prototype.handleTextFieldInteraction = function () {
                var t = this.adapter_.getNativeInput();
                t && t.disabled || (this.receivedUserInput_ = !0)
            }, e.prototype.handleValidationAttributeChange = function (t) {
                var e = this;
                t.some((function (t) {
                    return K.indexOf(t) > -1 && (e.styleValidity_(!0), !0)
                })), t.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.notchOutline = function (t) {
                if (this.adapter_.hasOutline()) if (t) {
                    var e = this.adapter_.hasClass(W.DENSE) ? X.DENSE_LABEL_SCALE : X.LABEL_SCALE,
                        n = this.adapter_.getLabelWidth() * e;
                    this.adapter_.notchOutline(n)
                } else this.adapter_.closeOutline()
            }, e.prototype.activateFocus = function () {
                this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter_.activateLineRipple(), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.helperText_ && this.helperText_.showToScreenReader()
            }, e.prototype.setTransformOrigin = function (t) {
                var e = t.touches, n = e ? e[0] : t, i = n.target.getBoundingClientRect(), r = n.clientX - i.left;
                this.adapter_.setLineRippleTransformOrigin(r)
            }, e.prototype.handleInput = function () {
                this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length)
            }, e.prototype.autoCompleteFocus = function () {
                this.receivedUserInput_ || this.activateFocus()
            }, e.prototype.deactivateFocus = function () {
                this.isFocused_ = !1, this.adapter_.deactivateLineRipple();
                var t = this.isValid();
                this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1)
            }, e.prototype.getValue = function () {
                return this.getNativeInput_().value
            }, e.prototype.setValue = function (t) {
                this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length);
                var e = this.isValid();
                this.styleValidity_(e), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake))
            }, e.prototype.isValid = function () {
                return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_
            }, e.prototype.setValid = function (t) {
                this.isValid_ = t, this.styleValidity_(t);
                var e = !t && !this.isFocused_ && !!this.getValue();
                this.adapter_.hasLabel() && this.adapter_.shakeLabel(e)
            }, e.prototype.setUseNativeValidation = function (t) {
                this.useNativeValidation_ = t
            }, e.prototype.isDisabled = function () {
                return this.getNativeInput_().disabled
            }, e.prototype.setDisabled = function (t) {
                this.getNativeInput_().disabled = t, this.styleDisabled_(t)
            }, e.prototype.setHelperTextContent = function (t) {
                this.helperText_ && this.helperText_.setContent(t)
            }, e.prototype.setLeadingIconAriaLabel = function (t) {
                this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t)
            }, e.prototype.setLeadingIconContent = function (t) {
                this.leadingIcon_ && this.leadingIcon_.setContent(t)
            }, e.prototype.setTrailingIconAriaLabel = function (t) {
                this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t)
            }, e.prototype.setTrailingIconContent = function (t) {
                this.trailingIcon_ && this.trailingIcon_.setContent(t)
            }, e.prototype.setCharacterCounter_ = function (t) {
                if (this.characterCounter_) {
                    var e = this.getNativeInput_().maxLength;
                    if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
                    this.characterCounter_.setCounterValue(t, e)
                }
            }, e.prototype.isBadInput_ = function () {
                return this.getNativeInput_().validity.badInput || !1
            }, e.prototype.isNativeInputValid_ = function () {
                return this.getNativeInput_().validity.valid
            }, e.prototype.styleValidity_ = function (t) {
                var n = e.cssClasses.INVALID;
                t ? this.adapter_.removeClass(n) : this.adapter_.addClass(n), this.helperText_ && this.helperText_.setValidity(t)
            }, e.prototype.styleFocused_ = function (t) {
                var n = e.cssClasses.FOCUSED;
                t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
            }, e.prototype.styleDisabled_ = function (t) {
                var n = e.cssClasses, i = n.DISABLED, r = n.INVALID;
                t ? (this.adapter_.addClass(i), this.adapter_.removeClass(r)) : this.adapter_.removeClass(i), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t)
            }, e.prototype.getNativeInput_ = function () {
                return (this.adapter_ ? this.adapter_.getNativeInput() : null) || {
                    disabled: !1,
                    maxLength: -1,
                    type: "input",
                    validity: {badInput: !1, valid: !0},
                    value: ""
                }
            }, e
        }(u), $ = {
            HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
            HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
            ROOT: "mdc-text-field-helper-text"
        }, tt = {ARIA_HIDDEN: "aria-hidden", ROLE: "role", ROOT_SELECTOR: "." + $.ROOT}, et = function (t) {
            function e(n) {
                return t.call(this, o({}, e.defaultAdapter, n)) || this
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return $
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return tt
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, removeClass: function () {
                        }, hasClass: function () {
                            return !1
                        }, setAttr: function () {
                        }, removeAttr: function () {
                        }, setContent: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.setContent = function (t) {
                this.adapter_.setContent(t)
            }, e.prototype.setPersistent = function (t) {
                t ? this.adapter_.addClass($.HELPER_TEXT_PERSISTENT) : this.adapter_.removeClass($.HELPER_TEXT_PERSISTENT)
            }, e.prototype.setValidation = function (t) {
                t ? this.adapter_.addClass($.HELPER_TEXT_VALIDATION_MSG) : this.adapter_.removeClass($.HELPER_TEXT_VALIDATION_MSG)
            }, e.prototype.showToScreenReader = function () {
                this.adapter_.removeAttr(tt.ARIA_HIDDEN)
            }, e.prototype.setValidity = function (t) {
                var e = this.adapter_.hasClass($.HELPER_TEXT_PERSISTENT),
                    n = this.adapter_.hasClass($.HELPER_TEXT_VALIDATION_MSG) && !t;
                n ? this.adapter_.setAttr(tt.ROLE, "alert") : this.adapter_.removeAttr(tt.ROLE), e || n || this.hide_()
            }, e.prototype.hide_ = function () {
                this.adapter_.setAttr(tt.ARIA_HIDDEN, "true")
            }, e
        }(u), nt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundation", {
                get: function () {
                    return this.foundation_
                }, enumerable: !0, configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new et({
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, hasClass: function (e) {
                        return t.root_.classList.contains(e)
                    }, setAttr: function (e, n) {
                        return t.root_.setAttribute(e, n)
                    }, removeAttr: function (e) {
                        return t.root_.removeAttribute(e)
                    }, setContent: function (e) {
                        t.root_.textContent = e
                    }
                })
            }, e
        }(c), it = {ICON_EVENT: "MDCTextField:icon", ICON_ROLE: "button"}, rt = {ROOT: "mdc-text-field__icon"},
        ot = ["click", "keydown"], at = function (t) {
            function e(n) {
                var i = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return i.savedTabIndex_ = null, i.interactionHandler_ = function (t) {
                    return i.handleInteraction(t)
                }, i
            }

            return r(e, t), Object.defineProperty(e, "strings", {
                get: function () {
                    return it
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return rt
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        getAttr: function () {
                            return null
                        }, setAttr: function () {
                        }, removeAttr: function () {
                        }, setContent: function () {
                        }, registerInteractionHandler: function () {
                        }, deregisterInteractionHandler: function () {
                        }, notifyIconAction: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.init = function () {
                var t = this;
                this.savedTabIndex_ = this.adapter_.getAttr("tabindex"), ot.forEach((function (e) {
                    t.adapter_.registerInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.destroy = function () {
                var t = this;
                ot.forEach((function (e) {
                    t.adapter_.deregisterInteractionHandler(e, t.interactionHandler_)
                }))
            }, e.prototype.setDisabled = function (t) {
                this.savedTabIndex_ && (t ? (this.adapter_.setAttr("tabindex", "-1"), this.adapter_.removeAttr("role")) : (this.adapter_.setAttr("tabindex", this.savedTabIndex_), this.adapter_.setAttr("role", it.ICON_ROLE)))
            }, e.prototype.setAriaLabel = function (t) {
                this.adapter_.setAttr("aria-label", t)
            }, e.prototype.setContent = function (t) {
                this.adapter_.setContent(t)
            }, e.prototype.handleInteraction = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                ("click" === t.type || e) && (t.preventDefault(), this.adapter_.notifyIconAction())
            }, e
        }(u), st = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "foundation", {
                get: function () {
                    return this.foundation_
                }, enumerable: !0, configurable: !0
            }), e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new at({
                    getAttr: function (e) {
                        return t.root_.getAttribute(e)
                    }, setAttr: function (e, n) {
                        return t.root_.setAttribute(e, n)
                    }, removeAttr: function (e) {
                        return t.root_.removeAttribute(e)
                    }, setContent: function (e) {
                        t.root_.textContent = e
                    }, registerInteractionHandler: function (e, n) {
                        return t.listen(e, n)
                    }, deregisterInteractionHandler: function (e, n) {
                        return t.unlisten(e, n)
                    }, notifyIconAction: function () {
                        return t.emit(at.strings.ICON_EVENT, {}, !0)
                    }
                })
            }, e
        }(c), ut = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t, e, n, i, r, o, a) {
                void 0 === t && (t = function (t, e) {
                    return new I(t, e)
                }), void 0 === e && (e = function (t) {
                    return new x(t)
                }), void 0 === n && (n = function (t) {
                    return new nt(t)
                }), void 0 === i && (i = function (t) {
                    return new q(t)
                }), void 0 === r && (r = function (t) {
                    return new st(t)
                }), void 0 === o && (o = function (t) {
                    return new H(t)
                }), void 0 === a && (a = function (t) {
                    return new k(t)
                }), this.input_ = this.root_.querySelector(z.INPUT_SELECTOR);
                var s = this.root_.querySelector(z.LABEL_SELECTOR);
                this.label_ = s ? o(s) : null;
                var u = this.root_.querySelector(z.LINE_RIPPLE_SELECTOR);
                this.lineRipple_ = u ? e(u) : null;
                var c = this.root_.querySelector(z.OUTLINE_SELECTOR);
                this.outline_ = c ? a(c) : null;
                var l = et.strings, d = this.root_.nextElementSibling, p = d && d.classList.contains(W.HELPER_LINE),
                    _ = p && d && d.querySelector(l.ROOT_SELECTOR);
                this.helperText_ = _ ? n(_) : null;
                var h = G.strings, f = this.root_.querySelector(h.ROOT_SELECTOR);
                !f && p && d && (f = d.querySelector(h.ROOT_SELECTOR)), this.characterCounter_ = f ? i(f) : null;
                var m = this.root_.querySelector(z.LEADING_ICON_SELECTOR);
                this.leadingIcon_ = m ? r(m) : null;
                var g = this.root_.querySelector(z.TRAILING_ICON_SELECTOR);
                this.trailingIcon_ = g ? r(g) : null, this.ripple = this.createRipple_(t)
            }, e.prototype.destroy = function () {
                this.ripple && this.ripple.destroy(), this.lineRipple_ && this.lineRipple_.destroy(), this.helperText_ && this.helperText_.destroy(), this.characterCounter_ && this.characterCounter_.destroy(), this.leadingIcon_ && this.leadingIcon_.destroy(), this.trailingIcon_ && this.trailingIcon_.destroy(), this.label_ && this.label_.destroy(), this.outline_ && this.outline_.destroy(), t.prototype.destroy.call(this)
            }, e.prototype.initialSyncWithDOM = function () {
                this.disabled = this.input_.disabled
            }, Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.foundation_.getValue()
                }, set: function (t) {
                    this.foundation_.setValue(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "disabled", {
                get: function () {
                    return this.foundation_.isDisabled()
                }, set: function (t) {
                    this.foundation_.setDisabled(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "valid", {
                get: function () {
                    return this.foundation_.isValid()
                }, set: function (t) {
                    this.foundation_.setValid(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "required", {
                get: function () {
                    return this.input_.required
                }, set: function (t) {
                    this.input_.required = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pattern", {
                get: function () {
                    return this.input_.pattern
                }, set: function (t) {
                    this.input_.pattern = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "minLength", {
                get: function () {
                    return this.input_.minLength
                }, set: function (t) {
                    this.input_.minLength = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "maxLength", {
                get: function () {
                    return this.input_.maxLength
                }, set: function (t) {
                    t < 0 ? this.input_.removeAttribute("maxLength") : this.input_.maxLength = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "min", {
                get: function () {
                    return this.input_.min
                }, set: function (t) {
                    this.input_.min = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "max", {
                get: function () {
                    return this.input_.max
                }, set: function (t) {
                    this.input_.max = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "step", {
                get: function () {
                    return this.input_.step
                }, set: function (t) {
                    this.input_.step = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "helperTextContent", {
                set: function (t) {
                    this.foundation_.setHelperTextContent(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
                set: function (t) {
                    this.foundation_.setLeadingIconAriaLabel(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "leadingIconContent", {
                set: function (t) {
                    this.foundation_.setLeadingIconContent(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "trailingIconAriaLabel", {
                set: function (t) {
                    this.foundation_.setTrailingIconAriaLabel(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "trailingIconContent", {
                set: function (t) {
                    this.foundation_.setTrailingIconContent(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "useNativeValidation", {
                set: function (t) {
                    this.foundation_.setUseNativeValidation(t)
                }, enumerable: !0, configurable: !0
            }), e.prototype.focus = function () {
                this.input_.focus()
            }, e.prototype.layout = function () {
                var t = this.foundation_.shouldFloat;
                this.foundation_.notchOutline(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = o({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
                return new J(t, this.getFoundationMap_())
            }, e.prototype.getRootAdapterMethods_ = function () {
                var t = this;
                return {
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }, hasClass: function (e) {
                        return t.root_.classList.contains(e)
                    }, registerTextFieldInteractionHandler: function (e, n) {
                        return t.listen(e, n)
                    }, deregisterTextFieldInteractionHandler: function (e, n) {
                        return t.unlisten(e, n)
                    }, registerValidationAttributeChangeHandler: function (e) {
                        var n = new MutationObserver((function (t) {
                            return e(function (t) {
                                return t.map((function (t) {
                                    return t.attributeName
                                })).filter((function (t) {
                                    return t
                                }))
                            }(t))
                        }));
                        return n.observe(t.input_, {attributes: !0}), n
                    }, deregisterValidationAttributeChangeHandler: function (t) {
                        return t.disconnect()
                    }
                }
            }, e.prototype.getInputAdapterMethods_ = function () {
                var t = this;
                return {
                    getNativeInput: function () {
                        return t.input_
                    }, isFocused: function () {
                        return document.activeElement === t.input_
                    }, registerInputInteractionHandler: function (e, n) {
                        return t.input_.addEventListener(e, n, l())
                    }, deregisterInputInteractionHandler: function (e, n) {
                        return t.input_.removeEventListener(e, n, l())
                    }
                }
            }, e.prototype.getLabelAdapterMethods_ = function () {
                var t = this;
                return {
                    floatLabel: function (e) {
                        return t.label_ && t.label_.float(e)
                    }, getLabelWidth: function () {
                        return t.label_ ? t.label_.getWidth() : 0
                    }, hasLabel: function () {
                        return Boolean(t.label_)
                    }, shakeLabel: function (e) {
                        return t.label_ && t.label_.shake(e)
                    }
                }
            }, e.prototype.getLineRippleAdapterMethods_ = function () {
                var t = this;
                return {
                    activateLineRipple: function () {
                        t.lineRipple_ && t.lineRipple_.activate()
                    }, deactivateLineRipple: function () {
                        t.lineRipple_ && t.lineRipple_.deactivate()
                    }, setLineRippleTransformOrigin: function (e) {
                        t.lineRipple_ && t.lineRipple_.setRippleCenter(e)
                    }
                }
            }, e.prototype.getOutlineAdapterMethods_ = function () {
                var t = this;
                return {
                    closeOutline: function () {
                        return t.outline_ && t.outline_.closeNotch()
                    }, hasOutline: function () {
                        return Boolean(t.outline_)
                    }, notchOutline: function (e) {
                        return t.outline_ && t.outline_.notch(e)
                    }
                }
            }, e.prototype.getFoundationMap_ = function () {
                return {
                    characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : void 0,
                    helperText: this.helperText_ ? this.helperText_.foundation : void 0,
                    leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : void 0,
                    trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : void 0
                }
            }, e.prototype.createRipple_ = function (t) {
                var e = this, n = this.root_.classList.contains(W.TEXTAREA), i = this.root_.classList.contains(W.OUTLINED);
                if (n || i) return null;
                var r = o({}, I.createAdapter(this), {
                    isSurfaceActive: function () {
                        return p(e.input_, ":active")
                    }, registerInteractionHandler: function (t, n) {
                        return e.input_.addEventListener(t, n, l())
                    }, deregisterInteractionHandler: function (t, n) {
                        return e.input_.removeEventListener(t, n, l())
                    }
                });
                return t(this.root_, new E(r))
            }, e
        }(c), ct = {CLOSING: "mdc-snackbar--closing", OPEN: "mdc-snackbar--open", OPENING: "mdc-snackbar--opening"}, lt = {
            ACTION_SELECTOR: ".mdc-snackbar__action",
            ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
            CLOSED_EVENT: "MDCSnackbar:closed",
            CLOSING_EVENT: "MDCSnackbar:closing",
            DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
            LABEL_SELECTOR: ".mdc-snackbar__label",
            OPENED_EVENT: "MDCSnackbar:opened",
            OPENING_EVENT: "MDCSnackbar:opening",
            REASON_ACTION: "action",
            REASON_DISMISS: "dismiss",
            SURFACE_SELECTOR: ".mdc-snackbar__surface"
        }, dt = {
            DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
            INDETERMINATE: -1,
            MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
            MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
            SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
            SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
            ARIA_LIVE_DELAY_MS: 1e3
        }, pt = ct.OPENING, _t = ct.OPEN, ht = ct.CLOSING, ft = lt.REASON_ACTION, mt = lt.REASON_DISMISS,
        gt = function (t) {
            function e(n) {
                var i = t.call(this, o({}, e.defaultAdapter, n)) || this;
                return i.isOpen_ = !1, i.animationFrame_ = 0, i.animationTimer_ = 0, i.autoDismissTimer_ = 0, i.autoDismissTimeoutMs_ = dt.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, i.closeOnEscape_ = !0, i
            }

            return r(e, t), Object.defineProperty(e, "cssClasses", {
                get: function () {
                    return ct
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function () {
                    return lt
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function () {
                    return dt
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function () {
                    return {
                        addClass: function () {
                        }, announce: function () {
                        }, notifyClosed: function () {
                        }, notifyClosing: function () {
                        }, notifyOpened: function () {
                        }, notifyOpening: function () {
                        }, removeClass: function () {
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                this.clearAutoDismissTimer_(), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = 0, this.adapter_.removeClass(pt), this.adapter_.removeClass(_t), this.adapter_.removeClass(ht)
            }, e.prototype.open = function () {
                var t = this;
                this.clearAutoDismissTimer_(), this.isOpen_ = !0, this.adapter_.notifyOpening(), this.adapter_.removeClass(ht), this.adapter_.addClass(pt), this.adapter_.announce(), this.runNextAnimationFrame_((function () {
                    t.adapter_.addClass(_t), t.animationTimer_ = setTimeout((function () {
                        var e = t.getTimeoutMs();
                        t.handleAnimationTimerEnd_(), t.adapter_.notifyOpened(), e !== dt.INDETERMINATE && (t.autoDismissTimer_ = setTimeout((function () {
                            t.close(mt)
                        }), e))
                    }), dt.SNACKBAR_ANIMATION_OPEN_TIME_MS)
                }))
            }, e.prototype.close = function (t) {
                var e = this;
                void 0 === t && (t = ""), this.isOpen_ && (cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, this.clearAutoDismissTimer_(), this.isOpen_ = !1, this.adapter_.notifyClosing(t), this.adapter_.addClass(ct.CLOSING), this.adapter_.removeClass(ct.OPEN), this.adapter_.removeClass(ct.OPENING), clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout((function () {
                    e.handleAnimationTimerEnd_(), e.adapter_.notifyClosed(t)
                }), dt.SNACKBAR_ANIMATION_CLOSE_TIME_MS))
            }, e.prototype.isOpen = function () {
                return this.isOpen_
            }, e.prototype.getTimeoutMs = function () {
                return this.autoDismissTimeoutMs_
            }, e.prototype.setTimeoutMs = function (t) {
                var e = dt.MIN_AUTO_DISMISS_TIMEOUT_MS, n = dt.MAX_AUTO_DISMISS_TIMEOUT_MS;
                if (!(t === dt.INDETERMINATE || t <= n && t >= e)) throw new Error("\n        timeoutMs must be an integer in the range " + e + "–" + n + "\n        (or " + dt.INDETERMINATE + " to disable), but got '" + t + "'");
                this.autoDismissTimeoutMs_ = t
            }, e.prototype.getCloseOnEscape = function () {
                return this.closeOnEscape_
            }, e.prototype.setCloseOnEscape = function (t) {
                this.closeOnEscape_ = t
            }, e.prototype.handleKeyDown = function (t) {
                ("Escape" === t.key || 27 === t.keyCode) && this.getCloseOnEscape() && this.close(mt)
            }, e.prototype.handleActionButtonClick = function (t) {
                this.close(ft)
            }, e.prototype.handleActionIconClick = function (t) {
                this.close(mt)
            }, e.prototype.clearAutoDismissTimer_ = function () {
                clearTimeout(this.autoDismissTimer_), this.autoDismissTimer_ = 0
            }, e.prototype.handleAnimationTimerEnd_ = function () {
                this.animationTimer_ = 0, this.adapter_.removeClass(ct.OPENING), this.adapter_.removeClass(ct.CLOSING)
            }, e.prototype.runNextAnimationFrame_ = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame((function () {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                }))
            }, e
        }(u), vt = dt.ARIA_LIVE_DELAY_MS, yt = lt.ARIA_LIVE_LABEL_TEXT_ATTR;

    function Et(t, e) {
        void 0 === e && (e = t);
        var n = t.getAttribute("aria-live"), i = e.textContent.trim();
        i && n && (t.setAttribute("aria-live", "off"), e.textContent = "", e.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>', e.setAttribute(yt, i), setTimeout((function () {
            t.setAttribute("aria-live", n), e.removeAttribute(yt), e.textContent = i
        }), vt))
    }

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var It = lt.SURFACE_SELECTOR, bt = lt.LABEL_SELECTOR, Tt = lt.ACTION_SELECTOR, At = lt.DISMISS_SELECTOR,
        Ct = lt.OPENING_EVENT, Ot = lt.OPENED_EVENT, St = lt.CLOSING_EVENT, Lt = lt.CLOSED_EVENT, Rt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(e, t), e.attachTo = function (t) {
                return new e(t)
            }, e.prototype.initialize = function (t) {
                void 0 === t && (t = function () {
                    return Et
                }), this.announce_ = t()
            }, e.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.surfaceEl_ = this.root_.querySelector(It), this.labelEl_ = this.root_.querySelector(bt), this.actionEl_ = this.root_.querySelector(Tt), this.handleKeyDown_ = function (e) {
                    return t.foundation_.handleKeyDown(e)
                }, this.handleSurfaceClick_ = function (e) {
                    var n = e.target;
                    t.isActionButton_(n) ? t.foundation_.handleActionButtonClick(e) : t.isActionIcon_(n) && t.foundation_.handleActionIconClick(e)
                }, this.registerKeyDownHandler_(this.handleKeyDown_), this.registerSurfaceClickHandler_(this.handleSurfaceClick_)
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.deregisterKeyDownHandler_(this.handleKeyDown_), this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)
            }, e.prototype.open = function () {
                this.foundation_.open()
            }, e.prototype.close = function (t) {
                void 0 === t && (t = ""), this.foundation_.close(t)
            }, e.prototype.getDefaultFoundation = function () {
                var t = this;
                return new gt({
                    addClass: function (e) {
                        return t.root_.classList.add(e)
                    }, announce: function () {
                        return t.announce_(t.labelEl_)
                    }, notifyClosed: function (e) {
                        return t.emit(Lt, e ? {reason: e} : {})
                    }, notifyClosing: function (e) {
                        return t.emit(St, e ? {reason: e} : {})
                    }, notifyOpened: function () {
                        return t.emit(Ot, {})
                    }, notifyOpening: function () {
                        return t.emit(Ct, {})
                    }, removeClass: function (e) {
                        return t.root_.classList.remove(e)
                    }
                })
            }, Object.defineProperty(e.prototype, "timeoutMs", {
                get: function () {
                    return this.foundation_.getTimeoutMs()
                }, set: function (t) {
                    this.foundation_.setTimeoutMs(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "closeOnEscape", {
                get: function () {
                    return this.foundation_.getCloseOnEscape()
                }, set: function (t) {
                    this.foundation_.setCloseOnEscape(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isOpen", {
                get: function () {
                    return this.foundation_.isOpen()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "labelText", {
                get: function () {
                    return this.labelEl_.textContent
                }, set: function (t) {
                    this.labelEl_.textContent = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "actionButtonText", {
                get: function () {
                    return this.actionEl_.textContent
                }, set: function (t) {
                    this.actionEl_.textContent = t
                }, enumerable: !0, configurable: !0
            }), e.prototype.registerKeyDownHandler_ = function (t) {
                this.listen("keydown", t)
            }, e.prototype.deregisterKeyDownHandler_ = function (t) {
                this.unlisten("keydown", t)
            }, e.prototype.registerSurfaceClickHandler_ = function (t) {
                this.surfaceEl_.addEventListener("click", t)
            }, e.prototype.deregisterSurfaceClickHandler_ = function (t) {
                this.surfaceEl_.removeEventListener("click", t)
            }, e.prototype.isActionButton_ = function (t) {
                return Boolean(d(t, Tt))
            }, e.prototype.isActionIcon_ = function (t) {
                return Boolean(d(t, At))
            }, e
        }(c), Nt = !1, Dt = !1, Ht = null, wt = null, Pt = null, xt = null, Ft = null, Mt = null, Bt = null, Vt = null,
        kt = new Rt(document.querySelector(".snackbar1")), Ut = new Rt(document.querySelector(".snackbar2")),
        jt = new Rt(document.querySelector(".snackbar3")),
        Gt = (new R(document.querySelector(".mdc-top-app-bar")), new ut(document.querySelector(".exam"))),
        qt = new ut(document.querySelector(".subject")), zt = new ut(document.querySelector(".chapter")),
        Wt = new ut(document.querySelector(".lesson")), Xt = new ut(document.querySelector(".topic")),
        Kt = new ut(document.querySelector(".question-text")),
        Yt = (new I(document.querySelector(".save-button")), new I(document.querySelector(".questionImageButton")), new I(document.querySelector(".answerImageButton")), document.querySelector(".save-button")),
        Zt = document.getElementById("questionImageInput"), Qt = document.getElementById("answerImageInput"),
        Jt = document.getElementById("questionImageButton"), $t = document.getElementById("answerImageButton");

    function te(t) {
        Gt.disabled = t, qt.disabled = t, zt.disabled = t, Wt.disabled = t, Xt.disabled = t, Kt.disabled = t, Yt.disabled = t, Jt.disabled = t, $t.disabled = t
    }

    function ee() {
        Nt = !1, Dt = !1, Ht = null, wt = null, Pt = null, xt = null, document.getElementById("questionImageInput").value = "", document.getElementById("answerImageInput").value = "", document.getElementById("answerImage").src = "image/noImageSelected.jpg", document.getElementById("questionImage").src = "image/noImageSelected.jpg"
    }

    function ne() {
        te(!1), kt.close(), Ut.labelText = "Uploading Data Failed", Ut.open()
    }

    Yt.addEventListener("click", (function () {
        if (Gt.valid && qt.valid && zt.valid && Wt.valid && Xt.valid && Kt.valid && Nt && Dt) {
            te(!0), kt.timeoutMs = -1, kt.open();
            var t = firebase.storage().ref().child("images"), e = t.child(Ft).put(Ht, Bt), n = t.child(Mt).put(wt, Vt);
            e.then((function (t) {
                return t.ref.getDownloadURL()
            })).then((function (t) {
                xt = t, n.then((function (t) {
                    return t.ref.getDownloadURL()
                })).then((function (t) {
                    Pt = t, firebase.database().ref("data").push({
                        exam: Gt.value,
                        subject: qt.value,
                        chapter: zt.value,
                        lesson: Wt.value,
                        topic: Xt.value,
                        answerImageURL: Pt,
                        questionImageURL: xt,
                        textFromQuestionImage: Kt.value
                    }, (function (t) {
                        t ? (console.log("DatabaseTaskError"), console.log(t), ne()) : (te(!1), kt.close(), Ut.labelText = "Data Uploaded Successfully", Ut.open(), Gt.value = "", Gt.valid = !0, qt.value = "", qt.valid = !0, zt.value = "", zt.valid = !0, Wt.value = "", Wt.valid = !0, Xt.value = "", Xt.valid = !0, Kt.value = "", Kt.valid = !0, ee())
                    }))
                })).catch((function (t) {
                    ne(), console.log("AnswerImageUploadTaskError"), console.log(t)
                }))
            })).catch((function (t) {
                ne(), console.log("QuestionImageUploadTaskError"), console.log(t)
            }))
        } else jt.open(), Gt.valid || (Gt.valid = !1, Gt.focus()), qt.valid || (qt.valid = !1, qt.focus()), zt.valid || (zt.valid = !1, zt.focus()), Wt.valid || (Wt.valid = !1, Wt.focus()), Xt.valid || (Xt.valid = !1, Xt.focus()), Kt.valid || (Kt.valid = !1, Kt.focus())
    })), Jt.addEventListener("click", (function (t) {
        Zt && Zt.click()
    }), !1), $t.addEventListener("click", (function (t) {
        Qt && Qt.click()
    }), !1), Zt.addEventListener("change", (function () {
        1 === document.getElementById("questionImageInput").files.length ? (Ht = document.getElementById("questionImageInput").files[0], Ft = +new Date + "-" + Ht.name, Bt = {contentType: Ht.type}, document.getElementById("questionImage").style.display = "block", document.getElementById("questionImage").style.width = "20%", document.getElementById("questionImage").style.height = "20%", document.getElementById("questionImage").src = URL.createObjectURL(Ht), document.getElementById("questionImage").onload = function () {
            Nt = !0, URL.revokeObjectURL(document.getElementById("questionImage").src)
        }) : (Nt = !1, ee())
    }), !1), Qt.addEventListener("change", (function () {
        1 === document.getElementById("answerImageInput").files.length ? (wt = document.getElementById("answerImageInput").files[0], Mt = +new Date + "-" + wt.name, Vt = {contentType: wt.type}, document.getElementById("answerImage").style.display = "block", document.getElementById("answerImage").style.width = "20%", document.getElementById("answerImage").style.height = "20%", document.getElementById("answerImage").src = URL.createObjectURL(wt), document.getElementById("answerImage").onload = function () {
            Dt = !0, URL.revokeObjectURL(document.getElementById("answerImage").src)
        }) : (Dt = !1, ee())
    }), !1)
}]);