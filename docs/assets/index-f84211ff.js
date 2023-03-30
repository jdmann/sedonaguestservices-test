function Cx(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r]
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const o in n)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o)
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => n[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const i = r(o)
    fetch(o.href, i)
  }
})()
var La =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function _x(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var zi = {},
  Tx = {
    get exports() {
      return zi
    },
    set exports(e) {
      zi = e
    },
  },
  Sl = {},
  k = {},
  Px = {
    get exports() {
      return k
    },
    set exports(e) {
      k = e
    },
  },
  W = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fa = Symbol.for('react.element'),
  Ex = Symbol.for('react.portal'),
  $x = Symbol.for('react.fragment'),
  Ax = Symbol.for('react.strict_mode'),
  Rx = Symbol.for('react.profiler'),
  zx = Symbol.for('react.provider'),
  Mx = Symbol.for('react.context'),
  Lx = Symbol.for('react.forward_ref'),
  Dx = Symbol.for('react.suspense'),
  Bx = Symbol.for('react.memo'),
  Fx = Symbol.for('react.lazy'),
  nh = Symbol.iterator
function Ix(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (nh && e[nh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Tg = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pg = Object.assign,
  Eg = {}
function Ro(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = Eg), (this.updater = r || Tg)
}
Ro.prototype.isReactComponent = {}
Ro.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function $g() {}
$g.prototype = Ro.prototype
function Xd(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = Eg), (this.updater = r || Tg)
}
var qd = (Xd.prototype = new $g())
qd.constructor = Xd
Pg(qd, Ro.prototype)
qd.isPureReactComponent = !0
var oh = Array.isArray,
  Ag = Object.prototype.hasOwnProperty,
  Zd = { current: null },
  Rg = { key: !0, ref: !0, __self: !0, __source: !0 }
function zg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Ag.call(t, n) && !Rg.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: fa, type: e, key: i, ref: a, props: o, _owner: Zd.current }
}
function Vx(e, t) {
  return { $$typeof: fa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Jd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fa
}
function Ox(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var ih = /\/+/g
function Su(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Ox('' + e.key) : t.toString(36)
}
function cs(e, t, r, n, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case fa:
          case Ex:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + Su(a, 0) : n),
      oh(o)
        ? ((r = ''),
          e != null && (r = e.replace(ih, '$&/') + '/'),
          cs(o, t, r, '', function (u) {
            return u
          }))
        : o != null &&
          (Jd(o) &&
            (o = Vx(
              o,
              r +
                (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(ih, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), oh(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + Su(i, s)
      a += cs(i, t, r, l, o)
    }
  else if (((l = Ix(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Su(i, s++)), (a += cs(i, t, r, l, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function Da(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    cs(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function Nx(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var et = { current: null },
  ds = { transition: null },
  jx = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: ds, ReactCurrentOwner: Zd }
W.Children = {
  map: Da,
  forEach: function (e, t, r) {
    Da(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      Da(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Da(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Jd(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
W.Component = Ro
W.Fragment = $x
W.Profiler = Rx
W.PureComponent = Xd
W.StrictMode = Ax
W.Suspense = Dx
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jx
W.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var n = Pg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Zd.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Ag.call(t, l) &&
        !Rg.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    n.children = s
  }
  return { $$typeof: fa, type: e.type, key: o, ref: i, props: n, _owner: a }
}
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Mx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zx, _context: e }),
    (e.Consumer = e)
  )
}
W.createElement = zg
W.createFactory = function (e) {
  var t = zg.bind(null, e)
  return (t.type = e), t
}
W.createRef = function () {
  return { current: null }
}
W.forwardRef = function (e) {
  return { $$typeof: Lx, render: e }
}
W.isValidElement = Jd
W.lazy = function (e) {
  return { $$typeof: Fx, _payload: { _status: -1, _result: e }, _init: Nx }
}
W.memo = function (e, t) {
  return { $$typeof: Bx, type: e, compare: t === void 0 ? null : t }
}
W.startTransition = function (e) {
  var t = ds.transition
  ds.transition = {}
  try {
    e()
  } finally {
    ds.transition = t
  }
}
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
W.useCallback = function (e, t) {
  return et.current.useCallback(e, t)
}
W.useContext = function (e) {
  return et.current.useContext(e)
}
W.useDebugValue = function () {}
W.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e)
}
W.useEffect = function (e, t) {
  return et.current.useEffect(e, t)
}
W.useId = function () {
  return et.current.useId()
}
W.useImperativeHandle = function (e, t, r) {
  return et.current.useImperativeHandle(e, t, r)
}
W.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t)
}
W.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t)
}
W.useMemo = function (e, t) {
  return et.current.useMemo(e, t)
}
W.useReducer = function (e, t, r) {
  return et.current.useReducer(e, t, r)
}
W.useRef = function (e) {
  return et.current.useRef(e)
}
W.useState = function (e) {
  return et.current.useState(e)
}
W.useSyncExternalStore = function (e, t, r) {
  return et.current.useSyncExternalStore(e, t, r)
}
W.useTransition = function () {
  return et.current.useTransition()
}
W.version = '18.2.0'
;(function (e) {
  e.exports = W
})(Px)
const st = _x(k),
  ah = Cx({ __proto__: null, default: st }, [k])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wx = k,
  Ux = Symbol.for('react.element'),
  Hx = Symbol.for('react.fragment'),
  Gx = Object.prototype.hasOwnProperty,
  Kx = Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yx = { key: !0, ref: !0, __self: !0, __source: !0 }
function Mg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) Gx.call(t, n) && !Yx.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: Ux, type: e, key: i, ref: a, props: o, _owner: Kx.current }
}
Sl.Fragment = Hx
Sl.jsx = Mg
Sl.jsxs = Mg
;(function (e) {
  e.exports = Sl
})(Tx)
const Qx = zi.Fragment,
  E = zi.jsx,
  qe = zi.jsxs
function Xx(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function qx(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Zx = (function () {
    function e(r) {
      var n = this
      ;(this._insertTag = function (o) {
        var i
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o)
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag)
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qx(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = Xx(o)
          try {
            i.insertRule(n, i.cssRules.length)
          } catch {}
        } else o.appendChild(document.createTextNode(n))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  je = '-ms-',
  zs = '-moz-',
  X = '-webkit-',
  Lg = 'comm',
  ef = 'rule',
  tf = 'decl',
  Jx = '@import',
  Dg = '@keyframes',
  ew = Math.abs,
  bl = String.fromCharCode,
  tw = Object.assign
function rw(e, t) {
  return Fe(e, 0) ^ 45
    ? (((((((t << 2) ^ Fe(e, 0)) << 2) ^ Fe(e, 1)) << 2) ^ Fe(e, 2)) << 2) ^ Fe(e, 3)
    : 0
}
function Bg(e) {
  return e.trim()
}
function nw(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function Z(e, t, r) {
  return e.replace(t, r)
}
function wc(e, t) {
  return e.indexOf(t)
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0
}
function Mi(e, t, r) {
  return e.slice(t, r)
}
function er(e) {
  return e.length
}
function rf(e) {
  return e.length
}
function Ba(e, t) {
  return t.push(e), e
}
function ow(e, t) {
  return e.map(t).join('')
}
var xl = 1,
  xo = 1,
  Fg = 0,
  dt = 0,
  Ce = 0,
  zo = ''
function wl(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: xl,
    column: xo,
    length: a,
    return: '',
  }
}
function jo(e, t) {
  return tw(wl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function iw() {
  return Ce
}
function aw() {
  return (Ce = dt > 0 ? Fe(zo, --dt) : 0), xo--, Ce === 10 && ((xo = 1), xl--), Ce
}
function yt() {
  return (Ce = dt < Fg ? Fe(zo, dt++) : 0), xo++, Ce === 10 && ((xo = 1), xl++), Ce
}
function nr() {
  return Fe(zo, dt)
}
function fs() {
  return dt
}
function pa(e, t) {
  return Mi(zo, e, t)
}
function Li(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Ig(e) {
  return (xl = xo = 1), (Fg = er((zo = e))), (dt = 0), []
}
function Vg(e) {
  return (zo = ''), e
}
function ps(e) {
  return Bg(pa(dt - 1, kc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function sw(e) {
  for (; (Ce = nr()) && Ce < 33; ) yt()
  return Li(e) > 2 || Li(Ce) > 3 ? '' : ' '
}
function lw(e, t) {
  for (; --t && yt() && !(Ce < 48 || Ce > 102 || (Ce > 57 && Ce < 65) || (Ce > 70 && Ce < 97)); );
  return pa(e, fs() + (t < 6 && nr() == 32 && yt() == 32))
}
function kc(e) {
  for (; yt(); )
    switch (Ce) {
      case e:
        return dt
      case 34:
      case 39:
        e !== 34 && e !== 39 && kc(Ce)
        break
      case 40:
        e === 41 && kc(e)
        break
      case 92:
        yt()
        break
    }
  return dt
}
function uw(e, t) {
  for (; yt() && e + Ce !== 47 + 10; ) if (e + Ce === 42 + 42 && nr() === 47) break
  return '/*' + pa(t, dt - 1) + '*' + bl(e === 47 ? e : yt())
}
function cw(e) {
  for (; !Li(nr()); ) yt()
  return pa(e, dt)
}
function dw(e) {
  return Vg(hs('', null, null, null, [''], (e = Ig(e)), 0, [0], e))
}
function hs(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      v = 0,
      S = 1,
      C = 1,
      m = 1,
      p = 0,
      g = '',
      w = o,
      T = i,
      A = n,
      P = g;
    C;

  )
    switch (((v = p), (p = yt()))) {
      case 40:
        if (v != 108 && Fe(P, d - 1) == 58) {
          wc((P += Z(ps(p), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        P += ps(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        P += sw(v)
        break
      case 92:
        P += lw(fs() - 1, 7)
        continue
      case 47:
        switch (nr()) {
          case 42:
          case 47:
            Ba(fw(uw(yt(), fs()), t, r), l)
            break
          default:
            P += '/'
        }
        break
      case 123 * S:
        s[u++] = er(P) * m
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0
          case 59 + c:
            h > 0 &&
              er(P) - d &&
              Ba(h > 32 ? lh(P + ';', n, r, d - 1) : lh(Z(P, ' ', '') + ';', n, r, d - 2), l)
            break
          case 59:
            P += ';'
          default:
            if ((Ba((A = sh(P, t, r, u, c, o, s, g, (w = []), (T = []), d)), i), p === 123))
              if (c === 0) hs(P, t, A, A, w, i, d, s, T)
              else
                switch (f === 99 && Fe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    hs(
                      e,
                      A,
                      A,
                      n && Ba(sh(e, A, A, 0, 0, o, s, g, o, (w = []), d), T),
                      o,
                      T,
                      d,
                      s,
                      n ? w : T
                    )
                    break
                  default:
                    hs(P, A, A, A, [''], T, 0, s, T)
                }
        }
        ;(u = c = h = 0), (S = m = 1), (g = P = ''), (d = a)
        break
      case 58:
        ;(d = 1 + er(P)), (h = v)
      default:
        if (S < 1) {
          if (p == 123) --S
          else if (p == 125 && S++ == 0 && aw() == 125) continue
        }
        switch (((P += bl(p)), p * S)) {
          case 38:
            m = c > 0 ? 1 : ((P += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (er(P) - 1) * m), (m = 1)
            break
          case 64:
            nr() === 45 && (P += ps(yt())), (f = nr()), (c = d = er((g = P += cw(fs())))), p++
            break
          case 45:
            v === 45 && er(P) == 2 && (S = 0)
        }
    }
  return i
}
function sh(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [''], h = rf(f), v = 0, S = 0, C = 0; v < n; ++v)
    for (var m = 0, p = Mi(e, d + 1, (d = ew((S = a[v])))), g = e; m < h; ++m)
      (g = Bg(S > 0 ? f[m] + ' ' + p : Z(p, /&\f/g, f[m]))) && (l[C++] = g)
  return wl(e, t, r, o === 0 ? ef : s, l, u, c)
}
function fw(e, t, r) {
  return wl(e, t, r, Lg, bl(iw()), Mi(e, 2, -2), 0)
}
function lh(e, t, r, n) {
  return wl(e, t, r, tf, Mi(e, 0, n), Mi(e, n + 1, -1), n)
}
function uo(e, t) {
  for (var r = '', n = rf(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function pw(e, t, r, n) {
  switch (e.type) {
    case Jx:
    case tf:
      return (e.return = e.return || e.value)
    case Lg:
      return ''
    case Dg:
      return (e.return = e.value + '{' + uo(e.children, n) + '}')
    case ef:
      e.value = e.props.join(',')
  }
  return er((r = uo(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function hw(e) {
  var t = rf(e)
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
    return a
  }
}
function mw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var uh = function (t) {
  var r = new WeakMap()
  return function (n) {
    if (r.has(n)) return r.get(n)
    var o = t(n)
    return r.set(n, o), o
  }
}
function Og(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var gw = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = nr()), o === 38 && i === 12 && (r[n] = 1), !Li(i); ) yt()
    return pa(t, dt)
  },
  yw = function (t, r) {
    var n = -1,
      o = 44
    do
      switch (Li(o)) {
        case 0:
          o === 38 && nr() === 12 && (r[n] = 1), (t[n] += gw(dt - 1, r, n))
          break
        case 2:
          t[n] += ps(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++n] = nr() === 58 ? '&\f' : ''), (r[n] = t[n].length)
            break
          }
        default:
          t[n] += bl(o)
      }
    while ((o = yt()))
    return t
  },
  vw = function (t, r) {
    return Vg(yw(Ig(t), r))
  },
  ch = new WeakMap(),
  Sw = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ch.get(n)) && !o) {
        ch.set(t, !0)
        for (var i = [], a = vw(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l]
      }
    }
  },
  bw = function (t) {
    if (t.type === 'decl') {
      var r = t.value
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function Ng(e, t) {
  switch (rw(e, t)) {
    case 5103:
      return X + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + zs + e + je + e + e
    case 6828:
    case 4268:
      return X + e + je + e + e
    case 6165:
      return X + e + je + 'flex-' + e + e
    case 5187:
      return X + e + Z(e, /(\w+).+(:[^]+)/, X + 'box-$1$2' + je + 'flex-$1$2') + e
    case 5443:
      return X + e + je + 'flex-item-' + Z(e, /flex-|-self/, '') + e
    case 4675:
      return X + e + je + 'flex-line-pack' + Z(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return X + e + je + Z(e, 'shrink', 'negative') + e
    case 5292:
      return X + e + je + Z(e, 'basis', 'preferred-size') + e
    case 6060:
      return X + 'box-' + Z(e, '-grow', '') + X + e + je + Z(e, 'grow', 'positive') + e
    case 4554:
      return X + Z(e, /([^-])(transform)/g, '$1' + X + '$2') + e
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, X + '$1'), /(image-set)/, X + '$1'), e, '') + e
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, X + '$1$`$1')
    case 4968:
      return (
        Z(
          Z(e, /(.+:)(flex-)?(.*)/, X + 'box-pack:$3' + je + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        X +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(e, /(.+)-inline(.+)/, X + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (er(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45) break
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + X + '$2-$3$1' + zs + (Fe(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~wc(e, 'stretch') ? Ng(Z(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Fe(e, t + 1) !== 115) break
    case 6444:
      switch (Fe(e, er(e) - 3 - (~wc(e, '!important') && 10))) {
        case 107:
          return Z(e, ':', ':' + X) + e
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                X +
                (Fe(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                X +
                '$2$3$1' +
                je +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return X + e + je + Z(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return X + e + je + Z(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return X + e + je + Z(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return X + e + je + e + e
  }
  return e
}
var xw = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case tf:
          t.return = Ng(t.value, t.length)
          break
        case Dg:
          return uo([jo(t, { value: Z(t.value, '@', '@' + X) })], o)
        case ef:
          if (t.length)
            return ow(t.props, function (i) {
              switch (nw(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return uo([jo(t, { props: [Z(i, /:(read-\w+)/, ':' + zs + '$1')] })], o)
                case '::placeholder':
                  return uo(
                    [
                      jo(t, { props: [Z(i, /:(plac\w+)/, ':' + X + 'input-$1')] }),
                      jo(t, { props: [Z(i, /:(plac\w+)/, ':' + zs + '$1')] }),
                      jo(t, { props: [Z(i, /:(plac\w+)/, je + 'input-$1')] }),
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  ww = [xw],
  kw = function (t) {
    var r = t.key
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(n, function (S) {
        var C = S.getAttribute('data-emotion')
        C.indexOf(' ') !== -1 && (document.head.appendChild(S), S.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || ww,
      i = {},
      a,
      s = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (S) {
          for (var C = S.getAttribute('data-emotion').split(' '), m = 1; m < C.length; m++)
            i[C[m]] = !0
          s.push(S)
        }
      )
    var l,
      u = [Sw, bw]
    {
      var c,
        d = [
          pw,
          mw(function (S) {
            c.insert(S)
          }),
        ],
        f = hw(u.concat(o, d)),
        h = function (C) {
          return uo(dw(C), f)
        }
      l = function (C, m, p, g) {
        ;(c = p), h(C ? C + '{' + m.styles + '}' : m.styles), g && (v.inserted[m.name] = !0)
      }
    }
    var v = {
      key: r,
      sheet: new Zx({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    }
    return v.sheet.hydrate(s), v
  }
function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Ms.apply(this, arguments)
  )
}
var Cc = {},
  Cw = {
    get exports() {
      return Cc
    },
    set exports(e) {
      Cc = e
    },
  },
  te = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Le = typeof Symbol == 'function' && Symbol.for,
  nf = Le ? Symbol.for('react.element') : 60103,
  of = Le ? Symbol.for('react.portal') : 60106,
  kl = Le ? Symbol.for('react.fragment') : 60107,
  Cl = Le ? Symbol.for('react.strict_mode') : 60108,
  _l = Le ? Symbol.for('react.profiler') : 60114,
  Tl = Le ? Symbol.for('react.provider') : 60109,
  Pl = Le ? Symbol.for('react.context') : 60110,
  af = Le ? Symbol.for('react.async_mode') : 60111,
  El = Le ? Symbol.for('react.concurrent_mode') : 60111,
  $l = Le ? Symbol.for('react.forward_ref') : 60112,
  Al = Le ? Symbol.for('react.suspense') : 60113,
  _w = Le ? Symbol.for('react.suspense_list') : 60120,
  Rl = Le ? Symbol.for('react.memo') : 60115,
  zl = Le ? Symbol.for('react.lazy') : 60116,
  Tw = Le ? Symbol.for('react.block') : 60121,
  Pw = Le ? Symbol.for('react.fundamental') : 60117,
  Ew = Le ? Symbol.for('react.responder') : 60118,
  $w = Le ? Symbol.for('react.scope') : 60119
function wt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case nf:
        switch (((e = e.type), e)) {
          case af:
          case El:
          case kl:
          case _l:
          case Cl:
          case Al:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Pl:
              case $l:
              case zl:
              case Rl:
              case Tl:
                return e
              default:
                return t
            }
        }
      case of:
        return t
    }
  }
}
function jg(e) {
  return wt(e) === El
}
te.AsyncMode = af
te.ConcurrentMode = El
te.ContextConsumer = Pl
te.ContextProvider = Tl
te.Element = nf
te.ForwardRef = $l
te.Fragment = kl
te.Lazy = zl
te.Memo = Rl
te.Portal = of
te.Profiler = _l
te.StrictMode = Cl
te.Suspense = Al
te.isAsyncMode = function (e) {
  return jg(e) || wt(e) === af
}
te.isConcurrentMode = jg
te.isContextConsumer = function (e) {
  return wt(e) === Pl
}
te.isContextProvider = function (e) {
  return wt(e) === Tl
}
te.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === nf
}
te.isForwardRef = function (e) {
  return wt(e) === $l
}
te.isFragment = function (e) {
  return wt(e) === kl
}
te.isLazy = function (e) {
  return wt(e) === zl
}
te.isMemo = function (e) {
  return wt(e) === Rl
}
te.isPortal = function (e) {
  return wt(e) === of
}
te.isProfiler = function (e) {
  return wt(e) === _l
}
te.isStrictMode = function (e) {
  return wt(e) === Cl
}
te.isSuspense = function (e) {
  return wt(e) === Al
}
te.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === kl ||
    e === El ||
    e === _l ||
    e === Cl ||
    e === Al ||
    e === _w ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === zl ||
        e.$$typeof === Rl ||
        e.$$typeof === Tl ||
        e.$$typeof === Pl ||
        e.$$typeof === $l ||
        e.$$typeof === Pw ||
        e.$$typeof === Ew ||
        e.$$typeof === $w ||
        e.$$typeof === Tw))
  )
}
te.typeOf = wt
;(function (e) {
  e.exports = te
})(Cw)
var Wg = Cc,
  Aw = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Rw = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Ug = {}
Ug[Wg.ForwardRef] = Aw
Ug[Wg.Memo] = Rw
var zw = !0
function Mw(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var Hg = function (t, r, n) {
    var o = t.key + '-' + r.name
    ;(n === !1 || zw === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
  },
  Gg = function (t, r, n) {
    Hg(t, r, n)
    var o = t.key + '-' + r.name
    if (t.inserted[r.name] === void 0) {
      var i = r
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function Lw(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var Dw = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Bw = /[A-Z]|^ms/g,
  Fw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Kg = function (t) {
    return t.charCodeAt(1) === 45
  },
  dh = function (t) {
    return t != null && typeof t != 'boolean'
  },
  bu = Og(function (e) {
    return Kg(e) ? e : e.replace(Bw, '-$&').toLowerCase()
  }),
  fh = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(Fw, function (n, o, i) {
            return (tr = { name: o, styles: i, next: tr }), o
          })
    }
    return Dw[t] !== 1 && !Kg(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r
  }
function Di(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) return r
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (tr = { name: r.name, styles: r.styles, next: tr }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; ) (tr = { name: n.name, styles: n.styles, next: tr }), (n = n.next)
        var o = r.styles + ';'
        return o
      }
      return Iw(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var i = tr,
          a = r(e)
        return (tr = i), Di(e, t, a)
      }
      break
    }
  }
  if (t == null) return r
  var s = t[r]
  return s !== void 0 ? s : r
}
function Iw(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Di(e, t, r[o]) + ';'
  else
    for (var i in r) {
      var a = r[i]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : dh(a) && (n += bu(i) + ':' + fh(i, a) + ';')
      else if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++) dh(a[s]) && (n += bu(i) + ':' + fh(i, a[s]) + ';')
      else {
        var l = Di(e, t, a)
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += bu(i) + ':' + l + ';'
            break
          }
          default:
            n += i + '{' + l + '}'
        }
      }
    }
  return n
}
var ph = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  tr,
  sf = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0]
    var o = !0,
      i = ''
    tr = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((o = !1), (i += Di(n, r, a))) : (i += a[0])
    for (var s = 1; s < t.length; s++) (i += Di(n, r, t[s])), o && (i += a[s])
    ph.lastIndex = 0
    for (var l = '', u; (u = ph.exec(i)) !== null; ) l += '-' + u[1]
    var c = Lw(i) + l
    return { name: c, styles: i, next: tr }
  },
  Vw = function (t) {
    return t()
  },
  Yg = ah['useInsertionEffect'] ? ah['useInsertionEffect'] : !1,
  Ow = Yg || Vw,
  hh = Yg || k.useLayoutEffect,
  Qg = k.createContext(typeof HTMLElement < 'u' ? kw({ key: 'css' }) : null)
Qg.Provider
var Xg = function (t) {
    return k.forwardRef(function (r, n) {
      var o = k.useContext(Qg)
      return t(r, o, n)
    })
  },
  Bi = k.createContext({}),
  Nw = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t)
      return n
    }
    return Ms({}, t, r)
  },
  jw = uh(function (e) {
    return uh(function (t) {
      return Nw(e, t)
    })
  }),
  Ww = function (t) {
    var r = k.useContext(Bi)
    return (
      t.theme !== r && (r = jw(r)(t.theme)), k.createElement(Bi.Provider, { value: r }, t.children)
    )
  },
  Ml = Xg(function (e, t) {
    var r = e.styles,
      n = sf([r], void 0, k.useContext(Bi)),
      o = k.useRef()
    return (
      hh(
        function () {
          var i = t.key + '-global',
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector('style[data-emotion="' + i + ' ' + n.name + '"]')
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null && ((s = !0), l.setAttribute('data-emotion', i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush()
            }
          )
        },
        [t]
      ),
      hh(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1]
          if (s) {
            i[1] = !1
            return
          }
          if ((n.next !== void 0 && Gg(t, n.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling
            ;(a.before = l), a.flush()
          }
          t.insert('', n, a, !1)
        },
        [t, n.name]
      ),
      null
    )
  })
function Uw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return sf(t)
}
var Hw = function () {
    var t = Uw.apply(void 0, arguments),
      r = 'animation-' + t.name
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      },
    }
  },
  qg = String.raw,
  Zg = qg`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  Gw = () => E(Ml, { styles: Zg }),
  Kw = ({ scope: e = '' }) =>
    E(Ml, {
      styles: qg`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} :where(
          [type="number"]::-webkit-inner-spin-button,
          [type="number"]::-webkit-outer-spin-button
        ) {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Zg}
    `,
    })
function Yw(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function Mo(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = k.createContext(a)
  s.displayName = t
  function l() {
    var u
    const c = k.useContext(s)
    if (!c && r) {
      const d = new Error(i ?? Yw(n, o))
      throw (
        ((d.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, d, l), d)
      )
    }
    return c
  }
  return [s.Provider, l, s]
}
var [Qw, Xw] = Mo({ strict: !1, name: 'PortalManagerContext' })
function Jg(e) {
  const { children: t, zIndex: r } = e
  return E(Qw, { value: { zIndex: r }, children: t })
}
Jg.displayName = 'PortalManager'
var Fi = globalThis != null && globalThis.document ? k.useLayoutEffect : k.useEffect,
  Ii = {},
  qw = {
    get exports() {
      return Ii
    },
    set exports(e) {
      Ii = e
    },
  },
  kt = {},
  _c = {},
  Zw = {
    get exports() {
      return _c
    },
    set exports(e) {
      _c = e
    },
  },
  ey = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(z, V) {
    var N = z.length
    z.push(V)
    e: for (; 0 < N; ) {
      var O = (N - 1) >>> 1,
        ie = z[O]
      if (0 < o(ie, V)) (z[O] = V), (z[N] = ie), (N = O)
      else break e
    }
  }
  function r(z) {
    return z.length === 0 ? null : z[0]
  }
  function n(z) {
    if (z.length === 0) return null
    var V = z[0],
      N = z.pop()
    if (N !== V) {
      z[0] = N
      e: for (var O = 0, ie = z.length, G = ie >>> 1; O < G; ) {
        var pt = 2 * (O + 1) - 1,
          Er = z[pt],
          Te = pt + 1,
          Kt = z[Te]
        if (0 > o(Er, N))
          Te < ie && 0 > o(Kt, Er)
            ? ((z[O] = Kt), (z[Te] = N), (O = Te))
            : ((z[O] = Er), (z[pt] = N), (O = pt))
        else if (Te < ie && 0 > o(Kt, N)) (z[O] = Kt), (z[Te] = N), (O = Te)
        else break e
      }
    }
    return V
  }
  function o(z, V) {
    var N = z.sortIndex - V.sortIndex
    return N !== 0 ? N : z.id - V.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    S = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function g(z) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u)
      else if (V.startTime <= z) n(u), (V.sortIndex = V.expirationTime), t(l, V)
      else break
      V = r(u)
    }
  }
  function w(z) {
    if (((S = !1), g(z), !v))
      if (r(l) !== null) (v = !0), nt(T)
      else {
        var V = r(u)
        V !== null && Tt(w, V.startTime - z)
      }
  }
  function T(z, V) {
    ;(v = !1), S && ((S = !1), m($), ($ = -1)), (h = !0)
    var N = f
    try {
      for (g(V), d = r(l); d !== null && (!(d.expirationTime > V) || (z && !oe())); ) {
        var O = d.callback
        if (typeof O == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var ie = O(d.expirationTime <= V)
          ;(V = e.unstable_now()),
            typeof ie == 'function' ? (d.callback = ie) : d === r(l) && n(l),
            g(V)
        } else n(l)
        d = r(l)
      }
      if (d !== null) var G = !0
      else {
        var pt = r(u)
        pt !== null && Tt(w, pt.startTime - V), (G = !1)
      }
      return G
    } finally {
      ;(d = null), (f = N), (h = !1)
    }
  }
  var A = !1,
    P = null,
    $ = -1,
    F = 5,
    D = -1
  function oe() {
    return !(e.unstable_now() - D < F)
  }
  function Ae() {
    if (P !== null) {
      var z = e.unstable_now()
      D = z
      var V = !0
      try {
        V = P(!0, z)
      } finally {
        V ? rt() : ((A = !1), (P = null))
      }
    } else A = !1
  }
  var rt
  if (typeof p == 'function')
    rt = function () {
      p(Ae)
    }
  else if (typeof MessageChannel < 'u') {
    var he = new MessageChannel(),
      me = he.port2
    ;(he.port1.onmessage = Ae),
      (rt = function () {
        me.postMessage(null)
      })
  } else
    rt = function () {
      C(Ae, 0)
    }
  function nt(z) {
    ;(P = z), A || ((A = !0), rt())
  }
  function Tt(z, V) {
    $ = C(function () {
      z(e.unstable_now())
    }, V)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), nt(T))
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (F = 0 < z ? Math.floor(1e3 / z) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l)
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3
          break
        default:
          V = f
      }
      var N = f
      f = V
      try {
        return z()
      } finally {
        f = N
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, V) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          z = 3
      }
      var N = f
      f = z
      try {
        return V()
      } finally {
        f = N
      }
    }),
    (e.unstable_scheduleCallback = function (z, V, N) {
      var O = e.unstable_now()
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? O + N : O))
          : (N = O),
        z)
      ) {
        case 1:
          var ie = -1
          break
        case 2:
          ie = 250
          break
        case 5:
          ie = 1073741823
          break
        case 4:
          ie = 1e4
          break
        default:
          ie = 5e3
      }
      return (
        (ie = N + ie),
        (z = {
          id: c++,
          callback: V,
          priorityLevel: z,
          startTime: N,
          expirationTime: ie,
          sortIndex: -1,
        }),
        N > O
          ? ((z.sortIndex = N),
            t(u, z),
            r(l) === null && z === r(u) && (S ? (m($), ($ = -1)) : (S = !0), Tt(w, N - O)))
          : ((z.sortIndex = ie), t(l, z), v || h || ((v = !0), nt(T))),
        z
      )
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (z) {
      var V = f
      return function () {
        var N = f
        f = V
        try {
          return z.apply(this, arguments)
        } finally {
          f = N
        }
      }
    })
})(ey)
;(function (e) {
  e.exports = ey
})(Zw)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ty = k,
  bt = _c
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var ry = new Set(),
  Vi = {}
function In(e, t) {
  wo(e, t), wo(e + 'Capture', t)
}
function wo(e, t) {
  for (Vi[e] = t, e = 0; e < t.length; e++) ry.add(t[e])
}
var wr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Tc = Object.prototype.hasOwnProperty,
  Jw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mh = {},
  gh = {}
function ek(e) {
  return Tc.call(gh, e) ? !0 : Tc.call(mh, e) ? !1 : Jw.test(e) ? (gh[e] = !0) : ((mh[e] = !0), !1)
}
function tk(e, t, r, n) {
  if (r !== null && r.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function rk(e, t, r, n) {
  if (t === null || typeof t > 'u' || tk(e, t, r, n)) return !0
  if (n) return !1
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function tt(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var Ve = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ve[e] = new tt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ve[t] = new tt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ve[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ve[e] = new tt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ve[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ve[e] = new tt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ve[e] = new tt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ve[e] = new tt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ve[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var lf = /[\-:]([a-z])/g
function uf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lf, uf)
    Ve[t] = new tt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lf, uf)
    Ve[t] = new tt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(lf, uf)
  Ve[t] = new tt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ve[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ve.xlinkHref = new tt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ve[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function cf(e, t, r, n) {
  var o = Ve.hasOwnProperty(t) ? Ve[t] : null
  ;(o !== null
    ? o.type !== 0
    : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (rk(t, r, o, n) && (r = null),
    n || o === null
      ? ek(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Pr = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fa = Symbol.for('react.element'),
  Yn = Symbol.for('react.portal'),
  Qn = Symbol.for('react.fragment'),
  df = Symbol.for('react.strict_mode'),
  Pc = Symbol.for('react.profiler'),
  ny = Symbol.for('react.provider'),
  oy = Symbol.for('react.context'),
  ff = Symbol.for('react.forward_ref'),
  Ec = Symbol.for('react.suspense'),
  $c = Symbol.for('react.suspense_list'),
  pf = Symbol.for('react.memo'),
  Dr = Symbol.for('react.lazy'),
  iy = Symbol.for('react.offscreen'),
  yh = Symbol.iterator
function Wo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yh && e[yh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Se = Object.assign,
  xu
function ti(e) {
  if (xu === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      xu = (t && t[1]) || ''
    }
  return (
    `
` +
    xu +
    e
  )
}
var wu = !1
function ku(e, t) {
  if (!e || wu) return ''
  wu = !0
  var r = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var n = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          n = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        n = u
      }
      e()
    }
  } catch (u) {
    if (u && n && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(wu = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? ti(e) : ''
}
function nk(e) {
  switch (e.tag) {
    case 5:
      return ti(e.type)
    case 16:
      return ti('Lazy')
    case 13:
      return ti('Suspense')
    case 19:
      return ti('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ku(e.type, !1)), e
    case 11:
      return (e = ku(e.type.render, !1)), e
    case 1:
      return (e = ku(e.type, !0)), e
    default:
      return ''
  }
}
function Ac(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Qn:
      return 'Fragment'
    case Yn:
      return 'Portal'
    case Pc:
      return 'Profiler'
    case df:
      return 'StrictMode'
    case Ec:
      return 'Suspense'
    case $c:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case oy:
        return (e.displayName || 'Context') + '.Consumer'
      case ny:
        return (e._context.displayName || 'Context') + '.Provider'
      case ff:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case pf:
        return (t = e.displayName || null), t !== null ? t : Ac(e.type) || 'Memo'
      case Dr:
        ;(t = e._payload), (e = e._init)
        try {
          return Ac(e(t))
        } catch {}
    }
  return null
}
function ok(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Ac(t)
    case 8:
      return t === df ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function rn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function ay(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function ik(e) {
  var t = ay(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var o = r.get,
      i = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (a) {
          ;(n = '' + a), i.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (a) {
          n = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ia(e) {
  e._valueTracker || (e._valueTracker = ik(e))
}
function sy(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = ay(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function Ls(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Rc(e, t) {
  var r = t.checked
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function vh(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = rn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function ly(e, t) {
  ;(t = t.checked), t != null && cf(e, 'checked', t, !1)
}
function zc(e, t) {
  ly(e, t)
  var r = rn(t.value),
    n = t.type
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r)
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Mc(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Mc(e, t.type, rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Sh(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type
    if (!((n !== 'submit' && n !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r)
}
function Mc(e, t, r) {
  ;(t !== 'number' || Ls(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var ri = Array.isArray
function co(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + rn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Lc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91))
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function bh(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(R(92))
      if (ri(r)) {
        if (1 < r.length) throw Error(R(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: rn(r) }
}
function uy(e, t) {
  var r = rn(t.value),
    n = rn(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function xh(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function cy(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Dc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? cy(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Va,
  dy = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        Va = Va || document.createElement('div'),
          Va.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Va.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Oi(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ci = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ak = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ci).forEach(function (e) {
  ak.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ci[t] = ci[e])
  })
})
function fy(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (ci.hasOwnProperty(e) && ci[e])
    ? ('' + t).trim()
    : t + 'px'
}
function py(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = fy(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var sk = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Bc(e, t) {
  if (t) {
    if (sk[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(R(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62))
  }
}
function Fc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ic = null
function hf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Vc = null,
  fo = null,
  po = null
function wh(e) {
  if ((e = ga(e))) {
    if (typeof Vc != 'function') throw Error(R(280))
    var t = e.stateNode
    t && ((t = Il(t)), Vc(e.stateNode, e.type, t))
  }
}
function hy(e) {
  fo ? (po ? po.push(e) : (po = [e])) : (fo = e)
}
function my() {
  if (fo) {
    var e = fo,
      t = po
    if (((po = fo = null), wh(e), t)) for (e = 0; e < t.length; e++) wh(t[e])
  }
}
function gy(e, t) {
  return e(t)
}
function yy() {}
var Cu = !1
function vy(e, t, r) {
  if (Cu) return e(t, r)
  Cu = !0
  try {
    return gy(e, t, r)
  } finally {
    ;(Cu = !1), (fo !== null || po !== null) && (yy(), my())
  }
}
function Ni(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = Il(r)
  if (n === null) return null
  r = n[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(n = !n.disabled) ||
        ((e = e.type),
        (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !n)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (r && typeof r != 'function') throw Error(R(231, t, typeof r))
  return r
}
var Oc = !1
if (wr)
  try {
    var Uo = {}
    Object.defineProperty(Uo, 'passive', {
      get: function () {
        Oc = !0
      },
    }),
      window.addEventListener('test', Uo, Uo),
      window.removeEventListener('test', Uo, Uo)
  } catch {
    Oc = !1
  }
function lk(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var di = !1,
  Ds = null,
  Bs = !1,
  Nc = null,
  uk = {
    onError: function (e) {
      ;(di = !0), (Ds = e)
    },
  }
function ck(e, t, r, n, o, i, a, s, l) {
  ;(di = !1), (Ds = null), lk.apply(uk, arguments)
}
function dk(e, t, r, n, o, i, a, s, l) {
  if ((ck.apply(this, arguments), di)) {
    if (di) {
      var u = Ds
      ;(di = !1), (Ds = null)
    } else throw Error(R(198))
    Bs || ((Bs = !0), (Nc = u))
  }
}
function Vn(e) {
  var t = e,
    r = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? r : null
}
function Sy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function kh(e) {
  if (Vn(e) !== e) throw Error(R(188))
}
function fk(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(R(188))
    return t !== e ? null : e
  }
  for (var r = e, n = t; ; ) {
    var o = r.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return kh(o), e
        if (i === n) return kh(o), t
        i = i.sibling
      }
      throw Error(R(188))
    }
    if (r.return !== n.return) (r = o), (n = i)
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          ;(a = !0), (r = o), (n = i)
          break
        }
        if (s === n) {
          ;(a = !0), (n = o), (r = i)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            ;(a = !0), (r = i), (n = o)
            break
          }
          if (s === n) {
            ;(a = !0), (n = i), (r = o)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error(R(189))
      }
    }
    if (r.alternate !== n) throw Error(R(190))
  }
  if (r.tag !== 3) throw Error(R(188))
  return r.stateNode.current === r ? e : t
}
function by(e) {
  return (e = fk(e)), e !== null ? xy(e) : null
}
function xy(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = xy(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var wy = bt.unstable_scheduleCallback,
  Ch = bt.unstable_cancelCallback,
  pk = bt.unstable_shouldYield,
  hk = bt.unstable_requestPaint,
  we = bt.unstable_now,
  mk = bt.unstable_getCurrentPriorityLevel,
  mf = bt.unstable_ImmediatePriority,
  ky = bt.unstable_UserBlockingPriority,
  Fs = bt.unstable_NormalPriority,
  gk = bt.unstable_LowPriority,
  Cy = bt.unstable_IdlePriority,
  Ll = null,
  or = null
function yk(e) {
  if (or && typeof or.onCommitFiberRoot == 'function')
    try {
      or.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ut = Math.clz32 ? Math.clz32 : bk,
  vk = Math.log,
  Sk = Math.LN2
function bk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vk(e) / Sk) | 0)) | 0
}
var Oa = 64,
  Na = 4194304
function ni(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Is(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = ni(s)) : ((i &= a), i !== 0 && (n = ni(i)))
  } else (a = r & ~o), a !== 0 ? (n = ni(a)) : i !== 0 && (n = ni(i))
  if (n === 0) return 0
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Ut(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function xk(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function wk(e, t) {
  for (
    var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ut(i),
      s = 1 << a,
      l = o[a]
    l === -1 ? (!(s & r) || s & n) && (o[a] = xk(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
  }
}
function jc(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function _y() {
  var e = Oa
  return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e
}
function _u(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function ha(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ut(t)),
    (e[t] = r)
}
function kk(e, t) {
  var r = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var n = e.eventTimes
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Ut(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function gf(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - Ut(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var ee = 0
function Ty(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Py,
  yf,
  Ey,
  $y,
  Ay,
  Wc = !1,
  ja = [],
  Ur = null,
  Hr = null,
  Gr = null,
  ji = new Map(),
  Wi = new Map(),
  Ir = [],
  Ck =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function _h(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ur = null
      break
    case 'dragenter':
    case 'dragleave':
      Hr = null
      break
    case 'mouseover':
    case 'mouseout':
      Gr = null
      break
    case 'pointerover':
    case 'pointerout':
      ji.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Wi.delete(t.pointerId)
  }
}
function Ho(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ga(t)), t !== null && yf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function _k(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (Ur = Ho(Ur, e, t, r, n, o)), !0
    case 'dragenter':
      return (Hr = Ho(Hr, e, t, r, n, o)), !0
    case 'mouseover':
      return (Gr = Ho(Gr, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return ji.set(i, Ho(ji.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Wi.set(i, Ho(Wi.get(i) || null, e, t, r, n, o)), !0
  }
  return !1
}
function Ry(e) {
  var t = wn(e.target)
  if (t !== null) {
    var r = Vn(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Sy(r)), t !== null)) {
          ;(e.blockedOn = t),
            Ay(e.priority, function () {
              Ey(r)
            })
          return
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function ms(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(Ic = n), r.target.dispatchEvent(n), (Ic = null)
    } else return (t = ga(r)), t !== null && yf(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function Th(e, t, r) {
  ms(e) && r.delete(t)
}
function Tk() {
  ;(Wc = !1),
    Ur !== null && ms(Ur) && (Ur = null),
    Hr !== null && ms(Hr) && (Hr = null),
    Gr !== null && ms(Gr) && (Gr = null),
    ji.forEach(Th),
    Wi.forEach(Th)
}
function Go(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wc || ((Wc = !0), bt.unstable_scheduleCallback(bt.unstable_NormalPriority, Tk)))
}
function Ui(e) {
  function t(o) {
    return Go(o, e)
  }
  if (0 < ja.length) {
    Go(ja[0], e)
    for (var r = 1; r < ja.length; r++) {
      var n = ja[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    Ur !== null && Go(Ur, e),
      Hr !== null && Go(Hr, e),
      Gr !== null && Go(Gr, e),
      ji.forEach(t),
      Wi.forEach(t),
      r = 0;
    r < Ir.length;
    r++
  )
    (n = Ir[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < Ir.length && ((r = Ir[0]), r.blockedOn === null); )
    Ry(r), r.blockedOn === null && Ir.shift()
}
var ho = Pr.ReactCurrentBatchConfig,
  Vs = !0
function Pk(e, t, r, n) {
  var o = ee,
    i = ho.transition
  ho.transition = null
  try {
    ;(ee = 1), vf(e, t, r, n)
  } finally {
    ;(ee = o), (ho.transition = i)
  }
}
function Ek(e, t, r, n) {
  var o = ee,
    i = ho.transition
  ho.transition = null
  try {
    ;(ee = 4), vf(e, t, r, n)
  } finally {
    ;(ee = o), (ho.transition = i)
  }
}
function vf(e, t, r, n) {
  if (Vs) {
    var o = Uc(e, t, r, n)
    if (o === null) Du(e, t, n, Os, r), _h(e, n)
    else if (_k(o, e, t, r, n)) n.stopPropagation()
    else if ((_h(e, n), t & 4 && -1 < Ck.indexOf(e))) {
      for (; o !== null; ) {
        var i = ga(o)
        if ((i !== null && Py(i), (i = Uc(e, t, r, n)), i === null && Du(e, t, n, Os, r), i === o))
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else Du(e, t, n, null, r)
  }
}
var Os = null
function Uc(e, t, r, n) {
  if (((Os = null), (e = hf(n)), (e = wn(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = Sy(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Os = e), null
}
function zy(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (mk()) {
        case mf:
          return 1
        case ky:
          return 4
        case Fs:
        case gk:
          return 16
        case Cy:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Nr = null,
  Sf = null,
  gs = null
function My() {
  if (gs) return gs
  var e,
    t = Sf,
    r = t.length,
    n,
    o = 'value' in Nr ? Nr.value : Nr.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (gs = o.slice(e, 1 < n ? 1 - n : void 0))
}
function ys(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Wa() {
  return !0
}
function Ph() {
  return !1
}
function Ct(e) {
  function t(r, n, o, i, a) {
    ;(this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e) e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wa
        : Ph),
      (this.isPropagationStopped = Ph),
      this
    )
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = Wa))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Wa))
      },
      persist: function () {},
      isPersistent: Wa,
    }),
    t
  )
}
var Lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bf = Ct(Lo),
  ma = Se({}, Lo, { view: 0, detail: 0 }),
  $k = Ct(ma),
  Tu,
  Pu,
  Ko,
  Dl = Se({}, ma, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ko &&
            (Ko && e.type === 'mousemove'
              ? ((Tu = e.screenX - Ko.screenX), (Pu = e.screenY - Ko.screenY))
              : (Pu = Tu = 0),
            (Ko = e)),
          Tu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Pu
    },
  }),
  Eh = Ct(Dl),
  Ak = Se({}, Dl, { dataTransfer: 0 }),
  Rk = Ct(Ak),
  zk = Se({}, ma, { relatedTarget: 0 }),
  Eu = Ct(zk),
  Mk = Se({}, Lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lk = Ct(Mk),
  Dk = Se({}, Lo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Bk = Ct(Dk),
  Fk = Se({}, Lo, { data: 0 }),
  $h = Ct(Fk),
  Ik = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Vk = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ok = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Nk(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Ok[e]) ? !!t[e] : !1
}
function xf() {
  return Nk
}
var jk = Se({}, ma, {
    key: function (e) {
      if (e.key) {
        var t = Ik[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ys(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Vk[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xf,
    charCode: function (e) {
      return e.type === 'keypress' ? ys(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ys(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Wk = Ct(jk),
  Uk = Se({}, Dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ah = Ct(Uk),
  Hk = Se({}, ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xf,
  }),
  Gk = Ct(Hk),
  Kk = Se({}, Lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yk = Ct(Kk),
  Qk = Se({}, Dl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xk = Ct(Qk),
  qk = [9, 13, 27, 32],
  wf = wr && 'CompositionEvent' in window,
  fi = null
wr && 'documentMode' in document && (fi = document.documentMode)
var Zk = wr && 'TextEvent' in window && !fi,
  Ly = wr && (!wf || (fi && 8 < fi && 11 >= fi)),
  Rh = String.fromCharCode(32),
  zh = !1
function Dy(e, t) {
  switch (e) {
    case 'keyup':
      return qk.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function By(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Xn = !1
function Jk(e, t) {
  switch (e) {
    case 'compositionend':
      return By(t)
    case 'keypress':
      return t.which !== 32 ? null : ((zh = !0), Rh)
    case 'textInput':
      return (e = t.data), e === Rh && zh ? null : e
    default:
      return null
  }
}
function eC(e, t) {
  if (Xn)
    return e === 'compositionend' || (!wf && Dy(e, t))
      ? ((e = My()), (gs = Sf = Nr = null), (Xn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Ly && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var tC = {
  'color': !0,
  'date': !0,
  'datetime': !0,
  'datetime-local': !0,
  'email': !0,
  'month': !0,
  'number': !0,
  'password': !0,
  'range': !0,
  'search': !0,
  'tel': !0,
  'text': !0,
  'time': !0,
  'url': !0,
  'week': !0,
}
function Mh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!tC[e.type] : t === 'textarea'
}
function Fy(e, t, r, n) {
  hy(n),
    (t = Ns(t, 'onChange')),
    0 < t.length &&
      ((r = new bf('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var pi = null,
  Hi = null
function rC(e) {
  Yy(e, 0)
}
function Bl(e) {
  var t = Jn(e)
  if (sy(t)) return e
}
function nC(e, t) {
  if (e === 'change') return t
}
var Iy = !1
if (wr) {
  var $u
  if (wr) {
    var Au = 'oninput' in document
    if (!Au) {
      var Lh = document.createElement('div')
      Lh.setAttribute('oninput', 'return;'), (Au = typeof Lh.oninput == 'function')
    }
    $u = Au
  } else $u = !1
  Iy = $u && (!document.documentMode || 9 < document.documentMode)
}
function Dh() {
  pi && (pi.detachEvent('onpropertychange', Vy), (Hi = pi = null))
}
function Vy(e) {
  if (e.propertyName === 'value' && Bl(Hi)) {
    var t = []
    Fy(t, Hi, e, hf(e)), vy(rC, t)
  }
}
function oC(e, t, r) {
  e === 'focusin'
    ? (Dh(), (pi = t), (Hi = r), pi.attachEvent('onpropertychange', Vy))
    : e === 'focusout' && Dh()
}
function iC(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Bl(Hi)
}
function aC(e, t) {
  if (e === 'click') return Bl(t)
}
function sC(e, t) {
  if (e === 'input' || e === 'change') return Bl(t)
}
function lC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Gt = typeof Object.is == 'function' ? Object.is : lC
function Gi(e, t) {
  if (Gt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!Tc.call(t, o) || !Gt(e[o], t[o])) return !1
  }
  return !0
}
function Bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Fh(e, t) {
  var r = Bh(e)
  e = 0
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = Bh(r)
  }
}
function Oy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Oy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ny() {
  for (var e = window, t = Ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = Ls(e.document)
  }
  return t
}
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function uC(e) {
  var t = Ny(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && Oy(r.ownerDocument.documentElement, r)) {
    if (n !== null && kf(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), 'selectionStart' in r))
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection()
        var o = r.textContent.length,
          i = Math.min(n.start, o)
        ;(n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = Fh(r, i))
        var a = Fh(r, n)
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var cC = wr && 'documentMode' in document && 11 >= document.documentMode,
  qn = null,
  Hc = null,
  hi = null,
  Gc = !1
function Ih(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  Gc ||
    qn == null ||
    qn !== Ls(n) ||
    ((n = qn),
    'selectionStart' in n && kf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (hi && Gi(hi, n)) ||
      ((hi = n),
      (n = Ns(Hc, 'onSelect')),
      0 < n.length &&
        ((t = new bf('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = qn))))
}
function Ua(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var Zn = {
    animationend: Ua('Animation', 'AnimationEnd'),
    animationiteration: Ua('Animation', 'AnimationIteration'),
    animationstart: Ua('Animation', 'AnimationStart'),
    transitionend: Ua('Transition', 'TransitionEnd'),
  },
  Ru = {},
  jy = {}
wr &&
  ((jy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  'TransitionEvent' in window || delete Zn.transitionend.transition)
function Fl(e) {
  if (Ru[e]) return Ru[e]
  if (!Zn[e]) return e
  var t = Zn[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in jy) return (Ru[e] = t[r])
  return e
}
var Wy = Fl('animationend'),
  Uy = Fl('animationiteration'),
  Hy = Fl('animationstart'),
  Gy = Fl('transitionend'),
  Ky = new Map(),
  Vh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function sn(e, t) {
  Ky.set(e, t), In(t, [e])
}
for (var zu = 0; zu < Vh.length; zu++) {
  var Mu = Vh[zu],
    dC = Mu.toLowerCase(),
    fC = Mu[0].toUpperCase() + Mu.slice(1)
  sn(dC, 'on' + fC)
}
sn(Wy, 'onAnimationEnd')
sn(Uy, 'onAnimationIteration')
sn(Hy, 'onAnimationStart')
sn('dblclick', 'onDoubleClick')
sn('focusin', 'onFocus')
sn('focusout', 'onBlur')
sn(Gy, 'onTransitionEnd')
wo('onMouseEnter', ['mouseout', 'mouseover'])
wo('onMouseLeave', ['mouseout', 'mouseover'])
wo('onPointerEnter', ['pointerout', 'pointerover'])
wo('onPointerLeave', ['pointerout', 'pointerover'])
In('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
In(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
In('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
In('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var oi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  pC = new Set('cancel close invalid load scroll toggle'.split(' ').concat(oi))
function Oh(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), dk(n, t, void 0, e), (e.currentTarget = null)
}
function Yy(e, t) {
  t = (t & 4) !== 0
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event
    n = n.listeners
    e: {
      var i = void 0
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e
          Oh(o, s, u), (i = l)
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e
          Oh(o, s, u), (i = l)
        }
    }
  }
  if (Bs) throw ((e = Nc), (Bs = !1), (Nc = null), e)
}
function ae(e, t) {
  var r = t[qc]
  r === void 0 && (r = t[qc] = new Set())
  var n = e + '__bubble'
  r.has(n) || (Qy(t, e, 2, !1), r.add(n))
}
function Lu(e, t, r) {
  var n = 0
  t && (n |= 4), Qy(r, e, n, t)
}
var Ha = '_reactListening' + Math.random().toString(36).slice(2)
function Ki(e) {
  if (!e[Ha]) {
    ;(e[Ha] = !0),
      ry.forEach(function (r) {
        r !== 'selectionchange' && (pC.has(r) || Lu(r, !1, e), Lu(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ha] || ((t[Ha] = !0), Lu('selectionchange', !1, t))
  }
}
function Qy(e, t, r, n) {
  switch (zy(t)) {
    case 1:
      var o = Pk
      break
    case 4:
      o = Ek
      break
    default:
      o = vf
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !Oc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function Du(e, t, r, n, o) {
  var i = n
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return
      var a = n.tag
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = wn(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  vy(function () {
    var u = i,
      c = hf(r),
      d = []
    e: {
      var f = Ky.get(e)
      if (f !== void 0) {
        var h = bf,
          v = e
        switch (e) {
          case 'keypress':
            if (ys(r) === 0) break e
          case 'keydown':
          case 'keyup':
            h = Wk
            break
          case 'focusin':
            ;(v = 'focus'), (h = Eu)
            break
          case 'focusout':
            ;(v = 'blur'), (h = Eu)
            break
          case 'beforeblur':
          case 'afterblur':
            h = Eu
            break
          case 'click':
            if (r.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Eh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = Rk
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = Gk
            break
          case Wy:
          case Uy:
          case Hy:
            h = Lk
            break
          case Gy:
            h = Yk
            break
          case 'scroll':
            h = $k
            break
          case 'wheel':
            h = Xk
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = Bk
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Ah
        }
        var S = (t & 4) !== 0,
          C = !S && e === 'scroll',
          m = S ? (f !== null ? f + 'Capture' : null) : f
        S = []
        for (var p = u, g; p !== null; ) {
          g = p
          var w = g.stateNode
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w), m !== null && ((w = Ni(p, m)), w != null && S.push(Yi(p, w, g)))),
            C)
          )
            break
          p = p.return
        }
        0 < S.length && ((f = new h(f, v, null, r, c)), d.push({ event: f, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          f && r !== Ic && (v = r.relatedTarget || r.fromElement) && (wn(v) || v[kr]))
        )
          break e
        if (
          (h || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((v = r.relatedTarget || r.toElement),
              (h = u),
              (v = v ? wn(v) : null),
              v !== null && ((C = Vn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((S = Eh),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = Ah), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (p = 'pointer')),
            (C = h == null ? f : Jn(h)),
            (g = v == null ? f : Jn(v)),
            (f = new S(w, p + 'leave', h, r, c)),
            (f.target = C),
            (f.relatedTarget = g),
            (w = null),
            wn(c) === u &&
              ((S = new S(m, p + 'enter', v, r, c)),
              (S.target = g),
              (S.relatedTarget = C),
              (w = S)),
            (C = w),
            h && v)
          )
            t: {
              for (S = h, m = v, p = 0, g = S; g; g = Hn(g)) p++
              for (g = 0, w = m; w; w = Hn(w)) g++
              for (; 0 < p - g; ) (S = Hn(S)), p--
              for (; 0 < g - p; ) (m = Hn(m)), g--
              for (; p--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t
                ;(S = Hn(S)), (m = Hn(m))
              }
              S = null
            }
          else S = null
          h !== null && Nh(d, f, h, S, !1), v !== null && C !== null && Nh(d, C, v, S, !0)
        }
      }
      e: {
        if (
          ((f = u ? Jn(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var T = nC
        else if (Mh(f))
          if (Iy) T = sC
          else {
            T = iC
            var A = oC
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (T = aC)
        if (T && (T = T(e, u))) {
          Fy(d, T, r, c)
          break e
        }
        A && A(e, f, u),
          e === 'focusout' &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === 'number' &&
            Mc(f, 'number', f.value)
      }
      switch (((A = u ? Jn(u) : window), e)) {
        case 'focusin':
          ;(Mh(A) || A.contentEditable === 'true') && ((qn = A), (Hc = u), (hi = null))
          break
        case 'focusout':
          hi = Hc = qn = null
          break
        case 'mousedown':
          Gc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Gc = !1), Ih(d, r, c)
          break
        case 'selectionchange':
          if (cC) break
        case 'keydown':
        case 'keyup':
          Ih(d, r, c)
      }
      var P
      if (wf)
        e: {
          switch (e) {
            case 'compositionstart':
              var $ = 'onCompositionStart'
              break e
            case 'compositionend':
              $ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              $ = 'onCompositionUpdate'
              break e
          }
          $ = void 0
        }
      else
        Xn
          ? Dy(e, r) && ($ = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && ($ = 'onCompositionStart')
      $ &&
        (Ly &&
          r.locale !== 'ko' &&
          (Xn || $ !== 'onCompositionStart'
            ? $ === 'onCompositionEnd' && Xn && (P = My())
            : ((Nr = c), (Sf = 'value' in Nr ? Nr.value : Nr.textContent), (Xn = !0))),
        (A = Ns(u, $)),
        0 < A.length &&
          (($ = new $h($, e, null, r, c)),
          d.push({ event: $, listeners: A }),
          P ? ($.data = P) : ((P = By(r)), P !== null && ($.data = P)))),
        (P = Zk ? Jk(e, r) : eC(e, r)) &&
          ((u = Ns(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new $h('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)))
    }
    Yy(d, t)
  })
}
function Yi(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function Ns(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ni(e, r)),
      i != null && n.unshift(Yi(e, i, o)),
      (i = Ni(e, t)),
      i != null && n.push(Yi(e, i, o))),
      (e = e.return)
  }
  return n
}
function Hn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Nh(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Ni(r, i)), l != null && a.unshift(Yi(r, l, s)))
        : o || ((l = Ni(r, i)), l != null && a.push(Yi(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var hC = /\r\n?/g,
  mC = /\u0000|\uFFFD/g
function jh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      hC,
      `
`
    )
    .replace(mC, '')
}
function Ga(e, t, r) {
  if (((t = jh(t)), jh(e) !== t && r)) throw Error(R(425))
}
function js() {}
var Kc = null,
  Yc = null
function Qc(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Xc = typeof setTimeout == 'function' ? setTimeout : void 0,
  gC = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Wh = typeof Promise == 'function' ? Promise : void 0,
  yC =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Wh < 'u'
      ? function (e) {
          return Wh.resolve(null).then(e).catch(vC)
        }
      : Xc
function vC(e) {
  setTimeout(function () {
    throw e
  })
}
function Bu(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), Ui(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  Ui(t)
}
function Kr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Uh(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e
        t--
      } else r === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Do = Math.random().toString(36).slice(2),
  rr = '__reactFiber$' + Do,
  Qi = '__reactProps$' + Do,
  kr = '__reactContainer$' + Do,
  qc = '__reactEvents$' + Do,
  SC = '__reactListeners$' + Do,
  bC = '__reactHandles$' + Do
function wn(e) {
  var t = e[rr]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[kr] || r[rr])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Uh(e); e !== null; ) {
          if ((r = e[rr])) return r
          e = Uh(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function ga(e) {
  return (
    (e = e[rr] || e[kr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(R(33))
}
function Il(e) {
  return e[Qi] || null
}
var Zc = [],
  eo = -1
function ln(e) {
  return { current: e }
}
function le(e) {
  0 > eo || ((e.current = Zc[eo]), (Zc[eo] = null), eo--)
}
function ne(e, t) {
  eo++, (Zc[eo] = e.current), (e.current = t)
}
var nn = {},
  Ge = ln(nn),
  lt = ln(!1),
  zn = nn
function ko(e, t) {
  var r = e.type.contextTypes
  if (!r) return nn
  var n = e.stateNode
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in r) o[i] = t[i]
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function ut(e) {
  return (e = e.childContextTypes), e != null
}
function Ws() {
  le(lt), le(Ge)
}
function Hh(e, t, r) {
  if (Ge.current !== nn) throw Error(R(168))
  ne(Ge, t), ne(lt, r)
}
function Xy(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error(R(108, ok(e) || 'Unknown', o))
  return Se({}, r, n)
}
function Us(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (zn = Ge.current),
    ne(Ge, e),
    ne(lt, lt.current),
    !0
  )
}
function Gh(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(R(169))
  r
    ? ((e = Xy(e, t, zn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      le(lt),
      le(Ge),
      ne(Ge, e))
    : le(lt),
    ne(lt, r)
}
var fr = null,
  Vl = !1,
  Fu = !1
function qy(e) {
  fr === null ? (fr = [e]) : fr.push(e)
}
function xC(e) {
  ;(Vl = !0), qy(e)
}
function un() {
  if (!Fu && fr !== null) {
    Fu = !0
    var e = 0,
      t = ee
    try {
      var r = fr
      for (ee = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(fr = null), (Vl = !1)
    } catch (o) {
      throw (fr !== null && (fr = fr.slice(e + 1)), wy(mf, un), o)
    } finally {
      ;(ee = t), (Fu = !1)
    }
  }
  return null
}
var to = [],
  ro = 0,
  Hs = null,
  Gs = 0,
  Rt = [],
  zt = 0,
  Mn = null,
  hr = 1,
  mr = ''
function gn(e, t) {
  ;(to[ro++] = Gs), (to[ro++] = Hs), (Hs = e), (Gs = t)
}
function Zy(e, t, r) {
  ;(Rt[zt++] = hr), (Rt[zt++] = mr), (Rt[zt++] = Mn), (Mn = e)
  var n = hr
  e = mr
  var o = 32 - Ut(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - Ut(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (hr = (1 << (32 - Ut(t) + o)) | (r << o) | n),
      (mr = i + e)
  } else (hr = (1 << i) | (r << o) | n), (mr = e)
}
function Cf(e) {
  e.return !== null && (gn(e, 1), Zy(e, 1, 0))
}
function _f(e) {
  for (; e === Hs; ) (Hs = to[--ro]), (to[ro] = null), (Gs = to[--ro]), (to[ro] = null)
  for (; e === Mn; )
    (Mn = Rt[--zt]),
      (Rt[zt] = null),
      (mr = Rt[--zt]),
      (Rt[zt] = null),
      (hr = Rt[--zt]),
      (Rt[zt] = null)
}
var vt = null,
  gt = null,
  fe = !1,
  jt = null
function Jy(e, t) {
  var r = Mt(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Kh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (gt = Kr(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (gt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Mn !== null ? { id: hr, overflow: mr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = Mt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (vt = e),
            (gt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ed(e) {
  if (fe) {
    var t = gt
    if (t) {
      var r = t
      if (!Kh(e, t)) {
        if (Jc(e)) throw Error(R(418))
        t = Kr(r.nextSibling)
        var n = vt
        t && Kh(e, t) ? Jy(n, r) : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (vt = e))
      }
    } else {
      if (Jc(e)) throw Error(R(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (vt = e)
    }
  }
}
function Yh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  vt = e
}
function Ka(e) {
  if (e !== vt) return !1
  if (!fe) return Yh(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Qc(e.type, e.memoizedProps))),
    t && (t = gt))
  ) {
    if (Jc(e)) throw (ev(), Error(R(418)))
    for (; t; ) Jy(e, t), (t = Kr(t.nextSibling))
  }
  if ((Yh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              gt = Kr(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      gt = null
    }
  } else gt = vt ? Kr(e.stateNode.nextSibling) : null
  return !0
}
function ev() {
  for (var e = gt; e; ) e = Kr(e.nextSibling)
}
function Co() {
  ;(gt = vt = null), (fe = !1)
}
function Tf(e) {
  jt === null ? (jt = [e]) : jt.push(e)
}
var wC = Pr.ReactCurrentBatchConfig
function Ot(e, t) {
  if (e && e.defaultProps) {
    ;(t = Se({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var Ks = ln(null),
  Ys = null,
  no = null,
  Pf = null
function Ef() {
  Pf = no = Ys = null
}
function $f(e) {
  var t = Ks.current
  le(Ks), (e._currentValue = t)
}
function td(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break
    e = e.return
  }
}
function mo(e, t) {
  ;(Ys = e),
    (Pf = no = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (at = !0), (e.firstContext = null))
}
function Bt(e) {
  var t = e._currentValue
  if (Pf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), no === null)) {
      if (Ys === null) throw Error(R(308))
      ;(no = e), (Ys.dependencies = { lanes: 0, firstContext: e })
    } else no = no.next = e
  return t
}
var kn = null
function Af(e) {
  kn === null ? (kn = [e]) : kn.push(e)
}
function tv(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), Af(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Cr(e, n)
  )
}
function Cr(e, t) {
  e.lanes |= t
  var r = e.alternate
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return)
  return r.tag === 3 ? r.stateNode : null
}
var Br = !1
function Rf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function rv(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Yr(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), K & 2)) {
    var o = n.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), Cr(e, r)
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Af(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Cr(e, r)
  )
}
function vs(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), gf(e, r)
  }
}
function Qh(e, t) {
  var r = e.updateQueue,
    n = e.alternate
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next)
      } while (r !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r)
    return
  }
  ;(e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t)
}
function Qs(e, t, r, n) {
  var o = e.updateQueue
  Br = !1
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var l = s,
      u = l.next
    ;(l.next = null), a === null ? (i = u) : (a.next = u), (a = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a && (s === null ? (c.firstBaseUpdate = u) : (s.next = u), (c.lastBaseUpdate = l)))
  }
  if (i !== null) {
    var d = o.baseState
    ;(a = 0), (c = u = l = null), (s = i)
    do {
      var f = s.lane,
        h = s.eventTime
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var v = e,
            S = s
          switch (((f = t), (h = r), S.tag)) {
            case 1:
              if (((v = S.payload), typeof v == 'function')) {
                d = v.call(h, d, f)
                break e
              }
              d = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (((v = S.payload), (f = typeof v == 'function' ? v.call(h, d, f) : v), f == null))
                break e
              d = Se({}, d, f)
              break e
            case 2:
              Br = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [s]) : f.push(s))
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(f = s), (s = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (a |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Dn |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function Xh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function')) throw Error(R(191, o))
        o.call(n)
      }
    }
}
var nv = new ty.Component().refs
function rd(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Se({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = Ze(),
      o = Xr(e),
      i = vr(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = Yr(e, i, o)),
      t !== null && (Ht(t, e, o, n), vs(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = Ze(),
      o = Xr(e),
      i = vr(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Yr(e, i, o)),
      t !== null && (Ht(t, e, o, n), vs(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = Ze(),
      n = Xr(e),
      o = vr(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Yr(e, o, n)),
      t !== null && (Ht(t, e, n, r), vs(t, e, n))
  },
}
function qh(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gi(r, n) || !Gi(o, i)
      : !0
  )
}
function ov(e, t, r) {
  var n = !1,
    o = nn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Bt(i))
      : ((o = ut(t) ? zn : Ge.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? ko(e, o) : nn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Zh(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null)
}
function nd(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = nv), Rf(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Bt(i))
    : ((i = ut(t) ? zn : Ge.current), (o.context = ko(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (rd(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Ol.enqueueReplaceState(o, o.state, null),
      Qs(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Yo(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309))
        var n = r.stateNode
      }
      if (!n) throw Error(R(147, e))
      var o = n,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === nv && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(R(284))
    if (!r._owner) throw Error(R(290, e))
  }
  return e
}
function Ya(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function Jh(e) {
  var t = e._init
  return t(e._payload)
}
function iv(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p)
    }
  }
  function r(m, p) {
    if (!e) return null
    for (; p !== null; ) t(m, p), (p = p.sibling)
    return null
  }
  function n(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling)
    return m
  }
  function o(m, p) {
    return (m = qr(m, p)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g) : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    )
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = Uu(g, m.mode, w)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p)
  }
  function l(m, p, g, w) {
    var T = g.type
    return T === Qn
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == 'object' && T !== null && T.$$typeof === Dr && Jh(T) === p.type))
      ? ((w = o(p, g.props)), (w.ref = Yo(m, p, g)), (w.return = m), w)
      : ((w = Cs(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Yo(m, p, g)),
        (w.return = m),
        w)
  }
  function u(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Hu(g, m.mode, w)), (p.return = m), p)
      : ((p = o(p, g.children || [])), (p.return = m), p)
  }
  function c(m, p, g, w, T) {
    return p === null || p.tag !== 7
      ? ((p = En(g, m.mode, w, T)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p)
  }
  function d(m, p, g) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Uu('' + p, m.mode, g)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Fa:
          return (
            (g = Cs(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Yo(m, null, p)),
            (g.return = m),
            g
          )
        case Yn:
          return (p = Hu(p, m.mode, g)), (p.return = m), p
        case Dr:
          var w = p._init
          return d(m, w(p._payload), g)
      }
      if (ri(p) || Wo(p)) return (p = En(p, m.mode, g, null)), (p.return = m), p
      Ya(m, p)
    }
    return null
  }
  function f(m, p, g, w) {
    var T = p !== null ? p.key : null
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return T !== null ? null : s(m, p, '' + g, w)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Fa:
          return g.key === T ? l(m, p, g, w) : null
        case Yn:
          return g.key === T ? u(m, p, g, w) : null
        case Dr:
          return (T = g._init), f(m, p, T(g._payload), w)
      }
      if (ri(g) || Wo(g)) return T !== null ? null : c(m, p, g, w, null)
      Ya(m, g)
    }
    return null
  }
  function h(m, p, g, w, T) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(g) || null), s(p, m, '' + w, T)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Fa:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, T)
        case Yn:
          return (m = m.get(w.key === null ? g : w.key) || null), u(p, m, w, T)
        case Dr:
          var A = w._init
          return h(m, p, g, A(w._payload), T)
      }
      if (ri(w) || Wo(w)) return (m = m.get(g) || null), c(p, m, w, T, null)
      Ya(p, w)
    }
    return null
  }
  function v(m, p, g, w) {
    for (var T = null, A = null, P = p, $ = (p = 0), F = null; P !== null && $ < g.length; $++) {
      P.index > $ ? ((F = P), (P = null)) : (F = P.sibling)
      var D = f(m, P, g[$], w)
      if (D === null) {
        P === null && (P = F)
        break
      }
      e && P && D.alternate === null && t(m, P),
        (p = i(D, p, $)),
        A === null ? (T = D) : (A.sibling = D),
        (A = D),
        (P = F)
    }
    if ($ === g.length) return r(m, P), fe && gn(m, $), T
    if (P === null) {
      for (; $ < g.length; $++)
        (P = d(m, g[$], w)),
          P !== null && ((p = i(P, p, $)), A === null ? (T = P) : (A.sibling = P), (A = P))
      return fe && gn(m, $), T
    }
    for (P = n(m, P); $ < g.length; $++)
      (F = h(P, m, $, g[$], w)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? $ : F.key),
          (p = i(F, p, $)),
          A === null ? (T = F) : (A.sibling = F),
          (A = F))
    return (
      e &&
        P.forEach(function (oe) {
          return t(m, oe)
        }),
      fe && gn(m, $),
      T
    )
  }
  function S(m, p, g, w) {
    var T = Wo(g)
    if (typeof T != 'function') throw Error(R(150))
    if (((g = T.call(g)), g == null)) throw Error(R(151))
    for (
      var A = (T = null), P = p, $ = (p = 0), F = null, D = g.next();
      P !== null && !D.done;
      $++, D = g.next()
    ) {
      P.index > $ ? ((F = P), (P = null)) : (F = P.sibling)
      var oe = f(m, P, D.value, w)
      if (oe === null) {
        P === null && (P = F)
        break
      }
      e && P && oe.alternate === null && t(m, P),
        (p = i(oe, p, $)),
        A === null ? (T = oe) : (A.sibling = oe),
        (A = oe),
        (P = F)
    }
    if (D.done) return r(m, P), fe && gn(m, $), T
    if (P === null) {
      for (; !D.done; $++, D = g.next())
        (D = d(m, D.value, w)),
          D !== null && ((p = i(D, p, $)), A === null ? (T = D) : (A.sibling = D), (A = D))
      return fe && gn(m, $), T
    }
    for (P = n(m, P); !D.done; $++, D = g.next())
      (D = h(P, m, $, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? $ : D.key),
          (p = i(D, p, $)),
          A === null ? (T = D) : (A.sibling = D),
          (A = D))
    return (
      e &&
        P.forEach(function (Ae) {
          return t(m, Ae)
        }),
      fe && gn(m, $),
      T
    )
  }
  function C(m, p, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Qn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Fa:
          e: {
            for (var T = g.key, A = p; A !== null; ) {
              if (A.key === T) {
                if (((T = g.type), T === Qn)) {
                  if (A.tag === 7) {
                    r(m, A.sibling), (p = o(A, g.props.children)), (p.return = m), (m = p)
                    break e
                  }
                } else if (
                  A.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Dr && Jh(T) === A.type)
                ) {
                  r(m, A.sibling),
                    (p = o(A, g.props)),
                    (p.ref = Yo(m, A, g)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                r(m, A)
                break
              } else t(m, A)
              A = A.sibling
            }
            g.type === Qn
              ? ((p = En(g.props.children, m.mode, w, g.key)), (p.return = m), (m = p))
              : ((w = Cs(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Yo(m, p, g)),
                (w.return = m),
                (m = w))
          }
          return a(m)
        case Yn:
          e: {
            for (A = g.key; p !== null; ) {
              if (p.key === A)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  r(m, p.sibling), (p = o(p, g.children || [])), (p.return = m), (m = p)
                  break e
                } else {
                  r(m, p)
                  break
                }
              else t(m, p)
              p = p.sibling
            }
            ;(p = Hu(g, m.mode, w)), (p.return = m), (m = p)
          }
          return a(m)
        case Dr:
          return (A = g._init), C(m, p, A(g._payload), w)
      }
      if (ri(g)) return v(m, p, g, w)
      if (Wo(g)) return S(m, p, g, w)
      Ya(m, g)
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        p !== null && p.tag === 6
          ? (r(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
          : (r(m, p), (p = Uu(g, m.mode, w)), (p.return = m), (m = p)),
        a(m))
      : r(m, p)
  }
  return C
}
var _o = iv(!0),
  av = iv(!1),
  ya = {},
  ir = ln(ya),
  Xi = ln(ya),
  qi = ln(ya)
function Cn(e) {
  if (e === ya) throw Error(R(174))
  return e
}
function zf(e, t) {
  switch ((ne(qi, t), ne(Xi, e), ne(ir, ya), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Dc(t, e))
  }
  le(ir), ne(ir, t)
}
function To() {
  le(ir), le(Xi), le(qi)
}
function sv(e) {
  Cn(qi.current)
  var t = Cn(ir.current),
    r = Dc(t, e.type)
  t !== r && (ne(Xi, e), ne(ir, r))
}
function Mf(e) {
  Xi.current === e && (le(ir), le(Xi))
}
var ge = ln(0)
function Xs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState
      if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Iu = []
function Lf() {
  for (var e = 0; e < Iu.length; e++) Iu[e]._workInProgressVersionPrimary = null
  Iu.length = 0
}
var Ss = Pr.ReactCurrentDispatcher,
  Vu = Pr.ReactCurrentBatchConfig,
  Ln = 0,
  ve = null,
  Pe = null,
  Re = null,
  qs = !1,
  mi = !1,
  Zi = 0,
  kC = 0
function Oe() {
  throw Error(R(321))
}
function Df(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!Gt(e[r], t[r])) return !1
  return !0
}
function Bf(e, t, r, n, o, i) {
  if (
    ((Ln = i),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ss.current = e === null || e.memoizedState === null ? PC : EC),
    (e = r(n, o)),
    mi)
  ) {
    i = 0
    do {
      if (((mi = !1), (Zi = 0), 25 <= i)) throw Error(R(301))
      ;(i += 1), (Re = Pe = null), (t.updateQueue = null), (Ss.current = $C), (e = r(n, o))
    } while (mi)
  }
  if (
    ((Ss.current = Zs),
    (t = Pe !== null && Pe.next !== null),
    (Ln = 0),
    (Re = Pe = ve = null),
    (qs = !1),
    t)
  )
    throw Error(R(300))
  return e
}
function Ff() {
  var e = Zi !== 0
  return (Zi = 0), e
}
function qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return Re === null ? (ve.memoizedState = Re = e) : (Re = Re.next = e), Re
}
function Ft() {
  if (Pe === null) {
    var e = ve.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Pe.next
  var t = Re === null ? ve.memoizedState : Re.next
  if (t !== null) (Re = t), (Pe = e)
  else {
    if (e === null) throw Error(R(310))
    ;(Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Re === null ? (ve.memoizedState = Re = e) : (Re = Re.next = e)
  }
  return Re
}
function Ji(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ou(e) {
  var t = Ft(),
    r = t.queue
  if (r === null) throw Error(R(311))
  r.lastRenderedReducer = e
  var n = Pe,
    o = n.baseQueue,
    i = r.pending
  if (i !== null) {
    if (o !== null) {
      var a = o.next
      ;(o.next = i.next), (i.next = a)
    }
    ;(n.baseQueue = o = i), (r.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (n = n.baseState)
    var s = (a = null),
      l = null,
      u = i
    do {
      var c = u.lane
      if ((Ln & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d), (ve.lanes |= c), (Dn |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    l === null ? (a = n) : (l.next = s),
      Gt(n, t.memoizedState) || (at = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (ve.lanes |= i), (Dn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function Nu(e) {
  var t = Ft(),
    r = t.queue
  if (r === null) throw Error(R(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    Gt(i, t.memoizedState) || (at = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function lv() {}
function uv(e, t) {
  var r = ve,
    n = Ft(),
    o = t(),
    i = !Gt(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (at = !0)),
    (n = n.queue),
    If(fv.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), ea(9, dv.bind(null, r, n, o, t), void 0, null), Me === null))
      throw Error(R(349))
    Ln & 30 || cv(r, t, o)
  }
  return o
}
function cv(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function dv(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), pv(t) && hv(e)
}
function fv(e, t, r) {
  return r(function () {
    pv(t) && hv(e)
  })
}
function pv(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !Gt(e, r)
  } catch {
    return !0
  }
}
function hv(e) {
  var t = Cr(e, 1)
  t !== null && Ht(t, e, 1, -1)
}
function em(e) {
  var t = qt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ji,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = TC.bind(null, ve, e)),
    [t.memoizedState, e]
  )
}
function ea(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function mv() {
  return Ft().memoizedState
}
function bs(e, t, r, n) {
  var o = qt()
  ;(ve.flags |= e), (o.memoizedState = ea(1 | t, r, void 0, n === void 0 ? null : n))
}
function Nl(e, t, r, n) {
  var o = Ft()
  n = n === void 0 ? null : n
  var i = void 0
  if (Pe !== null) {
    var a = Pe.memoizedState
    if (((i = a.destroy), n !== null && Df(n, a.deps))) {
      o.memoizedState = ea(t, r, i, n)
      return
    }
  }
  ;(ve.flags |= e), (o.memoizedState = ea(1 | t, r, i, n))
}
function tm(e, t) {
  return bs(8390656, 8, e, t)
}
function If(e, t) {
  return Nl(2048, 8, e, t)
}
function gv(e, t) {
  return Nl(4, 2, e, t)
}
function yv(e, t) {
  return Nl(4, 4, e, t)
}
function vv(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Sv(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Nl(4, 4, vv.bind(null, t, e), r)
}
function Vf() {}
function bv(e, t) {
  var r = Ft()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Df(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function xv(e, t) {
  var r = Ft()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Df(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function wv(e, t, r) {
  return Ln & 21
    ? (Gt(r, t) || ((r = _y()), (ve.lanes |= r), (Dn |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = r))
}
function CC(e, t) {
  var r = ee
  ;(ee = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = Vu.transition
  Vu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ee = r), (Vu.transition = n)
  }
}
function kv() {
  return Ft().memoizedState
}
function _C(e, t, r) {
  var n = Xr(e)
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), Cv(e)))
    _v(t, r)
  else if (((r = tv(e, t, r, n)), r !== null)) {
    var o = Ze()
    Ht(r, e, n, o), Tv(r, t, n)
  }
}
function TC(e, t, r) {
  var n = Xr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (Cv(e)) _v(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), Gt(s, a))) {
          var l = t.interleaved
          l === null ? ((o.next = o), Af(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = tv(e, t, o, n)), r !== null && ((o = Ze()), Ht(r, e, n, o), Tv(r, t, n))
  }
}
function Cv(e) {
  var t = e.alternate
  return e === ve || (t !== null && t === ve)
}
function _v(e, t) {
  mi = qs = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function Tv(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), gf(e, r)
  }
}
var Zs = {
    readContext: Bt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  PC = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (qt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Bt,
    useEffect: tm,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), bs(4194308, 4, vv.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return bs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return bs(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = qt()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = qt()
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = _C.bind(null, ve, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = qt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: em,
    useDebugValue: Vf,
    useDeferredValue: function (e) {
      return (qt().memoizedState = e)
    },
    useTransition: function () {
      var e = em(!1),
        t = e[0]
      return (e = CC.bind(null, e[1])), (qt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ve,
        o = qt()
      if (fe) {
        if (r === void 0) throw Error(R(407))
        r = r()
      } else {
        if (((r = t()), Me === null)) throw Error(R(349))
        Ln & 30 || cv(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        tm(fv.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        ea(9, dv.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = qt(),
        t = Me.identifierPrefix
      if (fe) {
        var r = mr,
          n = hr
        ;(r = (n & ~(1 << (32 - Ut(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Zi++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = kC++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  EC = {
    readContext: Bt,
    useCallback: bv,
    useContext: Bt,
    useEffect: If,
    useImperativeHandle: Sv,
    useInsertionEffect: gv,
    useLayoutEffect: yv,
    useMemo: xv,
    useReducer: Ou,
    useRef: mv,
    useState: function () {
      return Ou(Ji)
    },
    useDebugValue: Vf,
    useDeferredValue: function (e) {
      var t = Ft()
      return wv(t, Pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Ou(Ji)[0],
        t = Ft().memoizedState
      return [e, t]
    },
    useMutableSource: lv,
    useSyncExternalStore: uv,
    useId: kv,
    unstable_isNewReconciler: !1,
  },
  $C = {
    readContext: Bt,
    useCallback: bv,
    useContext: Bt,
    useEffect: If,
    useImperativeHandle: Sv,
    useInsertionEffect: gv,
    useLayoutEffect: yv,
    useMemo: xv,
    useReducer: Nu,
    useRef: mv,
    useState: function () {
      return Nu(Ji)
    },
    useDebugValue: Vf,
    useDeferredValue: function (e) {
      var t = Ft()
      return Pe === null ? (t.memoizedState = e) : wv(t, Pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Nu(Ji)[0],
        t = Ft().memoizedState
      return [e, t]
    },
    useMutableSource: lv,
    useSyncExternalStore: uv,
    useId: kv,
    unstable_isNewReconciler: !1,
  }
function Po(e, t) {
  try {
    var r = '',
      n = t
    do (r += nk(n)), (n = n.return)
    while (n)
    var o = r
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function ju(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function od(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var AC = typeof WeakMap == 'function' ? WeakMap : Map
function Pv(e, t, r) {
  ;(r = vr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      el || ((el = !0), (hd = n)), od(e, t)
    }),
    r
  )
}
function Ev(e, t, r) {
  ;(r = vr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        od(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        od(e, t), typeof n != 'function' && (Qr === null ? (Qr = new Set([this])) : Qr.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function rm(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new AC()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = UC.bind(null, e, t, r)), t.then(e, e))
}
function nm(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function om(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null ? (r.tag = 17) : ((t = vr(-1, 1)), (t.tag = 2), Yr(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var RC = Pr.ReactCurrentOwner,
  at = !1
function Qe(e, t, r, n) {
  t.child = e === null ? av(t, null, r, n) : _o(t, e.child, r, n)
}
function im(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    mo(t, o),
    (n = Bf(e, t, r, n, i, o)),
    (r = Ff()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), _r(e, t, o))
      : (fe && r && Cf(t), (t.flags |= 1), Qe(e, t, n, o), t.child)
  )
}
function am(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !Kf(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), $v(e, t, i, n, o))
      : ((e = Cs(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : Gi), r(a, n) && e.ref === t.ref)) return _r(e, t, o)
  }
  return (t.flags |= 1), (e = qr(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function $v(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Gi(i, n) && e.ref === t.ref)
      if (((at = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (at = !0)
      else return (t.lanes = e.lanes), _r(e, t, o)
  }
  return id(e, t, r, n, o)
}
function Av(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(io, mt),
        (mt |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ne(io, mt),
          (mt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ne(io, mt),
        (mt |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), ne(io, mt), (mt |= n)
  return Qe(e, t, o, r), t.child
}
function Rv(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function id(e, t, r, n, o) {
  var i = ut(r) ? zn : Ge.current
  return (
    (i = ko(t, i)),
    mo(t, o),
    (r = Bf(e, t, r, n, i, o)),
    (n = Ff()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), _r(e, t, o))
      : (fe && n && Cf(t), (t.flags |= 1), Qe(e, t, r, o), t.child)
  )
}
function sm(e, t, r, n, o) {
  if (ut(r)) {
    var i = !0
    Us(t)
  } else i = !1
  if ((mo(t, o), t.stateNode === null)) xs(e, t), ov(t, r, n), nd(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null
      ? (u = Bt(u))
      : ((u = ut(r) ? zn : Ge.current), (u = ko(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== u) && Zh(t, a, n, u)),
      (Br = !1)
    var f = t.memoizedState
    ;(a.state = f),
      Qs(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || lt.current || Br
        ? (typeof c == 'function' && (rd(t, r, c, n), (l = t.memoizedState)),
          (s = Br || qh(t, r, s, n, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1))
  } else {
    ;(a = t.stateNode),
      rv(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ot(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = Bt(l))
        : ((l = ut(r) ? zn : Ge.current), (l = ko(t, l)))
    var h = r.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && Zh(t, a, n, l)),
      (Br = !1),
      (f = t.memoizedState),
      (a.state = f),
      Qs(t, n, a, o)
    var v = t.memoizedState
    s !== d || f !== v || lt.current || Br
      ? (typeof h == 'function' && (rd(t, r, h, n), (v = t.memoizedState)),
        (u = Br || qh(t, r, u, n, f, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, v, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, v, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = v)),
        (a.props = n),
        (a.state = v),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1))
  }
  return ad(e, t, r, n, i, o)
}
function ad(e, t, r, n, o, i) {
  Rv(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && Gh(t, r, !1), _r(e, t, i)
  ;(n = t.stateNode), (RC.current = t)
  var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _o(t, e.child, null, i)), (t.child = _o(t, null, s, i)))
      : Qe(e, t, s, i),
    (t.memoizedState = n.state),
    o && Gh(t, r, !0),
    t.child
  )
}
function zv(e) {
  var t = e.stateNode
  t.pendingContext
    ? Hh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hh(e, t.context, !1),
    zf(e, t.containerInfo)
}
function lm(e, t, r, n, o) {
  return Co(), Tf(o), (t.flags |= 256), Qe(e, t, r, n), t.child
}
var sd = { dehydrated: null, treeContext: null, retryLane: 0 }
function ld(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Mv(e, t, r) {
  var n = t.pendingProps,
    o = ge.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ge, o & 1),
    e === null)
  )
    return (
      ed(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Ul(a, n, 0, null)),
              (e = En(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ld(r)),
              (t.memoizedState = sd),
              e)
            : Of(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return zC(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = qr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = qr(s, i)) : ((i = En(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ld(r)
          : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = sd),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = qr(i, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  )
}
function Of(e, t) {
  return (t = Ul({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Qa(e, t, r, n) {
  return (
    n !== null && Tf(n),
    _o(t, e.child, null, r),
    (e = Of(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function zC(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = ju(Error(R(422)))), Qa(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = Ul({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = En(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && _o(t, e.child, null, a),
        (t.child.memoizedState = ld(a)),
        (t.memoizedState = sd),
        i)
  if (!(t.mode & 1)) return Qa(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error(R(419))), (n = ju(i, n, void 0)), Qa(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), at || s)) {
    if (((n = Me), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Cr(e, o), Ht(n, e, o, -1))
    }
    return Gf(), (n = ju(Error(R(421)))), Qa(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = HC.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (gt = Kr(o.nextSibling)),
      (vt = t),
      (fe = !0),
      (jt = null),
      e !== null &&
        ((Rt[zt++] = hr),
        (Rt[zt++] = mr),
        (Rt[zt++] = Mn),
        (hr = e.id),
        (mr = e.overflow),
        (Mn = t)),
      (t = Of(t, n.children)),
      (t.flags |= 4096),
      t)
}
function um(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), td(e.return, t, r)
}
function Wu(e, t, r, n, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o))
}
function Lv(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((Qe(e, t, n.children, r), (n = ge.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && um(e, r, t)
        else if (e.tag === 19) um(e, r, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    n &= 1
  }
  if ((ne(ge, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate), e !== null && Xs(e) === null && (o = r), (r = r.sibling)
        ;(r = o),
          r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)),
          Wu(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Xs(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        Wu(t, !0, r, null, i)
        break
      case 'together':
        Wu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function xs(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function _r(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (Dn |= t.lanes), !(r & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error(R(153))
  if (t.child !== null) {
    for (e = t.child, r = qr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = qr(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function MC(e, t, r) {
  switch (t.tag) {
    case 3:
      zv(t), Co()
      break
    case 5:
      sv(t)
      break
    case 1:
      ut(t.type) && Us(t)
      break
    case 4:
      zf(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      ne(Ks, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ne(ge, ge.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Mv(e, t, r)
          : (ne(ge, ge.current & 1), (e = _r(e, t, r)), e !== null ? e.sibling : null)
      ne(ge, ge.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Lv(e, t, r)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ge, ge.current),
        n)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Av(e, t, r)
  }
  return _r(e, t, r)
}
var Dv, ud, Bv, Fv
Dv = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
    else if (r.tag !== 4 && r.child !== null) {
      ;(r.child.return = r), (r = r.child)
      continue
    }
    if (r === t) break
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return
      r = r.return
    }
    ;(r.sibling.return = r.return), (r = r.sibling)
  }
}
ud = function () {}
Bv = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), Cn(ir.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = Rc(e, o)), (n = Rc(e, n)), (i = [])
        break
      case 'select':
        ;(o = Se({}, o, { value: void 0 })), (n = Se({}, n, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Lc(e, o)), (n = Lc(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = js)
    }
    Bc(r, n)
    var a
    r = null
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u]
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Vi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in n) {
      var l = n[u]
      if (
        ((s = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (r || (r = {}), (r[a] = ''))
            for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), (r[a] = l[a]))
          } else r || (i || (i = []), i.push(u, r)), (r = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Vi.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ae('scroll', e), i || s === l || (i = []))
                : (i = i || []).push(u, l))
    }
    r && (i = i || []).push('style', r)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Fv = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Qo(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling)
        r === null ? (e.tail = null) : (r.sibling = null)
        break
      case 'collapsed':
        r = e.tail
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling)
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null)
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= n), (e.childLanes = r), t
}
function LC(e, t, r) {
  var n = t.pendingProps
  switch ((_f(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null
    case 1:
      return ut(t.type) && Ws(), Ne(t), null
    case 3:
      return (
        (n = t.stateNode),
        To(),
        le(lt),
        le(Ge),
        Lf(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ka(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (yd(jt), (jt = null)))),
        ud(e, t),
        Ne(t),
        null
      )
    case 5:
      Mf(t)
      var o = Cn(qi.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        Bv(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(R(166))
          return Ne(t), null
        }
        if (((e = Cn(ir.current)), Ka(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[rr] = t), (n[Qi] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              ae('cancel', n), ae('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ae('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < oi.length; o++) ae(oi[o], n)
              break
            case 'source':
              ae('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              ae('error', n), ae('load', n)
              break
            case 'details':
              ae('toggle', n)
              break
            case 'input':
              vh(n, i), ae('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }), ae('invalid', n)
              break
            case 'textarea':
              bh(n, i), ae('invalid', n)
          }
          Bc(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Ga(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Ga(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Vi.hasOwnProperty(a) && s != null && a === 'onScroll' && ae('scroll', n)
            }
          switch (r) {
            case 'input':
              Ia(n), Sh(n, i, !0)
              break
            case 'textarea':
              Ia(n), xh(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = js)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = cy(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === 'select' &&
                    ((a = e), n.multiple ? (a.multiple = !0) : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[rr] = t),
            (e[Qi] = n),
            Dv(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Fc(r, n)), r)) {
              case 'dialog':
                ae('cancel', e), ae('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ae('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < oi.length; o++) ae(oi[o], e)
                o = n
                break
              case 'source':
                ae('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                ae('error', e), ae('load', e), (o = n)
                break
              case 'details':
                ae('toggle', e), (o = n)
                break
              case 'input':
                vh(e, n), (o = Rc(e, n)), ae('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Se({}, n, { value: void 0 })),
                  ae('invalid', e)
                break
              case 'textarea':
                bh(e, n), (o = Lc(e, n)), ae('invalid', e)
                break
              default:
                o = n
            }
            Bc(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? py(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && dy(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Oi(e, l)
                    : typeof l == 'number' && Oi(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Vi.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ae('scroll', e)
                      : l != null && cf(e, i, l, a))
              }
            switch (r) {
              case 'input':
                Ia(e), Sh(e, n, !1)
                break
              case 'textarea':
                Ia(e), xh(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + rn(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? co(e, !!n.multiple, i, !1)
                    : n.defaultValue != null && co(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = js)
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
          }
          n && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Ne(t), null
    case 6:
      if (e && t.stateNode != null) Fv(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(R(166))
        if (((r = Cn(qi.current)), Cn(ir.current), Ka(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[rr] = t),
            (i = n.nodeValue !== r) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ga(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ga(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[rr] = t),
            (t.stateNode = n)
      }
      return Ne(t), null
    case 13:
      if (
        (le(ge),
        (n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && gt !== null && t.mode & 1 && !(t.flags & 128))
          ev(), Co(), (t.flags |= 98560), (i = !1)
        else if (((i = Ka(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(R(317))
            i[rr] = t
          } else Co(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (i = !1)
        } else jt !== null && (yd(jt), (jt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ge.current & 1 ? Ee === 0 && (Ee = 3) : Gf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return To(), ud(e, t), e === null && Ki(t.stateNode.containerInfo), Ne(t), null
    case 10:
      return $f(t.type._context), Ne(t), null
    case 17:
      return ut(t.type) && Ws(), Ne(t), null
    case 19:
      if ((le(ge), (i = t.memoizedState), i === null)) return Ne(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Qo(i, !1)
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Xs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Qo(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (r = r.sibling)
                return ne(ge, (ge.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            we() > Eo &&
            ((t.flags |= 128), (n = !0), Qo(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Xs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Qo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !fe)
            )
              return Ne(t), null
          } else
            2 * we() - i.renderingStartTime > Eo &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Qo(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last), r !== null ? (r.sibling = a) : (t.child = a), (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (r = ge.current),
          ne(ge, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ne(t), null)
    case 22:
    case 23:
      return (
        Hf(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? mt & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(R(156, t.tag))
}
function DC(e, t) {
  switch ((_f(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && Ws(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        To(),
        le(lt),
        le(Ge),
        Lf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Mf(t), null
    case 13:
      if ((le(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340))
        Co()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return le(ge), null
    case 4:
      return To(), null
    case 10:
      return $f(t.type._context), null
    case 22:
    case 23:
      return Hf(), null
    case 24:
      return null
    default:
      return null
  }
}
var Xa = !1,
  We = !1,
  BC = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null
function oo(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        be(e, t, n)
      }
    else r.current = null
}
function cd(e, t, r) {
  try {
    r()
  } catch (n) {
    be(e, t, n)
  }
}
var cm = !1
function FC(e, t) {
  if (((Kc = Vs), (e = Ny()), kf(e))) {
    if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var n = r.getSelection && r.getSelection()
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode
          var o = n.anchorOffset,
            i = n.focusNode
          n = n.focusOffset
          try {
            r.nodeType, i.nodeType
          } catch {
            r = null
            break e
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h)
            for (;;) {
              if (d === e) break t
              if (
                (f === r && ++u === o && (s = a),
                f === i && ++c === n && (l = a),
                (h = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = h
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (Yc = { focusedElem: e, selectionRange: r }, Vs = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e)
    else
      for (; L !== null; ) {
        t = L
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var S = v.memoizedProps,
                    C = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ot(t.type, S), C)
                  m.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var g = t.stateNode.containerInfo
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(R(163))
            }
        } catch (w) {
          be(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (L = e)
          break
        }
        L = t.return
      }
  return (v = cm), (cm = !1), v
}
function gi(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && cd(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function jl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next)
    do {
      if ((r.tag & e) === e) {
        var n = r.create
        r.destroy = n()
      }
      r = r.next
    } while (r !== t)
  }
}
function dd(e) {
  var t = e.ref
  if (t !== null) {
    var r = e.stateNode
    switch (e.tag) {
      case 5:
        e = r
        break
      default:
        e = r
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Iv(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Iv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[rr], delete t[Qi], delete t[qc], delete t[SC], delete t[bC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Vv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function dm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vv(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function fd(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = js))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (fd(e, t, r), e = e.sibling; e !== null; ) fd(e, t, r), (e = e.sibling)
}
function pd(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (pd(e, t, r), e = e.sibling; e !== null; ) pd(e, t, r), (e = e.sibling)
}
var Be = null,
  Nt = !1
function Ar(e, t, r) {
  for (r = r.child; r !== null; ) Ov(e, t, r), (r = r.sibling)
}
function Ov(e, t, r) {
  if (or && typeof or.onCommitFiberUnmount == 'function')
    try {
      or.onCommitFiberUnmount(Ll, r)
    } catch {}
  switch (r.tag) {
    case 5:
      We || oo(r, t)
    case 6:
      var n = Be,
        o = Nt
      ;(Be = null),
        Ar(e, t, r),
        (Be = n),
        (Nt = o),
        Be !== null &&
          (Nt
            ? ((e = Be),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Be.removeChild(r.stateNode))
      break
    case 18:
      Be !== null &&
        (Nt
          ? ((e = Be),
            (r = r.stateNode),
            e.nodeType === 8 ? Bu(e.parentNode, r) : e.nodeType === 1 && Bu(e, r),
            Ui(e))
          : Bu(Be, r.stateNode))
      break
    case 4:
      ;(n = Be),
        (o = Nt),
        (Be = r.stateNode.containerInfo),
        (Nt = !0),
        Ar(e, t, r),
        (Be = n),
        (Nt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!We && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && cd(r, t, a), (o = o.next)
        } while (o !== n)
      }
      Ar(e, t, r)
      break
    case 1:
      if (!We && (oo(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (s) {
          be(r, t, s)
        }
      Ar(e, t, r)
      break
    case 21:
      Ar(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((We = (n = We) || r.memoizedState !== null), Ar(e, t, r), (We = n))
        : Ar(e, t, r)
      break
    default:
      Ar(e, t, r)
  }
}
function fm(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new BC()),
      t.forEach(function (n) {
        var o = GC.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function It(e, t) {
  var r = t.deletions
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n]
      try {
        var i = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Be = s.stateNode), (Nt = !1)
              break e
            case 3:
              ;(Be = s.stateNode.containerInfo), (Nt = !0)
              break e
            case 4:
              ;(Be = s.stateNode.containerInfo), (Nt = !0)
              break e
          }
          s = s.return
        }
        if (Be === null) throw Error(R(160))
        Ov(i, a, o), (Be = null), (Nt = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        be(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nv(t, e), (t = t.sibling)
}
function Nv(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((It(t, e), Qt(e), n & 4)) {
        try {
          gi(3, e, e.return), jl(3, e)
        } catch (S) {
          be(e, e.return, S)
        }
        try {
          gi(5, e, e.return)
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 1:
      It(t, e), Qt(e), n & 512 && r !== null && oo(r, r.return)
      break
    case 5:
      if ((It(t, e), Qt(e), n & 512 && r !== null && oo(r, r.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Oi(o, '')
        } catch (S) {
          be(e, e.return, S)
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && ly(o, i), Fc(s, a)
            var u = Fc(s, i)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1]
              c === 'style'
                ? py(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? dy(o, d)
                : c === 'children'
                ? Oi(o, d)
                : cf(o, c, d, u)
            }
            switch (s) {
              case 'input':
                zc(o, i)
                break
              case 'textarea':
                uy(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var h = i.value
                h != null
                  ? co(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? co(o, !!i.multiple, i.defaultValue, !0)
                      : co(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Qi] = i
          } catch (S) {
            be(e, e.return, S)
          }
      }
      break
    case 6:
      if ((It(t, e), Qt(e), n & 4)) {
        if (e.stateNode === null) throw Error(R(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 3:
      if ((It(t, e), Qt(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          Ui(t.containerInfo)
        } catch (S) {
          be(e, e.return, S)
        }
      break
    case 4:
      It(t, e), Qt(e)
      break
    case 13:
      It(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Wf = we())),
        n & 4 && fm(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || c), It(t, e), (We = u)) : It(t, e),
        Qt(e),
        n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (L = e, c = e.child; c !== null; ) {
            for (d = L = c; L !== null; ) {
              switch (((f = L), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gi(4, f, f.return)
                  break
                case 1:
                  oo(f, f.return)
                  var v = f.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(n = f), (r = f.return)
                    try {
                      ;(t = n),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (S) {
                      be(n, r, S)
                    }
                  }
                  break
                case 5:
                  oo(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    hm(d)
                    continue
                  }
              }
              h !== null ? ((h.return = f), (L = h)) : hm(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (s.style.display = fy('display', a)))
              } catch (S) {
                be(e, e.return, S)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (S) {
                be(e, e.return, S)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      It(t, e), Qt(e), n & 4 && fm(e)
      break
    case 21:
      break
    default:
      It(t, e), Qt(e)
  }
}
function Qt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Vv(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(R(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Oi(o, ''), (n.flags &= -33))
          var i = dm(e)
          pd(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = dm(e)
          fd(e, s, a)
          break
        default:
          throw Error(R(161))
      }
    } catch (l) {
      be(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function IC(e, t, r) {
  ;(L = e), jv(e)
}
function jv(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Xa
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || We
        s = Xa
        var u = We
        if (((Xa = a), (We = l) && !u))
          for (L = o; L !== null; )
            (a = L),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? mm(o)
                : l !== null
                ? ((l.return = a), (L = l))
                : mm(o)
        for (; i !== null; ) (L = i), jv(i), (i = i.sibling)
        ;(L = o), (Xa = s), (We = u)
      }
      pm(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : pm(e)
  }
}
function pm(e) {
  for (; L !== null; ) {
    var t = L
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || jl(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !We)
                if (r === null) n.componentDidMount()
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Ot(t.type, r.memoizedProps)
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && Xh(t, i, n)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode
                      break
                    case 1:
                      r = t.child.stateNode
                  }
                Xh(t, a, r)
              }
              break
            case 5:
              var s = t.stateNode
              if (r === null && t.flags & 4) {
                r = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && r.focus()
                    break
                  case 'img':
                    l.src && (r.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && Ui(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(R(163))
          }
        We || (t.flags & 512 && dd(t))
      } catch (f) {
        be(t, t.return, f)
      }
    }
    if (t === e) {
      L = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (L = r)
      break
    }
    L = t.return
  }
}
function hm(e) {
  for (; L !== null; ) {
    var t = L
    if (t === e) {
      L = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (L = r)
      break
    }
    L = t.return
  }
}
function mm(e) {
  for (; L !== null; ) {
    var t = L
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            jl(4, t)
          } catch (l) {
            be(t, r, l)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var o = t.return
            try {
              n.componentDidMount()
            } catch (l) {
              be(t, o, l)
            }
          }
          var i = t.return
          try {
            dd(t)
          } catch (l) {
            be(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            dd(t)
          } catch (l) {
            be(t, a, l)
          }
      }
    } catch (l) {
      be(t, t.return, l)
    }
    if (t === e) {
      L = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (L = s)
      break
    }
    L = t.return
  }
}
var VC = Math.ceil,
  Js = Pr.ReactCurrentDispatcher,
  Nf = Pr.ReactCurrentOwner,
  Dt = Pr.ReactCurrentBatchConfig,
  K = 0,
  Me = null,
  _e = null,
  Ie = 0,
  mt = 0,
  io = ln(0),
  Ee = 0,
  ta = null,
  Dn = 0,
  Wl = 0,
  jf = 0,
  yi = null,
  ot = null,
  Wf = 0,
  Eo = 1 / 0,
  dr = null,
  el = !1,
  hd = null,
  Qr = null,
  qa = !1,
  jr = null,
  tl = 0,
  vi = 0,
  md = null,
  ws = -1,
  ks = 0
function Ze() {
  return K & 6 ? we() : ws !== -1 ? ws : (ws = we())
}
function Xr(e) {
  return e.mode & 1
    ? K & 2 && Ie !== 0
      ? Ie & -Ie
      : wC.transition !== null
      ? (ks === 0 && (ks = _y()), ks)
      : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zy(e.type))), e)
    : 1
}
function Ht(e, t, r, n) {
  if (50 < vi) throw ((vi = 0), (md = null), Error(R(185)))
  ha(e, r, n),
    (!(K & 2) || e !== Me) &&
      (e === Me && (!(K & 2) && (Wl |= r), Ee === 4 && Vr(e, Ie)),
      ct(e, n),
      r === 1 && K === 0 && !(t.mode & 1) && ((Eo = we() + 500), Vl && un()))
}
function ct(e, t) {
  var r = e.callbackNode
  wk(e, t)
  var n = Is(e, e === Me ? Ie : 0)
  if (n === 0) r !== null && Ch(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ch(r), t === 1))
      e.tag === 0 ? xC(gm.bind(null, e)) : qy(gm.bind(null, e)),
        yC(function () {
          !(K & 6) && un()
        }),
        (r = null)
    else {
      switch (Ty(n)) {
        case 1:
          r = mf
          break
        case 4:
          r = ky
          break
        case 16:
          r = Fs
          break
        case 536870912:
          r = Cy
          break
        default:
          r = Fs
      }
      r = Xv(r, Wv.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function Wv(e, t) {
  if (((ws = -1), (ks = 0), K & 6)) throw Error(R(327))
  var r = e.callbackNode
  if (go() && e.callbackNode !== r) return null
  var n = Is(e, e === Me ? Ie : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = rl(e, n)
  else {
    t = n
    var o = K
    K |= 2
    var i = Hv()
    ;(Me !== e || Ie !== t) && ((dr = null), (Eo = we() + 500), Pn(e, t))
    do
      try {
        jC()
        break
      } catch (s) {
        Uv(e, s)
      }
    while (1)
    Ef(), (Js.current = i), (K = o), _e !== null ? (t = 0) : ((Me = null), (Ie = 0), (t = Ee))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = jc(e)), o !== 0 && ((n = o), (t = gd(e, o)))), t === 1))
      throw ((r = ta), Pn(e, 0), Vr(e, n), ct(e, we()), r)
    if (t === 6) Vr(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !OC(o) &&
          ((t = rl(e, n)), t === 2 && ((i = jc(e)), i !== 0 && ((n = i), (t = gd(e, i)))), t === 1))
      )
        throw ((r = ta), Pn(e, 0), Vr(e, n), ct(e, we()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(R(345))
        case 2:
          yn(e, ot, dr)
          break
        case 3:
          if ((Vr(e, n), (n & 130023424) === n && ((t = Wf + 500 - we()), 10 < t))) {
            if (Is(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ze(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Xc(yn.bind(null, e, ot, dr), t)
            break
          }
          yn(e, ot, dr)
          break
        case 4:
          if ((Vr(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Ut(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = we() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * VC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Xc(yn.bind(null, e, ot, dr), n)
            break
          }
          yn(e, ot, dr)
          break
        case 5:
          yn(e, ot, dr)
          break
        default:
          throw Error(R(329))
      }
    }
  }
  return ct(e, we()), e.callbackNode === r ? Wv.bind(null, e) : null
}
function gd(e, t) {
  var r = yi
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = ot), (ot = r), t !== null && yd(t)),
    e
  )
}
function yd(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e)
}
function OC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Gt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Vr(e, t) {
  for (
    t &= ~jf, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ut(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function gm(e) {
  if (K & 6) throw Error(R(327))
  go()
  var t = Is(e, 0)
  if (!(t & 1)) return ct(e, we()), null
  var r = rl(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = jc(e)
    n !== 0 && ((t = n), (r = gd(e, n)))
  }
  if (r === 1) throw ((r = ta), Pn(e, 0), Vr(e, t), ct(e, we()), r)
  if (r === 6) throw Error(R(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), yn(e, ot, dr), ct(e, we()), null
  )
}
function Uf(e, t) {
  var r = K
  K |= 1
  try {
    return e(t)
  } finally {
    ;(K = r), K === 0 && ((Eo = we() + 500), Vl && un())
  }
}
function Bn(e) {
  jr !== null && jr.tag === 0 && !(K & 6) && go()
  var t = K
  K |= 1
  var r = Dt.transition,
    n = ee
  try {
    if (((Dt.transition = null), (ee = 1), e)) return e()
  } finally {
    ;(ee = n), (Dt.transition = r), (K = t), !(K & 6) && un()
  }
}
function Hf() {
  ;(mt = io.current), le(io)
}
function Pn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), gC(r)), _e !== null))
    for (r = _e.return; r !== null; ) {
      var n = r
      switch ((_f(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Ws()
          break
        case 3:
          To(), le(lt), le(Ge), Lf()
          break
        case 5:
          Mf(n)
          break
        case 4:
          To()
          break
        case 13:
          le(ge)
          break
        case 19:
          le(ge)
          break
        case 10:
          $f(n.type._context)
          break
        case 22:
        case 23:
          Hf()
      }
      r = r.return
    }
  if (
    ((Me = e),
    (_e = e = qr(e.current, null)),
    (Ie = mt = t),
    (Ee = 0),
    (ta = null),
    (jf = Wl = Dn = 0),
    (ot = yi = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((r = kn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    kn = null
  }
  return e
}
function Uv(e, t) {
  do {
    var r = _e
    try {
      if ((Ef(), (Ss.current = Zs), qs)) {
        for (var n = ve.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        qs = !1
      }
      if (
        ((Ln = 0),
        (Re = Pe = ve = null),
        (mi = !1),
        (Zi = 0),
        (Nf.current = null),
        r === null || r.return === null)
      ) {
        ;(Ee = 1), (ta = t), (_e = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t
        if (
          ((t = Ie),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var h = nm(a)
          if (h !== null) {
            ;(h.flags &= -257), om(h, a, s, i, t), h.mode & 1 && rm(i, u, t), (t = h), (l = u)
            var v = t.updateQueue
            if (v === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else v.add(l)
            break e
          } else {
            if (!(t & 1)) {
              rm(i, u, t), Gf()
              break e
            }
            l = Error(R(426))
          }
        } else if (fe && s.mode & 1) {
          var C = nm(a)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), om(C, a, s, i, t), Tf(Po(l, s))
            break e
          }
        }
        ;(i = l = Po(l, s)), Ee !== 4 && (Ee = 2), yi === null ? (yi = [i]) : yi.push(i), (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = Pv(i, l, t)
              Qh(i, m)
              break e
            case 1:
              s = l
              var p = i.type,
                g = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Qr === null || !Qr.has(g))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = Ev(i, s, t)
                Qh(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Kv(r)
    } catch (T) {
      ;(t = T), _e === r && r !== null && (_e = r = r.return)
      continue
    }
    break
  } while (1)
}
function Hv() {
  var e = Js.current
  return (Js.current = Zs), e === null ? Zs : e
}
function Gf() {
  ;(Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Me === null || (!(Dn & 268435455) && !(Wl & 268435455)) || Vr(Me, Ie)
}
function rl(e, t) {
  var r = K
  K |= 2
  var n = Hv()
  ;(Me !== e || Ie !== t) && ((dr = null), Pn(e, t))
  do
    try {
      NC()
      break
    } catch (o) {
      Uv(e, o)
    }
  while (1)
  if ((Ef(), (K = r), (Js.current = n), _e !== null)) throw Error(R(261))
  return (Me = null), (Ie = 0), Ee
}
function NC() {
  for (; _e !== null; ) Gv(_e)
}
function jC() {
  for (; _e !== null && !pk(); ) Gv(_e)
}
function Gv(e) {
  var t = Qv(e.alternate, e, mt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Kv(e) : (_e = t), (Nf.current = null)
}
function Kv(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = DC(r, t)), r !== null)) {
        ;(r.flags &= 32767), (_e = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ee = 6), (_e = null)
        return
      }
    } else if (((r = LC(r, t, mt)), r !== null)) {
      _e = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      _e = t
      return
    }
    _e = t = e
  } while (t !== null)
  Ee === 0 && (Ee = 5)
}
function yn(e, t, r) {
  var n = ee,
    o = Dt.transition
  try {
    ;(Dt.transition = null), (ee = 1), WC(e, t, r, n)
  } finally {
    ;(Dt.transition = o), (ee = n)
  }
  return null
}
function WC(e, t, r, n) {
  do go()
  while (jr !== null)
  if (K & 6) throw Error(R(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(R(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (kk(e, i),
    e === Me && ((_e = Me = null), (Ie = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      qa ||
      ((qa = !0),
      Xv(Fs, function () {
        return go(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = Dt.transition), (Dt.transition = null)
    var a = ee
    ee = 1
    var s = K
    ;(K |= 4),
      (Nf.current = null),
      FC(e, r),
      Nv(r, e),
      uC(Yc),
      (Vs = !!Kc),
      (Yc = Kc = null),
      (e.current = r),
      IC(r),
      hk(),
      (K = s),
      (ee = a),
      (Dt.transition = i)
  } else e.current = r
  if (
    (qa && ((qa = !1), (jr = e), (tl = o)),
    (i = e.pendingLanes),
    i === 0 && (Qr = null),
    yk(r.stateNode),
    ct(e, we()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (el) throw ((el = !1), (e = hd), (hd = null), e)
  return (
    tl & 1 && e.tag !== 0 && go(),
    (i = e.pendingLanes),
    i & 1 ? (e === md ? vi++ : ((vi = 0), (md = e))) : (vi = 0),
    un(),
    null
  )
}
function go() {
  if (jr !== null) {
    var e = Ty(tl),
      t = Dt.transition,
      r = ee
    try {
      if (((Dt.transition = null), (ee = 16 > e ? 16 : e), jr === null)) var n = !1
      else {
        if (((e = jr), (jr = null), (tl = 0), K & 6)) throw Error(R(331))
        var o = K
        for (K |= 4, L = e.current; L !== null; ) {
          var i = L,
            a = i.child
          if (L.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (L = u; L !== null; ) {
                  var c = L
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gi(8, c, i)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (L = d)
                  else
                    for (; L !== null; ) {
                      c = L
                      var f = c.sibling,
                        h = c.return
                      if ((Iv(c), c === u)) {
                        L = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = h), (L = f)
                        break
                      }
                      L = h
                    }
                }
              }
              var v = i.alternate
              if (v !== null) {
                var S = v.child
                if (S !== null) {
                  v.child = null
                  do {
                    var C = S.sibling
                    ;(S.sibling = null), (S = C)
                  } while (S !== null)
                }
              }
              L = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (L = a)
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gi(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (L = m)
                break e
              }
              L = i.return
            }
        }
        var p = e.current
        for (L = p; L !== null; ) {
          a = L
          var g = a.child
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (L = g)
          else
            e: for (a = p; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, s)
                  }
                } catch (T) {
                  be(s, s.return, T)
                }
              if (s === a) {
                L = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (L = w)
                break e
              }
              L = s.return
            }
        }
        if (((K = o), un(), or && typeof or.onPostCommitFiberRoot == 'function'))
          try {
            or.onPostCommitFiberRoot(Ll, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(ee = r), (Dt.transition = t)
    }
  }
  return !1
}
function ym(e, t, r) {
  ;(t = Po(r, t)),
    (t = Pv(e, t, 1)),
    (e = Yr(e, t, 1)),
    (t = Ze()),
    e !== null && (ha(e, 1, t), ct(e, t))
}
function be(e, t, r) {
  if (e.tag === 3) ym(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ym(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (Qr === null || !Qr.has(n)))
        ) {
          ;(e = Po(r, e)),
            (e = Ev(t, e, 1)),
            (t = Yr(t, e, 1)),
            (e = Ze()),
            t !== null && (ha(t, 1, e), ct(t, e))
          break
        }
      }
      t = t.return
    }
}
function UC(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = Ze()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Me === e &&
      (Ie & r) === r &&
      (Ee === 4 || (Ee === 3 && (Ie & 130023424) === Ie && 500 > we() - Wf) ? Pn(e, 0) : (jf |= r)),
    ct(e, t)
}
function Yv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304)) : (t = 1))
  var r = Ze()
  ;(e = Cr(e, t)), e !== null && (ha(e, t, r), ct(e, r))
}
function HC(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), Yv(e, r)
}
function GC(e, t) {
  var r = 0
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState
      o !== null && (r = o.retryLane)
      break
    case 19:
      n = e.stateNode
      break
    default:
      throw Error(R(314))
  }
  n !== null && n.delete(t), Yv(e, r)
}
var Qv
Qv = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) at = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (at = !1), MC(e, t, r)
      at = !!(e.flags & 131072)
    }
  else (at = !1), fe && t.flags & 1048576 && Zy(t, Gs, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      xs(e, t), (e = t.pendingProps)
      var o = ko(t, Ge.current)
      mo(t, r), (o = Bf(null, t, n, e, o, r))
      var i = Ff()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(n) ? ((i = !0), Us(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Rf(t),
            (o.updater = Ol),
            (t.stateNode = o),
            (o._reactInternals = t),
            nd(t, n, e, r),
            (t = ad(null, t, n, !0, i, r)))
          : ((t.tag = 0), fe && i && Cf(t), Qe(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (xs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = YC(n)),
          (e = Ot(n, e)),
          o)
        ) {
          case 0:
            t = id(null, t, n, e, r)
            break e
          case 1:
            t = sm(null, t, n, e, r)
            break e
          case 11:
            t = im(null, t, n, e, r)
            break e
          case 14:
            t = am(null, t, n, Ot(n.type, e), r)
            break e
        }
        throw Error(R(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        id(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        sm(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((zv(t), e === null)) throw Error(R(387))
        ;(n = t.pendingProps), (i = t.memoizedState), (o = i.element), rv(e, t), Qs(t, n, null, r)
        var a = t.memoizedState
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Po(Error(R(423)), t)), (t = lm(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = Po(Error(R(424)), t)), (t = lm(e, t, n, r, o))
            break e
          } else
            for (
              gt = Kr(t.stateNode.containerInfo.firstChild),
                vt = t,
                fe = !0,
                jt = null,
                r = av(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((Co(), n === o)) {
            t = _r(e, t, r)
            break e
          }
          Qe(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        sv(t),
        e === null && ed(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Qc(n, o) ? (a = null) : i !== null && Qc(n, i) && (t.flags |= 32),
        Rv(e, t),
        Qe(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && ed(t), null
    case 13:
      return Mv(e, t, r)
    case 4:
      return (
        zf(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = _o(t, null, n, r)) : Qe(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        im(e, t, n, o, r)
      )
    case 7:
      return Qe(e, t, t.pendingProps, r), t.child
    case 8:
      return Qe(e, t, t.pendingProps.children, r), t.child
    case 12:
      return Qe(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ne(Ks, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Gt(i.value, a)) {
            if (i.children === o.children && !lt.current) {
              t = _r(e, t, r)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                a = i.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      ;(l = vr(-1, r & -r)), (l.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      td(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(R(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  td(a, r, t),
                  (a = i.sibling)
              } else a = i.child
              if (a !== null) a.return = i
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((i = a.sibling), i !== null)) {
                    ;(i.return = a.return), (a = i)
                    break
                  }
                  a = a.return
                }
              i = a
            }
        Qe(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        mo(t, r),
        (o = Bt(o)),
        (n = n(o)),
        (t.flags |= 1),
        Qe(e, t, n, r),
        t.child
      )
    case 14:
      return (n = t.type), (o = Ot(n, t.pendingProps)), (o = Ot(n.type, o)), am(e, t, n, o, r)
    case 15:
      return $v(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        xs(e, t),
        (t.tag = 1),
        ut(n) ? ((e = !0), Us(t)) : (e = !1),
        mo(t, r),
        ov(t, n, o),
        nd(t, n, o, r),
        ad(null, t, n, !0, e, r)
      )
    case 19:
      return Lv(e, t, r)
    case 22:
      return Av(e, t, r)
  }
  throw Error(R(156, t.tag))
}
function Xv(e, t) {
  return wy(e, t)
}
function KC(e, t, r, n) {
  ;(this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Mt(e, t, r, n) {
  return new KC(e, t, r, n)
}
function Kf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function YC(e) {
  if (typeof e == 'function') return Kf(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === ff)) return 11
    if (e === pf) return 14
  }
  return 2
}
function qr(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = Mt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  )
}
function Cs(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) Kf(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Qn:
        return En(r.children, o, i, t)
      case df:
        ;(a = 8), (o |= 8)
        break
      case Pc:
        return (e = Mt(12, r, t, o | 2)), (e.elementType = Pc), (e.lanes = i), e
      case Ec:
        return (e = Mt(13, r, t, o)), (e.elementType = Ec), (e.lanes = i), e
      case $c:
        return (e = Mt(19, r, t, o)), (e.elementType = $c), (e.lanes = i), e
      case iy:
        return Ul(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ny:
              a = 10
              break e
            case oy:
              a = 9
              break e
            case ff:
              a = 11
              break e
            case pf:
              a = 14
              break e
            case Dr:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(R(130, e == null ? e : typeof e, ''))
    }
  return (t = Mt(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
}
function En(e, t, r, n) {
  return (e = Mt(7, e, n, t)), (e.lanes = r), e
}
function Ul(e, t, r, n) {
  return (
    (e = Mt(22, e, n, t)), (e.elementType = iy), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
  )
}
function Uu(e, t, r) {
  return (e = Mt(6, e, null, t)), (e.lanes = r), e
}
function Hu(e, t, r) {
  return (
    (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function QC(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _u(0)),
    (this.expirationTimes = _u(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _u(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Yf(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new QC(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Rf(i),
    e
  )
}
function XC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Yn,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function qv(e) {
  if (!e) return nn
  e = e._reactInternals
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(R(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(R(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (ut(r)) return Xy(e, r, t)
  }
  return t
}
function Zv(e, t, r, n, o, i, a, s, l) {
  return (
    (e = Yf(r, n, !0, e, o, i, a, s, l)),
    (e.context = qv(null)),
    (r = e.current),
    (n = Ze()),
    (o = Xr(r)),
    (i = vr(n, o)),
    (i.callback = t ?? null),
    Yr(r, i, o),
    (e.current.lanes = o),
    ha(e, o, n),
    ct(e, n),
    e
  )
}
function Hl(e, t, r, n) {
  var o = t.current,
    i = Ze(),
    a = Xr(o)
  return (
    (r = qv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = vr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Yr(o, t, a)),
    e !== null && (Ht(e, o, a, i), vs(e, o, a)),
    a
  )
}
function nl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function vm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function Qf(e, t) {
  vm(e, t), (e = e.alternate) && vm(e, t)
}
function qC() {
  return null
}
var Jv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Xf(e) {
  this._internalRoot = e
}
Gl.prototype.render = Xf.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(R(409))
  Hl(e, t, null, null)
}
Gl.prototype.unmount = Xf.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Bn(function () {
      Hl(null, e, null, null)
    }),
      (t[kr] = null)
  }
}
function Gl(e) {
  this._internalRoot = e
}
Gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $y()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < Ir.length && t !== 0 && t < Ir[r].priority; r++);
    Ir.splice(r, 0, e), r === 0 && Ry(e)
  }
}
function qf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Sm() {}
function ZC(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var u = nl(a)
        i.call(u)
      }
    }
    var a = Zv(t, n, e, 0, null, !1, !1, '', Sm)
    return (
      (e._reactRootContainer = a),
      (e[kr] = a.current),
      Ki(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var u = nl(l)
      s.call(u)
    }
  }
  var l = Yf(e, 0, !1, null, null, !1, !1, '', Sm)
  return (
    (e._reactRootContainer = l),
    (e[kr] = l.current),
    Ki(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      Hl(t, l, r, n)
    }),
    l
  )
}
function Yl(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = nl(a)
        s.call(l)
      }
    }
    Hl(t, a, e, o)
  } else a = ZC(r, t, e, o, n)
  return nl(a)
}
Py = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = ni(t.pendingLanes)
        r !== 0 && (gf(t, r | 1), ct(t, we()), !(K & 6) && ((Eo = we() + 500), un()))
      }
      break
    case 13:
      Bn(function () {
        var n = Cr(e, 1)
        if (n !== null) {
          var o = Ze()
          Ht(n, e, 1, o)
        }
      }),
        Qf(e, 1)
  }
}
yf = function (e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728)
    if (t !== null) {
      var r = Ze()
      Ht(t, e, 134217728, r)
    }
    Qf(e, 134217728)
  }
}
Ey = function (e) {
  if (e.tag === 13) {
    var t = Xr(e),
      r = Cr(e, t)
    if (r !== null) {
      var n = Ze()
      Ht(r, e, t, n)
    }
    Qf(e, t)
  }
}
$y = function () {
  return ee
}
Ay = function (e, t) {
  var r = ee
  try {
    return (ee = e), t()
  } finally {
    ee = r
  }
}
Vc = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((zc(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = Il(n)
            if (!o) throw Error(R(90))
            sy(n), zc(n, o)
          }
        }
      }
      break
    case 'textarea':
      uy(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && co(e, !!r.multiple, t, !1)
  }
}
gy = Uf
yy = Bn
var JC = { usingClientEntryPoint: !1, Events: [ga, Jn, Il, hy, my, Uf] },
  Xo = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  e2 = {
    bundleType: Xo.bundleType,
    version: Xo.version,
    rendererPackageName: Xo.rendererPackageName,
    rendererConfig: Xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = by(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Xo.findFiberByHostInstance || qC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Za = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Za.isDisabled && Za.supportsFiber)
    try {
      ;(Ll = Za.inject(e2)), (or = Za)
    } catch {}
}
kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JC
kt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!qf(t)) throw Error(R(200))
  return XC(e, t, null, r)
}
kt.createRoot = function (e, t) {
  if (!qf(e)) throw Error(R(299))
  var r = !1,
    n = '',
    o = Jv
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Yf(e, 1, !1, null, null, r, !1, n, o)),
    (e[kr] = t.current),
    Ki(e.nodeType === 8 ? e.parentNode : e),
    new Xf(t)
  )
}
kt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)))
  return (e = by(t)), (e = e === null ? null : e.stateNode), e
}
kt.flushSync = function (e) {
  return Bn(e)
}
kt.hydrate = function (e, t, r) {
  if (!Kl(t)) throw Error(R(200))
  return Yl(null, e, t, !0, r)
}
kt.hydrateRoot = function (e, t, r) {
  if (!qf(e)) throw Error(R(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = Jv
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = Zv(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[kr] = t.current),
    Ki(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new Gl(t)
}
kt.render = function (e, t, r) {
  if (!Kl(t)) throw Error(R(200))
  return Yl(null, e, t, !1, r)
}
kt.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(R(40))
  return e._reactRootContainer
    ? (Bn(function () {
        Yl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[kr] = null)
        })
      }),
      !0)
    : !1
}
kt.unstable_batchedUpdates = Uf
kt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Kl(r)) throw Error(R(200))
  if (e == null || e._reactInternals === void 0) throw Error(R(38))
  return Yl(e, t, r, !1, n)
}
kt.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (r) {
        console.error(r)
      }
  }
  t(), (e.exports = kt)
})(qw)
var [e1, t2] = Mo({ strict: !1, name: 'PortalContext' }),
  Zf = 'chakra-portal',
  r2 = '.chakra-portal',
  n2 = (e) =>
    E('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  o2 = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = k.useState(null),
      i = k.useRef(null),
      [, a] = k.useState({})
    k.useEffect(() => a({}), [])
    const s = t2(),
      l = Xw()
    Fi(() => {
      if (!n) return
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body
      if (!d) return
      ;(i.current = c.createElement('div')),
        (i.current.className = Zf),
        d.appendChild(i.current),
        a({})
      const f = i.current
      return () => {
        d.contains(f) && d.removeChild(f)
      }
    }, [n])
    const u =
      l != null && l.zIndex ? E(n2, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r
    return i.current
      ? Ii.createPortal(E(e1, { value: i.current, children: u }), i.current)
      : E('span', {
          ref: (c) => {
            c && o(c)
          },
        })
  },
  i2 = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = k.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div')
        return l && (l.className = Zf), l
      }, [o]),
      [, s] = k.useState({})
    return (
      Fi(() => s({}), []),
      Fi(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a)
            }
          )
      }, [a, i]),
      i && a ? Ii.createPortal(E(e1, { value: n ? a : null, children: t }), a) : null
    )
  }
function Ql(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t
  return r ? E(i2, { containerRef: r, ...n }) : E(o2, { ...n })
}
Ql.className = Zf
Ql.selector = r2
Ql.displayName = 'Portal'
function Jf() {
  const e = k.useContext(Bi)
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    )
  return e
}
var ep = k.createContext({})
ep.displayName = 'ColorModeContext'
function tp() {
  const e = k.useContext(ep)
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
  return e
}
var Ja = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function a2(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0
        ;(document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o()
      },
      setClassName(n) {
        document.body.classList.add(n ? Ja.dark : Ja.light),
          document.body.classList.remove(n ? Ja.light : Ja.dark)
      },
      query() {
        return window.matchMedia('(prefers-color-scheme: dark)')
      },
      getSystemTheme(n) {
        var o
        return ((o = r.query().matches) != null ? o : n === 'dark') ? 'dark' : 'light'
      },
      addListener(n) {
        const o = r.query(),
          i = (a) => {
            n(a.matches ? 'dark' : 'light')
          }
        return (
          typeof o.addListener == 'function' ? o.addListener(i) : o.addEventListener('change', i),
          () => {
            typeof o.removeListener == 'function'
              ? o.removeListener(i)
              : o.removeEventListener('change', i)
          }
        )
      },
      preventTransition() {
        const n = document.createElement('style')
        return (
          n.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n)
                })
              })
          }
        )
      },
    }
  return r
}
var s2 = 'chakra-ui-color-mode'
function l2(e) {
  return {
    ssr: !1,
    type: 'localStorage',
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t
      let r
      try {
        r = localStorage.getItem(e) || t
      } catch {}
      return r || t
    },
    set(t) {
      try {
        localStorage.setItem(e, t)
      } catch {}
    },
  }
}
var u2 = l2(s2),
  bm = () => {}
function xm(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function t1(e) {
  const {
      value: t,
      children: r,
      options: { useSystemColorMode: n, initialColorMode: o, disableTransitionOnChange: i } = {},
      colorModeManager: a = u2,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = k.useState(() => xm(a, s)),
    [c, d] = k.useState(() => xm(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: v,
      addListener: S,
    } = k.useMemo(() => a2({ preventTransition: i }), [i]),
    C = o === 'system' && !l ? c : l,
    m = k.useCallback(
      (w) => {
        const T = w === 'system' ? f() : w
        u(T), h(T === 'dark'), v(T), a.set(T)
      },
      [a, f, h, v]
    )
  Fi(() => {
    o === 'system' && d(f())
  }, []),
    k.useEffect(() => {
      const w = a.get()
      if (w) {
        m(w)
        return
      }
      if (o === 'system') {
        m('system')
        return
      }
      m(s)
    }, [a, s, o, m])
  const p = k.useCallback(() => {
    m(C === 'dark' ? 'light' : 'dark')
  }, [C, m])
  k.useEffect(() => {
    if (n) return S(m)
  }, [n, S, m])
  const g = k.useMemo(
    () => ({
      colorMode: t ?? C,
      toggleColorMode: t ? bm : p,
      setColorMode: t ? bm : m,
      forced: t !== void 0,
    }),
    [C, p, m, t]
  )
  return E(ep.Provider, { value: g, children: r })
}
t1.displayName = 'ColorModeProvider'
function c2() {
  const e = tp(),
    t = Jf()
  return { ...e, theme: t }
}
var _t = (...e) => e.filter(Boolean).join(' ')
function He(e) {
  const t = typeof e
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function Wr(e, ...t) {
  return d2(e) ? e(...t) : e
}
var d2 = (e) => typeof e == 'function',
  wm = (e) => (e ? '' : void 0),
  ol = {},
  f2 = {
    get exports() {
      return ol
    },
    set exports(e) {
      ol = e
    },
  }
;(function (e, t) {
  var r = 200,
    n = '__lodash_hash_undefined__',
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = '[object Arguments]',
    l = '[object Array]',
    u = '[object AsyncFunction]',
    c = '[object Boolean]',
    d = '[object Date]',
    f = '[object Error]',
    h = '[object Function]',
    v = '[object GeneratorFunction]',
    S = '[object Map]',
    C = '[object Number]',
    m = '[object Null]',
    p = '[object Object]',
    g = '[object Proxy]',
    w = '[object RegExp]',
    T = '[object Set]',
    A = '[object String]',
    P = '[object Undefined]',
    $ = '[object WeakMap]',
    F = '[object ArrayBuffer]',
    D = '[object DataView]',
    oe = '[object Float32Array]',
    Ae = '[object Float64Array]',
    rt = '[object Int8Array]',
    he = '[object Int16Array]',
    me = '[object Int32Array]',
    nt = '[object Uint8Array]',
    Tt = '[object Uint8ClampedArray]',
    z = '[object Uint16Array]',
    V = '[object Uint32Array]',
    N = /[\\^$.*+?()[\]{}|]/g,
    O = /^\[object .+?Constructor\]$/,
    ie = /^(?:0|[1-9]\d*)$/,
    G = {}
  ;(G[oe] = G[Ae] = G[rt] = G[he] = G[me] = G[nt] = G[Tt] = G[z] = G[V] = !0),
    (G[s] =
      G[l] =
      G[F] =
      G[c] =
      G[D] =
      G[d] =
      G[f] =
      G[h] =
      G[S] =
      G[C] =
      G[p] =
      G[w] =
      G[T] =
      G[A] =
      G[$] =
        !1)
  var pt = typeof La == 'object' && La && La.Object === Object && La,
    Er = typeof self == 'object' && self && self.Object === Object && self,
    Te = pt || Er || Function('return this')(),
    Kt = t && !t.nodeType && t,
    dn = Kt && !0 && e && !e.nodeType && e,
    jn = dn && dn.exports === Kt,
    $r = jn && pt.process,
    Yt = (function () {
      try {
        var y = dn && dn.require && dn.require('util').types
        return y || ($r && $r.binding && $r.binding('util'))
      } catch {}
    })(),
    Io = Yt && Yt.isTypedArray
  function _a(y, b, _) {
    switch (_.length) {
      case 0:
        return y.call(b)
      case 1:
        return y.call(b, _[0])
      case 2:
        return y.call(b, _[0], _[1])
      case 3:
        return y.call(b, _[0], _[1], _[2])
    }
    return y.apply(b, _)
  }
  function fb(y, b) {
    for (var _ = -1, M = Array(y); ++_ < y; ) M[_] = b(_)
    return M
  }
  function pb(y) {
    return function (b) {
      return y(b)
    }
  }
  function hb(y, b) {
    return y == null ? void 0 : y[b]
  }
  function mb(y, b) {
    return function (_) {
      return y(b(_))
    }
  }
  var gb = Array.prototype,
    yb = Function.prototype,
    Ta = Object.prototype,
    lu = Te['__core-js_shared__'],
    Pa = yb.toString,
    lr = Ta.hasOwnProperty,
    Ip = (function () {
      var y = /[^.]+$/.exec((lu && lu.keys && lu.keys.IE_PROTO) || '')
      return y ? 'Symbol(src)_1.' + y : ''
    })(),
    Vp = Ta.toString,
    vb = Pa.call(Object),
    Sb = RegExp(
      '^' +
        Pa.call(lr)
          .replace(N, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    Ea = jn ? Te.Buffer : void 0,
    Op = Te.Symbol,
    Np = Te.Uint8Array,
    jp = Ea ? Ea.allocUnsafe : void 0,
    Wp = mb(Object.getPrototypeOf, Object),
    Up = Object.create,
    bb = Ta.propertyIsEnumerable,
    xb = gb.splice,
    fn = Op ? Op.toStringTag : void 0,
    $a = (function () {
      try {
        var y = du(Object, 'defineProperty')
        return y({}, '', {}), y
      } catch {}
    })(),
    wb = Ea ? Ea.isBuffer : void 0,
    Hp = Math.max,
    kb = Date.now,
    Gp = du(Te, 'Map'),
    Vo = du(Object, 'create'),
    Cb = (function () {
      function y() {}
      return function (b) {
        if (!hn(b)) return {}
        if (Up) return Up(b)
        y.prototype = b
        var _ = new y()
        return (y.prototype = void 0), _
      }
    })()
  function pn(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function _b() {
    ;(this.__data__ = Vo ? Vo(null) : {}), (this.size = 0)
  }
  function Tb(y) {
    var b = this.has(y) && delete this.__data__[y]
    return (this.size -= b ? 1 : 0), b
  }
  function Pb(y) {
    var b = this.__data__
    if (Vo) {
      var _ = b[y]
      return _ === n ? void 0 : _
    }
    return lr.call(b, y) ? b[y] : void 0
  }
  function Eb(y) {
    var b = this.__data__
    return Vo ? b[y] !== void 0 : lr.call(b, y)
  }
  function $b(y, b) {
    var _ = this.__data__
    return (this.size += this.has(y) ? 0 : 1), (_[y] = Vo && b === void 0 ? n : b), this
  }
  ;(pn.prototype.clear = _b),
    (pn.prototype.delete = Tb),
    (pn.prototype.get = Pb),
    (pn.prototype.has = Eb),
    (pn.prototype.set = $b)
  function ur(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function Ab() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function Rb(y) {
    var b = this.__data__,
      _ = Aa(b, y)
    if (_ < 0) return !1
    var M = b.length - 1
    return _ == M ? b.pop() : xb.call(b, _, 1), --this.size, !0
  }
  function zb(y) {
    var b = this.__data__,
      _ = Aa(b, y)
    return _ < 0 ? void 0 : b[_][1]
  }
  function Mb(y) {
    return Aa(this.__data__, y) > -1
  }
  function Lb(y, b) {
    var _ = this.__data__,
      M = Aa(_, y)
    return M < 0 ? (++this.size, _.push([y, b])) : (_[M][1] = b), this
  }
  ;(ur.prototype.clear = Ab),
    (ur.prototype.delete = Rb),
    (ur.prototype.get = zb),
    (ur.prototype.has = Mb),
    (ur.prototype.set = Lb)
  function Wn(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function Db() {
    ;(this.size = 0), (this.__data__ = { hash: new pn(), map: new (Gp || ur)(), string: new pn() })
  }
  function Bb(y) {
    var b = za(this, y).delete(y)
    return (this.size -= b ? 1 : 0), b
  }
  function Fb(y) {
    return za(this, y).get(y)
  }
  function Ib(y) {
    return za(this, y).has(y)
  }
  function Vb(y, b) {
    var _ = za(this, y),
      M = _.size
    return _.set(y, b), (this.size += _.size == M ? 0 : 1), this
  }
  ;(Wn.prototype.clear = Db),
    (Wn.prototype.delete = Bb),
    (Wn.prototype.get = Fb),
    (Wn.prototype.has = Ib),
    (Wn.prototype.set = Vb)
  function Un(y) {
    var b = (this.__data__ = new ur(y))
    this.size = b.size
  }
  function Ob() {
    ;(this.__data__ = new ur()), (this.size = 0)
  }
  function Nb(y) {
    var b = this.__data__,
      _ = b.delete(y)
    return (this.size = b.size), _
  }
  function jb(y) {
    return this.__data__.get(y)
  }
  function Wb(y) {
    return this.__data__.has(y)
  }
  function Ub(y, b) {
    var _ = this.__data__
    if (_ instanceof ur) {
      var M = _.__data__
      if (!Gp || M.length < r - 1) return M.push([y, b]), (this.size = ++_.size), this
      _ = this.__data__ = new Wn(M)
    }
    return _.set(y, b), (this.size = _.size), this
  }
  ;(Un.prototype.clear = Ob),
    (Un.prototype.delete = Nb),
    (Un.prototype.get = jb),
    (Un.prototype.has = Wb),
    (Un.prototype.set = Ub)
  function Hb(y, b) {
    var _ = hu(y),
      M = !_ && pu(y),
      H = !_ && !M && qp(y),
      re = !_ && !M && !H && Jp(y),
      ce = _ || M || H || re,
      U = ce ? fb(y.length, String) : [],
      de = U.length
    for (var Pt in y)
      (b || lr.call(y, Pt)) &&
        !(
          ce &&
          (Pt == 'length' ||
            (H && (Pt == 'offset' || Pt == 'parent')) ||
            (re && (Pt == 'buffer' || Pt == 'byteLength' || Pt == 'byteOffset')) ||
            Qp(Pt, de))
        ) &&
        U.push(Pt)
    return U
  }
  function uu(y, b, _) {
    ;((_ !== void 0 && !Ma(y[b], _)) || (_ === void 0 && !(b in y))) && cu(y, b, _)
  }
  function Gb(y, b, _) {
    var M = y[b]
    ;(!(lr.call(y, b) && Ma(M, _)) || (_ === void 0 && !(b in y))) && cu(y, b, _)
  }
  function Aa(y, b) {
    for (var _ = y.length; _--; ) if (Ma(y[_][0], b)) return _
    return -1
  }
  function cu(y, b, _) {
    b == '__proto__' && $a
      ? $a(y, b, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (y[b] = _)
  }
  var Kb = ax()
  function Ra(y) {
    return y == null ? (y === void 0 ? P : m) : fn && fn in Object(y) ? sx(y) : px(y)
  }
  function Kp(y) {
    return Oo(y) && Ra(y) == s
  }
  function Yb(y) {
    if (!hn(y) || dx(y)) return !1
    var b = gu(y) ? Sb : O
    return b.test(yx(y))
  }
  function Qb(y) {
    return Oo(y) && Zp(y.length) && !!G[Ra(y)]
  }
  function Xb(y) {
    if (!hn(y)) return fx(y)
    var b = Xp(y),
      _ = []
    for (var M in y) (M == 'constructor' && (b || !lr.call(y, M))) || _.push(M)
    return _
  }
  function Yp(y, b, _, M, H) {
    y !== b &&
      Kb(
        b,
        function (re, ce) {
          if ((H || (H = new Un()), hn(re))) qb(y, b, ce, _, Yp, M, H)
          else {
            var U = M ? M(fu(y, ce), re, ce + '', y, b, H) : void 0
            U === void 0 && (U = re), uu(y, ce, U)
          }
        },
        eh
      )
  }
  function qb(y, b, _, M, H, re, ce) {
    var U = fu(y, _),
      de = fu(b, _),
      Pt = ce.get(de)
    if (Pt) {
      uu(y, _, Pt)
      return
    }
    var ht = re ? re(U, de, _ + '', y, b, ce) : void 0,
      No = ht === void 0
    if (No) {
      var yu = hu(de),
        vu = !yu && qp(de),
        rh = !yu && !vu && Jp(de)
      ;(ht = de),
        yu || vu || rh
          ? hu(U)
            ? (ht = U)
            : vx(U)
            ? (ht = nx(U))
            : vu
            ? ((No = !1), (ht = ex(de, !0)))
            : rh
            ? ((No = !1), (ht = rx(de, !0)))
            : (ht = [])
          : Sx(de) || pu(de)
          ? ((ht = U), pu(U) ? (ht = bx(U)) : (!hn(U) || gu(U)) && (ht = lx(de)))
          : (No = !1)
    }
    No && (ce.set(de, ht), H(ht, de, M, re, ce), ce.delete(de)), uu(y, _, ht)
  }
  function Zb(y, b) {
    return mx(hx(y, b, th), y + '')
  }
  var Jb = $a
    ? function (y, b) {
        return $a(y, 'toString', { configurable: !0, enumerable: !1, value: wx(b), writable: !0 })
      }
    : th
  function ex(y, b) {
    if (b) return y.slice()
    var _ = y.length,
      M = jp ? jp(_) : new y.constructor(_)
    return y.copy(M), M
  }
  function tx(y) {
    var b = new y.constructor(y.byteLength)
    return new Np(b).set(new Np(y)), b
  }
  function rx(y, b) {
    var _ = b ? tx(y.buffer) : y.buffer
    return new y.constructor(_, y.byteOffset, y.length)
  }
  function nx(y, b) {
    var _ = -1,
      M = y.length
    for (b || (b = Array(M)); ++_ < M; ) b[_] = y[_]
    return b
  }
  function ox(y, b, _, M) {
    var H = !_
    _ || (_ = {})
    for (var re = -1, ce = b.length; ++re < ce; ) {
      var U = b[re],
        de = M ? M(_[U], y[U], U, _, y) : void 0
      de === void 0 && (de = y[U]), H ? cu(_, U, de) : Gb(_, U, de)
    }
    return _
  }
  function ix(y) {
    return Zb(function (b, _) {
      var M = -1,
        H = _.length,
        re = H > 1 ? _[H - 1] : void 0,
        ce = H > 2 ? _[2] : void 0
      for (
        re = y.length > 3 && typeof re == 'function' ? (H--, re) : void 0,
          ce && ux(_[0], _[1], ce) && ((re = H < 3 ? void 0 : re), (H = 1)),
          b = Object(b);
        ++M < H;

      ) {
        var U = _[M]
        U && y(b, U, M, re)
      }
      return b
    })
  }
  function ax(y) {
    return function (b, _, M) {
      for (var H = -1, re = Object(b), ce = M(b), U = ce.length; U--; ) {
        var de = ce[y ? U : ++H]
        if (_(re[de], de, re) === !1) break
      }
      return b
    }
  }
  function za(y, b) {
    var _ = y.__data__
    return cx(b) ? _[typeof b == 'string' ? 'string' : 'hash'] : _.map
  }
  function du(y, b) {
    var _ = hb(y, b)
    return Yb(_) ? _ : void 0
  }
  function sx(y) {
    var b = lr.call(y, fn),
      _ = y[fn]
    try {
      y[fn] = void 0
      var M = !0
    } catch {}
    var H = Vp.call(y)
    return M && (b ? (y[fn] = _) : delete y[fn]), H
  }
  function lx(y) {
    return typeof y.constructor == 'function' && !Xp(y) ? Cb(Wp(y)) : {}
  }
  function Qp(y, b) {
    var _ = typeof y
    return (
      (b = b ?? a),
      !!b && (_ == 'number' || (_ != 'symbol' && ie.test(y))) && y > -1 && y % 1 == 0 && y < b
    )
  }
  function ux(y, b, _) {
    if (!hn(_)) return !1
    var M = typeof b
    return (M == 'number' ? mu(_) && Qp(b, _.length) : M == 'string' && b in _) ? Ma(_[b], y) : !1
  }
  function cx(y) {
    var b = typeof y
    return b == 'string' || b == 'number' || b == 'symbol' || b == 'boolean'
      ? y !== '__proto__'
      : y === null
  }
  function dx(y) {
    return !!Ip && Ip in y
  }
  function Xp(y) {
    var b = y && y.constructor,
      _ = (typeof b == 'function' && b.prototype) || Ta
    return y === _
  }
  function fx(y) {
    var b = []
    if (y != null) for (var _ in Object(y)) b.push(_)
    return b
  }
  function px(y) {
    return Vp.call(y)
  }
  function hx(y, b, _) {
    return (
      (b = Hp(b === void 0 ? y.length - 1 : b, 0)),
      function () {
        for (var M = arguments, H = -1, re = Hp(M.length - b, 0), ce = Array(re); ++H < re; )
          ce[H] = M[b + H]
        H = -1
        for (var U = Array(b + 1); ++H < b; ) U[H] = M[H]
        return (U[b] = _(ce)), _a(y, this, U)
      }
    )
  }
  function fu(y, b) {
    if (!(b === 'constructor' && typeof y[b] == 'function') && b != '__proto__') return y[b]
  }
  var mx = gx(Jb)
  function gx(y) {
    var b = 0,
      _ = 0
    return function () {
      var M = kb(),
        H = i - (M - _)
      if (((_ = M), H > 0)) {
        if (++b >= o) return arguments[0]
      } else b = 0
      return y.apply(void 0, arguments)
    }
  }
  function yx(y) {
    if (y != null) {
      try {
        return Pa.call(y)
      } catch {}
      try {
        return y + ''
      } catch {}
    }
    return ''
  }
  function Ma(y, b) {
    return y === b || (y !== y && b !== b)
  }
  var pu = Kp(
      (function () {
        return arguments
      })()
    )
      ? Kp
      : function (y) {
          return Oo(y) && lr.call(y, 'callee') && !bb.call(y, 'callee')
        },
    hu = Array.isArray
  function mu(y) {
    return y != null && Zp(y.length) && !gu(y)
  }
  function vx(y) {
    return Oo(y) && mu(y)
  }
  var qp = wb || kx
  function gu(y) {
    if (!hn(y)) return !1
    var b = Ra(y)
    return b == h || b == v || b == u || b == g
  }
  function Zp(y) {
    return typeof y == 'number' && y > -1 && y % 1 == 0 && y <= a
  }
  function hn(y) {
    var b = typeof y
    return y != null && (b == 'object' || b == 'function')
  }
  function Oo(y) {
    return y != null && typeof y == 'object'
  }
  function Sx(y) {
    if (!Oo(y) || Ra(y) != p) return !1
    var b = Wp(y)
    if (b === null) return !0
    var _ = lr.call(b, 'constructor') && b.constructor
    return typeof _ == 'function' && _ instanceof _ && Pa.call(_) == vb
  }
  var Jp = Io ? pb(Io) : Qb
  function bx(y) {
    return ox(y, eh(y))
  }
  function eh(y) {
    return mu(y) ? Hb(y, !0) : Xb(y)
  }
  var xx = ix(function (y, b, _, M) {
    Yp(y, b, _, M)
  })
  function wx(y) {
    return function () {
      return y
    }
  }
  function th(y) {
    return y
  }
  function kx() {
    return !1
  }
  e.exports = xx
})(f2, ol)
const Lt = ol
var p2 = (e) => /!(important)?$/.test(e),
  km = (e) => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  h2 = (e, t) => (r) => {
    const n = String(t),
      o = p2(n),
      i = km(n),
      a = e ? `${e}.${i}` : i
    let s = He(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t
    return (s = km(s)), o ? `${s} !important` : s
  }
function rp(e) {
  const { scale: t, transform: r, compose: n } = e
  return (i, a) => {
    var s
    const l = h2(t, i)(a)
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l
    return n && (u = n(u, a)), u
  }
}
var es =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t)
function Et(e, t) {
  return (r) => {
    const n = { property: r, scale: e }
    return (n.transform = rp({ scale: e, transform: t })), n
  }
}
var m2 =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === 'rtl' ? e : t
function g2(e) {
  const { property: t, scale: r, transform: n } = e
  return { scale: r, property: m2(t), transform: r ? rp({ scale: r, compose: n }) : n }
}
var r1 = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
]
function y2() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...r1,
  ].join(' ')
}
function v2() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...r1].join(
    ' '
  )
}
var S2 = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    'filter': [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  b2 = {
    'backdropFilter': [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  }
function x2(e) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': e,
    'boxShadow': [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)',
    ].join(', '),
  }
}
var w2 = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  vd = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  k2 = new Set(Object.values(vd)),
  Sd = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  C2 = (e) => e.trim()
function _2(e, t) {
  if (e == null || Sd.has(e)) return e
  if (!(bd(e) || Sd.has(e))) return `url('${e}')`
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2]
  if (!i || !a) return e
  const s = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...u] = a.split(',').map(C2).filter(Boolean)
  if ((u == null ? void 0 : u.length) === 0) return e
  const c = l in vd ? vd[l] : l
  u.unshift(c)
  const d = u.map((f) => {
    if (k2.has(f)) return f
    const h = f.indexOf(' '),
      [v, S] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      C = bd(S) ? S : S && S.split(' '),
      m = `colors.${v}`,
      p = m in t.__cssMap ? t.__cssMap[m].varRef : v
    return C ? [p, ...(Array.isArray(C) ? C : [C])].join(' ') : p
  })
  return `${s}(${d.join(', ')})`
}
var bd = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  T2 = (e, t) => _2(e, t ?? {})
function P2(e) {
  return /^var\(--.+\)$/.test(e)
}
var E2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
  },
  Xt = (e) => (t) => `${e}(${t})`,
  Y = {
    filter(e) {
      return e !== 'auto' ? e : S2
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : b2
    },
    ring(e) {
      return x2(Y.px(e))
    },
    bgClip(e) {
      return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
    },
    transform(e) {
      return e === 'auto' ? y2() : e === 'auto-gpu' ? v2() : e
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e
    },
    px(e) {
      if (e == null) return e
      const { unitless: t } = E2(e)
      return t || typeof e == 'number' ? `${e}px` : e
    },
    fraction(e) {
      return typeof e != 'number' || e > 1 ? e : `${e * 100}%`
    },
    float(e, t) {
      const r = { left: 'right', right: 'left' }
      return t.direction === 'rtl' ? r[e] : e
    },
    degree(e) {
      if (P2(e) || e == null) return e
      const t = typeof e == 'string' && !e.endsWith('deg')
      return typeof e == 'number' || t ? `${e}deg` : e
    },
    gradient: T2,
    blur: Xt('blur'),
    opacity: Xt('opacity'),
    brightness: Xt('brightness'),
    contrast: Xt('contrast'),
    dropShadow: Xt('drop-shadow'),
    grayscale: Xt('grayscale'),
    hueRotate: Xt('hue-rotate'),
    invert: Xt('invert'),
    saturate: Xt('saturate'),
    sepia: Xt('sepia'),
    bgImage(e) {
      return e == null || bd(e) || Sd.has(e) ? e : `url(${e})`
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none'
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e }
    },
    flexDirection(e) {
      var t
      const { space: r, divide: n } = (t = w2[e]) != null ? t : {},
        o = { flexDirection: e }
      return r && (o[r] = 1), n && (o[n] = 1), o
    },
  },
  x = {
    borderWidths: Et('borderWidths'),
    borderStyles: Et('borderStyles'),
    colors: Et('colors'),
    borders: Et('borders'),
    gradients: Et('gradients', Y.gradient),
    radii: Et('radii', Y.px),
    space: Et('space', es(Y.vh, Y.px)),
    spaceT: Et('space', es(Y.vh, Y.px)),
    degreeT(e) {
      return { property: e, transform: Y.degree }
    },
    prop(e, t, r) {
      return { property: e, scale: t, ...(t && { transform: rp({ scale: t, transform: r }) }) }
    },
    propT(e, t) {
      return { property: e, transform: t }
    },
    sizes: Et('sizes', es(Y.vh, Y.px)),
    sizesT: Et('sizes', es(Y.vh, Y.fraction)),
    shadows: Et('shadows'),
    logical: g2,
    blur: Et('blur', Y.blur),
  },
  _s = {
    background: x.colors('background'),
    backgroundColor: x.colors('backgroundColor'),
    backgroundImage: x.gradients('backgroundImage'),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Y.bgClip },
    bgSize: x.prop('backgroundSize'),
    bgPosition: x.prop('backgroundPosition'),
    bg: x.colors('background'),
    bgColor: x.colors('backgroundColor'),
    bgPos: x.prop('backgroundPosition'),
    bgRepeat: x.prop('backgroundRepeat'),
    bgAttachment: x.prop('backgroundAttachment'),
    bgGradient: x.gradients('backgroundImage'),
    bgClip: { transform: Y.bgClip },
  }
Object.assign(_s, { bgImage: _s.backgroundImage, bgImg: _s.backgroundImage })
var Q = {
  border: x.borders('border'),
  borderWidth: x.borderWidths('borderWidth'),
  borderStyle: x.borderStyles('borderStyle'),
  borderColor: x.colors('borderColor'),
  borderRadius: x.radii('borderRadius'),
  borderTop: x.borders('borderTop'),
  borderBlockStart: x.borders('borderBlockStart'),
  borderTopLeftRadius: x.radii('borderTopLeftRadius'),
  borderStartStartRadius: x.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: x.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: x.radii('borderTopRightRadius'),
  borderStartEndRadius: x.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: x.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: x.borders('borderRight'),
  borderInlineEnd: x.borders('borderInlineEnd'),
  borderBottom: x.borders('borderBottom'),
  borderBlockEnd: x.borders('borderBlockEnd'),
  borderBottomLeftRadius: x.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: x.radii('borderBottomRightRadius'),
  borderLeft: x.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: x.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: x.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: x.borders(['borderLeft', 'borderRight']),
  borderInline: x.borders('borderInline'),
  borderY: x.borders(['borderTop', 'borderBottom']),
  borderBlock: x.borders('borderBlock'),
  borderTopWidth: x.borderWidths('borderTopWidth'),
  borderBlockStartWidth: x.borderWidths('borderBlockStartWidth'),
  borderTopColor: x.colors('borderTopColor'),
  borderBlockStartColor: x.colors('borderBlockStartColor'),
  borderTopStyle: x.borderStyles('borderTopStyle'),
  borderBlockStartStyle: x.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: x.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: x.borderWidths('borderBlockEndWidth'),
  borderBottomColor: x.colors('borderBottomColor'),
  borderBlockEndColor: x.colors('borderBlockEndColor'),
  borderBottomStyle: x.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: x.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: x.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: x.borderWidths('borderInlineStartWidth'),
  borderLeftColor: x.colors('borderLeftColor'),
  borderInlineStartColor: x.colors('borderInlineStartColor'),
  borderLeftStyle: x.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: x.borderStyles('borderInlineStartStyle'),
  borderRightWidth: x.borderWidths('borderRightWidth'),
  borderInlineEndWidth: x.borderWidths('borderInlineEndWidth'),
  borderRightColor: x.colors('borderRightColor'),
  borderInlineEndColor: x.colors('borderInlineEndColor'),
  borderRightStyle: x.borderStyles('borderRightStyle'),
  borderInlineEndStyle: x.borderStyles('borderInlineEndStyle'),
  borderTopRadius: x.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: x.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: x.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: x.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
}
Object.assign(Q, {
  rounded: Q.borderRadius,
  roundedTop: Q.borderTopRadius,
  roundedTopLeft: Q.borderTopLeftRadius,
  roundedTopRight: Q.borderTopRightRadius,
  roundedTopStart: Q.borderStartStartRadius,
  roundedTopEnd: Q.borderStartEndRadius,
  roundedBottom: Q.borderBottomRadius,
  roundedBottomLeft: Q.borderBottomLeftRadius,
  roundedBottomRight: Q.borderBottomRightRadius,
  roundedBottomStart: Q.borderEndStartRadius,
  roundedBottomEnd: Q.borderEndEndRadius,
  roundedLeft: Q.borderLeftRadius,
  roundedRight: Q.borderRightRadius,
  roundedStart: Q.borderInlineStartRadius,
  roundedEnd: Q.borderInlineEndRadius,
  borderStart: Q.borderInlineStart,
  borderEnd: Q.borderInlineEnd,
  borderTopStartRadius: Q.borderStartStartRadius,
  borderTopEndRadius: Q.borderStartEndRadius,
  borderBottomStartRadius: Q.borderEndStartRadius,
  borderBottomEndRadius: Q.borderEndEndRadius,
  borderStartRadius: Q.borderInlineStartRadius,
  borderEndRadius: Q.borderInlineEndRadius,
  borderStartWidth: Q.borderInlineStartWidth,
  borderEndWidth: Q.borderInlineEndWidth,
  borderStartColor: Q.borderInlineStartColor,
  borderEndColor: Q.borderInlineEndColor,
  borderStartStyle: Q.borderInlineStartStyle,
  borderEndStyle: Q.borderInlineEndStyle,
})
var $2 = {
    color: x.colors('color'),
    textColor: x.colors('color'),
    fill: x.colors('fill'),
    stroke: x.colors('stroke'),
  },
  xd = {
    boxShadow: x.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: x.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: x.prop('backgroundBlendMode'),
    opacity: !0,
  }
Object.assign(xd, { shadow: xd.boxShadow })
var A2 = {
    filter: { transform: Y.filter },
    blur: x.blur('--chakra-blur'),
    brightness: x.propT('--chakra-brightness', Y.brightness),
    contrast: x.propT('--chakra-contrast', Y.contrast),
    hueRotate: x.degreeT('--chakra-hue-rotate'),
    invert: x.propT('--chakra-invert', Y.invert),
    saturate: x.propT('--chakra-saturate', Y.saturate),
    dropShadow: x.propT('--chakra-drop-shadow', Y.dropShadow),
    backdropFilter: { transform: Y.backdropFilter },
    backdropBlur: x.blur('--chakra-backdrop-blur'),
    backdropBrightness: x.propT('--chakra-backdrop-brightness', Y.brightness),
    backdropContrast: x.propT('--chakra-backdrop-contrast', Y.contrast),
    backdropHueRotate: x.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: x.propT('--chakra-backdrop-invert', Y.invert),
    backdropSaturate: x.propT('--chakra-backdrop-saturate', Y.saturate),
  },
  il = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Y.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: x.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: x.space('gap'),
    rowGap: x.space('rowGap'),
    columnGap: x.space('columnGap'),
  }
Object.assign(il, { flexDir: il.flexDirection })
var n1 = {
    gridGap: x.space('gridGap'),
    gridColumnGap: x.space('gridColumnGap'),
    gridRowGap: x.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  R2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Y.outline },
    outlineOffset: !0,
    outlineColor: x.colors('outlineColor'),
  },
  At = {
    width: x.sizesT('width'),
    inlineSize: x.sizesT('inlineSize'),
    height: x.sizes('height'),
    blockSize: x.sizes('blockSize'),
    boxSize: x.sizes(['width', 'height']),
    minWidth: x.sizes('minWidth'),
    minInlineSize: x.sizes('minInlineSize'),
    minHeight: x.sizes('minHeight'),
    minBlockSize: x.sizes('minBlockSize'),
    maxWidth: x.sizes('maxWidth'),
    maxInlineSize: x.sizes('maxInlineSize'),
    maxHeight: x.sizes('maxHeight'),
    maxBlockSize: x.sizes('maxBlockSize'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    hideFrom: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var r, n, o
        return {
          [(o =
            (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
              ? void 0
              : n.minWQuery) != null
            ? o
            : `@media screen and (min-width: ${e})`]: { display: 'none' },
        }
      },
    },
    hideBelow: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var r, n, o
        return {
          [(o =
            (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
              ? void 0
              : n.maxWQuery) != null
            ? o
            : `@media screen and (max-width: ${e})`]: { display: 'none' },
        }
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: x.propT('float', Y.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  }
Object.assign(At, {
  w: At.width,
  h: At.height,
  minW: At.minWidth,
  maxW: At.maxWidth,
  minH: At.minHeight,
  maxH: At.maxHeight,
  overscroll: At.overscrollBehavior,
  overscrollX: At.overscrollBehaviorX,
  overscrollY: At.overscrollBehaviorY,
})
var z2 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: x.prop('listStyleImage'),
}
function M2(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var L2 = (e) => {
    const t = new WeakMap()
    return (n, o, i, a) => {
      if (typeof n > 'u') return e(n, o, i)
      t.has(n) || t.set(n, new Map())
      const s = t.get(n)
      if (s.has(o)) return s.get(o)
      const l = e(n, o, i, a)
      return s.set(o, l), l
    }
  },
  D2 = L2(M2),
  B2 = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  F2 = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Gu = (e, t, r) => {
    const n = {},
      o = D2(e, t, {})
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i])
    return n
  },
  I2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? B2 : e === 'focusable' ? F2 : {}
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, r) => Gu(t, `layerStyles.${e}`, r) },
    textStyle: { processResult: !0, transform: (e, t, r) => Gu(t, `textStyles.${e}`, r) },
    apply: { processResult: !0, transform: (e, t, r) => Gu(t, e, r) },
  },
  Si = {
    position: !0,
    pos: x.prop('position'),
    zIndex: x.prop('zIndex', 'zIndices'),
    inset: x.spaceT('inset'),
    insetX: x.spaceT(['left', 'right']),
    insetInline: x.spaceT('insetInline'),
    insetY: x.spaceT(['top', 'bottom']),
    insetBlock: x.spaceT('insetBlock'),
    top: x.spaceT('top'),
    insetBlockStart: x.spaceT('insetBlockStart'),
    bottom: x.spaceT('bottom'),
    insetBlockEnd: x.spaceT('insetBlockEnd'),
    left: x.spaceT('left'),
    insetInlineStart: x.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
    right: x.spaceT('right'),
    insetInlineEnd: x.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } }),
  }
Object.assign(Si, { insetStart: Si.insetInlineStart, insetEnd: Si.insetInlineEnd })
var V2 = {
    ring: { transform: Y.ring },
    ringColor: x.colors('--chakra-ring-color'),
    ringOffset: x.prop('--chakra-ring-offset-width'),
    ringOffsetColor: x.colors('--chakra-ring-offset-color'),
    ringInset: x.prop('--chakra-ring-inset'),
  },
  se = {
    margin: x.spaceT('margin'),
    marginTop: x.spaceT('marginTop'),
    marginBlockStart: x.spaceT('marginBlockStart'),
    marginRight: x.spaceT('marginRight'),
    marginInlineEnd: x.spaceT('marginInlineEnd'),
    marginBottom: x.spaceT('marginBottom'),
    marginBlockEnd: x.spaceT('marginBlockEnd'),
    marginLeft: x.spaceT('marginLeft'),
    marginInlineStart: x.spaceT('marginInlineStart'),
    marginX: x.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: x.spaceT('marginInline'),
    marginY: x.spaceT(['marginTop', 'marginBottom']),
    marginBlock: x.spaceT('marginBlock'),
    padding: x.space('padding'),
    paddingTop: x.space('paddingTop'),
    paddingBlockStart: x.space('paddingBlockStart'),
    paddingRight: x.space('paddingRight'),
    paddingBottom: x.space('paddingBottom'),
    paddingBlockEnd: x.space('paddingBlockEnd'),
    paddingLeft: x.space('paddingLeft'),
    paddingInlineStart: x.space('paddingInlineStart'),
    paddingInlineEnd: x.space('paddingInlineEnd'),
    paddingX: x.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: x.space('paddingInline'),
    paddingY: x.space(['paddingTop', 'paddingBottom']),
    paddingBlock: x.space('paddingBlock'),
  }
Object.assign(se, {
  m: se.margin,
  mt: se.marginTop,
  mr: se.marginRight,
  me: se.marginInlineEnd,
  marginEnd: se.marginInlineEnd,
  mb: se.marginBottom,
  ml: se.marginLeft,
  ms: se.marginInlineStart,
  marginStart: se.marginInlineStart,
  mx: se.marginX,
  my: se.marginY,
  p: se.padding,
  pt: se.paddingTop,
  py: se.paddingY,
  px: se.paddingX,
  pb: se.paddingBottom,
  pl: se.paddingLeft,
  ps: se.paddingInlineStart,
  paddingStart: se.paddingInlineStart,
  pr: se.paddingRight,
  pe: se.paddingInlineEnd,
  paddingEnd: se.paddingInlineEnd,
})
var O2 = {
    textDecorationColor: x.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: x.shadows('textShadow'),
  },
  N2 = {
    clipPath: !0,
    transform: x.propT('transform', Y.transform),
    transformOrigin: !0,
    translateX: x.spaceT('--chakra-translate-x'),
    translateY: x.spaceT('--chakra-translate-y'),
    skewX: x.degreeT('--chakra-skew-x'),
    skewY: x.degreeT('--chakra-skew-y'),
    scaleX: x.prop('--chakra-scale-x'),
    scaleY: x.prop('--chakra-scale-y'),
    scale: x.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: x.degreeT('--chakra-rotate'),
  },
  j2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: x.prop('transitionDuration', 'transition.duration'),
    transitionProperty: x.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: x.prop('transitionTimingFunction', 'transition.easing'),
  },
  W2 = {
    fontFamily: x.prop('fontFamily', 'fonts'),
    fontSize: x.prop('fontSize', 'fontSizes', Y.px),
    fontWeight: x.prop('fontWeight', 'fontWeights'),
    lineHeight: x.prop('lineHeight', 'lineHeights'),
    letterSpacing: x.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0) return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
      },
    },
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
  },
  U2 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: x.spaceT('scrollMargin'),
    scrollMarginTop: x.spaceT('scrollMarginTop'),
    scrollMarginBottom: x.spaceT('scrollMarginBottom'),
    scrollMarginLeft: x.spaceT('scrollMarginLeft'),
    scrollMarginRight: x.spaceT('scrollMarginRight'),
    scrollMarginX: x.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: x.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: x.spaceT('scrollPadding'),
    scrollPaddingTop: x.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: x.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: x.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: x.spaceT('scrollPaddingRight'),
    scrollPaddingX: x.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: x.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  }
function o1(e) {
  return He(e) && e.reference ? e.reference : String(e)
}
var Xl = (e, ...t) => t.map(o1).join(` ${e} `).replace(/calc/g, ''),
  Cm = (...e) => `calc(${Xl('+', ...e)})`,
  _m = (...e) => `calc(${Xl('-', ...e)})`,
  wd = (...e) => `calc(${Xl('*', ...e)})`,
  Tm = (...e) => `calc(${Xl('/', ...e)})`,
  Pm = (e) => {
    const t = o1(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : wd(t, -1)
  },
  bn = Object.assign(
    (e) => ({
      add: (...t) => bn(Cm(e, ...t)),
      subtract: (...t) => bn(_m(e, ...t)),
      multiply: (...t) => bn(wd(e, ...t)),
      divide: (...t) => bn(Tm(e, ...t)),
      negate: () => bn(Pm(e)),
      toString: () => e.toString(),
    }),
    { add: Cm, subtract: _m, multiply: wd, divide: Tm, negate: Pm }
  )
function H2(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function G2(e) {
  const t = H2(e.toString())
  return Y2(K2(t))
}
function K2(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e
}
function Y2(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function Q2(e, t = '') {
  return [t, e].filter(Boolean).join('-')
}
function X2(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`
}
function q2(e, t = '') {
  return G2(`--${Q2(e, t)}`)
}
function j(e, t, r) {
  const n = q2(e, r)
  return { variable: n, reference: X2(n, t) }
}
function Z2(e) {
  const t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function J2(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '')
  return { unitless: !r, value: t, unit: r }
}
function kd(e) {
  if (e == null) return e
  const { unitless: t } = J2(e)
  return t || typeof e == 'number' ? `${e}px` : e
}
var i1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  np = (e) => Object.fromEntries(Object.entries(e).sort(i1))
function Em(e) {
  const t = np(e)
  return Object.assign(Object.values(t), t)
}
function e_(e) {
  const t = Object.keys(np(e))
  return new Set(t)
}
function $m(e) {
  var t
  if (!e) return e
  e = (t = kd(e)) != null ? t : e
  const r = -0.02
  return typeof e == 'number'
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`)
}
function ii(e, t) {
  const r = ['@media screen']
  return (
    e && r.push('and', `(min-width: ${kd(e)})`),
    t && r.push('and', `(max-width: ${kd(t)})`),
    r.join(' ')
  )
}
function t_(e) {
  var t
  if (!e) return null
  e.base = (t = e.base) != null ? t : '0px'
  const r = Em(e),
    n = Object.entries(e)
      .sort(i1)
      .map(([a, s], l, u) => {
        var c
        let [, d] = (c = u[l + 1]) != null ? c : []
        return (
          (d = parseFloat(d) > 0 ? $m(d) : void 0),
          {
            _minW: $m(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: ii(null, d),
            minWQuery: ii(s),
            minMaxQuery: ii(s, d),
          }
        )
      }),
    o = e_(e),
    i = Array.from(o.values())
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a)
      return s.length > 0 && s.every((l) => o.has(l))
    },
    asObject: np(e),
    asArray: Em(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a)
    },
    media: [null, ...r.map((a) => ii(a)).slice(1)],
    toArrayValue(a) {
      if (!He(a)) throw new Error('toArrayValue: value must be an object')
      const s = i.map((l) => {
        var u
        return (u = a[l]) != null ? u : null
      })
      for (; Z2(s) === null; ) s.pop()
      return s
    },
    toObjectValue(a) {
      if (!Array.isArray(a)) throw new Error('toObjectValue: value must be an array')
      return a.reduce((s, l, u) => {
        const c = i[u]
        return c != null && l != null && (s[c] = l), s
      }, {})
    },
  }
}
var De = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Rr = (e) => a1((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  cr = (e) => a1((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  a1 = (e, ...t) => t.map(e).join(', '),
  ql = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _firstLetter: '&::first-letter',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: Rr(De.hover),
    _peerHover: cr(De.hover),
    _groupFocus: Rr(De.focus),
    _peerFocus: cr(De.focus),
    _groupFocusVisible: Rr(De.focusVisible),
    _peerFocusVisible: cr(De.focusVisible),
    _groupActive: Rr(De.active),
    _peerActive: cr(De.active),
    _groupDisabled: Rr(De.disabled),
    _peerDisabled: cr(De.disabled),
    _groupInvalid: Rr(De.invalid),
    _peerInvalid: cr(De.invalid),
    _groupChecked: Rr(De.checked),
    _peerChecked: cr(De.checked),
    _groupFocusWithin: Rr(De.focusWithin),
    _peerFocusWithin: cr(De.focusWithin),
    _peerPlaceholderShown: cr(De.placeholderShown),
    _placeholder: '&::placeholder',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
  },
  r_ = Object.keys(ql)
function Am(e, t) {
  return j(String(e).replace(/\./g, '-'), void 0, t)
}
function n_(e, t) {
  let r = {}
  const n = {}
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = Am(o, t == null ? void 0 : t.cssVarPrefix)
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [h, ...v] = f,
          S = `${h}.-${v.join('.')}`,
          C = bn.negate(s),
          m = bn.negate(u)
        n[S] = { value: C, var: l, varRef: m }
      }
      ;(r[l] = s), (n[o] = { value: s, var: l, varRef: u })
      continue
    }
    const c = (f) => {
        const v = [String(o).split('.')[0], f].join('.')
        if (!e[v]) return f
        const { reference: C } = Am(v, t == null ? void 0 : t.cssVarPrefix)
        return C
      },
      d = He(s) ? s : { default: s }
    ;(r = Lt(
      r,
      Object.entries(d).reduce((f, [h, v]) => {
        var S, C
        const m = c(v)
        if (h === 'default') return (f[l] = m), f
        const p = (C = (S = ql) == null ? void 0 : S[h]) != null ? C : h
        return (f[p] = { [l]: m }), f
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u })
  }
  return { cssVars: r, cssMap: n }
}
function o_(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
function i_(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
var a_ = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'gradients',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
  'breakpoints',
]
function s_(e) {
  return i_(e, a_)
}
function l_(e) {
  return e.semanticTokens
}
function u_(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e
  return o
}
function c_({ tokens: e, semanticTokens: t }) {
  var r, n
  const o = Object.entries((r = Cd(e)) != null ? r : {}).map(([a, s]) => [
      a,
      { isSemantic: !1, value: s },
    ]),
    i = Object.entries((n = Cd(t, 1)) != null ? n : {}).map(([a, s]) => [
      a,
      { isSemantic: !0, value: s },
    ])
  return Object.fromEntries([...o, ...i])
}
function Cd(e, t = 1 / 0) {
  return (!He(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          He(o) || Array.isArray(o)
            ? Object.entries(Cd(o, t - 1)).forEach(([i, a]) => {
                r[`${n}.${i}`] = a
              })
            : (r[n] = o),
          r
        ),
        {}
      )
}
function d_(e) {
  var t
  const r = u_(e),
    n = s_(r),
    o = l_(r),
    i = c_({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = n_(i, { cssVarPrefix: a })
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-ring-offset-width': '0px',
          '--chakra-ring-offset-color': '#fff',
          '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
          '--chakra-ring-offset-shadow': '0 0 #0000',
          '--chakra-ring-shadow': '0 0 #0000',
          '--chakra-space-x-reverse': '0',
          '--chakra-space-y-reverse': '0',
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: t_(r.breakpoints),
    }),
    r
  )
}
var op = Lt({}, _s, Q, $2, il, At, A2, V2, R2, n1, I2, Si, xd, se, U2, W2, O2, N2, z2, j2)
Object.assign({}, se, At, il, n1, Si)
var f_ = [...Object.keys(op), ...r_],
  p_ = { ...op, ...ql },
  h_ = (e) => e in p_,
  m_ = (e) => (t) => {
    if (!t.__breakpoints) return e
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {}
    for (const a in e) {
      let s = Wr(e[a], t)
      if (s == null) continue
      if (((s = He(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
        i[a] = s
        continue
      }
      const l = s.slice(0, o.length).length
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u]
        if (!c) {
          i[a] = s[u]
          continue
        }
        ;(i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u])
      }
    }
    return i
  }
function g_(e) {
  const t = []
  let r = '',
    n = !1
  for (let o = 0; o < e.length; o++) {
    const i = e[o]
    i === '('
      ? ((n = !0), (r += i))
      : i === ')'
      ? ((n = !1), (r += i))
      : i === ',' && !n
      ? (t.push(r), (r = ''))
      : (r += i)
  }
  return (r = r.trim()), r && t.push(r), t
}
function y_(e) {
  return /^var\(--.+\)$/.test(e)
}
var v_ = (e, t) => e.startsWith('--') && typeof t == 'string' && !y_(t),
  S_ = (e, t) => {
    var r, n
    if (t == null) return t
    const o = (l) => {
        var u, c
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef
      },
      i = (l) => {
        var u
        return (u = o(l)) != null ? u : l
      },
      [a, s] = g_(t)
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t
  }
function b_(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u
      const c = Wr(i, n),
        d = m_(c)(n)
      let f = {}
      for (let h in d) {
        const v = d[h]
        let S = Wr(v, n)
        h in r && (h = r[h]), v_(h, S) && (S = S_(n, S))
        let C = t[h]
        if ((C === !0 && (C = { property: h }), He(S))) {
          ;(f[h] = (s = f[h]) != null ? s : {}), (f[h] = Lt({}, f[h], o(S, !0)))
          continue
        }
        let m =
          (u = (l = C == null ? void 0 : C.transform) == null ? void 0 : l.call(C, S, n, c)) != null
            ? u
            : S
        m = C != null && C.processResult ? o(m, !0) : m
        const p = Wr(C == null ? void 0 : C.property, n)
        if (!a && C != null && C.static) {
          const g = Wr(C.static, n)
          f = Lt({}, f, g)
        }
        if (p && Array.isArray(p)) {
          for (const g of p) f[g] = m
          continue
        }
        if (p) {
          p === '&' && He(m) ? (f = Lt({}, f, m)) : (f[p] = m)
          continue
        }
        if (He(m)) {
          f = Lt({}, f, m)
          continue
        }
        f[h] = m
      }
      return f
    }
  return o
}
var s1 = (e) => (t) => b_({ theme: t, pseudos: ql, configs: op })(e)
function ue(e) {
  return {
    definePartsStyle(t) {
      return t
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t }
    },
  }
}
function x_(e, t) {
  if (Array.isArray(e)) return e
  if (He(e)) return t(e)
  if (e != null) return [e]
}
function w_(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r
  return -1
}
function k_(e) {
  const t = e.__breakpoints
  return function (n, o, i, a) {
    var s, l
    if (!t) return
    const u = {},
      c = x_(i, t.toArrayValue)
    if (!c) return u
    const d = c.length,
      f = d === 1,
      h = !!n.parts
    for (let v = 0; v < d; v++) {
      const S = t.details[v],
        C = t.details[w_(c, v)],
        m = ii(S.minW, C == null ? void 0 : C._minW),
        p = Wr((s = n[o]) == null ? void 0 : s[c[v]], a)
      if (p) {
        if (h) {
          ;(l = n.parts) == null ||
            l.forEach((g) => {
              Lt(u, { [g]: f ? p[g] : { [m]: p[g] } })
            })
          continue
        }
        if (!h) {
          f ? Lt(u, p) : (u[m] = p)
          continue
        }
        u[m] = p
      }
    }
    return u
  }
}
function C_(e) {
  return (t) => {
    var r
    const { variant: n, size: o, theme: i } = t,
      a = k_(i)
    return Lt(
      {},
      Wr((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', n, t)
    )
  }
}
function Bo(e) {
  return o_(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var __ = [
  'borders',
  'breakpoints',
  'colors',
  'components',
  'config',
  'direction',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'shadows',
  'sizes',
  'space',
  'styles',
  'transition',
  'zIndices',
]
function T_(e) {
  return He(e) ? __.every((t) => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var P_ = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  E_ = P_,
  $_ = { 'base': '0em', 'sm': '30em', 'md': '48em', 'lg': '62em', 'xl': '80em', '2xl': '96em' },
  A_ = $_,
  R_ = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471',
    },
    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },
    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C',
    },
    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803',
    },
    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71',
    },
    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
  z_ = R_,
  M_ = {
    'none': '0',
    'sm': '0.125rem',
    'base': '0.25rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    'xl': '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    'full': '9999px',
  },
  L_ = M_,
  D_ = {
    'xs': '0 0 0 1px rgba(0, 0, 0, 0.05)',
    'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    'outline': '0 0 0 3px rgba(66, 153, 225, 0.6)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
  B_ = D_,
  F_ = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  I_ = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  V_ = {
    'ultra-fast': '50ms',
    'faster': '100ms',
    'fast': '150ms',
    'normal': '200ms',
    'slow': '300ms',
    'slower': '400ms',
    'ultra-slow': '500ms',
  },
  O_ = { property: F_, easing: I_, duration: V_ },
  N_ = O_,
  j_ = {
    'none': 0,
    'sm': '4px',
    'base': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  W_ = j_,
  U_ = {
    'none': 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  H_ = U_,
  G_ = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      '3xs': '0.45rem',
      '2xs': '0.625rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  l1 = G_,
  u1 = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  K_ = {
    'max': 'max-content',
    'min': 'min-content',
    'full': '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    'prose': '60ch',
  },
  Y_ = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  Q_ = { ...u1, ...K_, container: Y_ },
  c1 = Q_,
  X_ = {
    breakpoints: A_,
    zIndices: E_,
    radii: L_,
    blur: W_,
    colors: z_,
    ...l1,
    sizes: c1,
    shadows: B_,
    space: u1,
    borders: H_,
    transition: N_,
  }
function J(e, t = {}) {
  let r = !1
  function n() {
    if (!r) {
      r = !0
      return
    }
    throw new Error(
      '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
    )
  }
  function o(...c) {
    n()
    for (const d of c) t[d] = l(d)
    return J(e, t)
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d))
    return J(e, t)
  }
  function a() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]))
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]))
  }
  function l(c) {
    const h = `chakra-${(['container', 'root'].includes(c ?? '') ? [e] : [e, c])
      .filter(Boolean)
      .join('__')}`
    return { className: h, selector: `.${h}`, toString: () => c }
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t)
    },
    __type: {},
  }
}
var q_ = J('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
  Z_ = J('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
  J_ = J('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
  eT = J('breadcrumb').parts('link', 'item', 'container').extend('separator')
J('button').parts()
var tT = J('checkbox').parts('control', 'icon', 'container').extend('label')
J('progress').parts('track', 'filledTrack').extend('label')
var rT = J('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  nT = J('editable').parts('preview', 'input', 'textarea'),
  oT = J('form').parts('container', 'requiredIndicator', 'helperText'),
  iT = J('formError').parts('text', 'icon'),
  aT = J('input').parts('addon', 'field', 'element'),
  sT = J('list').parts('container', 'item', 'icon'),
  lT = J('menu').parts('button', 'list', 'item').extend('groupTitle', 'command', 'divider'),
  uT = J('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  cT = J('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
J('pininput').parts('field')
var dT = J('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  fT = J('progress').parts('label', 'filledTrack', 'track'),
  pT = J('radio').parts('container', 'control', 'label'),
  hT = J('select').parts('field', 'icon'),
  mT = J('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  gT = J('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  yT = J('switch').parts('container', 'track', 'thumb'),
  vT = J('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  ST = J('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  bT = J('tag').parts('container', 'label', 'closeButton'),
  xT = J('card').parts('container', 'header', 'body', 'footer')
function _n(e, t, r) {
  return Math.min(Math.max(e, r), t)
}
class wT extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`)
  }
}
var ai = wT
function ip(e) {
  if (typeof e != 'string') throw new ai(e)
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
  let t = e.trim()
  t = AT.test(e) ? _T(e) : e
  const r = TT.exec(t)
  if (r) {
    const a = Array.from(r).slice(1)
    return [
      ...a.slice(0, 3).map((s) => parseInt(ra(s, 2), 16)),
      parseInt(ra(a[3] || 'f', 2), 16) / 255,
    ]
  }
  const n = PT.exec(t)
  if (n) {
    const a = Array.from(n).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
  }
  const o = ET.exec(t)
  if (o) {
    const a = Array.from(o).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || '1')]
  }
  const i = $T.exec(t)
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
    if (_n(0, 100, s) !== s) throw new ai(e)
    if (_n(0, 100, l) !== l) throw new ai(e)
    return [...RT(a, s, l), Number.isNaN(u) ? 1 : u]
  }
  throw new ai(e)
}
function kT(e) {
  let t = 5381,
    r = e.length
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r)
  return (t >>> 0) % 2341
}
const Rm = (e) => parseInt(e.replace(/_/g, ''), 36),
  CT =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = Rm(t.substring(0, 3)),
          n = Rm(t.substring(3)).toString(16)
        let o = ''
        for (let i = 0; i < 6 - n.length; i++) o += '0'
        return (e[r] = `${o}${n}`), e
      }, {})
function _T(e) {
  const t = e.toLowerCase().trim(),
    r = CT[kT(t)]
  if (!r) throw new ai(e)
  return `#${r}`
}
const ra = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  TT = new RegExp(`^#${ra('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  PT = new RegExp(`^#${ra('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  ET = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${ra(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  $T = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  AT = /^[a-z]+$/i,
  zm = (e) => Math.round(e * 255),
  RT = (e, t, r) => {
    let n = r / 100
    if (t === 0) return [n, n, n].map(zm)
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1))
    let s = 0,
      l = 0,
      u = 0
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a))
    const c = n - i / 2,
      d = s + c,
      f = l + c,
      h = u + c
    return [d, f, h].map(zm)
  }
function zT(e, t, r, n) {
  return `rgba(${_n(0, 255, e).toFixed()}, ${_n(0, 255, t).toFixed()}, ${_n(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(_n(0, 1, n).toFixed(3))})`
}
function MT(e, t) {
  const [r, n, o, i] = ip(e)
  return zT(r, n, o, i - t)
}
function LT(e) {
  const [t, r, n, o] = ip(e)
  let i = (a) => {
    const s = _n(0, 255, a).toString(16)
    return s.length === 1 ? `0${s}` : s
  }
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function DT(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var BT = (e) => Object.keys(e).length === 0,
  Xe = (e, t, r) => {
    const n = DT(e, `colors.${t}`, t)
    try {
      return LT(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  FT = (e) => {
    const [t, r, n] = ip(e)
    return (t * 299 + r * 587 + n * 114) / 1e3
  },
  IT = (e) => (t) => {
    const r = Xe(t, e)
    return FT(r) < 128 ? 'dark' : 'light'
  },
  VT = (e) => (t) => IT(e)(t) === 'dark',
  $o = (e, t) => (r) => {
    const n = Xe(r, e)
    return MT(n, 1 - t)
  }
function Mm(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  }
}
var OT = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`
function NT(e) {
  const t = OT()
  return !e || BT(e)
    ? t
    : e.string && e.colors
    ? WT(e.string, e.colors)
    : e.string && !e.colors
    ? jT(e.string)
    : e.colors && !e.string
    ? UT(e.colors)
    : t
}
function jT(e) {
  let t = 0
  if (e.length === 0) return t.toString()
  for (let n = 0; n < e.length; n += 1) (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t)
  let r = '#'
  for (let n = 0; n < 3; n += 1) {
    const o = (t >> (n * 8)) & 255
    r += `00${o.toString(16)}`.substr(-2)
  }
  return r
}
function WT(e, t) {
  let r = 0
  if (e.length === 0) return t[0]
  for (let n = 0; n < e.length; n += 1) (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
  return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function UT(e) {
  return e[Math.floor(Math.random() * e.length)]
}
function B(e, t) {
  return (r) => (r.colorMode === 'dark' ? t : e)
}
function ap(e) {
  const { orientation: t, vertical: r, horizontal: n } = e
  return t ? (t === 'vertical' ? r : n) : {}
}
function d1(e) {
  return He(e) && e.reference ? e.reference : String(e)
}
var Zl = (e, ...t) => t.map(d1).join(` ${e} `).replace(/calc/g, ''),
  Lm = (...e) => `calc(${Zl('+', ...e)})`,
  Dm = (...e) => `calc(${Zl('-', ...e)})`,
  _d = (...e) => `calc(${Zl('*', ...e)})`,
  Bm = (...e) => `calc(${Zl('/', ...e)})`,
  Fm = (e) => {
    const t = d1(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : _d(t, -1)
  },
  pr = Object.assign(
    (e) => ({
      add: (...t) => pr(Lm(e, ...t)),
      subtract: (...t) => pr(Dm(e, ...t)),
      multiply: (...t) => pr(_d(e, ...t)),
      divide: (...t) => pr(Bm(e, ...t)),
      negate: () => pr(Fm(e)),
      toString: () => e.toString(),
    }),
    { add: Lm, subtract: Dm, multiply: _d, divide: Bm, negate: Fm }
  )
function HT(e) {
  return !Number.isInteger(parseFloat(e.toString()))
}
function GT(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function f1(e) {
  const t = GT(e.toString())
  return t.includes('\\.') ? e : HT(e) ? t.replace('.', '\\.') : e
}
function KT(e, t = '') {
  return [t, f1(e)].filter(Boolean).join('-')
}
function YT(e, t) {
  return `var(${f1(e)}${t ? `, ${t}` : ''})`
}
function QT(e, t = '') {
  return `--${KT(e, t)}`
}
function $e(e, t) {
  const r = QT(e, t == null ? void 0 : t.prefix)
  return { variable: r, reference: YT(r, XT(t == null ? void 0 : t.fallback)) }
}
function XT(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: qT, definePartsStyle: Ts } = ue(yT.keys),
  bi = $e('switch-track-width'),
  $n = $e('switch-track-height'),
  Ku = $e('switch-track-diff'),
  ZT = pr.subtract(bi, $n),
  Td = $e('switch-thumb-x'),
  qo = $e('switch-bg'),
  JT = (e) => {
    const { colorScheme: t } = e
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [bi.reference],
      height: [$n.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [qo.variable]: 'colors.gray.300',
      _dark: { [qo.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [qo.variable]: `colors.${t}.500`, _dark: { [qo.variable]: `colors.${t}.200` } },
      bg: qo.reference,
    }
  },
  eP = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [$n.reference],
    height: [$n.reference],
    _checked: { transform: `translateX(${Td.reference})` },
  },
  tP = Ts((e) => ({
    container: {
      [Ku.variable]: ZT,
      [Td.variable]: Ku.reference,
      _rtl: { [Td.variable]: pr(Ku).negate().toString() },
    },
    track: JT(e),
    thumb: eP,
  })),
  rP = {
    sm: Ts({ container: { [bi.variable]: '1.375rem', [$n.variable]: 'sizes.3' } }),
    md: Ts({ container: { [bi.variable]: '1.875rem', [$n.variable]: 'sizes.4' } }),
    lg: Ts({ container: { [bi.variable]: '2.875rem', [$n.variable]: 'sizes.6' } }),
  },
  nP = qT({ baseStyle: tP, sizes: rP, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: oP, definePartsStyle: yo } = ue(vT.keys),
  iP = yo({
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: { textAlign: 'start' },
    caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' },
  }),
  al = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  aP = yo((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: B('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...al,
      },
      td: { borderBottom: '1px', borderColor: B(`${t}.100`, `${t}.700`)(e), ...al },
      caption: { color: B('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  sP = yo((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: B('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...al,
      },
      td: { borderBottom: '1px', borderColor: B(`${t}.100`, `${t}.700`)(e), ...al },
      caption: { color: B('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: B(`${t}.100`, `${t}.700`)(e) },
            'td': { background: B(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  lP = { simple: aP, striped: sP, unstyled: {} },
  uP = {
    sm: yo({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: yo({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: yo({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  cP = oP({
    baseStyle: iP,
    variants: lP,
    sizes: uP,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  it = j('tabs-color'),
  Wt = j('tabs-bg'),
  ts = j('tabs-border-color'),
  { defineMultiStyleConfig: dP, definePartsStyle: ar } = ue(ST.keys),
  fP = (e) => {
    const { orientation: t } = e
    return { display: t === 'vertical' ? 'flex' : 'block' }
  },
  pP = (e) => {
    const { isFitted: t } = e
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    }
  },
  hP = (e) => {
    const { align: t = 'start', orientation: r } = e
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: r === 'vertical' ? 'column' : 'row',
    }
  },
  mP = { p: 4 },
  gP = ar((e) => ({ root: fP(e), tab: pP(e), tablist: hP(e), tabpanel: mP })),
  yP = {
    sm: ar({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: ar({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: ar({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  vP = ar((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === 'vertical',
      o = r === 'vertical' ? 'borderStart' : 'borderBottom',
      i = n ? 'marginStart' : 'marginBottom'
    return {
      tablist: { [o]: '2px solid', borderColor: 'inherit' },
      tab: {
        [o]: '2px solid',
        borderColor: 'transparent',
        [i]: '-2px',
        _selected: {
          [it.variable]: `colors.${t}.600`,
          _dark: { [it.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [Wt.variable]: 'colors.gray.200',
          _dark: { [Wt.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: it.reference,
        bg: Wt.reference,
      },
    }
  }),
  SP = ar((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [ts.variable]: 'transparent',
        _selected: {
          [it.variable]: `colors.${t}.600`,
          [ts.variable]: 'colors.white',
          _dark: { [it.variable]: `colors.${t}.300`, [ts.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: ts.reference,
        },
        color: it.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  bP = ar((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [Wt.variable]: 'colors.gray.50',
        _dark: { [Wt.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [Wt.variable]: 'colors.white',
          [it.variable]: `colors.${t}.600`,
          _dark: { [Wt.variable]: 'colors.gray.800', [it.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: it.reference,
        bg: Wt.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  xP = ar((e) => {
    const { colorScheme: t, theme: r } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: Xe(r, `${t}.700`), bg: Xe(r, `${t}.100`) },
      },
    }
  }),
  wP = ar((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [it.variable]: 'colors.gray.600',
        _dark: { [it.variable]: 'inherit' },
        _selected: {
          [it.variable]: 'colors.white',
          [Wt.variable]: `colors.${t}.600`,
          _dark: { [it.variable]: 'colors.gray.800', [Wt.variable]: `colors.${t}.300` },
        },
        color: it.reference,
        bg: Wt.reference,
      },
    }
  }),
  kP = ar({}),
  CP = {
    'line': vP,
    'enclosed': SP,
    'enclosed-colored': bP,
    'soft-rounded': xP,
    'solid-rounded': wP,
    'unstyled': kP,
  },
  _P = dP({
    baseStyle: gP,
    sizes: yP,
    variants: CP,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  na = j('badge-bg'),
  Zr = j('badge-color'),
  p1 = j('badge-shadow'),
  TP = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: na.reference,
    color: Zr.reference,
    boxShadow: p1.reference,
  },
  PP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = $o(`${t}.500`, 0.6)(r)
    return {
      [na.variable]: `colors.${t}.500`,
      [Zr.variable]: 'colors.white',
      _dark: { [na.variable]: n, [Zr.variable]: 'colors.whiteAlpha.800' },
    }
  },
  EP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = $o(`${t}.200`, 0.16)(r)
    return {
      [na.variable]: `colors.${t}.100`,
      [Zr.variable]: `colors.${t}.800`,
      _dark: { [na.variable]: n, [Zr.variable]: `colors.${t}.200` },
    }
  },
  $P = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = $o(`${t}.200`, 0.8)(r)
    return {
      [Zr.variable]: `colors.${t}.500`,
      _dark: { [Zr.variable]: n },
      [p1.variable]: `inset 0 0 0px 1px ${Zr.reference}`,
    }
  },
  AP = { solid: PP, subtle: EP, outline: $P },
  xi = { baseStyle: TP, variants: AP, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  RP = j('badge-bg'),
  zP = j('badge-color'),
  { defineMultiStyleConfig: MP, definePartsStyle: An } = ue(bT.keys),
  LP = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    color: zP.reference,
    bg: RP.reference,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' },
  },
  DP = { lineHeight: 1.2, overflow: 'visible' },
  BP = {
    fontSize: 'lg',
    w: '5',
    h: '5',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '1.5',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  FP = An({ container: LP, label: DP, closeButton: BP }),
  IP = {
    sm: An({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: An({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: An({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } }),
  },
  VP = {
    subtle: An((e) => {
      var t
      return { container: (t = xi.variants) == null ? void 0 : t.subtle(e) }
    }),
    solid: An((e) => {
      var t
      return { container: (t = xi.variants) == null ? void 0 : t.solid(e) }
    }),
    outline: An((e) => {
      var t
      return { container: (t = xi.variants) == null ? void 0 : t.outline(e) }
    }),
  },
  OP = MP({
    variants: VP,
    baseStyle: FP,
    sizes: IP,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: gr, defineMultiStyleConfig: NP } = ue(aT.keys),
  jP = gr({
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
  }),
  zr = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  WP = {
    lg: gr({ field: zr.lg, addon: zr.lg }),
    md: gr({ field: zr.md, addon: zr.md }),
    sm: gr({ field: zr.sm, addon: zr.sm }),
    xs: gr({ field: zr.xs, addon: zr.xs }),
  }
function sp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e
  return {
    focusBorderColor: t || B('blue.500', 'blue.300')(e),
    errorBorderColor: r || B('red.500', 'red.300')(e),
  }
}
var UP = gr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = sp(e)
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: B('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Xe(t, n), boxShadow: `0 0 0 1px ${Xe(t, n)}` },
        _focusVisible: { zIndex: 1, borderColor: Xe(t, r), boxShadow: `0 0 0 1px ${Xe(t, r)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: B('inherit', 'whiteAlpha.50')(e),
        bg: B('gray.100', 'whiteAlpha.300')(e),
      },
    }
  }),
  HP = gr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = sp(e)
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: B('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: B('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Xe(t, n) },
        _focusVisible: { bg: 'transparent', borderColor: Xe(t, r) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: B('gray.100', 'whiteAlpha.50')(e),
      },
    }
  }),
  GP = gr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = sp(e)
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Xe(t, n), boxShadow: `0px 1px 0px 0px ${Xe(t, n)}` },
        _focusVisible: { borderColor: Xe(t, r), boxShadow: `0px 1px 0px 0px ${Xe(t, r)}` },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
      },
    }
  }),
  KP = gr({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  YP = { outline: UP, filled: HP, flushed: GP, unstyled: KP },
  q = NP({
    baseStyle: jP,
    sizes: WP,
    variants: YP,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  Im,
  QP = {
    ...((Im = q.baseStyle) == null ? void 0 : Im.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  Vm,
  Om,
  XP = {
    outline: (e) => {
      var t, r
      return (r = (t = q.variants) == null ? void 0 : t.outline(e).field) != null ? r : {}
    },
    flushed: (e) => {
      var t, r
      return (r = (t = q.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {}
    },
    filled: (e) => {
      var t, r
      return (r = (t = q.variants) == null ? void 0 : t.filled(e).field) != null ? r : {}
    },
    unstyled: (Om = (Vm = q.variants) == null ? void 0 : Vm.unstyled.field) != null ? Om : {},
  },
  Nm,
  jm,
  Wm,
  Um,
  Hm,
  Gm,
  Km,
  Ym,
  qP = {
    xs: (jm = (Nm = q.sizes) == null ? void 0 : Nm.xs.field) != null ? jm : {},
    sm: (Um = (Wm = q.sizes) == null ? void 0 : Wm.sm.field) != null ? Um : {},
    md: (Gm = (Hm = q.sizes) == null ? void 0 : Hm.md.field) != null ? Gm : {},
    lg: (Ym = (Km = q.sizes) == null ? void 0 : Km.lg.field) != null ? Ym : {},
  },
  ZP = { baseStyle: QP, sizes: qP, variants: XP, defaultProps: { size: 'md', variant: 'outline' } },
  rs = $e('tooltip-bg'),
  Yu = $e('tooltip-fg'),
  JP = $e('popper-arrow-bg'),
  eE = {
    bg: rs.reference,
    color: Yu.reference,
    [rs.variable]: 'colors.gray.700',
    [Yu.variable]: 'colors.whiteAlpha.900',
    _dark: { [rs.variable]: 'colors.gray.300', [Yu.variable]: 'colors.gray.900' },
    [JP.variable]: rs.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  tE = { baseStyle: eE },
  { defineMultiStyleConfig: rE, definePartsStyle: si } = ue(fT.keys),
  nE = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = B(Mm(), Mm('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = B(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Xe(r, a)} 50%,
    transparent 100%
  )`
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
  },
  oE = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  iE = (e) => ({ bg: B('gray.100', 'whiteAlpha.300')(e) }),
  aE = (e) => ({ transitionProperty: 'common', transitionDuration: 'slow', ...nE(e) }),
  sE = si((e) => ({ label: oE, filledTrack: aE(e), track: iE(e) })),
  lE = {
    xs: si({ track: { h: '1' } }),
    sm: si({ track: { h: '2' } }),
    md: si({ track: { h: '3' } }),
    lg: si({ track: { h: '4' } }),
  },
  uE = rE({ sizes: lE, baseStyle: sE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  cE = (e) => typeof e == 'function'
function Je(e, ...t) {
  return cE(e) ? e(...t) : e
}
var { definePartsStyle: Ps, defineMultiStyleConfig: dE } = ue(tT.keys),
  wi = j('checkbox-size'),
  fE = (e) => {
    const { colorScheme: t } = e
    return {
      w: wi.reference,
      h: wi.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B('white', 'gray.900')(e),
        _hover: { bg: B(`${t}.600`, `${t}.300`)(e), borderColor: B(`${t}.600`, `${t}.300`)(e) },
        _disabled: {
          borderColor: B('gray.200', 'transparent')(e),
          bg: B('gray.200', 'whiteAlpha.300')(e),
          color: B('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B('white', 'gray.900')(e),
      },
      _disabled: {
        bg: B('gray.100', 'whiteAlpha.100')(e),
        borderColor: B('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: B('red.500', 'red.300')(e) },
    }
  },
  pE = { _disabled: { cursor: 'not-allowed' } },
  hE = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  mE = { transitionProperty: 'transform', transitionDuration: 'normal' },
  gE = Ps((e) => ({ icon: mE, container: pE, control: Je(fE, e), label: hE })),
  yE = {
    sm: Ps({
      control: { [wi.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: Ps({
      control: { [wi.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: Ps({
      control: { [wi.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  sl = dE({ baseStyle: gE, sizes: yE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: vE, definePartsStyle: Es } = ue(pT.keys),
  SE = (e) => {
    var t
    const r = (t = Je(sl.baseStyle, e)) == null ? void 0 : t.control
    return {
      ...r,
      borderRadius: 'full',
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      },
    }
  },
  bE = Es((e) => {
    var t, r, n, o
    return {
      label: (r = (t = sl).baseStyle) == null ? void 0 : r.call(t, e).label,
      container: (o = (n = sl).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: SE(e),
    }
  }),
  xE = {
    md: Es({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: Es({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: Es({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  wE = vE({ baseStyle: bE, sizes: xE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: kE, definePartsStyle: CE } = ue(hT.keys),
  ns = j('select-bg'),
  Qm,
  _E = {
    ...((Qm = q.baseStyle) == null ? void 0 : Qm.field),
    'appearance': 'none',
    'paddingBottom': '1px',
    'lineHeight': 'normal',
    'bg': ns.reference,
    [ns.variable]: 'colors.white',
    '_dark': { [ns.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: ns.reference },
  },
  TE = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  PE = CE({ field: _E, icon: TE }),
  os = { paddingInlineEnd: '8' },
  Xm,
  qm,
  Zm,
  Jm,
  e0,
  t0,
  r0,
  n0,
  EE = {
    lg: {
      ...((Xm = q.sizes) == null ? void 0 : Xm.lg),
      field: { ...((qm = q.sizes) == null ? void 0 : qm.lg.field), ...os },
    },
    md: {
      ...((Zm = q.sizes) == null ? void 0 : Zm.md),
      field: { ...((Jm = q.sizes) == null ? void 0 : Jm.md.field), ...os },
    },
    sm: {
      ...((e0 = q.sizes) == null ? void 0 : e0.sm),
      field: { ...((t0 = q.sizes) == null ? void 0 : t0.sm.field), ...os },
    },
    xs: {
      ...((r0 = q.sizes) == null ? void 0 : r0.xs),
      field: { ...((n0 = q.sizes) == null ? void 0 : n0.xs.field), ...os },
      icon: { insetEnd: '1' },
    },
  },
  $E = kE({ baseStyle: PE, sizes: EE, variants: q.variants, defaultProps: q.defaultProps }),
  Qu = j('skeleton-start-color'),
  Xu = j('skeleton-end-color'),
  AE = {
    [Qu.variable]: 'colors.gray.100',
    [Xu.variable]: 'colors.gray.400',
    _dark: { [Qu.variable]: 'colors.gray.800', [Xu.variable]: 'colors.gray.600' },
    background: Qu.reference,
    borderColor: Xu.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  RE = { baseStyle: AE },
  qu = j('skip-link-bg'),
  zE = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [qu.variable]: 'colors.white',
      _dark: { [qu.variable]: 'colors.gray.700' },
      bg: qu.reference,
    },
  },
  ME = { baseStyle: zE },
  { defineMultiStyleConfig: LE, definePartsStyle: Jl } = ue(mT.keys),
  oa = j('slider-thumb-size'),
  ia = j('slider-track-size'),
  Or = j('slider-bg'),
  DE = (e) => {
    const { orientation: t } = e
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...ap({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
    }
  },
  BE = (e) => ({
    ...ap({
      orientation: e.orientation,
      horizontal: { h: ia.reference },
      vertical: { w: ia.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [Or.variable]: 'colors.gray.200',
    _dark: { [Or.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [Or.variable]: 'colors.gray.300',
      _dark: { [Or.variable]: 'colors.whiteAlpha.300' },
    },
    bg: Or.reference,
  }),
  FE = (e) => {
    const { orientation: t } = e
    return {
      ...ap({
        orientation: t,
        vertical: {
          left: '50%',
          transform: 'translateX(-50%)',
          _active: { transform: 'translateX(-50%) scale(1.15)' },
        },
        horizontal: {
          top: '50%',
          transform: 'translateY(-50%)',
          _active: { transform: 'translateY(-50%) scale(1.15)' },
        },
      }),
      w: oa.reference,
      h: oa.reference,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' },
    }
  },
  IE = (e) => {
    const { colorScheme: t } = e
    return {
      width: 'inherit',
      height: 'inherit',
      [Or.variable]: `colors.${t}.500`,
      _dark: { [Or.variable]: `colors.${t}.200` },
      bg: Or.reference,
    }
  },
  VE = Jl((e) => ({ container: DE(e), track: BE(e), thumb: FE(e), filledTrack: IE(e) })),
  OE = Jl({ container: { [oa.variable]: 'sizes.4', [ia.variable]: 'sizes.1' } }),
  NE = Jl({ container: { [oa.variable]: 'sizes.3.5', [ia.variable]: 'sizes.1' } }),
  jE = Jl({ container: { [oa.variable]: 'sizes.2.5', [ia.variable]: 'sizes.0.5' } }),
  WE = { lg: OE, md: NE, sm: jE },
  UE = LE({ baseStyle: VE, sizes: WE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  xn = $e('spinner-size'),
  HE = { width: [xn.reference], height: [xn.reference] },
  GE = {
    xs: { [xn.variable]: 'sizes.3' },
    sm: { [xn.variable]: 'sizes.4' },
    md: { [xn.variable]: 'sizes.6' },
    lg: { [xn.variable]: 'sizes.8' },
    xl: { [xn.variable]: 'sizes.12' },
  },
  KE = { baseStyle: HE, sizes: GE, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: YE, definePartsStyle: h1 } = ue(gT.keys),
  QE = { fontWeight: 'medium' },
  XE = { opacity: 0.8, marginBottom: '2' },
  qE = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  ZE = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  JE = h1({ container: {}, label: QE, helpText: XE, number: qE, icon: ZE }),
  e5 = {
    md: h1({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  t5 = YE({ baseStyle: JE, sizes: e5, defaultProps: { size: 'md' } }),
  Zu = j('kbd-bg'),
  r5 = {
    [Zu.variable]: 'colors.gray.100',
    _dark: { [Zu.variable]: 'colors.whiteAlpha.100' },
    bg: Zu.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  n5 = { baseStyle: r5 },
  o5 = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  i5 = { baseStyle: o5 },
  { defineMultiStyleConfig: a5, definePartsStyle: s5 } = ue(sT.keys),
  l5 = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  u5 = s5({ icon: l5 }),
  c5 = a5({ baseStyle: u5 }),
  { defineMultiStyleConfig: d5, definePartsStyle: f5 } = ue(lT.keys),
  Jt = j('menu-bg'),
  Ju = j('menu-shadow'),
  p5 = {
    [Jt.variable]: '#fff',
    [Ju.variable]: 'shadows.sm',
    _dark: { [Jt.variable]: 'colors.gray.700', [Ju.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: Jt.reference,
    boxShadow: Ju.reference,
  },
  h5 = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [Jt.variable]: 'colors.gray.100', _dark: { [Jt.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [Jt.variable]: 'colors.gray.200',
      _dark: { [Jt.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [Jt.variable]: 'colors.gray.100',
      _dark: { [Jt.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: Jt.reference,
  },
  m5 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  g5 = { opacity: 0.6 },
  y5 = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  v5 = { transitionProperty: 'common', transitionDuration: 'normal' },
  S5 = f5({ button: v5, list: p5, item: h5, groupTitle: m5, command: g5, divider: y5 }),
  b5 = d5({ baseStyle: S5 }),
  { defineMultiStyleConfig: x5, definePartsStyle: Pd } = ue(uT.keys),
  ec = j('modal-bg'),
  tc = j('modal-shadow'),
  w5 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  k5 = (e) => {
    const { isCentered: t, scrollBehavior: r } = e
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: r === 'inside' ? 'hidden' : 'auto',
      overscrollBehaviorY: 'none',
    }
  },
  C5 = (e) => {
    const { scrollBehavior: t } = e
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [ec.variable]: 'colors.white',
      [tc.variable]: 'shadows.lg',
      _dark: { [ec.variable]: 'colors.gray.700', [tc.variable]: 'shadows.dark-lg' },
      bg: ec.reference,
      boxShadow: tc.reference,
    }
  },
  _5 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  T5 = { position: 'absolute', top: '2', insetEnd: '3' },
  P5 = (e) => {
    const { scrollBehavior: t } = e
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
  },
  E5 = { px: '6', py: '4' },
  $5 = Pd((e) => ({
    overlay: w5,
    dialogContainer: Je(k5, e),
    dialog: Je(C5, e),
    header: _5,
    closeButton: T5,
    body: Je(P5, e),
    footer: E5,
  }))
function Vt(e) {
  return Pd(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  )
}
var A5 = {
    'xs': Vt('xs'),
    'sm': Vt('sm'),
    'md': Vt('md'),
    'lg': Vt('lg'),
    'xl': Vt('xl'),
    '2xl': Vt('2xl'),
    '3xl': Vt('3xl'),
    '4xl': Vt('4xl'),
    '5xl': Vt('5xl'),
    '6xl': Vt('6xl'),
    'full': Vt('full'),
  },
  R5 = x5({ baseStyle: $5, sizes: A5, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: z5, definePartsStyle: m1 } = ue(cT.keys),
  lp = $e('number-input-stepper-width'),
  g1 = $e('number-input-input-padding'),
  M5 = pr(lp).add('0.5rem').toString(),
  rc = $e('number-input-bg'),
  nc = $e('number-input-color'),
  oc = $e('number-input-border-color'),
  L5 = { [lp.variable]: 'sizes.6', [g1.variable]: M5 },
  D5 = (e) => {
    var t, r
    return (r = (t = Je(q.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {}
  },
  B5 = { width: lp.reference },
  F5 = {
    borderStart: '1px solid',
    borderStartColor: oc.reference,
    color: nc.reference,
    bg: rc.reference,
    [nc.variable]: 'colors.chakra-body-text',
    [oc.variable]: 'colors.chakra-border-color',
    _dark: { [nc.variable]: 'colors.whiteAlpha.800', [oc.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [rc.variable]: 'colors.gray.200',
      _dark: { [rc.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  I5 = m1((e) => {
    var t
    return { root: L5, field: (t = Je(D5, e)) != null ? t : {}, stepperGroup: B5, stepper: F5 }
  })
function is(e) {
  var t, r, n
  const o = (t = q.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
    s = l1.fontSizes[a]
  return m1({
    field: { ...o.field, paddingInlineEnd: g1.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: pr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  })
}
var V5 = { xs: is('xs'), sm: is('sm'), md: is('md'), lg: is('lg') },
  O5 = z5({ baseStyle: I5, sizes: V5, variants: q.variants, defaultProps: q.defaultProps }),
  o0,
  N5 = { ...((o0 = q.baseStyle) == null ? void 0 : o0.field), textAlign: 'center' },
  j5 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  i0,
  a0,
  W5 = {
    outline: (e) => {
      var t, r, n
      return (n =
        (r = Je((t = q.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    flushed: (e) => {
      var t, r, n
      return (n =
        (r = Je((t = q.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    filled: (e) => {
      var t, r, n
      return (n =
        (r = Je((t = q.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    unstyled: (a0 = (i0 = q.variants) == null ? void 0 : i0.unstyled.field) != null ? a0 : {},
  },
  U5 = { baseStyle: N5, sizes: j5, variants: W5, defaultProps: q.defaultProps },
  { defineMultiStyleConfig: H5, definePartsStyle: G5 } = ue(dT.keys),
  as = $e('popper-bg'),
  K5 = $e('popper-arrow-bg'),
  s0 = $e('popper-arrow-shadow-color'),
  Y5 = { zIndex: 10 },
  Q5 = {
    [as.variable]: 'colors.white',
    bg: as.reference,
    [K5.variable]: as.reference,
    [s0.variable]: 'colors.gray.200',
    _dark: { [as.variable]: 'colors.gray.700', [s0.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  X5 = { px: 3, py: 2, borderBottomWidth: '1px' },
  q5 = { px: 3, py: 2 },
  Z5 = { px: 3, py: 2, borderTopWidth: '1px' },
  J5 = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  e$ = G5({ popper: Y5, content: Q5, header: X5, body: q5, footer: Z5, closeButton: J5 }),
  t$ = H5({ baseStyle: e$ }),
  { definePartsStyle: Ed, defineMultiStyleConfig: r$ } = ue(rT.keys),
  ic = j('drawer-bg'),
  ac = j('drawer-box-shadow')
function Gn(e) {
  return Ed(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var n$ = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  o$ = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  i$ = (e) => {
    const { isFullHeight: t } = e
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [ic.variable]: 'colors.white',
      [ac.variable]: 'shadows.lg',
      _dark: { [ic.variable]: 'colors.gray.700', [ac.variable]: 'shadows.dark-lg' },
      bg: ic.reference,
      boxShadow: ac.reference,
    }
  },
  a$ = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  s$ = { position: 'absolute', top: '2', insetEnd: '3' },
  l$ = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  u$ = { px: '6', py: '4' },
  c$ = Ed((e) => ({
    overlay: n$,
    dialogContainer: o$,
    dialog: Je(i$, e),
    header: a$,
    closeButton: s$,
    body: l$,
    footer: u$,
  })),
  d$ = { xs: Gn('xs'), sm: Gn('md'), md: Gn('lg'), lg: Gn('2xl'), xl: Gn('4xl'), full: Gn('full') },
  f$ = r$({ baseStyle: c$, sizes: d$, defaultProps: { size: 'xs' } }),
  { definePartsStyle: p$, defineMultiStyleConfig: h$ } = ue(nT.keys),
  m$ = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  g$ = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  y$ = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  v$ = p$({ preview: m$, input: g$, textarea: y$ }),
  S$ = h$({ baseStyle: v$ }),
  { definePartsStyle: b$, defineMultiStyleConfig: x$ } = ue(oT.keys),
  vo = j('form-control-color'),
  w$ = {
    marginStart: '1',
    [vo.variable]: 'colors.red.500',
    _dark: { [vo.variable]: 'colors.red.300' },
    color: vo.reference,
  },
  k$ = {
    mt: '2',
    [vo.variable]: 'colors.gray.600',
    _dark: { [vo.variable]: 'colors.whiteAlpha.600' },
    color: vo.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  C$ = b$({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: w$,
    helperText: k$,
  }),
  _$ = x$({ baseStyle: C$ }),
  { definePartsStyle: T$, defineMultiStyleConfig: P$ } = ue(iT.keys),
  So = j('form-error-color'),
  E$ = {
    [So.variable]: 'colors.red.500',
    _dark: { [So.variable]: 'colors.red.300' },
    color: So.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  $$ = {
    marginEnd: '0.5em',
    [So.variable]: 'colors.red.500',
    _dark: { [So.variable]: 'colors.red.300' },
    color: So.reference,
  },
  A$ = T$({ text: E$, icon: $$ }),
  R$ = P$({ baseStyle: A$ }),
  z$ = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  M$ = { baseStyle: z$ },
  L$ = { fontFamily: 'heading', fontWeight: 'bold' },
  D$ = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    'xl': { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    'lg': { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    'md': { fontSize: 'xl', lineHeight: 1.2 },
    'sm': { fontSize: 'md', lineHeight: 1.2 },
    'xs': { fontSize: 'sm', lineHeight: 1.2 },
  },
  B$ = { baseStyle: L$, sizes: D$, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: F$, definePartsStyle: I$ } = ue(eT.keys),
  V$ = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  O$ = I$({ link: V$ }),
  N$ = F$({ baseStyle: O$ }),
  j$ = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  y1 = (e) => {
    const { colorScheme: t, theme: r } = e
    if (t === 'gray')
      return {
        color: B('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: B('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: B('gray.200', 'whiteAlpha.300')(e) },
      }
    const n = $o(`${t}.200`, 0.12)(r),
      o = $o(`${t}.200`, 0.24)(r)
    return {
      color: B(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: B(`${t}.50`, n)(e) },
      _active: { bg: B(`${t}.100`, o)(e) },
    }
  },
  W$ = (e) => {
    const { colorScheme: t } = e,
      r = B('gray.200', 'whiteAlpha.300')(e)
    return {
      'border': '1px solid',
      'borderColor': t === 'gray' ? r : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px',
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px',
      },
      ...Je(y1, e),
    }
  },
  U$ = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  H$ = (e) => {
    var t
    const { colorScheme: r } = e
    if (r === 'gray') {
      const l = B('gray.100', 'whiteAlpha.200')(e)
      return {
        bg: l,
        _hover: { bg: B('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: l } },
        _active: { bg: B('gray.300', 'whiteAlpha.400')(e) },
      }
    }
    const {
        bg: n = `${r}.500`,
        color: o = 'white',
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = U$[r]) != null ? t : {},
      s = B(n, `${r}.200`)(e)
    return {
      bg: s,
      color: B(o, 'gray.800')(e),
      _hover: { bg: B(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: B(a, `${r}.400`)(e) },
    }
  },
  G$ = (e) => {
    const { colorScheme: t } = e
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: B(`${t}.500`, `${t}.200`)(e),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: B(`${t}.700`, `${t}.500`)(e) },
    }
  },
  K$ = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  Y$ = { ghost: y1, outline: W$, solid: H$, link: G$, unstyled: K$ },
  Q$ = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  X$ = {
    baseStyle: j$,
    variants: Y$,
    sizes: Q$,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: Rn, defineMultiStyleConfig: q$ } = ue(xT.keys),
  ll = j('card-bg'),
  Sr = j('card-padding'),
  v1 = j('card-shadow'),
  $s = j('card-radius'),
  S1 = j('card-border-width', '0'),
  b1 = j('card-border-color'),
  Z$ = Rn({
    container: {
      [ll.variable]: 'colors.chakra-body-bg',
      backgroundColor: ll.reference,
      boxShadow: v1.reference,
      borderRadius: $s.reference,
      color: 'chakra-body-text',
      borderWidth: S1.reference,
      borderColor: b1.reference,
    },
    body: { padding: Sr.reference, flex: '1 1 0%' },
    header: { padding: Sr.reference },
    footer: { padding: Sr.reference },
  }),
  J$ = {
    sm: Rn({ container: { [$s.variable]: 'radii.base', [Sr.variable]: 'space.3' } }),
    md: Rn({ container: { [$s.variable]: 'radii.md', [Sr.variable]: 'space.5' } }),
    lg: Rn({ container: { [$s.variable]: 'radii.xl', [Sr.variable]: 'space.7' } }),
  },
  e3 = {
    elevated: Rn({
      container: { [v1.variable]: 'shadows.base', _dark: { [ll.variable]: 'colors.gray.700' } },
    }),
    outline: Rn({
      container: { [S1.variable]: '1px', [b1.variable]: 'colors.chakra-border-color' },
    }),
    filled: Rn({ container: { [ll.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [Sr.variable]: 0 },
      header: { [Sr.variable]: 0 },
      footer: { [Sr.variable]: 0 },
    },
  },
  t3 = q$({
    baseStyle: Z$,
    variants: e3,
    sizes: J$,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  ki = $e('close-button-size'),
  Zo = $e('close-button-bg'),
  r3 = {
    w: [ki.reference],
    h: [ki.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Zo.variable]: 'colors.blackAlpha.100',
      _dark: { [Zo.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Zo.variable]: 'colors.blackAlpha.200',
      _dark: { [Zo.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Zo.reference,
  },
  n3 = {
    lg: { [ki.variable]: 'sizes.10', fontSize: 'md' },
    md: { [ki.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [ki.variable]: 'sizes.6', fontSize: '2xs' },
  },
  o3 = { baseStyle: r3, sizes: n3, defaultProps: { size: 'md' } },
  { variants: i3, defaultProps: a3 } = xi,
  s3 = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  l3 = { baseStyle: s3, variants: i3, defaultProps: a3 },
  u3 = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  c3 = { baseStyle: u3 },
  d3 = { opacity: 0.6, borderColor: 'inherit' },
  f3 = { borderStyle: 'solid' },
  p3 = { borderStyle: 'dashed' },
  h3 = { solid: f3, dashed: p3 },
  m3 = { baseStyle: d3, variants: h3, defaultProps: { variant: 'solid' } },
  { definePartsStyle: g3, defineMultiStyleConfig: y3 } = ue(q_.keys),
  v3 = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  S3 = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  b3 = { pt: '2', px: '4', pb: '5' },
  x3 = { fontSize: '1.25em' },
  w3 = g3({ container: v3, button: S3, panel: b3, icon: x3 }),
  k3 = y3({ baseStyle: w3 }),
  { definePartsStyle: va, defineMultiStyleConfig: C3 } = ue(Z_.keys),
  St = j('alert-fg'),
  Tr = j('alert-bg'),
  _3 = va({
    container: { bg: Tr.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: St.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: St.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  })
function up(e) {
  const { theme: t, colorScheme: r } = e,
    n = $o(`${r}.200`, 0.16)(t)
  return { light: `colors.${r}.100`, dark: n }
}
var T3 = va((e) => {
    const { colorScheme: t } = e,
      r = up(e)
    return {
      container: {
        [St.variable]: `colors.${t}.500`,
        [Tr.variable]: r.light,
        _dark: { [St.variable]: `colors.${t}.200`, [Tr.variable]: r.dark },
      },
    }
  }),
  P3 = va((e) => {
    const { colorScheme: t } = e,
      r = up(e)
    return {
      container: {
        [St.variable]: `colors.${t}.500`,
        [Tr.variable]: r.light,
        _dark: { [St.variable]: `colors.${t}.200`, [Tr.variable]: r.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: St.reference,
      },
    }
  }),
  E3 = va((e) => {
    const { colorScheme: t } = e,
      r = up(e)
    return {
      container: {
        [St.variable]: `colors.${t}.500`,
        [Tr.variable]: r.light,
        _dark: { [St.variable]: `colors.${t}.200`, [Tr.variable]: r.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: St.reference,
      },
    }
  }),
  $3 = va((e) => {
    const { colorScheme: t } = e
    return {
      container: {
        [St.variable]: 'colors.white',
        [Tr.variable]: `colors.${t}.500`,
        _dark: { [St.variable]: 'colors.gray.900', [Tr.variable]: `colors.${t}.200` },
        color: St.reference,
      },
    }
  }),
  A3 = { 'subtle': T3, 'left-accent': P3, 'top-accent': E3, 'solid': $3 },
  R3 = C3({
    baseStyle: _3,
    variants: A3,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: x1, defineMultiStyleConfig: z3 } = ue(J_.keys),
  bo = j('avatar-border-color'),
  sc = j('avatar-bg'),
  M3 = {
    borderRadius: 'full',
    border: '0.2em solid',
    [bo.variable]: 'white',
    _dark: { [bo.variable]: 'colors.gray.800' },
    borderColor: bo.reference,
  },
  L3 = {
    [sc.variable]: 'colors.gray.200',
    _dark: { [sc.variable]: 'colors.whiteAlpha.400' },
    bgColor: sc.reference,
  },
  l0 = j('avatar-background'),
  D3 = (e) => {
    const { name: t, theme: r } = e,
      n = t ? NT({ string: t }) : 'colors.gray.400',
      o = VT(n)(r)
    let i = 'white'
    return (
      o || (i = 'gray.800'),
      {
        'bg': l0.reference,
        '&:not([data-loaded])': { [l0.variable]: n },
        'color': i,
        [bo.variable]: 'colors.white',
        '_dark': { [bo.variable]: 'colors.gray.800' },
        'borderColor': bo.reference,
        'verticalAlign': 'top',
      }
    )
  },
  B3 = x1((e) => ({ badge: Je(M3, e), excessLabel: Je(L3, e), container: Je(D3, e) }))
function Mr(e) {
  const t = e !== '100%' ? c1[e] : void 0
  return x1({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: { fontSize: `calc(${t ?? e} / 2.5)`, lineHeight: e !== '100%' ? t ?? e : void 0 },
  })
}
var F3 = {
    '2xs': Mr(4),
    'xs': Mr(6),
    'sm': Mr(8),
    'md': Mr(12),
    'lg': Mr(16),
    'xl': Mr(24),
    '2xl': Mr(32),
    'full': Mr('100%'),
  },
  I3 = z3({ baseStyle: B3, sizes: F3, defaultProps: { size: 'md' } }),
  V3 = {
    Accordion: k3,
    Alert: R3,
    Avatar: I3,
    Badge: xi,
    Breadcrumb: N$,
    Button: X$,
    Checkbox: sl,
    CloseButton: o3,
    Code: l3,
    Container: c3,
    Divider: m3,
    Drawer: f$,
    Editable: S$,
    Form: _$,
    FormError: R$,
    FormLabel: M$,
    Heading: B$,
    Input: q,
    Kbd: n5,
    Link: i5,
    List: c5,
    Menu: b5,
    Modal: R5,
    NumberInput: O5,
    PinInput: U5,
    Popover: t$,
    Progress: uE,
    Radio: wE,
    Select: $E,
    Skeleton: RE,
    SkipLink: ME,
    Slider: UE,
    Spinner: KE,
    Stat: t5,
    Switch: nP,
    Table: cP,
    Tabs: _P,
    Tag: OP,
    Textarea: ZP,
    Tooltip: tE,
    Card: t3,
  },
  O3 = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  N3 = {
    global: {
      'body': {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base',
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': { borderColor: 'chakra-border-color' },
    },
  },
  j3 = 'ltr',
  W3 = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  w1 = { semanticTokens: O3, direction: j3, ...X_, components: V3, styles: N3, config: W3 }
function li(e) {
  return typeof e == 'function'
}
function U3(...e) {
  return (t) => e.reduce((r, n) => n(r), t)
}
var H3 = (e) =>
    function (...r) {
      let n = [...r],
        o = r[r.length - 1]
      return (
        T_(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = e),
        U3(...n.map((i) => (a) => li(i) ? i(a) : K3(a, i)))(o)
      )
    },
  G3 = H3(w1)
function K3(...e) {
  return Lt({}, ...e, k1)
}
function k1(e, t, r, n) {
  if ((li(e) || li(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = li(e) ? e(...o) : e,
        a = li(t) ? t(...o) : t
      return Lt({}, i, a, k1)
    }
}
function Y3(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n])
    }),
    r
  )
}
function Q3(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var X3 = (e) => {
    const t = new WeakMap()
    return (n, o, i, a) => {
      if (typeof n > 'u') return e(n, o, i)
      t.has(n) || t.set(n, new Map())
      const s = t.get(n)
      if (s.has(o)) return s.get(o)
      const l = e(n, o, i, a)
      return s.set(o, l), l
    }
  },
  C1 = X3(Q3)
function _1(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n]
      t(o, n, e) && (r[n] = o)
    }),
    r
  )
}
var T1 = (e) => _1(e, (t) => t != null)
function q3(e) {
  return typeof e == 'function'
}
function P1(e, ...t) {
  return q3(e) ? e(...t) : e
}
var Z3 = typeof Element < 'u',
  J3 = typeof Map == 'function',
  e4 = typeof Set == 'function',
  t4 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function As(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!As(e[n], t[n])) return !1
      return !0
    }
    var i
    if (J3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!As(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (e4 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (t4 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (Z3 && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !As(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var r4 = function (t, r) {
  try {
    return As(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
function E1(e, t = {}) {
  var r
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = c2(),
    s = e ? C1(i, `components.${e}`) : void 0,
    l = n || s,
    u = Lt(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      T1(Y3(o, ['children']))
    ),
    c = k.useRef({})
  if (l) {
    const f = C_(l)(u)
    r4(c.current, f) || (c.current = f)
  }
  return c.current
}
function Fo(e, t = {}) {
  return E1(e, t)
}
function n4(e, t = {}) {
  return E1(e, t)
}
var o4 = new Set([
    ...f_,
    'textStyle',
    'layerStyle',
    'apply',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  i4 = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function a4(e) {
  return i4.has(e) || !o4.has(e)
}
function s4(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object')
  const r = { ...e }
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], (r[o] = n[o]))
  return r
}
var l4 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  u4 = Og(function (e) {
    return (
      l4.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  }),
  c4 = u4,
  d4 = function (t) {
    return t !== 'theme'
  },
  u0 = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? c4 : d4
  },
  c0 = function (t, r, n) {
    var o
    if (r) {
      var i = r.shouldForwardProp
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a)
            }
          : i
    }
    return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o
  },
  f4 = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag
    return (
      Hg(r, n, o),
      Ow(function () {
        return Gg(r, n, o)
      }),
      null
    )
  },
  p4 = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a
    r !== void 0 && ((i = r.label), (a = r.target))
    var s = c0(t, r, n),
      l = s || u0(o),
      u = !l('as')
    return function () {
      var c = arguments,
        d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if ((i !== void 0 && d.push('label:' + i + ';'), c[0] == null || c[0].raw === void 0))
        d.push.apply(d, c)
      else {
        d.push(c[0][0])
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h])
      }
      var v = Xg(function (S, C, m) {
        var p = (u && S.as) || o,
          g = '',
          w = [],
          T = S
        if (S.theme == null) {
          T = {}
          for (var A in S) T[A] = S[A]
          T.theme = k.useContext(Bi)
        }
        typeof S.className == 'string'
          ? (g = Mw(C.registered, w, S.className))
          : S.className != null && (g = S.className + ' ')
        var P = sf(d.concat(w), C.registered, T)
        ;(g += C.key + '-' + P.name), a !== void 0 && (g += ' ' + a)
        var $ = u && s === void 0 ? u0(p) : l,
          F = {}
        for (var D in S) (u && D === 'as') || ($(D) && (F[D] = S[D]))
        return (
          (F.className = g),
          (F.ref = m),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(f4, { cache: C, serialized: P, isStringTag: typeof p == 'string' }),
            k.createElement(p, F)
          )
        )
      })
      return (
        (v.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = d),
        (v.__emotion_forwardProp = s),
        Object.defineProperty(v, 'toString', {
          value: function () {
            return '.' + a
          },
        }),
        (v.withComponent = function (S, C) {
          return e(S, Ms({}, r, C, { shouldForwardProp: c0(v, C, !0) })).apply(void 0, d)
        }),
        v
      )
    }
  },
  h4 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  ul = p4.bind()
h4.forEach(function (e) {
  ul[e] = ul(e)
})
var d0,
  m4 = (d0 = ul.default) != null ? d0 : ul,
  g4 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = _1(a, (d, f) => h_(f)),
        l = P1(e, t),
        u = s4({}, o, l, T1(s), i),
        c = s1(u)(t.theme)
      return n ? [c, n] : c
    }
function lc(e, t) {
  const { baseStyle: r, ...n } = t ?? {}
  n.shouldForwardProp || (n.shouldForwardProp = a4)
  const o = g4({ baseStyle: r }),
    i = m4(e, n)(o)
  return st.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = tp()
    return st.createElement(i, { 'ref': u, 'data-theme': d ? c : void 0, ...l })
  })
}
function y4() {
  const e = new Map()
  return new Proxy(lc, {
    apply(t, r, n) {
      return lc(...n)
    },
    get(t, r) {
      return e.has(r) || e.set(r, lc(r)), e.get(r)
    },
  })
}
var xe = y4()
function Ke(e) {
  return k.forwardRef(e)
}
function v4(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: n,
    } = e,
    o = k.createContext(void 0)
  o.displayName = n
  function i() {
    var a
    const s = k.useContext(o)
    if (!s && t) {
      const l = new Error(r)
      throw (
        ((l.name = 'ContextError'), (a = Error.captureStackTrace) == null || a.call(Error, l, i), l)
      )
    }
    return s
  }
  return [o.Provider, i, o]
}
function S4(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = k.useMemo(() => d_(r), [r])
  return qe(Ww, { theme: o, children: [E(b4, { root: t }), n] })
}
function b4({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',')
  return E(Ml, { styles: (r) => ({ [t]: r.__cssVars }) })
}
v4({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function x4() {
  const { colorMode: e } = tp()
  return E(Ml, {
    styles: (t) => {
      const r = C1(t, 'styles.global'),
        n = P1(r, { theme: t, colorMode: e })
      return n ? s1(n)(t) : void 0
    },
  })
}
var cp = k.createContext({
  getDocument() {
    return document
  },
  getWindow() {
    return window
  },
})
cp.displayName = 'EnvironmentContext'
function w4({ defer: e } = {}) {
  const [, t] = k.useReducer((r) => r + 1, 0)
  return (
    Fi(() => {
      e && t()
    }, [e]),
    k.useContext(cp)
  )
}
function $1(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = k.useRef(null),
    i = k.useMemo(
      () =>
        r || {
          getDocument: () => {
            var s, l
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document
          },
          getWindow: () => {
            var s, l
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null
              ? l
              : window
          },
        },
      [r]
    ),
    a = !n || !r
  return qe(cp.Provider, {
    value: i,
    children: [t, a && E('span', { id: '__chakra_env', hidden: !0, ref: o })],
  })
}
$1.displayName = 'EnvironmentProvider'
var k4 = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
      } = e,
      c = E($1, { environment: s, disabled: u, children: t })
    return E(S4, {
      theme: a,
      cssVarsRoot: l,
      children: qe(t1, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? E(Kw, { scope: o }) : E(Gw, {}),
          E(x4, {}),
          n ? E(Jg, { zIndex: n, children: c }) : c,
        ],
      }),
    })
  },
  C4 = (e, t) => e.find((r) => r.id === t)
function f0(e, t) {
  const r = A1(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1
  return { position: r, index: n }
}
function A1(e, t) {
  for (const [r, n] of Object.entries(e)) if (C4(n, t)) return r
}
function _4(e) {
  const t = e.includes('right'),
    r = e.includes('left')
  let n = 'center'
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  )
}
function T4(e) {
  const r = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
    n = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)'
  return {
    position: 'fixed',
    zIndex: 5500,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a,
  }
}
function P4(e, t = []) {
  const r = k.useRef(e)
  return (
    k.useEffect(() => {
      r.current = e
    }),
    k.useCallback((...n) => {
      var o
      return (o = r.current) == null ? void 0 : o.call(r, ...n)
    }, t)
  )
}
function E4(e, t) {
  const r = P4(e)
  k.useEffect(() => {
    if (t == null) return
    let n = null
    return (
      (n = window.setTimeout(() => {
        r()
      }, t)),
      () => {
        n && window.clearTimeout(n)
      }
    )
  }, [t, r])
}
function p0(e, t) {
  const r = k.useRef(!1),
    n = k.useRef(!1)
  k.useEffect(() => {
    if (r.current && n.current) return e()
    n.current = !0
  }, t),
    k.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1
        }
      ),
      []
    )
}
const R1 = k.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  eu = k.createContext({}),
  Sa = k.createContext(null),
  tu = typeof document < 'u',
  cl = tu ? k.useLayoutEffect : k.useEffect,
  z1 = k.createContext({ strict: !1 })
function $4(e, t, r, n) {
  const { visualElement: o } = k.useContext(eu),
    i = k.useContext(z1),
    a = k.useContext(Sa),
    s = k.useContext(R1).reducedMotion,
    l = k.useRef()
  ;(n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }))
  const u = l.current
  return (
    k.useInsertionEffect(() => {
      u && u.update(r, a)
    }),
    cl(() => {
      u && u.render()
    }),
    k.useEffect(() => {
      u && u.updateFeatures()
    }),
    (window.HandoffAppearAnimations ? cl : k.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges()
    }),
    u
  )
}
function ao(e) {
  return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function A4(e, t, r) {
  return k.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : ao(r) && (r.current = n))
    },
    [t]
  )
}
function aa(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function ru(e) {
  return typeof e == 'object' && typeof e.start == 'function'
}
const dp = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  fp = ['initial', ...dp]
function nu(e) {
  return ru(e.animate) || fp.some((t) => aa(e[t]))
}
function M1(e) {
  return !!(nu(e) || e.variants)
}
function R4(e, t) {
  if (nu(e)) {
    const { initial: r, animate: n } = e
    return { initial: r === !1 || aa(r) ? r : void 0, animate: aa(n) ? n : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function z4(e) {
  const { initial: t, animate: r } = R4(e, k.useContext(eu))
  return k.useMemo(() => ({ initial: t, animate: r }), [h0(t), h0(r)])
}
function h0(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const m0 = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  sa = {}
for (const e in m0) sa[e] = { isEnabled: (t) => m0[e].some((r) => !!t[r]) }
function M4(e) {
  for (const t in e) sa[t] = { ...sa[t], ...e[t] }
}
function pp(e) {
  const t = k.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const Ci = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
let L4 = 1
function D4() {
  return pp(() => {
    if (Ci.hasEverUpdated) return L4++
  })
}
const hp = k.createContext({}),
  L1 = k.createContext({}),
  B4 = Symbol.for('motionComponentSymbol')
function F4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && M4(e)
  function i(s, l) {
    let u
    const c = { ...k.useContext(R1), ...s, layoutId: I4(s) },
      { isStatic: d } = c,
      f = z4(s),
      h = d ? void 0 : D4(),
      v = n(s, d)
    if (!d && tu) {
      f.visualElement = $4(o, v, c, t)
      const S = k.useContext(L1),
        C = k.useContext(z1).strict
      f.visualElement && (u = f.visualElement.loadFeatures(c, C, e, h, S))
    }
    return k.createElement(
      eu.Provider,
      { value: f },
      u && f.visualElement ? k.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, h, A4(v, f.visualElement, l), v, d, f.visualElement)
    )
  }
  const a = k.forwardRef(i)
  return (a[B4] = o), a
}
function I4({ layoutId: e }) {
  const t = k.useContext(hp).id
  return t && e !== void 0 ? t + '-' + e : e
}
function V4(e) {
  function t(n, o = {}) {
    return F4(e(n, o))
  }
  if (typeof Proxy > 'u') return t
  const r = new Map()
  return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) })
}
const O4 = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function mp(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(O4.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const dl = {}
function N4(e) {
  Object.assign(dl, e)
}
const ou = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  On = new Set(ou)
function D1(e, { layout: t, layoutId: r }) {
  return (
    On.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!dl[e] || e === 'opacity'))
  )
}
const ft = (e) => !!(e && e.getVelocity),
  j4 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  W4 = ou.length
function U4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = ''
  for (let a = 0; a < W4; a++) {
    const s = ou[a]
    if (e[s] !== void 0) {
      const l = j4[s] || s
      i += `${l}(${e[s]}) `
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, n ? '' : i)) : r && n && (i = 'none'),
    i
  )
}
const B1 = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  F1 = B1('--'),
  $d = B1('var(--'),
  H4 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Fn = (e, t, r) => Math.min(Math.max(r, e), t),
  Nn = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  _i = { ...Nn, transform: (e) => Fn(0, 1, e) },
  ss = { ...Nn, default: 1 },
  Ti = (e) => Math.round(e * 1e5) / 1e5,
  la = /(-)?([\d]*\.?[\d])+/g,
  Ad =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  G4 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function ba(e) {
  return typeof e == 'string'
}
const xa = (e) => ({
    test: (t) => ba(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Lr = xa('deg'),
  sr = xa('%'),
  I = xa('px'),
  K4 = xa('vh'),
  Y4 = xa('vw'),
  g0 = { ...sr, parse: (e) => sr.parse(e) / 100, transform: (e) => sr.transform(e * 100) },
  y0 = { ...Nn, transform: Math.round },
  I1 = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: Lr,
    rotateX: Lr,
    rotateY: Lr,
    rotateZ: Lr,
    scale: ss,
    scaleX: ss,
    scaleY: ss,
    scaleZ: ss,
    skew: Lr,
    skewX: Lr,
    skewY: Lr,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: _i,
    originX: g0,
    originY: g0,
    originZ: I,
    zIndex: y0,
    fillOpacity: _i,
    strokeOpacity: _i,
    numOctaves: y0,
  }
function gp(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e
  let l = !1,
    u = !1,
    c = !0
  for (const d in t) {
    const f = t[d]
    if (F1(d)) {
      i[d] = f
      continue
    }
    const h = I1[d],
      v = H4(f, h)
    if (On.has(d)) {
      if (((l = !0), (a[d] = v), !c)) continue
      f !== (h.default || 0) && (c = !1)
    } else d.startsWith('origin') ? ((u = !0), (s[d] = v)) : (o[d] = v)
  }
  if (
    (t.transform ||
      (l || n ? (o.transform = U4(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: h = 0 } = s
    o.transformOrigin = `${d} ${f} ${h}`
  }
}
const yp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function V1(e, t, r) {
  for (const n in t) !ft(t[n]) && !D1(n, r) && (e[n] = t[n])
}
function Q4({ transformTemplate: e }, t, r) {
  return k.useMemo(() => {
    const n = yp()
    return gp(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function X4(e, t, r) {
  const n = e.style || {},
    o = {}
  return V1(o, n, e), Object.assign(o, Q4(e, t, r)), e.transformValues ? e.transformValues(o) : o
}
function q4(e, t, r) {
  const n = {},
    o = X4(e, t, r)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = o),
    n
  )
}
const Z4 = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
])
function fl(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    Z4.has(e)
  )
}
let O1 = (e) => !fl(e)
function J4(e) {
  e && (O1 = (t) => (t.startsWith('on') ? !fl(t) : e(t)))
}
try {
  J4(require('@emotion/is-prop-valid').default)
} catch {}
function eA(e, t, r) {
  const n = {}
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((O1(o) ||
        (r === !0 && fl(o)) ||
        (!t && !fl(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]))
  return n
}
function v0(e, t, r) {
  return typeof e == 'string' ? e : I.transform(t + r * e)
}
function tA(e, t, r) {
  const n = v0(t, e.x, e.width),
    o = v0(r, e.y, e.height)
  return `${n} ${o}`
}
const rA = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  nA = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function oA(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1
  const i = o ? rA : nA
  e[i.offset] = I.transform(-n)
  const a = I.transform(t),
    s = I.transform(r)
  e[i.array] = `${a} ${s}`
}
function vp(
  e,
  {
    attrX: t,
    attrY: r,
    originX: n,
    originY: o,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: s = 0,
    ...l
  },
  u,
  c,
  d
) {
  if ((gp(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: h, dimensions: v } = e
  f.transform && (v && (h.transform = f.transform), delete f.transform),
    v &&
      (n !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = tA(v, n !== void 0 ? n : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && oA(f, i, a, s, !1)
}
const N1 = () => ({ ...yp(), attrs: {} }),
  Sp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function iA(e, t, r, n) {
  const o = k.useMemo(() => {
    const i = N1()
    return (
      vp(i, t, { enableHardwareAcceleration: !1 }, Sp(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    )
  }, [t])
  if (e.style) {
    const i = {}
    V1(i, e.style, e), (o.style = { ...i, ...o.style })
  }
  return o
}
function aA(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const u = (mp(r) ? iA : q4)(n, a, s, r),
      d = { ...eA(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      h = k.useMemo(() => (ft(f) ? f.get() : f), [f])
    return o && (d['data-projection-id'] = o), k.createElement(r, { ...d, children: h })
  }
}
const bp = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function j1(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n))
  for (const i in r) e.style.setProperty(i, r[i])
}
const W1 = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function U1(e, t, r, n) {
  j1(e, t, void 0, n)
  for (const o in t.attrs) e.setAttribute(W1.has(o) ? o : bp(o), t.attrs[o])
}
function xp(e, t) {
  const { style: r } = e,
    n = {}
  for (const o in r) (ft(r[o]) || (t.style && ft(t.style[o])) || D1(o, e)) && (n[o] = r[o])
  return n
}
function H1(e, t) {
  const r = xp(e, t)
  for (const n in e)
    if (ft(e[n]) || ft(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n
      r[o] = e[n]
    }
  return r
}
function wp(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  )
}
const pl = (e) => Array.isArray(e),
  sA = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  lA = (e) => (pl(e) ? e[e.length - 1] || 0 : e)
function Rs(e) {
  const t = ft(e) ? e.get() : e
  return sA(t) ? t.toValue() : t
}
function uA({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = { latestValues: cA(n, o, i, e), renderState: t() }
  return r && (a.mount = (s) => r(n, s, a)), a
}
const G1 = (e) => (t, r) => {
  const n = k.useContext(eu),
    o = k.useContext(Sa),
    i = () => uA(e, t, n, o)
  return r ? i() : pp(i)
}
function cA(e, t, r, n) {
  const o = {},
    i = n(e, {})
  for (const f in i) o[f] = Rs(i[f])
  let { initial: a, animate: s } = e
  const l = nu(e),
    u = M1(e)
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate))
  let c = r ? r.initial === !1 : !1
  c = c || a === !1
  const d = c ? s : a
  return (
    d &&
      typeof d != 'boolean' &&
      !ru(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const v = wp(e, h)
        if (!v) return
        const { transitionEnd: S, transition: C, ...m } = v
        for (const p in m) {
          let g = m[p]
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0
            g = g[w]
          }
          g !== null && (o[p] = g)
        }
        for (const p in S) o[p] = S[p]
      }),
    o
  )
}
const dA = {
    useVisualState: G1({
      scrapeMotionValuesFromProps: H1,
      createRenderState: N1,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
        }
        vp(r, n, { enableHardwareAcceleration: !1 }, Sp(t.tagName), e.transformTemplate), U1(t, r)
      },
    }),
  },
  fA = { useVisualState: G1({ scrapeMotionValuesFromProps: xp, createRenderState: yp }) }
function pA(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(mp(e) ? dA : fA),
    preloadedFeatures: r,
    useRender: aA(t),
    createVisualElement: n,
    Component: e,
  }
}
function yr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r)
}
const K1 = (e) =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function iu(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const hA = (e) => (t) => K1(t) && e(t, iu(t))
function br(e, t, r, n) {
  return yr(e, t, hA(r), n)
}
const mA = (e, t) => (r) => t(e(r)),
  Jr = (...e) => e.reduce(mA)
function Y1(e) {
  let t = null
  return () => {
    const r = () => {
      t = null
    }
    return t === null ? ((t = e), r) : !1
  }
}
const S0 = Y1('dragHorizontal'),
  b0 = Y1('dragVertical')
function Q1(e) {
  let t = !1
  if (e === 'y') t = b0()
  else if (e === 'x') t = S0()
  else {
    const r = S0(),
      n = b0()
    r && n
      ? (t = () => {
          r(), n()
        })
      : (r && r(), n && n())
  }
  return t
}
function X1() {
  const e = Q1(!0)
  return e ? (e(), !1) : !0
}
class cn {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function gA(e) {
  let t = [],
    r = [],
    n = 0,
    o = !1,
    i = !1
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r
        return u && a.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l
      },
      cancel: (l) => {
        const u = r.indexOf(l)
        u !== -1 && r.splice(u, 1), a.delete(l)
      },
      process: (l) => {
        if (o) {
          i = !0
          return
        }
        if (((o = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u]
            c(l), a.has(c) && (s.schedule(c), e())
          }
        ;(o = !1), i && ((i = !1), s.process(l))
      },
    }
  return s
}
const Ue = { delta: 0, timestamp: 0, isProcessing: !1 },
  yA = 40
let Rd = !0,
  ua = !1
const wa = ['read', 'update', 'preRender', 'render', 'postRender'],
  au = wa.reduce((e, t) => ((e[t] = gA(() => (ua = !0))), e), {}),
  pe = wa.reduce((e, t) => {
    const r = au[t]
    return (e[t] = (n, o = !1, i = !1) => (ua || SA(), r.schedule(n, o, i))), e
  }, {}),
  on = wa.reduce((e, t) => ((e[t] = au[t].cancel), e), {}),
  uc = wa.reduce((e, t) => ((e[t] = () => au[t].process(Ue)), e), {}),
  vA = (e) => au[e].process(Ue),
  q1 = (e) => {
    ;(ua = !1),
      (Ue.delta = Rd ? 1e3 / 60 : Math.max(Math.min(e - Ue.timestamp, yA), 1)),
      (Ue.timestamp = e),
      (Ue.isProcessing = !0),
      wa.forEach(vA),
      (Ue.isProcessing = !1),
      ua && ((Rd = !1), requestAnimationFrame(q1))
  },
  SA = () => {
    ;(ua = !0), (Rd = !0), Ue.isProcessing || requestAnimationFrame(q1)
  }
function x0(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || X1()) return
      const s = e.getProps()
      e.animationState && s.whileHover && e.animationState.setActive('whileHover', t),
        s[n] && pe.update(() => s[n](i, a))
    }
  return br(e.current, r, o, { passive: !e.getProps()[n] })
}
class bA extends cn {
  mount() {
    this.unmount = Jr(x0(this.node, !0), x0(this.node, !1))
  }
  unmount() {}
}
class xA extends cn {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = Jr(
      yr(this.node.current, 'focus', () => this.onFocus()),
      yr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const Z1 = (e, t) => (t ? (e === t ? !0 : Z1(e, t.parentElement)) : !1),
  ze = (e) => e
function cc(e, t) {
  if (!t) return
  const r = new PointerEvent('pointer' + e)
  t(r, iu(r))
}
class wA extends cn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ze),
      (this.removeEndListeners = ze),
      (this.removeAccessibleListeners = ze),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const n = this.node.getProps(),
          i = br(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c } = this.node.getProps()
              pe.update(() => {
                Z1(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
              })
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = br(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          })
        ;(this.removeEndListeners = Jr(i, a)), this.startPress(t, r)
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                cc('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && pe.update(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = yr(this.node.current, 'keyup', a)),
              cc('down', (s, l) => {
                this.startPress(s, l)
              })
          },
          r = yr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && cc('cancel', (i, a) => this.cancelPress(i, a))
          },
          o = yr(this.node.current, 'blur', n)
        this.removeAccessibleListeners = Jr(r, o)
      })
  }
  startPress(t, r) {
    this.isPressing = !0
    const { onTapStart: n, whileTap: o } = this.node.getProps()
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      n && pe.update(() => n(t, r))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !X1()
    )
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: n } = this.node.getProps()
    n && pe.update(() => n(t, r))
  }
  mount() {
    const t = this.node.getProps(),
      r = br(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = yr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = Jr(r, n)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const zd = new WeakMap(),
  dc = new WeakMap(),
  kA = (e) => {
    const t = zd.get(e.target)
    t && t(e)
  },
  CA = (e) => {
    e.forEach(kA)
  }
function _A({ root: e, ...t }) {
  const r = e || document
  dc.has(r) || dc.set(r, {})
  const n = dc.get(r),
    o = JSON.stringify(t)
  return n[o] || (n[o] = new IntersectionObserver(CA, { root: e, ...t })), n[o]
}
function TA(e, t, r) {
  const n = _A(t)
  return (
    zd.set(e, r),
    n.observe(e),
    () => {
      zd.delete(e), n.unobserve(e)
    }
  )
}
const PA = { some: 0, all: 1 }
class EA extends cn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = 'some', once: i } = t,
      a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == 'number' ? o : PA[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l
        if (this.isInView === u || ((this.isInView = u), i && !u && this.hasEnteredView)) return
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d
        f && f(l)
      }
    return TA(this.node.current, a, s)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: r } = this.node
    ;['amount', 'margin', 'root'].some($A(t, r)) && this.startObserver()
  }
  unmount() {}
}
function $A({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r]
}
const AA = {
  inView: { Feature: EA },
  tap: { Feature: wA },
  focus: { Feature: xA },
  hover: { Feature: bA },
}
function J1(e, t) {
  if (!Array.isArray(t)) return !1
  const r = t.length
  if (r !== e.length) return !1
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
  return !0
}
function RA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.get())), t
}
function zA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t
}
function su(e, t, r) {
  const n = e.getProps()
  return wp(n, t, r !== void 0 ? r : n.custom, RA(e), zA(e))
}
const MA = 'framerAppearId',
  LA = 'data-' + bp(MA)
let DA = ze,
  kp = ze
const en = (e) => e * 1e3,
  xr = (e) => e / 1e3,
  BA = { current: !1 },
  eS = (e) => Array.isArray(e) && typeof e[0] == 'number'
function tS(e) {
  return !!(!e || (typeof e == 'string' && rS[e]) || eS(e) || (Array.isArray(e) && e.every(tS)))
}
const ui = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  rS = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: ui([0, 0.65, 0.55, 1]),
    circOut: ui([0.55, 0, 1, 0.45]),
    backIn: ui([0.31, 0.01, 0.66, -0.59]),
    backOut: ui([0.33, 1.53, 0.69, 0.99]),
  }
function nS(e) {
  if (e) return eS(e) ? ui(e) : Array.isArray(e) ? e.map(nS) : rS[e]
}
function FA(
  e,
  t,
  r,
  { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}
) {
  const u = { [t]: r }
  l && (u.offset = l)
  const c = nS(s)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: o,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: i + 1,
      direction: a === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
const w0 = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  fc = {},
  oS = {}
for (const e in w0) oS[e] = () => (fc[e] === void 0 && (fc[e] = w0[e]()), fc[e])
function IA(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[n]
}
const iS = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  VA = 1e-7,
  OA = 12
function NA(e, t, r, n, o) {
  let i,
    a,
    s = 0
  do (a = t + (r - t) / 2), (i = iS(a, n, o) - e), i > 0 ? (r = a) : (t = a)
  while (Math.abs(i) > VA && ++s < OA)
  return a
}
function ka(e, t, r, n) {
  if (e === t && r === n) return ze
  const o = (i) => NA(i, 0, 1, e, r)
  return (i) => (i === 0 || i === 1 ? i : iS(o(i), t, n))
}
const jA = ka(0.42, 0, 1, 1),
  WA = ka(0, 0, 0.58, 1),
  aS = ka(0.42, 0, 0.58, 1),
  UA = (e) => Array.isArray(e) && typeof e[0] != 'number',
  sS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  lS = (e) => (t) => 1 - e(1 - t),
  uS = (e) => 1 - Math.sin(Math.acos(e)),
  Cp = lS(uS),
  HA = sS(Cp),
  cS = ka(0.33, 1.53, 0.69, 0.99),
  _p = lS(cS),
  GA = sS(_p),
  KA = (e) => ((e *= 2) < 1 ? 0.5 * _p(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  YA = {
    linear: ze,
    easeIn: jA,
    easeInOut: aS,
    easeOut: WA,
    circIn: uS,
    circInOut: HA,
    circOut: Cp,
    backIn: _p,
    backInOut: GA,
    backOut: cS,
    anticipate: KA,
  },
  k0 = (e) => {
    if (Array.isArray(e)) {
      kp(e.length === 4)
      const [t, r, n, o] = e
      return ka(t, r, n, o)
    } else if (typeof e == 'string') return YA[e]
    return e
  },
  Tp = (e, t) => (r) =>
    !!(
      (ba(r) && G4.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  dS = (e, t, r) => (n) => {
    if (!ba(n)) return n
    const [o, i, a, s] = n.match(la)
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    }
  },
  QA = (e) => Fn(0, 255, e),
  pc = { ...Nn, transform: (e) => Math.round(QA(e)) },
  Tn = {
    test: Tp('rgb', 'red'),
    parse: dS('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      pc.transform(e) +
      ', ' +
      pc.transform(t) +
      ', ' +
      pc.transform(r) +
      ', ' +
      Ti(_i.transform(n)) +
      ')',
  }
function XA(e) {
  let t = '',
    r = '',
    n = '',
    o = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  )
}
const Md = { test: Tp('#'), parse: XA, transform: Tn.transform },
  so = {
    test: Tp('hsl', 'hue'),
    parse: dS('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      sr.transform(Ti(t)) +
      ', ' +
      sr.transform(Ti(r)) +
      ', ' +
      Ti(_i.transform(n)) +
      ')',
  },
  Ye = {
    test: (e) => Tn.test(e) || Md.test(e) || so.test(e),
    parse: (e) => (Tn.test(e) ? Tn.parse(e) : so.test(e) ? so.parse(e) : Md.parse(e)),
    transform: (e) => (ba(e) ? e : e.hasOwnProperty('red') ? Tn.transform(e) : so.transform(e)),
  },
  ye = (e, t, r) => -r * e + r * t + e
function hc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  )
}
function qA({ hue: e, saturation: t, lightness: r, alpha: n }) {
  ;(e /= 360), (t /= 100), (r /= 100)
  let o = 0,
    i = 0,
    a = 0
  if (!t) o = i = a = r
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s
    ;(o = hc(l, s, e + 1 / 3)), (i = hc(l, s, e)), (a = hc(l, s, e - 1 / 3))
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  }
}
const mc = (e, t, r) => {
    const n = e * e
    return Math.sqrt(Math.max(0, r * (t * t - n) + n))
  },
  ZA = [Md, Tn, so],
  JA = (e) => ZA.find((t) => t.test(e))
function C0(e) {
  const t = JA(e)
  let r = t.parse(e)
  return t === so && (r = qA(r)), r
}
const fS = (e, t) => {
    const r = C0(e),
      n = C0(t),
      o = { ...r }
    return (i) => (
      (o.red = mc(r.red, n.red, i)),
      (o.green = mc(r.green, n.green, i)),
      (o.blue = mc(r.blue, n.blue, i)),
      (o.alpha = ye(r.alpha, n.alpha, i)),
      Tn.transform(o)
    )
  },
  pS = '${c}',
  hS = '${n}'
function eR(e) {
  var t, r
  return (
    isNaN(e) &&
    ba(e) &&
    (((t = e.match(la)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Ad)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  )
}
function hl(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let r = 0,
    n = 0
  const o = e.match(Ad)
  o && ((r = o.length), (e = e.replace(Ad, pS)), t.push(...o.map(Ye.parse)))
  const i = e.match(la)
  return (
    i && ((n = i.length), (e = e.replace(la, hS)), t.push(...i.map(Nn.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  )
}
function mS(e) {
  return hl(e).values
}
function gS(e) {
  const { values: t, numColors: r, tokenised: n } = hl(e),
    o = t.length
  return (i) => {
    let a = n
    for (let s = 0; s < o; s++)
      a = a.replace(s < r ? pS : hS, s < r ? Ye.transform(i[s]) : Ti(i[s]))
    return a
  }
}
const tR = (e) => (typeof e == 'number' ? 0 : e)
function rR(e) {
  const t = mS(e)
  return gS(e)(t.map(tR))
}
const an = { test: eR, parse: mS, createTransformer: gS, getAnimatableNone: rR }
function yS(e, t) {
  return typeof e == 'number' ? (r) => ye(e, t, r) : Ye.test(e) ? fS(e, t) : SS(e, t)
}
const vS = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => yS(i, t[a]))
    return (i) => {
      for (let a = 0; a < n; a++) r[a] = o[a](i)
      return r
    }
  },
  nR = (e, t) => {
    const r = { ...e, ...t },
      n = {}
    for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = yS(e[o], t[o]))
    return (o) => {
      for (const i in n) r[i] = n[i](o)
      return r
    }
  },
  SS = (e, t) => {
    const r = an.createTransformer(t),
      n = hl(e),
      o = hl(t)
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? Jr(vS(n.values, o.values), r)
      : (a) => `${a > 0 ? t : e}`
  },
  ca = (e, t, r) => {
    const n = t - e
    return n === 0 ? 1 : (r - e) / n
  },
  _0 = (e, t) => (r) => ye(e, t, r)
function oR(e) {
  return typeof e == 'number'
    ? _0
    : typeof e == 'string'
    ? Ye.test(e)
      ? fS
      : SS
    : Array.isArray(e)
    ? vS
    : typeof e == 'object'
    ? nR
    : _0
}
function iR(e, t, r) {
  const n = [],
    o = r || oR(e[0]),
    i = e.length - 1
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1])
    if (t) {
      const l = Array.isArray(t) ? t[a] || ze : t
      s = Jr(l, s)
    }
    n.push(s)
  }
  return n
}
function bS(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length
  if ((kp(i === t.length), i === 1)) return () => t[0]
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const a = iR(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = ca(e[c], e[c + 1], u)
      return a[c](d)
    }
  return r ? (u) => l(Fn(e[0], e[i - 1], u)) : l
}
function aR(e, t) {
  const r = e[e.length - 1]
  for (let n = 1; n <= t; n++) {
    const o = ca(0, t, n)
    e.push(ye(r, 1, o))
  }
}
function sR(e) {
  const t = [0]
  return aR(t, e.length - 1), t
}
function lR(e, t) {
  return e.map((r) => r * t)
}
function uR(e, t) {
  return e.map(() => t || aS).splice(0, e.length - 1)
}
function ml({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
  const o = UA(n) ? n.map(k0) : k0(n),
    i = { done: !1, value: t[0] },
    a = lR(r && r.length === t.length ? r : sR(t), e),
    s = bS(a, t, { ease: Array.isArray(o) ? o : uR(t, o) })
  return { calculatedDuration: e, next: (l) => ((i.value = s(l)), (i.done = l >= e), i) }
}
function xS(e, t) {
  return t ? e * (1e3 / t) : 0
}
const cR = 5
function wS(e, t, r) {
  const n = Math.max(t - cR, 0)
  return xS(r - e(n), t - n)
}
const gc = 0.001,
  dR = 0.01,
  T0 = 10,
  fR = 0.05,
  pR = 1
function hR({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i
  DA(e <= en(T0))
  let a = 1 - t
  ;(a = Fn(fR, pR, a)),
    (e = Fn(dR, T0, xr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            h = Ld(u, a),
            v = Math.exp(-d)
          return gc - (f / h) * v
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            S = Ld(Math.pow(u, 2), a)
          return ((-o(u) + gc > 0 ? -1 : 1) * ((f - h) * v)) / S
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1
          return -gc + c * d
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e)
          return c * d
        }))
  const s = 5 / e,
    l = gR(o, i, s)
  if (((e = en(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * n
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e }
  }
}
const mR = 12
function gR(e, t, r) {
  let n = r
  for (let o = 1; o < mR; o++) n = n - e(n) / t(n)
  return n
}
function Ld(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const yR = ['duration', 'bounce'],
  vR = ['stiffness', 'damping', 'mass']
function P0(e, t) {
  return t.some((r) => e[r] !== void 0)
}
function SR(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!P0(e, vR) && P0(e, yR)) {
    const r = hR(e)
    ;(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function kS({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = SR(n),
    h = c ? -xr(c) : 0,
    v = l / (2 * Math.sqrt(s * u)),
    S = i - o,
    C = xr(Math.sqrt(s / u)),
    m = Math.abs(S) < 5
  r || (r = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5)
  let p
  if (v < 1) {
    const g = Ld(C, v)
    p = (w) => {
      const T = Math.exp(-v * C * w)
      return i - T * (((h + v * C * S) / g) * Math.sin(g * w) + S * Math.cos(g * w))
    }
  } else if (v === 1) p = (g) => i - Math.exp(-C * g) * (S + (h + C * S) * g)
  else {
    const g = C * Math.sqrt(v * v - 1)
    p = (w) => {
      const T = Math.exp(-v * C * w),
        A = Math.min(g * w, 300)
      return i - (T * ((h + v * C * S) * Math.sinh(A) + g * S * Math.cosh(A))) / g
    }
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (g) => {
      const w = p(g)
      if (f) a.done = g >= d
      else {
        let T = h
        g !== 0 && (v < 1 ? (T = wS(p, g, w)) : (T = 0))
        const A = Math.abs(T) <= r,
          P = Math.abs(i - w) <= t
        a.done = A && P
      }
      return (a.value = a.done ? i : w), a
    },
  }
}
function E0({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = ($) => (s !== void 0 && $ < s) || (l !== void 0 && $ > l),
    v = ($) => (s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l)
  let S = r * t
  const C = d + S,
    m = a === void 0 ? C : a(C)
  m !== C && (S = m - d)
  const p = ($) => -S * Math.exp(-$ / n),
    g = ($) => m + p($),
    w = ($) => {
      const F = p($),
        D = g($)
      ;(f.done = Math.abs(F) <= u), (f.value = f.done ? m : D)
    }
  let T, A
  const P = ($) => {
    h(f.value) &&
      ((T = $),
      (A = kS({
        keyframes: [f.value, v(f.value)],
        velocity: wS(g, $, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })))
  }
  return (
    P(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let F = !1
        return (
          !A && T === void 0 && ((F = !0), w($), P($)),
          T !== void 0 && $ > T ? A.next($ - T) : (!F && w($), f)
        )
      },
    }
  )
}
const bR = (e) => {
    const t = ({ timestamp: r }) => e(r)
    return {
      start: () => pe.update(t, !0),
      stop: () => on.update(t),
      now: () => (Ue.isProcessing ? Ue.timestamp : performance.now()),
    }
  },
  xR = { decay: E0, inertia: E0, tween: ml, keyframes: ml, spring: kS },
  $0 = 2e4
function A0(e) {
  let t = 0
  const r = 50
  let n = e.next(t)
  for (; !n.done && t < $0; ) (t += r), (n = e.next(t))
  return t >= $0 ? 1 / 0 : t
}
function gl({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = bR,
  keyframes: n,
  type: o = 'keyframes',
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = 'loop',
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    v = !1,
    S,
    C
  const m = () => {
    S && S(),
      (C = new Promise((O) => {
        S = O
      }))
  }
  m()
  let p
  const g = xR[o] || ml
  let w
  g !== ml && typeof n[0] != 'number' && ((w = bS([0, 100], n, { clamp: !1 })), (n = [0, 100]))
  const T = g({ ...f, keyframes: n })
  let A
  s === 'mirror' && (A = g({ ...f, keyframes: [...n].reverse(), velocity: -(f.velocity || 0) }))
  let P = 'idle',
    $ = null,
    F = null,
    D = null
  T.calculatedDuration === null && i && (T.calculatedDuration = A0(T))
  const { calculatedDuration: oe } = T
  let Ae = 1 / 0,
    rt = 1 / 0
  oe !== null && ((Ae = oe + a), (rt = Ae * (i + 1) - a))
  let he = 0
  const me = (O) => {
      if (F === null) return
      h > 0 && (F = Math.min(F, O)), $ !== null ? (he = $) : (he = (O - F) * h)
      const ie = he - t,
        G = ie < 0
      ;(he = Math.max(ie, 0)), P === 'finished' && $ === null && (he = rt)
      let pt = he,
        Er = T
      if (i) {
        const jn = he / Ae
        let $r = Math.floor(jn),
          Yt = jn % 1
        !Yt && jn >= 1 && (Yt = 1), Yt === 1 && $r--, ($r = Math.min($r, i + 1))
        const Io = !!($r % 2)
        Io && (s === 'reverse' ? ((Yt = 1 - Yt), a && (Yt -= a / Ae)) : s === 'mirror' && (Er = A))
        let _a = Fn(0, 1, Yt)
        he > rt && (_a = s === 'reverse' && Io ? 1 : 0), (pt = _a * Ae)
      }
      const Te = G ? { done: !1, value: n[0] } : Er.next(pt)
      w && (Te.value = w(Te.value))
      let { done: Kt } = Te
      !G && oe !== null && (Kt = he >= rt)
      const dn = $ === null && (P === 'finished' || (P === 'running' && Kt) || (h < 0 && he <= 0))
      return d && d(Te.value), dn && z(), Te
    },
    nt = () => {
      p && p.stop(), (p = void 0)
    },
    Tt = () => {
      ;(P = 'idle'), nt(), m(), (F = D = null)
    },
    z = () => {
      ;(P = 'finished'), c && c(), nt(), m()
    },
    V = () => {
      if (v) return
      p || (p = r(me))
      const O = p.now()
      l && l(),
        (P = 'running'),
        $ !== null ? (F = O - $) : F || (F = O),
        (D = F),
        ($ = null),
        p.start()
    }
  e && V()
  const N = {
    then(O, ie) {
      return C.then(O, ie)
    },
    get time() {
      return xr(he)
    },
    set time(O) {
      ;(O = en(O)), (he = O), $ !== null || !p || h === 0 ? ($ = O) : (F = p.now() - O / h)
    },
    get duration() {
      const O = T.calculatedDuration === null ? A0(T) : T.calculatedDuration
      return xr(O)
    },
    get speed() {
      return h
    },
    set speed(O) {
      O === h || !p || ((h = O), (N.time = xr(he)))
    },
    get state() {
      return P
    },
    play: V,
    pause: () => {
      ;(P = 'paused'), ($ = he)
    },
    stop: () => {
      ;(v = !0), P !== 'idle' && ((P = 'idle'), u && u(), Tt())
    },
    cancel: () => {
      D !== null && me(D), Tt()
    },
    complete: () => {
      P = 'finished'
    },
    sample: (O) => ((F = 0), me(O)),
  }
  return N
}
const wR = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  ls = 10,
  kR = 2e4,
  CR = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !tS(t.ease)
function _R(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      oS.waapi() &&
      wR.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0 &&
      o.type !== 'inertia'
    )
  )
    return !1
  let a = !1,
    s,
    l
  const u = () => {
    l = new Promise((S) => {
      s = S
    })
  }
  u()
  let { keyframes: c, duration: d = 300, ease: f } = o
  if (CR(t, o)) {
    const S = gl({ ...o, repeat: 0, delay: 0 })
    let C = { done: !1, value: c[0] }
    const m = []
    let p = 0
    for (; !C.done && p < kR; ) (C = S.sample(p)), m.push(C.value), (p += ls)
    ;(c = m), (d = p - ls), (f = 'linear')
  }
  const h = FA(e.owner.current, t, c, { ...o, duration: d, ease: f }),
    v = () => {
      pe.update(() => h.cancel()), s(), u()
    }
  return (
    (h.onfinish = () => {
      e.set(IA(c, o)), n && n(), v()
    }),
    {
      then(S, C) {
        return l.then(S, C)
      },
      get time() {
        return xr(h.currentTime || 0)
      },
      set time(S) {
        h.currentTime = en(S)
      },
      get speed() {
        return h.playbackRate
      },
      set speed(S) {
        h.playbackRate = S
      },
      get duration() {
        return xr(d)
      },
      play: () => {
        a || h.play()
      },
      pause: () => h.pause(),
      stop: () => {
        if (((a = !0), h.playState === 'idle')) return
        const { currentTime: S } = h
        if (S) {
          const C = gl({ ...o, autoplay: !1 })
          e.setWithVelocity(C.sample(S - ls).value, C.sample(S).value, ls)
        }
        v()
      },
      complete: () => h.finish(),
      cancel: v,
    }
  )
}
function TR({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ze,
      pause: ze,
      stop: ze,
      then: (i) => (i(), Promise.resolve()),
      cancel: ze,
      complete: ze,
    }
  )
  return t ? gl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o()
}
const PR = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  ER = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $R = { type: 'keyframes', duration: 0.8 },
  AR = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  RR = (e, { keyframes: t }) =>
    t.length > 2 ? $R : On.has(e) ? (e.startsWith('scale') ? ER(t[1]) : PR) : AR,
  Dd = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && an.test(t) && !t.startsWith('url('))
        ),
  zR = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function MR(e) {
  const [t, r] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [n] = r.match(la) || []
  if (!n) return e
  const o = r.replace(n, '')
  let i = zR.has(t) ? 1 : 0
  return n !== r && (i *= 100), t + '(' + i + o + ')'
}
const LR = /([a-z-]*)\(.*?\)/g,
  Bd = {
    ...an,
    getAnimatableNone: (e) => {
      const t = e.match(LR)
      return t ? t.map(MR).join(' ') : e
    },
  },
  DR = {
    ...I1,
    color: Ye,
    backgroundColor: Ye,
    outlineColor: Ye,
    fill: Ye,
    stroke: Ye,
    borderColor: Ye,
    borderTopColor: Ye,
    borderRightColor: Ye,
    borderBottomColor: Ye,
    borderLeftColor: Ye,
    filter: Bd,
    WebkitFilter: Bd,
  },
  Pp = (e) => DR[e]
function Ep(e, t) {
  let r = Pp(e)
  return r !== Bd && (r = an), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
function BR({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
function R0(e) {
  return e === 0 || (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
}
function z0(e) {
  return typeof e == 'number' ? 0 : Ep('', e)
}
function CS(e, t) {
  return e[t] || e.default || e
}
function FR(e, t, r, n) {
  const o = Dd(t, r)
  let i = n.from !== void 0 ? n.from : e.get()
  if (
    (i === 'none' && o && typeof r == 'string'
      ? (i = Ep(t, r))
      : R0(i) && typeof r == 'string'
      ? (i = z0(r))
      : !Array.isArray(r) && R0(r) && typeof i == 'string' && (r = z0(i)),
    Array.isArray(r))
  ) {
    for (let a = 0; a < r.length; a++) r[a] === null && (r[a] = a === 0 ? i : r[a - 1])
    return r
  } else return [i, r]
}
const $p =
  (e, t, r, n = {}) =>
  (o) => {
    const i = CS(n, e) || {},
      a = i.delay || n.delay || 0
    let { elapsed: s = 0 } = n
    s = s - en(a)
    const l = FR(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = Dd(e, u),
      f = Dd(e, c)
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: 'easeOut',
      ...i,
      delay: -s,
      onUpdate: (v) => {
        t.set(v), i.onUpdate && i.onUpdate(v)
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete()
      },
    }
    if (
      (BR(i) || (h = { ...h, ...RR(e, h) }),
      h.duration && (h.duration = en(h.duration)),
      h.repeatDelay && (h.repeatDelay = en(h.repeatDelay)),
      !d || !f || BA.current || i.type === !1)
    )
      return TR(h)
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const v = _R(t, e, h)
      if (v) return v
    }
    return gl(h)
  }
function yl(e) {
  return !!(ft(e) && e.add)
}
const IR = (e) => /^\-?\d*\.?\d+$/.test(e),
  VR = (e) => /^0[^.\s]+$/.test(e)
function Ap(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function Rp(e, t) {
  const r = e.indexOf(t)
  r > -1 && e.splice(r, 1)
}
class zp {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return Ap(this.subscriptions, t), () => Rp(this.subscriptions, t)
  }
  notify(t, r, n) {
    const o = this.subscriptions.length
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n)
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i]
          a && a(t, r, n)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const OR = (e) => !isNaN(parseFloat(e))
class NR {
  constructor(t, r = {}) {
    ;(this.version = '10.10.0'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: i, timestamp: a } = Ue
        this.lastUpdated !== a &&
          ((this.timeDelta = i), (this.lastUpdated = a), pe.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => pe.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = OR(this.current)),
      (this.owner = r.owner)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new zp())
    const n = this.events[t].add(r)
    return t === 'change'
      ? () => {
          n(),
            pe.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : n
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, r) {
    ;(this.passiveEffect = t), (this.stopPassiveEffect = r)
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, r, n) {
    this.set(r), (this.prev = t), (this.timeDelta = n)
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? xS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        ;(this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Ao(e, t) {
  return new NR(e, t)
}
const _S = (e) => (t) => t.test(e),
  jR = { test: (e) => e === 'auto', parse: (e) => e },
  TS = [Nn, I, sr, Lr, Y4, K4, jR],
  Jo = (e) => TS.find(_S(e)),
  WR = [...TS, Ye, an],
  UR = (e) => WR.find(_S(e))
function HR(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ao(r))
}
function GR(e, t) {
  const r = su(e, t)
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {}
  i = { ...i, ...n }
  for (const a in i) {
    const s = lA(i[a])
    HR(e, a, s)
  }
}
function KR(e, t, r) {
  var n, o
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l]
      let c = null
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (IR(c) || VR(c))
            ? (c = parseFloat(c))
            : !UR(c) && an.test(u) && (c = Ep(l, u)),
          e.addValue(l, Ao(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c))
    }
}
function YR(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function QR(e, t, r) {
  const n = {}
  for (const o in e) {
    const i = YR(o, t)
    if (i !== void 0) n[o] = i
    else {
      const a = r.getValue(o)
      a && (n[o] = a.get())
    }
  }
  return n
}
function XR({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0
  return (t[r] = !1), n
}
function PS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t)
  const l = e.getValue('willChange')
  n && (i = n)
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o]
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d]
    if (!f || h === void 0 || (c && XR(c, d))) continue
    const v = { delay: r, elapsed: 0, ...i }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const C = e.getProps()[LA]
      C && (v.elapsed = window.HandoffAppearAnimations(C, d, f, pe))
    }
    f.start($p(d, f, h, e.shouldReduceMotion && On.has(d) ? { type: !1 } : v))
    const S = f.animation
    yl(l) && (l.add(d), S.then(() => l.remove(d))), u.push(S)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && GR(e, a)
      }),
    u
  )
}
function Fd(e, t, r = {}) {
  const n = su(e, t, r.custom)
  let { transition: o = e.getDefaultTransition() || {} } = n || {}
  r.transitionOverride && (o = r.transitionOverride)
  const i = n ? () => Promise.all(PS(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o
            return qR(e, t, u + l, c, d, r)
          }
        : () => Promise.resolve(),
    { when: s } = o
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i]
    return l().then(() => u())
  } else return Promise.all([i(), a(r.delay)])
}
function qR(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n
  return (
    Array.from(e.variantChildren)
      .sort(ZR)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(Fd(u, t, { ...i, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(a)
  )
}
function ZR(e, t) {
  return e.sortNodePosition(t)
}
function JR(e, t, r = {}) {
  e.notify('AnimationStart', t)
  let n
  if (Array.isArray(t)) {
    const o = t.map((i) => Fd(e, i, r))
    n = Promise.all(o)
  } else if (typeof t == 'string') n = Fd(e, t, r)
  else {
    const o = typeof t == 'function' ? su(e, t, r.custom) : t
    n = Promise.all(PS(e, o, r))
  }
  return n.then(() => e.notify('AnimationComplete', t))
}
const ez = [...dp].reverse(),
  tz = dp.length
function rz(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => JR(e, r, n)))
}
function nz(e) {
  let t = rz(e)
  const r = iz()
  let n = !0
  const o = (l, u) => {
    const c = su(e, u)
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c
      l = { ...l, ...h, ...f }
    }
    return l
  }
  function i(l) {
    t = l(e)
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set()
    let v = {},
      S = 1 / 0
    for (let m = 0; m < tz; m++) {
      const p = ez[m],
        g = r[p],
        w = c[p] !== void 0 ? c[p] : d[p],
        T = aa(w),
        A = p === u ? g.isActive : null
      A === !1 && (S = m)
      let P = w === d[p] && w !== c[p] && T
      if (
        (P && n && e.manuallyAnimateOnMount && (P = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && A === null) || (!w && !g.prevProp) || ru(w) || typeof w == 'boolean')
      )
        continue
      const $ = oz(g.prevProp, w)
      let F = $ || (p === u && g.isActive && !P && T) || (m > S && T)
      const D = Array.isArray(w) ? w : [w]
      let oe = D.reduce(o, {})
      A === !1 && (oe = {})
      const { prevResolvedValues: Ae = {} } = g,
        rt = { ...Ae, ...oe },
        he = (me) => {
          ;(F = !0), h.delete(me), (g.needsAnimating[me] = !0)
        }
      for (const me in rt) {
        const nt = oe[me],
          Tt = Ae[me]
        v.hasOwnProperty(me) ||
          (nt !== Tt
            ? pl(nt) && pl(Tt)
              ? !J1(nt, Tt) || $
                ? he(me)
                : (g.protectedKeys[me] = !0)
              : nt !== void 0
              ? he(me)
              : h.add(me)
            : nt !== void 0 && h.has(me)
            ? he(me)
            : (g.protectedKeys[me] = !0))
      }
      ;(g.prevProp = w),
        (g.prevResolvedValues = oe),
        g.isActive && (v = { ...v, ...oe }),
        n && e.blockInitialAnimation && (F = !1),
        F && !P && f.push(...D.map((me) => ({ animation: me, options: { type: p, ...l } })))
    }
    if (h.size) {
      const m = {}
      h.forEach((p) => {
        const g = e.getBaseTarget(p)
        g !== void 0 && (m[p] = g)
      }),
        f.push({ animation: m })
    }
    let C = !!f.length
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (C = !1),
      (n = !1),
      C ? t(f) : Promise.resolve()
    )
  }
  function s(l, u, c) {
    var d
    if (r[l].isActive === u) return Promise.resolve()
    ;(d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var v
        return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u)
      }),
      (r[l].isActive = u)
    const f = a(c, l)
    for (const h in r) r[h].protectedKeys = {}
    return f
  }
  return { animateChanges: a, setActive: s, setAnimateFunction: i, getState: () => r }
}
function oz(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !J1(t, e) : !1
}
function mn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function iz() {
  return {
    animate: mn(!0),
    whileInView: mn(),
    whileHover: mn(),
    whileTap: mn(),
    whileDrag: mn(),
    whileFocus: mn(),
    exit: mn(),
  }
}
class az extends cn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = nz(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), ru(t) && (this.unmount = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {}
    t !== r && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let sz = 0
class lz extends cn {
  constructor() {
    super(...arguments), (this.id = sz++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === o) return
    const i = this.node.animationState.setActive('exit', !t, {
      custom: n ?? this.node.getProps().custom,
    })
    r && !t && i.then(() => r(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount() {}
}
const uz = { animation: { Feature: az }, exit: { Feature: lz } },
  M0 = (e, t) => Math.abs(e - t)
function cz(e, t) {
  const r = M0(e.x, t.x),
    n = M0(e.y, t.y)
  return Math.sqrt(r ** 2 + n ** 2)
}
class ES {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = vc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = cz(u.offset, { x: 0, y: 0 }) >= 3
        if (!c && !d) return
        const { point: f } = u,
          { timestamp: h } = Ue
        this.history.push({ ...f, timestamp: h })
        const { onStart: v, onMove: S } = this.handlers
        c || (v && v(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
          S && S(this.lastMoveEvent, u)
      }),
      (this.handlePointerMove = (u, c) => {
        ;(this.lastMoveEvent = u),
          (this.lastMoveEventInfo = yc(c, this.transformPagePoint)),
          pe.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = vc(
            u.type === 'pointercancel' ? this.lastMoveEventInfo : yc(c, this.transformPagePoint),
            this.history
          )
        this.startEvent && d && d(u, h), f && f(u, h)
      }),
      !K1(t))
    )
      return
    ;(this.handlers = r), (this.transformPagePoint = n)
    const o = iu(t),
      i = yc(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = Ue
    this.history = [{ ...a, timestamp: s }]
    const { onSessionStart: l } = r
    l && l(t, vc(i, this.history)),
      (this.removeListeners = Jr(
        br(window, 'pointermove', this.handlePointerMove),
        br(window, 'pointerup', this.handlePointerUp),
        br(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), on.update(this.updatePoint)
  }
}
function yc(e, t) {
  return t ? { point: t(e.point) } : e
}
function L0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function vc({ point: e }, t) {
  return { point: e, delta: L0(e, $S(t)), offset: L0(e, dz(t)), velocity: fz(t, 0.1) }
}
function dz(e) {
  return e[0]
}
function $S(e) {
  return e[e.length - 1]
}
function fz(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let r = e.length - 1,
    n = null
  const o = $S(e)
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > en(t))); ) r--
  if (!n) return { x: 0, y: 0 }
  const i = xr(o.timestamp - n.timestamp)
  if (i === 0) return { x: 0, y: 0 }
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function xt(e) {
  return e.max - e.min
}
function Id(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r
}
function D0(e, t, r, n = 0.5) {
  ;(e.origin = n),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = xt(r) / xt(t)),
    (Id(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ye(r.min, r.max, e.origin) - e.originPoint),
    (Id(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Pi(e, t, r, n) {
  D0(e.x, t.x, r.x, n ? n.originX : void 0), D0(e.y, t.y, r.y, n ? n.originY : void 0)
}
function B0(e, t, r) {
  ;(e.min = r.min + t.min), (e.max = e.min + xt(t))
}
function pz(e, t, r) {
  B0(e.x, t.x, r.x), B0(e.y, t.y, r.y)
}
function F0(e, t, r) {
  ;(e.min = t.min - r.min), (e.max = e.min + xt(t))
}
function Ei(e, t, r) {
  F0(e.x, t.x, r.x), F0(e.y, t.y, r.y)
}
function hz(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ye(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ye(r, e, n.max) : Math.min(e, r)),
    e
  )
}
function I0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  }
}
function mz(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: I0(e.x, r, o), y: I0(e.y, t, n) }
}
function V0(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
}
function gz(e, t) {
  return { x: V0(e.x, t.x), y: V0(e.y, t.y) }
}
function yz(e, t) {
  let r = 0.5
  const n = xt(e),
    o = xt(t)
  return (
    o > n ? (r = ca(t.min, t.max - n, e.min)) : n > o && (r = ca(e.min, e.max - o, t.min)),
    Fn(0, 1, r)
  )
}
function vz(e, t) {
  const r = {}
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
}
const Vd = 0.35
function Sz(e = Vd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vd),
    { x: O0(e, 'left', 'right'), y: O0(e, 'top', 'bottom') }
  )
}
function O0(e, t, r) {
  return { min: N0(e, t), max: N0(e, r) }
}
function N0(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const j0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  $i = () => ({ x: j0(), y: j0() }),
  W0 = () => ({ min: 0, max: 0 }),
  ke = () => ({ x: W0(), y: W0() })
function Zt(e) {
  return [e('x'), e('y')]
}
function AS({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } }
}
function bz({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function xz(e, t) {
  if (!t) return e
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom })
  return { top: r.y, left: r.x, bottom: n.y, right: n.x }
}
function Sc(e) {
  return e === void 0 || e === 1
}
function Od({ scale: e, scaleX: t, scaleY: r }) {
  return !Sc(e) || !Sc(t) || !Sc(r)
}
function vn(e) {
  return Od(e) || RS(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function RS(e) {
  return U0(e.x) || U0(e.y)
}
function U0(e) {
  return e && e !== '0%'
}
function vl(e, t, r) {
  const n = e - r,
    o = t * n
  return r + o
}
function H0(e, t, r, n, o) {
  return o !== void 0 && (e = vl(e, o, n)), vl(e, r, n) + t
}
function Nd(e, t = 0, r = 1, n, o) {
  ;(e.min = H0(e.min, t, r, n, o)), (e.max = H0(e.max, t, r, n, o))
}
function zS(e, { x: t, y: r }) {
  Nd(e.x, t.translate, t.scale, t.originPoint), Nd(e.y, r.translate, r.scale, r.originPoint)
}
function wz(e, t, r, n = !1) {
  const o = r.length
  if (!o) return
  t.x = t.y = 1
  let i, a
  for (let s = 0; s < o; s++) {
    ;(i = r[s]), (a = i.projectionDelta)
    const l = i.instance
    ;(l && l.style && l.style.display === 'contents') ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        lo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), zS(e, a)),
      n && vn(i.latestValues) && lo(e, i.latestValues))
  }
  ;(t.x = G0(t.x)), (t.y = G0(t.y))
}
function G0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function Fr(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function K0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ye(e.min, e.max, i)
  Nd(e, t[r], t[n], a, t.scale)
}
const kz = ['x', 'scaleX', 'originX'],
  Cz = ['y', 'scaleY', 'originY']
function lo(e, t) {
  K0(e.x, t, kz), K0(e.y, t, Cz)
}
function MS(e, t) {
  return AS(xz(e.getBoundingClientRect(), t))
}
function _z(e, t, r) {
  const n = MS(e, r),
    { scroll: o } = t
  return o && (Fr(n.x, o.offset.x), Fr(n.y, o.offset.y)), n
}
const Tz = new WeakMap()
class Pz {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ke()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement
    if (n && n.isPresent === !1) return
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(iu(l, 'page').point)
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps()
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Q1(c)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Zt((v) => {
            let S = this.getAxisMotionValue(v).get() || 0
            if (sr.test(S)) {
              const { projection: C } = this.visualElement
              if (C && C.layout) {
                const m = C.layout.layoutBox[v]
                m && (S = xt(m) * (parseFloat(S) / 100))
              }
            }
            this.originPoint[v] = S
          }),
          f && pe.update(() => f(l, u))
        const { animationState: h } = this.visualElement
        h && h.setActive('whileDrag', !0)
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps()
        if (!c && !this.openGlobalLock) return
        const { offset: v } = u
        if (d && this.currentDirection === null) {
          ;(this.currentDirection = Ez(v)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, v),
          this.updateAxis('y', u.point, v),
          this.visualElement.render(),
          h && h(l, u)
      },
      s = (l, u) => this.stop(l, u)
    this.panSession = new ES(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    )
  }
  stop(t, r) {
    const n = this.isDragging
    if ((this.cancel(), !n)) return
    const { velocity: o } = r
    this.startAnimation(o)
    const { onDragEnd: i } = this.getProps()
    i && pe.update(() => i(t, r))
  }
  cancel() {
    this.isDragging = !1
    const { projection: t, animationState: r } = this.visualElement
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: n } = this.getProps()
    !n && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive('whileDrag', !1)
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps()
    if (!n || !us(t, o, this.currentDirection)) return
    const i = this.getAxisMotionValue(t)
    let a = this.originPoint[t] + n[t]
    this.constraints && this.constraints[t] && (a = hz(a, this.constraints[t], this.elastic[t])),
      i.set(a)
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints
    t && ao(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = mz(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = Sz(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Zt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = vz(n.layoutBox[i], this.constraints[i]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps()
    if (!t || !ao(t)) return !1
    const n = t.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const i = _z(n, o.root, this.visualElement.getTransformPagePoint())
    let a = gz(o.layout.layoutBox, i)
    if (r) {
      const s = r(bz(a))
      ;(this.hasMutatedConstraints = !!s), s && (a = AS(s))
    }
    return a
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Zt((c) => {
        if (!us(c, r, this.currentDirection)) return
        let d = (l && l[c]) || {}
        a && (d = { min: 0, max: 0 })
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          }
        return this.startAxisValueAnimation(c, v)
      })
    return Promise.all(u).then(s)
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t)
    return n.start($p(t, n, 0, r))
  }
  stopAnimation() {
    Zt((t) => this.getAxisMotionValue(t).stop())
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r]
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Zt((r) => {
      const { drag: n } = this.getProps()
      if (!us(r, n, this.currentDirection)) return
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r)
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r]
        i.set(t[r] - ye(a, s, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement
    if (!ao(r) || !n || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    Zt((a) => {
      const s = this.getAxisMotionValue(a)
      if (s) {
        const l = s.get()
        o[a] = yz({ min: l, max: l }, this.constraints[a])
      }
    })
    const { transformTemplate: i } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Zt((a) => {
        if (!us(a, t, null)) return
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a]
        s.set(ye(l, u, o[a]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    Tz.set(this.visualElement, this)
    const t = this.visualElement.current,
      r = br(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps()
        ao(l) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n()
    const a = yr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Zt((c) => {
            const d = this.getAxisMotionValue(c)
            d && ((this.originPoint[c] += l[c].translate), d.set(d.get() + l[c].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      a(), r(), i(), s && s()
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Vd,
        dragMomentum: s = !0,
      } = t
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    }
  }
}
function us(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e)
}
function Ez(e, t = 10) {
  let r = null
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r
}
class $z extends cn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ze),
      (this.removeListeners = ze),
      (this.controls = new Pz(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ze)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Y0 = (e) => (t, r) => {
  e && pe.update(() => e(t, r))
}
class Az extends cn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ze)
  }
  onPointerDown(t) {
    this.session = new ES(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: Y0(t),
      onStart: Y0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && pe.update(() => o(i, a))
      },
    }
  }
  mount() {
    this.removePointerDownListener = br(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
function Rz() {
  const e = k.useContext(Sa)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = k.useId()
  return k.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0]
}
function zz() {
  return Mz(k.useContext(Sa))
}
function Mz(e) {
  return e === null ? !0 : e.isPresent
}
function Q0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const ei = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (I.test(e)) e = parseFloat(e)
        else return e
      const r = Q0(e, t.target.x),
        n = Q0(e, t.target.y)
      return `${r}% ${n}%`
    },
  },
  LS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function Lz(e) {
  const t = LS.exec(e)
  if (!t) return [,]
  const [, r, n] = t
  return [r, n]
}
function jd(e, t, r = 1) {
  const [n, o] = Lz(e)
  if (!n) return
  const i = window.getComputedStyle(t).getPropertyValue(n)
  return i ? i.trim() : $d(o) ? jd(o, t, r + 1) : o
}
function Dz(e, { ...t }, r) {
  const n = e.current
  if (!(n instanceof Element)) return { target: t, transitionEnd: r }
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get()
      if (!$d(i)) return
      const a = jd(i, n)
      a && o.set(a)
    })
  for (const o in t) {
    const i = t[o]
    if (!$d(i)) continue
    const a = jd(i, n)
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i))
  }
  return { target: t, transitionEnd: r }
}
const X0 = '_$css',
  Bz = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = []
      o && (e = e.replace(LS, (h) => (i.push(h), X0)))
      const a = an.parse(e)
      if (a.length > 5) return n
      const s = an.createTransformer(e),
        l = typeof a[0] != 'number' ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y
      ;(a[0 + l] /= u), (a[1 + l] /= c)
      const d = ye(u, c, 0.5)
      typeof a[2 + l] == 'number' && (a[2 + l] /= d), typeof a[3 + l] == 'number' && (a[3 + l] /= d)
      let f = s(a)
      if (o) {
        let h = 0
        f = f.replace(X0, () => {
          const v = i[h]
          return h++, v
        })
      }
      return f
    },
  }
class Fz extends st.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
      { projection: i } = t
    N4(Iz),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (Ci.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props,
      a = n.projection
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              pe.postRender(() => {
                const s = a.getStack()
                ;(!s || !s.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props,
      { projection: o } = t
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render() {
    return null
  }
}
function DS(e) {
  const [t, r] = Rz(),
    n = k.useContext(hp)
  return st.createElement(Fz, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: k.useContext(L1),
    isPresent: t,
    safeToRemove: r,
  })
}
const Iz = {
    borderRadius: {
      ...ei,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: ei,
    borderTopRightRadius: ei,
    borderBottomLeftRadius: ei,
    borderBottomRightRadius: ei,
    boxShadow: Bz,
  },
  BS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Vz = BS.length,
  q0 = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Z0 = (e) => typeof e == 'number' || I.test(e)
function Oz(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ye(0, r.opacity !== void 0 ? r.opacity : 1, Nz(n))),
      (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, jz(n))))
    : i &&
      (e.opacity = ye(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ))
  for (let a = 0; a < Vz; a++) {
    const s = `border${BS[a]}Radius`
    let l = J0(t, s),
      u = J0(r, s)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Z0(l) === Z0(u)
        ? ((e[s] = Math.max(ye(q0(l), q0(u), n), 0)), (sr.test(u) || sr.test(l)) && (e[s] += '%'))
        : (e[s] = u)
  }
  ;(t.rotate || r.rotate) && (e.rotate = ye(t.rotate || 0, r.rotate || 0, n))
}
function J0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Nz = FS(0, 0.5, Cp),
  jz = FS(0.5, 0.95, ze)
function FS(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(ca(e, t, n)))
}
function eg(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function $t(e, t) {
  eg(e.x, t.x), eg(e.y, t.y)
}
function tg(e, t, r, n, o) {
  return (e -= t), (e = vl(e, 1 / r, n)), o !== void 0 && (e = vl(e, 1 / o, n)), e
}
function Wz(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (sr.test(t) && ((t = parseFloat(t)), (t = ye(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return
  let s = ye(i.min, i.max, n)
  e === i && (s -= t), (e.min = tg(e.min, t, r, s, o)), (e.max = tg(e.max, t, r, s, o))
}
function rg(e, t, [r, n, o], i, a) {
  Wz(e, t[r], t[n], t[o], t.scale, i, a)
}
const Uz = ['x', 'scaleX', 'originX'],
  Hz = ['y', 'scaleY', 'originY']
function ng(e, t, r, n) {
  rg(e.x, t, Uz, r ? r.x : void 0, n ? n.x : void 0),
    rg(e.y, t, Hz, r ? r.y : void 0, n ? n.y : void 0)
}
function og(e) {
  return e.translate === 0 && e.scale === 1
}
function IS(e) {
  return og(e.x) && og(e.y)
}
function Wd(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function ig(e) {
  return xt(e.x) / xt(e.y)
}
class Gz {
  constructor() {
    this.members = []
  }
  add(t) {
    Ap(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((Rp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const r = this.members[this.members.length - 1]
      r && this.promote(r)
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o)
    if (r === 0) return !1
    let n
    for (let o = r; o >= 0; o--) {
      const i = this.members[o]
      if (i.isPresent !== !1) {
        n = i
        break
      }
    }
    return n ? (this.promote(n), !0) : !1
  }
  promote(t, r) {
    const n = this.lead
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
      const { crossfade: o } = t.options
      o === !1 && n.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function ag(e, t, r) {
  let n = ''
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `)
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || 'none'
}
const Kz = (e, t) => e.depth - t.depth
class Yz {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    Ap(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    Rp(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(Kz), (this.isDirty = !1), this.children.forEach(t)
  }
}
function Qz(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r
      i >= t && (on.read(n), e(i - t))
    }
  return pe.read(n, !0), () => on.read(n)
}
function Xz(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function qz(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function Zz(e, t, r) {
  const n = ft(e) ? e : Ao(e)
  return n.start($p('', n, t, r)), n.animation
}
const sg = ['', 'X', 'Y', 'Z'],
  lg = 1e3
let Jz = 0
const Sn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function VS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = Jz++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(Sn.totalNodes = Sn.resolvedTargetDeltas = Sn.recalculatedProjection = 0),
            this.nodes.forEach(rM),
            this.nodes.forEach(aM),
            this.nodes.forEach(sM),
            this.nodes.forEach(nM),
            Xz(Sn)
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = a),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        a && this.root.registerPotentialNode(a, this)
      for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0
      this.root === this && (this.nodes = new Yz())
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new zp()),
        this.eventHandlers.get(a).add(s)
      )
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a)
      l && l.notify(...s)
    }
    hasListeners(a) {
      return this.eventHandlers.has(a)
    }
    registerPotentialNode(a, s) {
      this.potentialNodes.set(a, s)
    }
    mount(a, s = !1) {
      if (this.instance) return
      ;(this.isSVG = qz(a)), (this.instance = a)
      const { layoutId: l, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d
        const f = () => (this.root.updateBlockedByResize = !1)
        e(a, () => {
          ;(this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Qz(f, 250)),
            Ci.hasAnimatedSinceResize && ((Ci.hasAnimatedSinceResize = !1), this.nodes.forEach(cg))
        })
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const S = this.options.transition || c.getDefaultTransition() || fM,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: m } = c.getProps(),
                p = !this.targetLayout || !Wd(this.targetLayout, v) || h,
                g = !f && h
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g)
                const w = { ...CS(S, 'layout'), onPlay: C, onComplete: m }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                !f && this.animationProgress === 0 && cg(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = v
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const a = this.getStack()
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        on.preRender(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(lM), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options
      return a && a.getProps().transformTemplate
    }
    willUpdate(a = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c]
        ;(d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1)
      }
      const { layoutId: s, layout: l } = this.options
      if (s === void 0 && !l) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners('willUpdate')
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ug)
        return
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size && (this.potentialNodes.forEach(pM), this.potentialNodes.clear()),
        this.nodes.forEach(iM),
        this.nodes.forEach(eM),
        this.nodes.forEach(tM),
        this.clearAllSnapshots(),
        uc.update(),
        uc.preRender(),
        uc.render())
    }
    clearAllSnapshots() {
      this.nodes.forEach(oM), this.sharedNodes.forEach(uM)
    }
    scheduleUpdateProjection() {
      pe.preRender(this.updateProjection, !1, !0)
    }
    scheduleCheckAfterUnmount() {
      pe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll()
      const a = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: s } = this.options
      s && s.notify('LayoutMeasure', this.layout.layoutBox, a ? a.layoutBox : void 0)
    }
    updateScroll(a = 'measure') {
      let s = !!(this.options.layoutScroll && this.instance)
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: n(this.instance),
            offset: r(this.instance),
          })
    }
    resetTransform() {
      if (!o) return
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !IS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      a &&
        (s || vn(this.latestValues) || c) &&
        (o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(a = !0) {
      const s = this.measurePageBox()
      let l = this.removeElementScroll(s)
      return (
        a && (l = this.removeTransform(l)),
        hM(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      const { visualElement: a } = this.options
      if (!a) return ke()
      const s = a.measureViewportBox(),
        { scroll: l } = this.root
      return l && (Fr(s.x, l.offset.x), Fr(s.y, l.offset.y)), s
    }
    removeElementScroll(a) {
      const s = ke()
      $t(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            $t(s, a)
            const { scroll: f } = this.root
            f && (Fr(s.x, -f.offset.x), Fr(s.y, -f.offset.y))
          }
          Fr(s.x, c.offset.x), Fr(s.y, c.offset.y)
        }
      }
      return s
    }
    applyTransform(a, s = !1) {
      const l = ke()
      $t(l, a)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          lo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          vn(c.latestValues) && lo(l, c.latestValues)
      }
      return vn(this.latestValues) && lo(l, this.latestValues), l
    }
    removeTransform(a) {
      const s = ke()
      $t(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !vn(u.latestValues)) continue
        Od(u.latestValues) && u.updateSnapshot()
        const c = ke(),
          d = u.measurePageBox()
        $t(c, d), ng(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return vn(this.latestValues) && ng(s, this.latestValues), s
    }
    setTargetDelta(a) {
      ;(this.targetDelta = a), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
    }
    setOptions(a) {
      this.options = { ...this.options, ...a, crossfade: a.crossfade !== void 0 ? a.crossfade : !0 }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    resolveTargetDelta(a = !1) {
      var s
      const l = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== l
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: d, layoutId: f } = this.options
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent()
          h && h.layout
            ? ((this.relativeParent = h),
              (this.relativeTarget = ke()),
              (this.relativeTargetOrigin = ke()),
              Ei(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              $t(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp &&
                  this.relativeParent.resolveTargetDelta(!0),
                pz(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : $t(this.target, this.layout.layoutBox),
                zS(this.target, this.targetDelta))
              : $t(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const h = this.getClosestProjectingParent()
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target
              ? ((this.relativeParent = h),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                Ei(this.relativeTargetOrigin, this.target, h.target),
                $t(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          Sn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Od(this.parent.latestValues) || RS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var a
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty)) &&
          (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === Ue.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: d } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return
      $t(this.layoutCorrected, this.layout.layoutBox),
        wz(this.layoutCorrected, this.treeScale, this.path, l)
      const { target: f } = s
      if (!f) return
      this.projectionDelta ||
        ((this.projectionDelta = $i()), (this.projectionDeltaWithTransform = $i()))
      const h = this.treeScale.x,
        v = this.treeScale.y,
        S = this.projectionTransform
      Pi(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = ag(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== S || this.treeScale.x !== h || this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        Sn.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack()
        s && s.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = $i()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s)
      const f = ke(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        S = h !== v,
        C = this.getStack(),
        m = !C || C.members.length <= 1,
        p = !!(S && !m && this.options.crossfade === !0 && !this.path.some(dM))
      this.animationProgress = 0
      let g
      ;(this.mixTargetDelta = (w) => {
        const T = w / 1e3
        dg(d.x, a.x, T),
          dg(d.y, a.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ei(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cM(this.relativeTarget, this.relativeTargetOrigin, f, T),
            g && Wd(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ke()),
            $t(g, this.relativeTarget)),
          S && ((this.animationValues = c), Oz(c, u, this.latestValues, T, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(a) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (on.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = pe.update(() => {
          ;(Ci.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Zz(0, lg, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s)
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const a = this.getStack()
      a && a.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(lg), this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const a = this.getLead()
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          OS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ke()
          const d = xt(this.layout.layoutBox.x)
          ;(l.x.min = a.target.x.min), (l.x.max = l.x.min + d)
          const f = xt(this.layout.layoutBox.y)
          ;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
        }
        $t(s, l), lo(s, c), Pi(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Gz()), this.sharedNodes.get(a).add(s)
      const u = s.options.initialPromotionConfig
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0,
      })
    }
    isLead() {
      const a = this.getStack()
      return a ? a.lead === this : !0
    }
    getLead() {
      var a
      const { layoutId: s } = this.options
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
    }
    getPrevLead() {
      var a
      const { layoutId: s } = this.options
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead) : void 0
    }
    getStack() {
      const { layoutId: a } = this.options
      if (a) return this.root.sharedNodes.get(a)
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack()
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s })
    }
    relegate() {
      const a = this.getStack()
      return a ? a.relegate(this) : !1
    }
    resetRotation() {
      const { visualElement: a } = this.options
      if (!a) return
      let s = !1
      const { latestValues: l } = a
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)) return
      const u = {}
      for (let c = 0; c < sg.length; c++) {
        const d = 'rotate' + sg[c]
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0))
      }
      a.render()
      for (const c in u) a.setStaticValue(c, u[c])
      a.scheduleRender()
    }
    getProjectionStyles(a = {}) {
      var s, l
      const u = {}
      if (!this.instance || this.isSVG) return u
      if (this.isVisible) u.visibility = ''
      else return { visibility: 'hidden' }
      const c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Rs(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {}
        return (
          this.options.layoutId &&
            ((S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (S.pointerEvents = Rs(a.pointerEvents) || '')),
          this.hasProjected &&
            !vn(this.latestValues) &&
            ((S.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          S
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = ag(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (u.transform = c(f, u.transform))
      const { x: h, y: v } = this.projectionDelta
      ;(u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0)
      for (const S in dl) {
        if (f[S] === void 0) continue
        const { correct: C, applyTo: m } = dl[S],
          p = u.transform === 'none' ? f[S] : C(f[S], d)
        if (m) {
          const g = m.length
          for (let w = 0; w < g; w++) u[m[w]] = p
        } else u[S] = p
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Rs(a.pointerEvents) || '' : 'none'),
        u
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
      }),
        this.root.nodes.forEach(ug),
        this.root.sharedNodes.clear()
    }
  }
}
function eM(e) {
  e.updateLayout()
}
function tM(e) {
  var t
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source
    i === 'size'
      ? Zt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = xt(f)
          ;(f.min = n[d].min), (f.max = f.min + h)
        })
      : OS(i, r.layoutBox, n) &&
        Zt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = xt(n[d])
          ;(f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + h))
        })
    const s = $i()
    Pi(s, n, r.layoutBox)
    const l = $i()
    a ? Pi(l, e.applyTransform(o, !0), r.measuredBox) : Pi(l, n, r.layoutBox)
    const u = !IS(s)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d
        if (f && h) {
          const v = ke()
          Ei(v, r.layoutBox, f.layoutBox)
          const S = ke()
          Ei(S, n, h.layoutBox),
            Wd(v, S) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = S), (e.relativeTargetOrigin = v), (e.relativeParent = d))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    })
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options
    n && n()
  }
  e.options.transition = void 0
}
function rM(e) {
  Sn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function nM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function oM(e) {
  e.clearSnapshot()
}
function ug(e) {
  e.clearMeasurements()
}
function iM(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function cg(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0)
}
function aM(e) {
  e.resolveTargetDelta()
}
function sM(e) {
  e.calcProjection()
}
function lM(e) {
  e.resetRotation()
}
function uM(e) {
  e.removeLeadSnapshot()
}
function dg(e, t, r) {
  ;(e.translate = ye(t.translate, 0, r)),
    (e.scale = ye(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function fg(e, t, r, n) {
  ;(e.min = ye(t.min, r.min, n)), (e.max = ye(t.max, r.max, n))
}
function cM(e, t, r, n) {
  fg(e.x, t.x, r.x, n), fg(e.y, t.y, r.y, n)
}
function dM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const fM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function pM(e, t) {
  let r = e.root
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i]
      break
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`)
  o && e.mount(o, !0)
}
function pg(e) {
  ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function hM(e) {
  pg(e.x), pg(e.y)
}
function OS(e, t, r) {
  return e === 'position' || (e === 'preserve-aspect' && !Id(ig(t), ig(r), 0.2))
}
const mM = VS({
    attachResizeListener: (e, t) => yr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  bc = { current: void 0 },
  NS = VS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bc.current) {
        const e = new mM(0, {})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bc.current = e)
      }
      return bc.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  gM = { pan: { Feature: Az }, drag: { Feature: $z, ProjectionNode: NS, MeasureLayout: DS } },
  yM = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  jS = (e) => yM.has(e),
  vM = (e) => Object.keys(e).some(jS),
  hg = (e) => e === Nn || e === I,
  mg = (e, t) => parseFloat(e.split(', ')[t]),
  gg =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const o = n.match(/^matrix3d\((.+)\)$/)
      if (o) return mg(o[1], t)
      {
        const i = n.match(/^matrix\((.+)\)$/)
        return i ? mg(i[1], e) : 0
      }
    },
  SM = new Set(['x', 'y', 'z']),
  bM = ou.filter((e) => !SM.has(e))
function xM(e) {
  const t = []
  return (
    bM.forEach((r) => {
      const n = e.getValue(r)
      n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const yg = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: gg(4, 13),
    y: gg(5, 14),
  },
  wM = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {}
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach((u) => {
        s[u] = yg[u](n, i)
      }),
      t.render()
    const l = t.measureViewportBox()
    return (
      r.forEach((u) => {
        const c = t.getValue(u)
        c && c.jump(s[u]), (e[u] = yg[u](l, i))
      }),
      e
    )
  },
  kM = (e, t, r = {}, n = {}) => {
    ;(t = { ...t }), (n = { ...n })
    const o = Object.keys(t).filter(jS)
    let i = [],
      a = !1
    const s = []
    if (
      (o.forEach((l) => {
        const u = e.getValue(l)
        if (!e.hasValue(l)) return
        let c = r[l],
          d = Jo(c)
        const f = t[l]
        let h
        if (pl(f)) {
          const v = f.length,
            S = f[0] === null ? 1 : 0
          ;(c = f[S]), (d = Jo(c))
          for (let C = S; C < v; C++) h ? kp(Jo(f[C]) === h) : (h = Jo(f[C]))
        } else h = Jo(f)
        if (d !== h)
          if (hg(d) && hg(h)) {
            const v = u.get()
            typeof v == 'string' && u.set(parseFloat(v)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === I && (t[l] = f.map(parseFloat))
          } else
            d != null && d.transform && h != null && h.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = xM(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f))
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = wM(t, e, s)
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d)
          }),
        e.render(),
        tu && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      )
    } else return { target: t, transitionEnd: n }
  }
function CM(e, t, r, n) {
  return vM(t) ? kM(e, t, r, n) : { target: t, transitionEnd: n }
}
const _M = (e, t, r, n) => {
    const o = Dz(e, t, n)
    return (t = o.target), (n = o.transitionEnd), CM(e, t, r, n)
  },
  Ud = { current: null },
  WS = { current: !1 }
function TM() {
  if (((WS.current = !0), !!tu))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Ud.current = e.matches)
      e.addListener(t), t()
    } else Ud.current = !1
}
function PM(e, t, r) {
  const { willChange: n } = t
  for (const o in t) {
    const i = t[o],
      a = r[o]
    if (ft(i)) e.addValue(o, i), yl(n) && n.add(o)
    else if (ft(a)) e.addValue(o, Ao(i, { owner: e })), yl(n) && n.remove(o)
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o)
        !s.hasAnimated && s.set(i)
      } else {
        const s = e.getStaticValue(o)
        e.addValue(o, Ao(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o)
  return t
}
const vg = new WeakMap(),
  US = Object.keys(sa),
  EM = US.length,
  Sg = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  $M = fp.length
class AM {
  constructor(
    { parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i },
    a = {}
  ) {
    ;(this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.scheduleRender = () => pe.render(this.render, !1, !0))
    const { latestValues: s, renderState: l } = i
    ;(this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = r.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = nu(r)),
      (this.isVariantNode = M1(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {})
    for (const d in c) {
      const f = c[d]
      s[d] !== void 0 && ft(f) && (f.set(s[d], !1), yl(u) && u.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      vg.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      WS.current || TM(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Ud.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    vg.delete(this.current),
      this.projection && this.projection.unmount(),
      on.update(this.notifyUpdate),
      on.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, r) {
    const n = On.has(t),
      o = r.on('change', (a) => {
        ;(this.latestValues[t] = a),
          this.props.onUpdate && pe.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0)
      }),
      i = r.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(t, () => {
      o(), i()
    })
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  loadFeatures({ children: t, ...r }, n, o, i, a) {
    let s, l
    for (let u = 0; u < EM; u++) {
      const c = US[u],
        { isEnabled: d, Feature: f, ProjectionNode: h, MeasureLayout: v } = sa[c]
      h && (s = h),
        d(r) && (!this.features[c] && f && (this.features[c] = new f(this)), v && (l = v))
    }
    if (!this.projection && s) {
      this.projection = new s(i, this.latestValues, this.parent && this.parent.projection)
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: v,
      } = r
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && ao(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == 'string' ? c : 'both',
        initialPromotionConfig: a,
        layoutScroll: h,
        layoutRoot: v,
      })
    }
    return l
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t]
      r.isMounted ? r.update(this.props, this.prevProps) : (r.mount(), (r.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r)
  }
  update(t, r) {
    ;(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r)
    for (let n = 0; n < Sg.length; n++) {
      const o = Sg[n]
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
      const i = t['on' + o]
      i && (this.propEventSubscriptions[o] = this.on(o, i))
    }
    ;(this.prevMotionValues = PM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {}
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n
    }
    const r = {}
    for (let n = 0; n < $M; n++) {
      const o = fp[n],
        i = this.props[o]
      ;(aa(i) || i === !1) && (r[o] = i)
    }
    return r
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode()
    if (r) return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t)
  }
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get())
  }
  removeValue(t) {
    this.values.delete(t)
    const r = this.valueSubscriptions.get(t)
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let n = this.values.get(t)
    return n === void 0 && r !== void 0 && ((n = Ao(r, { owner: this })), this.addValue(t, n)), n
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options)
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r
  }
  getBaseTarget(t) {
    var r
    const { initial: n } = this.props,
      o =
        typeof n == 'string' || typeof n == 'object'
          ? (r = wp(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0
    if (n && o !== void 0) return o
    const i = this.getBaseTargetFromProps(this.props, t)
    return i !== void 0 && !ft(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new zp()), this.events[t].add(r)
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r)
  }
}
class HS extends AM {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t]
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    { transformValues: o },
    i
  ) {
    let a = QR(n, t || {}, this)
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      KR(this, n, a)
      const s = _M(this, n, a, r)
      ;(r = s.transitionEnd), (n = s.target)
    }
    return { transition: t, transitionEnd: r, ...n }
  }
}
function RM(e) {
  return window.getComputedStyle(e)
}
class zM extends HS {
  readValueFromInstance(t, r) {
    if (On.has(r)) {
      const n = Pp(r)
      return (n && n.default) || 0
    } else {
      const n = RM(t),
        o = (F1(r) ? n.getPropertyValue(r) : n[r]) || 0
      return typeof o == 'string' ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return MS(t, r)
  }
  build(t, r, n, o) {
    gp(t, r, n, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, r) {
    return xp(t, r)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    ft(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`)
      }))
  }
  renderInstance(t, r, n, o) {
    j1(t, r, n, o)
  }
}
class MM extends HS {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, r) {
    return t[r]
  }
  readValueFromInstance(t, r) {
    if (On.has(r)) {
      const n = Pp(r)
      return (n && n.default) || 0
    }
    return (r = W1.has(r) ? r : bp(r)), t.getAttribute(r)
  }
  measureInstanceViewportBox() {
    return ke()
  }
  scrapeMotionValuesFromProps(t, r) {
    return H1(t, r)
  }
  build(t, r, n, o) {
    vp(t, r, n, this.isSVGTag, o.transformTemplate)
  }
  renderInstance(t, r, n, o) {
    U1(t, r, n, o)
  }
  mount(t) {
    ;(this.isSVGTag = Sp(t.tagName)), super.mount(t)
  }
}
const LM = (e, t) =>
    mp(e)
      ? new MM(t, { enableHardwareAcceleration: !1 })
      : new zM(t, { enableHardwareAcceleration: !0 }),
  DM = { layout: { ProjectionNode: NS, MeasureLayout: DS } },
  BM = { ...uz, ...AA, ...gM, ...DM },
  FM = V4((e, t) => pA(e, t, BM, LM))
function GS() {
  const e = k.useRef(!1)
  return (
    cl(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    e
  )
}
function IM() {
  const e = GS(),
    [t, r] = k.useState(0),
    n = k.useCallback(() => {
      e.current && r(t + 1)
    }, [t])
  return [k.useCallback(() => pe.postRender(n), [n]), t]
}
class VM extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current
      ;(n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft)
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function OM({ children: e, isPresent: t }) {
  const r = k.useId(),
    n = k.useRef(null),
    o = k.useRef({ width: 0, height: 0, top: 0, left: 0 })
  return (
    k.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current
      if (t || !n.current || !i || !a) return
      n.current.dataset.motionPopId = r
      const u = document.createElement('style')
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u)
        }
      )
    }, [t]),
    k.createElement(VM, { isPresent: t, childRef: n, sizeRef: o }, k.cloneElement(e, { ref: n }))
  )
}
const xc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = pp(NM),
    l = k.useId(),
    u = k.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0)
          for (const d of s.values()) if (!d) return
          n && n()
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [r]
    )
  return (
    k.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1))
    }, [r]),
    k.useEffect(() => {
      !r && !s.size && n && n()
    }, [r]),
    a === 'popLayout' && (e = k.createElement(OM, { isPresent: r }, e)),
    k.createElement(Sa.Provider, { value: u }, e)
  )
}
function NM() {
  return new Map()
}
function jM(e) {
  return k.useEffect(() => () => e(), [])
}
const Kn = (e) => e.key || ''
function WM(e, t) {
  e.forEach((r) => {
    const n = Kn(r)
    t.set(n, r)
  })
}
function UM(e) {
  const t = []
  return (
    k.Children.forEach(e, (r) => {
      k.isValidElement(r) && t.push(r)
    }),
    t
  )
}
const HM = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  let [s] = IM()
  const l = k.useContext(hp).forceRender
  l && (s = l)
  const u = GS(),
    c = UM(e)
  let d = c
  const f = new Set(),
    h = k.useRef(d),
    v = k.useRef(new Map()).current,
    S = k.useRef(!0)
  if (
    (cl(() => {
      ;(S.current = !1), WM(c, v), (h.current = d)
    }),
    jM(() => {
      ;(S.current = !0), v.clear(), f.clear()
    }),
    S.current)
  )
    return k.createElement(
      k.Fragment,
      null,
      d.map((g) =>
        k.createElement(
          xc,
          {
            key: Kn(g),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          g
        )
      )
    )
  d = [...d]
  const C = h.current.map(Kn),
    m = c.map(Kn),
    p = C.length
  for (let g = 0; g < p; g++) {
    const w = C[g]
    m.indexOf(w) === -1 && f.add(w)
  }
  return (
    a === 'wait' && f.size && (d = []),
    f.forEach((g) => {
      if (m.indexOf(g) !== -1) return
      const w = v.get(g)
      if (!w) return
      const T = C.indexOf(g),
        A = () => {
          v.delete(g), f.delete(g)
          const P = h.current.findIndex(($) => $.key === g)
          if ((h.current.splice(P, 1), !f.size)) {
            if (((h.current = c), u.current === !1)) return
            s(), n && n()
          }
        }
      d.splice(
        T,
        0,
        k.createElement(
          xc,
          {
            key: Kn(w),
            isPresent: !1,
            onExitComplete: A,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          w
        )
      )
    }),
    (d = d.map((g) => {
      const w = g.key
      return f.has(w)
        ? g
        : k.createElement(xc, { key: Kn(g), isPresent: !0, presenceAffectsLayout: i, mode: a }, g)
    })),
    k.createElement(k.Fragment, null, f.size ? d : d.map((g) => k.cloneElement(g)))
  )
}
var GM = {
    initial: (e) => {
      const { position: t } = e,
        r = ['top', 'bottom'].includes(t) ? 'y' : 'x'
      let n = ['top-right', 'bottom-right'].includes(t) ? 1 : -1
      return t === 'bottom' && (n = 1), { opacity: 0, [r]: n * 24 }
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  },
  KS = k.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = GM,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = k.useState(s),
      h = zz()
    p0(() => {
      h || n == null || n()
    }, [h]),
      p0(() => {
        f(s)
      }, [s])
    const v = () => f(null),
      S = () => f(s),
      C = () => {
        h && o()
      }
    k.useEffect(() => {
      h && i && o()
    }, [h, i, o]),
      E4(C, d)
    const m = k.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...l }),
        [l, c]
      ),
      p = k.useMemo(() => _4(a), [a])
    return E(FM.li, {
      layout: !0,
      className: 'chakra-toast',
      variants: u,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: v,
      onHoverEnd: S,
      custom: { position: a },
      style: p,
      children: E(xe.div, {
        'role': 'status',
        'aria-atomic': 'true',
        'className': 'chakra-toast__inner',
        '__css': m,
        'children': Wr(r, { id: t, onClose: C }),
      }),
    })
  })
KS.displayName = 'ToastComponent'
var bg = {
    path: qe('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        E('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        E('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        E('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  Ca = Ke((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: o = 'currentColor',
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = _t('chakra-icon', s),
      d = Fo('Icon', e),
      f = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      v = n ?? bg.viewBox
    if (r && typeof r != 'string') return E(xe.svg, { as: r, ...h, ...u })
    const S = a ?? bg.path
    return E(xe.svg, { verticalAlign: 'middle', viewBox: v, ...h, ...u, children: S })
  })
Ca.displayName = 'Icon'
function KM(e) {
  return E(Ca, {
    viewBox: '0 0 24 24',
    ...e,
    children: E('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  })
}
function YM(e) {
  return E(Ca, {
    viewBox: '0 0 24 24',
    ...e,
    children: E('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  })
}
function xg(e) {
  return E(Ca, {
    viewBox: '0 0 24 24',
    ...e,
    children: E('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  })
}
var QM = Hw({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  Mp = Ke((e, t) => {
    const r = Fo('Spinner', e),
      {
        label: n = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = Bo(e),
      u = _t('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${QM} ${i} linear infinite`,
        ...r,
      }
    return E(xe.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && E(xe.span, { srOnly: !0, children: n }),
    })
  })
Mp.displayName = 'Spinner'
var [XM, qM] = Mo({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
  [ZM, Lp] = Mo({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  YS = {
    info: { icon: YM, colorScheme: 'blue' },
    warning: { icon: xg, colorScheme: 'orange' },
    success: { icon: KM, colorScheme: 'green' },
    error: { icon: xg, colorScheme: 'red' },
    loading: { icon: Mp, colorScheme: 'blue' },
  }
function JM(e) {
  return YS[e].colorScheme
}
function e6(e) {
  return YS[e].icon
}
var QS = Ke(function (t, r) {
  const o = { display: 'inline', ...Lp().description }
  return E(xe.div, { ref: r, ...t, className: _t('chakra-alert__desc', t.className), __css: o })
})
QS.displayName = 'AlertDescription'
function XS(e) {
  const { status: t } = qM(),
    r = e6(t),
    n = Lp(),
    o = t === 'loading' ? n.spinner : n.icon
  return E(xe.span, {
    display: 'inherit',
    ...e,
    className: _t('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || E(r, { h: '100%', w: '100%' }),
  })
}
XS.displayName = 'AlertIcon'
var qS = Ke(function (t, r) {
  const n = Lp()
  return E(xe.div, {
    ref: r,
    ...t,
    className: _t('chakra-alert__title', t.className),
    __css: n.title,
  })
})
qS.displayName = 'AlertTitle'
var ZS = Ke(function (t, r) {
  var n
  const { status: o = 'info', addRole: i = !0, ...a } = Bo(t),
    s = (n = t.colorScheme) != null ? n : JM(o),
    l = n4('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    }
  return E(XM, {
    value: { status: o },
    children: E(ZM, {
      value: l,
      children: E(xe.div, {
        role: i ? 'alert' : void 0,
        ref: r,
        ...a,
        className: _t('chakra-alert', t.className),
        __css: u,
      }),
    }),
  })
})
ZS.displayName = 'Alert'
function t6(e) {
  return E(Ca, {
    'focusable': 'false',
    'aria-hidden': !0,
    ...e,
    'children': E('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  })
}
var JS = Ke(function (t, r) {
  const n = Fo('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = Bo(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  return E(xe.button, {
    'type': 'button',
    'aria-label': 'Close',
    'ref': r,
    'disabled': i,
    '__css': { ...l, ...n, ...a },
    ...s,
    'children': o || E(t6, { width: '1em', height: '1em' }),
  })
})
JS.displayName = 'CloseButton'
var r6 = {
    'top': [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom': [],
    'bottom-right': [],
  },
  Ai = n6(r6)
function n6(e) {
  let t = e
  const r = new Set(),
    n = (o) => {
      ;(t = o(t)), r.forEach((i) => i())
    }
  return {
    getState: () => t,
    subscribe: (o) => (
      r.add(o),
      () => {
        n(() => e), r.delete(o)
      }
    ),
    removeToast: (o, i) => {
      n((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }))
    },
    notify: (o, i) => {
      const a = o6(o, i),
        { position: s, id: l } = a
      return (
        n((u) => {
          var c, d
          const h = s.includes('top')
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a]
          return { ...u, [s]: h }
        }),
        l
      )
    },
    update: (o, i) => {
      o &&
        n((a) => {
          const s = { ...a },
            { position: l, index: u } = f0(s, o)
          return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: a6(i) }), s
        })
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) =>
        (o ?? ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      )
    },
    close: (o) => {
      n((i) => {
        const a = A1(i, o)
        return a ? { ...i, [a]: i[a].map((s) => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
      })
    },
    isActive: (o) => !!f0(Ai.getState(), o).position,
  }
}
var wg = 0
function o6(e, t = {}) {
  var r, n
  wg += 1
  const o = (r = t.id) != null ? r : wg,
    i = (n = t.position) != null ? n : 'bottom'
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ai.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  }
}
var i6 = (e) => {
  const {
      status: t,
      variant: r = 'solid',
      id: n,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = n
      ? { root: `toast-${n}`, title: `toast-${n}-title`, description: `toast-${n}-description` }
      : void 0
  return qe(ZS, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: 'start',
    borderRadius: 'md',
    boxShadow: 'lg',
    paddingEnd: 8,
    textAlign: 'start',
    width: 'auto',
    colorScheme: l,
    children: [
      E(XS, { children: u }),
      qe(xe.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && E(qS, { id: c == null ? void 0 : c.title, children: o }),
          s && E(QS, { id: c == null ? void 0 : c.description, display: 'block', children: s }),
        ],
      }),
      i && E(JS, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  })
}
function a6(e = {}) {
  const { render: t, toastComponent: r = i6 } = e
  return (o) => (typeof t == 'function' ? t({ ...o, ...e }) : E(r, { ...o, ...e }))
}
var [s6, W6] = Mo({ name: 'ToastOptionsContext', strict: !1 }),
  l6 = (e) => {
    const t = k.useSyncExternalStore(Ai.subscribe, Ai.getState, Ai.getState),
      { motionVariants: r, component: n = KS, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s]
        return E(
          'ul',
          {
            'role': 'region',
            'aria-live': 'polite',
            'id': `chakra-toast-manager-${s}`,
            'style': T4(s),
            'children': E(HM, {
              initial: !1,
              children: l.map((u) => E(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        )
      })
    return E(Ql, { ...o, children: a })
  },
  u6 = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return qe(k4, {
        theme: n,
        ...i,
        children: [
          E(s6, { value: o == null ? void 0 : o.defaultOptions, children: r }),
          E(l6, { ...o }),
        ],
      })
    },
  c6 = u6(w1)
function d6(e, t) {
  if (e != null) {
    if (typeof e == 'function') {
      e(t)
      return
    }
    try {
      e.current = t
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`)
    }
  }
}
function f6(...e) {
  return (t) => {
    e.forEach((r) => {
      d6(r, t)
    })
  }
}
function p6(...e) {
  return k.useMemo(() => f6(...e), e)
}
function h6(e) {
  return k.Children.toArray(e).filter((t) => k.isValidElement(t))
}
var [m6, g6] = Mo({ strict: !1, name: 'ButtonGroupContext' }),
  y6 = {
    horizontal: {
      '> *:first-of-type:not(:last-of-type)': { borderEndRadius: 0 },
      '> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },
      '> *:not(:first-of-type):last-of-type': { borderStartRadius: 0 },
    },
    vertical: {
      '> *:first-of-type:not(:last-of-type)': { borderBottomRadius: 0 },
      '> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },
      '> *:not(:first-of-type):last-of-type': { borderTopRadius: 0 },
    },
  },
  v6 = {
    horizontal: (e) => ({ '& > *:not(style) ~ *:not(style)': { marginStart: e } }),
    vertical: (e) => ({ '& > *:not(style) ~ *:not(style)': { marginTop: e } }),
  },
  eb = Ke(function (t, r) {
    const {
        size: n,
        colorScheme: o,
        variant: i,
        className: a,
        spacing: s = '0.5rem',
        isAttached: l,
        isDisabled: u,
        orientation: c = 'horizontal',
        ...d
      } = t,
      f = _t('chakra-button__group', a),
      h = k.useMemo(() => ({ size: n, colorScheme: o, variant: i, isDisabled: u }), [n, o, i, u])
    let v = { display: 'inline-flex', ...(l ? y6[c] : v6[c](s)) }
    const S = c === 'vertical'
    return E(m6, {
      value: h,
      children: E(xe.div, {
        'ref': r,
        'role': 'group',
        '__css': v,
        'className': f,
        'data-attached': l ? '' : void 0,
        'data-orientation': c,
        'flexDir': S ? 'column' : void 0,
        ...d,
      }),
    })
  })
eb.displayName = 'ButtonGroup'
function S6(e) {
  const [t, r] = k.useState(!e)
  return {
    ref: k.useCallback((i) => {
      i && r(i.tagName === 'BUTTON')
    }, []),
    type: t ? 'button' : void 0,
  }
}
function Hd(e) {
  const { children: t, className: r, ...n } = e,
    o = k.isValidElement(t) ? k.cloneElement(t, { 'aria-hidden': !0, 'focusable': !1 }) : t,
    i = _t('chakra-button__icon', r)
  return E(xe.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  })
}
Hd.displayName = 'ButtonIcon'
function Gd(e) {
  const {
      label: t,
      placement: r,
      spacing: n = '0.5rem',
      children: o = E(Mp, { color: 'currentColor', width: '1em', height: '1em' }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = _t('chakra-button__spinner', i),
    u = r === 'start' ? 'marginEnd' : 'marginStart',
    c = k.useMemo(
      () => ({
        display: 'flex',
        alignItems: 'center',
        position: t ? 'relative' : 'absolute',
        [u]: t ? n : 0,
        fontSize: '1em',
        lineHeight: 'normal',
        ...a,
      }),
      [a, t, u, n]
    )
  return E(xe.div, { className: l, ...s, __css: c, children: o })
}
Gd.displayName = 'ButtonSpinner'
var Ri = Ke((e, t) => {
  const r = g6(),
    n = Fo('Button', { ...r, ...e }),
    {
      isDisabled: o = r == null ? void 0 : r.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = '0.5rem',
      type: f,
      spinner: h,
      spinnerPlacement: v = 'start',
      className: S,
      as: C,
      ...m
    } = Bo(e),
    p = k.useMemo(() => {
      const A = { ...(n == null ? void 0 : n._focus), zIndex: 1 }
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...n,
        ...(!!r && { _focus: A }),
      }
    }, [n, r]),
    { ref: g, type: w } = S6(C),
    T = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s }
  return qe(xe.button, {
    'ref': p6(t, g),
    'as': C,
    'type': f ?? w,
    'data-active': wm(a),
    'data-loading': wm(i),
    '__css': p,
    'className': _t('chakra-button', S),
    ...m,
    'disabled': o || i,
    'children': [
      i &&
        v === 'start' &&
        E(Gd, {
          className: 'chakra-button__spinner--start',
          label: c,
          placement: 'start',
          spacing: d,
          children: h,
        }),
      i ? c || E(xe.span, { opacity: 0, children: E(kg, { ...T }) }) : E(kg, { ...T }),
      i &&
        v === 'end' &&
        E(Gd, {
          className: 'chakra-button__spinner--end',
          label: c,
          placement: 'end',
          spacing: d,
          children: h,
        }),
    ],
  })
})
Ri.displayName = 'Button'
function kg(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e
  return qe(Qx, {
    children: [
      t && E(Hd, { marginEnd: o, children: t }),
      n,
      r && E(Hd, { marginStart: o, children: r }),
    ],
  })
}
var tb = Ke((e, t) => {
  const { 'icon': r, 'children': n, 'isRound': o, 'aria-label': i, ...a } = e,
    s = r || n,
    l = k.isValidElement(s) ? k.cloneElement(s, { 'aria-hidden': !0, 'focusable': !1 }) : null
  return E(Ri, {
    'padding': '0',
    'borderRadius': o ? 'full' : void 0,
    'ref': t,
    'aria-label': i,
    ...a,
    'children': l,
  })
})
tb.displayName = 'IconButton'
var rb = Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
function nb(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : He(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null
}
function b6(e, t = rb) {
  const r = {}
  return (
    e.forEach((n, o) => {
      const i = t[o]
      n != null && (r[i] = n)
    }),
    r
  )
}
var ob = (e) =>
  E(xe.div, {
    className: 'chakra-stack__item',
    ...e,
    __css: { display: 'inline-block', flex: '0 0 auto', minWidth: 0, ...e.__css },
  })
ob.displayName = 'StackItem'
var Kd = '& > *:not(style) ~ *:not(style)'
function x6(e) {
  const { spacing: t, direction: r } = e,
    n = {
      'column': { marginTop: t, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      'row': { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: t },
      'column-reverse': { marginTop: 0, marginEnd: 0, marginBottom: t, marginStart: 0 },
      'row-reverse': { marginTop: 0, marginEnd: t, marginBottom: 0, marginStart: 0 },
    }
  return { flexDirection: r, [Kd]: nb(r, (o) => n[o]) }
}
function w6(e) {
  const { spacing: t, direction: r } = e,
    n = {
      'column': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'column-reverse': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'row': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
      'row-reverse': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
    }
  return { '&': nb(r, (o) => n[o]) }
}
var ib = Ke((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: o,
      justify: i,
      spacing: a = '0.5rem',
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    h = r ? 'row' : n ?? 'column',
    v = k.useMemo(() => x6({ direction: h, spacing: a }), [h, a]),
    S = k.useMemo(() => w6({ spacing: a, direction: h }), [a, h]),
    C = !!u,
    m = !d && !C,
    p = k.useMemo(() => {
      const w = h6(l)
      return m
        ? w
        : w.map((T, A) => {
            const P = typeof T.key < 'u' ? T.key : A,
              $ = A + 1 === w.length,
              D = d ? E(ob, { children: T }, P) : T
            if (!C) return D
            const oe = k.cloneElement(u, { __css: S }),
              Ae = $ ? null : oe
            return qe(k.Fragment, { children: [D, Ae] }, P)
          })
    }, [u, S, C, m, d, l]),
    g = _t('chakra-stack', c)
  return E(xe.div, {
    ref: t,
    display: 'flex',
    alignItems: o,
    justifyContent: i,
    flexDirection: v.flexDirection,
    flexWrap: s,
    className: g,
    __css: C ? {} : { [Kd]: v[Kd] },
    ...f,
    children: p,
  })
})
ib.displayName = 'Stack'
var Yd = Ke((e, t) => E(ib, { align: 'center', ...e, direction: 'row', ref: t }))
Yd.displayName = 'HStack'
var Dp = Ke(function (t, r) {
  const n = Fo('Heading', t),
    { className: o, ...i } = Bo(t)
  return E(xe.h2, { ref: r, className: _t('chakra-heading', t.className), ...i, __css: n })
})
Dp.displayName = 'Heading'
var da = xe('div')
da.displayName = 'Box'
var ab = Ke(function (t, r) {
  const { size: n, centerContent: o = !0, ...i } = t
  return E(da, {
    ref: r,
    boxSize: n,
    __css: {
      ...(o ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}),
      flexShrink: 0,
      flexGrow: 0,
    },
    ...i,
  })
})
ab.displayName = 'Square'
var k6 = Ke(function (t, r) {
  const { size: n, ...o } = t
  return E(ab, { size: n, ref: r, borderRadius: '9999px', ...o })
})
k6.displayName = 'Circle'
var Bp = Ke(function (t, r) {
  const { className: n, centerContent: o, ...i } = Bo(t),
    a = Fo('Container', t)
  return E(xe.div, {
    ref: r,
    className: _t('chakra-container', n),
    ...i,
    __css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
  })
})
Bp.displayName = 'Container'
var Fp = Ke(function (t, r) {
  const { direction: n, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...c } = t,
    d = {
      display: 'flex',
      flexDirection: n,
      alignItems: o,
      justifyContent: i,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    }
  return E(xe.div, { ref: r, __css: d, ...c })
})
Fp.displayName = 'Flex'
function C6(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t,
    { getWindow: o } = w4(),
    i = Array.isArray(e) ? e : [e]
  let a = Array.isArray(n) ? n : [n]
  a = a.filter((u) => u != null)
  const [s, l] = k.useState(() =>
    i.map((u, c) => ({ media: u, matches: r ? !!a[c] : o().matchMedia(u).matches }))
  )
  return (
    k.useEffect(() => {
      const u = o()
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })))
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((h) => h.slice().map((v) => (v.media === f.media ? { ...v, matches: f.matches } : v)))
        }
      return (
        c.forEach((f) => {
          typeof f.addListener == 'function' ? f.addListener(d) : f.addEventListener('change', d)
        }),
        () => {
          c.forEach((f) => {
            typeof f.removeListener == 'function'
              ? f.removeListener(d)
              : f.removeEventListener('change', d)
          })
        }
      )
    }, [o]),
    s.map((u) => u.matches)
  )
}
function _6(e, t, r = rb) {
  let n = Object.keys(e).indexOf(t)
  if (n !== -1) return e[t]
  let o = r.indexOf(t)
  for (; o >= 0; ) {
    const i = r[o]
    if (e.hasOwnProperty(i)) {
      n = o
      break
    }
    o -= 1
  }
  if (n !== -1) {
    const i = r[n]
    return e[i]
  }
}
function T6(e) {
  var t, r
  const n = He(e) ? e : { fallback: e ?? 'base' },
    i = Jf().__breakpoints.details.map(({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace('@media screen and ', ''),
    })),
    a = i.map((u) => u.breakpoint === n.fallback),
    l = C6(
      i.map((u) => u.query),
      { fallback: a, ssr: n.ssr }
    ).findIndex((u) => u == !0)
  return (r = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback
}
function P6(e, t) {
  var r
  const n = He(t) ? t : { fallback: t ?? 'base' },
    o = T6(n),
    i = Jf()
  if (!o) return
  const a = Array.from(((r = i.__breakpoints) == null ? void 0 : r.keys) || []),
    s = Array.isArray(e) ? Object.fromEntries(Object.entries(b6(e, a)).map(([l, u]) => [l, u])) : e
  return _6(s, o, a)
}
var Qd = {},
  Cg = Ii
;(Qd.createRoot = Cg.createRoot), (Qd.hydrateRoot = Cg.hydrateRoot)
var sb = 'https://static.elfsight.com/platform/platform.js'
function E6() {
  k.useEffect(function () {
    $6() || z6()
  }, [])
}
function $6() {
  return A6() || R6()
}
function A6() {
  return 'eapps' in window
}
function R6() {
  return !!document.querySelector('script[src="' + sb + '"]')
}
function z6() {
  var e = document.createElement('script')
  ;(e.src = sb), (e.defer = !0), document.head.appendChild(e)
}
function M6(e) {
  var t = e.widgetID
  return E6(), st.createElement('div', { className: 'elfsight-app-' + t })
}
var L6 = k.memo(M6)
const D6 = '/assets/sedona-header-e1943e27.jpg'
var lb = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  _g = st.createContext && st.createContext(lb),
  tn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (tn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r]
              for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
          }),
        tn.apply(this, arguments)
      )
    },
  B6 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {}
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]])
      return r
    }
function ub(e) {
  return (
    e &&
    e.map(function (t, r) {
      return st.createElement(t.tag, tn({ key: r }, t.attr), ub(t.child))
    })
  )
}
function cb(e) {
  return function (t) {
    return st.createElement(F6, tn({ attr: tn({}, e.attr) }, t), ub(e.child))
  }
}
function F6(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      i = e.title,
      a = B6(e, ['attr', 'size', 'title']),
      s = o || r.size || '1em',
      l
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      st.createElement(
        'svg',
        tn({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, n, a, {
          className: l,
          style: tn(tn({ color: e.color || r.color }, r.style), e.style),
          height: s,
          width: s,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        i && st.createElement('title', null, i),
        e.children
      )
    )
  }
  return _g !== void 0
    ? st.createElement(_g.Consumer, null, function (r) {
        return t(r)
      })
    : t(lb)
}
function I6(e) {
  return cb({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'line', attr: { x1: '3', y1: '12', x2: '21', y2: '12' } },
      { tag: 'line', attr: { x1: '3', y1: '6', x2: '21', y2: '6' } },
      { tag: 'line', attr: { x1: '3', y1: '18', x2: '21', y2: '18' } },
    ],
  })(e)
}
function V6(e) {
  return cb({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
        },
      },
    ],
  })(e)
}
const O6 = (e) => {
  const t = P6({ base: !1, lg: !0 })
  return E(da, {
    as: 'section',
    bg: 'white',
    mb: { base: 5 },
    ...e,
    children: E(da, {
      as: 'nav',
      bg: 'bg-surface',
      boxShadow: 'sm',
      children: E(Bp, {
        py: { base: '4', lg: '5' },
        maxW: '6xl',
        children: qe(Yd, {
          spacing: '10',
          justify: 'space-between',
          children: [
            E(Dp, { fontSize: 'lg', children: 'Sedona Guest Services' }),
            t
              ? qe(Fp, {
                  justify: 'space-between',
                  flex: '1',
                  children: [
                    E(eb, {
                      variant: 'link',
                      spacing: '8',
                      children: E(Ri, { variant: 'link', children: 'Reviews' }),
                    }),
                    qe(Yd, {
                      spacing: '3',
                      children: [
                        E(Ri, {
                          leftIcon: E(V6, {}),
                          onClick: () => window.open('tel:928.985.0575'),
                          children: 'Call Now',
                        }),
                        E(Ri, {
                          colorScheme: 'linkedin',
                          onClick: () => window.open('mailto:ohmigom@gmail.com'),
                          children: 'Send Email',
                        }),
                      ],
                    }),
                  ],
                })
              : E(tb, {
                  'variant': 'ghost',
                  'icon': E(I6, { fontSize: '1.25rem' }),
                  'aria-label': 'Open Menu',
                }),
          ],
        }),
      }),
    }),
  })
}
function N6() {
  return qe(da, {
    bg: 'linkedin.50',
    children: [
      E(O6, {}),
      qe(Bp, {
        maxW: '6xl',
        children: [
          E(Fp, {
            borderTopRadius: '24px',
            backgroundImage: `url(${D6})`,
            backgroundSize: 'cover',
            height: '300px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            children: E(Dp, { size: '2xl', textShadow: 'dark-lg', children: 'Reviews' }),
          }),
          E(L6, { widgetID: 'd254839d-abb3-4085-b4a1-59a38451e70f' }),
        ],
      }),
    ],
  })
}
const db = G3({
  fonts: { heading: 'Roboto, serif', body: 'Roboto, sans-serif', mono: 'Roboto, sans-serif' },
})
console.log('theme', db)
Qd.createRoot(document.getElementById('root')).render(
  E(st.StrictMode, { children: E(c6, { theme: db, children: E(N6, {}) }) })
)
