function ux(e, t) {
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
var Ra =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function cx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var Ai = {},
  dx = {
    get exports() {
      return Ai
    },
    set exports(e) {
      Ai = e
    },
  },
  gl = {},
  k = {},
  fx = {
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
 */ var ua = Symbol.for('react.element'),
  px = Symbol.for('react.portal'),
  hx = Symbol.for('react.fragment'),
  mx = Symbol.for('react.strict_mode'),
  gx = Symbol.for('react.profiler'),
  yx = Symbol.for('react.provider'),
  vx = Symbol.for('react.context'),
  Sx = Symbol.for('react.forward_ref'),
  bx = Symbol.for('react.suspense'),
  xx = Symbol.for('react.memo'),
  wx = Symbol.for('react.lazy'),
  Yp = Symbol.iterator
function kx(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yp && e[Yp]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var g0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  y0 = Object.assign,
  v0 = {}
function zo(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = v0), (this.updater = r || g0)
}
zo.prototype.isReactComponent = {}
zo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
zo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function S0() {}
S0.prototype = zo.prototype
function Gd(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = v0), (this.updater = r || g0)
}
var Kd = (Gd.prototype = new S0())
Kd.constructor = Gd
y0(Kd, zo.prototype)
Kd.isPureReactComponent = !0
var Qp = Array.isArray,
  b0 = Object.prototype.hasOwnProperty,
  Yd = { current: null },
  x0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function w0(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      b0.call(t, n) && !x0.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: ua, type: e, key: i, ref: a, props: o, _owner: Yd.current }
}
function Cx(e, t) {
  return { $$typeof: ua, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Qd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ua
}
function _x(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var Xp = /\/+/g
function gu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? _x('' + e.key) : t.toString(36)
}
function ss(e, t, r, n, o) {
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
          case ua:
          case px:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + gu(a, 0) : n),
      Qp(o)
        ? ((r = ''),
          e != null && (r = e.replace(Xp, '$&/') + '/'),
          ss(o, t, r, '', function (u) {
            return u
          }))
        : o != null &&
          (Qd(o) &&
            (o = Cx(
              o,
              r +
                (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(Xp, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), Qp(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + gu(i, s)
      a += ss(i, t, r, l, o)
    }
  else if (((l = kx(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + gu(i, s++)), (a += ss(i, t, r, l, o))
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
function za(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    ss(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function Tx(e) {
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
var qe = { current: null },
  ls = { transition: null },
  Px = { ReactCurrentDispatcher: qe, ReactCurrentBatchConfig: ls, ReactCurrentOwner: Yd }
W.Children = {
  map: za,
  forEach: function (e, t, r) {
    za(
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
      za(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      za(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Qd(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
W.Component = zo
W.Fragment = hx
W.Profiler = gx
W.PureComponent = Gd
W.StrictMode = mx
W.Suspense = bx
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Px
W.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var n = y0({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Yd.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      b0.call(t, l) &&
        !x0.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    n.children = s
  }
  return { $$typeof: ua, type: e.type, key: o, ref: i, props: n, _owner: a }
}
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: vx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yx, _context: e }),
    (e.Consumer = e)
  )
}
W.createElement = w0
W.createFactory = function (e) {
  var t = w0.bind(null, e)
  return (t.type = e), t
}
W.createRef = function () {
  return { current: null }
}
W.forwardRef = function (e) {
  return { $$typeof: Sx, render: e }
}
W.isValidElement = Qd
W.lazy = function (e) {
  return { $$typeof: wx, _payload: { _status: -1, _result: e }, _init: Tx }
}
W.memo = function (e, t) {
  return { $$typeof: xx, type: e, compare: t === void 0 ? null : t }
}
W.startTransition = function (e) {
  var t = ls.transition
  ls.transition = {}
  try {
    e()
  } finally {
    ls.transition = t
  }
}
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
W.useCallback = function (e, t) {
  return qe.current.useCallback(e, t)
}
W.useContext = function (e) {
  return qe.current.useContext(e)
}
W.useDebugValue = function () {}
W.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e)
}
W.useEffect = function (e, t) {
  return qe.current.useEffect(e, t)
}
W.useId = function () {
  return qe.current.useId()
}
W.useImperativeHandle = function (e, t, r) {
  return qe.current.useImperativeHandle(e, t, r)
}
W.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t)
}
W.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t)
}
W.useMemo = function (e, t) {
  return qe.current.useMemo(e, t)
}
W.useReducer = function (e, t, r) {
  return qe.current.useReducer(e, t, r)
}
W.useRef = function (e) {
  return qe.current.useRef(e)
}
W.useState = function (e) {
  return qe.current.useState(e)
}
W.useSyncExternalStore = function (e, t, r) {
  return qe.current.useSyncExternalStore(e, t, r)
}
W.useTransition = function () {
  return qe.current.useTransition()
}
W.version = '18.2.0'
;(function (e) {
  e.exports = W
})(fx)
const An = cx(k),
  qp = ux({ __proto__: null, default: An }, [k])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ex = k,
  $x = Symbol.for('react.element'),
  Ax = Symbol.for('react.fragment'),
  Rx = Object.prototype.hasOwnProperty,
  zx = Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mx = { key: !0, ref: !0, __self: !0, __source: !0 }
function k0(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) Rx.call(t, n) && !Mx.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: $x, type: e, key: i, ref: a, props: o, _owner: zx.current }
}
gl.Fragment = Ax
gl.jsx = k0
gl.jsxs = k0
;(function (e) {
  e.exports = gl
})(dx)
const Lx = Ai.Fragment,
  R = Ai.jsx,
  ar = Ai.jsxs
function Dx(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function Fx(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Ix = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fx(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = Dx(o)
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
  $s = '-moz-',
  X = '-webkit-',
  C0 = 'comm',
  Xd = 'rule',
  qd = 'decl',
  Bx = '@import',
  _0 = '@keyframes',
  Vx = Math.abs,
  yl = String.fromCharCode,
  Ox = Object.assign
function Nx(e, t) {
  return Fe(e, 0) ^ 45
    ? (((((((t << 2) ^ Fe(e, 0)) << 2) ^ Fe(e, 1)) << 2) ^ Fe(e, 2)) << 2) ^ Fe(e, 3)
    : 0
}
function T0(e) {
  return e.trim()
}
function jx(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function Z(e, t, r) {
  return e.replace(t, r)
}
function Sc(e, t) {
  return e.indexOf(t)
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0
}
function Ri(e, t, r) {
  return e.slice(t, r)
}
function Zt(e) {
  return e.length
}
function Zd(e) {
  return e.length
}
function Ma(e, t) {
  return t.push(e), e
}
function Wx(e, t) {
  return e.map(t).join('')
}
var vl = 1,
  wo = 1,
  P0 = 0,
  st = 0,
  ke = 0,
  Mo = ''
function Sl(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: vl,
    column: wo,
    length: a,
    return: '',
  }
}
function No(e, t) {
  return Ox(Sl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function Ux() {
  return ke
}
function Hx() {
  return (ke = st > 0 ? Fe(Mo, --st) : 0), wo--, ke === 10 && ((wo = 1), vl--), ke
}
function pt() {
  return (ke = st < P0 ? Fe(Mo, st++) : 0), wo++, ke === 10 && ((wo = 1), vl++), ke
}
function tr() {
  return Fe(Mo, st)
}
function us() {
  return st
}
function ca(e, t) {
  return Ri(Mo, e, t)
}
function zi(e) {
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
function E0(e) {
  return (vl = wo = 1), (P0 = Zt((Mo = e))), (st = 0), []
}
function $0(e) {
  return (Mo = ''), e
}
function cs(e) {
  return T0(ca(st - 1, bc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Gx(e) {
  for (; (ke = tr()) && ke < 33; ) pt()
  return zi(e) > 2 || zi(ke) > 3 ? '' : ' '
}
function Kx(e, t) {
  for (; --t && pt() && !(ke < 48 || ke > 102 || (ke > 57 && ke < 65) || (ke > 70 && ke < 97)); );
  return ca(e, us() + (t < 6 && tr() == 32 && pt() == 32))
}
function bc(e) {
  for (; pt(); )
    switch (ke) {
      case e:
        return st
      case 34:
      case 39:
        e !== 34 && e !== 39 && bc(ke)
        break
      case 40:
        e === 41 && bc(e)
        break
      case 92:
        pt()
        break
    }
  return st
}
function Yx(e, t) {
  for (; pt() && e + ke !== 47 + 10; ) if (e + ke === 42 + 42 && tr() === 47) break
  return '/*' + ca(t, st - 1) + '*' + yl(e === 47 ? e : pt())
}
function Qx(e) {
  for (; !zi(tr()); ) pt()
  return ca(e, st)
}
function Xx(e) {
  return $0(ds('', null, null, null, [''], (e = E0(e)), 0, [0], e))
}
function ds(e, t, r, n, o, i, a, s, l) {
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
      $ = n,
      P = g;
    C;

  )
    switch (((v = p), (p = pt()))) {
      case 40:
        if (v != 108 && Fe(P, d - 1) == 58) {
          Sc((P += Z(cs(p), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        P += cs(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        P += Gx(v)
        break
      case 92:
        P += Kx(us() - 1, 7)
        continue
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            Ma(qx(Yx(pt(), us()), t, r), l)
            break
          default:
            P += '/'
        }
        break
      case 123 * S:
        s[u++] = Zt(P) * m
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0
          case 59 + c:
            h > 0 &&
              Zt(P) - d &&
              Ma(h > 32 ? Jp(P + ';', n, r, d - 1) : Jp(Z(P, ' ', '') + ';', n, r, d - 2), l)
            break
          case 59:
            P += ';'
          default:
            if ((Ma(($ = Zp(P, t, r, u, c, o, s, g, (w = []), (T = []), d)), i), p === 123))
              if (c === 0) ds(P, t, $, $, w, i, d, s, T)
              else
                switch (f === 99 && Fe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    ds(
                      e,
                      $,
                      $,
                      n && Ma(Zp(e, $, $, 0, 0, o, s, g, o, (w = []), d), T),
                      o,
                      T,
                      d,
                      s,
                      n ? w : T
                    )
                    break
                  default:
                    ds(P, $, $, $, [''], T, 0, s, T)
                }
        }
        ;(u = c = h = 0), (S = m = 1), (g = P = ''), (d = a)
        break
      case 58:
        ;(d = 1 + Zt(P)), (h = v)
      default:
        if (S < 1) {
          if (p == 123) --S
          else if (p == 125 && S++ == 0 && Hx() == 125) continue
        }
        switch (((P += yl(p)), p * S)) {
          case 38:
            m = c > 0 ? 1 : ((P += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Zt(P) - 1) * m), (m = 1)
            break
          case 64:
            tr() === 45 && (P += cs(pt())), (f = tr()), (c = d = Zt((g = P += Qx(us())))), p++
            break
          case 45:
            v === 45 && Zt(P) == 2 && (S = 0)
        }
    }
  return i
}
function Zp(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [''], h = Zd(f), v = 0, S = 0, C = 0; v < n; ++v)
    for (var m = 0, p = Ri(e, d + 1, (d = Vx((S = a[v])))), g = e; m < h; ++m)
      (g = T0(S > 0 ? f[m] + ' ' + p : Z(p, /&\f/g, f[m]))) && (l[C++] = g)
  return Sl(e, t, r, o === 0 ? Xd : s, l, u, c)
}
function qx(e, t, r) {
  return Sl(e, t, r, C0, yl(Ux()), Ri(e, 2, -2), 0)
}
function Jp(e, t, r, n) {
  return Sl(e, t, r, qd, Ri(e, 0, n), Ri(e, n + 1, -1), n)
}
function co(e, t) {
  for (var r = '', n = Zd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function Zx(e, t, r, n) {
  switch (e.type) {
    case Bx:
    case qd:
      return (e.return = e.return || e.value)
    case C0:
      return ''
    case _0:
      return (e.return = e.value + '{' + co(e.children, n) + '}')
    case Xd:
      e.value = e.props.join(',')
  }
  return Zt((r = co(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function Jx(e) {
  var t = Zd(e)
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
    return a
  }
}
function ew(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var eh = function (t) {
  var r = new WeakMap()
  return function (n) {
    if (r.has(n)) return r.get(n)
    var o = t(n)
    return r.set(n, o), o
  }
}
function A0(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var tw = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = tr()), o === 38 && i === 12 && (r[n] = 1), !zi(i); ) pt()
    return ca(t, st)
  },
  rw = function (t, r) {
    var n = -1,
      o = 44
    do
      switch (zi(o)) {
        case 0:
          o === 38 && tr() === 12 && (r[n] = 1), (t[n] += tw(st - 1, r, n))
          break
        case 2:
          t[n] += cs(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++n] = tr() === 58 ? '&\f' : ''), (r[n] = t[n].length)
            break
          }
        default:
          t[n] += yl(o)
      }
    while ((o = pt()))
    return t
  },
  nw = function (t, r) {
    return $0(rw(E0(t), r))
  },
  th = new WeakMap(),
  ow = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !th.get(n)) && !o) {
        th.set(t, !0)
        for (var i = [], a = nw(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l]
      }
    }
  },
  iw = function (t) {
    if (t.type === 'decl') {
      var r = t.value
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function R0(e, t) {
  switch (Nx(e, t)) {
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
      return X + e + $s + e + je + e + e
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
      if (Zt(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45) break
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + X + '$2-$3$1' + $s + (Fe(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Sc(e, 'stretch') ? R0(Z(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Fe(e, t + 1) !== 115) break
    case 6444:
      switch (Fe(e, Zt(e) - 3 - (~Sc(e, '!important') && 10))) {
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
var aw = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case qd:
          t.return = R0(t.value, t.length)
          break
        case _0:
          return co([No(t, { value: Z(t.value, '@', '@' + X) })], o)
        case Xd:
          if (t.length)
            return Wx(t.props, function (i) {
              switch (jx(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return co([No(t, { props: [Z(i, /:(read-\w+)/, ':' + $s + '$1')] })], o)
                case '::placeholder':
                  return co(
                    [
                      No(t, { props: [Z(i, /:(plac\w+)/, ':' + X + 'input-$1')] }),
                      No(t, { props: [Z(i, /:(plac\w+)/, ':' + $s + '$1')] }),
                      No(t, { props: [Z(i, /:(plac\w+)/, je + 'input-$1')] }),
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  sw = [aw],
  lw = function (t) {
    var r = t.key
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(n, function (S) {
        var C = S.getAttribute('data-emotion')
        C.indexOf(' ') !== -1 && (document.head.appendChild(S), S.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || sw,
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
      u = [ow, iw]
    {
      var c,
        d = [
          Zx,
          ew(function (S) {
            c.insert(S)
          }),
        ],
        f = Jx(u.concat(o, d)),
        h = function (C) {
          return co(Xx(C), f)
        }
      l = function (C, m, p, g) {
        ;(c = p), h(C ? C + '{' + m.styles + '}' : m.styles), g && (v.inserted[m.name] = !0)
      }
    }
    var v = {
      key: r,
      sheet: new Ix({
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
function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    As.apply(this, arguments)
  )
}
var xc = {},
  uw = {
    get exports() {
      return xc
    },
    set exports(e) {
      xc = e
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
 */ var Me = typeof Symbol == 'function' && Symbol.for,
  Jd = Me ? Symbol.for('react.element') : 60103,
  ef = Me ? Symbol.for('react.portal') : 60106,
  bl = Me ? Symbol.for('react.fragment') : 60107,
  xl = Me ? Symbol.for('react.strict_mode') : 60108,
  wl = Me ? Symbol.for('react.profiler') : 60114,
  kl = Me ? Symbol.for('react.provider') : 60109,
  Cl = Me ? Symbol.for('react.context') : 60110,
  tf = Me ? Symbol.for('react.async_mode') : 60111,
  _l = Me ? Symbol.for('react.concurrent_mode') : 60111,
  Tl = Me ? Symbol.for('react.forward_ref') : 60112,
  Pl = Me ? Symbol.for('react.suspense') : 60113,
  cw = Me ? Symbol.for('react.suspense_list') : 60120,
  El = Me ? Symbol.for('react.memo') : 60115,
  $l = Me ? Symbol.for('react.lazy') : 60116,
  dw = Me ? Symbol.for('react.block') : 60121,
  fw = Me ? Symbol.for('react.fundamental') : 60117,
  pw = Me ? Symbol.for('react.responder') : 60118,
  hw = Me ? Symbol.for('react.scope') : 60119
function St(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Jd:
        switch (((e = e.type), e)) {
          case tf:
          case _l:
          case bl:
          case wl:
          case xl:
          case Pl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cl:
              case Tl:
              case $l:
              case El:
              case kl:
                return e
              default:
                return t
            }
        }
      case ef:
        return t
    }
  }
}
function z0(e) {
  return St(e) === _l
}
te.AsyncMode = tf
te.ConcurrentMode = _l
te.ContextConsumer = Cl
te.ContextProvider = kl
te.Element = Jd
te.ForwardRef = Tl
te.Fragment = bl
te.Lazy = $l
te.Memo = El
te.Portal = ef
te.Profiler = wl
te.StrictMode = xl
te.Suspense = Pl
te.isAsyncMode = function (e) {
  return z0(e) || St(e) === tf
}
te.isConcurrentMode = z0
te.isContextConsumer = function (e) {
  return St(e) === Cl
}
te.isContextProvider = function (e) {
  return St(e) === kl
}
te.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jd
}
te.isForwardRef = function (e) {
  return St(e) === Tl
}
te.isFragment = function (e) {
  return St(e) === bl
}
te.isLazy = function (e) {
  return St(e) === $l
}
te.isMemo = function (e) {
  return St(e) === El
}
te.isPortal = function (e) {
  return St(e) === ef
}
te.isProfiler = function (e) {
  return St(e) === wl
}
te.isStrictMode = function (e) {
  return St(e) === xl
}
te.isSuspense = function (e) {
  return St(e) === Pl
}
te.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === bl ||
    e === _l ||
    e === wl ||
    e === xl ||
    e === Pl ||
    e === cw ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === $l ||
        e.$$typeof === El ||
        e.$$typeof === kl ||
        e.$$typeof === Cl ||
        e.$$typeof === Tl ||
        e.$$typeof === fw ||
        e.$$typeof === pw ||
        e.$$typeof === hw ||
        e.$$typeof === dw))
  )
}
te.typeOf = St
;(function (e) {
  e.exports = te
})(uw)
var M0 = xc,
  mw = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  gw = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  L0 = {}
L0[M0.ForwardRef] = mw
L0[M0.Memo] = gw
var yw = !0
function vw(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var D0 = function (t, r, n) {
    var o = t.key + '-' + r.name
    ;(n === !1 || yw === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
  },
  F0 = function (t, r, n) {
    D0(t, r, n)
    var o = t.key + '-' + r.name
    if (t.inserted[r.name] === void 0) {
      var i = r
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function Sw(e) {
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
var bw = {
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
  xw = /[A-Z]|^ms/g,
  ww = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  I0 = function (t) {
    return t.charCodeAt(1) === 45
  },
  rh = function (t) {
    return t != null && typeof t != 'boolean'
  },
  yu = A0(function (e) {
    return I0(e) ? e : e.replace(xw, '-$&').toLowerCase()
  }),
  nh = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(ww, function (n, o, i) {
            return (Jt = { name: o, styles: i, next: Jt }), o
          })
    }
    return bw[t] !== 1 && !I0(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r
  }
function Mi(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) return r
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (Jt = { name: r.name, styles: r.styles, next: Jt }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; ) (Jt = { name: n.name, styles: n.styles, next: Jt }), (n = n.next)
        var o = r.styles + ';'
        return o
      }
      return kw(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var i = Jt,
          a = r(e)
        return (Jt = i), Mi(e, t, a)
      }
      break
    }
  }
  if (t == null) return r
  var s = t[r]
  return s !== void 0 ? s : r
}
function kw(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Mi(e, t, r[o]) + ';'
  else
    for (var i in r) {
      var a = r[i]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : rh(a) && (n += yu(i) + ':' + nh(i, a) + ';')
      else if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++) rh(a[s]) && (n += yu(i) + ':' + nh(i, a[s]) + ';')
      else {
        var l = Mi(e, t, a)
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += yu(i) + ':' + l + ';'
            break
          }
          default:
            n += i + '{' + l + '}'
        }
      }
    }
  return n
}
var oh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Jt,
  rf = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0]
    var o = !0,
      i = ''
    Jt = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((o = !1), (i += Mi(n, r, a))) : (i += a[0])
    for (var s = 1; s < t.length; s++) (i += Mi(n, r, t[s])), o && (i += a[s])
    oh.lastIndex = 0
    for (var l = '', u; (u = oh.exec(i)) !== null; ) l += '-' + u[1]
    var c = Sw(i) + l
    return { name: c, styles: i, next: Jt }
  },
  Cw = function (t) {
    return t()
  },
  B0 = qp['useInsertionEffect'] ? qp['useInsertionEffect'] : !1,
  _w = B0 || Cw,
  ih = B0 || k.useLayoutEffect,
  V0 = k.createContext(typeof HTMLElement < 'u' ? lw({ key: 'css' }) : null)
V0.Provider
var O0 = function (t) {
    return k.forwardRef(function (r, n) {
      var o = k.useContext(V0)
      return t(r, o, n)
    })
  },
  Li = k.createContext({}),
  Tw = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t)
      return n
    }
    return As({}, t, r)
  },
  Pw = eh(function (e) {
    return eh(function (t) {
      return Tw(e, t)
    })
  }),
  Ew = function (t) {
    var r = k.useContext(Li)
    return (
      t.theme !== r && (r = Pw(r)(t.theme)), k.createElement(Li.Provider, { value: r }, t.children)
    )
  },
  Al = O0(function (e, t) {
    var r = e.styles,
      n = rf([r], void 0, k.useContext(Li)),
      o = k.useRef()
    return (
      ih(
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
      ih(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1]
          if (s) {
            i[1] = !1
            return
          }
          if ((n.next !== void 0 && F0(t, n.next, !0), a.tags.length)) {
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
function $w() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return rf(t)
}
var Aw = function () {
    var t = $w.apply(void 0, arguments),
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
  N0 = String.raw,
  j0 = N0`
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
  Rw = () => R(Al, { styles: j0 }),
  zw = ({ scope: e = '' }) =>
    R(Al, {
      styles: N0`
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

      ${j0}
    `,
    })
function Mw(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function Lo(e = {}) {
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
      const d = new Error(i ?? Mw(n, o))
      throw (
        ((d.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, d, l), d)
      )
    }
    return c
  }
  return [s.Provider, l, s]
}
var [Lw, Dw] = Lo({ strict: !1, name: 'PortalManagerContext' })
function W0(e) {
  const { children: t, zIndex: r } = e
  return R(Lw, { value: { zIndex: r }, children: t })
}
W0.displayName = 'PortalManager'
var Di = globalThis != null && globalThis.document ? k.useLayoutEffect : k.useEffect,
  Fi = {},
  Fw = {
    get exports() {
      return Fi
    },
    set exports(e) {
      Fi = e
    },
  },
  bt = {},
  wc = {},
  Iw = {
    get exports() {
      return wc
    },
    set exports(e) {
      wc = e
    },
  },
  U0 = {}
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
        oe = z[O]
      if (0 < o(oe, V)) (z[O] = V), (z[N] = oe), (N = O)
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
      e: for (var O = 0, oe = z.length, G = oe >>> 1; O < G; ) {
        var ut = 2 * (O + 1) - 1,
          Pr = z[ut],
          Te = ut + 1,
          Ht = z[Te]
        if (0 > o(Pr, N))
          Te < oe && 0 > o(Ht, Pr)
            ? ((z[O] = Ht), (z[Te] = N), (O = Te))
            : ((z[O] = Pr), (z[ut] = N), (O = ut))
        else if (Te < oe && 0 > o(Ht, N)) (z[O] = Ht), (z[Te] = N), (O = Te)
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
      if (r(l) !== null) (v = !0), et(T)
      else {
        var V = r(u)
        V !== null && wt(w, V.startTime - z)
      }
  }
  function T(z, V) {
    ;(v = !1), S && ((S = !1), m(E), (E = -1)), (h = !0)
    var N = f
    try {
      for (g(V), d = r(l); d !== null && (!(d.expirationTime > V) || (z && !pe())); ) {
        var O = d.callback
        if (typeof O == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var oe = O(d.expirationTime <= V)
          ;(V = e.unstable_now()),
            typeof oe == 'function' ? (d.callback = oe) : d === r(l) && n(l),
            g(V)
        } else n(l)
        d = r(l)
      }
      if (d !== null) var G = !0
      else {
        var ut = r(u)
        ut !== null && wt(w, ut.startTime - V), (G = !1)
      }
      return G
    } finally {
      ;(d = null), (f = N), (h = !1)
    }
  }
  var $ = !1,
    P = null,
    E = -1,
    I = 5,
    D = -1
  function pe() {
    return !(e.unstable_now() - D < I)
  }
  function Ve() {
    if (P !== null) {
      var z = e.unstable_now()
      D = z
      var V = !0
      try {
        V = P(!0, z)
      } finally {
        V ? Je() : (($ = !1), (P = null))
      }
    } else $ = !1
  }
  var Je
  if (typeof p == 'function')
    Je = function () {
      p(Ve)
    }
  else if (typeof MessageChannel < 'u') {
    var he = new MessageChannel(),
      me = he.port2
    ;(he.port1.onmessage = Ve),
      (Je = function () {
        me.postMessage(null)
      })
  } else
    Je = function () {
      C(Ve, 0)
    }
  function et(z) {
    ;(P = z), $ || (($ = !0), Je())
  }
  function wt(z, V) {
    E = C(function () {
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
      v || h || ((v = !0), et(T))
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < z ? Math.floor(1e3 / z) : 5)
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
          var oe = -1
          break
        case 2:
          oe = 250
          break
        case 5:
          oe = 1073741823
          break
        case 4:
          oe = 1e4
          break
        default:
          oe = 5e3
      }
      return (
        (oe = N + oe),
        (z = {
          id: c++,
          callback: V,
          priorityLevel: z,
          startTime: N,
          expirationTime: oe,
          sortIndex: -1,
        }),
        N > O
          ? ((z.sortIndex = N),
            t(u, z),
            r(l) === null && z === r(u) && (S ? (m(E), (E = -1)) : (S = !0), wt(w, N - O)))
          : ((z.sortIndex = oe), t(l, z), v || h || ((v = !0), et(T))),
        z
      )
    }),
    (e.unstable_shouldYield = pe),
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
})(U0)
;(function (e) {
  e.exports = U0
})(Iw)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0 = k,
  yt = wc
function A(e) {
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
var G0 = new Set(),
  Ii = {}
function In(e, t) {
  ko(e, t), ko(e + 'Capture', t)
}
function ko(e, t) {
  for (Ii[e] = t, e = 0; e < t.length; e++) G0.add(t[e])
}
var xr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  kc = Object.prototype.hasOwnProperty,
  Bw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ah = {},
  sh = {}
function Vw(e) {
  return kc.call(sh, e) ? !0 : kc.call(ah, e) ? !1 : Bw.test(e) ? (sh[e] = !0) : ((ah[e] = !0), !1)
}
function Ow(e, t, r, n) {
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
function Nw(e, t, r, n) {
  if (t === null || typeof t > 'u' || Ow(e, t, r, n)) return !0
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
function Ze(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var Be = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Be[e] = new Ze(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Be[t] = new Ze(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Be[e] = new Ze(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Be[e] = new Ze(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Be[e] = new Ze(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var nf = /[\-:]([a-z])/g
function of(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nf, of)
    Be[t] = new Ze(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nf, of)
    Be[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(nf, of)
  Be[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Be.xlinkHref = new Ze('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function af(e, t, r, n) {
  var o = Be.hasOwnProperty(t) ? Be[t] : null
  ;(o !== null
    ? o.type !== 0
    : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Nw(t, r, o, n) && (r = null),
    n || o === null
      ? Vw(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
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
var Tr = H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  La = Symbol.for('react.element'),
  Qn = Symbol.for('react.portal'),
  Xn = Symbol.for('react.fragment'),
  sf = Symbol.for('react.strict_mode'),
  Cc = Symbol.for('react.profiler'),
  K0 = Symbol.for('react.provider'),
  Y0 = Symbol.for('react.context'),
  lf = Symbol.for('react.forward_ref'),
  _c = Symbol.for('react.suspense'),
  Tc = Symbol.for('react.suspense_list'),
  uf = Symbol.for('react.memo'),
  Lr = Symbol.for('react.lazy'),
  Q0 = Symbol.for('react.offscreen'),
  lh = Symbol.iterator
function jo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lh && e[lh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Se = Object.assign,
  vu
function ei(e) {
  if (vu === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      vu = (t && t[1]) || ''
    }
  return (
    `
` +
    vu +
    e
  )
}
var Su = !1
function bu(e, t) {
  if (!e || Su) return ''
  Su = !0
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
    ;(Su = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? ei(e) : ''
}
function jw(e) {
  switch (e.tag) {
    case 5:
      return ei(e.type)
    case 16:
      return ei('Lazy')
    case 13:
      return ei('Suspense')
    case 19:
      return ei('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = bu(e.type, !1)), e
    case 11:
      return (e = bu(e.type.render, !1)), e
    case 1:
      return (e = bu(e.type, !0)), e
    default:
      return ''
  }
}
function Pc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Xn:
      return 'Fragment'
    case Qn:
      return 'Portal'
    case Cc:
      return 'Profiler'
    case sf:
      return 'StrictMode'
    case _c:
      return 'Suspense'
    case Tc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Y0:
        return (e.displayName || 'Context') + '.Consumer'
      case K0:
        return (e._context.displayName || 'Context') + '.Provider'
      case lf:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case uf:
        return (t = e.displayName || null), t !== null ? t : Pc(e.type) || 'Memo'
      case Lr:
        ;(t = e._payload), (e = e._init)
        try {
          return Pc(e(t))
        } catch {}
    }
  return null
}
function Ww(e) {
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
      return Pc(t)
    case 8:
      return t === sf ? 'StrictMode' : 'Mode'
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
function en(e) {
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
function X0(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function Uw(e) {
  var t = X0(e) ? 'checked' : 'value',
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
function Da(e) {
  e._valueTracker || (e._valueTracker = Uw(e))
}
function q0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = X0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function Rs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Ec(e, t) {
  var r = t.checked
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function uh(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = en(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function Z0(e, t) {
  ;(t = t.checked), t != null && af(e, 'checked', t, !1)
}
function $c(e, t) {
  Z0(e, t)
  var r = en(t.value),
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
    ? Ac(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Ac(e, t.type, en(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ch(e, t, r) {
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
function Ac(e, t, r) {
  ;(t !== 'number' || Rs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var ti = Array.isArray
function fo(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + en(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Rc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91))
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function dh(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(A(92))
      if (ti(r)) {
        if (1 < r.length) throw Error(A(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: en(r) }
}
function J0(e, t) {
  var r = en(t.value),
    n = en(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function fh(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function ey(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function zc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ey(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Fa,
  ty = (function (e) {
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
        Fa = Fa || document.createElement('div'),
          Fa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Fa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Bi(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ui = {
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
  Hw = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ui).forEach(function (e) {
  Hw.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e])
  })
})
function ry(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (ui.hasOwnProperty(e) && ui[e])
    ? ('' + t).trim()
    : t + 'px'
}
function ny(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = ry(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var Gw = Se(
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
function Mc(e, t) {
  if (t) {
    if (Gw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(A(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(A(62))
  }
}
function Lc(e, t) {
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
var Dc = null
function cf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Fc = null,
  po = null,
  ho = null
function ph(e) {
  if ((e = pa(e))) {
    if (typeof Fc != 'function') throw Error(A(280))
    var t = e.stateNode
    t && ((t = Dl(t)), Fc(e.stateNode, e.type, t))
  }
}
function oy(e) {
  po ? (ho ? ho.push(e) : (ho = [e])) : (po = e)
}
function iy() {
  if (po) {
    var e = po,
      t = ho
    if (((ho = po = null), ph(e), t)) for (e = 0; e < t.length; e++) ph(t[e])
  }
}
function ay(e, t) {
  return e(t)
}
function sy() {}
var xu = !1
function ly(e, t, r) {
  if (xu) return e(t, r)
  xu = !0
  try {
    return ay(e, t, r)
  } finally {
    ;(xu = !1), (po !== null || ho !== null) && (sy(), iy())
  }
}
function Vi(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = Dl(r)
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
  if (r && typeof r != 'function') throw Error(A(231, t, typeof r))
  return r
}
var Ic = !1
if (xr)
  try {
    var Wo = {}
    Object.defineProperty(Wo, 'passive', {
      get: function () {
        Ic = !0
      },
    }),
      window.addEventListener('test', Wo, Wo),
      window.removeEventListener('test', Wo, Wo)
  } catch {
    Ic = !1
  }
function Kw(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var ci = !1,
  zs = null,
  Ms = !1,
  Bc = null,
  Yw = {
    onError: function (e) {
      ;(ci = !0), (zs = e)
    },
  }
function Qw(e, t, r, n, o, i, a, s, l) {
  ;(ci = !1), (zs = null), Kw.apply(Yw, arguments)
}
function Xw(e, t, r, n, o, i, a, s, l) {
  if ((Qw.apply(this, arguments), ci)) {
    if (ci) {
      var u = zs
      ;(ci = !1), (zs = null)
    } else throw Error(A(198))
    Ms || ((Ms = !0), (Bc = u))
  }
}
function Bn(e) {
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
function uy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function hh(e) {
  if (Bn(e) !== e) throw Error(A(188))
}
function qw(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Bn(e)), t === null)) throw Error(A(188))
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
        if (i === r) return hh(o), e
        if (i === n) return hh(o), t
        i = i.sibling
      }
      throw Error(A(188))
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
        if (!a) throw Error(A(189))
      }
    }
    if (r.alternate !== n) throw Error(A(190))
  }
  if (r.tag !== 3) throw Error(A(188))
  return r.stateNode.current === r ? e : t
}
function cy(e) {
  return (e = qw(e)), e !== null ? dy(e) : null
}
function dy(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = dy(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var fy = yt.unstable_scheduleCallback,
  mh = yt.unstable_cancelCallback,
  Zw = yt.unstable_shouldYield,
  Jw = yt.unstable_requestPaint,
  xe = yt.unstable_now,
  ek = yt.unstable_getCurrentPriorityLevel,
  df = yt.unstable_ImmediatePriority,
  py = yt.unstable_UserBlockingPriority,
  Ls = yt.unstable_NormalPriority,
  tk = yt.unstable_LowPriority,
  hy = yt.unstable_IdlePriority,
  Rl = null,
  rr = null
function rk(e) {
  if (rr && typeof rr.onCommitFiberRoot == 'function')
    try {
      rr.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : ik,
  nk = Math.log,
  ok = Math.LN2
function ik(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nk(e) / ok) | 0)) | 0
}
var Ia = 64,
  Ba = 4194304
function ri(e) {
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
function Ds(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = ri(s)) : ((i &= a), i !== 0 && (n = ri(i)))
  } else (a = r & ~o), a !== 0 ? (n = ri(a)) : i !== 0 && (n = ri(i))
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
      (r = 31 - jt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function ak(e, t) {
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
function sk(e, t) {
  for (
    var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - jt(i),
      s = 1 << a,
      l = o[a]
    l === -1 ? (!(s & r) || s & n) && (o[a] = ak(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
  }
}
function Vc(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function my() {
  var e = Ia
  return (Ia <<= 1), !(Ia & 4194240) && (Ia = 64), e
}
function wu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function da(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = r)
}
function lk(e, t) {
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
    var o = 31 - jt(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function ff(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - jt(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var ee = 0
function gy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var yy,
  pf,
  vy,
  Sy,
  by,
  Oc = !1,
  Va = [],
  Wr = null,
  Ur = null,
  Hr = null,
  Oi = new Map(),
  Ni = new Map(),
  Ir = [],
  uk =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function gh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Wr = null
      break
    case 'dragenter':
    case 'dragleave':
      Ur = null
      break
    case 'mouseover':
    case 'mouseout':
      Hr = null
      break
    case 'pointerover':
    case 'pointerout':
      Oi.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ni.delete(t.pointerId)
  }
}
function Uo(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = pa(t)), t !== null && pf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function ck(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (Wr = Uo(Wr, e, t, r, n, o)), !0
    case 'dragenter':
      return (Ur = Uo(Ur, e, t, r, n, o)), !0
    case 'mouseover':
      return (Hr = Uo(Hr, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Oi.set(i, Uo(Oi.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Ni.set(i, Uo(Ni.get(i) || null, e, t, r, n, o)), !0
  }
  return !1
}
function xy(e) {
  var t = bn(e.target)
  if (t !== null) {
    var r = Bn(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = uy(r)), t !== null)) {
          ;(e.blockedOn = t),
            by(e.priority, function () {
              vy(r)
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
function fs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(Dc = n), r.target.dispatchEvent(n), (Dc = null)
    } else return (t = pa(r)), t !== null && pf(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function yh(e, t, r) {
  fs(e) && r.delete(t)
}
function dk() {
  ;(Oc = !1),
    Wr !== null && fs(Wr) && (Wr = null),
    Ur !== null && fs(Ur) && (Ur = null),
    Hr !== null && fs(Hr) && (Hr = null),
    Oi.forEach(yh),
    Ni.forEach(yh)
}
function Ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oc || ((Oc = !0), yt.unstable_scheduleCallback(yt.unstable_NormalPriority, dk)))
}
function ji(e) {
  function t(o) {
    return Ho(o, e)
  }
  if (0 < Va.length) {
    Ho(Va[0], e)
    for (var r = 1; r < Va.length; r++) {
      var n = Va[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    Wr !== null && Ho(Wr, e),
      Ur !== null && Ho(Ur, e),
      Hr !== null && Ho(Hr, e),
      Oi.forEach(t),
      Ni.forEach(t),
      r = 0;
    r < Ir.length;
    r++
  )
    (n = Ir[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < Ir.length && ((r = Ir[0]), r.blockedOn === null); )
    xy(r), r.blockedOn === null && Ir.shift()
}
var mo = Tr.ReactCurrentBatchConfig,
  Fs = !0
function fk(e, t, r, n) {
  var o = ee,
    i = mo.transition
  mo.transition = null
  try {
    ;(ee = 1), hf(e, t, r, n)
  } finally {
    ;(ee = o), (mo.transition = i)
  }
}
function pk(e, t, r, n) {
  var o = ee,
    i = mo.transition
  mo.transition = null
  try {
    ;(ee = 4), hf(e, t, r, n)
  } finally {
    ;(ee = o), (mo.transition = i)
  }
}
function hf(e, t, r, n) {
  if (Fs) {
    var o = Nc(e, t, r, n)
    if (o === null) zu(e, t, n, Is, r), gh(e, n)
    else if (ck(o, e, t, r, n)) n.stopPropagation()
    else if ((gh(e, n), t & 4 && -1 < uk.indexOf(e))) {
      for (; o !== null; ) {
        var i = pa(o)
        if ((i !== null && yy(i), (i = Nc(e, t, r, n)), i === null && zu(e, t, n, Is, r), i === o))
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else zu(e, t, n, null, r)
  }
}
var Is = null
function Nc(e, t, r, n) {
  if (((Is = null), (e = cf(n)), (e = bn(e)), e !== null))
    if (((t = Bn(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = uy(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Is = e), null
}
function wy(e) {
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
      switch (ek()) {
        case df:
          return 1
        case py:
          return 4
        case Ls:
        case tk:
          return 16
        case hy:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Or = null,
  mf = null,
  ps = null
function ky() {
  if (ps) return ps
  var e,
    t = mf,
    r = t.length,
    n,
    o = 'value' in Or ? Or.value : Or.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (ps = o.slice(e, 1 < n ? 1 - n : void 0))
}
function hs(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Oa() {
  return !0
}
function vh() {
  return !1
}
function xt(e) {
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
        ? Oa
        : vh),
      (this.isPropagationStopped = vh),
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
          (this.isDefaultPrevented = Oa))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Oa))
      },
      persist: function () {},
      isPersistent: Oa,
    }),
    t
  )
}
var Do = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gf = xt(Do),
  fa = Se({}, Do, { view: 0, detail: 0 }),
  hk = xt(fa),
  ku,
  Cu,
  Go,
  zl = Se({}, fa, {
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
    getModifierState: yf,
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
        : (e !== Go &&
            (Go && e.type === 'mousemove'
              ? ((ku = e.screenX - Go.screenX), (Cu = e.screenY - Go.screenY))
              : (Cu = ku = 0),
            (Go = e)),
          ku)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Cu
    },
  }),
  Sh = xt(zl),
  mk = Se({}, zl, { dataTransfer: 0 }),
  gk = xt(mk),
  yk = Se({}, fa, { relatedTarget: 0 }),
  _u = xt(yk),
  vk = Se({}, Do, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sk = xt(vk),
  bk = Se({}, Do, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  xk = xt(bk),
  wk = Se({}, Do, { data: 0 }),
  bh = xt(wk),
  kk = {
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
  Ck = {
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
  _k = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Tk(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = _k[e]) ? !!t[e] : !1
}
function yf() {
  return Tk
}
var Pk = Se({}, fa, {
    key: function (e) {
      if (e.key) {
        var t = kk[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = hs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Ck[e.keyCode] || 'Unidentified'
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
    getModifierState: yf,
    charCode: function (e) {
      return e.type === 'keypress' ? hs(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? hs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Ek = xt(Pk),
  $k = Se({}, zl, {
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
  xh = xt($k),
  Ak = Se({}, fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yf,
  }),
  Rk = xt(Ak),
  zk = Se({}, Do, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mk = xt(zk),
  Lk = Se({}, zl, {
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
  Dk = xt(Lk),
  Fk = [9, 13, 27, 32],
  vf = xr && 'CompositionEvent' in window,
  di = null
xr && 'documentMode' in document && (di = document.documentMode)
var Ik = xr && 'TextEvent' in window && !di,
  Cy = xr && (!vf || (di && 8 < di && 11 >= di)),
  wh = String.fromCharCode(32),
  kh = !1
function _y(e, t) {
  switch (e) {
    case 'keyup':
      return Fk.indexOf(t.keyCode) !== -1
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
function Ty(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var qn = !1
function Bk(e, t) {
  switch (e) {
    case 'compositionend':
      return Ty(t)
    case 'keypress':
      return t.which !== 32 ? null : ((kh = !0), wh)
    case 'textInput':
      return (e = t.data), e === wh && kh ? null : e
    default:
      return null
  }
}
function Vk(e, t) {
  if (qn)
    return e === 'compositionend' || (!vf && _y(e, t))
      ? ((e = ky()), (ps = mf = Or = null), (qn = !1), e)
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
      return Cy && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Ok = {
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
function Ch(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Ok[e.type] : t === 'textarea'
}
function Py(e, t, r, n) {
  oy(n),
    (t = Bs(t, 'onChange')),
    0 < t.length &&
      ((r = new gf('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var fi = null,
  Wi = null
function Nk(e) {
  By(e, 0)
}
function Ml(e) {
  var t = eo(e)
  if (q0(t)) return e
}
function jk(e, t) {
  if (e === 'change') return t
}
var Ey = !1
if (xr) {
  var Tu
  if (xr) {
    var Pu = 'oninput' in document
    if (!Pu) {
      var _h = document.createElement('div')
      _h.setAttribute('oninput', 'return;'), (Pu = typeof _h.oninput == 'function')
    }
    Tu = Pu
  } else Tu = !1
  Ey = Tu && (!document.documentMode || 9 < document.documentMode)
}
function Th() {
  fi && (fi.detachEvent('onpropertychange', $y), (Wi = fi = null))
}
function $y(e) {
  if (e.propertyName === 'value' && Ml(Wi)) {
    var t = []
    Py(t, Wi, e, cf(e)), ly(Nk, t)
  }
}
function Wk(e, t, r) {
  e === 'focusin'
    ? (Th(), (fi = t), (Wi = r), fi.attachEvent('onpropertychange', $y))
    : e === 'focusout' && Th()
}
function Uk(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ml(Wi)
}
function Hk(e, t) {
  if (e === 'click') return Ml(t)
}
function Gk(e, t) {
  if (e === 'input' || e === 'change') return Ml(t)
}
function Kk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ut = typeof Object.is == 'function' ? Object.is : Kk
function Ui(e, t) {
  if (Ut(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!kc.call(t, o) || !Ut(e[o], t[o])) return !1
  }
  return !0
}
function Ph(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Eh(e, t) {
  var r = Ph(e)
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
    r = Ph(r)
  }
}
function Ay(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ay(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ry() {
  for (var e = window, t = Rs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = Rs(e.document)
  }
  return t
}
function Sf(e) {
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
function Yk(e) {
  var t = Ry(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && Ay(r.ownerDocument.documentElement, r)) {
    if (n !== null && Sf(r)) {
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
          (o = Eh(r, i))
        var a = Eh(r, n)
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
var Qk = xr && 'documentMode' in document && 11 >= document.documentMode,
  Zn = null,
  jc = null,
  pi = null,
  Wc = !1
function $h(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  Wc ||
    Zn == null ||
    Zn !== Rs(n) ||
    ((n = Zn),
    'selectionStart' in n && Sf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (pi && Ui(pi, n)) ||
      ((pi = n),
      (n = Bs(jc, 'onSelect')),
      0 < n.length &&
        ((t = new gf('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Zn))))
}
function Na(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var Jn = {
    animationend: Na('Animation', 'AnimationEnd'),
    animationiteration: Na('Animation', 'AnimationIteration'),
    animationstart: Na('Animation', 'AnimationStart'),
    transitionend: Na('Transition', 'TransitionEnd'),
  },
  Eu = {},
  zy = {}
xr &&
  ((zy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Jn.animationend.animation,
    delete Jn.animationiteration.animation,
    delete Jn.animationstart.animation),
  'TransitionEvent' in window || delete Jn.transitionend.transition)
function Ll(e) {
  if (Eu[e]) return Eu[e]
  if (!Jn[e]) return e
  var t = Jn[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in zy) return (Eu[e] = t[r])
  return e
}
var My = Ll('animationend'),
  Ly = Ll('animationiteration'),
  Dy = Ll('animationstart'),
  Fy = Ll('transitionend'),
  Iy = new Map(),
  Ah =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function on(e, t) {
  Iy.set(e, t), In(t, [e])
}
for (var $u = 0; $u < Ah.length; $u++) {
  var Au = Ah[$u],
    Xk = Au.toLowerCase(),
    qk = Au[0].toUpperCase() + Au.slice(1)
  on(Xk, 'on' + qk)
}
on(My, 'onAnimationEnd')
on(Ly, 'onAnimationIteration')
on(Dy, 'onAnimationStart')
on('dblclick', 'onDoubleClick')
on('focusin', 'onFocus')
on('focusout', 'onBlur')
on(Fy, 'onTransitionEnd')
ko('onMouseEnter', ['mouseout', 'mouseover'])
ko('onMouseLeave', ['mouseout', 'mouseover'])
ko('onPointerEnter', ['pointerout', 'pointerover'])
ko('onPointerLeave', ['pointerout', 'pointerover'])
In('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
In(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
In('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
In('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
In('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var ni =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Zk = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ni))
function Rh(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), Xw(n, t, void 0, e), (e.currentTarget = null)
}
function By(e, t) {
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
          Rh(o, s, u), (i = l)
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
          Rh(o, s, u), (i = l)
        }
    }
  }
  if (Ms) throw ((e = Bc), (Ms = !1), (Bc = null), e)
}
function ie(e, t) {
  var r = t[Yc]
  r === void 0 && (r = t[Yc] = new Set())
  var n = e + '__bubble'
  r.has(n) || (Vy(t, e, 2, !1), r.add(n))
}
function Ru(e, t, r) {
  var n = 0
  t && (n |= 4), Vy(r, e, n, t)
}
var ja = '_reactListening' + Math.random().toString(36).slice(2)
function Hi(e) {
  if (!e[ja]) {
    ;(e[ja] = !0),
      G0.forEach(function (r) {
        r !== 'selectionchange' && (Zk.has(r) || Ru(r, !1, e), Ru(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[ja] || ((t[ja] = !0), Ru('selectionchange', !1, t))
  }
}
function Vy(e, t, r, n) {
  switch (wy(t)) {
    case 1:
      var o = fk
      break
    case 4:
      o = pk
      break
    default:
      o = hf
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !Ic || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function zu(e, t, r, n, o) {
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
          if (((a = bn(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  ly(function () {
    var u = i,
      c = cf(r),
      d = []
    e: {
      var f = Iy.get(e)
      if (f !== void 0) {
        var h = gf,
          v = e
        switch (e) {
          case 'keypress':
            if (hs(r) === 0) break e
          case 'keydown':
          case 'keyup':
            h = Ek
            break
          case 'focusin':
            ;(v = 'focus'), (h = _u)
            break
          case 'focusout':
            ;(v = 'blur'), (h = _u)
            break
          case 'beforeblur':
          case 'afterblur':
            h = _u
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
            h = Sh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = gk
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = Rk
            break
          case My:
          case Ly:
          case Dy:
            h = Sk
            break
          case Fy:
            h = Mk
            break
          case 'scroll':
            h = hk
            break
          case 'wheel':
            h = Dk
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = xk
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = xh
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
              ((g = w), m !== null && ((w = Vi(p, m)), w != null && S.push(Gi(p, w, g)))),
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
          f && r !== Dc && (v = r.relatedTarget || r.fromElement) && (bn(v) || v[wr]))
        )
          break e
        if (
          (h || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((v = r.relatedTarget || r.toElement),
              (h = u),
              (v = v ? bn(v) : null),
              v !== null && ((C = Bn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((S = Sh),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = xh), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (p = 'pointer')),
            (C = h == null ? f : eo(h)),
            (g = v == null ? f : eo(v)),
            (f = new S(w, p + 'leave', h, r, c)),
            (f.target = C),
            (f.relatedTarget = g),
            (w = null),
            bn(c) === u &&
              ((S = new S(m, p + 'enter', v, r, c)),
              (S.target = g),
              (S.relatedTarget = C),
              (w = S)),
            (C = w),
            h && v)
          )
            t: {
              for (S = h, m = v, p = 0, g = S; g; g = Gn(g)) p++
              for (g = 0, w = m; w; w = Gn(w)) g++
              for (; 0 < p - g; ) (S = Gn(S)), p--
              for (; 0 < g - p; ) (m = Gn(m)), g--
              for (; p--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t
                ;(S = Gn(S)), (m = Gn(m))
              }
              S = null
            }
          else S = null
          h !== null && zh(d, f, h, S, !1), v !== null && C !== null && zh(d, C, v, S, !0)
        }
      }
      e: {
        if (
          ((f = u ? eo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var T = jk
        else if (Ch(f))
          if (Ey) T = Gk
          else {
            T = Uk
            var $ = Wk
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (T = Hk)
        if (T && (T = T(e, u))) {
          Py(d, T, r, c)
          break e
        }
        $ && $(e, f, u),
          e === 'focusout' &&
            ($ = f._wrapperState) &&
            $.controlled &&
            f.type === 'number' &&
            Ac(f, 'number', f.value)
      }
      switch ((($ = u ? eo(u) : window), e)) {
        case 'focusin':
          ;(Ch($) || $.contentEditable === 'true') && ((Zn = $), (jc = u), (pi = null))
          break
        case 'focusout':
          pi = jc = Zn = null
          break
        case 'mousedown':
          Wc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Wc = !1), $h(d, r, c)
          break
        case 'selectionchange':
          if (Qk) break
        case 'keydown':
        case 'keyup':
          $h(d, r, c)
      }
      var P
      if (vf)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart'
              break e
            case 'compositionend':
              E = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              E = 'onCompositionUpdate'
              break e
          }
          E = void 0
        }
      else
        qn
          ? _y(e, r) && (E = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (Cy &&
          r.locale !== 'ko' &&
          (qn || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && qn && (P = ky())
            : ((Or = c), (mf = 'value' in Or ? Or.value : Or.textContent), (qn = !0))),
        ($ = Bs(u, E)),
        0 < $.length &&
          ((E = new bh(E, e, null, r, c)),
          d.push({ event: E, listeners: $ }),
          P ? (E.data = P) : ((P = Ty(r)), P !== null && (E.data = P)))),
        (P = Ik ? Bk(e, r) : Vk(e, r)) &&
          ((u = Bs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new bh('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)))
    }
    By(d, t)
  })
}
function Gi(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function Bs(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Vi(e, r)),
      i != null && n.unshift(Gi(e, i, o)),
      (i = Vi(e, t)),
      i != null && n.push(Gi(e, i, o))),
      (e = e.return)
  }
  return n
}
function Gn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function zh(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Vi(r, i)), l != null && a.unshift(Gi(r, l, s)))
        : o || ((l = Vi(r, i)), l != null && a.push(Gi(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var Jk = /\r\n?/g,
  eC = /\u0000|\uFFFD/g
function Mh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Jk,
      `
`
    )
    .replace(eC, '')
}
function Wa(e, t, r) {
  if (((t = Mh(t)), Mh(e) !== t && r)) throw Error(A(425))
}
function Vs() {}
var Uc = null,
  Hc = null
function Gc(e, t) {
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
var Kc = typeof setTimeout == 'function' ? setTimeout : void 0,
  tC = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Lh = typeof Promise == 'function' ? Promise : void 0,
  rC =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Lh < 'u'
      ? function (e) {
          return Lh.resolve(null).then(e).catch(nC)
        }
      : Kc
function nC(e) {
  setTimeout(function () {
    throw e
  })
}
function Mu(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), ji(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  ji(t)
}
function Gr(e) {
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
function Dh(e) {
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
var Fo = Math.random().toString(36).slice(2),
  er = '__reactFiber$' + Fo,
  Ki = '__reactProps$' + Fo,
  wr = '__reactContainer$' + Fo,
  Yc = '__reactEvents$' + Fo,
  oC = '__reactListeners$' + Fo,
  iC = '__reactHandles$' + Fo
function bn(e) {
  var t = e[er]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[wr] || r[er])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Dh(e); e !== null; ) {
          if ((r = e[er])) return r
          e = Dh(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function pa(e) {
  return (
    (e = e[er] || e[wr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function eo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(A(33))
}
function Dl(e) {
  return e[Ki] || null
}
var Qc = [],
  to = -1
function an(e) {
  return { current: e }
}
function se(e) {
  0 > to || ((e.current = Qc[to]), (Qc[to] = null), to--)
}
function ne(e, t) {
  to++, (Qc[to] = e.current), (e.current = t)
}
var tn = {},
  He = an(tn),
  ot = an(!1),
  Rn = tn
function Co(e, t) {
  var r = e.type.contextTypes
  if (!r) return tn
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
function it(e) {
  return (e = e.childContextTypes), e != null
}
function Os() {
  se(ot), se(He)
}
function Fh(e, t, r) {
  if (He.current !== tn) throw Error(A(168))
  ne(He, t), ne(ot, r)
}
function Oy(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error(A(108, Ww(e) || 'Unknown', o))
  return Se({}, r, n)
}
function Ns(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (Rn = He.current),
    ne(He, e),
    ne(ot, ot.current),
    !0
  )
}
function Ih(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(A(169))
  r
    ? ((e = Oy(e, t, Rn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      se(ot),
      se(He),
      ne(He, e))
    : se(ot),
    ne(ot, r)
}
var dr = null,
  Fl = !1,
  Lu = !1
function Ny(e) {
  dr === null ? (dr = [e]) : dr.push(e)
}
function aC(e) {
  ;(Fl = !0), Ny(e)
}
function sn() {
  if (!Lu && dr !== null) {
    Lu = !0
    var e = 0,
      t = ee
    try {
      var r = dr
      for (ee = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(dr = null), (Fl = !1)
    } catch (o) {
      throw (dr !== null && (dr = dr.slice(e + 1)), fy(df, sn), o)
    } finally {
      ;(ee = t), (Lu = !1)
    }
  }
  return null
}
var ro = [],
  no = 0,
  js = null,
  Ws = 0,
  Pt = [],
  Et = 0,
  zn = null,
  pr = 1,
  hr = ''
function hn(e, t) {
  ;(ro[no++] = Ws), (ro[no++] = js), (js = e), (Ws = t)
}
function jy(e, t, r) {
  ;(Pt[Et++] = pr), (Pt[Et++] = hr), (Pt[Et++] = zn), (zn = e)
  var n = pr
  e = hr
  var o = 32 - jt(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - jt(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (pr = (1 << (32 - jt(t) + o)) | (r << o) | n),
      (hr = i + e)
  } else (pr = (1 << i) | (r << o) | n), (hr = e)
}
function bf(e) {
  e.return !== null && (hn(e, 1), jy(e, 1, 0))
}
function xf(e) {
  for (; e === js; ) (js = ro[--no]), (ro[no] = null), (Ws = ro[--no]), (ro[no] = null)
  for (; e === zn; )
    (zn = Pt[--Et]),
      (Pt[Et] = null),
      (hr = Pt[--Et]),
      (Pt[Et] = null),
      (pr = Pt[--Et]),
      (Pt[Et] = null)
}
var ht = null,
  ft = null,
  de = !1,
  Ot = null
function Wy(e, t) {
  var r = $t(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Bh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (ft = Gr(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (ft = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = zn !== null ? { id: pr, overflow: hr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = $t(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ht = e),
            (ft = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Xc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function qc(e) {
  if (de) {
    var t = ft
    if (t) {
      var r = t
      if (!Bh(e, t)) {
        if (Xc(e)) throw Error(A(418))
        t = Gr(r.nextSibling)
        var n = ht
        t && Bh(e, t) ? Wy(n, r) : ((e.flags = (e.flags & -4097) | 2), (de = !1), (ht = e))
      }
    } else {
      if (Xc(e)) throw Error(A(418))
      ;(e.flags = (e.flags & -4097) | 2), (de = !1), (ht = e)
    }
  }
}
function Vh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  ht = e
}
function Ua(e) {
  if (e !== ht) return !1
  if (!de) return Vh(e), (de = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Gc(e.type, e.memoizedProps))),
    t && (t = ft))
  ) {
    if (Xc(e)) throw (Uy(), Error(A(418)))
    for (; t; ) Wy(e, t), (t = Gr(t.nextSibling))
  }
  if ((Vh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              ft = Gr(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      ft = null
    }
  } else ft = ht ? Gr(e.stateNode.nextSibling) : null
  return !0
}
function Uy() {
  for (var e = ft; e; ) e = Gr(e.nextSibling)
}
function _o() {
  ;(ft = ht = null), (de = !1)
}
function wf(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e)
}
var sC = Tr.ReactCurrentBatchConfig
function Bt(e, t) {
  if (e && e.defaultProps) {
    ;(t = Se({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var Us = an(null),
  Hs = null,
  oo = null,
  kf = null
function Cf() {
  kf = oo = Hs = null
}
function _f(e) {
  var t = Us.current
  se(Us), (e._currentValue = t)
}
function Zc(e, t, r) {
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
function go(e, t) {
  ;(Hs = e),
    (kf = oo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0), (e.firstContext = null))
}
function zt(e) {
  var t = e._currentValue
  if (kf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oo === null)) {
      if (Hs === null) throw Error(A(308))
      ;(oo = e), (Hs.dependencies = { lanes: 0, firstContext: e })
    } else oo = oo.next = e
  return t
}
var xn = null
function Tf(e) {
  xn === null ? (xn = [e]) : xn.push(e)
}
function Hy(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), Tf(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    kr(e, n)
  )
}
function kr(e, t) {
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
var Dr = !1
function Pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Gy(e, t) {
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
function yr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Kr(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), K & 2)) {
    var o = n.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), kr(e, r)
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Tf(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    kr(e, r)
  )
}
function ms(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), ff(e, r)
  }
}
function Oh(e, t) {
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
function Gs(e, t, r, n) {
  var o = e.updateQueue
  Dr = !1
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
              Dr = !0
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
    ;(Ln |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function Nh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function')) throw Error(A(191, o))
        o.call(n)
      }
    }
}
var Ky = new H0.Component().refs
function Jc(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Se({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = Qe(),
      o = Qr(e),
      i = yr(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = Kr(e, i, o)),
      t !== null && (Wt(t, e, o, n), ms(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = Qe(),
      o = Qr(e),
      i = yr(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Kr(e, i, o)),
      t !== null && (Wt(t, e, o, n), ms(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = Qe(),
      n = Qr(e),
      o = yr(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Kr(e, o, n)),
      t !== null && (Wt(t, e, n, r), ms(t, e, n))
  },
}
function jh(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ui(r, n) || !Ui(o, i)
      : !0
  )
}
function Yy(e, t, r) {
  var n = !1,
    o = tn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = zt(i))
      : ((o = it(t) ? Rn : He.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Co(e, o) : tn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Il),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Wh(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Il.enqueueReplaceState(t, t.state, null)
}
function ed(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = Ky), Pf(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = zt(i))
    : ((i = it(t) ? Rn : He.current), (o.context = Co(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Jc(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Il.enqueueReplaceState(o, o.state, null),
      Gs(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Ko(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(A(309))
        var n = r.stateNode
      }
      if (!n) throw Error(A(147, e))
      var o = n,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === Ky && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(A(284))
    if (!r._owner) throw Error(A(290, e))
  }
  return e
}
function Ha(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function Uh(e) {
  var t = e._init
  return t(e._payload)
}
function Qy(e) {
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
    return (m = Xr(m, p)), (m.index = 0), (m.sibling = null), m
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
      ? ((p = Nu(g, m.mode, w)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p)
  }
  function l(m, p, g, w) {
    var T = g.type
    return T === Xn
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == 'object' && T !== null && T.$$typeof === Lr && Uh(T) === p.type))
      ? ((w = o(p, g.props)), (w.ref = Ko(m, p, g)), (w.return = m), w)
      : ((w = xs(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Ko(m, p, g)),
        (w.return = m),
        w)
  }
  function u(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ju(g, m.mode, w)), (p.return = m), p)
      : ((p = o(p, g.children || [])), (p.return = m), p)
  }
  function c(m, p, g, w, T) {
    return p === null || p.tag !== 7
      ? ((p = Tn(g, m.mode, w, T)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p)
  }
  function d(m, p, g) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Nu('' + p, m.mode, g)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case La:
          return (
            (g = xs(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Ko(m, null, p)),
            (g.return = m),
            g
          )
        case Qn:
          return (p = ju(p, m.mode, g)), (p.return = m), p
        case Lr:
          var w = p._init
          return d(m, w(p._payload), g)
      }
      if (ti(p) || jo(p)) return (p = Tn(p, m.mode, g, null)), (p.return = m), p
      Ha(m, p)
    }
    return null
  }
  function f(m, p, g, w) {
    var T = p !== null ? p.key : null
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return T !== null ? null : s(m, p, '' + g, w)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case La:
          return g.key === T ? l(m, p, g, w) : null
        case Qn:
          return g.key === T ? u(m, p, g, w) : null
        case Lr:
          return (T = g._init), f(m, p, T(g._payload), w)
      }
      if (ti(g) || jo(g)) return T !== null ? null : c(m, p, g, w, null)
      Ha(m, g)
    }
    return null
  }
  function h(m, p, g, w, T) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(g) || null), s(p, m, '' + w, T)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case La:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, T)
        case Qn:
          return (m = m.get(w.key === null ? g : w.key) || null), u(p, m, w, T)
        case Lr:
          var $ = w._init
          return h(m, p, g, $(w._payload), T)
      }
      if (ti(w) || jo(w)) return (m = m.get(g) || null), c(p, m, w, T, null)
      Ha(p, w)
    }
    return null
  }
  function v(m, p, g, w) {
    for (var T = null, $ = null, P = p, E = (p = 0), I = null; P !== null && E < g.length; E++) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling)
      var D = f(m, P, g[E], w)
      if (D === null) {
        P === null && (P = I)
        break
      }
      e && P && D.alternate === null && t(m, P),
        (p = i(D, p, E)),
        $ === null ? (T = D) : ($.sibling = D),
        ($ = D),
        (P = I)
    }
    if (E === g.length) return r(m, P), de && hn(m, E), T
    if (P === null) {
      for (; E < g.length; E++)
        (P = d(m, g[E], w)),
          P !== null && ((p = i(P, p, E)), $ === null ? (T = P) : ($.sibling = P), ($ = P))
      return de && hn(m, E), T
    }
    for (P = n(m, P); E < g.length; E++)
      (I = h(P, m, E, g[E], w)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? E : I.key),
          (p = i(I, p, E)),
          $ === null ? (T = I) : ($.sibling = I),
          ($ = I))
    return (
      e &&
        P.forEach(function (pe) {
          return t(m, pe)
        }),
      de && hn(m, E),
      T
    )
  }
  function S(m, p, g, w) {
    var T = jo(g)
    if (typeof T != 'function') throw Error(A(150))
    if (((g = T.call(g)), g == null)) throw Error(A(151))
    for (
      var $ = (T = null), P = p, E = (p = 0), I = null, D = g.next();
      P !== null && !D.done;
      E++, D = g.next()
    ) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling)
      var pe = f(m, P, D.value, w)
      if (pe === null) {
        P === null && (P = I)
        break
      }
      e && P && pe.alternate === null && t(m, P),
        (p = i(pe, p, E)),
        $ === null ? (T = pe) : ($.sibling = pe),
        ($ = pe),
        (P = I)
    }
    if (D.done) return r(m, P), de && hn(m, E), T
    if (P === null) {
      for (; !D.done; E++, D = g.next())
        (D = d(m, D.value, w)),
          D !== null && ((p = i(D, p, E)), $ === null ? (T = D) : ($.sibling = D), ($ = D))
      return de && hn(m, E), T
    }
    for (P = n(m, P); !D.done; E++, D = g.next())
      (D = h(P, m, E, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? E : D.key),
          (p = i(D, p, E)),
          $ === null ? (T = D) : ($.sibling = D),
          ($ = D))
    return (
      e &&
        P.forEach(function (Ve) {
          return t(m, Ve)
        }),
      de && hn(m, E),
      T
    )
  }
  function C(m, p, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Xn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case La:
          e: {
            for (var T = g.key, $ = p; $ !== null; ) {
              if ($.key === T) {
                if (((T = g.type), T === Xn)) {
                  if ($.tag === 7) {
                    r(m, $.sibling), (p = o($, g.props.children)), (p.return = m), (m = p)
                    break e
                  }
                } else if (
                  $.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Lr && Uh(T) === $.type)
                ) {
                  r(m, $.sibling),
                    (p = o($, g.props)),
                    (p.ref = Ko(m, $, g)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                r(m, $)
                break
              } else t(m, $)
              $ = $.sibling
            }
            g.type === Xn
              ? ((p = Tn(g.props.children, m.mode, w, g.key)), (p.return = m), (m = p))
              : ((w = xs(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Ko(m, p, g)),
                (w.return = m),
                (m = w))
          }
          return a(m)
        case Qn:
          e: {
            for ($ = g.key; p !== null; ) {
              if (p.key === $)
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
            ;(p = ju(g, m.mode, w)), (p.return = m), (m = p)
          }
          return a(m)
        case Lr:
          return ($ = g._init), C(m, p, $(g._payload), w)
      }
      if (ti(g)) return v(m, p, g, w)
      if (jo(g)) return S(m, p, g, w)
      Ha(m, g)
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        p !== null && p.tag === 6
          ? (r(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
          : (r(m, p), (p = Nu(g, m.mode, w)), (p.return = m), (m = p)),
        a(m))
      : r(m, p)
  }
  return C
}
var To = Qy(!0),
  Xy = Qy(!1),
  ha = {},
  nr = an(ha),
  Yi = an(ha),
  Qi = an(ha)
function wn(e) {
  if (e === ha) throw Error(A(174))
  return e
}
function Ef(e, t) {
  switch ((ne(Qi, t), ne(Yi, e), ne(nr, ha), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zc(t, e))
  }
  se(nr), ne(nr, t)
}
function Po() {
  se(nr), se(Yi), se(Qi)
}
function qy(e) {
  wn(Qi.current)
  var t = wn(nr.current),
    r = zc(t, e.type)
  t !== r && (ne(Yi, e), ne(nr, r))
}
function $f(e) {
  Yi.current === e && (se(nr), se(Yi))
}
var ge = an(0)
function Ks(e) {
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
var Du = []
function Af() {
  for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null
  Du.length = 0
}
var gs = Tr.ReactCurrentDispatcher,
  Fu = Tr.ReactCurrentBatchConfig,
  Mn = 0,
  ve = null,
  Pe = null,
  Ae = null,
  Ys = !1,
  hi = !1,
  Xi = 0,
  lC = 0
function Oe() {
  throw Error(A(321))
}
function Rf(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!Ut(e[r], t[r])) return !1
  return !0
}
function zf(e, t, r, n, o, i) {
  if (
    ((Mn = i),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gs.current = e === null || e.memoizedState === null ? fC : pC),
    (e = r(n, o)),
    hi)
  ) {
    i = 0
    do {
      if (((hi = !1), (Xi = 0), 25 <= i)) throw Error(A(301))
      ;(i += 1), (Ae = Pe = null), (t.updateQueue = null), (gs.current = hC), (e = r(n, o))
    } while (hi)
  }
  if (
    ((gs.current = Qs),
    (t = Pe !== null && Pe.next !== null),
    (Mn = 0),
    (Ae = Pe = ve = null),
    (Ys = !1),
    t)
  )
    throw Error(A(300))
  return e
}
function Mf() {
  var e = Xi !== 0
  return (Xi = 0), e
}
function Qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return Ae === null ? (ve.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae
}
function Mt() {
  if (Pe === null) {
    var e = ve.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Pe.next
  var t = Ae === null ? ve.memoizedState : Ae.next
  if (t !== null) (Ae = t), (Pe = e)
  else {
    if (e === null) throw Error(A(310))
    ;(Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Ae === null ? (ve.memoizedState = Ae = e) : (Ae = Ae.next = e)
  }
  return Ae
}
function qi(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Iu(e) {
  var t = Mt(),
    r = t.queue
  if (r === null) throw Error(A(311))
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
      if ((Mn & c) === c)
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
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d), (ve.lanes |= c), (Ln |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    l === null ? (a = n) : (l.next = s),
      Ut(n, t.memoizedState) || (nt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (ve.lanes |= i), (Ln |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function Bu(e) {
  var t = Mt(),
    r = t.queue
  if (r === null) throw Error(A(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    Ut(i, t.memoizedState) || (nt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function Zy() {}
function Jy(e, t) {
  var r = ve,
    n = Mt(),
    o = t(),
    i = !Ut(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (nt = !0)),
    (n = n.queue),
    Lf(rv.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Zi(9, tv.bind(null, r, n, o, t), void 0, null), ze === null))
      throw Error(A(349))
    Mn & 30 || ev(r, t, o)
  }
  return o
}
function ev(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function tv(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), nv(t) && ov(e)
}
function rv(e, t, r) {
  return r(function () {
    nv(t) && ov(e)
  })
}
function nv(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !Ut(e, r)
  } catch {
    return !0
  }
}
function ov(e) {
  var t = kr(e, 1)
  t !== null && Wt(t, e, 1, -1)
}
function Hh(e) {
  var t = Qt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dC.bind(null, ve, e)),
    [t.memoizedState, e]
  )
}
function Zi(e, t, r, n) {
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
function iv() {
  return Mt().memoizedState
}
function ys(e, t, r, n) {
  var o = Qt()
  ;(ve.flags |= e), (o.memoizedState = Zi(1 | t, r, void 0, n === void 0 ? null : n))
}
function Bl(e, t, r, n) {
  var o = Mt()
  n = n === void 0 ? null : n
  var i = void 0
  if (Pe !== null) {
    var a = Pe.memoizedState
    if (((i = a.destroy), n !== null && Rf(n, a.deps))) {
      o.memoizedState = Zi(t, r, i, n)
      return
    }
  }
  ;(ve.flags |= e), (o.memoizedState = Zi(1 | t, r, i, n))
}
function Gh(e, t) {
  return ys(8390656, 8, e, t)
}
function Lf(e, t) {
  return Bl(2048, 8, e, t)
}
function av(e, t) {
  return Bl(4, 2, e, t)
}
function sv(e, t) {
  return Bl(4, 4, e, t)
}
function lv(e, t) {
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
function uv(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Bl(4, 4, lv.bind(null, t, e), r)
}
function Df() {}
function cv(e, t) {
  var r = Mt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Rf(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function dv(e, t) {
  var r = Mt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Rf(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function fv(e, t, r) {
  return Mn & 21
    ? (Ut(r, t) || ((r = my()), (ve.lanes |= r), (Ln |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = r))
}
function uC(e, t) {
  var r = ee
  ;(ee = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = Fu.transition
  Fu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ee = r), (Fu.transition = n)
  }
}
function pv() {
  return Mt().memoizedState
}
function cC(e, t, r) {
  var n = Qr(e)
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), hv(e)))
    mv(t, r)
  else if (((r = Hy(e, t, r, n)), r !== null)) {
    var o = Qe()
    Wt(r, e, n, o), gv(r, t, n)
  }
}
function dC(e, t, r) {
  var n = Qr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (hv(e)) mv(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), Ut(s, a))) {
          var l = t.interleaved
          l === null ? ((o.next = o), Tf(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = Hy(e, t, o, n)), r !== null && ((o = Qe()), Wt(r, e, n, o), gv(r, t, n))
  }
}
function hv(e) {
  var t = e.alternate
  return e === ve || (t !== null && t === ve)
}
function mv(e, t) {
  hi = Ys = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function gv(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), ff(e, r)
  }
}
var Qs = {
    readContext: zt,
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
  fC = {
    readContext: zt,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: zt,
    useEffect: Gh,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), ys(4194308, 4, lv.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return ys(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return ys(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = Qt()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = Qt()
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
        (e = e.dispatch = cC.bind(null, ve, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Qt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Hh,
    useDebugValue: Df,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e)
    },
    useTransition: function () {
      var e = Hh(!1),
        t = e[0]
      return (e = uC.bind(null, e[1])), (Qt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ve,
        o = Qt()
      if (de) {
        if (r === void 0) throw Error(A(407))
        r = r()
      } else {
        if (((r = t()), ze === null)) throw Error(A(349))
        Mn & 30 || ev(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        Gh(rv.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Zi(9, tv.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = Qt(),
        t = ze.identifierPrefix
      if (de) {
        var r = hr,
          n = pr
        ;(r = (n & ~(1 << (32 - jt(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Xi++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = lC++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  pC = {
    readContext: zt,
    useCallback: cv,
    useContext: zt,
    useEffect: Lf,
    useImperativeHandle: uv,
    useInsertionEffect: av,
    useLayoutEffect: sv,
    useMemo: dv,
    useReducer: Iu,
    useRef: iv,
    useState: function () {
      return Iu(qi)
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Mt()
      return fv(t, Pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Iu(qi)[0],
        t = Mt().memoizedState
      return [e, t]
    },
    useMutableSource: Zy,
    useSyncExternalStore: Jy,
    useId: pv,
    unstable_isNewReconciler: !1,
  },
  hC = {
    readContext: zt,
    useCallback: cv,
    useContext: zt,
    useEffect: Lf,
    useImperativeHandle: uv,
    useInsertionEffect: av,
    useLayoutEffect: sv,
    useMemo: dv,
    useReducer: Bu,
    useRef: iv,
    useState: function () {
      return Bu(qi)
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Mt()
      return Pe === null ? (t.memoizedState = e) : fv(t, Pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Bu(qi)[0],
        t = Mt().memoizedState
      return [e, t]
    },
    useMutableSource: Zy,
    useSyncExternalStore: Jy,
    useId: pv,
    unstable_isNewReconciler: !1,
  }
function Eo(e, t) {
  try {
    var r = '',
      n = t
    do (r += jw(n)), (n = n.return)
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
function Vu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function td(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var mC = typeof WeakMap == 'function' ? WeakMap : Map
function yv(e, t, r) {
  ;(r = yr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      qs || ((qs = !0), (dd = n)), td(e, t)
    }),
    r
  )
}
function vv(e, t, r) {
  ;(r = yr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        td(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        td(e, t), typeof n != 'function' && (Yr === null ? (Yr = new Set([this])) : Yr.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function Kh(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new mC()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = $C.bind(null, e, t, r)), t.then(e, e))
}
function Yh(e) {
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
function Qh(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null ? (r.tag = 17) : ((t = yr(-1, 1)), (t.tag = 2), Kr(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var gC = Tr.ReactCurrentOwner,
  nt = !1
function Ke(e, t, r, n) {
  t.child = e === null ? Xy(t, null, r, n) : To(t, e.child, r, n)
}
function Xh(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    go(t, o),
    (n = zf(e, t, r, n, i, o)),
    (r = Mf()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Cr(e, t, o))
      : (de && r && bf(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  )
}
function qh(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !Wf(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sv(e, t, i, n, o))
      : ((e = xs(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : Ui), r(a, n) && e.ref === t.ref)) return Cr(e, t, o)
  }
  return (t.flags |= 1), (e = Xr(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Sv(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Ui(i, n) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (nt = !0)
      else return (t.lanes = e.lanes), Cr(e, t, o)
  }
  return rd(e, t, r, n, o)
}
function bv(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(ao, dt),
        (dt |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ne(ao, dt),
          (dt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ne(ao, dt),
        (dt |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), ne(ao, dt), (dt |= n)
  return Ke(e, t, o, r), t.child
}
function xv(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function rd(e, t, r, n, o) {
  var i = it(r) ? Rn : He.current
  return (
    (i = Co(t, i)),
    go(t, o),
    (r = zf(e, t, r, n, i, o)),
    (n = Mf()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Cr(e, t, o))
      : (de && n && bf(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  )
}
function Zh(e, t, r, n, o) {
  if (it(r)) {
    var i = !0
    Ns(t)
  } else i = !1
  if ((go(t, o), t.stateNode === null)) vs(e, t), Yy(t, r, n), ed(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null
      ? (u = zt(u))
      : ((u = it(r) ? Rn : He.current), (u = Co(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== u) && Wh(t, a, n, u)),
      (Dr = !1)
    var f = t.memoizedState
    ;(a.state = f),
      Gs(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || ot.current || Dr
        ? (typeof c == 'function' && (Jc(t, r, c, n), (l = t.memoizedState)),
          (s = Dr || jh(t, r, s, n, f, l, u))
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
      Gy(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Bt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = zt(l))
        : ((l = it(r) ? Rn : He.current), (l = Co(t, l)))
    var h = r.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && Wh(t, a, n, l)),
      (Dr = !1),
      (f = t.memoizedState),
      (a.state = f),
      Gs(t, n, a, o)
    var v = t.memoizedState
    s !== d || f !== v || ot.current || Dr
      ? (typeof h == 'function' && (Jc(t, r, h, n), (v = t.memoizedState)),
        (u = Dr || jh(t, r, u, n, f, v, l) || !1)
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
  return nd(e, t, r, n, i, o)
}
function nd(e, t, r, n, o, i) {
  xv(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && Ih(t, r, !1), Cr(e, t, i)
  ;(n = t.stateNode), (gC.current = t)
  var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = To(t, e.child, null, i)), (t.child = To(t, null, s, i)))
      : Ke(e, t, s, i),
    (t.memoizedState = n.state),
    o && Ih(t, r, !0),
    t.child
  )
}
function wv(e) {
  var t = e.stateNode
  t.pendingContext
    ? Fh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fh(e, t.context, !1),
    Ef(e, t.containerInfo)
}
function Jh(e, t, r, n, o) {
  return _o(), wf(o), (t.flags |= 256), Ke(e, t, r, n), t.child
}
var od = { dehydrated: null, treeContext: null, retryLane: 0 }
function id(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function kv(e, t, r) {
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
      qc(t),
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
                : (i = Nl(a, n, 0, null)),
              (e = Tn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = id(r)),
              (t.memoizedState = od),
              e)
            : Ff(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return yC(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = Xr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Xr(s, i)) : ((i = Tn(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? id(r)
          : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = od),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Xr(i, { mode: 'visible', children: n.children })),
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
function Ff(e, t) {
  return (t = Nl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Ga(e, t, r, n) {
  return (
    n !== null && wf(n),
    To(t, e.child, null, r),
    (e = Ff(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function yC(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Vu(Error(A(422)))), Ga(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = Nl({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = Tn(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && To(t, e.child, null, a),
        (t.child.memoizedState = id(a)),
        (t.memoizedState = od),
        i)
  if (!(t.mode & 1)) return Ga(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error(A(419))), (n = Vu(i, n, void 0)), Ga(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), nt || s)) {
    if (((n = ze), n !== null)) {
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
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), kr(e, o), Wt(n, e, o, -1))
    }
    return jf(), (n = Vu(Error(A(421)))), Ga(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = AC.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (ft = Gr(o.nextSibling)),
      (ht = t),
      (de = !0),
      (Ot = null),
      e !== null &&
        ((Pt[Et++] = pr),
        (Pt[Et++] = hr),
        (Pt[Et++] = zn),
        (pr = e.id),
        (hr = e.overflow),
        (zn = t)),
      (t = Ff(t, n.children)),
      (t.flags |= 4096),
      t)
}
function em(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), Zc(e.return, t, r)
}
function Ou(e, t, r, n, o) {
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
function Cv(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((Ke(e, t, n.children, r), (n = ge.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && em(e, r, t)
        else if (e.tag === 19) em(e, r, t)
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
          (e = r.alternate), e !== null && Ks(e) === null && (o = r), (r = r.sibling)
        ;(r = o),
          r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)),
          Ou(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ks(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        Ou(t, !0, r, null, i)
        break
      case 'together':
        Ou(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function vs(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Cr(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (Ln |= t.lanes), !(r & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error(A(153))
  if (t.child !== null) {
    for (e = t.child, r = Xr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = Xr(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function vC(e, t, r) {
  switch (t.tag) {
    case 3:
      wv(t), _o()
      break
    case 5:
      qy(t)
      break
    case 1:
      it(t.type) && Ns(t)
      break
    case 4:
      Ef(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      ne(Us, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ne(ge, ge.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? kv(e, t, r)
          : (ne(ge, ge.current & 1), (e = Cr(e, t, r)), e !== null ? e.sibling : null)
      ne(ge, ge.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Cv(e, t, r)
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
      return (t.lanes = 0), bv(e, t, r)
  }
  return Cr(e, t, r)
}
var _v, ad, Tv, Pv
_v = function (e, t) {
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
ad = function () {}
Tv = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), wn(nr.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = Ec(e, o)), (n = Ec(e, n)), (i = [])
        break
      case 'select':
        ;(o = Se({}, o, { value: void 0 })), (n = Se({}, n, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Rc(e, o)), (n = Rc(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = Vs)
    }
    Mc(r, n)
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
            (Ii.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
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
              (Ii.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ie('scroll', e), i || s === l || (i = []))
                : (i = i || []).push(u, l))
    }
    r && (i = i || []).push('style', r)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Pv = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Yo(e, t) {
  if (!de)
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
function SC(e, t, r) {
  var n = t.pendingProps
  switch ((xf(t), t.tag)) {
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
      return it(t.type) && Os(), Ne(t), null
    case 3:
      return (
        (n = t.stateNode),
        Po(),
        se(ot),
        se(He),
        Af(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ua(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (hd(Ot), (Ot = null)))),
        ad(e, t),
        Ne(t),
        null
      )
    case 5:
      $f(t)
      var o = wn(Qi.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        Tv(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(A(166))
          return Ne(t), null
        }
        if (((e = wn(nr.current)), Ua(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[er] = t), (n[Ki] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              ie('cancel', n), ie('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ie('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < ni.length; o++) ie(ni[o], n)
              break
            case 'source':
              ie('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              ie('error', n), ie('load', n)
              break
            case 'details':
              ie('toggle', n)
              break
            case 'input':
              uh(n, i), ie('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }), ie('invalid', n)
              break
            case 'textarea':
              dh(n, i), ie('invalid', n)
          }
          Mc(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Wa(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Wa(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Ii.hasOwnProperty(a) && s != null && a === 'onScroll' && ie('scroll', n)
            }
          switch (r) {
            case 'input':
              Da(n), ch(n, i, !0)
              break
            case 'textarea':
              Da(n), fh(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = Vs)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ey(r)),
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
            (e[er] = t),
            (e[Ki] = n),
            _v(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Lc(r, n)), r)) {
              case 'dialog':
                ie('cancel', e), ie('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < ni.length; o++) ie(ni[o], e)
                o = n
                break
              case 'source':
                ie('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                ie('error', e), ie('load', e), (o = n)
                break
              case 'details':
                ie('toggle', e), (o = n)
                break
              case 'input':
                uh(e, n), (o = Ec(e, n)), ie('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Se({}, n, { value: void 0 })),
                  ie('invalid', e)
                break
              case 'textarea':
                dh(e, n), (o = Rc(e, n)), ie('invalid', e)
                break
              default:
                o = n
            }
            Mc(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? ny(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && ty(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Bi(e, l)
                    : typeof l == 'number' && Bi(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Ii.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ie('scroll', e)
                      : l != null && af(e, i, l, a))
              }
            switch (r) {
              case 'input':
                Da(e), ch(e, n, !1)
                break
              case 'textarea':
                Da(e), fh(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + en(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? fo(e, !!n.multiple, i, !1)
                    : n.defaultValue != null && fo(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Vs)
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
      if (e && t.stateNode != null) Pv(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(A(166))
        if (((r = wn(Qi.current)), wn(nr.current), Ua(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[er] = t),
            (i = n.nodeValue !== r) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wa(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wa(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[er] = t),
            (t.stateNode = n)
      }
      return Ne(t), null
    case 13:
      if (
        (se(ge),
        (n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && ft !== null && t.mode & 1 && !(t.flags & 128))
          Uy(), _o(), (t.flags |= 98560), (i = !1)
        else if (((i = Ua(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(A(317))
            i[er] = t
          } else _o(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (i = !1)
        } else Ot !== null && (hd(Ot), (Ot = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ge.current & 1 ? Ee === 0 && (Ee = 3) : jf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return Po(), ad(e, t), e === null && Hi(t.stateNode.containerInfo), Ne(t), null
    case 10:
      return _f(t.type._context), Ne(t), null
    case 17:
      return it(t.type) && Os(), Ne(t), null
    case 19:
      if ((se(ge), (i = t.memoizedState), i === null)) return Ne(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Yo(i, !1)
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ks(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Yo(i, !1),
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
            xe() > $o &&
            ((t.flags |= 128), (n = !0), Yo(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Ks(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Yo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !de)
            )
              return Ne(t), null
          } else
            2 * xe() - i.renderingStartTime > $o &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Yo(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last), r !== null ? (r.sibling = a) : (t.child = a), (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = xe()),
          (t.sibling = null),
          (r = ge.current),
          ne(ge, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ne(t), null)
    case 22:
    case 23:
      return (
        Nf(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? dt & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(A(156, t.tag))
}
function bC(e, t) {
  switch ((xf(t), t.tag)) {
    case 1:
      return (
        it(t.type) && Os(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Po(),
        se(ot),
        se(He),
        Af(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return $f(t), null
    case 13:
      if ((se(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(A(340))
        _o()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return se(ge), null
    case 4:
      return Po(), null
    case 10:
      return _f(t.type._context), null
    case 22:
    case 23:
      return Nf(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ka = !1,
  We = !1,
  xC = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null
function io(e, t) {
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
function sd(e, t, r) {
  try {
    r()
  } catch (n) {
    be(e, t, n)
  }
}
var tm = !1
function wC(e, t) {
  if (((Uc = Fs), (e = Ry()), Sf(e))) {
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
  for (Hc = { focusedElem: e, selectionRange: r }, Fs = !1, L = t; L !== null; )
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
                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Bt(t.type, S), C)
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
                throw Error(A(163))
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
  return (v = tm), (tm = !1), v
}
function mi(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && sd(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function Vl(e, t) {
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
function ld(e) {
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
function Ev(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Ev(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[er], delete t[Ki], delete t[Yc], delete t[oC], delete t[iC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function $v(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function rm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $v(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function ud(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = Vs))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ud(e, t, r), e = e.sibling; e !== null; ) ud(e, t, r), (e = e.sibling)
}
function cd(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (cd(e, t, r), e = e.sibling; e !== null; ) cd(e, t, r), (e = e.sibling)
}
var De = null,
  Vt = !1
function $r(e, t, r) {
  for (r = r.child; r !== null; ) Av(e, t, r), (r = r.sibling)
}
function Av(e, t, r) {
  if (rr && typeof rr.onCommitFiberUnmount == 'function')
    try {
      rr.onCommitFiberUnmount(Rl, r)
    } catch {}
  switch (r.tag) {
    case 5:
      We || io(r, t)
    case 6:
      var n = De,
        o = Vt
      ;(De = null),
        $r(e, t, r),
        (De = n),
        (Vt = o),
        De !== null &&
          (Vt
            ? ((e = De),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : De.removeChild(r.stateNode))
      break
    case 18:
      De !== null &&
        (Vt
          ? ((e = De),
            (r = r.stateNode),
            e.nodeType === 8 ? Mu(e.parentNode, r) : e.nodeType === 1 && Mu(e, r),
            ji(e))
          : Mu(De, r.stateNode))
      break
    case 4:
      ;(n = De),
        (o = Vt),
        (De = r.stateNode.containerInfo),
        (Vt = !0),
        $r(e, t, r),
        (De = n),
        (Vt = o)
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
          ;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && sd(r, t, a), (o = o.next)
        } while (o !== n)
      }
      $r(e, t, r)
      break
    case 1:
      if (!We && (io(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (s) {
          be(r, t, s)
        }
      $r(e, t, r)
      break
    case 21:
      $r(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((We = (n = We) || r.memoizedState !== null), $r(e, t, r), (We = n))
        : $r(e, t, r)
      break
    default:
      $r(e, t, r)
  }
}
function nm(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new xC()),
      t.forEach(function (n) {
        var o = RC.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function Ft(e, t) {
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
              ;(De = s.stateNode), (Vt = !1)
              break e
            case 3:
              ;(De = s.stateNode.containerInfo), (Vt = !0)
              break e
            case 4:
              ;(De = s.stateNode.containerInfo), (Vt = !0)
              break e
          }
          s = s.return
        }
        if (De === null) throw Error(A(160))
        Av(i, a, o), (De = null), (Vt = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        be(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rv(t, e), (t = t.sibling)
}
function Rv(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ft(t, e), Kt(e), n & 4)) {
        try {
          mi(3, e, e.return), Vl(3, e)
        } catch (S) {
          be(e, e.return, S)
        }
        try {
          mi(5, e, e.return)
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 1:
      Ft(t, e), Kt(e), n & 512 && r !== null && io(r, r.return)
      break
    case 5:
      if ((Ft(t, e), Kt(e), n & 512 && r !== null && io(r, r.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Bi(o, '')
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
            s === 'input' && i.type === 'radio' && i.name != null && Z0(o, i), Lc(s, a)
            var u = Lc(s, i)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1]
              c === 'style'
                ? ny(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? ty(o, d)
                : c === 'children'
                ? Bi(o, d)
                : af(o, c, d, u)
            }
            switch (s) {
              case 'input':
                $c(o, i)
                break
              case 'textarea':
                J0(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var h = i.value
                h != null
                  ? fo(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? fo(o, !!i.multiple, i.defaultValue, !0)
                      : fo(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ki] = i
          } catch (S) {
            be(e, e.return, S)
          }
      }
      break
    case 6:
      if ((Ft(t, e), Kt(e), n & 4)) {
        if (e.stateNode === null) throw Error(A(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 3:
      if ((Ft(t, e), Kt(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          ji(t.containerInfo)
        } catch (S) {
          be(e, e.return, S)
        }
      break
    case 4:
      Ft(t, e), Kt(e)
      break
    case 13:
      Ft(t, e),
        Kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Vf = xe())),
        n & 4 && nm(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || c), Ft(t, e), (We = u)) : Ft(t, e),
        Kt(e),
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
                  mi(4, f, f.return)
                  break
                case 1:
                  io(f, f.return)
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
                  io(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    im(d)
                    continue
                  }
              }
              h !== null ? ((h.return = f), (L = h)) : im(d)
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
                      (s.style.display = ry('display', a)))
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
      Ft(t, e), Kt(e), n & 4 && nm(e)
      break
    case 21:
      break
    default:
      Ft(t, e), Kt(e)
  }
}
function Kt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if ($v(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(A(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Bi(o, ''), (n.flags &= -33))
          var i = rm(e)
          cd(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = rm(e)
          ud(e, s, a)
          break
        default:
          throw Error(A(161))
      }
    } catch (l) {
      be(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function kC(e, t, r) {
  ;(L = e), zv(e)
}
function zv(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Ka
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || We
        s = Ka
        var u = We
        if (((Ka = a), (We = l) && !u))
          for (L = o; L !== null; )
            (a = L),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? am(o)
                : l !== null
                ? ((l.return = a), (L = l))
                : am(o)
        for (; i !== null; ) (L = i), zv(i), (i = i.sibling)
        ;(L = o), (Ka = s), (We = u)
      }
      om(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : om(e)
  }
}
function om(e) {
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
              We || Vl(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !We)
                if (r === null) n.componentDidMount()
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Bt(t.type, r.memoizedProps)
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && Nh(t, i, n)
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
                Nh(t, a, r)
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
                    d !== null && ji(d)
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
              throw Error(A(163))
          }
        We || (t.flags & 512 && ld(t))
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
function im(e) {
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
function am(e) {
  for (; L !== null; ) {
    var t = L
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            Vl(4, t)
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
            ld(t)
          } catch (l) {
            be(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            ld(t)
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
var CC = Math.ceil,
  Xs = Tr.ReactCurrentDispatcher,
  If = Tr.ReactCurrentOwner,
  Rt = Tr.ReactCurrentBatchConfig,
  K = 0,
  ze = null,
  Ce = null,
  Ie = 0,
  dt = 0,
  ao = an(0),
  Ee = 0,
  Ji = null,
  Ln = 0,
  Ol = 0,
  Bf = 0,
  gi = null,
  tt = null,
  Vf = 0,
  $o = 1 / 0,
  cr = null,
  qs = !1,
  dd = null,
  Yr = null,
  Ya = !1,
  Nr = null,
  Zs = 0,
  yi = 0,
  fd = null,
  Ss = -1,
  bs = 0
function Qe() {
  return K & 6 ? xe() : Ss !== -1 ? Ss : (Ss = xe())
}
function Qr(e) {
  return e.mode & 1
    ? K & 2 && Ie !== 0
      ? Ie & -Ie
      : sC.transition !== null
      ? (bs === 0 && (bs = my()), bs)
      : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wy(e.type))), e)
    : 1
}
function Wt(e, t, r, n) {
  if (50 < yi) throw ((yi = 0), (fd = null), Error(A(185)))
  da(e, r, n),
    (!(K & 2) || e !== ze) &&
      (e === ze && (!(K & 2) && (Ol |= r), Ee === 4 && Br(e, Ie)),
      at(e, n),
      r === 1 && K === 0 && !(t.mode & 1) && (($o = xe() + 500), Fl && sn()))
}
function at(e, t) {
  var r = e.callbackNode
  sk(e, t)
  var n = Ds(e, e === ze ? Ie : 0)
  if (n === 0) r !== null && mh(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && mh(r), t === 1))
      e.tag === 0 ? aC(sm.bind(null, e)) : Ny(sm.bind(null, e)),
        rC(function () {
          !(K & 6) && sn()
        }),
        (r = null)
    else {
      switch (gy(n)) {
        case 1:
          r = df
          break
        case 4:
          r = py
          break
        case 16:
          r = Ls
          break
        case 536870912:
          r = hy
          break
        default:
          r = Ls
      }
      r = Ov(r, Mv.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function Mv(e, t) {
  if (((Ss = -1), (bs = 0), K & 6)) throw Error(A(327))
  var r = e.callbackNode
  if (yo() && e.callbackNode !== r) return null
  var n = Ds(e, e === ze ? Ie : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = Js(e, n)
  else {
    t = n
    var o = K
    K |= 2
    var i = Dv()
    ;(ze !== e || Ie !== t) && ((cr = null), ($o = xe() + 500), _n(e, t))
    do
      try {
        PC()
        break
      } catch (s) {
        Lv(e, s)
      }
    while (1)
    Cf(), (Xs.current = i), (K = o), Ce !== null ? (t = 0) : ((ze = null), (Ie = 0), (t = Ee))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Vc(e)), o !== 0 && ((n = o), (t = pd(e, o)))), t === 1))
      throw ((r = Ji), _n(e, 0), Br(e, n), at(e, xe()), r)
    if (t === 6) Br(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !_C(o) &&
          ((t = Js(e, n)), t === 2 && ((i = Vc(e)), i !== 0 && ((n = i), (t = pd(e, i)))), t === 1))
      )
        throw ((r = Ji), _n(e, 0), Br(e, n), at(e, xe()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(A(345))
        case 2:
          mn(e, tt, cr)
          break
        case 3:
          if ((Br(e, n), (n & 130023424) === n && ((t = Vf + 500 - xe()), 10 < t))) {
            if (Ds(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Kc(mn.bind(null, e, tt, cr), t)
            break
          }
          mn(e, tt, cr)
          break
        case 4:
          if ((Br(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - jt(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = xe() - n),
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
                : 1960 * CC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Kc(mn.bind(null, e, tt, cr), n)
            break
          }
          mn(e, tt, cr)
          break
        case 5:
          mn(e, tt, cr)
          break
        default:
          throw Error(A(329))
      }
    }
  }
  return at(e, xe()), e.callbackNode === r ? Mv.bind(null, e) : null
}
function pd(e, t) {
  var r = gi
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = tt), (tt = r), t !== null && hd(t)),
    e
  )
}
function hd(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e)
}
function _C(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Ut(i(), o)) return !1
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
function Br(e, t) {
  for (
    t &= ~Bf, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - jt(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function sm(e) {
  if (K & 6) throw Error(A(327))
  yo()
  var t = Ds(e, 0)
  if (!(t & 1)) return at(e, xe()), null
  var r = Js(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = Vc(e)
    n !== 0 && ((t = n), (r = pd(e, n)))
  }
  if (r === 1) throw ((r = Ji), _n(e, 0), Br(e, t), at(e, xe()), r)
  if (r === 6) throw Error(A(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), mn(e, tt, cr), at(e, xe()), null
  )
}
function Of(e, t) {
  var r = K
  K |= 1
  try {
    return e(t)
  } finally {
    ;(K = r), K === 0 && (($o = xe() + 500), Fl && sn())
  }
}
function Dn(e) {
  Nr !== null && Nr.tag === 0 && !(K & 6) && yo()
  var t = K
  K |= 1
  var r = Rt.transition,
    n = ee
  try {
    if (((Rt.transition = null), (ee = 1), e)) return e()
  } finally {
    ;(ee = n), (Rt.transition = r), (K = t), !(K & 6) && sn()
  }
}
function Nf() {
  ;(dt = ao.current), se(ao)
}
function _n(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), tC(r)), Ce !== null))
    for (r = Ce.return; r !== null; ) {
      var n = r
      switch ((xf(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Os()
          break
        case 3:
          Po(), se(ot), se(He), Af()
          break
        case 5:
          $f(n)
          break
        case 4:
          Po()
          break
        case 13:
          se(ge)
          break
        case 19:
          se(ge)
          break
        case 10:
          _f(n.type._context)
          break
        case 22:
        case 23:
          Nf()
      }
      r = r.return
    }
  if (
    ((ze = e),
    (Ce = e = Xr(e.current, null)),
    (Ie = dt = t),
    (Ee = 0),
    (Ji = null),
    (Bf = Ol = Ln = 0),
    (tt = gi = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((r = xn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    xn = null
  }
  return e
}
function Lv(e, t) {
  do {
    var r = Ce
    try {
      if ((Cf(), (gs.current = Qs), Ys)) {
        for (var n = ve.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        Ys = !1
      }
      if (
        ((Mn = 0),
        (Ae = Pe = ve = null),
        (hi = !1),
        (Xi = 0),
        (If.current = null),
        r === null || r.return === null)
      ) {
        ;(Ee = 1), (Ji = t), (Ce = null)
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
          var h = Yh(a)
          if (h !== null) {
            ;(h.flags &= -257), Qh(h, a, s, i, t), h.mode & 1 && Kh(i, u, t), (t = h), (l = u)
            var v = t.updateQueue
            if (v === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else v.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Kh(i, u, t), jf()
              break e
            }
            l = Error(A(426))
          }
        } else if (de && s.mode & 1) {
          var C = Yh(a)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Qh(C, a, s, i, t), wf(Eo(l, s))
            break e
          }
        }
        ;(i = l = Eo(l, s)), Ee !== 4 && (Ee = 2), gi === null ? (gi = [i]) : gi.push(i), (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = yv(i, l, t)
              Oh(i, m)
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
                    (Yr === null || !Yr.has(g))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = vv(i, s, t)
                Oh(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Iv(r)
    } catch (T) {
      ;(t = T), Ce === r && r !== null && (Ce = r = r.return)
      continue
    }
    break
  } while (1)
}
function Dv() {
  var e = Xs.current
  return (Xs.current = Qs), e === null ? Qs : e
}
function jf() {
  ;(Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    ze === null || (!(Ln & 268435455) && !(Ol & 268435455)) || Br(ze, Ie)
}
function Js(e, t) {
  var r = K
  K |= 2
  var n = Dv()
  ;(ze !== e || Ie !== t) && ((cr = null), _n(e, t))
  do
    try {
      TC()
      break
    } catch (o) {
      Lv(e, o)
    }
  while (1)
  if ((Cf(), (K = r), (Xs.current = n), Ce !== null)) throw Error(A(261))
  return (ze = null), (Ie = 0), Ee
}
function TC() {
  for (; Ce !== null; ) Fv(Ce)
}
function PC() {
  for (; Ce !== null && !Zw(); ) Fv(Ce)
}
function Fv(e) {
  var t = Vv(e.alternate, e, dt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Iv(e) : (Ce = t), (If.current = null)
}
function Iv(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = bC(r, t)), r !== null)) {
        ;(r.flags &= 32767), (Ce = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ee = 6), (Ce = null)
        return
      }
    } else if (((r = SC(r, t, dt)), r !== null)) {
      Ce = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t
      return
    }
    Ce = t = e
  } while (t !== null)
  Ee === 0 && (Ee = 5)
}
function mn(e, t, r) {
  var n = ee,
    o = Rt.transition
  try {
    ;(Rt.transition = null), (ee = 1), EC(e, t, r, n)
  } finally {
    ;(Rt.transition = o), (ee = n)
  }
  return null
}
function EC(e, t, r, n) {
  do yo()
  while (Nr !== null)
  if (K & 6) throw Error(A(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(A(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (lk(e, i),
    e === ze && ((Ce = ze = null), (Ie = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ya ||
      ((Ya = !0),
      Ov(Ls, function () {
        return yo(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = Rt.transition), (Rt.transition = null)
    var a = ee
    ee = 1
    var s = K
    ;(K |= 4),
      (If.current = null),
      wC(e, r),
      Rv(r, e),
      Yk(Hc),
      (Fs = !!Uc),
      (Hc = Uc = null),
      (e.current = r),
      kC(r),
      Jw(),
      (K = s),
      (ee = a),
      (Rt.transition = i)
  } else e.current = r
  if (
    (Ya && ((Ya = !1), (Nr = e), (Zs = o)),
    (i = e.pendingLanes),
    i === 0 && (Yr = null),
    rk(r.stateNode),
    at(e, xe()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (qs) throw ((qs = !1), (e = dd), (dd = null), e)
  return (
    Zs & 1 && e.tag !== 0 && yo(),
    (i = e.pendingLanes),
    i & 1 ? (e === fd ? yi++ : ((yi = 0), (fd = e))) : (yi = 0),
    sn(),
    null
  )
}
function yo() {
  if (Nr !== null) {
    var e = gy(Zs),
      t = Rt.transition,
      r = ee
    try {
      if (((Rt.transition = null), (ee = 16 > e ? 16 : e), Nr === null)) var n = !1
      else {
        if (((e = Nr), (Nr = null), (Zs = 0), K & 6)) throw Error(A(331))
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
                      mi(8, c, i)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (L = d)
                  else
                    for (; L !== null; ) {
                      c = L
                      var f = c.sibling,
                        h = c.return
                      if ((Ev(c), c === u)) {
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
                    mi(9, i, i.return)
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
                      Vl(9, s)
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
        if (((K = o), sn(), rr && typeof rr.onPostCommitFiberRoot == 'function'))
          try {
            rr.onPostCommitFiberRoot(Rl, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(ee = r), (Rt.transition = t)
    }
  }
  return !1
}
function lm(e, t, r) {
  ;(t = Eo(r, t)),
    (t = yv(e, t, 1)),
    (e = Kr(e, t, 1)),
    (t = Qe()),
    e !== null && (da(e, 1, t), at(e, t))
}
function be(e, t, r) {
  if (e.tag === 3) lm(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lm(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (Yr === null || !Yr.has(n)))
        ) {
          ;(e = Eo(r, e)),
            (e = vv(t, e, 1)),
            (t = Kr(t, e, 1)),
            (e = Qe()),
            t !== null && (da(t, 1, e), at(t, e))
          break
        }
      }
      t = t.return
    }
}
function $C(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ze === e &&
      (Ie & r) === r &&
      (Ee === 4 || (Ee === 3 && (Ie & 130023424) === Ie && 500 > xe() - Vf) ? _n(e, 0) : (Bf |= r)),
    at(e, t)
}
function Bv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Ba), (Ba <<= 1), !(Ba & 130023424) && (Ba = 4194304)) : (t = 1))
  var r = Qe()
  ;(e = kr(e, t)), e !== null && (da(e, t, r), at(e, r))
}
function AC(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), Bv(e, r)
}
function RC(e, t) {
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
      throw Error(A(314))
  }
  n !== null && n.delete(t), Bv(e, r)
}
var Vv
Vv = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ot.current) nt = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (nt = !1), vC(e, t, r)
      nt = !!(e.flags & 131072)
    }
  else (nt = !1), de && t.flags & 1048576 && jy(t, Ws, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      vs(e, t), (e = t.pendingProps)
      var o = Co(t, He.current)
      go(t, r), (o = zf(null, t, n, e, o, r))
      var i = Mf()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(n) ? ((i = !0), Ns(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Pf(t),
            (o.updater = Il),
            (t.stateNode = o),
            (o._reactInternals = t),
            ed(t, n, e, r),
            (t = nd(null, t, n, !0, i, r)))
          : ((t.tag = 0), de && i && bf(t), Ke(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (vs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = MC(n)),
          (e = Bt(n, e)),
          o)
        ) {
          case 0:
            t = rd(null, t, n, e, r)
            break e
          case 1:
            t = Zh(null, t, n, e, r)
            break e
          case 11:
            t = Xh(null, t, n, e, r)
            break e
          case 14:
            t = qh(null, t, n, Bt(n.type, e), r)
            break e
        }
        throw Error(A(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Bt(n, o)),
        rd(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Bt(n, o)),
        Zh(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((wv(t), e === null)) throw Error(A(387))
        ;(n = t.pendingProps), (i = t.memoizedState), (o = i.element), Gy(e, t), Gs(t, n, null, r)
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
            ;(o = Eo(Error(A(423)), t)), (t = Jh(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = Eo(Error(A(424)), t)), (t = Jh(e, t, n, r, o))
            break e
          } else
            for (
              ft = Gr(t.stateNode.containerInfo.firstChild),
                ht = t,
                de = !0,
                Ot = null,
                r = Xy(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((_o(), n === o)) {
            t = Cr(e, t, r)
            break e
          }
          Ke(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        qy(t),
        e === null && qc(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Gc(n, o) ? (a = null) : i !== null && Gc(n, i) && (t.flags |= 32),
        xv(e, t),
        Ke(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && qc(t), null
    case 13:
      return kv(e, t, r)
    case 4:
      return (
        Ef(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = To(t, null, n, r)) : Ke(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Bt(n, o)),
        Xh(e, t, n, o, r)
      )
    case 7:
      return Ke(e, t, t.pendingProps, r), t.child
    case 8:
      return Ke(e, t, t.pendingProps.children, r), t.child
    case 12:
      return Ke(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ne(Us, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Ut(i.value, a)) {
            if (i.children === o.children && !ot.current) {
              t = Cr(e, t, r)
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
                      ;(l = yr(-1, r & -r)), (l.tag = 2)
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
                      Zc(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(A(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  Zc(a, r, t),
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
        Ke(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        go(t, r),
        (o = zt(o)),
        (n = n(o)),
        (t.flags |= 1),
        Ke(e, t, n, r),
        t.child
      )
    case 14:
      return (n = t.type), (o = Bt(n, t.pendingProps)), (o = Bt(n.type, o)), qh(e, t, n, o, r)
    case 15:
      return Sv(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Bt(n, o)),
        vs(e, t),
        (t.tag = 1),
        it(n) ? ((e = !0), Ns(t)) : (e = !1),
        go(t, r),
        Yy(t, n, o),
        ed(t, n, o, r),
        nd(null, t, n, !0, e, r)
      )
    case 19:
      return Cv(e, t, r)
    case 22:
      return bv(e, t, r)
  }
  throw Error(A(156, t.tag))
}
function Ov(e, t) {
  return fy(e, t)
}
function zC(e, t, r, n) {
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
function $t(e, t, r, n) {
  return new zC(e, t, r, n)
}
function Wf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function MC(e) {
  if (typeof e == 'function') return Wf(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === lf)) return 11
    if (e === uf) return 14
  }
  return 2
}
function Xr(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = $t(e.tag, t, e.key, e.mode)),
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
function xs(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) Wf(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Xn:
        return Tn(r.children, o, i, t)
      case sf:
        ;(a = 8), (o |= 8)
        break
      case Cc:
        return (e = $t(12, r, t, o | 2)), (e.elementType = Cc), (e.lanes = i), e
      case _c:
        return (e = $t(13, r, t, o)), (e.elementType = _c), (e.lanes = i), e
      case Tc:
        return (e = $t(19, r, t, o)), (e.elementType = Tc), (e.lanes = i), e
      case Q0:
        return Nl(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case K0:
              a = 10
              break e
            case Y0:
              a = 9
              break e
            case lf:
              a = 11
              break e
            case uf:
              a = 14
              break e
            case Lr:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(A(130, e == null ? e : typeof e, ''))
    }
  return (t = $t(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
}
function Tn(e, t, r, n) {
  return (e = $t(7, e, n, t)), (e.lanes = r), e
}
function Nl(e, t, r, n) {
  return (
    (e = $t(22, e, n, t)), (e.elementType = Q0), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
  )
}
function Nu(e, t, r) {
  return (e = $t(6, e, null, t)), (e.lanes = r), e
}
function ju(e, t, r) {
  return (
    (t = $t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function LC(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wu(0)),
    (this.expirationTimes = wu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Uf(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new LC(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $t(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pf(i),
    e
  )
}
function DC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Qn,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function Nv(e) {
  if (!e) return tn
  e = e._reactInternals
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(A(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(A(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (it(r)) return Oy(e, r, t)
  }
  return t
}
function jv(e, t, r, n, o, i, a, s, l) {
  return (
    (e = Uf(r, n, !0, e, o, i, a, s, l)),
    (e.context = Nv(null)),
    (r = e.current),
    (n = Qe()),
    (o = Qr(r)),
    (i = yr(n, o)),
    (i.callback = t ?? null),
    Kr(r, i, o),
    (e.current.lanes = o),
    da(e, o, n),
    at(e, n),
    e
  )
}
function jl(e, t, r, n) {
  var o = t.current,
    i = Qe(),
    a = Qr(o)
  return (
    (r = Nv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = yr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Kr(o, t, a)),
    e !== null && (Wt(e, o, a, i), ms(e, o, a)),
    a
  )
}
function el(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function um(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function Hf(e, t) {
  um(e, t), (e = e.alternate) && um(e, t)
}
function FC() {
  return null
}
var Wv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Gf(e) {
  this._internalRoot = e
}
Wl.prototype.render = Gf.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(A(409))
  jl(e, t, null, null)
}
Wl.prototype.unmount = Gf.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Dn(function () {
      jl(null, e, null, null)
    }),
      (t[wr] = null)
  }
}
function Wl(e) {
  this._internalRoot = e
}
Wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sy()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < Ir.length && t !== 0 && t < Ir[r].priority; r++);
    Ir.splice(r, 0, e), r === 0 && xy(e)
  }
}
function Kf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function cm() {}
function IC(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var u = el(a)
        i.call(u)
      }
    }
    var a = jv(t, n, e, 0, null, !1, !1, '', cm)
    return (
      (e._reactRootContainer = a),
      (e[wr] = a.current),
      Hi(e.nodeType === 8 ? e.parentNode : e),
      Dn(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var u = el(l)
      s.call(u)
    }
  }
  var l = Uf(e, 0, !1, null, null, !1, !1, '', cm)
  return (
    (e._reactRootContainer = l),
    (e[wr] = l.current),
    Hi(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      jl(t, l, r, n)
    }),
    l
  )
}
function Hl(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = el(a)
        s.call(l)
      }
    }
    jl(t, a, e, o)
  } else a = IC(r, t, e, o, n)
  return el(a)
}
yy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = ri(t.pendingLanes)
        r !== 0 && (ff(t, r | 1), at(t, xe()), !(K & 6) && (($o = xe() + 500), sn()))
      }
      break
    case 13:
      Dn(function () {
        var n = kr(e, 1)
        if (n !== null) {
          var o = Qe()
          Wt(n, e, 1, o)
        }
      }),
        Hf(e, 1)
  }
}
pf = function (e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728)
    if (t !== null) {
      var r = Qe()
      Wt(t, e, 134217728, r)
    }
    Hf(e, 134217728)
  }
}
vy = function (e) {
  if (e.tag === 13) {
    var t = Qr(e),
      r = kr(e, t)
    if (r !== null) {
      var n = Qe()
      Wt(r, e, t, n)
    }
    Hf(e, t)
  }
}
Sy = function () {
  return ee
}
by = function (e, t) {
  var r = ee
  try {
    return (ee = e), t()
  } finally {
    ee = r
  }
}
Fc = function (e, t, r) {
  switch (t) {
    case 'input':
      if (($c(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = Dl(n)
            if (!o) throw Error(A(90))
            q0(n), $c(n, o)
          }
        }
      }
      break
    case 'textarea':
      J0(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && fo(e, !!r.multiple, t, !1)
  }
}
ay = Of
sy = Dn
var BC = { usingClientEntryPoint: !1, Events: [pa, eo, Dl, oy, iy, Of] },
  Qo = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  VC = {
    bundleType: Qo.bundleType,
    version: Qo.version,
    rendererPackageName: Qo.rendererPackageName,
    rendererConfig: Qo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cy(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Qo.findFiberByHostInstance || FC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Qa = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Qa.isDisabled && Qa.supportsFiber)
    try {
      ;(Rl = Qa.inject(VC)), (rr = Qa)
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BC
bt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Kf(t)) throw Error(A(200))
  return DC(e, t, null, r)
}
bt.createRoot = function (e, t) {
  if (!Kf(e)) throw Error(A(299))
  var r = !1,
    n = '',
    o = Wv
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Uf(e, 1, !1, null, null, r, !1, n, o)),
    (e[wr] = t.current),
    Hi(e.nodeType === 8 ? e.parentNode : e),
    new Gf(t)
  )
}
bt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(A(188))
      : ((e = Object.keys(e).join(',')), Error(A(268, e)))
  return (e = cy(t)), (e = e === null ? null : e.stateNode), e
}
bt.flushSync = function (e) {
  return Dn(e)
}
bt.hydrate = function (e, t, r) {
  if (!Ul(t)) throw Error(A(200))
  return Hl(null, e, t, !0, r)
}
bt.hydrateRoot = function (e, t, r) {
  if (!Kf(e)) throw Error(A(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = Wv
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = jv(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[wr] = t.current),
    Hi(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new Wl(t)
}
bt.render = function (e, t, r) {
  if (!Ul(t)) throw Error(A(200))
  return Hl(null, e, t, !1, r)
}
bt.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(A(40))
  return e._reactRootContainer
    ? (Dn(function () {
        Hl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[wr] = null)
        })
      }),
      !0)
    : !1
}
bt.unstable_batchedUpdates = Of
bt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Ul(r)) throw Error(A(200))
  if (e == null || e._reactInternals === void 0) throw Error(A(38))
  return Hl(e, t, r, !1, n)
}
bt.version = '18.2.0-next-9e3b772b8-20220608'
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
  t(), (e.exports = bt)
})(Fw)
var [Uv, OC] = Lo({ strict: !1, name: 'PortalContext' }),
  Yf = 'chakra-portal',
  NC = '.chakra-portal',
  jC = (e) =>
    R('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  WC = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = k.useState(null),
      i = k.useRef(null),
      [, a] = k.useState({})
    k.useEffect(() => a({}), [])
    const s = OC(),
      l = Dw()
    Di(() => {
      if (!n) return
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body
      if (!d) return
      ;(i.current = c.createElement('div')),
        (i.current.className = Yf),
        d.appendChild(i.current),
        a({})
      const f = i.current
      return () => {
        d.contains(f) && d.removeChild(f)
      }
    }, [n])
    const u =
      l != null && l.zIndex ? R(jC, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r
    return i.current
      ? Fi.createPortal(R(Uv, { value: i.current, children: u }), i.current)
      : R('span', {
          ref: (c) => {
            c && o(c)
          },
        })
  },
  UC = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = k.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div')
        return l && (l.className = Yf), l
      }, [o]),
      [, s] = k.useState({})
    return (
      Di(() => s({}), []),
      Di(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a)
            }
          )
      }, [a, i]),
      i && a ? Fi.createPortal(R(Uv, { value: n ? a : null, children: t }), a) : null
    )
  }
function Gl(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t
  return r ? R(UC, { containerRef: r, ...n }) : R(WC, { ...n })
}
Gl.className = Yf
Gl.selector = NC
Gl.displayName = 'Portal'
function HC() {
  const e = k.useContext(Li)
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    )
  return e
}
var Qf = k.createContext({})
Qf.displayName = 'ColorModeContext'
function Xf() {
  const e = k.useContext(Qf)
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
  return e
}
var Xa = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function GC(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0
        ;(document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o()
      },
      setClassName(n) {
        document.body.classList.add(n ? Xa.dark : Xa.light),
          document.body.classList.remove(n ? Xa.light : Xa.dark)
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
var KC = 'chakra-ui-color-mode'
function YC(e) {
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
var QC = YC(KC),
  dm = () => {}
function fm(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function Hv(e) {
  const {
      value: t,
      children: r,
      options: { useSystemColorMode: n, initialColorMode: o, disableTransitionOnChange: i } = {},
      colorModeManager: a = QC,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = k.useState(() => fm(a, s)),
    [c, d] = k.useState(() => fm(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: v,
      addListener: S,
    } = k.useMemo(() => GC({ preventTransition: i }), [i]),
    C = o === 'system' && !l ? c : l,
    m = k.useCallback(
      (w) => {
        const T = w === 'system' ? f() : w
        u(T), h(T === 'dark'), v(T), a.set(T)
      },
      [a, f, h, v]
    )
  Di(() => {
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
      toggleColorMode: t ? dm : p,
      setColorMode: t ? dm : m,
      forced: t !== void 0,
    }),
    [C, p, m, t]
  )
  return R(Qf.Provider, { value: g, children: r })
}
Hv.displayName = 'ColorModeProvider'
function XC() {
  const e = Xf(),
    t = HC()
  return { ...e, theme: t }
}
var Lt = (...e) => e.filter(Boolean).join(' ')
function mt(e) {
  const t = typeof e
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function jr(e, ...t) {
  return qC(e) ? e(...t) : e
}
var qC = (e) => typeof e == 'function',
  pm = (e) => (e ? '' : void 0),
  tl = {},
  ZC = {
    get exports() {
      return tl
    },
    set exports(e) {
      tl = e
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
    $ = '[object String]',
    P = '[object Undefined]',
    E = '[object WeakMap]',
    I = '[object ArrayBuffer]',
    D = '[object DataView]',
    pe = '[object Float32Array]',
    Ve = '[object Float64Array]',
    Je = '[object Int8Array]',
    he = '[object Int16Array]',
    me = '[object Int32Array]',
    et = '[object Uint8Array]',
    wt = '[object Uint8ClampedArray]',
    z = '[object Uint16Array]',
    V = '[object Uint32Array]',
    N = /[\\^$.*+?()[\]{}|]/g,
    O = /^\[object .+?Constructor\]$/,
    oe = /^(?:0|[1-9]\d*)$/,
    G = {}
  ;(G[pe] = G[Ve] = G[Je] = G[he] = G[me] = G[et] = G[wt] = G[z] = G[V] = !0),
    (G[s] =
      G[l] =
      G[I] =
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
      G[$] =
      G[E] =
        !1)
  var ut = typeof Ra == 'object' && Ra && Ra.Object === Object && Ra,
    Pr = typeof self == 'object' && self && self.Object === Object && self,
    Te = ut || Pr || Function('return this')(),
    Ht = t && !t.nodeType && t,
    un = Ht && !0 && e && !e.nodeType && e,
    Wn = un && un.exports === Ht,
    Er = Wn && ut.process,
    Gt = (function () {
      try {
        var y = un && un.require && un.require('util').types
        return y || (Er && Er.binding && Er.binding('util'))
      } catch {}
    })(),
    Io = Gt && Gt.isTypedArray
  function wa(y, b, _) {
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
  function qS(y, b) {
    for (var _ = -1, M = Array(y); ++_ < y; ) M[_] = b(_)
    return M
  }
  function ZS(y) {
    return function (b) {
      return y(b)
    }
  }
  function JS(y, b) {
    return y == null ? void 0 : y[b]
  }
  function eb(y, b) {
    return function (_) {
      return y(b(_))
    }
  }
  var tb = Array.prototype,
    rb = Function.prototype,
    ka = Object.prototype,
    iu = Te['__core-js_shared__'],
    Ca = rb.toString,
    sr = ka.hasOwnProperty,
    $p = (function () {
      var y = /[^.]+$/.exec((iu && iu.keys && iu.keys.IE_PROTO) || '')
      return y ? 'Symbol(src)_1.' + y : ''
    })(),
    Ap = ka.toString,
    nb = Ca.call(Object),
    ob = RegExp(
      '^' +
        Ca.call(sr)
          .replace(N, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    _a = Wn ? Te.Buffer : void 0,
    Rp = Te.Symbol,
    zp = Te.Uint8Array,
    Mp = _a ? _a.allocUnsafe : void 0,
    Lp = eb(Object.getPrototypeOf, Object),
    Dp = Object.create,
    ib = ka.propertyIsEnumerable,
    ab = tb.splice,
    cn = Rp ? Rp.toStringTag : void 0,
    Ta = (function () {
      try {
        var y = lu(Object, 'defineProperty')
        return y({}, '', {}), y
      } catch {}
    })(),
    sb = _a ? _a.isBuffer : void 0,
    Fp = Math.max,
    lb = Date.now,
    Ip = lu(Te, 'Map'),
    Bo = lu(Object, 'create'),
    ub = (function () {
      function y() {}
      return function (b) {
        if (!fn(b)) return {}
        if (Dp) return Dp(b)
        y.prototype = b
        var _ = new y()
        return (y.prototype = void 0), _
      }
    })()
  function dn(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function cb() {
    ;(this.__data__ = Bo ? Bo(null) : {}), (this.size = 0)
  }
  function db(y) {
    var b = this.has(y) && delete this.__data__[y]
    return (this.size -= b ? 1 : 0), b
  }
  function fb(y) {
    var b = this.__data__
    if (Bo) {
      var _ = b[y]
      return _ === n ? void 0 : _
    }
    return sr.call(b, y) ? b[y] : void 0
  }
  function pb(y) {
    var b = this.__data__
    return Bo ? b[y] !== void 0 : sr.call(b, y)
  }
  function hb(y, b) {
    var _ = this.__data__
    return (this.size += this.has(y) ? 0 : 1), (_[y] = Bo && b === void 0 ? n : b), this
  }
  ;(dn.prototype.clear = cb),
    (dn.prototype.delete = db),
    (dn.prototype.get = fb),
    (dn.prototype.has = pb),
    (dn.prototype.set = hb)
  function lr(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function mb() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function gb(y) {
    var b = this.__data__,
      _ = Pa(b, y)
    if (_ < 0) return !1
    var M = b.length - 1
    return _ == M ? b.pop() : ab.call(b, _, 1), --this.size, !0
  }
  function yb(y) {
    var b = this.__data__,
      _ = Pa(b, y)
    return _ < 0 ? void 0 : b[_][1]
  }
  function vb(y) {
    return Pa(this.__data__, y) > -1
  }
  function Sb(y, b) {
    var _ = this.__data__,
      M = Pa(_, y)
    return M < 0 ? (++this.size, _.push([y, b])) : (_[M][1] = b), this
  }
  ;(lr.prototype.clear = mb),
    (lr.prototype.delete = gb),
    (lr.prototype.get = yb),
    (lr.prototype.has = vb),
    (lr.prototype.set = Sb)
  function Un(y) {
    var b = -1,
      _ = y == null ? 0 : y.length
    for (this.clear(); ++b < _; ) {
      var M = y[b]
      this.set(M[0], M[1])
    }
  }
  function bb() {
    ;(this.size = 0), (this.__data__ = { hash: new dn(), map: new (Ip || lr)(), string: new dn() })
  }
  function xb(y) {
    var b = $a(this, y).delete(y)
    return (this.size -= b ? 1 : 0), b
  }
  function wb(y) {
    return $a(this, y).get(y)
  }
  function kb(y) {
    return $a(this, y).has(y)
  }
  function Cb(y, b) {
    var _ = $a(this, y),
      M = _.size
    return _.set(y, b), (this.size += _.size == M ? 0 : 1), this
  }
  ;(Un.prototype.clear = bb),
    (Un.prototype.delete = xb),
    (Un.prototype.get = wb),
    (Un.prototype.has = kb),
    (Un.prototype.set = Cb)
  function Hn(y) {
    var b = (this.__data__ = new lr(y))
    this.size = b.size
  }
  function _b() {
    ;(this.__data__ = new lr()), (this.size = 0)
  }
  function Tb(y) {
    var b = this.__data__,
      _ = b.delete(y)
    return (this.size = b.size), _
  }
  function Pb(y) {
    return this.__data__.get(y)
  }
  function Eb(y) {
    return this.__data__.has(y)
  }
  function $b(y, b) {
    var _ = this.__data__
    if (_ instanceof lr) {
      var M = _.__data__
      if (!Ip || M.length < r - 1) return M.push([y, b]), (this.size = ++_.size), this
      _ = this.__data__ = new Un(M)
    }
    return _.set(y, b), (this.size = _.size), this
  }
  ;(Hn.prototype.clear = _b),
    (Hn.prototype.delete = Tb),
    (Hn.prototype.get = Pb),
    (Hn.prototype.has = Eb),
    (Hn.prototype.set = $b)
  function Ab(y, b) {
    var _ = du(y),
      M = !_ && cu(y),
      H = !_ && !M && jp(y),
      re = !_ && !M && !H && Up(y),
      ue = _ || M || H || re,
      U = ue ? qS(y.length, String) : [],
      ce = U.length
    for (var kt in y)
      (b || sr.call(y, kt)) &&
        !(
          ue &&
          (kt == 'length' ||
            (H && (kt == 'offset' || kt == 'parent')) ||
            (re && (kt == 'buffer' || kt == 'byteLength' || kt == 'byteOffset')) ||
            Op(kt, ce))
        ) &&
        U.push(kt)
    return U
  }
  function au(y, b, _) {
    ;((_ !== void 0 && !Aa(y[b], _)) || (_ === void 0 && !(b in y))) && su(y, b, _)
  }
  function Rb(y, b, _) {
    var M = y[b]
    ;(!(sr.call(y, b) && Aa(M, _)) || (_ === void 0 && !(b in y))) && su(y, b, _)
  }
  function Pa(y, b) {
    for (var _ = y.length; _--; ) if (Aa(y[_][0], b)) return _
    return -1
  }
  function su(y, b, _) {
    b == '__proto__' && Ta
      ? Ta(y, b, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (y[b] = _)
  }
  var zb = Hb()
  function Ea(y) {
    return y == null ? (y === void 0 ? P : m) : cn && cn in Object(y) ? Gb(y) : Zb(y)
  }
  function Bp(y) {
    return Vo(y) && Ea(y) == s
  }
  function Mb(y) {
    if (!fn(y) || Xb(y)) return !1
    var b = pu(y) ? ob : O
    return b.test(rx(y))
  }
  function Lb(y) {
    return Vo(y) && Wp(y.length) && !!G[Ea(y)]
  }
  function Db(y) {
    if (!fn(y)) return qb(y)
    var b = Np(y),
      _ = []
    for (var M in y) (M == 'constructor' && (b || !sr.call(y, M))) || _.push(M)
    return _
  }
  function Vp(y, b, _, M, H) {
    y !== b &&
      zb(
        b,
        function (re, ue) {
          if ((H || (H = new Hn()), fn(re))) Fb(y, b, ue, _, Vp, M, H)
          else {
            var U = M ? M(uu(y, ue), re, ue + '', y, b, H) : void 0
            U === void 0 && (U = re), au(y, ue, U)
          }
        },
        Hp
      )
  }
  function Fb(y, b, _, M, H, re, ue) {
    var U = uu(y, _),
      ce = uu(b, _),
      kt = ue.get(ce)
    if (kt) {
      au(y, _, kt)
      return
    }
    var ct = re ? re(U, ce, _ + '', y, b, ue) : void 0,
      Oo = ct === void 0
    if (Oo) {
      var hu = du(ce),
        mu = !hu && jp(ce),
        Kp = !hu && !mu && Up(ce)
      ;(ct = ce),
        hu || mu || Kp
          ? du(U)
            ? (ct = U)
            : nx(U)
            ? (ct = jb(U))
            : mu
            ? ((Oo = !1), (ct = Vb(ce, !0)))
            : Kp
            ? ((Oo = !1), (ct = Nb(ce, !0)))
            : (ct = [])
          : ox(ce) || cu(ce)
          ? ((ct = U), cu(U) ? (ct = ix(U)) : (!fn(U) || pu(U)) && (ct = Kb(ce)))
          : (Oo = !1)
    }
    Oo && (ue.set(ce, ct), H(ct, ce, M, re, ue), ue.delete(ce)), au(y, _, ct)
  }
  function Ib(y, b) {
    return ex(Jb(y, b, Gp), y + '')
  }
  var Bb = Ta
    ? function (y, b) {
        return Ta(y, 'toString', { configurable: !0, enumerable: !1, value: sx(b), writable: !0 })
      }
    : Gp
  function Vb(y, b) {
    if (b) return y.slice()
    var _ = y.length,
      M = Mp ? Mp(_) : new y.constructor(_)
    return y.copy(M), M
  }
  function Ob(y) {
    var b = new y.constructor(y.byteLength)
    return new zp(b).set(new zp(y)), b
  }
  function Nb(y, b) {
    var _ = b ? Ob(y.buffer) : y.buffer
    return new y.constructor(_, y.byteOffset, y.length)
  }
  function jb(y, b) {
    var _ = -1,
      M = y.length
    for (b || (b = Array(M)); ++_ < M; ) b[_] = y[_]
    return b
  }
  function Wb(y, b, _, M) {
    var H = !_
    _ || (_ = {})
    for (var re = -1, ue = b.length; ++re < ue; ) {
      var U = b[re],
        ce = M ? M(_[U], y[U], U, _, y) : void 0
      ce === void 0 && (ce = y[U]), H ? su(_, U, ce) : Rb(_, U, ce)
    }
    return _
  }
  function Ub(y) {
    return Ib(function (b, _) {
      var M = -1,
        H = _.length,
        re = H > 1 ? _[H - 1] : void 0,
        ue = H > 2 ? _[2] : void 0
      for (
        re = y.length > 3 && typeof re == 'function' ? (H--, re) : void 0,
          ue && Yb(_[0], _[1], ue) && ((re = H < 3 ? void 0 : re), (H = 1)),
          b = Object(b);
        ++M < H;

      ) {
        var U = _[M]
        U && y(b, U, M, re)
      }
      return b
    })
  }
  function Hb(y) {
    return function (b, _, M) {
      for (var H = -1, re = Object(b), ue = M(b), U = ue.length; U--; ) {
        var ce = ue[y ? U : ++H]
        if (_(re[ce], ce, re) === !1) break
      }
      return b
    }
  }
  function $a(y, b) {
    var _ = y.__data__
    return Qb(b) ? _[typeof b == 'string' ? 'string' : 'hash'] : _.map
  }
  function lu(y, b) {
    var _ = JS(y, b)
    return Mb(_) ? _ : void 0
  }
  function Gb(y) {
    var b = sr.call(y, cn),
      _ = y[cn]
    try {
      y[cn] = void 0
      var M = !0
    } catch {}
    var H = Ap.call(y)
    return M && (b ? (y[cn] = _) : delete y[cn]), H
  }
  function Kb(y) {
    return typeof y.constructor == 'function' && !Np(y) ? ub(Lp(y)) : {}
  }
  function Op(y, b) {
    var _ = typeof y
    return (
      (b = b ?? a),
      !!b && (_ == 'number' || (_ != 'symbol' && oe.test(y))) && y > -1 && y % 1 == 0 && y < b
    )
  }
  function Yb(y, b, _) {
    if (!fn(_)) return !1
    var M = typeof b
    return (M == 'number' ? fu(_) && Op(b, _.length) : M == 'string' && b in _) ? Aa(_[b], y) : !1
  }
  function Qb(y) {
    var b = typeof y
    return b == 'string' || b == 'number' || b == 'symbol' || b == 'boolean'
      ? y !== '__proto__'
      : y === null
  }
  function Xb(y) {
    return !!$p && $p in y
  }
  function Np(y) {
    var b = y && y.constructor,
      _ = (typeof b == 'function' && b.prototype) || ka
    return y === _
  }
  function qb(y) {
    var b = []
    if (y != null) for (var _ in Object(y)) b.push(_)
    return b
  }
  function Zb(y) {
    return Ap.call(y)
  }
  function Jb(y, b, _) {
    return (
      (b = Fp(b === void 0 ? y.length - 1 : b, 0)),
      function () {
        for (var M = arguments, H = -1, re = Fp(M.length - b, 0), ue = Array(re); ++H < re; )
          ue[H] = M[b + H]
        H = -1
        for (var U = Array(b + 1); ++H < b; ) U[H] = M[H]
        return (U[b] = _(ue)), wa(y, this, U)
      }
    )
  }
  function uu(y, b) {
    if (!(b === 'constructor' && typeof y[b] == 'function') && b != '__proto__') return y[b]
  }
  var ex = tx(Bb)
  function tx(y) {
    var b = 0,
      _ = 0
    return function () {
      var M = lb(),
        H = i - (M - _)
      if (((_ = M), H > 0)) {
        if (++b >= o) return arguments[0]
      } else b = 0
      return y.apply(void 0, arguments)
    }
  }
  function rx(y) {
    if (y != null) {
      try {
        return Ca.call(y)
      } catch {}
      try {
        return y + ''
      } catch {}
    }
    return ''
  }
  function Aa(y, b) {
    return y === b || (y !== y && b !== b)
  }
  var cu = Bp(
      (function () {
        return arguments
      })()
    )
      ? Bp
      : function (y) {
          return Vo(y) && sr.call(y, 'callee') && !ib.call(y, 'callee')
        },
    du = Array.isArray
  function fu(y) {
    return y != null && Wp(y.length) && !pu(y)
  }
  function nx(y) {
    return Vo(y) && fu(y)
  }
  var jp = sb || lx
  function pu(y) {
    if (!fn(y)) return !1
    var b = Ea(y)
    return b == h || b == v || b == u || b == g
  }
  function Wp(y) {
    return typeof y == 'number' && y > -1 && y % 1 == 0 && y <= a
  }
  function fn(y) {
    var b = typeof y
    return y != null && (b == 'object' || b == 'function')
  }
  function Vo(y) {
    return y != null && typeof y == 'object'
  }
  function ox(y) {
    if (!Vo(y) || Ea(y) != p) return !1
    var b = Lp(y)
    if (b === null) return !0
    var _ = sr.call(b, 'constructor') && b.constructor
    return typeof _ == 'function' && _ instanceof _ && Ca.call(_) == nb
  }
  var Up = Io ? ZS(Io) : Lb
  function ix(y) {
    return Wb(y, Hp(y))
  }
  function Hp(y) {
    return fu(y) ? Ab(y, !0) : Db(y)
  }
  var ax = Ub(function (y, b, _, M) {
    Vp(y, b, _, M)
  })
  function sx(y) {
    return function () {
      return y
    }
  }
  function Gp(y) {
    return y
  }
  function lx() {
    return !1
  }
  e.exports = ax
})(ZC, tl)
const At = tl
var JC = (e) => /!(important)?$/.test(e),
  hm = (e) => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  e2 = (e, t) => (r) => {
    const n = String(t),
      o = JC(n),
      i = hm(n),
      a = e ? `${e}.${i}` : i
    let s = mt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t
    return (s = hm(s)), o ? `${s} !important` : s
  }
function qf(e) {
  const { scale: t, transform: r, compose: n } = e
  return (i, a) => {
    var s
    const l = e2(t, i)(a)
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l
    return n && (u = n(u, a)), u
  }
}
var qa =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t)
function Ct(e, t) {
  return (r) => {
    const n = { property: r, scale: e }
    return (n.transform = qf({ scale: e, transform: t })), n
  }
}
var t2 =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === 'rtl' ? e : t
function r2(e) {
  const { property: t, scale: r, transform: n } = e
  return { scale: r, property: t2(t), transform: r ? qf({ scale: r, compose: n }) : n }
}
var Gv = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
]
function n2() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...Gv,
  ].join(' ')
}
function o2() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...Gv].join(
    ' '
  )
}
var i2 = {
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
  a2 = {
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
function s2(e) {
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
var l2 = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  md = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  u2 = new Set(Object.values(md)),
  gd = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  c2 = (e) => e.trim()
function d2(e, t) {
  if (e == null || gd.has(e)) return e
  if (!(yd(e) || gd.has(e))) return `url('${e}')`
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2]
  if (!i || !a) return e
  const s = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...u] = a.split(',').map(c2).filter(Boolean)
  if ((u == null ? void 0 : u.length) === 0) return e
  const c = l in md ? md[l] : l
  u.unshift(c)
  const d = u.map((f) => {
    if (u2.has(f)) return f
    const h = f.indexOf(' '),
      [v, S] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      C = yd(S) ? S : S && S.split(' '),
      m = `colors.${v}`,
      p = m in t.__cssMap ? t.__cssMap[m].varRef : v
    return C ? [p, ...(Array.isArray(C) ? C : [C])].join(' ') : p
  })
  return `${s}(${d.join(', ')})`
}
var yd = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  f2 = (e, t) => d2(e, t ?? {})
function p2(e) {
  return /^var\(--.+\)$/.test(e)
}
var h2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
  },
  Yt = (e) => (t) => `${e}(${t})`,
  Y = {
    filter(e) {
      return e !== 'auto' ? e : i2
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : a2
    },
    ring(e) {
      return s2(Y.px(e))
    },
    bgClip(e) {
      return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
    },
    transform(e) {
      return e === 'auto' ? n2() : e === 'auto-gpu' ? o2() : e
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e
    },
    px(e) {
      if (e == null) return e
      const { unitless: t } = h2(e)
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
      if (p2(e) || e == null) return e
      const t = typeof e == 'string' && !e.endsWith('deg')
      return typeof e == 'number' || t ? `${e}deg` : e
    },
    gradient: f2,
    blur: Yt('blur'),
    opacity: Yt('opacity'),
    brightness: Yt('brightness'),
    contrast: Yt('contrast'),
    dropShadow: Yt('drop-shadow'),
    grayscale: Yt('grayscale'),
    hueRotate: Yt('hue-rotate'),
    invert: Yt('invert'),
    saturate: Yt('saturate'),
    sepia: Yt('sepia'),
    bgImage(e) {
      return e == null || yd(e) || gd.has(e) ? e : `url(${e})`
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none'
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e }
    },
    flexDirection(e) {
      var t
      const { space: r, divide: n } = (t = l2[e]) != null ? t : {},
        o = { flexDirection: e }
      return r && (o[r] = 1), n && (o[n] = 1), o
    },
  },
  x = {
    borderWidths: Ct('borderWidths'),
    borderStyles: Ct('borderStyles'),
    colors: Ct('colors'),
    borders: Ct('borders'),
    gradients: Ct('gradients', Y.gradient),
    radii: Ct('radii', Y.px),
    space: Ct('space', qa(Y.vh, Y.px)),
    spaceT: Ct('space', qa(Y.vh, Y.px)),
    degreeT(e) {
      return { property: e, transform: Y.degree }
    },
    prop(e, t, r) {
      return { property: e, scale: t, ...(t && { transform: qf({ scale: t, transform: r }) }) }
    },
    propT(e, t) {
      return { property: e, transform: t }
    },
    sizes: Ct('sizes', qa(Y.vh, Y.px)),
    sizesT: Ct('sizes', qa(Y.vh, Y.fraction)),
    shadows: Ct('shadows'),
    logical: r2,
    blur: Ct('blur', Y.blur),
  },
  ws = {
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
Object.assign(ws, { bgImage: ws.backgroundImage, bgImg: ws.backgroundImage })
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
var m2 = {
    color: x.colors('color'),
    textColor: x.colors('color'),
    fill: x.colors('fill'),
    stroke: x.colors('stroke'),
  },
  vd = {
    boxShadow: x.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: x.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: x.prop('backgroundBlendMode'),
    opacity: !0,
  }
Object.assign(vd, { shadow: vd.boxShadow })
var g2 = {
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
  rl = {
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
Object.assign(rl, { flexDir: rl.flexDirection })
var Kv = {
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
  y2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Y.outline },
    outlineOffset: !0,
    outlineColor: x.colors('outlineColor'),
  },
  Tt = {
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
Object.assign(Tt, {
  w: Tt.width,
  h: Tt.height,
  minW: Tt.minWidth,
  maxW: Tt.maxWidth,
  minH: Tt.minHeight,
  maxH: Tt.maxHeight,
  overscroll: Tt.overscrollBehavior,
  overscrollX: Tt.overscrollBehaviorX,
  overscrollY: Tt.overscrollBehaviorY,
})
var v2 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: x.prop('listStyleImage'),
}
function S2(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var b2 = (e) => {
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
  x2 = b2(S2),
  w2 = {
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
  k2 = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Wu = (e, t, r) => {
    const n = {},
      o = x2(e, t, {})
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i])
    return n
  },
  C2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? w2 : e === 'focusable' ? k2 : {}
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, r) => Wu(t, `layerStyles.${e}`, r) },
    textStyle: { processResult: !0, transform: (e, t, r) => Wu(t, `textStyles.${e}`, r) },
    apply: { processResult: !0, transform: (e, t, r) => Wu(t, e, r) },
  },
  vi = {
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
Object.assign(vi, { insetStart: vi.insetInlineStart, insetEnd: vi.insetInlineEnd })
var _2 = {
    ring: { transform: Y.ring },
    ringColor: x.colors('--chakra-ring-color'),
    ringOffset: x.prop('--chakra-ring-offset-width'),
    ringOffsetColor: x.colors('--chakra-ring-offset-color'),
    ringInset: x.prop('--chakra-ring-inset'),
  },
  ae = {
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
Object.assign(ae, {
  m: ae.margin,
  mt: ae.marginTop,
  mr: ae.marginRight,
  me: ae.marginInlineEnd,
  marginEnd: ae.marginInlineEnd,
  mb: ae.marginBottom,
  ml: ae.marginLeft,
  ms: ae.marginInlineStart,
  marginStart: ae.marginInlineStart,
  mx: ae.marginX,
  my: ae.marginY,
  p: ae.padding,
  pt: ae.paddingTop,
  py: ae.paddingY,
  px: ae.paddingX,
  pb: ae.paddingBottom,
  pl: ae.paddingLeft,
  ps: ae.paddingInlineStart,
  paddingStart: ae.paddingInlineStart,
  pr: ae.paddingRight,
  pe: ae.paddingInlineEnd,
  paddingEnd: ae.paddingInlineEnd,
})
var T2 = {
    textDecorationColor: x.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: x.shadows('textShadow'),
  },
  P2 = {
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
  E2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: x.prop('transitionDuration', 'transition.duration'),
    transitionProperty: x.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: x.prop('transitionTimingFunction', 'transition.easing'),
  },
  $2 = {
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
  A2 = {
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
function Yv(e) {
  return mt(e) && e.reference ? e.reference : String(e)
}
var Kl = (e, ...t) => t.map(Yv).join(` ${e} `).replace(/calc/g, ''),
  mm = (...e) => `calc(${Kl('+', ...e)})`,
  gm = (...e) => `calc(${Kl('-', ...e)})`,
  Sd = (...e) => `calc(${Kl('*', ...e)})`,
  ym = (...e) => `calc(${Kl('/', ...e)})`,
  vm = (e) => {
    const t = Yv(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : Sd(t, -1)
  },
  vn = Object.assign(
    (e) => ({
      add: (...t) => vn(mm(e, ...t)),
      subtract: (...t) => vn(gm(e, ...t)),
      multiply: (...t) => vn(Sd(e, ...t)),
      divide: (...t) => vn(ym(e, ...t)),
      negate: () => vn(vm(e)),
      toString: () => e.toString(),
    }),
    { add: mm, subtract: gm, multiply: Sd, divide: ym, negate: vm }
  )
function R2(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function z2(e) {
  const t = R2(e.toString())
  return L2(M2(t))
}
function M2(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e
}
function L2(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function D2(e, t = '') {
  return [t, e].filter(Boolean).join('-')
}
function F2(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`
}
function I2(e, t = '') {
  return z2(`--${D2(e, t)}`)
}
function j(e, t, r) {
  const n = I2(e, r)
  return { variable: n, reference: F2(n, t) }
}
function B2(e) {
  const t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function V2(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '')
  return { unitless: !r, value: t, unit: r }
}
function bd(e) {
  if (e == null) return e
  const { unitless: t } = V2(e)
  return t || typeof e == 'number' ? `${e}px` : e
}
var Qv = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Zf = (e) => Object.fromEntries(Object.entries(e).sort(Qv))
function Sm(e) {
  const t = Zf(e)
  return Object.assign(Object.values(t), t)
}
function O2(e) {
  const t = Object.keys(Zf(e))
  return new Set(t)
}
function bm(e) {
  var t
  if (!e) return e
  e = (t = bd(e)) != null ? t : e
  const r = -0.02
  return typeof e == 'number'
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`)
}
function oi(e, t) {
  const r = ['@media screen']
  return (
    e && r.push('and', `(min-width: ${bd(e)})`),
    t && r.push('and', `(max-width: ${bd(t)})`),
    r.join(' ')
  )
}
function N2(e) {
  var t
  if (!e) return null
  e.base = (t = e.base) != null ? t : '0px'
  const r = Sm(e),
    n = Object.entries(e)
      .sort(Qv)
      .map(([a, s], l, u) => {
        var c
        let [, d] = (c = u[l + 1]) != null ? c : []
        return (
          (d = parseFloat(d) > 0 ? bm(d) : void 0),
          {
            _minW: bm(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: oi(null, d),
            minWQuery: oi(s),
            minMaxQuery: oi(s, d),
          }
        )
      }),
    o = O2(e),
    i = Array.from(o.values())
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a)
      return s.length > 0 && s.every((l) => o.has(l))
    },
    asObject: Zf(e),
    asArray: Sm(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a)
    },
    media: [null, ...r.map((a) => oi(a)).slice(1)],
    toArrayValue(a) {
      if (!mt(a)) throw new Error('toArrayValue: value must be an object')
      const s = i.map((l) => {
        var u
        return (u = a[l]) != null ? u : null
      })
      for (; B2(s) === null; ) s.pop()
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
var Le = {
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
  Ar = (e) => Xv((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  ur = (e) => Xv((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  Xv = (e, ...t) => t.map(e).join(', '),
  Yl = {
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
    _groupHover: Ar(Le.hover),
    _peerHover: ur(Le.hover),
    _groupFocus: Ar(Le.focus),
    _peerFocus: ur(Le.focus),
    _groupFocusVisible: Ar(Le.focusVisible),
    _peerFocusVisible: ur(Le.focusVisible),
    _groupActive: Ar(Le.active),
    _peerActive: ur(Le.active),
    _groupDisabled: Ar(Le.disabled),
    _peerDisabled: ur(Le.disabled),
    _groupInvalid: Ar(Le.invalid),
    _peerInvalid: ur(Le.invalid),
    _groupChecked: Ar(Le.checked),
    _peerChecked: ur(Le.checked),
    _groupFocusWithin: Ar(Le.focusWithin),
    _peerFocusWithin: ur(Le.focusWithin),
    _peerPlaceholderShown: ur(Le.placeholderShown),
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
  j2 = Object.keys(Yl)
function xm(e, t) {
  return j(String(e).replace(/\./g, '-'), void 0, t)
}
function W2(e, t) {
  let r = {}
  const n = {}
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = xm(o, t == null ? void 0 : t.cssVarPrefix)
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [h, ...v] = f,
          S = `${h}.-${v.join('.')}`,
          C = vn.negate(s),
          m = vn.negate(u)
        n[S] = { value: C, var: l, varRef: m }
      }
      ;(r[l] = s), (n[o] = { value: s, var: l, varRef: u })
      continue
    }
    const c = (f) => {
        const v = [String(o).split('.')[0], f].join('.')
        if (!e[v]) return f
        const { reference: C } = xm(v, t == null ? void 0 : t.cssVarPrefix)
        return C
      },
      d = mt(s) ? s : { default: s }
    ;(r = At(
      r,
      Object.entries(d).reduce((f, [h, v]) => {
        var S, C
        const m = c(v)
        if (h === 'default') return (f[l] = m), f
        const p = (C = (S = Yl) == null ? void 0 : S[h]) != null ? C : h
        return (f[p] = { [l]: m }), f
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u })
  }
  return { cssVars: r, cssMap: n }
}
function U2(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
function H2(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
var G2 = [
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
function K2(e) {
  return H2(e, G2)
}
function Y2(e) {
  return e.semanticTokens
}
function Q2(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e
  return o
}
function X2({ tokens: e, semanticTokens: t }) {
  var r, n
  const o = Object.entries((r = xd(e)) != null ? r : {}).map(([a, s]) => [
      a,
      { isSemantic: !1, value: s },
    ]),
    i = Object.entries((n = xd(t, 1)) != null ? n : {}).map(([a, s]) => [
      a,
      { isSemantic: !0, value: s },
    ])
  return Object.fromEntries([...o, ...i])
}
function xd(e, t = 1 / 0) {
  return (!mt(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          mt(o) || Array.isArray(o)
            ? Object.entries(xd(o, t - 1)).forEach(([i, a]) => {
                r[`${n}.${i}`] = a
              })
            : (r[n] = o),
          r
        ),
        {}
      )
}
function q2(e) {
  var t
  const r = Q2(e),
    n = K2(r),
    o = Y2(r),
    i = X2({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = W2(i, { cssVarPrefix: a })
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
      __breakpoints: N2(r.breakpoints),
    }),
    r
  )
}
var Jf = At({}, ws, Q, m2, rl, Tt, g2, _2, y2, Kv, C2, vi, vd, ae, A2, $2, T2, P2, v2, E2)
Object.assign({}, ae, Tt, rl, Kv, vi)
var Z2 = [...Object.keys(Jf), ...j2],
  J2 = { ...Jf, ...Yl },
  e_ = (e) => e in J2,
  t_ = (e) => (t) => {
    if (!t.__breakpoints) return e
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {}
    for (const a in e) {
      let s = jr(e[a], t)
      if (s == null) continue
      if (((s = mt(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
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
function r_(e) {
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
function n_(e) {
  return /^var\(--.+\)$/.test(e)
}
var o_ = (e, t) => e.startsWith('--') && typeof t == 'string' && !n_(t),
  i_ = (e, t) => {
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
      [a, s] = r_(t)
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t
  }
function a_(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u
      const c = jr(i, n),
        d = t_(c)(n)
      let f = {}
      for (let h in d) {
        const v = d[h]
        let S = jr(v, n)
        h in r && (h = r[h]), o_(h, S) && (S = i_(n, S))
        let C = t[h]
        if ((C === !0 && (C = { property: h }), mt(S))) {
          ;(f[h] = (s = f[h]) != null ? s : {}), (f[h] = At({}, f[h], o(S, !0)))
          continue
        }
        let m =
          (u = (l = C == null ? void 0 : C.transform) == null ? void 0 : l.call(C, S, n, c)) != null
            ? u
            : S
        m = C != null && C.processResult ? o(m, !0) : m
        const p = jr(C == null ? void 0 : C.property, n)
        if (!a && C != null && C.static) {
          const g = jr(C.static, n)
          f = At({}, f, g)
        }
        if (p && Array.isArray(p)) {
          for (const g of p) f[g] = m
          continue
        }
        if (p) {
          p === '&' && mt(m) ? (f = At({}, f, m)) : (f[p] = m)
          continue
        }
        if (mt(m)) {
          f = At({}, f, m)
          continue
        }
        f[h] = m
      }
      return f
    }
  return o
}
var qv = (e) => (t) => a_({ theme: t, pseudos: Yl, configs: Jf })(e)
function le(e) {
  return {
    definePartsStyle(t) {
      return t
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t }
    },
  }
}
function s_(e, t) {
  if (Array.isArray(e)) return e
  if (mt(e)) return t(e)
  if (e != null) return [e]
}
function l_(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r
  return -1
}
function u_(e) {
  const t = e.__breakpoints
  return function (n, o, i, a) {
    var s, l
    if (!t) return
    const u = {},
      c = s_(i, t.toArrayValue)
    if (!c) return u
    const d = c.length,
      f = d === 1,
      h = !!n.parts
    for (let v = 0; v < d; v++) {
      const S = t.details[v],
        C = t.details[l_(c, v)],
        m = oi(S.minW, C == null ? void 0 : C._minW),
        p = jr((s = n[o]) == null ? void 0 : s[c[v]], a)
      if (p) {
        if (h) {
          ;(l = n.parts) == null ||
            l.forEach((g) => {
              At(u, { [g]: f ? p[g] : { [m]: p[g] } })
            })
          continue
        }
        if (!h) {
          f ? At(u, p) : (u[m] = p)
          continue
        }
        u[m] = p
      }
    }
    return u
  }
}
function c_(e) {
  return (t) => {
    var r
    const { variant: n, size: o, theme: i } = t,
      a = u_(i)
    return At(
      {},
      jr((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', n, t)
    )
  }
}
function Vn(e) {
  return U2(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var d_ = [
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
function f_(e) {
  return mt(e) ? d_.every((t) => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var p_ = {
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
  h_ = p_,
  m_ = { 'base': '0em', 'sm': '30em', 'md': '48em', 'lg': '62em', 'xl': '80em', '2xl': '96em' },
  g_ = m_,
  y_ = {
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
  v_ = y_,
  S_ = {
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
  b_ = S_,
  x_ = {
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
  w_ = x_,
  k_ = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  C_ = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  __ = {
    'ultra-fast': '50ms',
    'faster': '100ms',
    'fast': '150ms',
    'normal': '200ms',
    'slow': '300ms',
    'slower': '400ms',
    'ultra-slow': '500ms',
  },
  T_ = { property: k_, easing: C_, duration: __ },
  P_ = T_,
  E_ = {
    'none': 0,
    'sm': '4px',
    'base': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  $_ = E_,
  A_ = {
    'none': 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  R_ = A_,
  z_ = {
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
  Zv = z_,
  Jv = {
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
  M_ = {
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
  L_ = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  D_ = { ...Jv, ...M_, container: L_ },
  e1 = D_,
  F_ = {
    breakpoints: g_,
    zIndices: h_,
    radii: b_,
    blur: $_,
    colors: v_,
    ...Zv,
    sizes: e1,
    shadows: w_,
    space: Jv,
    borders: R_,
    transition: P_,
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
var I_ = J('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
  B_ = J('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
  V_ = J('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
  O_ = J('breadcrumb').parts('link', 'item', 'container').extend('separator')
J('button').parts()
var N_ = J('checkbox').parts('control', 'icon', 'container').extend('label')
J('progress').parts('track', 'filledTrack').extend('label')
var j_ = J('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  W_ = J('editable').parts('preview', 'input', 'textarea'),
  U_ = J('form').parts('container', 'requiredIndicator', 'helperText'),
  H_ = J('formError').parts('text', 'icon'),
  G_ = J('input').parts('addon', 'field', 'element'),
  K_ = J('list').parts('container', 'item', 'icon'),
  Y_ = J('menu').parts('button', 'list', 'item').extend('groupTitle', 'command', 'divider'),
  Q_ = J('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  X_ = J('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
J('pininput').parts('field')
var q_ = J('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  Z_ = J('progress').parts('label', 'filledTrack', 'track'),
  J_ = J('radio').parts('container', 'control', 'label'),
  eT = J('select').parts('field', 'icon'),
  tT = J('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  rT = J('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  nT = J('switch').parts('container', 'track', 'thumb'),
  oT = J('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  iT = J('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  aT = J('tag').parts('container', 'label', 'closeButton'),
  sT = J('card').parts('container', 'header', 'body', 'footer')
function kn(e, t, r) {
  return Math.min(Math.max(e, r), t)
}
class lT extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`)
  }
}
var ii = lT
function ep(e) {
  if (typeof e != 'string') throw new ii(e)
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
  let t = e.trim()
  t = gT.test(e) ? dT(e) : e
  const r = fT.exec(t)
  if (r) {
    const a = Array.from(r).slice(1)
    return [
      ...a.slice(0, 3).map((s) => parseInt(ea(s, 2), 16)),
      parseInt(ea(a[3] || 'f', 2), 16) / 255,
    ]
  }
  const n = pT.exec(t)
  if (n) {
    const a = Array.from(n).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
  }
  const o = hT.exec(t)
  if (o) {
    const a = Array.from(o).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || '1')]
  }
  const i = mT.exec(t)
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
    if (kn(0, 100, s) !== s) throw new ii(e)
    if (kn(0, 100, l) !== l) throw new ii(e)
    return [...yT(a, s, l), Number.isNaN(u) ? 1 : u]
  }
  throw new ii(e)
}
function uT(e) {
  let t = 5381,
    r = e.length
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r)
  return (t >>> 0) % 2341
}
const wm = (e) => parseInt(e.replace(/_/g, ''), 36),
  cT =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = wm(t.substring(0, 3)),
          n = wm(t.substring(3)).toString(16)
        let o = ''
        for (let i = 0; i < 6 - n.length; i++) o += '0'
        return (e[r] = `${o}${n}`), e
      }, {})
function dT(e) {
  const t = e.toLowerCase().trim(),
    r = cT[uT(t)]
  if (!r) throw new ii(e)
  return `#${r}`
}
const ea = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  fT = new RegExp(`^#${ea('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  pT = new RegExp(`^#${ea('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  hT = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${ea(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  mT = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  gT = /^[a-z]+$/i,
  km = (e) => Math.round(e * 255),
  yT = (e, t, r) => {
    let n = r / 100
    if (t === 0) return [n, n, n].map(km)
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
    return [d, f, h].map(km)
  }
function vT(e, t, r, n) {
  return `rgba(${kn(0, 255, e).toFixed()}, ${kn(0, 255, t).toFixed()}, ${kn(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(kn(0, 1, n).toFixed(3))})`
}
function ST(e, t) {
  const [r, n, o, i] = ep(e)
  return vT(r, n, o, i - t)
}
function bT(e) {
  const [t, r, n, o] = ep(e)
  let i = (a) => {
    const s = kn(0, 255, a).toString(16)
    return s.length === 1 ? `0${s}` : s
  }
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function xT(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var wT = (e) => Object.keys(e).length === 0,
  Ye = (e, t, r) => {
    const n = xT(e, `colors.${t}`, t)
    try {
      return bT(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  kT = (e) => {
    const [t, r, n] = ep(e)
    return (t * 299 + r * 587 + n * 114) / 1e3
  },
  CT = (e) => (t) => {
    const r = Ye(t, e)
    return kT(r) < 128 ? 'dark' : 'light'
  },
  _T = (e) => (t) => CT(e)(t) === 'dark',
  Ao = (e, t) => (r) => {
    const n = Ye(r, e)
    return ST(n, 1 - t)
  }
function Cm(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
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
var TT = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`
function PT(e) {
  const t = TT()
  return !e || wT(e)
    ? t
    : e.string && e.colors
    ? $T(e.string, e.colors)
    : e.string && !e.colors
    ? ET(e.string)
    : e.colors && !e.string
    ? AT(e.colors)
    : t
}
function ET(e) {
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
function $T(e, t) {
  let r = 0
  if (e.length === 0) return t[0]
  for (let n = 0; n < e.length; n += 1) (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
  return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function AT(e) {
  return e[Math.floor(Math.random() * e.length)]
}
function F(e, t) {
  return (r) => (r.colorMode === 'dark' ? t : e)
}
function tp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e
  return t ? (t === 'vertical' ? r : n) : {}
}
function t1(e) {
  return mt(e) && e.reference ? e.reference : String(e)
}
var Ql = (e, ...t) => t.map(t1).join(` ${e} `).replace(/calc/g, ''),
  _m = (...e) => `calc(${Ql('+', ...e)})`,
  Tm = (...e) => `calc(${Ql('-', ...e)})`,
  wd = (...e) => `calc(${Ql('*', ...e)})`,
  Pm = (...e) => `calc(${Ql('/', ...e)})`,
  Em = (e) => {
    const t = t1(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : wd(t, -1)
  },
  fr = Object.assign(
    (e) => ({
      add: (...t) => fr(_m(e, ...t)),
      subtract: (...t) => fr(Tm(e, ...t)),
      multiply: (...t) => fr(wd(e, ...t)),
      divide: (...t) => fr(Pm(e, ...t)),
      negate: () => fr(Em(e)),
      toString: () => e.toString(),
    }),
    { add: _m, subtract: Tm, multiply: wd, divide: Pm, negate: Em }
  )
function RT(e) {
  return !Number.isInteger(parseFloat(e.toString()))
}
function zT(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function r1(e) {
  const t = zT(e.toString())
  return t.includes('\\.') ? e : RT(e) ? t.replace('.', '\\.') : e
}
function MT(e, t = '') {
  return [t, r1(e)].filter(Boolean).join('-')
}
function LT(e, t) {
  return `var(${r1(e)}${t ? `, ${t}` : ''})`
}
function DT(e, t = '') {
  return `--${MT(e, t)}`
}
function $e(e, t) {
  const r = DT(e, t == null ? void 0 : t.prefix)
  return { variable: r, reference: LT(r, FT(t == null ? void 0 : t.fallback)) }
}
function FT(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: IT, definePartsStyle: ks } = le(nT.keys),
  Si = $e('switch-track-width'),
  Pn = $e('switch-track-height'),
  Uu = $e('switch-track-diff'),
  BT = fr.subtract(Si, Pn),
  kd = $e('switch-thumb-x'),
  Xo = $e('switch-bg'),
  VT = (e) => {
    const { colorScheme: t } = e
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [Si.reference],
      height: [Pn.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Xo.variable]: 'colors.gray.300',
      _dark: { [Xo.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [Xo.variable]: `colors.${t}.500`, _dark: { [Xo.variable]: `colors.${t}.200` } },
      bg: Xo.reference,
    }
  },
  OT = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Pn.reference],
    height: [Pn.reference],
    _checked: { transform: `translateX(${kd.reference})` },
  },
  NT = ks((e) => ({
    container: {
      [Uu.variable]: BT,
      [kd.variable]: Uu.reference,
      _rtl: { [kd.variable]: fr(Uu).negate().toString() },
    },
    track: VT(e),
    thumb: OT,
  })),
  jT = {
    sm: ks({ container: { [Si.variable]: '1.375rem', [Pn.variable]: 'sizes.3' } }),
    md: ks({ container: { [Si.variable]: '1.875rem', [Pn.variable]: 'sizes.4' } }),
    lg: ks({ container: { [Si.variable]: '2.875rem', [Pn.variable]: 'sizes.6' } }),
  },
  WT = IT({ baseStyle: NT, sizes: jT, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: UT, definePartsStyle: vo } = le(oT.keys),
  HT = vo({
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
  nl = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  GT = vo((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: F('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...nl,
      },
      td: { borderBottom: '1px', borderColor: F(`${t}.100`, `${t}.700`)(e), ...nl },
      caption: { color: F('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  KT = vo((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: F('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...nl,
      },
      td: { borderBottom: '1px', borderColor: F(`${t}.100`, `${t}.700`)(e), ...nl },
      caption: { color: F('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: F(`${t}.100`, `${t}.700`)(e) },
            'td': { background: F(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  YT = { simple: GT, striped: KT, unstyled: {} },
  QT = {
    sm: vo({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: vo({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: vo({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  XT = UT({
    baseStyle: HT,
    variants: YT,
    sizes: QT,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  rt = j('tabs-color'),
  Nt = j('tabs-bg'),
  Za = j('tabs-border-color'),
  { defineMultiStyleConfig: qT, definePartsStyle: or } = le(iT.keys),
  ZT = (e) => {
    const { orientation: t } = e
    return { display: t === 'vertical' ? 'flex' : 'block' }
  },
  JT = (e) => {
    const { isFitted: t } = e
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    }
  },
  eP = (e) => {
    const { align: t = 'start', orientation: r } = e
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: r === 'vertical' ? 'column' : 'row',
    }
  },
  tP = { p: 4 },
  rP = or((e) => ({ root: ZT(e), tab: JT(e), tablist: eP(e), tabpanel: tP })),
  nP = {
    sm: or({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: or({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: or({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  oP = or((e) => {
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
          [rt.variable]: `colors.${t}.600`,
          _dark: { [rt.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [Nt.variable]: 'colors.gray.200',
          _dark: { [Nt.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: rt.reference,
        bg: Nt.reference,
      },
    }
  }),
  iP = or((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [Za.variable]: 'transparent',
        _selected: {
          [rt.variable]: `colors.${t}.600`,
          [Za.variable]: 'colors.white',
          _dark: { [rt.variable]: `colors.${t}.300`, [Za.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: Za.reference,
        },
        color: rt.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  aP = or((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [Nt.variable]: 'colors.gray.50',
        _dark: { [Nt.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [Nt.variable]: 'colors.white',
          [rt.variable]: `colors.${t}.600`,
          _dark: { [Nt.variable]: 'colors.gray.800', [rt.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: rt.reference,
        bg: Nt.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  sP = or((e) => {
    const { colorScheme: t, theme: r } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: Ye(r, `${t}.700`), bg: Ye(r, `${t}.100`) },
      },
    }
  }),
  lP = or((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [rt.variable]: 'colors.gray.600',
        _dark: { [rt.variable]: 'inherit' },
        _selected: {
          [rt.variable]: 'colors.white',
          [Nt.variable]: `colors.${t}.600`,
          _dark: { [rt.variable]: 'colors.gray.800', [Nt.variable]: `colors.${t}.300` },
        },
        color: rt.reference,
        bg: Nt.reference,
      },
    }
  }),
  uP = or({}),
  cP = {
    'line': oP,
    'enclosed': iP,
    'enclosed-colored': aP,
    'soft-rounded': sP,
    'solid-rounded': lP,
    'unstyled': uP,
  },
  dP = qT({
    baseStyle: rP,
    sizes: nP,
    variants: cP,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  ta = j('badge-bg'),
  qr = j('badge-color'),
  n1 = j('badge-shadow'),
  fP = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: ta.reference,
    color: qr.reference,
    boxShadow: n1.reference,
  },
  pP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ao(`${t}.500`, 0.6)(r)
    return {
      [ta.variable]: `colors.${t}.500`,
      [qr.variable]: 'colors.white',
      _dark: { [ta.variable]: n, [qr.variable]: 'colors.whiteAlpha.800' },
    }
  },
  hP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ao(`${t}.200`, 0.16)(r)
    return {
      [ta.variable]: `colors.${t}.100`,
      [qr.variable]: `colors.${t}.800`,
      _dark: { [ta.variable]: n, [qr.variable]: `colors.${t}.200` },
    }
  },
  mP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ao(`${t}.200`, 0.8)(r)
    return {
      [qr.variable]: `colors.${t}.500`,
      _dark: { [qr.variable]: n },
      [n1.variable]: `inset 0 0 0px 1px ${qr.reference}`,
    }
  },
  gP = { solid: pP, subtle: hP, outline: mP },
  bi = { baseStyle: fP, variants: gP, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  yP = j('badge-bg'),
  vP = j('badge-color'),
  { defineMultiStyleConfig: SP, definePartsStyle: En } = le(aT.keys),
  bP = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    color: vP.reference,
    bg: yP.reference,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' },
  },
  xP = { lineHeight: 1.2, overflow: 'visible' },
  wP = {
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
  kP = En({ container: bP, label: xP, closeButton: wP }),
  CP = {
    sm: En({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: En({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: En({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } }),
  },
  _P = {
    subtle: En((e) => {
      var t
      return { container: (t = bi.variants) == null ? void 0 : t.subtle(e) }
    }),
    solid: En((e) => {
      var t
      return { container: (t = bi.variants) == null ? void 0 : t.solid(e) }
    }),
    outline: En((e) => {
      var t
      return { container: (t = bi.variants) == null ? void 0 : t.outline(e) }
    }),
  },
  TP = SP({
    variants: _P,
    baseStyle: kP,
    sizes: CP,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: mr, defineMultiStyleConfig: PP } = le(G_.keys),
  EP = mr({
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
  Rr = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  $P = {
    lg: mr({ field: Rr.lg, addon: Rr.lg }),
    md: mr({ field: Rr.md, addon: Rr.md }),
    sm: mr({ field: Rr.sm, addon: Rr.sm }),
    xs: mr({ field: Rr.xs, addon: Rr.xs }),
  }
function rp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e
  return {
    focusBorderColor: t || F('blue.500', 'blue.300')(e),
    errorBorderColor: r || F('red.500', 'red.300')(e),
  }
}
var AP = mr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = rp(e)
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: F('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ye(t, n), boxShadow: `0 0 0 1px ${Ye(t, n)}` },
        _focusVisible: { zIndex: 1, borderColor: Ye(t, r), boxShadow: `0 0 0 1px ${Ye(t, r)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: F('inherit', 'whiteAlpha.50')(e),
        bg: F('gray.100', 'whiteAlpha.300')(e),
      },
    }
  }),
  RP = mr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = rp(e)
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: F('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: F('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ye(t, n) },
        _focusVisible: { bg: 'transparent', borderColor: Ye(t, r) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: F('gray.100', 'whiteAlpha.50')(e),
      },
    }
  }),
  zP = mr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = rp(e)
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ye(t, n), boxShadow: `0px 1px 0px 0px ${Ye(t, n)}` },
        _focusVisible: { borderColor: Ye(t, r), boxShadow: `0px 1px 0px 0px ${Ye(t, r)}` },
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
  MP = mr({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  LP = { outline: AP, filled: RP, flushed: zP, unstyled: MP },
  q = PP({
    baseStyle: EP,
    sizes: $P,
    variants: LP,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  $m,
  DP = {
    ...(($m = q.baseStyle) == null ? void 0 : $m.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  Am,
  Rm,
  FP = {
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
    unstyled: (Rm = (Am = q.variants) == null ? void 0 : Am.unstyled.field) != null ? Rm : {},
  },
  zm,
  Mm,
  Lm,
  Dm,
  Fm,
  Im,
  Bm,
  Vm,
  IP = {
    xs: (Mm = (zm = q.sizes) == null ? void 0 : zm.xs.field) != null ? Mm : {},
    sm: (Dm = (Lm = q.sizes) == null ? void 0 : Lm.sm.field) != null ? Dm : {},
    md: (Im = (Fm = q.sizes) == null ? void 0 : Fm.md.field) != null ? Im : {},
    lg: (Vm = (Bm = q.sizes) == null ? void 0 : Bm.lg.field) != null ? Vm : {},
  },
  BP = { baseStyle: DP, sizes: IP, variants: FP, defaultProps: { size: 'md', variant: 'outline' } },
  Ja = $e('tooltip-bg'),
  Hu = $e('tooltip-fg'),
  VP = $e('popper-arrow-bg'),
  OP = {
    bg: Ja.reference,
    color: Hu.reference,
    [Ja.variable]: 'colors.gray.700',
    [Hu.variable]: 'colors.whiteAlpha.900',
    _dark: { [Ja.variable]: 'colors.gray.300', [Hu.variable]: 'colors.gray.900' },
    [VP.variable]: Ja.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  NP = { baseStyle: OP },
  { defineMultiStyleConfig: jP, definePartsStyle: ai } = le(Z_.keys),
  WP = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = F(Cm(), Cm('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = F(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ye(r, a)} 50%,
    transparent 100%
  )`
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
  },
  UP = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  HP = (e) => ({ bg: F('gray.100', 'whiteAlpha.300')(e) }),
  GP = (e) => ({ transitionProperty: 'common', transitionDuration: 'slow', ...WP(e) }),
  KP = ai((e) => ({ label: UP, filledTrack: GP(e), track: HP(e) })),
  YP = {
    xs: ai({ track: { h: '1' } }),
    sm: ai({ track: { h: '2' } }),
    md: ai({ track: { h: '3' } }),
    lg: ai({ track: { h: '4' } }),
  },
  QP = jP({ sizes: YP, baseStyle: KP, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  XP = (e) => typeof e == 'function'
function Xe(e, ...t) {
  return XP(e) ? e(...t) : e
}
var { definePartsStyle: Cs, defineMultiStyleConfig: qP } = le(N_.keys),
  xi = j('checkbox-size'),
  ZP = (e) => {
    const { colorScheme: t } = e
    return {
      w: xi.reference,
      h: xi.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: F(`${t}.500`, `${t}.200`)(e),
        borderColor: F(`${t}.500`, `${t}.200`)(e),
        color: F('white', 'gray.900')(e),
        _hover: { bg: F(`${t}.600`, `${t}.300`)(e), borderColor: F(`${t}.600`, `${t}.300`)(e) },
        _disabled: {
          borderColor: F('gray.200', 'transparent')(e),
          bg: F('gray.200', 'whiteAlpha.300')(e),
          color: F('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: F(`${t}.500`, `${t}.200`)(e),
        borderColor: F(`${t}.500`, `${t}.200`)(e),
        color: F('white', 'gray.900')(e),
      },
      _disabled: {
        bg: F('gray.100', 'whiteAlpha.100')(e),
        borderColor: F('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: F('red.500', 'red.300')(e) },
    }
  },
  JP = { _disabled: { cursor: 'not-allowed' } },
  eE = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  tE = { transitionProperty: 'transform', transitionDuration: 'normal' },
  rE = Cs((e) => ({ icon: tE, container: JP, control: Xe(ZP, e), label: eE })),
  nE = {
    sm: Cs({
      control: { [xi.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: Cs({
      control: { [xi.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: Cs({
      control: { [xi.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  ol = qP({ baseStyle: rE, sizes: nE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: oE, definePartsStyle: _s } = le(J_.keys),
  iE = (e) => {
    var t
    const r = (t = Xe(ol.baseStyle, e)) == null ? void 0 : t.control
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
  aE = _s((e) => {
    var t, r, n, o
    return {
      label: (r = (t = ol).baseStyle) == null ? void 0 : r.call(t, e).label,
      container: (o = (n = ol).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: iE(e),
    }
  }),
  sE = {
    md: _s({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: _s({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: _s({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  lE = oE({ baseStyle: aE, sizes: sE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: uE, definePartsStyle: cE } = le(eT.keys),
  es = j('select-bg'),
  Om,
  dE = {
    ...((Om = q.baseStyle) == null ? void 0 : Om.field),
    'appearance': 'none',
    'paddingBottom': '1px',
    'lineHeight': 'normal',
    'bg': es.reference,
    [es.variable]: 'colors.white',
    '_dark': { [es.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: es.reference },
  },
  fE = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  pE = cE({ field: dE, icon: fE }),
  ts = { paddingInlineEnd: '8' },
  Nm,
  jm,
  Wm,
  Um,
  Hm,
  Gm,
  Km,
  Ym,
  hE = {
    lg: {
      ...((Nm = q.sizes) == null ? void 0 : Nm.lg),
      field: { ...((jm = q.sizes) == null ? void 0 : jm.lg.field), ...ts },
    },
    md: {
      ...((Wm = q.sizes) == null ? void 0 : Wm.md),
      field: { ...((Um = q.sizes) == null ? void 0 : Um.md.field), ...ts },
    },
    sm: {
      ...((Hm = q.sizes) == null ? void 0 : Hm.sm),
      field: { ...((Gm = q.sizes) == null ? void 0 : Gm.sm.field), ...ts },
    },
    xs: {
      ...((Km = q.sizes) == null ? void 0 : Km.xs),
      field: { ...((Ym = q.sizes) == null ? void 0 : Ym.xs.field), ...ts },
      icon: { insetEnd: '1' },
    },
  },
  mE = uE({ baseStyle: pE, sizes: hE, variants: q.variants, defaultProps: q.defaultProps }),
  Gu = j('skeleton-start-color'),
  Ku = j('skeleton-end-color'),
  gE = {
    [Gu.variable]: 'colors.gray.100',
    [Ku.variable]: 'colors.gray.400',
    _dark: { [Gu.variable]: 'colors.gray.800', [Ku.variable]: 'colors.gray.600' },
    background: Gu.reference,
    borderColor: Ku.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  yE = { baseStyle: gE },
  Yu = j('skip-link-bg'),
  vE = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [Yu.variable]: 'colors.white',
      _dark: { [Yu.variable]: 'colors.gray.700' },
      bg: Yu.reference,
    },
  },
  SE = { baseStyle: vE },
  { defineMultiStyleConfig: bE, definePartsStyle: Xl } = le(tT.keys),
  ra = j('slider-thumb-size'),
  na = j('slider-track-size'),
  Vr = j('slider-bg'),
  xE = (e) => {
    const { orientation: t } = e
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...tp({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
    }
  },
  wE = (e) => ({
    ...tp({
      orientation: e.orientation,
      horizontal: { h: na.reference },
      vertical: { w: na.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [Vr.variable]: 'colors.gray.200',
    _dark: { [Vr.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [Vr.variable]: 'colors.gray.300',
      _dark: { [Vr.variable]: 'colors.whiteAlpha.300' },
    },
    bg: Vr.reference,
  }),
  kE = (e) => {
    const { orientation: t } = e
    return {
      ...tp({
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
      w: ra.reference,
      h: ra.reference,
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
  CE = (e) => {
    const { colorScheme: t } = e
    return {
      width: 'inherit',
      height: 'inherit',
      [Vr.variable]: `colors.${t}.500`,
      _dark: { [Vr.variable]: `colors.${t}.200` },
      bg: Vr.reference,
    }
  },
  _E = Xl((e) => ({ container: xE(e), track: wE(e), thumb: kE(e), filledTrack: CE(e) })),
  TE = Xl({ container: { [ra.variable]: 'sizes.4', [na.variable]: 'sizes.1' } }),
  PE = Xl({ container: { [ra.variable]: 'sizes.3.5', [na.variable]: 'sizes.1' } }),
  EE = Xl({ container: { [ra.variable]: 'sizes.2.5', [na.variable]: 'sizes.0.5' } }),
  $E = { lg: TE, md: PE, sm: EE },
  AE = bE({ baseStyle: _E, sizes: $E, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  Sn = $e('spinner-size'),
  RE = { width: [Sn.reference], height: [Sn.reference] },
  zE = {
    xs: { [Sn.variable]: 'sizes.3' },
    sm: { [Sn.variable]: 'sizes.4' },
    md: { [Sn.variable]: 'sizes.6' },
    lg: { [Sn.variable]: 'sizes.8' },
    xl: { [Sn.variable]: 'sizes.12' },
  },
  ME = { baseStyle: RE, sizes: zE, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: LE, definePartsStyle: o1 } = le(rT.keys),
  DE = { fontWeight: 'medium' },
  FE = { opacity: 0.8, marginBottom: '2' },
  IE = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  BE = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  VE = o1({ container: {}, label: DE, helpText: FE, number: IE, icon: BE }),
  OE = {
    md: o1({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  NE = LE({ baseStyle: VE, sizes: OE, defaultProps: { size: 'md' } }),
  Qu = j('kbd-bg'),
  jE = {
    [Qu.variable]: 'colors.gray.100',
    _dark: { [Qu.variable]: 'colors.whiteAlpha.100' },
    bg: Qu.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  WE = { baseStyle: jE },
  UE = {
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
  HE = { baseStyle: UE },
  { defineMultiStyleConfig: GE, definePartsStyle: KE } = le(K_.keys),
  YE = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  QE = KE({ icon: YE }),
  XE = GE({ baseStyle: QE }),
  { defineMultiStyleConfig: qE, definePartsStyle: ZE } = le(Y_.keys),
  qt = j('menu-bg'),
  Xu = j('menu-shadow'),
  JE = {
    [qt.variable]: '#fff',
    [Xu.variable]: 'shadows.sm',
    _dark: { [qt.variable]: 'colors.gray.700', [Xu.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: qt.reference,
    boxShadow: Xu.reference,
  },
  e5 = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [qt.variable]: 'colors.gray.100', _dark: { [qt.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [qt.variable]: 'colors.gray.200',
      _dark: { [qt.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [qt.variable]: 'colors.gray.100',
      _dark: { [qt.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: qt.reference,
  },
  t5 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  r5 = { opacity: 0.6 },
  n5 = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  o5 = { transitionProperty: 'common', transitionDuration: 'normal' },
  i5 = ZE({ button: o5, list: JE, item: e5, groupTitle: t5, command: r5, divider: n5 }),
  a5 = qE({ baseStyle: i5 }),
  { defineMultiStyleConfig: s5, definePartsStyle: Cd } = le(Q_.keys),
  qu = j('modal-bg'),
  Zu = j('modal-shadow'),
  l5 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  u5 = (e) => {
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
  c5 = (e) => {
    const { scrollBehavior: t } = e
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [qu.variable]: 'colors.white',
      [Zu.variable]: 'shadows.lg',
      _dark: { [qu.variable]: 'colors.gray.700', [Zu.variable]: 'shadows.dark-lg' },
      bg: qu.reference,
      boxShadow: Zu.reference,
    }
  },
  d5 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  f5 = { position: 'absolute', top: '2', insetEnd: '3' },
  p5 = (e) => {
    const { scrollBehavior: t } = e
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
  },
  h5 = { px: '6', py: '4' },
  m5 = Cd((e) => ({
    overlay: l5,
    dialogContainer: Xe(u5, e),
    dialog: Xe(c5, e),
    header: d5,
    closeButton: f5,
    body: Xe(p5, e),
    footer: h5,
  }))
function It(e) {
  return Cd(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  )
}
var g5 = {
    'xs': It('xs'),
    'sm': It('sm'),
    'md': It('md'),
    'lg': It('lg'),
    'xl': It('xl'),
    '2xl': It('2xl'),
    '3xl': It('3xl'),
    '4xl': It('4xl'),
    '5xl': It('5xl'),
    '6xl': It('6xl'),
    'full': It('full'),
  },
  y5 = s5({ baseStyle: m5, sizes: g5, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: v5, definePartsStyle: i1 } = le(X_.keys),
  np = $e('number-input-stepper-width'),
  a1 = $e('number-input-input-padding'),
  S5 = fr(np).add('0.5rem').toString(),
  Ju = $e('number-input-bg'),
  ec = $e('number-input-color'),
  tc = $e('number-input-border-color'),
  b5 = { [np.variable]: 'sizes.6', [a1.variable]: S5 },
  x5 = (e) => {
    var t, r
    return (r = (t = Xe(q.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {}
  },
  w5 = { width: np.reference },
  k5 = {
    borderStart: '1px solid',
    borderStartColor: tc.reference,
    color: ec.reference,
    bg: Ju.reference,
    [ec.variable]: 'colors.chakra-body-text',
    [tc.variable]: 'colors.chakra-border-color',
    _dark: { [ec.variable]: 'colors.whiteAlpha.800', [tc.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [Ju.variable]: 'colors.gray.200',
      _dark: { [Ju.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  C5 = i1((e) => {
    var t
    return { root: b5, field: (t = Xe(x5, e)) != null ? t : {}, stepperGroup: w5, stepper: k5 }
  })
function rs(e) {
  var t, r, n
  const o = (t = q.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
    s = Zv.fontSizes[a]
  return i1({
    field: { ...o.field, paddingInlineEnd: a1.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: fr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  })
}
var _5 = { xs: rs('xs'), sm: rs('sm'), md: rs('md'), lg: rs('lg') },
  T5 = v5({ baseStyle: C5, sizes: _5, variants: q.variants, defaultProps: q.defaultProps }),
  Qm,
  P5 = { ...((Qm = q.baseStyle) == null ? void 0 : Qm.field), textAlign: 'center' },
  E5 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  Xm,
  qm,
  $5 = {
    outline: (e) => {
      var t, r, n
      return (n =
        (r = Xe((t = q.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    flushed: (e) => {
      var t, r, n
      return (n =
        (r = Xe((t = q.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    filled: (e) => {
      var t, r, n
      return (n =
        (r = Xe((t = q.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    unstyled: (qm = (Xm = q.variants) == null ? void 0 : Xm.unstyled.field) != null ? qm : {},
  },
  A5 = { baseStyle: P5, sizes: E5, variants: $5, defaultProps: q.defaultProps },
  { defineMultiStyleConfig: R5, definePartsStyle: z5 } = le(q_.keys),
  ns = $e('popper-bg'),
  M5 = $e('popper-arrow-bg'),
  Zm = $e('popper-arrow-shadow-color'),
  L5 = { zIndex: 10 },
  D5 = {
    [ns.variable]: 'colors.white',
    bg: ns.reference,
    [M5.variable]: ns.reference,
    [Zm.variable]: 'colors.gray.200',
    _dark: { [ns.variable]: 'colors.gray.700', [Zm.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  F5 = { px: 3, py: 2, borderBottomWidth: '1px' },
  I5 = { px: 3, py: 2 },
  B5 = { px: 3, py: 2, borderTopWidth: '1px' },
  V5 = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  O5 = z5({ popper: L5, content: D5, header: F5, body: I5, footer: B5, closeButton: V5 }),
  N5 = R5({ baseStyle: O5 }),
  { definePartsStyle: _d, defineMultiStyleConfig: j5 } = le(j_.keys),
  rc = j('drawer-bg'),
  nc = j('drawer-box-shadow')
function Kn(e) {
  return _d(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var W5 = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  U5 = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  H5 = (e) => {
    const { isFullHeight: t } = e
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [rc.variable]: 'colors.white',
      [nc.variable]: 'shadows.lg',
      _dark: { [rc.variable]: 'colors.gray.700', [nc.variable]: 'shadows.dark-lg' },
      bg: rc.reference,
      boxShadow: nc.reference,
    }
  },
  G5 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  K5 = { position: 'absolute', top: '2', insetEnd: '3' },
  Y5 = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  Q5 = { px: '6', py: '4' },
  X5 = _d((e) => ({
    overlay: W5,
    dialogContainer: U5,
    dialog: Xe(H5, e),
    header: G5,
    closeButton: K5,
    body: Y5,
    footer: Q5,
  })),
  q5 = { xs: Kn('xs'), sm: Kn('md'), md: Kn('lg'), lg: Kn('2xl'), xl: Kn('4xl'), full: Kn('full') },
  Z5 = j5({ baseStyle: X5, sizes: q5, defaultProps: { size: 'xs' } }),
  { definePartsStyle: J5, defineMultiStyleConfig: e$ } = le(W_.keys),
  t$ = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  r$ = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  n$ = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  o$ = J5({ preview: t$, input: r$, textarea: n$ }),
  i$ = e$({ baseStyle: o$ }),
  { definePartsStyle: a$, defineMultiStyleConfig: s$ } = le(U_.keys),
  So = j('form-control-color'),
  l$ = {
    marginStart: '1',
    [So.variable]: 'colors.red.500',
    _dark: { [So.variable]: 'colors.red.300' },
    color: So.reference,
  },
  u$ = {
    mt: '2',
    [So.variable]: 'colors.gray.600',
    _dark: { [So.variable]: 'colors.whiteAlpha.600' },
    color: So.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  c$ = a$({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: l$,
    helperText: u$,
  }),
  d$ = s$({ baseStyle: c$ }),
  { definePartsStyle: f$, defineMultiStyleConfig: p$ } = le(H_.keys),
  bo = j('form-error-color'),
  h$ = {
    [bo.variable]: 'colors.red.500',
    _dark: { [bo.variable]: 'colors.red.300' },
    color: bo.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  m$ = {
    marginEnd: '0.5em',
    [bo.variable]: 'colors.red.500',
    _dark: { [bo.variable]: 'colors.red.300' },
    color: bo.reference,
  },
  g$ = f$({ text: h$, icon: m$ }),
  y$ = p$({ baseStyle: g$ }),
  v$ = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  S$ = { baseStyle: v$ },
  b$ = { fontFamily: 'heading', fontWeight: 'bold' },
  x$ = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    'xl': { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    'lg': { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    'md': { fontSize: 'xl', lineHeight: 1.2 },
    'sm': { fontSize: 'md', lineHeight: 1.2 },
    'xs': { fontSize: 'sm', lineHeight: 1.2 },
  },
  w$ = { baseStyle: b$, sizes: x$, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: k$, definePartsStyle: C$ } = le(O_.keys),
  _$ = {
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
  T$ = C$({ link: _$ }),
  P$ = k$({ baseStyle: T$ }),
  E$ = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  s1 = (e) => {
    const { colorScheme: t, theme: r } = e
    if (t === 'gray')
      return {
        color: F('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: F('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: F('gray.200', 'whiteAlpha.300')(e) },
      }
    const n = Ao(`${t}.200`, 0.12)(r),
      o = Ao(`${t}.200`, 0.24)(r)
    return {
      color: F(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: F(`${t}.50`, n)(e) },
      _active: { bg: F(`${t}.100`, o)(e) },
    }
  },
  $$ = (e) => {
    const { colorScheme: t } = e,
      r = F('gray.200', 'whiteAlpha.300')(e)
    return {
      'border': '1px solid',
      'borderColor': t === 'gray' ? r : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px',
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px',
      },
      ...Xe(s1, e),
    }
  },
  A$ = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  R$ = (e) => {
    var t
    const { colorScheme: r } = e
    if (r === 'gray') {
      const l = F('gray.100', 'whiteAlpha.200')(e)
      return {
        bg: l,
        _hover: { bg: F('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: l } },
        _active: { bg: F('gray.300', 'whiteAlpha.400')(e) },
      }
    }
    const {
        bg: n = `${r}.500`,
        color: o = 'white',
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = A$[r]) != null ? t : {},
      s = F(n, `${r}.200`)(e)
    return {
      bg: s,
      color: F(o, 'gray.800')(e),
      _hover: { bg: F(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: F(a, `${r}.400`)(e) },
    }
  },
  z$ = (e) => {
    const { colorScheme: t } = e
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: F(`${t}.500`, `${t}.200`)(e),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: F(`${t}.700`, `${t}.500`)(e) },
    }
  },
  M$ = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  L$ = { ghost: s1, outline: $$, solid: R$, link: z$, unstyled: M$ },
  D$ = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  F$ = {
    baseStyle: E$,
    variants: L$,
    sizes: D$,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: $n, defineMultiStyleConfig: I$ } = le(sT.keys),
  il = j('card-bg'),
  vr = j('card-padding'),
  l1 = j('card-shadow'),
  Ts = j('card-radius'),
  u1 = j('card-border-width', '0'),
  c1 = j('card-border-color'),
  B$ = $n({
    container: {
      [il.variable]: 'colors.chakra-body-bg',
      backgroundColor: il.reference,
      boxShadow: l1.reference,
      borderRadius: Ts.reference,
      color: 'chakra-body-text',
      borderWidth: u1.reference,
      borderColor: c1.reference,
    },
    body: { padding: vr.reference, flex: '1 1 0%' },
    header: { padding: vr.reference },
    footer: { padding: vr.reference },
  }),
  V$ = {
    sm: $n({ container: { [Ts.variable]: 'radii.base', [vr.variable]: 'space.3' } }),
    md: $n({ container: { [Ts.variable]: 'radii.md', [vr.variable]: 'space.5' } }),
    lg: $n({ container: { [Ts.variable]: 'radii.xl', [vr.variable]: 'space.7' } }),
  },
  O$ = {
    elevated: $n({
      container: { [l1.variable]: 'shadows.base', _dark: { [il.variable]: 'colors.gray.700' } },
    }),
    outline: $n({
      container: { [u1.variable]: '1px', [c1.variable]: 'colors.chakra-border-color' },
    }),
    filled: $n({ container: { [il.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [vr.variable]: 0 },
      header: { [vr.variable]: 0 },
      footer: { [vr.variable]: 0 },
    },
  },
  N$ = I$({
    baseStyle: B$,
    variants: O$,
    sizes: V$,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  wi = $e('close-button-size'),
  qo = $e('close-button-bg'),
  j$ = {
    w: [wi.reference],
    h: [wi.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [qo.variable]: 'colors.blackAlpha.100',
      _dark: { [qo.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [qo.variable]: 'colors.blackAlpha.200',
      _dark: { [qo.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: qo.reference,
  },
  W$ = {
    lg: { [wi.variable]: 'sizes.10', fontSize: 'md' },
    md: { [wi.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [wi.variable]: 'sizes.6', fontSize: '2xs' },
  },
  U$ = { baseStyle: j$, sizes: W$, defaultProps: { size: 'md' } },
  { variants: H$, defaultProps: G$ } = bi,
  K$ = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  Y$ = { baseStyle: K$, variants: H$, defaultProps: G$ },
  Q$ = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  X$ = { baseStyle: Q$ },
  q$ = { opacity: 0.6, borderColor: 'inherit' },
  Z$ = { borderStyle: 'solid' },
  J$ = { borderStyle: 'dashed' },
  e3 = { solid: Z$, dashed: J$ },
  t3 = { baseStyle: q$, variants: e3, defaultProps: { variant: 'solid' } },
  { definePartsStyle: r3, defineMultiStyleConfig: n3 } = le(I_.keys),
  o3 = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  i3 = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  a3 = { pt: '2', px: '4', pb: '5' },
  s3 = { fontSize: '1.25em' },
  l3 = r3({ container: o3, button: i3, panel: a3, icon: s3 }),
  u3 = n3({ baseStyle: l3 }),
  { definePartsStyle: ma, defineMultiStyleConfig: c3 } = le(B_.keys),
  gt = j('alert-fg'),
  _r = j('alert-bg'),
  d3 = ma({
    container: { bg: _r.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: gt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: gt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  })
function op(e) {
  const { theme: t, colorScheme: r } = e,
    n = Ao(`${r}.200`, 0.16)(t)
  return { light: `colors.${r}.100`, dark: n }
}
var f3 = ma((e) => {
    const { colorScheme: t } = e,
      r = op(e)
    return {
      container: {
        [gt.variable]: `colors.${t}.500`,
        [_r.variable]: r.light,
        _dark: { [gt.variable]: `colors.${t}.200`, [_r.variable]: r.dark },
      },
    }
  }),
  p3 = ma((e) => {
    const { colorScheme: t } = e,
      r = op(e)
    return {
      container: {
        [gt.variable]: `colors.${t}.500`,
        [_r.variable]: r.light,
        _dark: { [gt.variable]: `colors.${t}.200`, [_r.variable]: r.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: gt.reference,
      },
    }
  }),
  h3 = ma((e) => {
    const { colorScheme: t } = e,
      r = op(e)
    return {
      container: {
        [gt.variable]: `colors.${t}.500`,
        [_r.variable]: r.light,
        _dark: { [gt.variable]: `colors.${t}.200`, [_r.variable]: r.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: gt.reference,
      },
    }
  }),
  m3 = ma((e) => {
    const { colorScheme: t } = e
    return {
      container: {
        [gt.variable]: 'colors.white',
        [_r.variable]: `colors.${t}.500`,
        _dark: { [gt.variable]: 'colors.gray.900', [_r.variable]: `colors.${t}.200` },
        color: gt.reference,
      },
    }
  }),
  g3 = { 'subtle': f3, 'left-accent': p3, 'top-accent': h3, 'solid': m3 },
  y3 = c3({
    baseStyle: d3,
    variants: g3,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: d1, defineMultiStyleConfig: v3 } = le(V_.keys),
  xo = j('avatar-border-color'),
  oc = j('avatar-bg'),
  S3 = {
    borderRadius: 'full',
    border: '0.2em solid',
    [xo.variable]: 'white',
    _dark: { [xo.variable]: 'colors.gray.800' },
    borderColor: xo.reference,
  },
  b3 = {
    [oc.variable]: 'colors.gray.200',
    _dark: { [oc.variable]: 'colors.whiteAlpha.400' },
    bgColor: oc.reference,
  },
  Jm = j('avatar-background'),
  x3 = (e) => {
    const { name: t, theme: r } = e,
      n = t ? PT({ string: t }) : 'colors.gray.400',
      o = _T(n)(r)
    let i = 'white'
    return (
      o || (i = 'gray.800'),
      {
        'bg': Jm.reference,
        '&:not([data-loaded])': { [Jm.variable]: n },
        'color': i,
        [xo.variable]: 'colors.white',
        '_dark': { [xo.variable]: 'colors.gray.800' },
        'borderColor': xo.reference,
        'verticalAlign': 'top',
      }
    )
  },
  w3 = d1((e) => ({ badge: Xe(S3, e), excessLabel: Xe(b3, e), container: Xe(x3, e) }))
function zr(e) {
  const t = e !== '100%' ? e1[e] : void 0
  return d1({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: { fontSize: `calc(${t ?? e} / 2.5)`, lineHeight: e !== '100%' ? t ?? e : void 0 },
  })
}
var k3 = {
    '2xs': zr(4),
    'xs': zr(6),
    'sm': zr(8),
    'md': zr(12),
    'lg': zr(16),
    'xl': zr(24),
    '2xl': zr(32),
    'full': zr('100%'),
  },
  C3 = v3({ baseStyle: w3, sizes: k3, defaultProps: { size: 'md' } }),
  _3 = {
    Accordion: u3,
    Alert: y3,
    Avatar: C3,
    Badge: bi,
    Breadcrumb: P$,
    Button: F$,
    Checkbox: ol,
    CloseButton: U$,
    Code: Y$,
    Container: X$,
    Divider: t3,
    Drawer: Z5,
    Editable: i$,
    Form: d$,
    FormError: y$,
    FormLabel: S$,
    Heading: w$,
    Input: q,
    Kbd: WE,
    Link: HE,
    List: XE,
    Menu: a5,
    Modal: y5,
    NumberInput: T5,
    PinInput: A5,
    Popover: N5,
    Progress: QP,
    Radio: lE,
    Select: mE,
    Skeleton: yE,
    SkipLink: SE,
    Slider: AE,
    Spinner: ME,
    Stat: NE,
    Switch: WT,
    Table: XT,
    Tabs: dP,
    Tag: TP,
    Textarea: BP,
    Tooltip: NP,
    Card: N$,
  },
  T3 = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  P3 = {
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
  E3 = 'ltr',
  $3 = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  f1 = { semanticTokens: T3, direction: E3, ...F_, components: _3, styles: P3, config: $3 }
function si(e) {
  return typeof e == 'function'
}
function A3(...e) {
  return (t) => e.reduce((r, n) => n(r), t)
}
var R3 = (e) =>
    function (...r) {
      let n = [...r],
        o = r[r.length - 1]
      return (
        f_(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = e),
        A3(...n.map((i) => (a) => si(i) ? i(a) : M3(a, i)))(o)
      )
    },
  z3 = R3(f1)
function M3(...e) {
  return At({}, ...e, p1)
}
function p1(e, t, r, n) {
  if ((si(e) || si(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = si(e) ? e(...o) : e,
        a = si(t) ? t(...o) : t
      return At({}, i, a, p1)
    }
}
function L3(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n])
    }),
    r
  )
}
function D3(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var F3 = (e) => {
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
  h1 = F3(D3)
function m1(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n]
      t(o, n, e) && (r[n] = o)
    }),
    r
  )
}
var g1 = (e) => m1(e, (t) => t != null)
function I3(e) {
  return typeof e == 'function'
}
function y1(e, ...t) {
  return I3(e) ? e(...t) : e
}
var B3 = typeof Element < 'u',
  V3 = typeof Map == 'function',
  O3 = typeof Set == 'function',
  N3 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Ps(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!Ps(e[n], t[n])) return !1
      return !0
    }
    var i
    if (V3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Ps(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (O3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (N3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (B3 && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !Ps(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var j3 = function (t, r) {
  try {
    return Ps(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
function v1(e, t = {}) {
  var r
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = XC(),
    s = e ? h1(i, `components.${e}`) : void 0,
    l = n || s,
    u = At(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      g1(L3(o, ['children']))
    ),
    c = k.useRef({})
  if (l) {
    const f = c_(l)(u)
    j3(c.current, f) || (c.current = f)
  }
  return c.current
}
function On(e, t = {}) {
  return v1(e, t)
}
function W3(e, t = {}) {
  return v1(e, t)
}
var U3 = new Set([
    ...Z2,
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
  H3 = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function G3(e) {
  return H3.has(e) || !U3.has(e)
}
function K3(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object')
  const r = { ...e }
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], (r[o] = n[o]))
  return r
}
var Y3 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Q3 = A0(function (e) {
    return (
      Y3.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  }),
  X3 = Q3,
  q3 = function (t) {
    return t !== 'theme'
  },
  eg = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? X3 : q3
  },
  tg = function (t, r, n) {
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
  Z3 = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag
    return (
      D0(r, n, o),
      _w(function () {
        return F0(r, n, o)
      }),
      null
    )
  },
  J3 = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a
    r !== void 0 && ((i = r.label), (a = r.target))
    var s = tg(t, r, n),
      l = s || eg(o),
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
      var v = O0(function (S, C, m) {
        var p = (u && S.as) || o,
          g = '',
          w = [],
          T = S
        if (S.theme == null) {
          T = {}
          for (var $ in S) T[$] = S[$]
          T.theme = k.useContext(Li)
        }
        typeof S.className == 'string'
          ? (g = vw(C.registered, w, S.className))
          : S.className != null && (g = S.className + ' ')
        var P = rf(d.concat(w), C.registered, T)
        ;(g += C.key + '-' + P.name), a !== void 0 && (g += ' ' + a)
        var E = u && s === void 0 ? eg(p) : l,
          I = {}
        for (var D in S) (u && D === 'as') || (E(D) && (I[D] = S[D]))
        return (
          (I.className = g),
          (I.ref = m),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(Z3, { cache: C, serialized: P, isStringTag: typeof p == 'string' }),
            k.createElement(p, I)
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
          return e(S, As({}, r, C, { shouldForwardProp: tg(v, C, !0) })).apply(void 0, d)
        }),
        v
      )
    }
  },
  e4 = [
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
  al = J3.bind()
e4.forEach(function (e) {
  al[e] = al(e)
})
var rg,
  t4 = (rg = al.default) != null ? rg : al,
  r4 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = m1(a, (d, f) => e_(f)),
        l = y1(e, t),
        u = K3({}, o, l, g1(s), i),
        c = qv(u)(t.theme)
      return n ? [c, n] : c
    }
function ic(e, t) {
  const { baseStyle: r, ...n } = t ?? {}
  n.shouldForwardProp || (n.shouldForwardProp = G3)
  const o = r4({ baseStyle: r }),
    i = t4(e, n)(o)
  return An.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Xf()
    return An.createElement(i, { 'ref': u, 'data-theme': d ? c : void 0, ...l })
  })
}
function n4() {
  const e = new Map()
  return new Proxy(ic, {
    apply(t, r, n) {
      return ic(...n)
    },
    get(t, r) {
      return e.has(r) || e.set(r, ic(r)), e.get(r)
    },
  })
}
var _e = n4()
function Dt(e) {
  return k.forwardRef(e)
}
function o4(e = {}) {
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
function i4(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = k.useMemo(() => q2(r), [r])
  return ar(Ew, { theme: o, children: [R(a4, { root: t }), n] })
}
function a4({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',')
  return R(Al, { styles: (r) => ({ [t]: r.__cssVars }) })
}
o4({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function s4() {
  const { colorMode: e } = Xf()
  return R(Al, {
    styles: (t) => {
      const r = h1(t, 'styles.global'),
        n = y1(r, { theme: t, colorMode: e })
      return n ? qv(n)(t) : void 0
    },
  })
}
var S1 = k.createContext({
  getDocument() {
    return document
  },
  getWindow() {
    return window
  },
})
S1.displayName = 'EnvironmentContext'
function b1(e) {
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
  return ar(S1.Provider, {
    value: i,
    children: [t, a && R('span', { id: '__chakra_env', hidden: !0, ref: o })],
  })
}
b1.displayName = 'EnvironmentProvider'
var l4 = (e) => {
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
      c = R(b1, { environment: s, disabled: u, children: t })
    return R(i4, {
      theme: a,
      cssVarsRoot: l,
      children: ar(Hv, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? R(zw, { scope: o }) : R(Rw, {}),
          R(s4, {}),
          n ? R(W0, { zIndex: n, children: c }) : c,
        ],
      }),
    })
  },
  u4 = (e, t) => e.find((r) => r.id === t)
function ng(e, t) {
  const r = x1(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1
  return { position: r, index: n }
}
function x1(e, t) {
  for (const [r, n] of Object.entries(e)) if (u4(n, t)) return r
}
function c4(e) {
  const t = e.includes('right'),
    r = e.includes('left')
  let n = 'center'
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  )
}
function d4(e) {
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
function f4(e, t = []) {
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
function p4(e, t) {
  const r = f4(e)
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
function og(e, t) {
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
const w1 = k.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  ql = k.createContext({}),
  ga = k.createContext(null),
  Zl = typeof document < 'u',
  sl = Zl ? k.useLayoutEffect : k.useEffect,
  k1 = k.createContext({ strict: !1 })
function h4(e, t, r, n) {
  const { visualElement: o } = k.useContext(ql),
    i = k.useContext(k1),
    a = k.useContext(ga),
    s = k.useContext(w1).reducedMotion,
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
    sl(() => {
      u && u.render()
    }),
    k.useEffect(() => {
      u && u.updateFeatures()
    }),
    (window.HandoffAppearAnimations ? sl : k.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges()
    }),
    u
  )
}
function so(e) {
  return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function m4(e, t, r) {
  return k.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : so(r) && (r.current = n))
    },
    [t]
  )
}
function oa(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function Jl(e) {
  return typeof e == 'object' && typeof e.start == 'function'
}
const ip = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  ap = ['initial', ...ip]
function eu(e) {
  return Jl(e.animate) || ap.some((t) => oa(e[t]))
}
function C1(e) {
  return !!(eu(e) || e.variants)
}
function g4(e, t) {
  if (eu(e)) {
    const { initial: r, animate: n } = e
    return { initial: r === !1 || oa(r) ? r : void 0, animate: oa(n) ? n : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function y4(e) {
  const { initial: t, animate: r } = g4(e, k.useContext(ql))
  return k.useMemo(() => ({ initial: t, animate: r }), [ig(t), ig(r)])
}
function ig(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const ag = {
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
  ia = {}
for (const e in ag) ia[e] = { isEnabled: (t) => ag[e].some((r) => !!t[r]) }
function v4(e) {
  for (const t in e) ia[t] = { ...ia[t], ...e[t] }
}
function sp(e) {
  const t = k.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const ki = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
let S4 = 1
function b4() {
  return sp(() => {
    if (ki.hasEverUpdated) return S4++
  })
}
const lp = k.createContext({}),
  _1 = k.createContext({}),
  x4 = Symbol.for('motionComponentSymbol')
function w4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && v4(e)
  function i(s, l) {
    let u
    const c = { ...k.useContext(w1), ...s, layoutId: k4(s) },
      { isStatic: d } = c,
      f = y4(s),
      h = d ? void 0 : b4(),
      v = n(s, d)
    if (!d && Zl) {
      f.visualElement = h4(o, v, c, t)
      const S = k.useContext(_1),
        C = k.useContext(k1).strict
      f.visualElement && (u = f.visualElement.loadFeatures(c, C, e, h, S))
    }
    return k.createElement(
      ql.Provider,
      { value: f },
      u && f.visualElement ? k.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, h, m4(v, f.visualElement, l), v, d, f.visualElement)
    )
  }
  const a = k.forwardRef(i)
  return (a[x4] = o), a
}
function k4({ layoutId: e }) {
  const t = k.useContext(lp).id
  return t && e !== void 0 ? t + '-' + e : e
}
function C4(e) {
  function t(n, o = {}) {
    return w4(e(n, o))
  }
  if (typeof Proxy > 'u') return t
  const r = new Map()
  return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) })
}
const _4 = [
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
function up(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(_4.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const ll = {}
function T4(e) {
  Object.assign(ll, e)
}
const tu = [
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
  Nn = new Set(tu)
function T1(e, { layout: t, layoutId: r }) {
  return (
    Nn.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!ll[e] || e === 'opacity'))
  )
}
const lt = (e) => !!(e && e.getVelocity),
  P4 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  E4 = tu.length
function $4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = ''
  for (let a = 0; a < E4; a++) {
    const s = tu[a]
    if (e[s] !== void 0) {
      const l = P4[s] || s
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
const P1 = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  E1 = P1('--'),
  Td = P1('var(--'),
  A4 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Fn = (e, t, r) => Math.min(Math.max(r, e), t),
  jn = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  Ci = { ...jn, transform: (e) => Fn(0, 1, e) },
  os = { ...jn, default: 1 },
  _i = (e) => Math.round(e * 1e5) / 1e5,
  aa = /(-)?([\d]*\.?[\d])+/g,
  Pd =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  R4 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function ya(e) {
  return typeof e == 'string'
}
const va = (e) => ({
    test: (t) => ya(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mr = va('deg'),
  ir = va('%'),
  B = va('px'),
  z4 = va('vh'),
  M4 = va('vw'),
  sg = { ...ir, parse: (e) => ir.parse(e) / 100, transform: (e) => ir.transform(e * 100) },
  lg = { ...jn, transform: Math.round },
  $1 = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    size: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    rotate: Mr,
    rotateX: Mr,
    rotateY: Mr,
    rotateZ: Mr,
    scale: os,
    scaleX: os,
    scaleY: os,
    scaleZ: os,
    skew: Mr,
    skewX: Mr,
    skewY: Mr,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Ci,
    originX: sg,
    originY: sg,
    originZ: B,
    zIndex: lg,
    fillOpacity: Ci,
    strokeOpacity: Ci,
    numOctaves: lg,
  }
function cp(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e
  let l = !1,
    u = !1,
    c = !0
  for (const d in t) {
    const f = t[d]
    if (E1(d)) {
      i[d] = f
      continue
    }
    const h = $1[d],
      v = A4(f, h)
    if (Nn.has(d)) {
      if (((l = !0), (a[d] = v), !c)) continue
      f !== (h.default || 0) && (c = !1)
    } else d.startsWith('origin') ? ((u = !0), (s[d] = v)) : (o[d] = v)
  }
  if (
    (t.transform ||
      (l || n ? (o.transform = $4(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: h = 0 } = s
    o.transformOrigin = `${d} ${f} ${h}`
  }
}
const dp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function A1(e, t, r) {
  for (const n in t) !lt(t[n]) && !T1(n, r) && (e[n] = t[n])
}
function L4({ transformTemplate: e }, t, r) {
  return k.useMemo(() => {
    const n = dp()
    return cp(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function D4(e, t, r) {
  const n = e.style || {},
    o = {}
  return A1(o, n, e), Object.assign(o, L4(e, t, r)), e.transformValues ? e.transformValues(o) : o
}
function F4(e, t, r) {
  const n = {},
    o = D4(e, t, r)
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
const I4 = new Set([
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
function ul(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    I4.has(e)
  )
}
let R1 = (e) => !ul(e)
function B4(e) {
  e && (R1 = (t) => (t.startsWith('on') ? !ul(t) : e(t)))
}
try {
  B4(require('@emotion/is-prop-valid').default)
} catch {}
function V4(e, t, r) {
  const n = {}
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((R1(o) ||
        (r === !0 && ul(o)) ||
        (!t && !ul(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]))
  return n
}
function ug(e, t, r) {
  return typeof e == 'string' ? e : B.transform(t + r * e)
}
function O4(e, t, r) {
  const n = ug(t, e.x, e.width),
    o = ug(r, e.y, e.height)
  return `${n} ${o}`
}
const N4 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  j4 = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function W4(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1
  const i = o ? N4 : j4
  e[i.offset] = B.transform(-n)
  const a = B.transform(t),
    s = B.transform(r)
  e[i.array] = `${a} ${s}`
}
function fp(
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
  if ((cp(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: h, dimensions: v } = e
  f.transform && (v && (h.transform = f.transform), delete f.transform),
    v &&
      (n !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = O4(v, n !== void 0 ? n : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && W4(f, i, a, s, !1)
}
const z1 = () => ({ ...dp(), attrs: {} }),
  pp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function U4(e, t, r, n) {
  const o = k.useMemo(() => {
    const i = z1()
    return (
      fp(i, t, { enableHardwareAcceleration: !1 }, pp(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    )
  }, [t])
  if (e.style) {
    const i = {}
    A1(i, e.style, e), (o.style = { ...i, ...o.style })
  }
  return o
}
function H4(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const u = (up(r) ? U4 : F4)(n, a, s, r),
      d = { ...V4(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      h = k.useMemo(() => (lt(f) ? f.get() : f), [f])
    return o && (d['data-projection-id'] = o), k.createElement(r, { ...d, children: h })
  }
}
const hp = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function M1(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n))
  for (const i in r) e.style.setProperty(i, r[i])
}
const L1 = new Set([
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
function D1(e, t, r, n) {
  M1(e, t, void 0, n)
  for (const o in t.attrs) e.setAttribute(L1.has(o) ? o : hp(o), t.attrs[o])
}
function mp(e, t) {
  const { style: r } = e,
    n = {}
  for (const o in r) (lt(r[o]) || (t.style && lt(t.style[o])) || T1(o, e)) && (n[o] = r[o])
  return n
}
function F1(e, t) {
  const r = mp(e, t)
  for (const n in e)
    if (lt(e[n]) || lt(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n
      r[o] = e[n]
    }
  return r
}
function gp(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  )
}
const cl = (e) => Array.isArray(e),
  G4 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  K4 = (e) => (cl(e) ? e[e.length - 1] || 0 : e)
function Es(e) {
  const t = lt(e) ? e.get() : e
  return G4(t) ? t.toValue() : t
}
function Y4({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = { latestValues: Q4(n, o, i, e), renderState: t() }
  return r && (a.mount = (s) => r(n, s, a)), a
}
const I1 = (e) => (t, r) => {
  const n = k.useContext(ql),
    o = k.useContext(ga),
    i = () => Y4(e, t, n, o)
  return r ? i() : sp(i)
}
function Q4(e, t, r, n) {
  const o = {},
    i = n(e, {})
  for (const f in i) o[f] = Es(i[f])
  let { initial: a, animate: s } = e
  const l = eu(e),
    u = C1(e)
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
      !Jl(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const v = gp(e, h)
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
const X4 = {
    useVisualState: I1({
      scrapeMotionValuesFromProps: F1,
      createRenderState: z1,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
        }
        fp(r, n, { enableHardwareAcceleration: !1 }, pp(t.tagName), e.transformTemplate), D1(t, r)
      },
    }),
  },
  q4 = { useVisualState: I1({ scrapeMotionValuesFromProps: mp, createRenderState: dp }) }
function Z4(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(up(e) ? X4 : q4),
    preloadedFeatures: r,
    useRender: H4(t),
    createVisualElement: n,
    Component: e,
  }
}
function gr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r)
}
const B1 = (e) =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function ru(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const J4 = (e) => (t) => B1(t) && e(t, ru(t))
function Sr(e, t, r, n) {
  return gr(e, t, J4(r), n)
}
const eA = (e, t) => (r) => t(e(r)),
  Zr = (...e) => e.reduce(eA)
function V1(e) {
  let t = null
  return () => {
    const r = () => {
      t = null
    }
    return t === null ? ((t = e), r) : !1
  }
}
const cg = V1('dragHorizontal'),
  dg = V1('dragVertical')
function O1(e) {
  let t = !1
  if (e === 'y') t = dg()
  else if (e === 'x') t = cg()
  else {
    const r = cg(),
      n = dg()
    r && n
      ? (t = () => {
          r(), n()
        })
      : (r && r(), n && n())
  }
  return t
}
function N1() {
  const e = O1(!0)
  return e ? (e(), !1) : !0
}
class ln {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function tA(e) {
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
  rA = 40
let Ed = !0,
  sa = !1
const Sa = ['read', 'update', 'preRender', 'render', 'postRender'],
  nu = Sa.reduce((e, t) => ((e[t] = tA(() => (sa = !0))), e), {}),
  fe = Sa.reduce((e, t) => {
    const r = nu[t]
    return (e[t] = (n, o = !1, i = !1) => (sa || oA(), r.schedule(n, o, i))), e
  }, {}),
  rn = Sa.reduce((e, t) => ((e[t] = nu[t].cancel), e), {}),
  ac = Sa.reduce((e, t) => ((e[t] = () => nu[t].process(Ue)), e), {}),
  nA = (e) => nu[e].process(Ue),
  j1 = (e) => {
    ;(sa = !1),
      (Ue.delta = Ed ? 1e3 / 60 : Math.max(Math.min(e - Ue.timestamp, rA), 1)),
      (Ue.timestamp = e),
      (Ue.isProcessing = !0),
      Sa.forEach(nA),
      (Ue.isProcessing = !1),
      sa && ((Ed = !1), requestAnimationFrame(j1))
  },
  oA = () => {
    ;(sa = !0), (Ed = !0), Ue.isProcessing || requestAnimationFrame(j1)
  }
function fg(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || N1()) return
      const s = e.getProps()
      e.animationState && s.whileHover && e.animationState.setActive('whileHover', t),
        s[n] && fe.update(() => s[n](i, a))
    }
  return Sr(e.current, r, o, { passive: !e.getProps()[n] })
}
class iA extends ln {
  mount() {
    this.unmount = Zr(fg(this.node, !0), fg(this.node, !1))
  }
  unmount() {}
}
class aA extends ln {
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
    this.unmount = Zr(
      gr(this.node.current, 'focus', () => this.onFocus()),
      gr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const W1 = (e, t) => (t ? (e === t ? !0 : W1(e, t.parentElement)) : !1),
  Re = (e) => e
function sc(e, t) {
  if (!t) return
  const r = new PointerEvent('pointer' + e)
  t(r, ru(r))
}
class sA extends ln {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Re),
      (this.removeEndListeners = Re),
      (this.removeAccessibleListeners = Re),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const n = this.node.getProps(),
          i = Sr(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c } = this.node.getProps()
              fe.update(() => {
                W1(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
              })
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = Sr(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          })
        ;(this.removeEndListeners = Zr(i, a)), this.startPress(t, r)
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                sc('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && fe.update(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = gr(this.node.current, 'keyup', a)),
              sc('down', (s, l) => {
                this.startPress(s, l)
              })
          },
          r = gr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && sc('cancel', (i, a) => this.cancelPress(i, a))
          },
          o = gr(this.node.current, 'blur', n)
        this.removeAccessibleListeners = Zr(r, o)
      })
  }
  startPress(t, r) {
    this.isPressing = !0
    const { onTapStart: n, whileTap: o } = this.node.getProps()
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      n && fe.update(() => n(t, r))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !N1()
    )
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: n } = this.node.getProps()
    n && fe.update(() => n(t, r))
  }
  mount() {
    const t = this.node.getProps(),
      r = Sr(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = gr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = Zr(r, n)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const $d = new WeakMap(),
  lc = new WeakMap(),
  lA = (e) => {
    const t = $d.get(e.target)
    t && t(e)
  },
  uA = (e) => {
    e.forEach(lA)
  }
function cA({ root: e, ...t }) {
  const r = e || document
  lc.has(r) || lc.set(r, {})
  const n = lc.get(r),
    o = JSON.stringify(t)
  return n[o] || (n[o] = new IntersectionObserver(uA, { root: e, ...t })), n[o]
}
function dA(e, t, r) {
  const n = cA(t)
  return (
    $d.set(e, r),
    n.observe(e),
    () => {
      $d.delete(e), n.unobserve(e)
    }
  )
}
const fA = { some: 0, all: 1 }
class pA extends ln {
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
        threshold: typeof o == 'number' ? o : fA[o],
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
    return dA(this.node.current, a, s)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: r } = this.node
    ;['amount', 'margin', 'root'].some(hA(t, r)) && this.startObserver()
  }
  unmount() {}
}
function hA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r]
}
const mA = {
  inView: { Feature: pA },
  tap: { Feature: sA },
  focus: { Feature: aA },
  hover: { Feature: iA },
}
function U1(e, t) {
  if (!Array.isArray(t)) return !1
  const r = t.length
  if (r !== e.length) return !1
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
  return !0
}
function gA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.get())), t
}
function yA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t
}
function ou(e, t, r) {
  const n = e.getProps()
  return gp(n, t, r !== void 0 ? r : n.custom, gA(e), yA(e))
}
const vA = 'framerAppearId',
  SA = 'data-' + hp(vA)
let bA = Re,
  yp = Re
const Jr = (e) => e * 1e3,
  br = (e) => e / 1e3,
  xA = { current: !1 },
  H1 = (e) => Array.isArray(e) && typeof e[0] == 'number'
function G1(e) {
  return !!(!e || (typeof e == 'string' && K1[e]) || H1(e) || (Array.isArray(e) && e.every(G1)))
}
const li = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  K1 = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: li([0, 0.65, 0.55, 1]),
    circOut: li([0.55, 0, 1, 0.45]),
    backIn: li([0.31, 0.01, 0.66, -0.59]),
    backOut: li([0.33, 1.53, 0.69, 0.99]),
  }
function Y1(e) {
  if (e) return H1(e) ? li(e) : Array.isArray(e) ? e.map(Y1) : K1[e]
}
function wA(
  e,
  t,
  r,
  { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}
) {
  const u = { [t]: r }
  l && (u.offset = l)
  const c = Y1(s)
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
const pg = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  uc = {},
  Q1 = {}
for (const e in pg) Q1[e] = () => (uc[e] === void 0 && (uc[e] = pg[e]()), uc[e])
function kA(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[n]
}
const X1 = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  CA = 1e-7,
  _A = 12
function TA(e, t, r, n, o) {
  let i,
    a,
    s = 0
  do (a = t + (r - t) / 2), (i = X1(a, n, o) - e), i > 0 ? (r = a) : (t = a)
  while (Math.abs(i) > CA && ++s < _A)
  return a
}
function ba(e, t, r, n) {
  if (e === t && r === n) return Re
  const o = (i) => TA(i, 0, 1, e, r)
  return (i) => (i === 0 || i === 1 ? i : X1(o(i), t, n))
}
const PA = ba(0.42, 0, 1, 1),
  EA = ba(0, 0, 0.58, 1),
  q1 = ba(0.42, 0, 0.58, 1),
  $A = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Z1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  J1 = (e) => (t) => 1 - e(1 - t),
  eS = (e) => 1 - Math.sin(Math.acos(e)),
  vp = J1(eS),
  AA = Z1(vp),
  tS = ba(0.33, 1.53, 0.69, 0.99),
  Sp = J1(tS),
  RA = Z1(Sp),
  zA = (e) => ((e *= 2) < 1 ? 0.5 * Sp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  MA = {
    linear: Re,
    easeIn: PA,
    easeInOut: q1,
    easeOut: EA,
    circIn: eS,
    circInOut: AA,
    circOut: vp,
    backIn: Sp,
    backInOut: RA,
    backOut: tS,
    anticipate: zA,
  },
  hg = (e) => {
    if (Array.isArray(e)) {
      yp(e.length === 4)
      const [t, r, n, o] = e
      return ba(t, r, n, o)
    } else if (typeof e == 'string') return MA[e]
    return e
  },
  bp = (e, t) => (r) =>
    !!(
      (ya(r) && R4.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  rS = (e, t, r) => (n) => {
    if (!ya(n)) return n
    const [o, i, a, s] = n.match(aa)
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    }
  },
  LA = (e) => Fn(0, 255, e),
  cc = { ...jn, transform: (e) => Math.round(LA(e)) },
  Cn = {
    test: bp('rgb', 'red'),
    parse: rS('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      cc.transform(e) +
      ', ' +
      cc.transform(t) +
      ', ' +
      cc.transform(r) +
      ', ' +
      _i(Ci.transform(n)) +
      ')',
  }
function DA(e) {
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
const Ad = { test: bp('#'), parse: DA, transform: Cn.transform },
  lo = {
    test: bp('hsl', 'hue'),
    parse: rS('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      ir.transform(_i(t)) +
      ', ' +
      ir.transform(_i(r)) +
      ', ' +
      _i(Ci.transform(n)) +
      ')',
  },
  Ge = {
    test: (e) => Cn.test(e) || Ad.test(e) || lo.test(e),
    parse: (e) => (Cn.test(e) ? Cn.parse(e) : lo.test(e) ? lo.parse(e) : Ad.parse(e)),
    transform: (e) => (ya(e) ? e : e.hasOwnProperty('red') ? Cn.transform(e) : lo.transform(e)),
  },
  ye = (e, t, r) => -r * e + r * t + e
function dc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  )
}
function FA({ hue: e, saturation: t, lightness: r, alpha: n }) {
  ;(e /= 360), (t /= 100), (r /= 100)
  let o = 0,
    i = 0,
    a = 0
  if (!t) o = i = a = r
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s
    ;(o = dc(l, s, e + 1 / 3)), (i = dc(l, s, e)), (a = dc(l, s, e - 1 / 3))
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  }
}
const fc = (e, t, r) => {
    const n = e * e
    return Math.sqrt(Math.max(0, r * (t * t - n) + n))
  },
  IA = [Ad, Cn, lo],
  BA = (e) => IA.find((t) => t.test(e))
function mg(e) {
  const t = BA(e)
  let r = t.parse(e)
  return t === lo && (r = FA(r)), r
}
const nS = (e, t) => {
    const r = mg(e),
      n = mg(t),
      o = { ...r }
    return (i) => (
      (o.red = fc(r.red, n.red, i)),
      (o.green = fc(r.green, n.green, i)),
      (o.blue = fc(r.blue, n.blue, i)),
      (o.alpha = ye(r.alpha, n.alpha, i)),
      Cn.transform(o)
    )
  },
  oS = '${c}',
  iS = '${n}'
function VA(e) {
  var t, r
  return (
    isNaN(e) &&
    ya(e) &&
    (((t = e.match(aa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Pd)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  )
}
function dl(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let r = 0,
    n = 0
  const o = e.match(Pd)
  o && ((r = o.length), (e = e.replace(Pd, oS)), t.push(...o.map(Ge.parse)))
  const i = e.match(aa)
  return (
    i && ((n = i.length), (e = e.replace(aa, iS)), t.push(...i.map(jn.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  )
}
function aS(e) {
  return dl(e).values
}
function sS(e) {
  const { values: t, numColors: r, tokenised: n } = dl(e),
    o = t.length
  return (i) => {
    let a = n
    for (let s = 0; s < o; s++)
      a = a.replace(s < r ? oS : iS, s < r ? Ge.transform(i[s]) : _i(i[s]))
    return a
  }
}
const OA = (e) => (typeof e == 'number' ? 0 : e)
function NA(e) {
  const t = aS(e)
  return sS(e)(t.map(OA))
}
const nn = { test: VA, parse: aS, createTransformer: sS, getAnimatableNone: NA }
function lS(e, t) {
  return typeof e == 'number' ? (r) => ye(e, t, r) : Ge.test(e) ? nS(e, t) : cS(e, t)
}
const uS = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => lS(i, t[a]))
    return (i) => {
      for (let a = 0; a < n; a++) r[a] = o[a](i)
      return r
    }
  },
  jA = (e, t) => {
    const r = { ...e, ...t },
      n = {}
    for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = lS(e[o], t[o]))
    return (o) => {
      for (const i in n) r[i] = n[i](o)
      return r
    }
  },
  cS = (e, t) => {
    const r = nn.createTransformer(t),
      n = dl(e),
      o = dl(t)
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? Zr(uS(n.values, o.values), r)
      : (a) => `${a > 0 ? t : e}`
  },
  la = (e, t, r) => {
    const n = t - e
    return n === 0 ? 1 : (r - e) / n
  },
  gg = (e, t) => (r) => ye(e, t, r)
function WA(e) {
  return typeof e == 'number'
    ? gg
    : typeof e == 'string'
    ? Ge.test(e)
      ? nS
      : cS
    : Array.isArray(e)
    ? uS
    : typeof e == 'object'
    ? jA
    : gg
}
function UA(e, t, r) {
  const n = [],
    o = r || WA(e[0]),
    i = e.length - 1
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1])
    if (t) {
      const l = Array.isArray(t) ? t[a] || Re : t
      s = Zr(l, s)
    }
    n.push(s)
  }
  return n
}
function dS(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length
  if ((yp(i === t.length), i === 1)) return () => t[0]
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const a = UA(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = la(e[c], e[c + 1], u)
      return a[c](d)
    }
  return r ? (u) => l(Fn(e[0], e[i - 1], u)) : l
}
function HA(e, t) {
  const r = e[e.length - 1]
  for (let n = 1; n <= t; n++) {
    const o = la(0, t, n)
    e.push(ye(r, 1, o))
  }
}
function GA(e) {
  const t = [0]
  return HA(t, e.length - 1), t
}
function KA(e, t) {
  return e.map((r) => r * t)
}
function YA(e, t) {
  return e.map(() => t || q1).splice(0, e.length - 1)
}
function fl({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
  const o = $A(n) ? n.map(hg) : hg(n),
    i = { done: !1, value: t[0] },
    a = KA(r && r.length === t.length ? r : GA(t), e),
    s = dS(a, t, { ease: Array.isArray(o) ? o : YA(t, o) })
  return { calculatedDuration: e, next: (l) => ((i.value = s(l)), (i.done = l >= e), i) }
}
function fS(e, t) {
  return t ? e * (1e3 / t) : 0
}
const QA = 5
function pS(e, t, r) {
  const n = Math.max(t - QA, 0)
  return fS(r - e(n), t - n)
}
const pc = 0.001,
  XA = 0.01,
  yg = 10,
  qA = 0.05,
  ZA = 1
function JA({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i
  bA(e <= Jr(yg))
  let a = 1 - t
  ;(a = Fn(qA, ZA, a)),
    (e = Fn(XA, yg, br(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            h = Rd(u, a),
            v = Math.exp(-d)
          return pc - (f / h) * v
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            S = Rd(Math.pow(u, 2), a)
          return ((-o(u) + pc > 0 ? -1 : 1) * ((f - h) * v)) / S
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1
          return -pc + c * d
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e)
          return c * d
        }))
  const s = 5 / e,
    l = tR(o, i, s)
  if (((e = Jr(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * n
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e }
  }
}
const eR = 12
function tR(e, t, r) {
  let n = r
  for (let o = 1; o < eR; o++) n = n - e(n) / t(n)
  return n
}
function Rd(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const rR = ['duration', 'bounce'],
  nR = ['stiffness', 'damping', 'mass']
function vg(e, t) {
  return t.some((r) => e[r] !== void 0)
}
function oR(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!vg(e, nR) && vg(e, rR)) {
    const r = JA(e)
    ;(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function hS({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
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
    } = oR(n),
    h = c ? -br(c) : 0,
    v = l / (2 * Math.sqrt(s * u)),
    S = i - o,
    C = br(Math.sqrt(s / u)),
    m = Math.abs(S) < 5
  r || (r = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5)
  let p
  if (v < 1) {
    const g = Rd(C, v)
    p = (w) => {
      const T = Math.exp(-v * C * w)
      return i - T * (((h + v * C * S) / g) * Math.sin(g * w) + S * Math.cos(g * w))
    }
  } else if (v === 1) p = (g) => i - Math.exp(-C * g) * (S + (h + C * S) * g)
  else {
    const g = C * Math.sqrt(v * v - 1)
    p = (w) => {
      const T = Math.exp(-v * C * w),
        $ = Math.min(g * w, 300)
      return i - (T * ((h + v * C * S) * Math.sinh($) + g * S * Math.cosh($))) / g
    }
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (g) => {
      const w = p(g)
      if (f) a.done = g >= d
      else {
        let T = h
        g !== 0 && (v < 1 ? (T = pS(p, g, w)) : (T = 0))
        const $ = Math.abs(T) <= r,
          P = Math.abs(i - w) <= t
        a.done = $ && P
      }
      return (a.value = a.done ? i : w), a
    },
  }
}
function Sg({
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
    h = (E) => (s !== void 0 && E < s) || (l !== void 0 && E > l),
    v = (E) => (s === void 0 ? l : l === void 0 || Math.abs(s - E) < Math.abs(l - E) ? s : l)
  let S = r * t
  const C = d + S,
    m = a === void 0 ? C : a(C)
  m !== C && (S = m - d)
  const p = (E) => -S * Math.exp(-E / n),
    g = (E) => m + p(E),
    w = (E) => {
      const I = p(E),
        D = g(E)
      ;(f.done = Math.abs(I) <= u), (f.value = f.done ? m : D)
    }
  let T, $
  const P = (E) => {
    h(f.value) &&
      ((T = E),
      ($ = hS({
        keyframes: [f.value, v(f.value)],
        velocity: pS(g, E, f.value),
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
      next: (E) => {
        let I = !1
        return (
          !$ && T === void 0 && ((I = !0), w(E), P(E)),
          T !== void 0 && E > T ? $.next(E - T) : (!I && w(E), f)
        )
      },
    }
  )
}
const iR = (e) => {
    const t = ({ timestamp: r }) => e(r)
    return {
      start: () => fe.update(t, !0),
      stop: () => rn.update(t),
      now: () => (Ue.isProcessing ? Ue.timestamp : performance.now()),
    }
  },
  aR = { decay: Sg, inertia: Sg, tween: fl, keyframes: fl, spring: hS },
  bg = 2e4
function xg(e) {
  let t = 0
  const r = 50
  let n = e.next(t)
  for (; !n.done && t < bg; ) (t += r), (n = e.next(t))
  return t >= bg ? 1 / 0 : t
}
function pl({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = iR,
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
  const g = aR[o] || fl
  let w
  g !== fl && typeof n[0] != 'number' && ((w = dS([0, 100], n, { clamp: !1 })), (n = [0, 100]))
  const T = g({ ...f, keyframes: n })
  let $
  s === 'mirror' && ($ = g({ ...f, keyframes: [...n].reverse(), velocity: -(f.velocity || 0) }))
  let P = 'idle',
    E = null,
    I = null,
    D = null
  T.calculatedDuration === null && i && (T.calculatedDuration = xg(T))
  const { calculatedDuration: pe } = T
  let Ve = 1 / 0,
    Je = 1 / 0
  pe !== null && ((Ve = pe + a), (Je = Ve * (i + 1) - a))
  let he = 0
  const me = (O) => {
      if (I === null) return
      h > 0 && (I = Math.min(I, O)), E !== null ? (he = E) : (he = (O - I) * h)
      const oe = he - t,
        G = oe < 0
      ;(he = Math.max(oe, 0)), P === 'finished' && E === null && (he = Je)
      let ut = he,
        Pr = T
      if (i) {
        const Wn = he / Ve
        let Er = Math.floor(Wn),
          Gt = Wn % 1
        !Gt && Wn >= 1 && (Gt = 1), Gt === 1 && Er--, (Er = Math.min(Er, i + 1))
        const Io = !!(Er % 2)
        Io && (s === 'reverse' ? ((Gt = 1 - Gt), a && (Gt -= a / Ve)) : s === 'mirror' && (Pr = $))
        let wa = Fn(0, 1, Gt)
        he > Je && (wa = s === 'reverse' && Io ? 1 : 0), (ut = wa * Ve)
      }
      const Te = G ? { done: !1, value: n[0] } : Pr.next(ut)
      w && (Te.value = w(Te.value))
      let { done: Ht } = Te
      !G && pe !== null && (Ht = he >= Je)
      const un = E === null && (P === 'finished' || (P === 'running' && Ht) || (h < 0 && he <= 0))
      return d && d(Te.value), un && z(), Te
    },
    et = () => {
      p && p.stop(), (p = void 0)
    },
    wt = () => {
      ;(P = 'idle'), et(), m(), (I = D = null)
    },
    z = () => {
      ;(P = 'finished'), c && c(), et(), m()
    },
    V = () => {
      if (v) return
      p || (p = r(me))
      const O = p.now()
      l && l(),
        (P = 'running'),
        E !== null ? (I = O - E) : I || (I = O),
        (D = I),
        (E = null),
        p.start()
    }
  e && V()
  const N = {
    then(O, oe) {
      return C.then(O, oe)
    },
    get time() {
      return br(he)
    },
    set time(O) {
      ;(O = Jr(O)), (he = O), E !== null || !p || h === 0 ? (E = O) : (I = p.now() - O / h)
    },
    get duration() {
      const O = T.calculatedDuration === null ? xg(T) : T.calculatedDuration
      return br(O)
    },
    get speed() {
      return h
    },
    set speed(O) {
      O === h || !p || ((h = O), (N.time = br(he)))
    },
    get state() {
      return P
    },
    play: V,
    pause: () => {
      ;(P = 'paused'), (E = he)
    },
    stop: () => {
      ;(v = !0), P !== 'idle' && ((P = 'idle'), u && u(), wt())
    },
    cancel: () => {
      D !== null && me(D), wt()
    },
    complete: () => {
      P = 'finished'
    },
    sample: (O) => ((I = 0), me(O)),
  }
  return N
}
const sR = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  is = 10,
  lR = 2e4,
  uR = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !G1(t.ease)
function cR(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      Q1.waapi() &&
      sR.has(t) &&
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
  if (uR(t, o)) {
    const S = pl({ ...o, repeat: 0, delay: 0 })
    let C = { done: !1, value: c[0] }
    const m = []
    let p = 0
    for (; !C.done && p < lR; ) (C = S.sample(p)), m.push(C.value), (p += is)
    ;(c = m), (d = p - is), (f = 'linear')
  }
  const h = wA(e.owner.current, t, c, { ...o, duration: d, ease: f }),
    v = () => {
      fe.update(() => h.cancel()), s(), u()
    }
  return (
    (h.onfinish = () => {
      e.set(kA(c, o)), n && n(), v()
    }),
    {
      then(S, C) {
        return l.then(S, C)
      },
      get time() {
        return br(h.currentTime || 0)
      },
      set time(S) {
        h.currentTime = Jr(S)
      },
      get speed() {
        return h.playbackRate
      },
      set speed(S) {
        h.playbackRate = S
      },
      get duration() {
        return br(d)
      },
      play: () => {
        a || h.play()
      },
      pause: () => h.pause(),
      stop: () => {
        if (((a = !0), h.playState === 'idle')) return
        const { currentTime: S } = h
        if (S) {
          const C = pl({ ...o, autoplay: !1 })
          e.setWithVelocity(C.sample(S - is).value, C.sample(S).value, is)
        }
        v()
      },
      complete: () => h.finish(),
      cancel: v,
    }
  )
}
function dR({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Re,
      pause: Re,
      stop: Re,
      then: (i) => (i(), Promise.resolve()),
      cancel: Re,
      complete: Re,
    }
  )
  return t ? pl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o()
}
const fR = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  pR = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  hR = { type: 'keyframes', duration: 0.8 },
  mR = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  gR = (e, { keyframes: t }) =>
    t.length > 2 ? hR : Nn.has(e) ? (e.startsWith('scale') ? pR(t[1]) : fR) : mR,
  zd = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && nn.test(t) && !t.startsWith('url('))
        ),
  yR = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function vR(e) {
  const [t, r] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [n] = r.match(aa) || []
  if (!n) return e
  const o = r.replace(n, '')
  let i = yR.has(t) ? 1 : 0
  return n !== r && (i *= 100), t + '(' + i + o + ')'
}
const SR = /([a-z-]*)\(.*?\)/g,
  Md = {
    ...nn,
    getAnimatableNone: (e) => {
      const t = e.match(SR)
      return t ? t.map(vR).join(' ') : e
    },
  },
  bR = {
    ...$1,
    color: Ge,
    backgroundColor: Ge,
    outlineColor: Ge,
    fill: Ge,
    stroke: Ge,
    borderColor: Ge,
    borderTopColor: Ge,
    borderRightColor: Ge,
    borderBottomColor: Ge,
    borderLeftColor: Ge,
    filter: Md,
    WebkitFilter: Md,
  },
  xp = (e) => bR[e]
function wp(e, t) {
  let r = xp(e)
  return r !== Md && (r = nn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
function xR({
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
function wg(e) {
  return e === 0 || (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
}
function kg(e) {
  return typeof e == 'number' ? 0 : wp('', e)
}
function mS(e, t) {
  return e[t] || e.default || e
}
function wR(e, t, r, n) {
  const o = zd(t, r)
  let i = n.from !== void 0 ? n.from : e.get()
  if (
    (i === 'none' && o && typeof r == 'string'
      ? (i = wp(t, r))
      : wg(i) && typeof r == 'string'
      ? (i = kg(r))
      : !Array.isArray(r) && wg(r) && typeof i == 'string' && (r = kg(i)),
    Array.isArray(r))
  ) {
    for (let a = 0; a < r.length; a++) r[a] === null && (r[a] = a === 0 ? i : r[a - 1])
    return r
  } else return [i, r]
}
const kp =
  (e, t, r, n = {}) =>
  (o) => {
    const i = mS(n, e) || {},
      a = i.delay || n.delay || 0
    let { elapsed: s = 0 } = n
    s = s - Jr(a)
    const l = wR(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = zd(e, u),
      f = zd(e, c)
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
      (xR(i) || (h = { ...h, ...gR(e, h) }),
      h.duration && (h.duration = Jr(h.duration)),
      h.repeatDelay && (h.repeatDelay = Jr(h.repeatDelay)),
      !d || !f || xA.current || i.type === !1)
    )
      return dR(h)
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const v = cR(t, e, h)
      if (v) return v
    }
    return pl(h)
  }
function hl(e) {
  return !!(lt(e) && e.add)
}
const kR = (e) => /^\-?\d*\.?\d+$/.test(e),
  CR = (e) => /^0[^.\s]+$/.test(e)
function Cp(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function _p(e, t) {
  const r = e.indexOf(t)
  r > -1 && e.splice(r, 1)
}
class Tp {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return Cp(this.subscriptions, t), () => _p(this.subscriptions, t)
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
const _R = (e) => !isNaN(parseFloat(e))
class TR {
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
          ((this.timeDelta = i), (this.lastUpdated = a), fe.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => fe.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = _R(this.current)),
      (this.owner = r.owner)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Tp())
    const n = this.events[t].add(r)
    return t === 'change'
      ? () => {
          n(),
            fe.read(() => {
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
      ? fS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Ro(e, t) {
  return new TR(e, t)
}
const gS = (e) => (t) => t.test(e),
  PR = { test: (e) => e === 'auto', parse: (e) => e },
  yS = [jn, B, ir, Mr, M4, z4, PR],
  Zo = (e) => yS.find(gS(e)),
  ER = [...yS, Ge, nn],
  $R = (e) => ER.find(gS(e))
function AR(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ro(r))
}
function RR(e, t) {
  const r = ou(e, t)
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {}
  i = { ...i, ...n }
  for (const a in i) {
    const s = K4(i[a])
    AR(e, a, s)
  }
}
function zR(e, t, r) {
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
          (typeof c == 'string' && (kR(c) || CR(c))
            ? (c = parseFloat(c))
            : !$R(c) && nn.test(u) && (c = wp(l, u)),
          e.addValue(l, Ro(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c))
    }
}
function MR(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function LR(e, t, r) {
  const n = {}
  for (const o in e) {
    const i = MR(o, t)
    if (i !== void 0) n[o] = i
    else {
      const a = r.getValue(o)
      a && (n[o] = a.get())
    }
  }
  return n
}
function DR({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0
  return (t[r] = !1), n
}
function vS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
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
    if (!f || h === void 0 || (c && DR(c, d))) continue
    const v = { delay: r, elapsed: 0, ...i }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const C = e.getProps()[SA]
      C && (v.elapsed = window.HandoffAppearAnimations(C, d, f, fe))
    }
    f.start(kp(d, f, h, e.shouldReduceMotion && Nn.has(d) ? { type: !1 } : v))
    const S = f.animation
    hl(l) && (l.add(d), S.then(() => l.remove(d))), u.push(S)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && RR(e, a)
      }),
    u
  )
}
function Ld(e, t, r = {}) {
  const n = ou(e, t, r.custom)
  let { transition: o = e.getDefaultTransition() || {} } = n || {}
  r.transitionOverride && (o = r.transitionOverride)
  const i = n ? () => Promise.all(vS(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o
            return FR(e, t, u + l, c, d, r)
          }
        : () => Promise.resolve(),
    { when: s } = o
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i]
    return l().then(() => u())
  } else return Promise.all([i(), a(r.delay)])
}
function FR(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n
  return (
    Array.from(e.variantChildren)
      .sort(IR)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(Ld(u, t, { ...i, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(a)
  )
}
function IR(e, t) {
  return e.sortNodePosition(t)
}
function BR(e, t, r = {}) {
  e.notify('AnimationStart', t)
  let n
  if (Array.isArray(t)) {
    const o = t.map((i) => Ld(e, i, r))
    n = Promise.all(o)
  } else if (typeof t == 'string') n = Ld(e, t, r)
  else {
    const o = typeof t == 'function' ? ou(e, t, r.custom) : t
    n = Promise.all(vS(e, o, r))
  }
  return n.then(() => e.notify('AnimationComplete', t))
}
const VR = [...ip].reverse(),
  OR = ip.length
function NR(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => BR(e, r, n)))
}
function jR(e) {
  let t = NR(e)
  const r = UR()
  let n = !0
  const o = (l, u) => {
    const c = ou(e, u)
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
    for (let m = 0; m < OR; m++) {
      const p = VR[m],
        g = r[p],
        w = c[p] !== void 0 ? c[p] : d[p],
        T = oa(w),
        $ = p === u ? g.isActive : null
      $ === !1 && (S = m)
      let P = w === d[p] && w !== c[p] && T
      if (
        (P && n && e.manuallyAnimateOnMount && (P = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && $ === null) || (!w && !g.prevProp) || Jl(w) || typeof w == 'boolean')
      )
        continue
      const E = WR(g.prevProp, w)
      let I = E || (p === u && g.isActive && !P && T) || (m > S && T)
      const D = Array.isArray(w) ? w : [w]
      let pe = D.reduce(o, {})
      $ === !1 && (pe = {})
      const { prevResolvedValues: Ve = {} } = g,
        Je = { ...Ve, ...pe },
        he = (me) => {
          ;(I = !0), h.delete(me), (g.needsAnimating[me] = !0)
        }
      for (const me in Je) {
        const et = pe[me],
          wt = Ve[me]
        v.hasOwnProperty(me) ||
          (et !== wt
            ? cl(et) && cl(wt)
              ? !U1(et, wt) || E
                ? he(me)
                : (g.protectedKeys[me] = !0)
              : et !== void 0
              ? he(me)
              : h.add(me)
            : et !== void 0 && h.has(me)
            ? he(me)
            : (g.protectedKeys[me] = !0))
      }
      ;(g.prevProp = w),
        (g.prevResolvedValues = pe),
        g.isActive && (v = { ...v, ...pe }),
        n && e.blockInitialAnimation && (I = !1),
        I && !P && f.push(...D.map((me) => ({ animation: me, options: { type: p, ...l } })))
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
function WR(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !U1(t, e) : !1
}
function pn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function UR() {
  return {
    animate: pn(!0),
    whileInView: pn(),
    whileHover: pn(),
    whileTap: pn(),
    whileDrag: pn(),
    whileFocus: pn(),
    exit: pn(),
  }
}
class HR extends ln {
  constructor(t) {
    super(t), t.animationState || (t.animationState = jR(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), Jl(t) && (this.unmount = t.subscribe(this.node))
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
let GR = 0
class KR extends ln {
  constructor() {
    super(...arguments), (this.id = GR++)
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
const YR = { animation: { Feature: HR }, exit: { Feature: KR } },
  Cg = (e, t) => Math.abs(e - t)
function QR(e, t) {
  const r = Cg(e.x, t.x),
    n = Cg(e.y, t.y)
  return Math.sqrt(r ** 2 + n ** 2)
}
class SS {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = mc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = QR(u.offset, { x: 0, y: 0 }) >= 3
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
          (this.lastMoveEventInfo = hc(c, this.transformPagePoint)),
          fe.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = mc(
            u.type === 'pointercancel' ? this.lastMoveEventInfo : hc(c, this.transformPagePoint),
            this.history
          )
        this.startEvent && d && d(u, h), f && f(u, h)
      }),
      !B1(t))
    )
      return
    ;(this.handlers = r), (this.transformPagePoint = n)
    const o = ru(t),
      i = hc(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = Ue
    this.history = [{ ...a, timestamp: s }]
    const { onSessionStart: l } = r
    l && l(t, mc(i, this.history)),
      (this.removeListeners = Zr(
        Sr(window, 'pointermove', this.handlePointerMove),
        Sr(window, 'pointerup', this.handlePointerUp),
        Sr(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), rn.update(this.updatePoint)
  }
}
function hc(e, t) {
  return t ? { point: t(e.point) } : e
}
function _g(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function mc({ point: e }, t) {
  return { point: e, delta: _g(e, bS(t)), offset: _g(e, XR(t)), velocity: qR(t, 0.1) }
}
function XR(e) {
  return e[0]
}
function bS(e) {
  return e[e.length - 1]
}
function qR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let r = e.length - 1,
    n = null
  const o = bS(e)
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > Jr(t))); ) r--
  if (!n) return { x: 0, y: 0 }
  const i = br(o.timestamp - n.timestamp)
  if (i === 0) return { x: 0, y: 0 }
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function vt(e) {
  return e.max - e.min
}
function Dd(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r
}
function Tg(e, t, r, n = 0.5) {
  ;(e.origin = n),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = vt(r) / vt(t)),
    (Dd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ye(r.min, r.max, e.origin) - e.originPoint),
    (Dd(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Ti(e, t, r, n) {
  Tg(e.x, t.x, r.x, n ? n.originX : void 0), Tg(e.y, t.y, r.y, n ? n.originY : void 0)
}
function Pg(e, t, r) {
  ;(e.min = r.min + t.min), (e.max = e.min + vt(t))
}
function ZR(e, t, r) {
  Pg(e.x, t.x, r.x), Pg(e.y, t.y, r.y)
}
function Eg(e, t, r) {
  ;(e.min = t.min - r.min), (e.max = e.min + vt(t))
}
function Pi(e, t, r) {
  Eg(e.x, t.x, r.x), Eg(e.y, t.y, r.y)
}
function JR(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ye(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ye(r, e, n.max) : Math.min(e, r)),
    e
  )
}
function $g(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  }
}
function ez(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: $g(e.x, r, o), y: $g(e.y, t, n) }
}
function Ag(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
}
function tz(e, t) {
  return { x: Ag(e.x, t.x), y: Ag(e.y, t.y) }
}
function rz(e, t) {
  let r = 0.5
  const n = vt(e),
    o = vt(t)
  return (
    o > n ? (r = la(t.min, t.max - n, e.min)) : n > o && (r = la(e.min, e.max - o, t.min)),
    Fn(0, 1, r)
  )
}
function nz(e, t) {
  const r = {}
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
}
const Fd = 0.35
function oz(e = Fd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Fd),
    { x: Rg(e, 'left', 'right'), y: Rg(e, 'top', 'bottom') }
  )
}
function Rg(e, t, r) {
  return { min: zg(e, t), max: zg(e, r) }
}
function zg(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const Mg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ei = () => ({ x: Mg(), y: Mg() }),
  Lg = () => ({ min: 0, max: 0 }),
  we = () => ({ x: Lg(), y: Lg() })
function Xt(e) {
  return [e('x'), e('y')]
}
function xS({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } }
}
function iz({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function az(e, t) {
  if (!t) return e
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom })
  return { top: r.y, left: r.x, bottom: n.y, right: n.x }
}
function gc(e) {
  return e === void 0 || e === 1
}
function Id({ scale: e, scaleX: t, scaleY: r }) {
  return !gc(e) || !gc(t) || !gc(r)
}
function gn(e) {
  return Id(e) || wS(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function wS(e) {
  return Dg(e.x) || Dg(e.y)
}
function Dg(e) {
  return e && e !== '0%'
}
function ml(e, t, r) {
  const n = e - r,
    o = t * n
  return r + o
}
function Fg(e, t, r, n, o) {
  return o !== void 0 && (e = ml(e, o, n)), ml(e, r, n) + t
}
function Bd(e, t = 0, r = 1, n, o) {
  ;(e.min = Fg(e.min, t, r, n, o)), (e.max = Fg(e.max, t, r, n, o))
}
function kS(e, { x: t, y: r }) {
  Bd(e.x, t.translate, t.scale, t.originPoint), Bd(e.y, r.translate, r.scale, r.originPoint)
}
function sz(e, t, r, n = !1) {
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
        uo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), kS(e, a)),
      n && gn(i.latestValues) && uo(e, i.latestValues))
  }
  ;(t.x = Ig(t.x)), (t.y = Ig(t.y))
}
function Ig(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function Fr(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function Bg(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ye(e.min, e.max, i)
  Bd(e, t[r], t[n], a, t.scale)
}
const lz = ['x', 'scaleX', 'originX'],
  uz = ['y', 'scaleY', 'originY']
function uo(e, t) {
  Bg(e.x, t, lz), Bg(e.y, t, uz)
}
function CS(e, t) {
  return xS(az(e.getBoundingClientRect(), t))
}
function cz(e, t, r) {
  const n = CS(e, r),
    { scroll: o } = t
  return o && (Fr(n.x, o.offset.x), Fr(n.y, o.offset.y)), n
}
const dz = new WeakMap()
class fz {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = we()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement
    if (n && n.isPresent === !1) return
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(ru(l, 'page').point)
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps()
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = O1(c)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Xt((v) => {
            let S = this.getAxisMotionValue(v).get() || 0
            if (ir.test(S)) {
              const { projection: C } = this.visualElement
              if (C && C.layout) {
                const m = C.layout.layoutBox[v]
                m && (S = vt(m) * (parseFloat(S) / 100))
              }
            }
            this.originPoint[v] = S
          }),
          f && fe.update(() => f(l, u))
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
          ;(this.currentDirection = pz(v)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, v),
          this.updateAxis('y', u.point, v),
          this.visualElement.render(),
          h && h(l, u)
      },
      s = (l, u) => this.stop(l, u)
    this.panSession = new SS(
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
    i && fe.update(() => i(t, r))
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
    if (!n || !as(t, o, this.currentDirection)) return
    const i = this.getAxisMotionValue(t)
    let a = this.originPoint[t] + n[t]
    this.constraints && this.constraints[t] && (a = JR(a, this.constraints[t], this.elastic[t])),
      i.set(a)
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints
    t && so(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = ez(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = oz(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Xt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = nz(n.layoutBox[i], this.constraints[i]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps()
    if (!t || !so(t)) return !1
    const n = t.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const i = cz(n, o.root, this.visualElement.getTransformPagePoint())
    let a = tz(o.layout.layoutBox, i)
    if (r) {
      const s = r(iz(a))
      ;(this.hasMutatedConstraints = !!s), s && (a = xS(s))
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
      u = Xt((c) => {
        if (!as(c, r, this.currentDirection)) return
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
    return n.start(kp(t, n, 0, r))
  }
  stopAnimation() {
    Xt((t) => this.getAxisMotionValue(t).stop())
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r]
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Xt((r) => {
      const { drag: n } = this.getProps()
      if (!as(r, n, this.currentDirection)) return
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
    if (!so(r) || !n || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    Xt((a) => {
      const s = this.getAxisMotionValue(a)
      if (s) {
        const l = s.get()
        o[a] = rz({ min: l, max: l }, this.constraints[a])
      }
    })
    const { transformTemplate: i } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Xt((a) => {
        if (!as(a, t, null)) return
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a]
        s.set(ye(l, u, o[a]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    dz.set(this.visualElement, this)
    const t = this.visualElement.current,
      r = Sr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps()
        so(l) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n()
    const a = gr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Xt((c) => {
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
        dragElastic: a = Fd,
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
function as(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e)
}
function pz(e, t = 10) {
  let r = null
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r
}
class hz extends ln {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Re),
      (this.removeListeners = Re),
      (this.controls = new fz(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Re)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Vg = (e) => (t, r) => {
  e && fe.update(() => e(t, r))
}
class mz extends ln {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Re)
  }
  onPointerDown(t) {
    this.session = new SS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: Vg(t),
      onStart: Vg(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && fe.update(() => o(i, a))
      },
    }
  }
  mount() {
    this.removePointerDownListener = Sr(this.node.current, 'pointerdown', (t) =>
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
function gz() {
  const e = k.useContext(ga)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = k.useId()
  return k.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0]
}
function yz() {
  return vz(k.useContext(ga))
}
function vz(e) {
  return e === null ? !0 : e.isPresent
}
function Og(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Jo = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (B.test(e)) e = parseFloat(e)
        else return e
      const r = Og(e, t.target.x),
        n = Og(e, t.target.y)
      return `${r}% ${n}%`
    },
  },
  _S = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function Sz(e) {
  const t = _S.exec(e)
  if (!t) return [,]
  const [, r, n] = t
  return [r, n]
}
function Vd(e, t, r = 1) {
  const [n, o] = Sz(e)
  if (!n) return
  const i = window.getComputedStyle(t).getPropertyValue(n)
  return i ? i.trim() : Td(o) ? Vd(o, t, r + 1) : o
}
function bz(e, { ...t }, r) {
  const n = e.current
  if (!(n instanceof Element)) return { target: t, transitionEnd: r }
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get()
      if (!Td(i)) return
      const a = Vd(i, n)
      a && o.set(a)
    })
  for (const o in t) {
    const i = t[o]
    if (!Td(i)) continue
    const a = Vd(i, n)
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i))
  }
  return { target: t, transitionEnd: r }
}
const Ng = '_$css',
  xz = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = []
      o && (e = e.replace(_S, (h) => (i.push(h), Ng)))
      const a = nn.parse(e)
      if (a.length > 5) return n
      const s = nn.createTransformer(e),
        l = typeof a[0] != 'number' ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y
      ;(a[0 + l] /= u), (a[1 + l] /= c)
      const d = ye(u, c, 0.5)
      typeof a[2 + l] == 'number' && (a[2 + l] /= d), typeof a[3 + l] == 'number' && (a[3 + l] /= d)
      let f = s(a)
      if (o) {
        let h = 0
        f = f.replace(Ng, () => {
          const v = i[h]
          return h++, v
        })
      }
      return f
    },
  }
class wz extends An.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
      { projection: i } = t
    T4(kz),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (ki.hasEverUpdated = !0)
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
              fe.postRender(() => {
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
function TS(e) {
  const [t, r] = gz(),
    n = k.useContext(lp)
  return An.createElement(wz, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: k.useContext(_1),
    isPresent: t,
    safeToRemove: r,
  })
}
const kz = {
    borderRadius: {
      ...Jo,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Jo,
    borderTopRightRadius: Jo,
    borderBottomLeftRadius: Jo,
    borderBottomRightRadius: Jo,
    boxShadow: xz,
  },
  PS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Cz = PS.length,
  jg = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Wg = (e) => typeof e == 'number' || B.test(e)
function _z(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ye(0, r.opacity !== void 0 ? r.opacity : 1, Tz(n))),
      (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, Pz(n))))
    : i &&
      (e.opacity = ye(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ))
  for (let a = 0; a < Cz; a++) {
    const s = `border${PS[a]}Radius`
    let l = Ug(t, s),
      u = Ug(r, s)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Wg(l) === Wg(u)
        ? ((e[s] = Math.max(ye(jg(l), jg(u), n), 0)), (ir.test(u) || ir.test(l)) && (e[s] += '%'))
        : (e[s] = u)
  }
  ;(t.rotate || r.rotate) && (e.rotate = ye(t.rotate || 0, r.rotate || 0, n))
}
function Ug(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Tz = ES(0, 0.5, vp),
  Pz = ES(0.5, 0.95, Re)
function ES(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(la(e, t, n)))
}
function Hg(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function _t(e, t) {
  Hg(e.x, t.x), Hg(e.y, t.y)
}
function Gg(e, t, r, n, o) {
  return (e -= t), (e = ml(e, 1 / r, n)), o !== void 0 && (e = ml(e, 1 / o, n)), e
}
function Ez(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (ir.test(t) && ((t = parseFloat(t)), (t = ye(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return
  let s = ye(i.min, i.max, n)
  e === i && (s -= t), (e.min = Gg(e.min, t, r, s, o)), (e.max = Gg(e.max, t, r, s, o))
}
function Kg(e, t, [r, n, o], i, a) {
  Ez(e, t[r], t[n], t[o], t.scale, i, a)
}
const $z = ['x', 'scaleX', 'originX'],
  Az = ['y', 'scaleY', 'originY']
function Yg(e, t, r, n) {
  Kg(e.x, t, $z, r ? r.x : void 0, n ? n.x : void 0),
    Kg(e.y, t, Az, r ? r.y : void 0, n ? n.y : void 0)
}
function Qg(e) {
  return e.translate === 0 && e.scale === 1
}
function $S(e) {
  return Qg(e.x) && Qg(e.y)
}
function Od(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function Xg(e) {
  return vt(e.x) / vt(e.y)
}
class Rz {
  constructor() {
    this.members = []
  }
  add(t) {
    Cp(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((_p(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
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
function qg(e, t, r) {
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
const zz = (e, t) => e.depth - t.depth
class Mz {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    Cp(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    _p(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(zz), (this.isDirty = !1), this.children.forEach(t)
  }
}
function Lz(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r
      i >= t && (rn.read(n), e(i - t))
    }
  return fe.read(n, !0), () => rn.read(n)
}
function Dz(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function Fz(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function Iz(e, t, r) {
  const n = lt(e) ? e : Ro(e)
  return n.start(kp('', n, t, r)), n.animation
}
const Zg = ['', 'X', 'Y', 'Z'],
  Jg = 1e3
let Bz = 0
const yn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function AS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = Bz++),
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
          ;(yn.totalNodes = yn.resolvedTargetDeltas = yn.recalculatedProjection = 0),
            this.nodes.forEach(Nz),
            this.nodes.forEach(Hz),
            this.nodes.forEach(Gz),
            this.nodes.forEach(jz),
            Dz(yn)
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
      this.root === this && (this.nodes = new Mz())
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Tp()),
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
      ;(this.isSVG = Fz(a)), (this.instance = a)
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
            (d = Lz(f, 250)),
            ki.hasAnimatedSinceResize && ((ki.hasAnimatedSinceResize = !1), this.nodes.forEach(t0))
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
              const S = this.options.transition || c.getDefaultTransition() || qz,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: m } = c.getProps(),
                p = !this.targetLayout || !Od(this.targetLayout, v) || h,
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
                const w = { ...mS(S, 'layout'), onPlay: C, onComplete: m }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                !f && this.animationProgress === 0 && t0(this),
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
        rn.preRender(this.updateProjection)
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Kz), this.animationId++)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(e0)
        return
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size && (this.potentialNodes.forEach(Zz), this.potentialNodes.clear()),
        this.nodes.forEach(Uz),
        this.nodes.forEach(Vz),
        this.nodes.forEach(Oz),
        this.clearAllSnapshots(),
        ac.update(),
        ac.preRender(),
        ac.render())
    }
    clearAllSnapshots() {
      this.nodes.forEach(Wz), this.sharedNodes.forEach(Yz)
    }
    scheduleUpdateProjection() {
      fe.preRender(this.updateProjection, !1, !0)
    }
    scheduleCheckAfterUnmount() {
      fe.postRender(() => {
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
        (this.layoutCorrected = we()),
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
        s = this.projectionDelta && !$S(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      a &&
        (s || gn(this.latestValues) || c) &&
        (o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(a = !0) {
      const s = this.measurePageBox()
      let l = this.removeElementScroll(s)
      return (
        a && (l = this.removeTransform(l)),
        Jz(l),
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
      if (!a) return we()
      const s = a.measureViewportBox(),
        { scroll: l } = this.root
      return l && (Fr(s.x, l.offset.x), Fr(s.y, l.offset.y)), s
    }
    removeElementScroll(a) {
      const s = we()
      _t(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            _t(s, a)
            const { scroll: f } = this.root
            f && (Fr(s.x, -f.offset.x), Fr(s.y, -f.offset.y))
          }
          Fr(s.x, c.offset.x), Fr(s.y, c.offset.y)
        }
      }
      return s
    }
    applyTransform(a, s = !1) {
      const l = we()
      _t(l, a)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          uo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gn(c.latestValues) && uo(l, c.latestValues)
      }
      return gn(this.latestValues) && uo(l, this.latestValues), l
    }
    removeTransform(a) {
      const s = we()
      _t(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !gn(u.latestValues)) continue
        Id(u.latestValues) && u.updateSnapshot()
        const c = we(),
          d = u.measurePageBox()
        _t(c, d), Yg(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return gn(this.latestValues) && Yg(s, this.latestValues), s
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
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              Pi(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              _t(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = we()), (this.targetWithTransforms = we())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp &&
                  this.relativeParent.resolveTargetDelta(!0),
                ZR(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : _t(this.target, this.layout.layoutBox),
                kS(this.target, this.targetDelta))
              : _t(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const h = this.getClosestProjectingParent()
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target
              ? ((this.relativeParent = h),
                (this.relativeTarget = we()),
                (this.relativeTargetOrigin = we()),
                Pi(this.relativeTargetOrigin, this.target, h.target),
                _t(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          yn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Id(this.parent.latestValues) || wS(this.parent.latestValues)))
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
      _t(this.layoutCorrected, this.layout.layoutBox),
        sz(this.layoutCorrected, this.treeScale, this.path, l)
      const { target: f } = s
      if (!f) return
      this.projectionDelta ||
        ((this.projectionDelta = Ei()), (this.projectionDeltaWithTransform = Ei()))
      const h = this.treeScale.x,
        v = this.treeScale.y,
        S = this.projectionTransform
      Ti(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = qg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== S || this.treeScale.x !== h || this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        yn.recalculatedProjection++
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
        d = Ei()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s)
      const f = we(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        S = h !== v,
        C = this.getStack(),
        m = !C || C.members.length <= 1,
        p = !!(S && !m && this.options.crossfade === !0 && !this.path.some(Xz))
      this.animationProgress = 0
      let g
      ;(this.mixTargetDelta = (w) => {
        const T = w / 1e3
        r0(d.x, a.x, T),
          r0(d.y, a.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Qz(this.relativeTarget, this.relativeTargetOrigin, f, T),
            g && Od(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = we()),
            _t(g, this.relativeTarget)),
          S && ((this.animationValues = c), _z(c, u, this.latestValues, T, p, m)),
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
          (rn.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = fe.update(() => {
          ;(ki.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Iz(0, Jg, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Jg), this.currentAnimation.stop()),
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
          RS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || we()
          const d = vt(this.layout.layoutBox.x)
          ;(l.x.min = a.target.x.min), (l.x.max = l.x.min + d)
          const f = vt(this.layout.layoutBox.y)
          ;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
        }
        _t(s, l), uo(s, c), Ti(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Rz()), this.sharedNodes.get(a).add(s)
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
      for (let c = 0; c < Zg.length; c++) {
        const d = 'rotate' + Zg[c]
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
          (u.pointerEvents = Es(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {}
        return (
          this.options.layoutId &&
            ((S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (S.pointerEvents = Es(a.pointerEvents) || '')),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((S.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          S
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = qg(this.projectionDeltaWithTransform, this.treeScale, f)),
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
      for (const S in ll) {
        if (f[S] === void 0) continue
        const { correct: C, applyTo: m } = ll[S],
          p = u.transform === 'none' ? f[S] : C(f[S], d)
        if (m) {
          const g = m.length
          for (let w = 0; w < g; w++) u[m[w]] = p
        } else u[S] = p
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Es(a.pointerEvents) || '' : 'none'),
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
        this.root.nodes.forEach(e0),
        this.root.sharedNodes.clear()
    }
  }
}
function Vz(e) {
  e.updateLayout()
}
function Oz(e) {
  var t
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source
    i === 'size'
      ? Xt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = vt(f)
          ;(f.min = n[d].min), (f.max = f.min + h)
        })
      : RS(i, r.layoutBox, n) &&
        Xt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = vt(n[d])
          ;(f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + h))
        })
    const s = Ei()
    Ti(s, n, r.layoutBox)
    const l = Ei()
    a ? Ti(l, e.applyTransform(o, !0), r.measuredBox) : Ti(l, n, r.layoutBox)
    const u = !$S(s)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d
        if (f && h) {
          const v = we()
          Pi(v, r.layoutBox, f.layoutBox)
          const S = we()
          Pi(S, n, h.layoutBox),
            Od(v, S) || (c = !0),
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
function Nz(e) {
  yn.totalNodes++,
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
function jz(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Wz(e) {
  e.clearSnapshot()
}
function e0(e) {
  e.clearMeasurements()
}
function Uz(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function t0(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0)
}
function Hz(e) {
  e.resolveTargetDelta()
}
function Gz(e) {
  e.calcProjection()
}
function Kz(e) {
  e.resetRotation()
}
function Yz(e) {
  e.removeLeadSnapshot()
}
function r0(e, t, r) {
  ;(e.translate = ye(t.translate, 0, r)),
    (e.scale = ye(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function n0(e, t, r, n) {
  ;(e.min = ye(t.min, r.min, n)), (e.max = ye(t.max, r.max, n))
}
function Qz(e, t, r, n) {
  n0(e.x, t.x, r.x, n), n0(e.y, t.y, r.y, n)
}
function Xz(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const qz = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function Zz(e, t) {
  let r = e.root
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i]
      break
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`)
  o && e.mount(o, !0)
}
function o0(e) {
  ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function Jz(e) {
  o0(e.x), o0(e.y)
}
function RS(e, t, r) {
  return e === 'position' || (e === 'preserve-aspect' && !Dd(Xg(t), Xg(r), 0.2))
}
const eM = AS({
    attachResizeListener: (e, t) => gr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  yc = { current: void 0 },
  zS = AS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!yc.current) {
        const e = new eM(0, {})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (yc.current = e)
      }
      return yc.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  tM = { pan: { Feature: mz }, drag: { Feature: hz, ProjectionNode: zS, MeasureLayout: TS } },
  rM = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  MS = (e) => rM.has(e),
  nM = (e) => Object.keys(e).some(MS),
  i0 = (e) => e === jn || e === B,
  a0 = (e, t) => parseFloat(e.split(', ')[t]),
  s0 =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const o = n.match(/^matrix3d\((.+)\)$/)
      if (o) return a0(o[1], t)
      {
        const i = n.match(/^matrix\((.+)\)$/)
        return i ? a0(i[1], e) : 0
      }
    },
  oM = new Set(['x', 'y', 'z']),
  iM = tu.filter((e) => !oM.has(e))
function aM(e) {
  const t = []
  return (
    iM.forEach((r) => {
      const n = e.getValue(r)
      n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const l0 = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: s0(4, 13),
    y: s0(5, 14),
  },
  sM = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {}
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach((u) => {
        s[u] = l0[u](n, i)
      }),
      t.render()
    const l = t.measureViewportBox()
    return (
      r.forEach((u) => {
        const c = t.getValue(u)
        c && c.jump(s[u]), (e[u] = l0[u](l, i))
      }),
      e
    )
  },
  lM = (e, t, r = {}, n = {}) => {
    ;(t = { ...t }), (n = { ...n })
    const o = Object.keys(t).filter(MS)
    let i = [],
      a = !1
    const s = []
    if (
      (o.forEach((l) => {
        const u = e.getValue(l)
        if (!e.hasValue(l)) return
        let c = r[l],
          d = Zo(c)
        const f = t[l]
        let h
        if (cl(f)) {
          const v = f.length,
            S = f[0] === null ? 1 : 0
          ;(c = f[S]), (d = Zo(c))
          for (let C = S; C < v; C++) h ? yp(Zo(f[C]) === h) : (h = Zo(f[C]))
        } else h = Zo(f)
        if (d !== h)
          if (i0(d) && i0(h)) {
            const v = u.get()
            typeof v == 'string' && u.set(parseFloat(v)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === B && (t[l] = f.map(parseFloat))
          } else
            d != null && d.transform && h != null && h.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = aM(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f))
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = sM(t, e, s)
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d)
          }),
        e.render(),
        Zl && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      )
    } else return { target: t, transitionEnd: n }
  }
function uM(e, t, r, n) {
  return nM(t) ? lM(e, t, r, n) : { target: t, transitionEnd: n }
}
const cM = (e, t, r, n) => {
    const o = bz(e, t, n)
    return (t = o.target), (n = o.transitionEnd), uM(e, t, r, n)
  },
  Nd = { current: null },
  LS = { current: !1 }
function dM() {
  if (((LS.current = !0), !!Zl))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Nd.current = e.matches)
      e.addListener(t), t()
    } else Nd.current = !1
}
function fM(e, t, r) {
  const { willChange: n } = t
  for (const o in t) {
    const i = t[o],
      a = r[o]
    if (lt(i)) e.addValue(o, i), hl(n) && n.add(o)
    else if (lt(a)) e.addValue(o, Ro(i, { owner: e })), hl(n) && n.remove(o)
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o)
        !s.hasAnimated && s.set(i)
      } else {
        const s = e.getStaticValue(o)
        e.addValue(o, Ro(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o)
  return t
}
const u0 = new WeakMap(),
  DS = Object.keys(ia),
  pM = DS.length,
  c0 = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  hM = ap.length
class mM {
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
      (this.scheduleRender = () => fe.render(this.render, !1, !0))
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
      (this.isControllingVariants = eu(r)),
      (this.isVariantNode = C1(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {})
    for (const d in c) {
      const f = c[d]
      s[d] !== void 0 && lt(f) && (f.set(s[d], !1), hl(u) && u.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      u0.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      LS.current || dM(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Nd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    u0.delete(this.current),
      this.projection && this.projection.unmount(),
      rn.update(this.notifyUpdate),
      rn.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, r) {
    const n = Nn.has(t),
      o = r.on('change', (a) => {
        ;(this.latestValues[t] = a),
          this.props.onUpdate && fe.update(this.notifyUpdate, !1, !0),
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
    for (let u = 0; u < pM; u++) {
      const c = DS[u],
        { isEnabled: d, Feature: f, ProjectionNode: h, MeasureLayout: v } = ia[c]
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
        alwaysMeasureLayout: !!d || (f && so(f)),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we()
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
    for (let n = 0; n < c0.length; n++) {
      const o = c0[n]
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
      const i = t['on' + o]
      i && (this.propEventSubscriptions[o] = this.on(o, i))
    }
    ;(this.prevMotionValues = fM(
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
    for (let n = 0; n < hM; n++) {
      const o = ap[n],
        i = this.props[o]
      ;(oa(i) || i === !1) && (r[o] = i)
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
    return n === void 0 && r !== void 0 && ((n = Ro(r, { owner: this })), this.addValue(t, n)), n
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
          ? (r = gp(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0
    if (n && o !== void 0) return o
    const i = this.getBaseTargetFromProps(this.props, t)
    return i !== void 0 && !lt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Tp()), this.events[t].add(r)
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r)
  }
}
class FS extends mM {
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
    let a = LR(n, t || {}, this)
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      zR(this, n, a)
      const s = cM(this, n, a, r)
      ;(r = s.transitionEnd), (n = s.target)
    }
    return { transition: t, transitionEnd: r, ...n }
  }
}
function gM(e) {
  return window.getComputedStyle(e)
}
class yM extends FS {
  readValueFromInstance(t, r) {
    if (Nn.has(r)) {
      const n = xp(r)
      return (n && n.default) || 0
    } else {
      const n = gM(t),
        o = (E1(r) ? n.getPropertyValue(r) : n[r]) || 0
      return typeof o == 'string' ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return CS(t, r)
  }
  build(t, r, n, o) {
    cp(t, r, n, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, r) {
    return mp(t, r)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    lt(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`)
      }))
  }
  renderInstance(t, r, n, o) {
    M1(t, r, n, o)
  }
}
class vM extends FS {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, r) {
    return t[r]
  }
  readValueFromInstance(t, r) {
    if (Nn.has(r)) {
      const n = xp(r)
      return (n && n.default) || 0
    }
    return (r = L1.has(r) ? r : hp(r)), t.getAttribute(r)
  }
  measureInstanceViewportBox() {
    return we()
  }
  scrapeMotionValuesFromProps(t, r) {
    return F1(t, r)
  }
  build(t, r, n, o) {
    fp(t, r, n, this.isSVGTag, o.transformTemplate)
  }
  renderInstance(t, r, n, o) {
    D1(t, r, n, o)
  }
  mount(t) {
    ;(this.isSVGTag = pp(t.tagName)), super.mount(t)
  }
}
const SM = (e, t) =>
    up(e)
      ? new vM(t, { enableHardwareAcceleration: !1 })
      : new yM(t, { enableHardwareAcceleration: !0 }),
  bM = { layout: { ProjectionNode: zS, MeasureLayout: TS } },
  xM = { ...YR, ...mA, ...tM, ...bM },
  wM = C4((e, t) => Z4(e, t, xM, SM))
function IS() {
  const e = k.useRef(!1)
  return (
    sl(
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
function kM() {
  const e = IS(),
    [t, r] = k.useState(0),
    n = k.useCallback(() => {
      e.current && r(t + 1)
    }, [t])
  return [k.useCallback(() => fe.postRender(n), [n]), t]
}
class CM extends k.Component {
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
function _M({ children: e, isPresent: t }) {
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
    k.createElement(CM, { isPresent: t, childRef: n, sizeRef: o }, k.cloneElement(e, { ref: n }))
  )
}
const vc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = sp(TM),
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
    a === 'popLayout' && (e = k.createElement(_M, { isPresent: r }, e)),
    k.createElement(ga.Provider, { value: u }, e)
  )
}
function TM() {
  return new Map()
}
function PM(e) {
  return k.useEffect(() => () => e(), [])
}
const Yn = (e) => e.key || ''
function EM(e, t) {
  e.forEach((r) => {
    const n = Yn(r)
    t.set(n, r)
  })
}
function $M(e) {
  const t = []
  return (
    k.Children.forEach(e, (r) => {
      k.isValidElement(r) && t.push(r)
    }),
    t
  )
}
const AM = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  let [s] = kM()
  const l = k.useContext(lp).forceRender
  l && (s = l)
  const u = IS(),
    c = $M(e)
  let d = c
  const f = new Set(),
    h = k.useRef(d),
    v = k.useRef(new Map()).current,
    S = k.useRef(!0)
  if (
    (sl(() => {
      ;(S.current = !1), EM(c, v), (h.current = d)
    }),
    PM(() => {
      ;(S.current = !0), v.clear(), f.clear()
    }),
    S.current)
  )
    return k.createElement(
      k.Fragment,
      null,
      d.map((g) =>
        k.createElement(
          vc,
          {
            key: Yn(g),
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
  const C = h.current.map(Yn),
    m = c.map(Yn),
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
        $ = () => {
          v.delete(g), f.delete(g)
          const P = h.current.findIndex((E) => E.key === g)
          if ((h.current.splice(P, 1), !f.size)) {
            if (((h.current = c), u.current === !1)) return
            s(), n && n()
          }
        }
      d.splice(
        T,
        0,
        k.createElement(
          vc,
          {
            key: Yn(w),
            isPresent: !1,
            onExitComplete: $,
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
        : k.createElement(vc, { key: Yn(g), isPresent: !0, presenceAffectsLayout: i, mode: a }, g)
    })),
    k.createElement(k.Fragment, null, f.size ? d : d.map((g) => k.cloneElement(g)))
  )
}
var RM = {
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
  BS = k.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = RM,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = k.useState(s),
      h = yz()
    og(() => {
      h || n == null || n()
    }, [h]),
      og(() => {
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
      p4(C, d)
    const m = k.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...l }),
        [l, c]
      ),
      p = k.useMemo(() => c4(a), [a])
    return R(wM.li, {
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
      children: R(_e.div, {
        'role': 'status',
        'aria-atomic': 'true',
        'className': 'chakra-toast__inner',
        '__css': m,
        'children': jr(r, { id: t, onClose: C }),
      }),
    })
  })
BS.displayName = 'ToastComponent'
var d0 = {
    path: ar('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        R('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        R('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        R('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  xa = Dt((e, t) => {
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
      c = Lt('chakra-icon', s),
      d = On('Icon', e),
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
      v = n ?? d0.viewBox
    if (r && typeof r != 'string') return R(_e.svg, { as: r, ...h, ...u })
    const S = a ?? d0.path
    return R(_e.svg, { verticalAlign: 'middle', viewBox: v, ...h, ...u, children: S })
  })
xa.displayName = 'Icon'
function zM(e) {
  return R(xa, {
    viewBox: '0 0 24 24',
    ...e,
    children: R('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  })
}
function MM(e) {
  return R(xa, {
    viewBox: '0 0 24 24',
    ...e,
    children: R('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  })
}
function f0(e) {
  return R(xa, {
    viewBox: '0 0 24 24',
    ...e,
    children: R('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  })
}
var LM = Aw({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  Pp = Dt((e, t) => {
    const r = On('Spinner', e),
      {
        label: n = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = Vn(e),
      u = Lt('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${LM} ${i} linear infinite`,
        ...r,
      }
    return R(_e.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && R(_e.span, { srOnly: !0, children: n }),
    })
  })
Pp.displayName = 'Spinner'
var [DM, FM] = Lo({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
  [IM, Ep] = Lo({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  VS = {
    info: { icon: MM, colorScheme: 'blue' },
    warning: { icon: f0, colorScheme: 'orange' },
    success: { icon: zM, colorScheme: 'green' },
    error: { icon: f0, colorScheme: 'red' },
    loading: { icon: Pp, colorScheme: 'blue' },
  }
function BM(e) {
  return VS[e].colorScheme
}
function VM(e) {
  return VS[e].icon
}
var OS = Dt(function (t, r) {
  const o = { display: 'inline', ...Ep().description }
  return R(_e.div, { ref: r, ...t, className: Lt('chakra-alert__desc', t.className), __css: o })
})
OS.displayName = 'AlertDescription'
function NS(e) {
  const { status: t } = FM(),
    r = VM(t),
    n = Ep(),
    o = t === 'loading' ? n.spinner : n.icon
  return R(_e.span, {
    display: 'inherit',
    ...e,
    className: Lt('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || R(r, { h: '100%', w: '100%' }),
  })
}
NS.displayName = 'AlertIcon'
var jS = Dt(function (t, r) {
  const n = Ep()
  return R(_e.div, {
    ref: r,
    ...t,
    className: Lt('chakra-alert__title', t.className),
    __css: n.title,
  })
})
jS.displayName = 'AlertTitle'
var WS = Dt(function (t, r) {
  var n
  const { status: o = 'info', addRole: i = !0, ...a } = Vn(t),
    s = (n = t.colorScheme) != null ? n : BM(o),
    l = W3('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    }
  return R(DM, {
    value: { status: o },
    children: R(IM, {
      value: l,
      children: R(_e.div, {
        role: i ? 'alert' : void 0,
        ref: r,
        ...a,
        className: Lt('chakra-alert', t.className),
        __css: u,
      }),
    }),
  })
})
WS.displayName = 'Alert'
function OM(e) {
  return R(xa, {
    'focusable': 'false',
    'aria-hidden': !0,
    ...e,
    'children': R('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  })
}
var US = Dt(function (t, r) {
  const n = On('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = Vn(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  return R(_e.button, {
    'type': 'button',
    'aria-label': 'Close',
    'ref': r,
    'disabled': i,
    '__css': { ...l, ...n, ...a },
    ...s,
    'children': o || R(OM, { width: '1em', height: '1em' }),
  })
})
US.displayName = 'CloseButton'
var NM = {
    'top': [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom': [],
    'bottom-right': [],
  },
  $i = jM(NM)
function jM(e) {
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
      const a = WM(o, i),
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
            { position: l, index: u } = ng(s, o)
          return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: HM(i) }), s
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
        const a = x1(i, o)
        return a ? { ...i, [a]: i[a].map((s) => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
      })
    },
    isActive: (o) => !!ng($i.getState(), o).position,
  }
}
var p0 = 0
function WM(e, t = {}) {
  var r, n
  p0 += 1
  const o = (r = t.id) != null ? r : p0,
    i = (n = t.position) != null ? n : 'bottom'
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => $i.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  }
}
var UM = (e) => {
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
  return ar(WS, {
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
      R(NS, { children: u }),
      ar(_e.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && R(jS, { id: c == null ? void 0 : c.title, children: o }),
          s && R(OS, { id: c == null ? void 0 : c.description, display: 'block', children: s }),
        ],
      }),
      i && R(US, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  })
}
function HM(e = {}) {
  const { render: t, toastComponent: r = UM } = e
  return (o) => (typeof t == 'function' ? t({ ...o, ...e }) : R(r, { ...o, ...e }))
}
var [GM, m6] = Lo({ name: 'ToastOptionsContext', strict: !1 }),
  KM = (e) => {
    const t = k.useSyncExternalStore($i.subscribe, $i.getState, $i.getState),
      { motionVariants: r, component: n = BS, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s]
        return R(
          'ul',
          {
            'role': 'region',
            'aria-live': 'polite',
            'id': `chakra-toast-manager-${s}`,
            'style': d4(s),
            'children': R(AM, {
              initial: !1,
              children: l.map((u) => R(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        )
      })
    return R(Gl, { ...o, children: a })
  },
  YM = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return ar(l4, {
        theme: n,
        ...i,
        children: [
          R(GM, { value: o == null ? void 0 : o.defaultOptions, children: r }),
          R(KM, { ...o }),
        ],
      })
    },
  QM = YM(f1)
function XM(e, t) {
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
function qM(...e) {
  return (t) => {
    e.forEach((r) => {
      XM(r, t)
    })
  }
}
function ZM(...e) {
  return k.useMemo(() => qM(...e), e)
}
var jd = Dt(function (t, r) {
  const { htmlWidth: n, htmlHeight: o, alt: i, ...a } = t
  return R('img', { width: n, height: o, ref: r, alt: i, ...a })
})
jd.displayName = 'NativeImage'
function JM(e) {
  const {
      loading: t,
      src: r,
      srcSet: n,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = k.useState('pending')
  k.useEffect(() => {
    c(r ? 'loading' : 'pending')
  }, [r])
  const d = k.useRef(),
    f = k.useCallback(() => {
      if (!r) return
      h()
      const v = new Image()
      ;(v.src = r),
        a && (v.crossOrigin = a),
        n && (v.srcset = n),
        s && (v.sizes = s),
        t && (v.loading = t),
        (v.onload = (S) => {
          h(), c('loaded'), o == null || o(S)
        }),
        (v.onerror = (S) => {
          h(), c('failed'), i == null || i(S)
        }),
        (d.current = v)
    }, [r, a, n, s, o, i, t]),
    h = () => {
      d.current && ((d.current.onload = null), (d.current.onerror = null), (d.current = null))
    }
  return (
    Di(() => {
      if (!l)
        return (
          u === 'loading' && f(),
          () => {
            h()
          }
        )
    }, [u, f, l]),
    l ? 'loaded' : u
  )
}
var e6 = (e, t) =>
  (e !== 'loaded' && t === 'beforeLoadOrError') || (e === 'failed' && t === 'onError')
function t6(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
var HS = Dt(function (t, r) {
  const {
      fallbackSrc: n,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = 'beforeLoadOrError',
      referrerPolicy: h,
      ...v
    } = t,
    S = n !== void 0 || o !== void 0,
    C = u != null || c || !S,
    m = JM({ ...t, ignoreFallback: C }),
    p = e6(m, f),
    g = { ref: r, objectFit: l, objectPosition: s, ...(C ? v : t6(v, ['onError', 'onLoad'])) }
  return p
    ? o || R(_e.img, { as: jd, className: 'chakra-image__placeholder', src: n, ...g })
    : R(_e.img, {
        as: jd,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: h,
        className: 'chakra-image',
        ...g,
      })
})
HS.displayName = 'Image'
var [g6, r6] = Lo({ strict: !1, name: 'ButtonGroupContext' })
function n6(e) {
  const [t, r] = k.useState(!e)
  return {
    ref: k.useCallback((i) => {
      i && r(i.tagName === 'BUTTON')
    }, []),
    type: t ? 'button' : void 0,
  }
}
function Wd(e) {
  const { children: t, className: r, ...n } = e,
    o = k.isValidElement(t) ? k.cloneElement(t, { 'aria-hidden': !0, 'focusable': !1 }) : t,
    i = Lt('chakra-button__icon', r)
  return R(_e.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  })
}
Wd.displayName = 'ButtonIcon'
function Ud(e) {
  const {
      label: t,
      placement: r,
      spacing: n = '0.5rem',
      children: o = R(Pp, { color: 'currentColor', width: '1em', height: '1em' }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = Lt('chakra-button__spinner', i),
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
  return R(_e.div, { className: l, ...s, __css: c, children: o })
}
Ud.displayName = 'ButtonSpinner'
var GS = Dt((e, t) => {
  const r = r6(),
    n = On('Button', { ...r, ...e }),
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
    } = Vn(e),
    p = k.useMemo(() => {
      const $ = { ...(n == null ? void 0 : n._focus), zIndex: 1 }
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
        ...(!!r && { _focus: $ }),
      }
    }, [n, r]),
    { ref: g, type: w } = n6(C),
    T = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s }
  return ar(_e.button, {
    'ref': ZM(t, g),
    'as': C,
    'type': f ?? w,
    'data-active': pm(a),
    'data-loading': pm(i),
    '__css': p,
    'className': Lt('chakra-button', S),
    ...m,
    'disabled': o || i,
    'children': [
      i &&
        v === 'start' &&
        R(Ud, {
          className: 'chakra-button__spinner--start',
          label: c,
          placement: 'start',
          spacing: d,
          children: h,
        }),
      i ? c || R(_e.span, { opacity: 0, children: R(h0, { ...T }) }) : R(h0, { ...T }),
      i &&
        v === 'end' &&
        R(Ud, {
          className: 'chakra-button__spinner--end',
          label: c,
          placement: 'end',
          spacing: d,
          children: h,
        }),
    ],
  })
})
GS.displayName = 'Button'
function h0(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e
  return ar(Lx, {
    children: [
      t && R(Wd, { marginEnd: o, children: t }),
      n,
      r && R(Wd, { marginStart: o, children: r }),
    ],
  })
}
var KS = Dt(function (t, r) {
  const n = On('Heading', t),
    { className: o, ...i } = Vn(t)
  return R(_e.h2, { ref: r, className: Lt('chakra-heading', t.className), ...i, __css: n })
})
KS.displayName = 'Heading'
var YS = Dt(function (t, r) {
  const { className: n, centerContent: o, ...i } = Vn(t),
    a = On('Container', t)
  return R(_e.div, {
    ref: r,
    className: Lt('chakra-container', n),
    ...i,
    __css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
  })
})
YS.displayName = 'Container'
var QS = Dt(function (t, r) {
  const {
      borderLeftWidth: n,
      borderBottomWidth: o,
      borderTopWidth: i,
      borderRightWidth: a,
      borderWidth: s,
      borderStyle: l,
      borderColor: u,
      ...c
    } = On('Divider', t),
    { className: d, orientation: f = 'horizontal', __css: h, ...v } = Vn(t),
    S = {
      vertical: { borderLeftWidth: n || a || s || '1px', height: '100%' },
      horizontal: { borderBottomWidth: o || i || s || '1px', width: '100%' },
    }
  return R(_e.hr, {
    'ref': r,
    'aria-orientation': f,
    ...v,
    '__css': { ...c, border: '0', borderColor: u, borderStyle: l, ...S[f], ...h },
    'className': Lt('chakra-divider', d),
  })
})
QS.displayName = 'Divider'
var Hd = {},
  m0 = Fi
;(Hd.createRoot = m0.createRoot), (Hd.hydrateRoot = m0.hydrateRoot)
var XS = 'https://static.elfsight.com/platform/platform.js'
function o6() {
  k.useEffect(function () {
    i6() || l6()
  }, [])
}
function i6() {
  return a6() || s6()
}
function a6() {
  return 'eapps' in window
}
function s6() {
  return !!document.querySelector('script[src="' + XS + '"]')
}
function l6() {
  var e = document.createElement('script')
  ;(e.src = XS), (e.defer = !0), document.head.appendChild(e)
}
function u6(e) {
  var t = e.widgetID
  return o6(), An.createElement('div', { className: 'elfsight-app-' + t })
}
var c6 = k.memo(u6)
const d6 = '/assets/sedona-header-e1943e27.jpg'
function f6() {
  return ar(YS, {
    maxW: '6xl',
    children: [
      R(HS, { src: d6 }),
      R(KS, { children: 'Sedona Guest Services' }),
      R(GS, {
        colorScheme: 'linkedin',
        onClick: () => window.open('mailto:ohmigom@gmail.com'),
        children: 'Contact',
      }),
      R(QS, { my: 10 }),
      R(c6, { widgetID: 'd254839d-abb3-4085-b4a1-59a38451e70f' }),
    ],
  })
}
const p6 = z3({
  fonts: { heading: 'Roboto, serif', body: 'Roboto, sans-serif', mono: 'Roboto, sans-serif' },
})
Hd.createRoot(document.getElementById('root')).render(
  R(An.StrictMode, { children: R(QM, { theme: p6, children: R(f6, {}) }) })
)
