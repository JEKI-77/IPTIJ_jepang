import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle2;
  }
});

// node_modules/react-animation-on-scroll/dist/esm/components/AnimationOnScroll.js
var import_react = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var animatedClass = "animate__animated";
var serverSide = typeof window === "undefined";
var scrollableParentRefInitialValue = void 0;
if (!serverSide) {
  scrollableParentRefInitialValue = window;
}
var AnimationOnScroll = ({
  offset = 150,
  duration = 1,
  style: styleProps,
  className: classNameProps,
  initiallyVisible = false,
  animateIn,
  afterAnimatedIn,
  animateOut,
  delay = 0,
  animatePreScroll = true,
  afterAnimatedOut,
  scrollableParentSelector,
  animateOnce = false,
  children
}) => {
  const [classes, setClasses] = (0, import_react.useState)(animatedClass);
  const [style, setStyle] = (0, import_react.useState)({
    animationDuration: `${duration}s`,
    opacity: initiallyVisible ? 1 : 0
  });
  const node = (0, import_react.useRef)(null);
  const animating = (0, import_react.useRef)(false);
  const visibilityRef = (0, import_react.useRef)({
    onScreen: false,
    inViewport: false
  });
  const delayedAnimationTORef = (0, import_react.useRef)(void 0);
  const callbackTORef = (0, import_react.useRef)(void 0);
  const scrollableParentRef = (0, import_react.useRef)(scrollableParentRefInitialValue);
  const getElementTop = (0, import_react.useCallback)((elm) => {
    let yPos = 0;
    while (elm && elm.offsetTop !== void 0 && elm.clientTop !== void 0) {
      yPos += elm.offsetTop + elm.clientTop;
      elm = elm.offsetParent;
    }
    return yPos;
  }, []);
  const getScrollPos = (0, import_react.useCallback)(() => {
    if (scrollableParentRef.current.pageYOffset !== void 0) {
      return scrollableParentRef.current.pageYOffset;
    }
    return scrollableParentRef.current.scrollTop;
  }, [scrollableParentRef]);
  const getScrollableParentHeight = (0, import_react.useCallback)(() => {
    if (scrollableParentRef.current.innerHeight !== void 0) {
      return scrollableParentRef.current.innerHeight;
    }
    return scrollableParentRef.current.clientHeight;
  }, [scrollableParentRef]);
  const getViewportTop = (0, import_react.useCallback)(() => {
    return getScrollPos() + offset;
  }, [offset, getScrollPos]);
  const getViewportBottom = (0, import_react.useCallback)(() => {
    return getScrollPos() + getScrollableParentHeight() - offset;
  }, [offset, getScrollPos, getScrollableParentHeight]);
  const isInViewport = (0, import_react.useCallback)((y) => {
    return y >= getViewportTop() && y <= getViewportBottom();
  }, [getViewportTop, getViewportBottom]);
  const isAboveViewport = (0, import_react.useCallback)((y) => {
    return y < getViewportTop();
  }, [getViewportTop]);
  const isBelowViewport = (0, import_react.useCallback)((y) => {
    return y > getViewportBottom();
  }, [getViewportBottom]);
  const inViewport = (0, import_react.useCallback)((elementTop, elementBottom) => {
    return isInViewport(elementTop) || isInViewport(elementBottom) || isAboveViewport(elementTop) && isBelowViewport(elementBottom);
  }, [isInViewport, isAboveViewport, isBelowViewport]);
  const isAboveScreen = (0, import_react.useCallback)((y) => {
    return y < getScrollPos();
  }, [getScrollPos]);
  const isBelowScreen = (0, import_react.useCallback)((y) => {
    return y > getScrollPos() + getScrollableParentHeight();
  }, [getScrollPos, getScrollableParentHeight]);
  const onScreen = (0, import_react.useCallback)((elementTop, elementBottom) => {
    return !isAboveScreen(elementBottom) && !isBelowScreen(elementTop);
  }, [isAboveScreen, isBelowScreen]);
  const getVisibility = (0, import_react.useCallback)(() => {
    const elementTop = getElementTop(node.current) - getElementTop(scrollableParentRef.current);
    const elementBottom = elementTop + node.current.clientHeight;
    return {
      inViewport: inViewport(elementTop, elementBottom),
      onScreen: onScreen(elementTop, elementBottom)
    };
  }, [getElementTop, node, inViewport, onScreen, scrollableParentRef]);
  const visibilityHasChanged = (0, import_react.useCallback)((previousVis, currentVis) => {
    return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
  }, []);
  const animate = (0, import_react.useCallback)((animation, callback) => {
    delayedAnimationTORef.current = setTimeout(() => {
      animating.current = true;
      setClasses(`${animatedClass} ${animation}`);
      setStyle({
        animationDuration: `${duration}s`
      });
      callbackTORef.current = setTimeout(callback, duration * 1e3);
    }, delay);
  }, [animating, delay, duration]);
  const animateInTrigger = (0, import_react.useCallback)((callback) => {
    animate(animateIn, () => {
      if (!animateOnce) {
        setStyle({
          animationDuration: `${duration}s`,
          opacity: 1
        });
        animating.current = false;
      }
      const vis = getVisibility();
      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animateIn, animateOnce, duration, animate, getVisibility]);
  const animateOutTrigger = (0, import_react.useCallback)((callback) => {
    animate(animateOut, () => {
      setClasses(animatedClass);
      setStyle({
        animationDuration: `${duration}s`,
        opacity: 0
      });
      const vis = getVisibility();
      if (vis.inViewport && animateIn) {
        animateInTrigger(afterAnimatedIn);
      } else {
        animating.current = false;
      }
      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animate, animateIn, duration, afterAnimatedIn, animateInTrigger, animateOut, getVisibility]);
  const handleScroll = (0, import_react.useCallback)(() => {
    if (!animating.current) {
      const {
        current: visibility
      } = visibilityRef;
      const currentVis = getVisibility();
      if (visibilityHasChanged(visibility, currentVis)) {
        clearTimeout(delayedAnimationTORef.current);
        if (!currentVis.onScreen) {
          setClasses(animatedClass);
          setStyle({
            animationDuration: `${duration}s`,
            opacity: initiallyVisible ? 1 : 0
          });
        } else if (currentVis.inViewport && animateIn) {
          animateInTrigger(afterAnimatedIn);
        } else if (currentVis.onScreen && visibility.inViewport && animateOut && node.current.style.opacity === "1") {
          animateOutTrigger(afterAnimatedOut);
        }
        visibilityRef.current = currentVis;
      }
    }
  }, [afterAnimatedIn, afterAnimatedOut, animateIn, animateInTrigger, animateOut, duration, initiallyVisible, visibilityHasChanged, animateOutTrigger, getVisibility]);
  const listener = (0, import_react.useMemo)(() => (0, import_lodash.default)(() => {
    handleScroll();
  }, 50), [handleScroll]);
  (0, import_react.useEffect)(() => {
    if (!serverSide) {
      const parentSelector = scrollableParentSelector;
      scrollableParentRef.current = parentSelector ? document.querySelector(parentSelector) : window;
      if (scrollableParentRef.current && scrollableParentRef.current.addEventListener) {
        scrollableParentRef.current.addEventListener("scroll", listener);
      } else {
        console.warn(`Cannot find element by locator: ${scrollableParentSelector}`);
      }
      if (animatePreScroll) {
        handleScroll();
      }
      return () => {
        clearTimeout(delayedAnimationTORef.current);
        clearTimeout(callbackTORef.current);
        if (window && window.removeEventListener) {
          window.removeEventListener("scroll", listener);
        }
      };
    }
  }, [handleScroll, scrollableParentSelector, scrollableParentRef, listener, animatePreScroll]);
  return import_react.default.createElement("div", {
    ref: node,
    className: classNameProps ? `${classNameProps} ${classes}` : classes,
    style: Object.assign({}, style, styleProps)
  }, children);
};
export {
  AnimationOnScroll
};
//# sourceMappingURL=react-animation-on-scroll.js.map
