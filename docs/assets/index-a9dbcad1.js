function Jb(e, t) {
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
var Ea =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function ex(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var Ts = {},
  tx = {
    get exports() {
      return Ts
    },
    set exports(e) {
      Ts = e
    },
  },
  ml = {},
  _ = {},
  rx = {
    get exports() {
      return _
    },
    set exports(e) {
      _ = e
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
 */ var ia = Symbol.for('react.element'),
  nx = Symbol.for('react.portal'),
  ox = Symbol.for('react.fragment'),
  ix = Symbol.for('react.strict_mode'),
  ax = Symbol.for('react.profiler'),
  sx = Symbol.for('react.provider'),
  lx = Symbol.for('react.context'),
  ux = Symbol.for('react.forward_ref'),
  cx = Symbol.for('react.suspense'),
  dx = Symbol.for('react.memo'),
  fx = Symbol.for('react.lazy'),
  Up = Symbol.iterator
function px(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Up && e[Up]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var cg = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  dg = Object.assign,
  fg = {}
function Ao(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = fg), (this.updater = r || cg)
}
Ao.prototype.isReactComponent = {}
Ao.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ao.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function pg() {}
pg.prototype = Ao.prototype
function Wd(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = fg), (this.updater = r || cg)
}
var Ud = (Wd.prototype = new pg())
Ud.constructor = Wd
dg(Ud, Ao.prototype)
Ud.isPureReactComponent = !0
var Hp = Array.isArray,
  hg = Object.prototype.hasOwnProperty,
  Hd = { current: null },
  mg = { key: !0, ref: !0, __self: !0, __source: !0 }
function gg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      hg.call(t, n) && !mg.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: ia, type: e, key: i, ref: a, props: o, _owner: Hd.current }
}
function hx(e, t) {
  return { $$typeof: ia, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Gd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ia
}
function mx(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var Gp = /\/+/g
function mu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? mx('' + e.key) : t.toString(36)
}
function os(e, t, r, n, o) {
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
          case ia:
          case nx:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + mu(a, 0) : n),
      Hp(o)
        ? ((r = ''),
          e != null && (r = e.replace(Gp, '$&/') + '/'),
          os(o, t, r, '', function (u) {
            return u
          }))
        : o != null &&
          (Gd(o) &&
            (o = hx(
              o,
              r +
                (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(Gp, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), Hp(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + mu(i, s)
      a += os(i, t, r, l, o)
    }
  else if (((l = px(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + mu(i, s++)), (a += os(i, t, r, l, o))
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
function $a(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    os(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function gx(e) {
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
var Xe = { current: null },
  is = { transition: null },
  yx = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: is, ReactCurrentOwner: Hd }
W.Children = {
  map: $a,
  forEach: function (e, t, r) {
    $a(
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
      $a(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      $a(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Gd(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
W.Component = Ao
W.Fragment = ox
W.Profiler = ax
W.PureComponent = Wd
W.StrictMode = ix
W.Suspense = cx
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yx
W.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var n = dg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Hd.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      hg.call(t, l) &&
        !mg.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    n.children = s
  }
  return { $$typeof: ia, type: e.type, key: o, ref: i, props: n, _owner: a }
}
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: lx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sx, _context: e }),
    (e.Consumer = e)
  )
}
W.createElement = gg
W.createFactory = function (e) {
  var t = gg.bind(null, e)
  return (t.type = e), t
}
W.createRef = function () {
  return { current: null }
}
W.forwardRef = function (e) {
  return { $$typeof: ux, render: e }
}
W.isValidElement = Gd
W.lazy = function (e) {
  return { $$typeof: fx, _payload: { _status: -1, _result: e }, _init: gx }
}
W.memo = function (e, t) {
  return { $$typeof: dx, type: e, compare: t === void 0 ? null : t }
}
W.startTransition = function (e) {
  var t = is.transition
  is.transition = {}
  try {
    e()
  } finally {
    is.transition = t
  }
}
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
W.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t)
}
W.useContext = function (e) {
  return Xe.current.useContext(e)
}
W.useDebugValue = function () {}
W.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e)
}
W.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t)
}
W.useId = function () {
  return Xe.current.useId()
}
W.useImperativeHandle = function (e, t, r) {
  return Xe.current.useImperativeHandle(e, t, r)
}
W.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t)
}
W.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t)
}
W.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t)
}
W.useReducer = function (e, t, r) {
  return Xe.current.useReducer(e, t, r)
}
W.useRef = function (e) {
  return Xe.current.useRef(e)
}
W.useState = function (e) {
  return Xe.current.useState(e)
}
W.useSyncExternalStore = function (e, t, r) {
  return Xe.current.useSyncExternalStore(e, t, r)
}
W.useTransition = function () {
  return Xe.current.useTransition()
}
W.version = '18.2.0'
;(function (e) {
  e.exports = W
})(rx)
const An = ex(_),
  Kp = Jb({ __proto__: null, default: An }, [_])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vx = _,
  Sx = Symbol.for('react.element'),
  bx = Symbol.for('react.fragment'),
  xx = Object.prototype.hasOwnProperty,
  wx = vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kx = { key: !0, ref: !0, __self: !0, __source: !0 }
function yg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) xx.call(t, n) && !kx.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: Sx, type: e, key: i, ref: a, props: o, _owner: wx.current }
}
ml.Fragment = bx
ml.jsx = yg
ml.jsxs = yg
;(function (e) {
  e.exports = ml
})(tx)
const z = Ts.jsx,
  Jr = Ts.jsxs
function Cx(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function _x(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Tx = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_x(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = Cx(o)
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
  Ne = '-ms-',
  Ps = '-moz-',
  X = '-webkit-',
  vg = 'comm',
  Kd = 'rule',
  Yd = 'decl',
  Px = '@import',
  Sg = '@keyframes',
  Ex = Math.abs,
  gl = String.fromCharCode,
  $x = Object.assign
function Ax(e, t) {
  return Le(e, 0) ^ 45
    ? (((((((t << 2) ^ Le(e, 0)) << 2) ^ Le(e, 1)) << 2) ^ Le(e, 2)) << 2) ^ Le(e, 3)
    : 0
}
function bg(e) {
  return e.trim()
}
function Rx(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function Z(e, t, r) {
  return e.replace(t, r)
}
function vc(e, t) {
  return e.indexOf(t)
}
function Le(e, t) {
  return e.charCodeAt(t) | 0
}
function Ei(e, t, r) {
  return e.slice(t, r)
}
function Qt(e) {
  return e.length
}
function Qd(e) {
  return e.length
}
function Aa(e, t) {
  return t.push(e), e
}
function zx(e, t) {
  return e.map(t).join('')
}
var yl = 1,
  bo = 1,
  xg = 0,
  at = 0,
  ke = 0,
  Ro = ''
function vl(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: yl,
    column: bo,
    length: a,
    return: '',
  }
}
function Oo(e, t) {
  return $x(vl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function Mx() {
  return ke
}
function Dx() {
  return (ke = at > 0 ? Le(Ro, --at) : 0), bo--, ke === 10 && ((bo = 1), yl--), ke
}
function pt() {
  return (ke = at < xg ? Le(Ro, at++) : 0), bo++, ke === 10 && ((bo = 1), yl++), ke
}
function Jt() {
  return Le(Ro, at)
}
function as() {
  return at
}
function aa(e, t) {
  return Ei(Ro, e, t)
}
function $i(e) {
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
function wg(e) {
  return (yl = bo = 1), (xg = Qt((Ro = e))), (at = 0), []
}
function kg(e) {
  return (Ro = ''), e
}
function ss(e) {
  return bg(aa(at - 1, Sc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Lx(e) {
  for (; (ke = Jt()) && ke < 33; ) pt()
  return $i(e) > 2 || $i(ke) > 3 ? '' : ' '
}
function Fx(e, t) {
  for (; --t && pt() && !(ke < 48 || ke > 102 || (ke > 57 && ke < 65) || (ke > 70 && ke < 97)); );
  return aa(e, as() + (t < 6 && Jt() == 32 && pt() == 32))
}
function Sc(e) {
  for (; pt(); )
    switch (ke) {
      case e:
        return at
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sc(ke)
        break
      case 40:
        e === 41 && Sc(e)
        break
      case 92:
        pt()
        break
    }
  return at
}
function Bx(e, t) {
  for (; pt() && e + ke !== 47 + 10; ) if (e + ke === 42 + 42 && Jt() === 47) break
  return '/*' + aa(t, at - 1) + '*' + gl(e === 47 ? e : pt())
}
function Ix(e) {
  for (; !$i(Jt()); ) pt()
  return aa(e, at)
}
function Vx(e) {
  return kg(ls('', null, null, null, [''], (e = wg(e)), 0, [0], e))
}
function ls(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      v = 0,
      S = 1,
      C = 1,
      g = 1,
      p = 0,
      y = '',
      w = o,
      T = i,
      A = n,
      P = y;
    C;

  )
    switch (((v = p), (p = pt()))) {
      case 40:
        if (v != 108 && Le(P, d - 1) == 58) {
          vc((P += Z(ss(p), '&', '&\f')), '&\f') != -1 && (g = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        P += ss(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        P += Lx(v)
        break
      case 92:
        P += Fx(as() - 1, 7)
        continue
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            Aa(Ox(Bx(pt(), as()), t, r), l)
            break
          default:
            P += '/'
        }
        break
      case 123 * S:
        s[u++] = Qt(P) * g
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0
          case 59 + c:
            h > 0 &&
              Qt(P) - d &&
              Aa(h > 32 ? Qp(P + ';', n, r, d - 1) : Qp(Z(P, ' ', '') + ';', n, r, d - 2), l)
            break
          case 59:
            P += ';'
          default:
            if ((Aa((A = Yp(P, t, r, u, c, o, s, y, (w = []), (T = []), d)), i), p === 123))
              if (c === 0) ls(P, t, A, A, w, i, d, s, T)
              else
                switch (f === 99 && Le(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    ls(
                      e,
                      A,
                      A,
                      n && Aa(Yp(e, A, A, 0, 0, o, s, y, o, (w = []), d), T),
                      o,
                      T,
                      d,
                      s,
                      n ? w : T
                    )
                    break
                  default:
                    ls(P, A, A, A, [''], T, 0, s, T)
                }
        }
        ;(u = c = h = 0), (S = g = 1), (y = P = ''), (d = a)
        break
      case 58:
        ;(d = 1 + Qt(P)), (h = v)
      default:
        if (S < 1) {
          if (p == 123) --S
          else if (p == 125 && S++ == 0 && Dx() == 125) continue
        }
        switch (((P += gl(p)), p * S)) {
          case 38:
            g = c > 0 ? 1 : ((P += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Qt(P) - 1) * g), (g = 1)
            break
          case 64:
            Jt() === 45 && (P += ss(pt())), (f = Jt()), (c = d = Qt((y = P += Ix(as())))), p++
            break
          case 45:
            v === 45 && Qt(P) == 2 && (S = 0)
        }
    }
  return i
}
function Yp(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [''], h = Qd(f), v = 0, S = 0, C = 0; v < n; ++v)
    for (var g = 0, p = Ei(e, d + 1, (d = Ex((S = a[v])))), y = e; g < h; ++g)
      (y = bg(S > 0 ? f[g] + ' ' + p : Z(p, /&\f/g, f[g]))) && (l[C++] = y)
  return vl(e, t, r, o === 0 ? Kd : s, l, u, c)
}
function Ox(e, t, r) {
  return vl(e, t, r, vg, gl(Mx()), Ei(e, 2, -2), 0)
}
function Qp(e, t, r, n) {
  return vl(e, t, r, Yd, Ei(e, 0, n), Ei(e, n + 1, -1), n)
}
function lo(e, t) {
  for (var r = '', n = Qd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function Nx(e, t, r, n) {
  switch (e.type) {
    case Px:
    case Yd:
      return (e.return = e.return || e.value)
    case vg:
      return ''
    case Sg:
      return (e.return = e.value + '{' + lo(e.children, n) + '}')
    case Kd:
      e.value = e.props.join(',')
  }
  return Qt((r = lo(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function jx(e) {
  var t = Qd(e)
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
    return a
  }
}
function Wx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var Xp = function (t) {
  var r = new WeakMap()
  return function (n) {
    if (r.has(n)) return r.get(n)
    var o = t(n)
    return r.set(n, o), o
  }
}
function Cg(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var Ux = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = Jt()), o === 38 && i === 12 && (r[n] = 1), !$i(i); ) pt()
    return aa(t, at)
  },
  Hx = function (t, r) {
    var n = -1,
      o = 44
    do
      switch ($i(o)) {
        case 0:
          o === 38 && Jt() === 12 && (r[n] = 1), (t[n] += Ux(at - 1, r, n))
          break
        case 2:
          t[n] += ss(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++n] = Jt() === 58 ? '&\f' : ''), (r[n] = t[n].length)
            break
          }
        default:
          t[n] += gl(o)
      }
    while ((o = pt()))
    return t
  },
  Gx = function (t, r) {
    return kg(Hx(wg(t), r))
  },
  qp = new WeakMap(),
  Kx = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !qp.get(n)) && !o) {
        qp.set(t, !0)
        for (var i = [], a = Gx(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l]
      }
    }
  },
  Yx = function (t) {
    if (t.type === 'decl') {
      var r = t.value
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function _g(e, t) {
  switch (Ax(e, t)) {
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
      return X + e + Ps + e + Ne + e + e
    case 6828:
    case 4268:
      return X + e + Ne + e + e
    case 6165:
      return X + e + Ne + 'flex-' + e + e
    case 5187:
      return X + e + Z(e, /(\w+).+(:[^]+)/, X + 'box-$1$2' + Ne + 'flex-$1$2') + e
    case 5443:
      return X + e + Ne + 'flex-item-' + Z(e, /flex-|-self/, '') + e
    case 4675:
      return X + e + Ne + 'flex-line-pack' + Z(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return X + e + Ne + Z(e, 'shrink', 'negative') + e
    case 5292:
      return X + e + Ne + Z(e, 'basis', 'preferred-size') + e
    case 6060:
      return X + 'box-' + Z(e, '-grow', '') + X + e + Ne + Z(e, 'grow', 'positive') + e
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
          Z(e, /(.+:)(flex-)?(.*)/, X + 'box-pack:$3' + Ne + 'flex-pack:$3'),
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
      if (Qt(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45) break
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + X + '$2-$3$1' + Ps + (Le(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~vc(e, 'stretch') ? _g(Z(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Le(e, t + 1) !== 115) break
    case 6444:
      switch (Le(e, Qt(e) - 3 - (~vc(e, '!important') && 10))) {
        case 107:
          return Z(e, ':', ':' + X) + e
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                X +
                (Le(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                X +
                '$2$3$1' +
                Ne +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return X + e + Ne + Z(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return X + e + Ne + Z(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return X + e + Ne + Z(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return X + e + Ne + e + e
  }
  return e
}
var Qx = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Yd:
          t.return = _g(t.value, t.length)
          break
        case Sg:
          return lo([Oo(t, { value: Z(t.value, '@', '@' + X) })], o)
        case Kd:
          if (t.length)
            return zx(t.props, function (i) {
              switch (Rx(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return lo([Oo(t, { props: [Z(i, /:(read-\w+)/, ':' + Ps + '$1')] })], o)
                case '::placeholder':
                  return lo(
                    [
                      Oo(t, { props: [Z(i, /:(plac\w+)/, ':' + X + 'input-$1')] }),
                      Oo(t, { props: [Z(i, /:(plac\w+)/, ':' + Ps + '$1')] }),
                      Oo(t, { props: [Z(i, /:(plac\w+)/, Ne + 'input-$1')] }),
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  Xx = [Qx],
  qx = function (t) {
    var r = t.key
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(n, function (S) {
        var C = S.getAttribute('data-emotion')
        C.indexOf(' ') !== -1 && (document.head.appendChild(S), S.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || Xx,
      i = {},
      a,
      s = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (S) {
          for (var C = S.getAttribute('data-emotion').split(' '), g = 1; g < C.length; g++)
            i[C[g]] = !0
          s.push(S)
        }
      )
    var l,
      u = [Kx, Yx]
    {
      var c,
        d = [
          Nx,
          Wx(function (S) {
            c.insert(S)
          }),
        ],
        f = jx(u.concat(o, d)),
        h = function (C) {
          return lo(Vx(C), f)
        }
      l = function (C, g, p, y) {
        ;(c = p), h(C ? C + '{' + g.styles + '}' : g.styles), y && (v.inserted[g.name] = !0)
      }
    }
    var v = {
      key: r,
      sheet: new Tx({
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
function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Es.apply(this, arguments)
  )
}
var bc = {},
  Zx = {
    get exports() {
      return bc
    },
    set exports(e) {
      bc = e
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
 */ var ze = typeof Symbol == 'function' && Symbol.for,
  Xd = ze ? Symbol.for('react.element') : 60103,
  qd = ze ? Symbol.for('react.portal') : 60106,
  Sl = ze ? Symbol.for('react.fragment') : 60107,
  bl = ze ? Symbol.for('react.strict_mode') : 60108,
  xl = ze ? Symbol.for('react.profiler') : 60114,
  wl = ze ? Symbol.for('react.provider') : 60109,
  kl = ze ? Symbol.for('react.context') : 60110,
  Zd = ze ? Symbol.for('react.async_mode') : 60111,
  Cl = ze ? Symbol.for('react.concurrent_mode') : 60111,
  _l = ze ? Symbol.for('react.forward_ref') : 60112,
  Tl = ze ? Symbol.for('react.suspense') : 60113,
  Jx = ze ? Symbol.for('react.suspense_list') : 60120,
  Pl = ze ? Symbol.for('react.memo') : 60115,
  El = ze ? Symbol.for('react.lazy') : 60116,
  ew = ze ? Symbol.for('react.block') : 60121,
  tw = ze ? Symbol.for('react.fundamental') : 60117,
  rw = ze ? Symbol.for('react.responder') : 60118,
  nw = ze ? Symbol.for('react.scope') : 60119
function vt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Xd:
        switch (((e = e.type), e)) {
          case Zd:
          case Cl:
          case Sl:
          case xl:
          case bl:
          case Tl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case kl:
              case _l:
              case El:
              case Pl:
              case wl:
                return e
              default:
                return t
            }
        }
      case qd:
        return t
    }
  }
}
function Tg(e) {
  return vt(e) === Cl
}
te.AsyncMode = Zd
te.ConcurrentMode = Cl
te.ContextConsumer = kl
te.ContextProvider = wl
te.Element = Xd
te.ForwardRef = _l
te.Fragment = Sl
te.Lazy = El
te.Memo = Pl
te.Portal = qd
te.Profiler = xl
te.StrictMode = bl
te.Suspense = Tl
te.isAsyncMode = function (e) {
  return Tg(e) || vt(e) === Zd
}
te.isConcurrentMode = Tg
te.isContextConsumer = function (e) {
  return vt(e) === kl
}
te.isContextProvider = function (e) {
  return vt(e) === wl
}
te.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xd
}
te.isForwardRef = function (e) {
  return vt(e) === _l
}
te.isFragment = function (e) {
  return vt(e) === Sl
}
te.isLazy = function (e) {
  return vt(e) === El
}
te.isMemo = function (e) {
  return vt(e) === Pl
}
te.isPortal = function (e) {
  return vt(e) === qd
}
te.isProfiler = function (e) {
  return vt(e) === xl
}
te.isStrictMode = function (e) {
  return vt(e) === bl
}
te.isSuspense = function (e) {
  return vt(e) === Tl
}
te.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Sl ||
    e === Cl ||
    e === xl ||
    e === bl ||
    e === Tl ||
    e === Jx ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === El ||
        e.$$typeof === Pl ||
        e.$$typeof === wl ||
        e.$$typeof === kl ||
        e.$$typeof === _l ||
        e.$$typeof === tw ||
        e.$$typeof === rw ||
        e.$$typeof === nw ||
        e.$$typeof === ew))
  )
}
te.typeOf = vt
;(function (e) {
  e.exports = te
})(Zx)
var Pg = bc,
  ow = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  iw = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Eg = {}
Eg[Pg.ForwardRef] = ow
Eg[Pg.Memo] = iw
var aw = !0
function sw(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var $g = function (t, r, n) {
    var o = t.key + '-' + r.name
    ;(n === !1 || aw === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
  },
  Ag = function (t, r, n) {
    $g(t, r, n)
    var o = t.key + '-' + r.name
    if (t.inserted[r.name] === void 0) {
      var i = r
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function lw(e) {
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
var uw = {
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
  cw = /[A-Z]|^ms/g,
  dw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Rg = function (t) {
    return t.charCodeAt(1) === 45
  },
  Zp = function (t) {
    return t != null && typeof t != 'boolean'
  },
  gu = Cg(function (e) {
    return Rg(e) ? e : e.replace(cw, '-$&').toLowerCase()
  }),
  Jp = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(dw, function (n, o, i) {
            return (Xt = { name: o, styles: i, next: Xt }), o
          })
    }
    return uw[t] !== 1 && !Rg(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r
  }
function Ai(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) return r
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (Xt = { name: r.name, styles: r.styles, next: Xt }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; ) (Xt = { name: n.name, styles: n.styles, next: Xt }), (n = n.next)
        var o = r.styles + ';'
        return o
      }
      return fw(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var i = Xt,
          a = r(e)
        return (Xt = i), Ai(e, t, a)
      }
      break
    }
  }
  if (t == null) return r
  var s = t[r]
  return s !== void 0 ? s : r
}
function fw(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Ai(e, t, r[o]) + ';'
  else
    for (var i in r) {
      var a = r[i]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : Zp(a) && (n += gu(i) + ':' + Jp(i, a) + ';')
      else if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++) Zp(a[s]) && (n += gu(i) + ':' + Jp(i, a[s]) + ';')
      else {
        var l = Ai(e, t, a)
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += gu(i) + ':' + l + ';'
            break
          }
          default:
            n += i + '{' + l + '}'
        }
      }
    }
  return n
}
var eh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Xt,
  Jd = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0]
    var o = !0,
      i = ''
    Xt = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((o = !1), (i += Ai(n, r, a))) : (i += a[0])
    for (var s = 1; s < t.length; s++) (i += Ai(n, r, t[s])), o && (i += a[s])
    eh.lastIndex = 0
    for (var l = '', u; (u = eh.exec(i)) !== null; ) l += '-' + u[1]
    var c = lw(i) + l
    return { name: c, styles: i, next: Xt }
  },
  pw = function (t) {
    return t()
  },
  zg = Kp['useInsertionEffect'] ? Kp['useInsertionEffect'] : !1,
  hw = zg || pw,
  th = zg || _.useLayoutEffect,
  Mg = _.createContext(typeof HTMLElement < 'u' ? qx({ key: 'css' }) : null)
Mg.Provider
var Dg = function (t) {
    return _.forwardRef(function (r, n) {
      var o = _.useContext(Mg)
      return t(r, o, n)
    })
  },
  Ri = _.createContext({}),
  mw = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t)
      return n
    }
    return Es({}, t, r)
  },
  gw = Xp(function (e) {
    return Xp(function (t) {
      return mw(e, t)
    })
  }),
  yw = function (t) {
    var r = _.useContext(Ri)
    return (
      t.theme !== r && (r = gw(r)(t.theme)), _.createElement(Ri.Provider, { value: r }, t.children)
    )
  },
  $l = Dg(function (e, t) {
    var r = e.styles,
      n = Jd([r], void 0, _.useContext(Ri)),
      o = _.useRef()
    return (
      th(
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
      th(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1]
          if (s) {
            i[1] = !1
            return
          }
          if ((n.next !== void 0 && Ag(t, n.next, !0), a.tags.length)) {
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
function vw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return Jd(t)
}
var Sw = function () {
    var t = vw.apply(void 0, arguments),
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
  Lg = String.raw,
  Fg = Lg`
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
  bw = () => z($l, { styles: Fg }),
  xw = ({ scope: e = '' }) =>
    z($l, {
      styles: Lg`
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

      ${Fg}
    `,
    })
function ww(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function sa(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = _.createContext(a)
  s.displayName = t
  function l() {
    var u
    const c = _.useContext(s)
    if (!c && r) {
      const d = new Error(i ?? ww(n, o))
      throw (
        ((d.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, d, l), d)
      )
    }
    return c
  }
  return [s.Provider, l, s]
}
var [kw, Cw] = sa({ strict: !1, name: 'PortalManagerContext' })
function Bg(e) {
  const { children: t, zIndex: r } = e
  return z(kw, { value: { zIndex: r }, children: t })
}
Bg.displayName = 'PortalManager'
var $s = globalThis != null && globalThis.document ? _.useLayoutEffect : _.useEffect,
  zi = {},
  _w = {
    get exports() {
      return zi
    },
    set exports(e) {
      zi = e
    },
  },
  St = {},
  xc = {},
  Tw = {
    get exports() {
      return xc
    },
    set exports(e) {
      xc = e
    },
  },
  Ig = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(R, V) {
    var N = R.length
    R.push(V)
    e: for (; 0 < N; ) {
      var O = (N - 1) >>> 1,
        oe = R[O]
      if (0 < o(oe, V)) (R[O] = V), (R[N] = oe), (N = O)
      else break e
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0]
  }
  function n(R) {
    if (R.length === 0) return null
    var V = R[0],
      N = R.pop()
    if (N !== V) {
      R[0] = N
      e: for (var O = 0, oe = R.length, G = oe >>> 1; O < G; ) {
        var ut = 2 * (O + 1) - 1,
          Tr = R[ut],
          _e = ut + 1,
          jt = R[_e]
        if (0 > o(Tr, N))
          _e < oe && 0 > o(jt, Tr)
            ? ((R[O] = jt), (R[_e] = N), (O = _e))
            : ((R[O] = Tr), (R[ut] = N), (O = ut))
        else if (_e < oe && 0 > o(jt, N)) (R[O] = jt), (R[_e] = N), (O = _e)
        else break e
      }
    }
    return V
  }
  function o(R, V) {
    var N = R.sortIndex - V.sortIndex
    return N !== 0 ? N : R.id - V.id
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
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(R) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u)
      else if (V.startTime <= R) n(u), (V.sortIndex = V.expirationTime), t(l, V)
      else break
      V = r(u)
    }
  }
  function w(R) {
    if (((S = !1), y(R), !v))
      if (r(l) !== null) (v = !0), Je(T)
      else {
        var V = r(u)
        V !== null && xt(w, V.startTime - R)
      }
  }
  function T(R, V) {
    ;(v = !1), S && ((S = !1), g(E), (E = -1)), (h = !0)
    var N = f
    try {
      for (y(V), d = r(l); d !== null && (!(d.expirationTime > V) || (R && !pe())); ) {
        var O = d.callback
        if (typeof O == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var oe = O(d.expirationTime <= V)
          ;(V = e.unstable_now()),
            typeof oe == 'function' ? (d.callback = oe) : d === r(l) && n(l),
            y(V)
        } else n(l)
        d = r(l)
      }
      if (d !== null) var G = !0
      else {
        var ut = r(u)
        ut !== null && xt(w, ut.startTime - V), (G = !1)
      }
      return G
    } finally {
      ;(d = null), (f = N), (h = !1)
    }
  }
  var A = !1,
    P = null,
    E = -1,
    B = 5,
    L = -1
  function pe() {
    return !(e.unstable_now() - L < B)
  }
  function Ie() {
    if (P !== null) {
      var R = e.unstable_now()
      L = R
      var V = !0
      try {
        V = P(!0, R)
      } finally {
        V ? Ze() : ((A = !1), (P = null))
      }
    } else A = !1
  }
  var Ze
  if (typeof p == 'function')
    Ze = function () {
      p(Ie)
    }
  else if (typeof MessageChannel < 'u') {
    var he = new MessageChannel(),
      me = he.port2
    ;(he.port1.onmessage = Ie),
      (Ze = function () {
        me.postMessage(null)
      })
  } else
    Ze = function () {
      C(Ie, 0)
    }
  function Je(R) {
    ;(P = R), A || ((A = !0), Ze())
  }
  function xt(R, V) {
    E = C(function () {
      R(e.unstable_now())
    }, V)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), Je(T))
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (B = 0 < R ? Math.floor(1e3 / R) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l)
    }),
    (e.unstable_next = function (R) {
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
        return R()
      } finally {
        f = N
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          R = 3
      }
      var N = f
      f = R
      try {
        return V()
      } finally {
        f = N
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, N) {
      var O = e.unstable_now()
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? O + N : O))
          : (N = O),
        R)
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
        (R = {
          id: c++,
          callback: V,
          priorityLevel: R,
          startTime: N,
          expirationTime: oe,
          sortIndex: -1,
        }),
        N > O
          ? ((R.sortIndex = N),
            t(u, R),
            r(l) === null && R === r(u) && (S ? (g(E), (E = -1)) : (S = !0), xt(w, N - O)))
          : ((R.sortIndex = oe), t(l, R), v || h || ((v = !0), Je(T))),
        R
      )
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (R) {
      var V = f
      return function () {
        var N = f
        f = V
        try {
          return R.apply(this, arguments)
        } finally {
          f = N
        }
      }
    })
})(Ig)
;(function (e) {
  e.exports = Ig
})(Tw)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vg = _,
  gt = xc
function $(e) {
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
var Og = new Set(),
  Mi = {}
function Bn(e, t) {
  xo(e, t), xo(e + 'Capture', t)
}
function xo(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) Og.add(t[e])
}
var vr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wc = Object.prototype.hasOwnProperty,
  Pw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rh = {},
  nh = {}
function Ew(e) {
  return wc.call(nh, e) ? !0 : wc.call(rh, e) ? !1 : Pw.test(e) ? (nh[e] = !0) : ((rh[e] = !0), !1)
}
function $w(e, t, r, n) {
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
function Aw(e, t, r, n) {
  if (t === null || typeof t > 'u' || $w(e, t, r, n)) return !0
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
function qe(e, t, r, n, o, i, a) {
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
    Be[e] = new qe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Be[t] = new qe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Be[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Be[e] = new qe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Be[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Be[e] = new qe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Be[e] = new qe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Be[e] = new qe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Be[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var ef = /[\-:]([a-z])/g
function tf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ef, tf)
    Be[t] = new qe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ef, tf)
    Be[t] = new qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ef, tf)
  Be[t] = new qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Be[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Be.xlinkHref = new qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Be[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function rf(e, t, r, n) {
  var o = Be.hasOwnProperty(t) ? Be[t] : null
  ;(o !== null
    ? o.type !== 0
    : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Aw(t, r, o, n) && (r = null),
    n || o === null
      ? Ew(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
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
var kr = Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ra = Symbol.for('react.element'),
  Kn = Symbol.for('react.portal'),
  Yn = Symbol.for('react.fragment'),
  nf = Symbol.for('react.strict_mode'),
  kc = Symbol.for('react.profiler'),
  Ng = Symbol.for('react.provider'),
  jg = Symbol.for('react.context'),
  of = Symbol.for('react.forward_ref'),
  Cc = Symbol.for('react.suspense'),
  _c = Symbol.for('react.suspense_list'),
  af = Symbol.for('react.memo'),
  Mr = Symbol.for('react.lazy'),
  Wg = Symbol.for('react.offscreen'),
  oh = Symbol.iterator
function No(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (oh && e[oh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Se = Object.assign,
  yu
function Jo(e) {
  if (yu === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      yu = (t && t[1]) || ''
    }
  return (
    `
` +
    yu +
    e
  )
}
var vu = !1
function Su(e, t) {
  if (!e || vu) return ''
  vu = !0
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
    ;(vu = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? Jo(e) : ''
}
function Rw(e) {
  switch (e.tag) {
    case 5:
      return Jo(e.type)
    case 16:
      return Jo('Lazy')
    case 13:
      return Jo('Suspense')
    case 19:
      return Jo('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Su(e.type, !1)), e
    case 11:
      return (e = Su(e.type.render, !1)), e
    case 1:
      return (e = Su(e.type, !0)), e
    default:
      return ''
  }
}
function Tc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Yn:
      return 'Fragment'
    case Kn:
      return 'Portal'
    case kc:
      return 'Profiler'
    case nf:
      return 'StrictMode'
    case Cc:
      return 'Suspense'
    case _c:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case jg:
        return (e.displayName || 'Context') + '.Consumer'
      case Ng:
        return (e._context.displayName || 'Context') + '.Provider'
      case of:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case af:
        return (t = e.displayName || null), t !== null ? t : Tc(e.type) || 'Memo'
      case Mr:
        ;(t = e._payload), (e = e._init)
        try {
          return Tc(e(t))
        } catch {}
    }
  return null
}
function zw(e) {
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
      return Tc(t)
    case 8:
      return t === nf ? 'StrictMode' : 'Mode'
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
function Ug(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function Mw(e) {
  var t = Ug(e) ? 'checked' : 'value',
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
function za(e) {
  e._valueTracker || (e._valueTracker = Mw(e))
}
function Hg(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = Ug(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function As(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Pc(e, t) {
  var r = t.checked
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function ih(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = en(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function Gg(e, t) {
  ;(t = t.checked), t != null && rf(e, 'checked', t, !1)
}
function Ec(e, t) {
  Gg(e, t)
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
    ? $c(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && $c(e, t.type, en(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ah(e, t, r) {
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
function $c(e, t, r) {
  ;(t !== 'number' || As(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var ei = Array.isArray
function uo(e, t, r, n) {
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
function Ac(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91))
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function sh(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error($(92))
      if (ei(r)) {
        if (1 < r.length) throw Error($(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: en(r) }
}
function Kg(e, t) {
  var r = en(t.value),
    n = en(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function lh(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Yg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Rc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Yg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Ma,
  Qg = (function (e) {
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
        Ma = Ma || document.createElement('div'),
          Ma.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ma.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Di(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var si = {
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
  Dw = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(si).forEach(function (e) {
  Dw.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (si[t] = si[e])
  })
})
function Xg(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (si.hasOwnProperty(e) && si[e])
    ? ('' + t).trim()
    : t + 'px'
}
function qg(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = Xg(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var Lw = Se(
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
function zc(e, t) {
  if (t) {
    if (Lw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error($(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error($(62))
  }
}
function Mc(e, t) {
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
function sf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Lc = null,
  co = null,
  fo = null
function uh(e) {
  if ((e = ca(e))) {
    if (typeof Lc != 'function') throw Error($(280))
    var t = e.stateNode
    t && ((t = Dl(t)), Lc(e.stateNode, e.type, t))
  }
}
function Zg(e) {
  co ? (fo ? fo.push(e) : (fo = [e])) : (co = e)
}
function Jg() {
  if (co) {
    var e = co,
      t = fo
    if (((fo = co = null), uh(e), t)) for (e = 0; e < t.length; e++) uh(t[e])
  }
}
function ey(e, t) {
  return e(t)
}
function ty() {}
var bu = !1
function ry(e, t, r) {
  if (bu) return e(t, r)
  bu = !0
  try {
    return ey(e, t, r)
  } finally {
    ;(bu = !1), (co !== null || fo !== null) && (ty(), Jg())
  }
}
function Li(e, t) {
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
  if (r && typeof r != 'function') throw Error($(231, t, typeof r))
  return r
}
var Fc = !1
if (vr)
  try {
    var jo = {}
    Object.defineProperty(jo, 'passive', {
      get: function () {
        Fc = !0
      },
    }),
      window.addEventListener('test', jo, jo),
      window.removeEventListener('test', jo, jo)
  } catch {
    Fc = !1
  }
function Fw(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var li = !1,
  Rs = null,
  zs = !1,
  Bc = null,
  Bw = {
    onError: function (e) {
      ;(li = !0), (Rs = e)
    },
  }
function Iw(e, t, r, n, o, i, a, s, l) {
  ;(li = !1), (Rs = null), Fw.apply(Bw, arguments)
}
function Vw(e, t, r, n, o, i, a, s, l) {
  if ((Iw.apply(this, arguments), li)) {
    if (li) {
      var u = Rs
      ;(li = !1), (Rs = null)
    } else throw Error($(198))
    zs || ((zs = !0), (Bc = u))
  }
}
function In(e) {
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
function ny(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function ch(e) {
  if (In(e) !== e) throw Error($(188))
}
function Ow(e) {
  var t = e.alternate
  if (!t) {
    if (((t = In(e)), t === null)) throw Error($(188))
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
        if (i === r) return ch(o), e
        if (i === n) return ch(o), t
        i = i.sibling
      }
      throw Error($(188))
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
        if (!a) throw Error($(189))
      }
    }
    if (r.alternate !== n) throw Error($(190))
  }
  if (r.tag !== 3) throw Error($(188))
  return r.stateNode.current === r ? e : t
}
function oy(e) {
  return (e = Ow(e)), e !== null ? iy(e) : null
}
function iy(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = iy(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ay = gt.unstable_scheduleCallback,
  dh = gt.unstable_cancelCallback,
  Nw = gt.unstable_shouldYield,
  jw = gt.unstable_requestPaint,
  xe = gt.unstable_now,
  Ww = gt.unstable_getCurrentPriorityLevel,
  lf = gt.unstable_ImmediatePriority,
  sy = gt.unstable_UserBlockingPriority,
  Ms = gt.unstable_NormalPriority,
  Uw = gt.unstable_LowPriority,
  ly = gt.unstable_IdlePriority,
  Al = null,
  er = null
function Hw(e) {
  if (er && typeof er.onCommitFiberRoot == 'function')
    try {
      er.onCommitFiberRoot(Al, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : Yw,
  Gw = Math.log,
  Kw = Math.LN2
function Yw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gw(e) / Kw) | 0)) | 0
}
var Da = 64,
  La = 4194304
function ti(e) {
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
    s !== 0 ? (n = ti(s)) : ((i &= a), i !== 0 && (n = ti(i)))
  } else (a = r & ~o), a !== 0 ? (n = ti(a)) : i !== 0 && (n = ti(i))
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
      (r = 31 - Vt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function Qw(e, t) {
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
function Xw(e, t) {
  for (
    var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Vt(i),
      s = 1 << a,
      l = o[a]
    l === -1 ? (!(s & r) || s & n) && (o[a] = Qw(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
  }
}
function Ic(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function uy() {
  var e = Da
  return (Da <<= 1), !(Da & 4194240) && (Da = 64), e
}
function xu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function la(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = r)
}
function qw(e, t) {
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
    var o = 31 - Vt(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function uf(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - Vt(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var ee = 0
function cy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var dy,
  cf,
  fy,
  py,
  hy,
  Vc = !1,
  Fa = [],
  jr = null,
  Wr = null,
  Ur = null,
  Fi = new Map(),
  Bi = new Map(),
  Fr = [],
  Zw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function fh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      jr = null
      break
    case 'dragenter':
    case 'dragleave':
      Wr = null
      break
    case 'mouseover':
    case 'mouseout':
      Ur = null
      break
    case 'pointerover':
    case 'pointerout':
      Fi.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Bi.delete(t.pointerId)
  }
}
function Wo(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ca(t)), t !== null && cf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Jw(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (jr = Wo(jr, e, t, r, n, o)), !0
    case 'dragenter':
      return (Wr = Wo(Wr, e, t, r, n, o)), !0
    case 'mouseover':
      return (Ur = Wo(Ur, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Fi.set(i, Wo(Fi.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Bi.set(i, Wo(Bi.get(i) || null, e, t, r, n, o)), !0
  }
  return !1
}
function my(e) {
  var t = bn(e.target)
  if (t !== null) {
    var r = In(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ny(r)), t !== null)) {
          ;(e.blockedOn = t),
            hy(e.priority, function () {
              fy(r)
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
function us(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Oc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(Dc = n), r.target.dispatchEvent(n), (Dc = null)
    } else return (t = ca(r)), t !== null && cf(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function ph(e, t, r) {
  us(e) && r.delete(t)
}
function ek() {
  ;(Vc = !1),
    jr !== null && us(jr) && (jr = null),
    Wr !== null && us(Wr) && (Wr = null),
    Ur !== null && us(Ur) && (Ur = null),
    Fi.forEach(ph),
    Bi.forEach(ph)
}
function Uo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vc || ((Vc = !0), gt.unstable_scheduleCallback(gt.unstable_NormalPriority, ek)))
}
function Ii(e) {
  function t(o) {
    return Uo(o, e)
  }
  if (0 < Fa.length) {
    Uo(Fa[0], e)
    for (var r = 1; r < Fa.length; r++) {
      var n = Fa[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    jr !== null && Uo(jr, e),
      Wr !== null && Uo(Wr, e),
      Ur !== null && Uo(Ur, e),
      Fi.forEach(t),
      Bi.forEach(t),
      r = 0;
    r < Fr.length;
    r++
  )
    (n = Fr[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < Fr.length && ((r = Fr[0]), r.blockedOn === null); )
    my(r), r.blockedOn === null && Fr.shift()
}
var po = kr.ReactCurrentBatchConfig,
  Ls = !0
function tk(e, t, r, n) {
  var o = ee,
    i = po.transition
  po.transition = null
  try {
    ;(ee = 1), df(e, t, r, n)
  } finally {
    ;(ee = o), (po.transition = i)
  }
}
function rk(e, t, r, n) {
  var o = ee,
    i = po.transition
  po.transition = null
  try {
    ;(ee = 4), df(e, t, r, n)
  } finally {
    ;(ee = o), (po.transition = i)
  }
}
function df(e, t, r, n) {
  if (Ls) {
    var o = Oc(e, t, r, n)
    if (o === null) Ru(e, t, n, Fs, r), fh(e, n)
    else if (Jw(o, e, t, r, n)) n.stopPropagation()
    else if ((fh(e, n), t & 4 && -1 < Zw.indexOf(e))) {
      for (; o !== null; ) {
        var i = ca(o)
        if ((i !== null && dy(i), (i = Oc(e, t, r, n)), i === null && Ru(e, t, n, Fs, r), i === o))
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else Ru(e, t, n, null, r)
  }
}
var Fs = null
function Oc(e, t, r, n) {
  if (((Fs = null), (e = sf(n)), (e = bn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = ny(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Fs = e), null
}
function gy(e) {
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
      switch (Ww()) {
        case lf:
          return 1
        case sy:
          return 4
        case Ms:
        case Uw:
          return 16
        case ly:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Vr = null,
  ff = null,
  cs = null
function yy() {
  if (cs) return cs
  var e,
    t = ff,
    r = t.length,
    n,
    o = 'value' in Vr ? Vr.value : Vr.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (cs = o.slice(e, 1 < n ? 1 - n : void 0))
}
function ds(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ba() {
  return !0
}
function hh() {
  return !1
}
function bt(e) {
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
        ? Ba
        : hh),
      (this.isPropagationStopped = hh),
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
          (this.isDefaultPrevented = Ba))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ba))
      },
      persist: function () {},
      isPersistent: Ba,
    }),
    t
  )
}
var zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pf = bt(zo),
  ua = Se({}, zo, { view: 0, detail: 0 }),
  nk = bt(ua),
  wu,
  ku,
  Ho,
  Rl = Se({}, ua, {
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
    getModifierState: hf,
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
        : (e !== Ho &&
            (Ho && e.type === 'mousemove'
              ? ((wu = e.screenX - Ho.screenX), (ku = e.screenY - Ho.screenY))
              : (ku = wu = 0),
            (Ho = e)),
          wu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ku
    },
  }),
  mh = bt(Rl),
  ok = Se({}, Rl, { dataTransfer: 0 }),
  ik = bt(ok),
  ak = Se({}, ua, { relatedTarget: 0 }),
  Cu = bt(ak),
  sk = Se({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lk = bt(sk),
  uk = Se({}, zo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  ck = bt(uk),
  dk = Se({}, zo, { data: 0 }),
  gh = bt(dk),
  fk = {
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
  pk = {
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
  hk = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function mk(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = hk[e]) ? !!t[e] : !1
}
function hf() {
  return mk
}
var gk = Se({}, ua, {
    key: function (e) {
      if (e.key) {
        var t = fk[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ds(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? pk[e.keyCode] || 'Unidentified'
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
    getModifierState: hf,
    charCode: function (e) {
      return e.type === 'keypress' ? ds(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ds(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  yk = bt(gk),
  vk = Se({}, Rl, {
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
  yh = bt(vk),
  Sk = Se({}, ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hf,
  }),
  bk = bt(Sk),
  xk = Se({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wk = bt(xk),
  kk = Se({}, Rl, {
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
  Ck = bt(kk),
  _k = [9, 13, 27, 32],
  mf = vr && 'CompositionEvent' in window,
  ui = null
vr && 'documentMode' in document && (ui = document.documentMode)
var Tk = vr && 'TextEvent' in window && !ui,
  vy = vr && (!mf || (ui && 8 < ui && 11 >= ui)),
  vh = String.fromCharCode(32),
  Sh = !1
function Sy(e, t) {
  switch (e) {
    case 'keyup':
      return _k.indexOf(t.keyCode) !== -1
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
function by(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Qn = !1
function Pk(e, t) {
  switch (e) {
    case 'compositionend':
      return by(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Sh = !0), vh)
    case 'textInput':
      return (e = t.data), e === vh && Sh ? null : e
    default:
      return null
  }
}
function Ek(e, t) {
  if (Qn)
    return e === 'compositionend' || (!mf && Sy(e, t))
      ? ((e = yy()), (cs = ff = Vr = null), (Qn = !1), e)
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
      return vy && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var $k = {
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
function bh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!$k[e.type] : t === 'textarea'
}
function xy(e, t, r, n) {
  Zg(n),
    (t = Bs(t, 'onChange')),
    0 < t.length &&
      ((r = new pf('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var ci = null,
  Vi = null
function Ak(e) {
  zy(e, 0)
}
function zl(e) {
  var t = Zn(e)
  if (Hg(t)) return e
}
function Rk(e, t) {
  if (e === 'change') return t
}
var wy = !1
if (vr) {
  var _u
  if (vr) {
    var Tu = 'oninput' in document
    if (!Tu) {
      var xh = document.createElement('div')
      xh.setAttribute('oninput', 'return;'), (Tu = typeof xh.oninput == 'function')
    }
    _u = Tu
  } else _u = !1
  wy = _u && (!document.documentMode || 9 < document.documentMode)
}
function wh() {
  ci && (ci.detachEvent('onpropertychange', ky), (Vi = ci = null))
}
function ky(e) {
  if (e.propertyName === 'value' && zl(Vi)) {
    var t = []
    xy(t, Vi, e, sf(e)), ry(Ak, t)
  }
}
function zk(e, t, r) {
  e === 'focusin'
    ? (wh(), (ci = t), (Vi = r), ci.attachEvent('onpropertychange', ky))
    : e === 'focusout' && wh()
}
function Mk(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return zl(Vi)
}
function Dk(e, t) {
  if (e === 'click') return zl(t)
}
function Lk(e, t) {
  if (e === 'input' || e === 'change') return zl(t)
}
function Fk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Nt = typeof Object.is == 'function' ? Object.is : Fk
function Oi(e, t) {
  if (Nt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!wc.call(t, o) || !Nt(e[o], t[o])) return !1
  }
  return !0
}
function kh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Ch(e, t) {
  var r = kh(e)
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
    r = kh(r)
  }
}
function Cy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function _y() {
  for (var e = window, t = As(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = As(e.document)
  }
  return t
}
function gf(e) {
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
function Bk(e) {
  var t = _y(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && Cy(r.ownerDocument.documentElement, r)) {
    if (n !== null && gf(r)) {
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
          (o = Ch(r, i))
        var a = Ch(r, n)
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
var Ik = vr && 'documentMode' in document && 11 >= document.documentMode,
  Xn = null,
  Nc = null,
  di = null,
  jc = !1
function _h(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  jc ||
    Xn == null ||
    Xn !== As(n) ||
    ((n = Xn),
    'selectionStart' in n && gf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (di && Oi(di, n)) ||
      ((di = n),
      (n = Bs(Nc, 'onSelect')),
      0 < n.length &&
        ((t = new pf('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Xn))))
}
function Ia(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var qn = {
    animationend: Ia('Animation', 'AnimationEnd'),
    animationiteration: Ia('Animation', 'AnimationIteration'),
    animationstart: Ia('Animation', 'AnimationStart'),
    transitionend: Ia('Transition', 'TransitionEnd'),
  },
  Pu = {},
  Ty = {}
vr &&
  ((Ty = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete qn.animationend.animation,
    delete qn.animationiteration.animation,
    delete qn.animationstart.animation),
  'TransitionEvent' in window || delete qn.transitionend.transition)
function Ml(e) {
  if (Pu[e]) return Pu[e]
  if (!qn[e]) return e
  var t = qn[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in Ty) return (Pu[e] = t[r])
  return e
}
var Py = Ml('animationend'),
  Ey = Ml('animationiteration'),
  $y = Ml('animationstart'),
  Ay = Ml('transitionend'),
  Ry = new Map(),
  Th =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function on(e, t) {
  Ry.set(e, t), Bn(t, [e])
}
for (var Eu = 0; Eu < Th.length; Eu++) {
  var $u = Th[Eu],
    Vk = $u.toLowerCase(),
    Ok = $u[0].toUpperCase() + $u.slice(1)
  on(Vk, 'on' + Ok)
}
on(Py, 'onAnimationEnd')
on(Ey, 'onAnimationIteration')
on($y, 'onAnimationStart')
on('dblclick', 'onDoubleClick')
on('focusin', 'onFocus')
on('focusout', 'onBlur')
on(Ay, 'onTransitionEnd')
xo('onMouseEnter', ['mouseout', 'mouseover'])
xo('onMouseLeave', ['mouseout', 'mouseover'])
xo('onPointerEnter', ['pointerout', 'pointerover'])
xo('onPointerLeave', ['pointerout', 'pointerover'])
Bn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
Bn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
Bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Bn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
Bn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
Bn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var ri =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Nk = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ri))
function Ph(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), Vw(n, t, void 0, e), (e.currentTarget = null)
}
function zy(e, t) {
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
          Ph(o, s, u), (i = l)
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
          Ph(o, s, u), (i = l)
        }
    }
  }
  if (zs) throw ((e = Bc), (zs = !1), (Bc = null), e)
}
function ie(e, t) {
  var r = t[Kc]
  r === void 0 && (r = t[Kc] = new Set())
  var n = e + '__bubble'
  r.has(n) || (My(t, e, 2, !1), r.add(n))
}
function Au(e, t, r) {
  var n = 0
  t && (n |= 4), My(r, e, n, t)
}
var Va = '_reactListening' + Math.random().toString(36).slice(2)
function Ni(e) {
  if (!e[Va]) {
    ;(e[Va] = !0),
      Og.forEach(function (r) {
        r !== 'selectionchange' && (Nk.has(r) || Au(r, !1, e), Au(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Va] || ((t[Va] = !0), Au('selectionchange', !1, t))
  }
}
function My(e, t, r, n) {
  switch (gy(t)) {
    case 1:
      var o = tk
      break
    case 4:
      o = rk
      break
    default:
      o = df
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !Fc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function Ru(e, t, r, n, o) {
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
  ry(function () {
    var u = i,
      c = sf(r),
      d = []
    e: {
      var f = Ry.get(e)
      if (f !== void 0) {
        var h = pf,
          v = e
        switch (e) {
          case 'keypress':
            if (ds(r) === 0) break e
          case 'keydown':
          case 'keyup':
            h = yk
            break
          case 'focusin':
            ;(v = 'focus'), (h = Cu)
            break
          case 'focusout':
            ;(v = 'blur'), (h = Cu)
            break
          case 'beforeblur':
          case 'afterblur':
            h = Cu
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
            h = mh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = ik
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = bk
            break
          case Py:
          case Ey:
          case $y:
            h = lk
            break
          case Ay:
            h = wk
            break
          case 'scroll':
            h = nk
            break
          case 'wheel':
            h = Ck
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = ck
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = yh
        }
        var S = (t & 4) !== 0,
          C = !S && e === 'scroll',
          g = S ? (f !== null ? f + 'Capture' : null) : f
        S = []
        for (var p = u, y; p !== null; ) {
          y = p
          var w = y.stateNode
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w), g !== null && ((w = Li(p, g)), w != null && S.push(ji(p, w, y)))),
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
          f && r !== Dc && (v = r.relatedTarget || r.fromElement) && (bn(v) || v[Sr]))
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
              v !== null && ((C = In(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((S = mh),
            (w = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = yh), (w = 'onPointerLeave'), (g = 'onPointerEnter'), (p = 'pointer')),
            (C = h == null ? f : Zn(h)),
            (y = v == null ? f : Zn(v)),
            (f = new S(w, p + 'leave', h, r, c)),
            (f.target = C),
            (f.relatedTarget = y),
            (w = null),
            bn(c) === u &&
              ((S = new S(g, p + 'enter', v, r, c)),
              (S.target = y),
              (S.relatedTarget = C),
              (w = S)),
            (C = w),
            h && v)
          )
            t: {
              for (S = h, g = v, p = 0, y = S; y; y = Un(y)) p++
              for (y = 0, w = g; w; w = Un(w)) y++
              for (; 0 < p - y; ) (S = Un(S)), p--
              for (; 0 < y - p; ) (g = Un(g)), y--
              for (; p--; ) {
                if (S === g || (g !== null && S === g.alternate)) break t
                ;(S = Un(S)), (g = Un(g))
              }
              S = null
            }
          else S = null
          h !== null && Eh(d, f, h, S, !1), v !== null && C !== null && Eh(d, C, v, S, !0)
        }
      }
      e: {
        if (
          ((f = u ? Zn(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var T = Rk
        else if (bh(f))
          if (wy) T = Lk
          else {
            T = Mk
            var A = zk
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (T = Dk)
        if (T && (T = T(e, u))) {
          xy(d, T, r, c)
          break e
        }
        A && A(e, f, u),
          e === 'focusout' &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === 'number' &&
            $c(f, 'number', f.value)
      }
      switch (((A = u ? Zn(u) : window), e)) {
        case 'focusin':
          ;(bh(A) || A.contentEditable === 'true') && ((Xn = A), (Nc = u), (di = null))
          break
        case 'focusout':
          di = Nc = Xn = null
          break
        case 'mousedown':
          jc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(jc = !1), _h(d, r, c)
          break
        case 'selectionchange':
          if (Ik) break
        case 'keydown':
        case 'keyup':
          _h(d, r, c)
      }
      var P
      if (mf)
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
        Qn
          ? Sy(e, r) && (E = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (vy &&
          r.locale !== 'ko' &&
          (Qn || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && Qn && (P = yy())
            : ((Vr = c), (ff = 'value' in Vr ? Vr.value : Vr.textContent), (Qn = !0))),
        (A = Bs(u, E)),
        0 < A.length &&
          ((E = new gh(E, e, null, r, c)),
          d.push({ event: E, listeners: A }),
          P ? (E.data = P) : ((P = by(r)), P !== null && (E.data = P)))),
        (P = Tk ? Pk(e, r) : Ek(e, r)) &&
          ((u = Bs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new gh('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)))
    }
    zy(d, t)
  })
}
function ji(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function Bs(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Li(e, r)),
      i != null && n.unshift(ji(e, i, o)),
      (i = Li(e, t)),
      i != null && n.push(ji(e, i, o))),
      (e = e.return)
  }
  return n
}
function Un(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Eh(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Li(r, i)), l != null && a.unshift(ji(r, l, s)))
        : o || ((l = Li(r, i)), l != null && a.push(ji(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var jk = /\r\n?/g,
  Wk = /\u0000|\uFFFD/g
function $h(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jk,
      `
`
    )
    .replace(Wk, '')
}
function Oa(e, t, r) {
  if (((t = $h(t)), $h(e) !== t && r)) throw Error($(425))
}
function Is() {}
var Wc = null,
  Uc = null
function Hc(e, t) {
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
var Gc = typeof setTimeout == 'function' ? setTimeout : void 0,
  Uk = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Ah = typeof Promise == 'function' ? Promise : void 0,
  Hk =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Ah < 'u'
      ? function (e) {
          return Ah.resolve(null).then(e).catch(Gk)
        }
      : Gc
function Gk(e) {
  setTimeout(function () {
    throw e
  })
}
function zu(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), Ii(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  Ii(t)
}
function Hr(e) {
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
function Rh(e) {
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
var Mo = Math.random().toString(36).slice(2),
  qt = '__reactFiber$' + Mo,
  Wi = '__reactProps$' + Mo,
  Sr = '__reactContainer$' + Mo,
  Kc = '__reactEvents$' + Mo,
  Kk = '__reactListeners$' + Mo,
  Yk = '__reactHandles$' + Mo
function bn(e) {
  var t = e[qt]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[Sr] || r[qt])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Rh(e); e !== null; ) {
          if ((r = e[qt])) return r
          e = Rh(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function ca(e) {
  return (
    (e = e[qt] || e[Sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error($(33))
}
function Dl(e) {
  return e[Wi] || null
}
var Yc = [],
  Jn = -1
function an(e) {
  return { current: e }
}
function se(e) {
  0 > Jn || ((e.current = Yc[Jn]), (Yc[Jn] = null), Jn--)
}
function ne(e, t) {
  Jn++, (Yc[Jn] = e.current), (e.current = t)
}
var tn = {},
  Ue = an(tn),
  nt = an(!1),
  Rn = tn
function wo(e, t) {
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
function ot(e) {
  return (e = e.childContextTypes), e != null
}
function Vs() {
  se(nt), se(Ue)
}
function zh(e, t, r) {
  if (Ue.current !== tn) throw Error($(168))
  ne(Ue, t), ne(nt, r)
}
function Dy(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error($(108, zw(e) || 'Unknown', o))
  return Se({}, r, n)
}
function Os(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (Rn = Ue.current),
    ne(Ue, e),
    ne(nt, nt.current),
    !0
  )
}
function Mh(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error($(169))
  r
    ? ((e = Dy(e, t, Rn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      se(nt),
      se(Ue),
      ne(Ue, e))
    : se(nt),
    ne(nt, r)
}
var lr = null,
  Ll = !1,
  Mu = !1
function Ly(e) {
  lr === null ? (lr = [e]) : lr.push(e)
}
function Qk(e) {
  ;(Ll = !0), Ly(e)
}
function sn() {
  if (!Mu && lr !== null) {
    Mu = !0
    var e = 0,
      t = ee
    try {
      var r = lr
      for (ee = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(lr = null), (Ll = !1)
    } catch (o) {
      throw (lr !== null && (lr = lr.slice(e + 1)), ay(lf, sn), o)
    } finally {
      ;(ee = t), (Mu = !1)
    }
  }
  return null
}
var eo = [],
  to = 0,
  Ns = null,
  js = 0,
  Tt = [],
  Pt = 0,
  zn = null,
  cr = 1,
  dr = ''
function hn(e, t) {
  ;(eo[to++] = js), (eo[to++] = Ns), (Ns = e), (js = t)
}
function Fy(e, t, r) {
  ;(Tt[Pt++] = cr), (Tt[Pt++] = dr), (Tt[Pt++] = zn), (zn = e)
  var n = cr
  e = dr
  var o = 32 - Vt(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - Vt(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (cr = (1 << (32 - Vt(t) + o)) | (r << o) | n),
      (dr = i + e)
  } else (cr = (1 << i) | (r << o) | n), (dr = e)
}
function yf(e) {
  e.return !== null && (hn(e, 1), Fy(e, 1, 0))
}
function vf(e) {
  for (; e === Ns; ) (Ns = eo[--to]), (eo[to] = null), (js = eo[--to]), (eo[to] = null)
  for (; e === zn; )
    (zn = Tt[--Pt]),
      (Tt[Pt] = null),
      (dr = Tt[--Pt]),
      (Tt[Pt] = null),
      (cr = Tt[--Pt]),
      (Tt[Pt] = null)
}
var ht = null,
  ft = null,
  de = !1,
  Bt = null
function By(e, t) {
  var r = Et(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Dh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (ft = Hr(t.firstChild)), !0) : !1
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
          ? ((r = zn !== null ? { id: cr, overflow: dr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = Et(18, null, null, 0)),
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
function Qc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Xc(e) {
  if (de) {
    var t = ft
    if (t) {
      var r = t
      if (!Dh(e, t)) {
        if (Qc(e)) throw Error($(418))
        t = Hr(r.nextSibling)
        var n = ht
        t && Dh(e, t) ? By(n, r) : ((e.flags = (e.flags & -4097) | 2), (de = !1), (ht = e))
      }
    } else {
      if (Qc(e)) throw Error($(418))
      ;(e.flags = (e.flags & -4097) | 2), (de = !1), (ht = e)
    }
  }
}
function Lh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  ht = e
}
function Na(e) {
  if (e !== ht) return !1
  if (!de) return Lh(e), (de = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Hc(e.type, e.memoizedProps))),
    t && (t = ft))
  ) {
    if (Qc(e)) throw (Iy(), Error($(418)))
    for (; t; ) By(e, t), (t = Hr(t.nextSibling))
  }
  if ((Lh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error($(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              ft = Hr(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      ft = null
    }
  } else ft = ht ? Hr(e.stateNode.nextSibling) : null
  return !0
}
function Iy() {
  for (var e = ft; e; ) e = Hr(e.nextSibling)
}
function ko() {
  ;(ft = ht = null), (de = !1)
}
function Sf(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e)
}
var Xk = kr.ReactCurrentBatchConfig
function Lt(e, t) {
  if (e && e.defaultProps) {
    ;(t = Se({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var Ws = an(null),
  Us = null,
  ro = null,
  bf = null
function xf() {
  bf = ro = Us = null
}
function wf(e) {
  var t = Ws.current
  se(Ws), (e._currentValue = t)
}
function qc(e, t, r) {
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
function ho(e, t) {
  ;(Us = e),
    (bf = ro = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), (e.firstContext = null))
}
function Rt(e) {
  var t = e._currentValue
  if (bf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ro === null)) {
      if (Us === null) throw Error($(308))
      ;(ro = e), (Us.dependencies = { lanes: 0, firstContext: e })
    } else ro = ro.next = e
  return t
}
var xn = null
function kf(e) {
  xn === null ? (xn = [e]) : xn.push(e)
}
function Vy(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), kf(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    br(e, n)
  )
}
function br(e, t) {
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
function Cf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Oy(e, t) {
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
function hr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Gr(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), K & 2)) {
    var o = n.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), br(e, r)
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), kf(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    br(e, r)
  )
}
function fs(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), uf(e, r)
  }
}
function Fh(e, t) {
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
function Hs(e, t, r, n) {
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
    ;(Dn |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function Bh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function')) throw Error($(191, o))
        o.call(n)
      }
    }
}
var Ny = new Vg.Component().refs
function Zc(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Se({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = Ye(),
      o = Yr(e),
      i = hr(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = Gr(e, i, o)),
      t !== null && (Ot(t, e, o, n), fs(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = Ye(),
      o = Yr(e),
      i = hr(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Gr(e, i, o)),
      t !== null && (Ot(t, e, o, n), fs(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = Ye(),
      n = Yr(e),
      o = hr(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Gr(e, o, n)),
      t !== null && (Ot(t, e, n, r), fs(t, e, n))
  },
}
function Ih(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Oi(r, n) || !Oi(o, i)
      : !0
  )
}
function jy(e, t, r) {
  var n = !1,
    o = tn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Rt(i))
      : ((o = ot(t) ? Rn : Ue.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? wo(e, o) : tn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Vh(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Fl.enqueueReplaceState(t, t.state, null)
}
function Jc(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = Ny), Cf(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Rt(i))
    : ((i = ot(t) ? Rn : Ue.current), (o.context = wo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Zc(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Fl.enqueueReplaceState(o, o.state, null),
      Hs(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Go(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error($(309))
        var n = r.stateNode
      }
      if (!n) throw Error($(147, e))
      var o = n,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === Ny && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error($(284))
    if (!r._owner) throw Error($(290, e))
  }
  return e
}
function ja(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function Oh(e) {
  var t = e._init
  return t(e._payload)
}
function Wy(e) {
  function t(g, p) {
    if (e) {
      var y = g.deletions
      y === null ? ((g.deletions = [p]), (g.flags |= 16)) : y.push(p)
    }
  }
  function r(g, p) {
    if (!e) return null
    for (; p !== null; ) t(g, p), (p = p.sibling)
    return null
  }
  function n(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling)
    return g
  }
  function o(g, p) {
    return (g = Qr(g, p)), (g.index = 0), (g.sibling = null), g
  }
  function i(g, p, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null ? ((y = y.index), y < p ? ((g.flags |= 2), p) : y) : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    )
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }
  function s(g, p, y, w) {
    return p === null || p.tag !== 6
      ? ((p = Ou(y, g.mode, w)), (p.return = g), p)
      : ((p = o(p, y)), (p.return = g), p)
  }
  function l(g, p, y, w) {
    var T = y.type
    return T === Yn
      ? c(g, p, y.props.children, w, y.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == 'object' && T !== null && T.$$typeof === Mr && Oh(T) === p.type))
      ? ((w = o(p, y.props)), (w.ref = Go(g, p, y)), (w.return = g), w)
      : ((w = vs(y.type, y.key, y.props, null, g.mode, w)),
        (w.ref = Go(g, p, y)),
        (w.return = g),
        w)
  }
  function u(g, p, y, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = Nu(y, g.mode, w)), (p.return = g), p)
      : ((p = o(p, y.children || [])), (p.return = g), p)
  }
  function c(g, p, y, w, T) {
    return p === null || p.tag !== 7
      ? ((p = Tn(y, g.mode, w, T)), (p.return = g), p)
      : ((p = o(p, y)), (p.return = g), p)
  }
  function d(g, p, y) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Ou('' + p, g.mode, y)), (p.return = g), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Ra:
          return (
            (y = vs(p.type, p.key, p.props, null, g.mode, y)),
            (y.ref = Go(g, null, p)),
            (y.return = g),
            y
          )
        case Kn:
          return (p = Nu(p, g.mode, y)), (p.return = g), p
        case Mr:
          var w = p._init
          return d(g, w(p._payload), y)
      }
      if (ei(p) || No(p)) return (p = Tn(p, g.mode, y, null)), (p.return = g), p
      ja(g, p)
    }
    return null
  }
  function f(g, p, y, w) {
    var T = p !== null ? p.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return T !== null ? null : s(g, p, '' + y, w)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Ra:
          return y.key === T ? l(g, p, y, w) : null
        case Kn:
          return y.key === T ? u(g, p, y, w) : null
        case Mr:
          return (T = y._init), f(g, p, T(y._payload), w)
      }
      if (ei(y) || No(y)) return T !== null ? null : c(g, p, y, w, null)
      ja(g, y)
    }
    return null
  }
  function h(g, p, y, w, T) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (g = g.get(y) || null), s(p, g, '' + w, T)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Ra:
          return (g = g.get(w.key === null ? y : w.key) || null), l(p, g, w, T)
        case Kn:
          return (g = g.get(w.key === null ? y : w.key) || null), u(p, g, w, T)
        case Mr:
          var A = w._init
          return h(g, p, y, A(w._payload), T)
      }
      if (ei(w) || No(w)) return (g = g.get(y) || null), c(p, g, w, T, null)
      ja(p, w)
    }
    return null
  }
  function v(g, p, y, w) {
    for (var T = null, A = null, P = p, E = (p = 0), B = null; P !== null && E < y.length; E++) {
      P.index > E ? ((B = P), (P = null)) : (B = P.sibling)
      var L = f(g, P, y[E], w)
      if (L === null) {
        P === null && (P = B)
        break
      }
      e && P && L.alternate === null && t(g, P),
        (p = i(L, p, E)),
        A === null ? (T = L) : (A.sibling = L),
        (A = L),
        (P = B)
    }
    if (E === y.length) return r(g, P), de && hn(g, E), T
    if (P === null) {
      for (; E < y.length; E++)
        (P = d(g, y[E], w)),
          P !== null && ((p = i(P, p, E)), A === null ? (T = P) : (A.sibling = P), (A = P))
      return de && hn(g, E), T
    }
    for (P = n(g, P); E < y.length; E++)
      (B = h(P, g, E, y[E], w)),
        B !== null &&
          (e && B.alternate !== null && P.delete(B.key === null ? E : B.key),
          (p = i(B, p, E)),
          A === null ? (T = B) : (A.sibling = B),
          (A = B))
    return (
      e &&
        P.forEach(function (pe) {
          return t(g, pe)
        }),
      de && hn(g, E),
      T
    )
  }
  function S(g, p, y, w) {
    var T = No(y)
    if (typeof T != 'function') throw Error($(150))
    if (((y = T.call(y)), y == null)) throw Error($(151))
    for (
      var A = (T = null), P = p, E = (p = 0), B = null, L = y.next();
      P !== null && !L.done;
      E++, L = y.next()
    ) {
      P.index > E ? ((B = P), (P = null)) : (B = P.sibling)
      var pe = f(g, P, L.value, w)
      if (pe === null) {
        P === null && (P = B)
        break
      }
      e && P && pe.alternate === null && t(g, P),
        (p = i(pe, p, E)),
        A === null ? (T = pe) : (A.sibling = pe),
        (A = pe),
        (P = B)
    }
    if (L.done) return r(g, P), de && hn(g, E), T
    if (P === null) {
      for (; !L.done; E++, L = y.next())
        (L = d(g, L.value, w)),
          L !== null && ((p = i(L, p, E)), A === null ? (T = L) : (A.sibling = L), (A = L))
      return de && hn(g, E), T
    }
    for (P = n(g, P); !L.done; E++, L = y.next())
      (L = h(P, g, E, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? E : L.key),
          (p = i(L, p, E)),
          A === null ? (T = L) : (A.sibling = L),
          (A = L))
    return (
      e &&
        P.forEach(function (Ie) {
          return t(g, Ie)
        }),
      de && hn(g, E),
      T
    )
  }
  function C(g, p, y, w) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Yn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ra:
          e: {
            for (var T = y.key, A = p; A !== null; ) {
              if (A.key === T) {
                if (((T = y.type), T === Yn)) {
                  if (A.tag === 7) {
                    r(g, A.sibling), (p = o(A, y.props.children)), (p.return = g), (g = p)
                    break e
                  }
                } else if (
                  A.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Mr && Oh(T) === A.type)
                ) {
                  r(g, A.sibling),
                    (p = o(A, y.props)),
                    (p.ref = Go(g, A, y)),
                    (p.return = g),
                    (g = p)
                  break e
                }
                r(g, A)
                break
              } else t(g, A)
              A = A.sibling
            }
            y.type === Yn
              ? ((p = Tn(y.props.children, g.mode, w, y.key)), (p.return = g), (g = p))
              : ((w = vs(y.type, y.key, y.props, null, g.mode, w)),
                (w.ref = Go(g, p, y)),
                (w.return = g),
                (g = w))
          }
          return a(g)
        case Kn:
          e: {
            for (A = y.key; p !== null; ) {
              if (p.key === A)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  r(g, p.sibling), (p = o(p, y.children || [])), (p.return = g), (g = p)
                  break e
                } else {
                  r(g, p)
                  break
                }
              else t(g, p)
              p = p.sibling
            }
            ;(p = Nu(y, g.mode, w)), (p.return = g), (g = p)
          }
          return a(g)
        case Mr:
          return (A = y._init), C(g, p, A(y._payload), w)
      }
      if (ei(y)) return v(g, p, y, w)
      if (No(y)) return S(g, p, y, w)
      ja(g, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        p !== null && p.tag === 6
          ? (r(g, p.sibling), (p = o(p, y)), (p.return = g), (g = p))
          : (r(g, p), (p = Ou(y, g.mode, w)), (p.return = g), (g = p)),
        a(g))
      : r(g, p)
  }
  return C
}
var Co = Wy(!0),
  Uy = Wy(!1),
  da = {},
  tr = an(da),
  Ui = an(da),
  Hi = an(da)
function wn(e) {
  if (e === da) throw Error($(174))
  return e
}
function _f(e, t) {
  switch ((ne(Hi, t), ne(Ui, e), ne(tr, da), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rc(t, e))
  }
  se(tr), ne(tr, t)
}
function _o() {
  se(tr), se(Ui), se(Hi)
}
function Hy(e) {
  wn(Hi.current)
  var t = wn(tr.current),
    r = Rc(t, e.type)
  t !== r && (ne(Ui, e), ne(tr, r))
}
function Tf(e) {
  Ui.current === e && (se(tr), se(Ui))
}
var ge = an(0)
function Gs(e) {
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
function Pf() {
  for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null
  Du.length = 0
}
var ps = kr.ReactCurrentDispatcher,
  Lu = kr.ReactCurrentBatchConfig,
  Mn = 0,
  ve = null,
  Te = null,
  $e = null,
  Ks = !1,
  fi = !1,
  Gi = 0,
  qk = 0
function Ve() {
  throw Error($(321))
}
function Ef(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!Nt(e[r], t[r])) return !1
  return !0
}
function $f(e, t, r, n, o, i) {
  if (
    ((Mn = i),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ps.current = e === null || e.memoizedState === null ? tC : rC),
    (e = r(n, o)),
    fi)
  ) {
    i = 0
    do {
      if (((fi = !1), (Gi = 0), 25 <= i)) throw Error($(301))
      ;(i += 1), ($e = Te = null), (t.updateQueue = null), (ps.current = nC), (e = r(n, o))
    } while (fi)
  }
  if (
    ((ps.current = Ys),
    (t = Te !== null && Te.next !== null),
    (Mn = 0),
    ($e = Te = ve = null),
    (Ks = !1),
    t)
  )
    throw Error($(300))
  return e
}
function Af() {
  var e = Gi !== 0
  return (Gi = 0), e
}
function Gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e), $e
}
function zt() {
  if (Te === null) {
    var e = ve.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Te.next
  var t = $e === null ? ve.memoizedState : $e.next
  if (t !== null) ($e = t), (Te = e)
  else {
    if (e === null) throw Error($(310))
    ;(Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e)
  }
  return $e
}
function Ki(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Fu(e) {
  var t = zt(),
    r = t.queue
  if (r === null) throw Error($(311))
  r.lastRenderedReducer = e
  var n = Te,
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
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d), (ve.lanes |= c), (Dn |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    l === null ? (a = n) : (l.next = s),
      Nt(n, t.memoizedState) || (rt = !0),
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
function Bu(e) {
  var t = zt(),
    r = t.queue
  if (r === null) throw Error($(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    Nt(i, t.memoizedState) || (rt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function Gy() {}
function Ky(e, t) {
  var r = ve,
    n = zt(),
    o = t(),
    i = !Nt(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (rt = !0)),
    (n = n.queue),
    Rf(Xy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Yi(9, Qy.bind(null, r, n, o, t), void 0, null), Re === null))
      throw Error($(349))
    Mn & 30 || Yy(r, t, o)
  }
  return o
}
function Yy(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function Qy(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), qy(t) && Zy(e)
}
function Xy(e, t, r) {
  return r(function () {
    qy(t) && Zy(e)
  })
}
function qy(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !Nt(e, r)
  } catch {
    return !0
  }
}
function Zy(e) {
  var t = br(e, 1)
  t !== null && Ot(t, e, 1, -1)
}
function Nh(e) {
  var t = Gt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eC.bind(null, ve, e)),
    [t.memoizedState, e]
  )
}
function Yi(e, t, r, n) {
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
function Jy() {
  return zt().memoizedState
}
function hs(e, t, r, n) {
  var o = Gt()
  ;(ve.flags |= e), (o.memoizedState = Yi(1 | t, r, void 0, n === void 0 ? null : n))
}
function Bl(e, t, r, n) {
  var o = zt()
  n = n === void 0 ? null : n
  var i = void 0
  if (Te !== null) {
    var a = Te.memoizedState
    if (((i = a.destroy), n !== null && Ef(n, a.deps))) {
      o.memoizedState = Yi(t, r, i, n)
      return
    }
  }
  ;(ve.flags |= e), (o.memoizedState = Yi(1 | t, r, i, n))
}
function jh(e, t) {
  return hs(8390656, 8, e, t)
}
function Rf(e, t) {
  return Bl(2048, 8, e, t)
}
function ev(e, t) {
  return Bl(4, 2, e, t)
}
function tv(e, t) {
  return Bl(4, 4, e, t)
}
function rv(e, t) {
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
function nv(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Bl(4, 4, rv.bind(null, t, e), r)
}
function zf() {}
function ov(e, t) {
  var r = zt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Ef(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function iv(e, t) {
  var r = zt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && Ef(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function av(e, t, r) {
  return Mn & 21
    ? (Nt(r, t) || ((r = uy()), (ve.lanes |= r), (Dn |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = r))
}
function Zk(e, t) {
  var r = ee
  ;(ee = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = Lu.transition
  Lu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ee = r), (Lu.transition = n)
  }
}
function sv() {
  return zt().memoizedState
}
function Jk(e, t, r) {
  var n = Yr(e)
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), lv(e)))
    uv(t, r)
  else if (((r = Vy(e, t, r, n)), r !== null)) {
    var o = Ye()
    Ot(r, e, n, o), cv(r, t, n)
  }
}
function eC(e, t, r) {
  var n = Yr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (lv(e)) uv(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), Nt(s, a))) {
          var l = t.interleaved
          l === null ? ((o.next = o), kf(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = Vy(e, t, o, n)), r !== null && ((o = Ye()), Ot(r, e, n, o), cv(r, t, n))
  }
}
function lv(e) {
  var t = e.alternate
  return e === ve || (t !== null && t === ve)
}
function uv(e, t) {
  fi = Ks = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function cv(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), uf(e, r)
  }
}
var Ys = {
    readContext: Rt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  tC = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (Gt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Rt,
    useEffect: jh,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), hs(4194308, 4, rv.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return hs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return hs(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = Gt()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = Gt()
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
        (e = e.dispatch = Jk.bind(null, ve, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Gt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Nh,
    useDebugValue: zf,
    useDeferredValue: function (e) {
      return (Gt().memoizedState = e)
    },
    useTransition: function () {
      var e = Nh(!1),
        t = e[0]
      return (e = Zk.bind(null, e[1])), (Gt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ve,
        o = Gt()
      if (de) {
        if (r === void 0) throw Error($(407))
        r = r()
      } else {
        if (((r = t()), Re === null)) throw Error($(349))
        Mn & 30 || Yy(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        jh(Xy.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Yi(9, Qy.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = Gt(),
        t = Re.identifierPrefix
      if (de) {
        var r = dr,
          n = cr
        ;(r = (n & ~(1 << (32 - Vt(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Gi++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = qk++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  rC = {
    readContext: Rt,
    useCallback: ov,
    useContext: Rt,
    useEffect: Rf,
    useImperativeHandle: nv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: iv,
    useReducer: Fu,
    useRef: Jy,
    useState: function () {
      return Fu(Ki)
    },
    useDebugValue: zf,
    useDeferredValue: function (e) {
      var t = zt()
      return av(t, Te.memoizedState, e)
    },
    useTransition: function () {
      var e = Fu(Ki)[0],
        t = zt().memoizedState
      return [e, t]
    },
    useMutableSource: Gy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  },
  nC = {
    readContext: Rt,
    useCallback: ov,
    useContext: Rt,
    useEffect: Rf,
    useImperativeHandle: nv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: iv,
    useReducer: Bu,
    useRef: Jy,
    useState: function () {
      return Bu(Ki)
    },
    useDebugValue: zf,
    useDeferredValue: function (e) {
      var t = zt()
      return Te === null ? (t.memoizedState = e) : av(t, Te.memoizedState, e)
    },
    useTransition: function () {
      var e = Bu(Ki)[0],
        t = zt().memoizedState
      return [e, t]
    },
    useMutableSource: Gy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  }
function To(e, t) {
  try {
    var r = '',
      n = t
    do (r += Rw(n)), (n = n.return)
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
function Iu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function ed(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var oC = typeof WeakMap == 'function' ? WeakMap : Map
function dv(e, t, r) {
  ;(r = hr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      Xs || ((Xs = !0), (cd = n)), ed(e, t)
    }),
    r
  )
}
function fv(e, t, r) {
  ;(r = hr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        ed(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        ed(e, t), typeof n != 'function' && (Kr === null ? (Kr = new Set([this])) : Kr.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function Wh(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new oC()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = vC.bind(null, e, t, r)), t.then(e, e))
}
function Uh(e) {
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
function Hh(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null ? (r.tag = 17) : ((t = hr(-1, 1)), (t.tag = 2), Gr(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var iC = kr.ReactCurrentOwner,
  rt = !1
function Ge(e, t, r, n) {
  t.child = e === null ? Uy(t, null, r, n) : Co(t, e.child, r, n)
}
function Gh(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    ho(t, o),
    (n = $f(e, t, r, n, i, o)),
    (r = Af()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), xr(e, t, o))
      : (de && r && yf(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  )
}
function Kh(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !Of(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), pv(e, t, i, n, o))
      : ((e = vs(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : Oi), r(a, n) && e.ref === t.ref)) return xr(e, t, o)
  }
  return (t.flags |= 1), (e = Qr(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function pv(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Oi(i, n) && e.ref === t.ref)
      if (((rt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (rt = !0)
      else return (t.lanes = e.lanes), xr(e, t, o)
  }
  return td(e, t, r, n, o)
}
function hv(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(oo, dt),
        (dt |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ne(oo, dt),
          (dt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ne(oo, dt),
        (dt |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), ne(oo, dt), (dt |= n)
  return Ge(e, t, o, r), t.child
}
function mv(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function td(e, t, r, n, o) {
  var i = ot(r) ? Rn : Ue.current
  return (
    (i = wo(t, i)),
    ho(t, o),
    (r = $f(e, t, r, n, i, o)),
    (n = Af()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), xr(e, t, o))
      : (de && n && yf(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  )
}
function Yh(e, t, r, n, o) {
  if (ot(r)) {
    var i = !0
    Os(t)
  } else i = !1
  if ((ho(t, o), t.stateNode === null)) ms(e, t), jy(t, r, n), Jc(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null
      ? (u = Rt(u))
      : ((u = ot(r) ? Rn : Ue.current), (u = wo(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== u) && Vh(t, a, n, u)),
      (Dr = !1)
    var f = t.memoizedState
    ;(a.state = f),
      Hs(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || nt.current || Dr
        ? (typeof c == 'function' && (Zc(t, r, c, n), (l = t.memoizedState)),
          (s = Dr || Ih(t, r, s, n, f, l, u))
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
      Oy(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Lt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = Rt(l))
        : ((l = ot(r) ? Rn : Ue.current), (l = wo(t, l)))
    var h = r.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && Vh(t, a, n, l)),
      (Dr = !1),
      (f = t.memoizedState),
      (a.state = f),
      Hs(t, n, a, o)
    var v = t.memoizedState
    s !== d || f !== v || nt.current || Dr
      ? (typeof h == 'function' && (Zc(t, r, h, n), (v = t.memoizedState)),
        (u = Dr || Ih(t, r, u, n, f, v, l) || !1)
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
  return rd(e, t, r, n, i, o)
}
function rd(e, t, r, n, o, i) {
  mv(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && Mh(t, r, !1), xr(e, t, i)
  ;(n = t.stateNode), (iC.current = t)
  var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Co(t, e.child, null, i)), (t.child = Co(t, null, s, i)))
      : Ge(e, t, s, i),
    (t.memoizedState = n.state),
    o && Mh(t, r, !0),
    t.child
  )
}
function gv(e) {
  var t = e.stateNode
  t.pendingContext
    ? zh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zh(e, t.context, !1),
    _f(e, t.containerInfo)
}
function Qh(e, t, r, n, o) {
  return ko(), Sf(o), (t.flags |= 256), Ge(e, t, r, n), t.child
}
var nd = { dehydrated: null, treeContext: null, retryLane: 0 }
function od(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function yv(e, t, r) {
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
      Xc(t),
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
                : (i = Ol(a, n, 0, null)),
              (e = Tn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = od(r)),
              (t.memoizedState = nd),
              e)
            : Mf(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return aC(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = Qr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Qr(s, i)) : ((i = Tn(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? od(r)
          : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = nd),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Qr(i, { mode: 'visible', children: n.children })),
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
function Mf(e, t) {
  return (t = Ol({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Wa(e, t, r, n) {
  return (
    n !== null && Sf(n),
    Co(t, e.child, null, r),
    (e = Mf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function aC(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Iu(Error($(422)))), Wa(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = Ol({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = Tn(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && Co(t, e.child, null, a),
        (t.child.memoizedState = od(a)),
        (t.memoizedState = nd),
        i)
  if (!(t.mode & 1)) return Wa(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error($(419))), (n = Iu(i, n, void 0)), Wa(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), rt || s)) {
    if (((n = Re), n !== null)) {
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
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), br(e, o), Ot(n, e, o, -1))
    }
    return Vf(), (n = Iu(Error($(421)))), Wa(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = SC.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (ft = Hr(o.nextSibling)),
      (ht = t),
      (de = !0),
      (Bt = null),
      e !== null &&
        ((Tt[Pt++] = cr),
        (Tt[Pt++] = dr),
        (Tt[Pt++] = zn),
        (cr = e.id),
        (dr = e.overflow),
        (zn = t)),
      (t = Mf(t, n.children)),
      (t.flags |= 4096),
      t)
}
function Xh(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), qc(e.return, t, r)
}
function Vu(e, t, r, n, o) {
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
function vv(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((Ge(e, t, n.children, r), (n = ge.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xh(e, r, t)
        else if (e.tag === 19) Xh(e, r, t)
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
          (e = r.alternate), e !== null && Gs(e) === null && (o = r), (r = r.sibling)
        ;(r = o),
          r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)),
          Vu(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Gs(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        Vu(t, !0, r, null, i)
        break
      case 'together':
        Vu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ms(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function xr(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (Dn |= t.lanes), !(r & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error($(153))
  if (t.child !== null) {
    for (e = t.child, r = Qr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = Qr(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function sC(e, t, r) {
  switch (t.tag) {
    case 3:
      gv(t), ko()
      break
    case 5:
      Hy(t)
      break
    case 1:
      ot(t.type) && Os(t)
      break
    case 4:
      _f(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      ne(Ws, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ne(ge, ge.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? yv(e, t, r)
          : (ne(ge, ge.current & 1), (e = xr(e, t, r)), e !== null ? e.sibling : null)
      ne(ge, ge.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return vv(e, t, r)
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
      return (t.lanes = 0), hv(e, t, r)
  }
  return xr(e, t, r)
}
var Sv, id, bv, xv
Sv = function (e, t) {
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
id = function () {}
bv = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), wn(tr.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = Pc(e, o)), (n = Pc(e, n)), (i = [])
        break
      case 'select':
        ;(o = Se({}, o, { value: void 0 })), (n = Se({}, n, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Ac(e, o)), (n = Ac(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = Is)
    }
    zc(r, n)
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
            (Mi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
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
              (Mi.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ie('scroll', e), i || s === l || (i = []))
                : (i = i || []).push(u, l))
    }
    r && (i = i || []).push('style', r)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
xv = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Ko(e, t) {
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
function Oe(e) {
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
function lC(e, t, r) {
  var n = t.pendingProps
  switch ((vf(t), t.tag)) {
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
      return Oe(t), null
    case 1:
      return ot(t.type) && Vs(), Oe(t), null
    case 3:
      return (
        (n = t.stateNode),
        _o(),
        se(nt),
        se(Ue),
        Pf(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Na(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (pd(Bt), (Bt = null)))),
        id(e, t),
        Oe(t),
        null
      )
    case 5:
      Tf(t)
      var o = wn(Hi.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        bv(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error($(166))
          return Oe(t), null
        }
        if (((e = wn(tr.current)), Na(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[qt] = t), (n[Wi] = i), (e = (t.mode & 1) !== 0), r)) {
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
              for (o = 0; o < ri.length; o++) ie(ri[o], n)
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
              ih(n, i), ie('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }), ie('invalid', n)
              break
            case 'textarea':
              sh(n, i), ie('invalid', n)
          }
          zc(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Oa(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Oa(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Mi.hasOwnProperty(a) && s != null && a === 'onScroll' && ie('scroll', n)
            }
          switch (r) {
            case 'input':
              za(n), ah(n, i, !0)
              break
            case 'textarea':
              za(n), lh(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = Is)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Yg(r)),
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
            (e[qt] = t),
            (e[Wi] = n),
            Sv(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Mc(r, n)), r)) {
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
                for (o = 0; o < ri.length; o++) ie(ri[o], e)
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
                ih(e, n), (o = Pc(e, n)), ie('invalid', e)
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
                sh(e, n), (o = Ac(e, n)), ie('invalid', e)
                break
              default:
                o = n
            }
            zc(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? qg(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Qg(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Di(e, l)
                    : typeof l == 'number' && Di(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Mi.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ie('scroll', e)
                      : l != null && rf(e, i, l, a))
              }
            switch (r) {
              case 'input':
                za(e), ah(e, n, !1)
                break
              case 'textarea':
                za(e), lh(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + en(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? uo(e, !!n.multiple, i, !1)
                    : n.defaultValue != null && uo(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Is)
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
      return Oe(t), null
    case 6:
      if (e && t.stateNode != null) xv(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error($(166))
        if (((r = wn(Hi.current)), wn(tr.current), Na(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[qt] = t),
            (i = n.nodeValue !== r) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oa(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oa(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[qt] = t),
            (t.stateNode = n)
      }
      return Oe(t), null
    case 13:
      if (
        (se(ge),
        (n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && ft !== null && t.mode & 1 && !(t.flags & 128))
          Iy(), ko(), (t.flags |= 98560), (i = !1)
        else if (((i = Na(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error($(317))
            i[qt] = t
          } else ko(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Oe(t), (i = !1)
        } else Bt !== null && (pd(Bt), (Bt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : Vf())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null)
    case 4:
      return _o(), id(e, t), e === null && Ni(t.stateNode.containerInfo), Oe(t), null
    case 10:
      return wf(t.type._context), Oe(t), null
    case 17:
      return ot(t.type) && Vs(), Oe(t), null
    case 19:
      if ((se(ge), (i = t.memoizedState), i === null)) return Oe(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Ko(i, !1)
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Gs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ko(i, !1),
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
            xe() > Po &&
            ((t.flags |= 128), (n = !0), Ko(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Gs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Ko(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !de)
            )
              return Oe(t), null
          } else
            2 * xe() - i.renderingStartTime > Po &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Ko(i, !1), (t.lanes = 4194304))
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
        : (Oe(t), null)
    case 22:
    case 23:
      return (
        If(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? dt & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error($(156, t.tag))
}
function uC(e, t) {
  switch ((vf(t), t.tag)) {
    case 1:
      return (
        ot(t.type) && Vs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        _o(),
        se(nt),
        se(Ue),
        Pf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Tf(t), null
    case 13:
      if ((se(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error($(340))
        ko()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return se(ge), null
    case 4:
      return _o(), null
    case 10:
      return wf(t.type._context), null
    case 22:
    case 23:
      return If(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ua = !1,
  je = !1,
  cC = typeof WeakSet == 'function' ? WeakSet : Set,
  D = null
function no(e, t) {
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
function ad(e, t, r) {
  try {
    r()
  } catch (n) {
    be(e, t, n)
  }
}
var qh = !1
function dC(e, t) {
  if (((Wc = Ls), (e = _y()), gf(e))) {
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
  for (Uc = { focusedElem: e, selectionRange: r }, Ls = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e)
    else
      for (; D !== null; ) {
        t = D
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
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Lt(t.type, S), C)
                  g.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error($(163))
            }
        } catch (w) {
          be(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (D = e)
          break
        }
        D = t.return
      }
  return (v = qh), (qh = !1), v
}
function pi(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && ad(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function Il(e, t) {
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
function sd(e) {
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
function wv(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), wv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[qt], delete t[Wi], delete t[Kc], delete t[Kk], delete t[Yk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function kv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Zh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kv(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function ld(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = Is))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ld(e, t, r), e = e.sibling; e !== null; ) ld(e, t, r), (e = e.sibling)
}
function ud(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ud(e, t, r), e = e.sibling; e !== null; ) ud(e, t, r), (e = e.sibling)
}
var De = null,
  Ft = !1
function Er(e, t, r) {
  for (r = r.child; r !== null; ) Cv(e, t, r), (r = r.sibling)
}
function Cv(e, t, r) {
  if (er && typeof er.onCommitFiberUnmount == 'function')
    try {
      er.onCommitFiberUnmount(Al, r)
    } catch {}
  switch (r.tag) {
    case 5:
      je || no(r, t)
    case 6:
      var n = De,
        o = Ft
      ;(De = null),
        Er(e, t, r),
        (De = n),
        (Ft = o),
        De !== null &&
          (Ft
            ? ((e = De),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : De.removeChild(r.stateNode))
      break
    case 18:
      De !== null &&
        (Ft
          ? ((e = De),
            (r = r.stateNode),
            e.nodeType === 8 ? zu(e.parentNode, r) : e.nodeType === 1 && zu(e, r),
            Ii(e))
          : zu(De, r.stateNode))
      break
    case 4:
      ;(n = De),
        (o = Ft),
        (De = r.stateNode.containerInfo),
        (Ft = !0),
        Er(e, t, r),
        (De = n),
        (Ft = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && ad(r, t, a), (o = o.next)
        } while (o !== n)
      }
      Er(e, t, r)
      break
    case 1:
      if (!je && (no(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (s) {
          be(r, t, s)
        }
      Er(e, t, r)
      break
    case 21:
      Er(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((je = (n = je) || r.memoizedState !== null), Er(e, t, r), (je = n))
        : Er(e, t, r)
      break
    default:
      Er(e, t, r)
  }
}
function Jh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new cC()),
      t.forEach(function (n) {
        var o = bC.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function Mt(e, t) {
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
              ;(De = s.stateNode), (Ft = !1)
              break e
            case 3:
              ;(De = s.stateNode.containerInfo), (Ft = !0)
              break e
            case 4:
              ;(De = s.stateNode.containerInfo), (Ft = !0)
              break e
          }
          s = s.return
        }
        if (De === null) throw Error($(160))
        Cv(i, a, o), (De = null), (Ft = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        be(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _v(t, e), (t = t.sibling)
}
function _v(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), Ut(e), n & 4)) {
        try {
          pi(3, e, e.return), Il(3, e)
        } catch (S) {
          be(e, e.return, S)
        }
        try {
          pi(5, e, e.return)
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 1:
      Mt(t, e), Ut(e), n & 512 && r !== null && no(r, r.return)
      break
    case 5:
      if ((Mt(t, e), Ut(e), n & 512 && r !== null && no(r, r.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Di(o, '')
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
            s === 'input' && i.type === 'radio' && i.name != null && Gg(o, i), Mc(s, a)
            var u = Mc(s, i)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1]
              c === 'style'
                ? qg(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? Qg(o, d)
                : c === 'children'
                ? Di(o, d)
                : rf(o, c, d, u)
            }
            switch (s) {
              case 'input':
                Ec(o, i)
                break
              case 'textarea':
                Kg(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var h = i.value
                h != null
                  ? uo(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? uo(o, !!i.multiple, i.defaultValue, !0)
                      : uo(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Wi] = i
          } catch (S) {
            be(e, e.return, S)
          }
      }
      break
    case 6:
      if ((Mt(t, e), Ut(e), n & 4)) {
        if (e.stateNode === null) throw Error($(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          be(e, e.return, S)
        }
      }
      break
    case 3:
      if ((Mt(t, e), Ut(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          Ii(t.containerInfo)
        } catch (S) {
          be(e, e.return, S)
        }
      break
    case 4:
      Mt(t, e), Ut(e)
      break
    case 13:
      Mt(t, e),
        Ut(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Ff = xe())),
        n & 4 && Jh(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), Mt(t, e), (je = u)) : Mt(t, e),
        Ut(e),
        n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (((f = D), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pi(4, f, f.return)
                  break
                case 1:
                  no(f, f.return)
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
                  no(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    tm(d)
                    continue
                  }
              }
              h !== null ? ((h.return = f), (D = h)) : tm(d)
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
                      (s.style.display = Xg('display', a)))
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
      Mt(t, e), Ut(e), n & 4 && Jh(e)
      break
    case 21:
      break
    default:
      Mt(t, e), Ut(e)
  }
}
function Ut(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (kv(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error($(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Di(o, ''), (n.flags &= -33))
          var i = Zh(e)
          ud(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = Zh(e)
          ld(e, s, a)
          break
        default:
          throw Error($(161))
      }
    } catch (l) {
      be(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function fC(e, t, r) {
  ;(D = e), Tv(e)
}
function Tv(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Ua
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || je
        s = Ua
        var u = je
        if (((Ua = a), (je = l) && !u))
          for (D = o; D !== null; )
            (a = D),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? rm(o)
                : l !== null
                ? ((l.return = a), (D = l))
                : rm(o)
        for (; i !== null; ) (D = i), Tv(i), (i = i.sibling)
        ;(D = o), (Ua = s), (je = u)
      }
      em(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : em(e)
  }
}
function em(e) {
  for (; D !== null; ) {
    var t = D
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Il(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !je)
                if (r === null) n.componentDidMount()
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Lt(t.type, r.memoizedProps)
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && Bh(t, i, n)
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
                Bh(t, a, r)
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
                    d !== null && Ii(d)
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
              throw Error($(163))
          }
        je || (t.flags & 512 && sd(t))
      } catch (f) {
        be(t, t.return, f)
      }
    }
    if (t === e) {
      D = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (D = r)
      break
    }
    D = t.return
  }
}
function tm(e) {
  for (; D !== null; ) {
    var t = D
    if (t === e) {
      D = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (D = r)
      break
    }
    D = t.return
  }
}
function rm(e) {
  for (; D !== null; ) {
    var t = D
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            Il(4, t)
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
            sd(t)
          } catch (l) {
            be(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            sd(t)
          } catch (l) {
            be(t, a, l)
          }
      }
    } catch (l) {
      be(t, t.return, l)
    }
    if (t === e) {
      D = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (D = s)
      break
    }
    D = t.return
  }
}
var pC = Math.ceil,
  Qs = kr.ReactCurrentDispatcher,
  Df = kr.ReactCurrentOwner,
  $t = kr.ReactCurrentBatchConfig,
  K = 0,
  Re = null,
  Ce = null,
  Fe = 0,
  dt = 0,
  oo = an(0),
  Pe = 0,
  Qi = null,
  Dn = 0,
  Vl = 0,
  Lf = 0,
  hi = null,
  et = null,
  Ff = 0,
  Po = 1 / 0,
  sr = null,
  Xs = !1,
  cd = null,
  Kr = null,
  Ha = !1,
  Or = null,
  qs = 0,
  mi = 0,
  dd = null,
  gs = -1,
  ys = 0
function Ye() {
  return K & 6 ? xe() : gs !== -1 ? gs : (gs = xe())
}
function Yr(e) {
  return e.mode & 1
    ? K & 2 && Fe !== 0
      ? Fe & -Fe
      : Xk.transition !== null
      ? (ys === 0 && (ys = uy()), ys)
      : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gy(e.type))), e)
    : 1
}
function Ot(e, t, r, n) {
  if (50 < mi) throw ((mi = 0), (dd = null), Error($(185)))
  la(e, r, n),
    (!(K & 2) || e !== Re) &&
      (e === Re && (!(K & 2) && (Vl |= r), Pe === 4 && Br(e, Fe)),
      it(e, n),
      r === 1 && K === 0 && !(t.mode & 1) && ((Po = xe() + 500), Ll && sn()))
}
function it(e, t) {
  var r = e.callbackNode
  Xw(e, t)
  var n = Ds(e, e === Re ? Fe : 0)
  if (n === 0) r !== null && dh(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && dh(r), t === 1))
      e.tag === 0 ? Qk(nm.bind(null, e)) : Ly(nm.bind(null, e)),
        Hk(function () {
          !(K & 6) && sn()
        }),
        (r = null)
    else {
      switch (cy(n)) {
        case 1:
          r = lf
          break
        case 4:
          r = sy
          break
        case 16:
          r = Ms
          break
        case 536870912:
          r = ly
          break
        default:
          r = Ms
      }
      r = Dv(r, Pv.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function Pv(e, t) {
  if (((gs = -1), (ys = 0), K & 6)) throw Error($(327))
  var r = e.callbackNode
  if (mo() && e.callbackNode !== r) return null
  var n = Ds(e, e === Re ? Fe : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = Zs(e, n)
  else {
    t = n
    var o = K
    K |= 2
    var i = $v()
    ;(Re !== e || Fe !== t) && ((sr = null), (Po = xe() + 500), _n(e, t))
    do
      try {
        gC()
        break
      } catch (s) {
        Ev(e, s)
      }
    while (1)
    xf(), (Qs.current = i), (K = o), Ce !== null ? (t = 0) : ((Re = null), (Fe = 0), (t = Pe))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Ic(e)), o !== 0 && ((n = o), (t = fd(e, o)))), t === 1))
      throw ((r = Qi), _n(e, 0), Br(e, n), it(e, xe()), r)
    if (t === 6) Br(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !hC(o) &&
          ((t = Zs(e, n)), t === 2 && ((i = Ic(e)), i !== 0 && ((n = i), (t = fd(e, i)))), t === 1))
      )
        throw ((r = Qi), _n(e, 0), Br(e, n), it(e, xe()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error($(345))
        case 2:
          mn(e, et, sr)
          break
        case 3:
          if ((Br(e, n), (n & 130023424) === n && ((t = Ff + 500 - xe()), 10 < t))) {
            if (Ds(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Gc(mn.bind(null, e, et, sr), t)
            break
          }
          mn(e, et, sr)
          break
        case 4:
          if ((Br(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Vt(n)
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
                : 1960 * pC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Gc(mn.bind(null, e, et, sr), n)
            break
          }
          mn(e, et, sr)
          break
        case 5:
          mn(e, et, sr)
          break
        default:
          throw Error($(329))
      }
    }
  }
  return it(e, xe()), e.callbackNode === r ? Pv.bind(null, e) : null
}
function fd(e, t) {
  var r = hi
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = Zs(e, t)),
    e !== 2 && ((t = et), (et = r), t !== null && pd(t)),
    e
  )
}
function pd(e) {
  et === null ? (et = e) : et.push.apply(et, e)
}
function hC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Nt(i(), o)) return !1
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
    t &= ~Lf, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Vt(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function nm(e) {
  if (K & 6) throw Error($(327))
  mo()
  var t = Ds(e, 0)
  if (!(t & 1)) return it(e, xe()), null
  var r = Zs(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = Ic(e)
    n !== 0 && ((t = n), (r = fd(e, n)))
  }
  if (r === 1) throw ((r = Qi), _n(e, 0), Br(e, t), it(e, xe()), r)
  if (r === 6) throw Error($(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), mn(e, et, sr), it(e, xe()), null
  )
}
function Bf(e, t) {
  var r = K
  K |= 1
  try {
    return e(t)
  } finally {
    ;(K = r), K === 0 && ((Po = xe() + 500), Ll && sn())
  }
}
function Ln(e) {
  Or !== null && Or.tag === 0 && !(K & 6) && mo()
  var t = K
  K |= 1
  var r = $t.transition,
    n = ee
  try {
    if ((($t.transition = null), (ee = 1), e)) return e()
  } finally {
    ;(ee = n), ($t.transition = r), (K = t), !(K & 6) && sn()
  }
}
function If() {
  ;(dt = oo.current), se(oo)
}
function _n(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), Uk(r)), Ce !== null))
    for (r = Ce.return; r !== null; ) {
      var n = r
      switch ((vf(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Vs()
          break
        case 3:
          _o(), se(nt), se(Ue), Pf()
          break
        case 5:
          Tf(n)
          break
        case 4:
          _o()
          break
        case 13:
          se(ge)
          break
        case 19:
          se(ge)
          break
        case 10:
          wf(n.type._context)
          break
        case 22:
        case 23:
          If()
      }
      r = r.return
    }
  if (
    ((Re = e),
    (Ce = e = Qr(e.current, null)),
    (Fe = dt = t),
    (Pe = 0),
    (Qi = null),
    (Lf = Vl = Dn = 0),
    (et = hi = null),
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
function Ev(e, t) {
  do {
    var r = Ce
    try {
      if ((xf(), (ps.current = Ys), Ks)) {
        for (var n = ve.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        Ks = !1
      }
      if (
        ((Mn = 0),
        ($e = Te = ve = null),
        (fi = !1),
        (Gi = 0),
        (Df.current = null),
        r === null || r.return === null)
      ) {
        ;(Pe = 1), (Qi = t), (Ce = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t
        if (
          ((t = Fe),
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
          var h = Uh(a)
          if (h !== null) {
            ;(h.flags &= -257), Hh(h, a, s, i, t), h.mode & 1 && Wh(i, u, t), (t = h), (l = u)
            var v = t.updateQueue
            if (v === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else v.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Wh(i, u, t), Vf()
              break e
            }
            l = Error($(426))
          }
        } else if (de && s.mode & 1) {
          var C = Uh(a)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Hh(C, a, s, i, t), Sf(To(l, s))
            break e
          }
        }
        ;(i = l = To(l, s)), Pe !== 4 && (Pe = 2), hi === null ? (hi = [i]) : hi.push(i), (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var g = dv(i, l, t)
              Fh(i, g)
              break e
            case 1:
              s = l
              var p = i.type,
                y = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Kr === null || !Kr.has(y))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = fv(i, s, t)
                Fh(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Rv(r)
    } catch (T) {
      ;(t = T), Ce === r && r !== null && (Ce = r = r.return)
      continue
    }
    break
  } while (1)
}
function $v() {
  var e = Qs.current
  return (Qs.current = Ys), e === null ? Ys : e
}
function Vf() {
  ;(Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Re === null || (!(Dn & 268435455) && !(Vl & 268435455)) || Br(Re, Fe)
}
function Zs(e, t) {
  var r = K
  K |= 2
  var n = $v()
  ;(Re !== e || Fe !== t) && ((sr = null), _n(e, t))
  do
    try {
      mC()
      break
    } catch (o) {
      Ev(e, o)
    }
  while (1)
  if ((xf(), (K = r), (Qs.current = n), Ce !== null)) throw Error($(261))
  return (Re = null), (Fe = 0), Pe
}
function mC() {
  for (; Ce !== null; ) Av(Ce)
}
function gC() {
  for (; Ce !== null && !Nw(); ) Av(Ce)
}
function Av(e) {
  var t = Mv(e.alternate, e, dt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Rv(e) : (Ce = t), (Df.current = null)
}
function Rv(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = uC(r, t)), r !== null)) {
        ;(r.flags &= 32767), (Ce = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Pe = 6), (Ce = null)
        return
      }
    } else if (((r = lC(r, t, dt)), r !== null)) {
      Ce = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t
      return
    }
    Ce = t = e
  } while (t !== null)
  Pe === 0 && (Pe = 5)
}
function mn(e, t, r) {
  var n = ee,
    o = $t.transition
  try {
    ;($t.transition = null), (ee = 1), yC(e, t, r, n)
  } finally {
    ;($t.transition = o), (ee = n)
  }
  return null
}
function yC(e, t, r, n) {
  do mo()
  while (Or !== null)
  if (K & 6) throw Error($(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error($(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (qw(e, i),
    e === Re && ((Ce = Re = null), (Fe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ha ||
      ((Ha = !0),
      Dv(Ms, function () {
        return mo(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = $t.transition), ($t.transition = null)
    var a = ee
    ee = 1
    var s = K
    ;(K |= 4),
      (Df.current = null),
      dC(e, r),
      _v(r, e),
      Bk(Uc),
      (Ls = !!Wc),
      (Uc = Wc = null),
      (e.current = r),
      fC(r),
      jw(),
      (K = s),
      (ee = a),
      ($t.transition = i)
  } else e.current = r
  if (
    (Ha && ((Ha = !1), (Or = e), (qs = o)),
    (i = e.pendingLanes),
    i === 0 && (Kr = null),
    Hw(r.stateNode),
    it(e, xe()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (Xs) throw ((Xs = !1), (e = cd), (cd = null), e)
  return (
    qs & 1 && e.tag !== 0 && mo(),
    (i = e.pendingLanes),
    i & 1 ? (e === dd ? mi++ : ((mi = 0), (dd = e))) : (mi = 0),
    sn(),
    null
  )
}
function mo() {
  if (Or !== null) {
    var e = cy(qs),
      t = $t.transition,
      r = ee
    try {
      if ((($t.transition = null), (ee = 16 > e ? 16 : e), Or === null)) var n = !1
      else {
        if (((e = Or), (Or = null), (qs = 0), K & 6)) throw Error($(331))
        var o = K
        for (K |= 4, D = e.current; D !== null; ) {
          var i = D,
            a = i.child
          if (D.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (D = u; D !== null; ) {
                  var c = D
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(8, c, i)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (D = d)
                  else
                    for (; D !== null; ) {
                      c = D
                      var f = c.sibling,
                        h = c.return
                      if ((wv(c), c === u)) {
                        D = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = h), (D = f)
                        break
                      }
                      D = h
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
              D = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (D = a)
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pi(9, i, i.return)
                }
              var g = i.sibling
              if (g !== null) {
                ;(g.return = i.return), (D = g)
                break e
              }
              D = i.return
            }
        }
        var p = e.current
        for (D = p; D !== null; ) {
          a = D
          var y = a.child
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (D = y)
          else
            e: for (a = p; D !== null; ) {
              if (((s = D), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Il(9, s)
                  }
                } catch (T) {
                  be(s, s.return, T)
                }
              if (s === a) {
                D = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (D = w)
                break e
              }
              D = s.return
            }
        }
        if (((K = o), sn(), er && typeof er.onPostCommitFiberRoot == 'function'))
          try {
            er.onPostCommitFiberRoot(Al, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(ee = r), ($t.transition = t)
    }
  }
  return !1
}
function om(e, t, r) {
  ;(t = To(r, t)),
    (t = dv(e, t, 1)),
    (e = Gr(e, t, 1)),
    (t = Ye()),
    e !== null && (la(e, 1, t), it(e, t))
}
function be(e, t, r) {
  if (e.tag === 3) om(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        om(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (Kr === null || !Kr.has(n)))
        ) {
          ;(e = To(r, e)),
            (e = fv(t, e, 1)),
            (t = Gr(t, e, 1)),
            (e = Ye()),
            t !== null && (la(t, 1, e), it(t, e))
          break
        }
      }
      t = t.return
    }
}
function vC(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Re === e &&
      (Fe & r) === r &&
      (Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > xe() - Ff) ? _n(e, 0) : (Lf |= r)),
    it(e, t)
}
function zv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = La), (La <<= 1), !(La & 130023424) && (La = 4194304)) : (t = 1))
  var r = Ye()
  ;(e = br(e, t)), e !== null && (la(e, t, r), it(e, r))
}
function SC(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), zv(e, r)
}
function bC(e, t) {
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
      throw Error($(314))
  }
  n !== null && n.delete(t), zv(e, r)
}
var Mv
Mv = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) rt = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (rt = !1), sC(e, t, r)
      rt = !!(e.flags & 131072)
    }
  else (rt = !1), de && t.flags & 1048576 && Fy(t, js, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      ms(e, t), (e = t.pendingProps)
      var o = wo(t, Ue.current)
      ho(t, r), (o = $f(null, t, n, e, o, r))
      var i = Af()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ot(n) ? ((i = !0), Os(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Cf(t),
            (o.updater = Fl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jc(t, n, e, r),
            (t = rd(null, t, n, !0, i, r)))
          : ((t.tag = 0), de && i && yf(t), Ge(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (ms(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = wC(n)),
          (e = Lt(n, e)),
          o)
        ) {
          case 0:
            t = td(null, t, n, e, r)
            break e
          case 1:
            t = Yh(null, t, n, e, r)
            break e
          case 11:
            t = Gh(null, t, n, e, r)
            break e
          case 14:
            t = Kh(null, t, n, Lt(n.type, e), r)
            break e
        }
        throw Error($(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Lt(n, o)),
        td(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Lt(n, o)),
        Yh(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((gv(t), e === null)) throw Error($(387))
        ;(n = t.pendingProps), (i = t.memoizedState), (o = i.element), Oy(e, t), Hs(t, n, null, r)
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
            ;(o = To(Error($(423)), t)), (t = Qh(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = To(Error($(424)), t)), (t = Qh(e, t, n, r, o))
            break e
          } else
            for (
              ft = Hr(t.stateNode.containerInfo.firstChild),
                ht = t,
                de = !0,
                Bt = null,
                r = Uy(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((ko(), n === o)) {
            t = xr(e, t, r)
            break e
          }
          Ge(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Hy(t),
        e === null && Xc(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Hc(n, o) ? (a = null) : i !== null && Hc(n, i) && (t.flags |= 32),
        mv(e, t),
        Ge(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && Xc(t), null
    case 13:
      return yv(e, t, r)
    case 4:
      return (
        _f(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Co(t, null, n, r)) : Ge(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Lt(n, o)),
        Gh(e, t, n, o, r)
      )
    case 7:
      return Ge(e, t, t.pendingProps, r), t.child
    case 8:
      return Ge(e, t, t.pendingProps.children, r), t.child
    case 12:
      return Ge(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ne(Ws, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Nt(i.value, a)) {
            if (i.children === o.children && !nt.current) {
              t = xr(e, t, r)
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
                      ;(l = hr(-1, r & -r)), (l.tag = 2)
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
                      qc(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error($(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  qc(a, r, t),
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
        Ge(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        ho(t, r),
        (o = Rt(o)),
        (n = n(o)),
        (t.flags |= 1),
        Ge(e, t, n, r),
        t.child
      )
    case 14:
      return (n = t.type), (o = Lt(n, t.pendingProps)), (o = Lt(n.type, o)), Kh(e, t, n, o, r)
    case 15:
      return pv(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Lt(n, o)),
        ms(e, t),
        (t.tag = 1),
        ot(n) ? ((e = !0), Os(t)) : (e = !1),
        ho(t, r),
        jy(t, n, o),
        Jc(t, n, o, r),
        rd(null, t, n, !0, e, r)
      )
    case 19:
      return vv(e, t, r)
    case 22:
      return hv(e, t, r)
  }
  throw Error($(156, t.tag))
}
function Dv(e, t) {
  return ay(e, t)
}
function xC(e, t, r, n) {
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
function Et(e, t, r, n) {
  return new xC(e, t, r, n)
}
function Of(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function wC(e) {
  if (typeof e == 'function') return Of(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === of)) return 11
    if (e === af) return 14
  }
  return 2
}
function Qr(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = Et(e.tag, t, e.key, e.mode)),
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
function vs(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) Of(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Yn:
        return Tn(r.children, o, i, t)
      case nf:
        ;(a = 8), (o |= 8)
        break
      case kc:
        return (e = Et(12, r, t, o | 2)), (e.elementType = kc), (e.lanes = i), e
      case Cc:
        return (e = Et(13, r, t, o)), (e.elementType = Cc), (e.lanes = i), e
      case _c:
        return (e = Et(19, r, t, o)), (e.elementType = _c), (e.lanes = i), e
      case Wg:
        return Ol(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ng:
              a = 10
              break e
            case jg:
              a = 9
              break e
            case of:
              a = 11
              break e
            case af:
              a = 14
              break e
            case Mr:
              ;(a = 16), (n = null)
              break e
          }
        throw Error($(130, e == null ? e : typeof e, ''))
    }
  return (t = Et(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
}
function Tn(e, t, r, n) {
  return (e = Et(7, e, n, t)), (e.lanes = r), e
}
function Ol(e, t, r, n) {
  return (
    (e = Et(22, e, n, t)), (e.elementType = Wg), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
  )
}
function Ou(e, t, r) {
  return (e = Et(6, e, null, t)), (e.lanes = r), e
}
function Nu(e, t, r) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function kC(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xu(0)),
    (this.expirationTimes = xu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Nf(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new kC(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cf(i),
    e
  )
}
function CC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Kn,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function Lv(e) {
  if (!e) return tn
  e = e._reactInternals
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error($(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error($(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (ot(r)) return Dy(e, r, t)
  }
  return t
}
function Fv(e, t, r, n, o, i, a, s, l) {
  return (
    (e = Nf(r, n, !0, e, o, i, a, s, l)),
    (e.context = Lv(null)),
    (r = e.current),
    (n = Ye()),
    (o = Yr(r)),
    (i = hr(n, o)),
    (i.callback = t ?? null),
    Gr(r, i, o),
    (e.current.lanes = o),
    la(e, o, n),
    it(e, n),
    e
  )
}
function Nl(e, t, r, n) {
  var o = t.current,
    i = Ye(),
    a = Yr(o)
  return (
    (r = Lv(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = hr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Gr(o, t, a)),
    e !== null && (Ot(e, o, a, i), fs(e, o, a)),
    a
  )
}
function Js(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function im(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function jf(e, t) {
  im(e, t), (e = e.alternate) && im(e, t)
}
function _C() {
  return null
}
var Bv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Wf(e) {
  this._internalRoot = e
}
jl.prototype.render = Wf.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error($(409))
  Nl(e, t, null, null)
}
jl.prototype.unmount = Wf.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Ln(function () {
      Nl(null, e, null, null)
    }),
      (t[Sr] = null)
  }
}
function jl(e) {
  this._internalRoot = e
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = py()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < Fr.length && t !== 0 && t < Fr[r].priority; r++);
    Fr.splice(r, 0, e), r === 0 && my(e)
  }
}
function Uf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function am() {}
function TC(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var u = Js(a)
        i.call(u)
      }
    }
    var a = Fv(t, n, e, 0, null, !1, !1, '', am)
    return (
      (e._reactRootContainer = a),
      (e[Sr] = a.current),
      Ni(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var u = Js(l)
      s.call(u)
    }
  }
  var l = Nf(e, 0, !1, null, null, !1, !1, '', am)
  return (
    (e._reactRootContainer = l),
    (e[Sr] = l.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      Nl(t, l, r, n)
    }),
    l
  )
}
function Ul(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = Js(a)
        s.call(l)
      }
    }
    Nl(t, a, e, o)
  } else a = TC(r, t, e, o, n)
  return Js(a)
}
dy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = ti(t.pendingLanes)
        r !== 0 && (uf(t, r | 1), it(t, xe()), !(K & 6) && ((Po = xe() + 500), sn()))
      }
      break
    case 13:
      Ln(function () {
        var n = br(e, 1)
        if (n !== null) {
          var o = Ye()
          Ot(n, e, 1, o)
        }
      }),
        jf(e, 1)
  }
}
cf = function (e) {
  if (e.tag === 13) {
    var t = br(e, 134217728)
    if (t !== null) {
      var r = Ye()
      Ot(t, e, 134217728, r)
    }
    jf(e, 134217728)
  }
}
fy = function (e) {
  if (e.tag === 13) {
    var t = Yr(e),
      r = br(e, t)
    if (r !== null) {
      var n = Ye()
      Ot(r, e, t, n)
    }
    jf(e, t)
  }
}
py = function () {
  return ee
}
hy = function (e, t) {
  var r = ee
  try {
    return (ee = e), t()
  } finally {
    ee = r
  }
}
Lc = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Ec(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = Dl(n)
            if (!o) throw Error($(90))
            Hg(n), Ec(n, o)
          }
        }
      }
      break
    case 'textarea':
      Kg(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && uo(e, !!r.multiple, t, !1)
  }
}
ey = Bf
ty = Ln
var PC = { usingClientEntryPoint: !1, Events: [ca, Zn, Dl, Zg, Jg, Bf] },
  Yo = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  EC = {
    bundleType: Yo.bundleType,
    version: Yo.version,
    rendererPackageName: Yo.rendererPackageName,
    rendererConfig: Yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = oy(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Yo.findFiberByHostInstance || _C,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ga.isDisabled && Ga.supportsFiber)
    try {
      ;(Al = Ga.inject(EC)), (er = Ga)
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PC
St.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Uf(t)) throw Error($(200))
  return CC(e, t, null, r)
}
St.createRoot = function (e, t) {
  if (!Uf(e)) throw Error($(299))
  var r = !1,
    n = '',
    o = Bv
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Nf(e, 1, !1, null, null, r, !1, n, o)),
    (e[Sr] = t.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    new Wf(t)
  )
}
St.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error($(188))
      : ((e = Object.keys(e).join(',')), Error($(268, e)))
  return (e = oy(t)), (e = e === null ? null : e.stateNode), e
}
St.flushSync = function (e) {
  return Ln(e)
}
St.hydrate = function (e, t, r) {
  if (!Wl(t)) throw Error($(200))
  return Ul(null, e, t, !0, r)
}
St.hydrateRoot = function (e, t, r) {
  if (!Uf(e)) throw Error($(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = Bv
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = Fv(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[Sr] = t.current),
    Ni(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new jl(t)
}
St.render = function (e, t, r) {
  if (!Wl(t)) throw Error($(200))
  return Ul(null, e, t, !1, r)
}
St.unmountComponentAtNode = function (e) {
  if (!Wl(e)) throw Error($(40))
  return e._reactRootContainer
    ? (Ln(function () {
        Ul(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Sr] = null)
        })
      }),
      !0)
    : !1
}
St.unstable_batchedUpdates = Bf
St.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Wl(r)) throw Error($(200))
  if (e == null || e._reactInternals === void 0) throw Error($(38))
  return Ul(e, t, r, !1, n)
}
St.version = '18.2.0-next-9e3b772b8-20220608'
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
  t(), (e.exports = St)
})(_w)
var [Iv, $C] = sa({ strict: !1, name: 'PortalContext' }),
  Hf = 'chakra-portal',
  AC = '.chakra-portal',
  RC = (e) =>
    z('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  zC = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = _.useState(null),
      i = _.useRef(null),
      [, a] = _.useState({})
    _.useEffect(() => a({}), [])
    const s = $C(),
      l = Cw()
    $s(() => {
      if (!n) return
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body
      if (!d) return
      ;(i.current = c.createElement('div')),
        (i.current.className = Hf),
        d.appendChild(i.current),
        a({})
      const f = i.current
      return () => {
        d.contains(f) && d.removeChild(f)
      }
    }, [n])
    const u =
      l != null && l.zIndex ? z(RC, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r
    return i.current
      ? zi.createPortal(z(Iv, { value: i.current, children: u }), i.current)
      : z('span', {
          ref: (c) => {
            c && o(c)
          },
        })
  },
  MC = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = _.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div')
        return l && (l.className = Hf), l
      }, [o]),
      [, s] = _.useState({})
    return (
      $s(() => s({}), []),
      $s(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a)
            }
          )
      }, [a, i]),
      i && a ? zi.createPortal(z(Iv, { value: n ? a : null, children: t }), a) : null
    )
  }
function Hl(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t
  return r ? z(MC, { containerRef: r, ...n }) : z(zC, { ...n })
}
Hl.className = Hf
Hl.selector = AC
Hl.displayName = 'Portal'
function DC() {
  const e = _.useContext(Ri)
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    )
  return e
}
var Gf = _.createContext({})
Gf.displayName = 'ColorModeContext'
function Kf() {
  const e = _.useContext(Gf)
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
  return e
}
var Ka = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function LC(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0
        ;(document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o()
      },
      setClassName(n) {
        document.body.classList.add(n ? Ka.dark : Ka.light),
          document.body.classList.remove(n ? Ka.light : Ka.dark)
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
var FC = 'chakra-ui-color-mode'
function BC(e) {
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
var IC = BC(FC),
  sm = () => {}
function lm(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function Vv(e) {
  const {
      value: t,
      children: r,
      options: { useSystemColorMode: n, initialColorMode: o, disableTransitionOnChange: i } = {},
      colorModeManager: a = IC,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = _.useState(() => lm(a, s)),
    [c, d] = _.useState(() => lm(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: v,
      addListener: S,
    } = _.useMemo(() => LC({ preventTransition: i }), [i]),
    C = o === 'system' && !l ? c : l,
    g = _.useCallback(
      (w) => {
        const T = w === 'system' ? f() : w
        u(T), h(T === 'dark'), v(T), a.set(T)
      },
      [a, f, h, v]
    )
  $s(() => {
    o === 'system' && d(f())
  }, []),
    _.useEffect(() => {
      const w = a.get()
      if (w) {
        g(w)
        return
      }
      if (o === 'system') {
        g('system')
        return
      }
      g(s)
    }, [a, s, o, g])
  const p = _.useCallback(() => {
    g(C === 'dark' ? 'light' : 'dark')
  }, [C, g])
  _.useEffect(() => {
    if (n) return S(g)
  }, [n, S, g])
  const y = _.useMemo(
    () => ({
      colorMode: t ?? C,
      toggleColorMode: t ? sm : p,
      setColorMode: t ? sm : g,
      forced: t !== void 0,
    }),
    [C, p, g, t]
  )
  return z(Gf.Provider, { value: y, children: r })
}
Vv.displayName = 'ColorModeProvider'
function VC() {
  const e = Kf(),
    t = DC()
  return { ...e, theme: t }
}
var Cr = (...e) => e.filter(Boolean).join(' ')
function At(e) {
  const t = typeof e
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function Nr(e, ...t) {
  return OC(e) ? e(...t) : e
}
var OC = (e) => typeof e == 'function',
  el = {},
  NC = {
    get exports() {
      return el
    },
    set exports(e) {
      el = e
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
    g = '[object Null]',
    p = '[object Object]',
    y = '[object Proxy]',
    w = '[object RegExp]',
    T = '[object Set]',
    A = '[object String]',
    P = '[object Undefined]',
    E = '[object WeakMap]',
    B = '[object ArrayBuffer]',
    L = '[object DataView]',
    pe = '[object Float32Array]',
    Ie = '[object Float64Array]',
    Ze = '[object Int8Array]',
    he = '[object Int16Array]',
    me = '[object Int32Array]',
    Je = '[object Uint8Array]',
    xt = '[object Uint8ClampedArray]',
    R = '[object Uint16Array]',
    V = '[object Uint32Array]',
    N = /[\\^$.*+?()[\]{}|]/g,
    O = /^\[object .+?Constructor\]$/,
    oe = /^(?:0|[1-9]\d*)$/,
    G = {}
  ;(G[pe] = G[Ie] = G[Ze] = G[he] = G[me] = G[Je] = G[xt] = G[R] = G[V] = !0),
    (G[s] =
      G[l] =
      G[B] =
      G[c] =
      G[L] =
      G[d] =
      G[f] =
      G[h] =
      G[S] =
      G[C] =
      G[p] =
      G[w] =
      G[T] =
      G[A] =
      G[E] =
        !1)
  var ut = typeof Ea == 'object' && Ea && Ea.Object === Object && Ea,
    Tr = typeof self == 'object' && self && self.Object === Object && self,
    _e = ut || Tr || Function('return this')(),
    jt = t && !t.nodeType && t,
    un = jt && !0 && e && !e.nodeType && e,
    Nn = un && un.exports === jt,
    Pr = Nn && ut.process,
    Wt = (function () {
      try {
        var m = un && un.require && un.require('util').types
        return m || (Pr && Pr.binding && Pr.binding('util'))
      } catch {}
    })(),
    Fo = Wt && Wt.isTypedArray
  function Sa(m, b, k) {
    switch (k.length) {
      case 0:
        return m.call(b)
      case 1:
        return m.call(b, k[0])
      case 2:
        return m.call(b, k[0], k[1])
      case 3:
        return m.call(b, k[0], k[1], k[2])
    }
    return m.apply(b, k)
  }
  function NS(m, b) {
    for (var k = -1, M = Array(m); ++k < m; ) M[k] = b(k)
    return M
  }
  function jS(m) {
    return function (b) {
      return m(b)
    }
  }
  function WS(m, b) {
    return m == null ? void 0 : m[b]
  }
  function US(m, b) {
    return function (k) {
      return m(b(k))
    }
  }
  var HS = Array.prototype,
    GS = Function.prototype,
    ba = Object.prototype,
    ou = _e['__core-js_shared__'],
    xa = GS.toString,
    or = ba.hasOwnProperty,
    _p = (function () {
      var m = /[^.]+$/.exec((ou && ou.keys && ou.keys.IE_PROTO) || '')
      return m ? 'Symbol(src)_1.' + m : ''
    })(),
    Tp = ba.toString,
    KS = xa.call(Object),
    YS = RegExp(
      '^' +
        xa
          .call(or)
          .replace(N, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    wa = Nn ? _e.Buffer : void 0,
    Pp = _e.Symbol,
    Ep = _e.Uint8Array,
    $p = wa ? wa.allocUnsafe : void 0,
    Ap = US(Object.getPrototypeOf, Object),
    Rp = Object.create,
    QS = ba.propertyIsEnumerable,
    XS = HS.splice,
    cn = Pp ? Pp.toStringTag : void 0,
    ka = (function () {
      try {
        var m = su(Object, 'defineProperty')
        return m({}, '', {}), m
      } catch {}
    })(),
    qS = wa ? wa.isBuffer : void 0,
    zp = Math.max,
    ZS = Date.now,
    Mp = su(_e, 'Map'),
    Bo = su(Object, 'create'),
    JS = (function () {
      function m() {}
      return function (b) {
        if (!fn(b)) return {}
        if (Rp) return Rp(b)
        m.prototype = b
        var k = new m()
        return (m.prototype = void 0), k
      }
    })()
  function dn(m) {
    var b = -1,
      k = m == null ? 0 : m.length
    for (this.clear(); ++b < k; ) {
      var M = m[b]
      this.set(M[0], M[1])
    }
  }
  function eb() {
    ;(this.__data__ = Bo ? Bo(null) : {}), (this.size = 0)
  }
  function tb(m) {
    var b = this.has(m) && delete this.__data__[m]
    return (this.size -= b ? 1 : 0), b
  }
  function rb(m) {
    var b = this.__data__
    if (Bo) {
      var k = b[m]
      return k === n ? void 0 : k
    }
    return or.call(b, m) ? b[m] : void 0
  }
  function nb(m) {
    var b = this.__data__
    return Bo ? b[m] !== void 0 : or.call(b, m)
  }
  function ob(m, b) {
    var k = this.__data__
    return (this.size += this.has(m) ? 0 : 1), (k[m] = Bo && b === void 0 ? n : b), this
  }
  ;(dn.prototype.clear = eb),
    (dn.prototype.delete = tb),
    (dn.prototype.get = rb),
    (dn.prototype.has = nb),
    (dn.prototype.set = ob)
  function ir(m) {
    var b = -1,
      k = m == null ? 0 : m.length
    for (this.clear(); ++b < k; ) {
      var M = m[b]
      this.set(M[0], M[1])
    }
  }
  function ib() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function ab(m) {
    var b = this.__data__,
      k = Ca(b, m)
    if (k < 0) return !1
    var M = b.length - 1
    return k == M ? b.pop() : XS.call(b, k, 1), --this.size, !0
  }
  function sb(m) {
    var b = this.__data__,
      k = Ca(b, m)
    return k < 0 ? void 0 : b[k][1]
  }
  function lb(m) {
    return Ca(this.__data__, m) > -1
  }
  function ub(m, b) {
    var k = this.__data__,
      M = Ca(k, m)
    return M < 0 ? (++this.size, k.push([m, b])) : (k[M][1] = b), this
  }
  ;(ir.prototype.clear = ib),
    (ir.prototype.delete = ab),
    (ir.prototype.get = sb),
    (ir.prototype.has = lb),
    (ir.prototype.set = ub)
  function jn(m) {
    var b = -1,
      k = m == null ? 0 : m.length
    for (this.clear(); ++b < k; ) {
      var M = m[b]
      this.set(M[0], M[1])
    }
  }
  function cb() {
    ;(this.size = 0), (this.__data__ = { hash: new dn(), map: new (Mp || ir)(), string: new dn() })
  }
  function db(m) {
    var b = Ta(this, m).delete(m)
    return (this.size -= b ? 1 : 0), b
  }
  function fb(m) {
    return Ta(this, m).get(m)
  }
  function pb(m) {
    return Ta(this, m).has(m)
  }
  function hb(m, b) {
    var k = Ta(this, m),
      M = k.size
    return k.set(m, b), (this.size += k.size == M ? 0 : 1), this
  }
  ;(jn.prototype.clear = cb),
    (jn.prototype.delete = db),
    (jn.prototype.get = fb),
    (jn.prototype.has = pb),
    (jn.prototype.set = hb)
  function Wn(m) {
    var b = (this.__data__ = new ir(m))
    this.size = b.size
  }
  function mb() {
    ;(this.__data__ = new ir()), (this.size = 0)
  }
  function gb(m) {
    var b = this.__data__,
      k = b.delete(m)
    return (this.size = b.size), k
  }
  function yb(m) {
    return this.__data__.get(m)
  }
  function vb(m) {
    return this.__data__.has(m)
  }
  function Sb(m, b) {
    var k = this.__data__
    if (k instanceof ir) {
      var M = k.__data__
      if (!Mp || M.length < r - 1) return M.push([m, b]), (this.size = ++k.size), this
      k = this.__data__ = new jn(M)
    }
    return k.set(m, b), (this.size = k.size), this
  }
  ;(Wn.prototype.clear = mb),
    (Wn.prototype.delete = gb),
    (Wn.prototype.get = yb),
    (Wn.prototype.has = vb),
    (Wn.prototype.set = Sb)
  function bb(m, b) {
    var k = cu(m),
      M = !k && uu(m),
      H = !k && !M && Ip(m),
      re = !k && !M && !H && Op(m),
      ue = k || M || H || re,
      U = ue ? NS(m.length, String) : [],
      ce = U.length
    for (var wt in m)
      (b || or.call(m, wt)) &&
        !(
          ue &&
          (wt == 'length' ||
            (H && (wt == 'offset' || wt == 'parent')) ||
            (re && (wt == 'buffer' || wt == 'byteLength' || wt == 'byteOffset')) ||
            Fp(wt, ce))
        ) &&
        U.push(wt)
    return U
  }
  function iu(m, b, k) {
    ;((k !== void 0 && !Pa(m[b], k)) || (k === void 0 && !(b in m))) && au(m, b, k)
  }
  function xb(m, b, k) {
    var M = m[b]
    ;(!(or.call(m, b) && Pa(M, k)) || (k === void 0 && !(b in m))) && au(m, b, k)
  }
  function Ca(m, b) {
    for (var k = m.length; k--; ) if (Pa(m[k][0], b)) return k
    return -1
  }
  function au(m, b, k) {
    b == '__proto__' && ka
      ? ka(m, b, { configurable: !0, enumerable: !0, value: k, writable: !0 })
      : (m[b] = k)
  }
  var wb = Lb()
  function _a(m) {
    return m == null ? (m === void 0 ? P : g) : cn && cn in Object(m) ? Fb(m) : jb(m)
  }
  function Dp(m) {
    return Io(m) && _a(m) == s
  }
  function kb(m) {
    if (!fn(m) || Ob(m)) return !1
    var b = fu(m) ? YS : O
    return b.test(Gb(m))
  }
  function Cb(m) {
    return Io(m) && Vp(m.length) && !!G[_a(m)]
  }
  function _b(m) {
    if (!fn(m)) return Nb(m)
    var b = Bp(m),
      k = []
    for (var M in m) (M == 'constructor' && (b || !or.call(m, M))) || k.push(M)
    return k
  }
  function Lp(m, b, k, M, H) {
    m !== b &&
      wb(
        b,
        function (re, ue) {
          if ((H || (H = new Wn()), fn(re))) Tb(m, b, ue, k, Lp, M, H)
          else {
            var U = M ? M(lu(m, ue), re, ue + '', m, b, H) : void 0
            U === void 0 && (U = re), iu(m, ue, U)
          }
        },
        Np
      )
  }
  function Tb(m, b, k, M, H, re, ue) {
    var U = lu(m, k),
      ce = lu(b, k),
      wt = ue.get(ce)
    if (wt) {
      iu(m, k, wt)
      return
    }
    var ct = re ? re(U, ce, k + '', m, b, ue) : void 0,
      Vo = ct === void 0
    if (Vo) {
      var pu = cu(ce),
        hu = !pu && Ip(ce),
        Wp = !pu && !hu && Op(ce)
      ;(ct = ce),
        pu || hu || Wp
          ? cu(U)
            ? (ct = U)
            : Kb(U)
            ? (ct = zb(U))
            : hu
            ? ((Vo = !1), (ct = $b(ce, !0)))
            : Wp
            ? ((Vo = !1), (ct = Rb(ce, !0)))
            : (ct = [])
          : Yb(ce) || uu(ce)
          ? ((ct = U), uu(U) ? (ct = Qb(U)) : (!fn(U) || fu(U)) && (ct = Bb(ce)))
          : (Vo = !1)
    }
    Vo && (ue.set(ce, ct), H(ct, ce, M, re, ue), ue.delete(ce)), iu(m, k, ct)
  }
  function Pb(m, b) {
    return Ub(Wb(m, b, jp), m + '')
  }
  var Eb = ka
    ? function (m, b) {
        return ka(m, 'toString', { configurable: !0, enumerable: !1, value: qb(b), writable: !0 })
      }
    : jp
  function $b(m, b) {
    if (b) return m.slice()
    var k = m.length,
      M = $p ? $p(k) : new m.constructor(k)
    return m.copy(M), M
  }
  function Ab(m) {
    var b = new m.constructor(m.byteLength)
    return new Ep(b).set(new Ep(m)), b
  }
  function Rb(m, b) {
    var k = b ? Ab(m.buffer) : m.buffer
    return new m.constructor(k, m.byteOffset, m.length)
  }
  function zb(m, b) {
    var k = -1,
      M = m.length
    for (b || (b = Array(M)); ++k < M; ) b[k] = m[k]
    return b
  }
  function Mb(m, b, k, M) {
    var H = !k
    k || (k = {})
    for (var re = -1, ue = b.length; ++re < ue; ) {
      var U = b[re],
        ce = M ? M(k[U], m[U], U, k, m) : void 0
      ce === void 0 && (ce = m[U]), H ? au(k, U, ce) : xb(k, U, ce)
    }
    return k
  }
  function Db(m) {
    return Pb(function (b, k) {
      var M = -1,
        H = k.length,
        re = H > 1 ? k[H - 1] : void 0,
        ue = H > 2 ? k[2] : void 0
      for (
        re = m.length > 3 && typeof re == 'function' ? (H--, re) : void 0,
          ue && Ib(k[0], k[1], ue) && ((re = H < 3 ? void 0 : re), (H = 1)),
          b = Object(b);
        ++M < H;

      ) {
        var U = k[M]
        U && m(b, U, M, re)
      }
      return b
    })
  }
  function Lb(m) {
    return function (b, k, M) {
      for (var H = -1, re = Object(b), ue = M(b), U = ue.length; U--; ) {
        var ce = ue[m ? U : ++H]
        if (k(re[ce], ce, re) === !1) break
      }
      return b
    }
  }
  function Ta(m, b) {
    var k = m.__data__
    return Vb(b) ? k[typeof b == 'string' ? 'string' : 'hash'] : k.map
  }
  function su(m, b) {
    var k = WS(m, b)
    return kb(k) ? k : void 0
  }
  function Fb(m) {
    var b = or.call(m, cn),
      k = m[cn]
    try {
      m[cn] = void 0
      var M = !0
    } catch {}
    var H = Tp.call(m)
    return M && (b ? (m[cn] = k) : delete m[cn]), H
  }
  function Bb(m) {
    return typeof m.constructor == 'function' && !Bp(m) ? JS(Ap(m)) : {}
  }
  function Fp(m, b) {
    var k = typeof m
    return (
      (b = b ?? a),
      !!b && (k == 'number' || (k != 'symbol' && oe.test(m))) && m > -1 && m % 1 == 0 && m < b
    )
  }
  function Ib(m, b, k) {
    if (!fn(k)) return !1
    var M = typeof b
    return (M == 'number' ? du(k) && Fp(b, k.length) : M == 'string' && b in k) ? Pa(k[b], m) : !1
  }
  function Vb(m) {
    var b = typeof m
    return b == 'string' || b == 'number' || b == 'symbol' || b == 'boolean'
      ? m !== '__proto__'
      : m === null
  }
  function Ob(m) {
    return !!_p && _p in m
  }
  function Bp(m) {
    var b = m && m.constructor,
      k = (typeof b == 'function' && b.prototype) || ba
    return m === k
  }
  function Nb(m) {
    var b = []
    if (m != null) for (var k in Object(m)) b.push(k)
    return b
  }
  function jb(m) {
    return Tp.call(m)
  }
  function Wb(m, b, k) {
    return (
      (b = zp(b === void 0 ? m.length - 1 : b, 0)),
      function () {
        for (var M = arguments, H = -1, re = zp(M.length - b, 0), ue = Array(re); ++H < re; )
          ue[H] = M[b + H]
        H = -1
        for (var U = Array(b + 1); ++H < b; ) U[H] = M[H]
        return (U[b] = k(ue)), Sa(m, this, U)
      }
    )
  }
  function lu(m, b) {
    if (!(b === 'constructor' && typeof m[b] == 'function') && b != '__proto__') return m[b]
  }
  var Ub = Hb(Eb)
  function Hb(m) {
    var b = 0,
      k = 0
    return function () {
      var M = ZS(),
        H = i - (M - k)
      if (((k = M), H > 0)) {
        if (++b >= o) return arguments[0]
      } else b = 0
      return m.apply(void 0, arguments)
    }
  }
  function Gb(m) {
    if (m != null) {
      try {
        return xa.call(m)
      } catch {}
      try {
        return m + ''
      } catch {}
    }
    return ''
  }
  function Pa(m, b) {
    return m === b || (m !== m && b !== b)
  }
  var uu = Dp(
      (function () {
        return arguments
      })()
    )
      ? Dp
      : function (m) {
          return Io(m) && or.call(m, 'callee') && !QS.call(m, 'callee')
        },
    cu = Array.isArray
  function du(m) {
    return m != null && Vp(m.length) && !fu(m)
  }
  function Kb(m) {
    return Io(m) && du(m)
  }
  var Ip = qS || Zb
  function fu(m) {
    if (!fn(m)) return !1
    var b = _a(m)
    return b == h || b == v || b == u || b == y
  }
  function Vp(m) {
    return typeof m == 'number' && m > -1 && m % 1 == 0 && m <= a
  }
  function fn(m) {
    var b = typeof m
    return m != null && (b == 'object' || b == 'function')
  }
  function Io(m) {
    return m != null && typeof m == 'object'
  }
  function Yb(m) {
    if (!Io(m) || _a(m) != p) return !1
    var b = Ap(m)
    if (b === null) return !0
    var k = or.call(b, 'constructor') && b.constructor
    return typeof k == 'function' && k instanceof k && xa.call(k) == KS
  }
  var Op = Fo ? jS(Fo) : Cb
  function Qb(m) {
    return Mb(m, Np(m))
  }
  function Np(m) {
    return du(m) ? bb(m, !0) : _b(m)
  }
  var Xb = Db(function (m, b, k, M) {
    Lp(m, b, k, M)
  })
  function qb(m) {
    return function () {
      return m
    }
  }
  function jp(m) {
    return m
  }
  function Zb() {
    return !1
  }
  e.exports = Xb
})(NC, el)
const Zt = el
var jC = (e) => /!(important)?$/.test(e),
  um = (e) => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  WC = (e, t) => (r) => {
    const n = String(t),
      o = jC(n),
      i = um(n),
      a = e ? `${e}.${i}` : i
    let s = At(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t
    return (s = um(s)), o ? `${s} !important` : s
  }
function Yf(e) {
  const { scale: t, transform: r, compose: n } = e
  return (i, a) => {
    var s
    const l = WC(t, i)(a)
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l
    return n && (u = n(u, a)), u
  }
}
var Ya =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t)
function kt(e, t) {
  return (r) => {
    const n = { property: r, scale: e }
    return (n.transform = Yf({ scale: e, transform: t })), n
  }
}
var UC =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === 'rtl' ? e : t
function HC(e) {
  const { property: t, scale: r, transform: n } = e
  return { scale: r, property: UC(t), transform: r ? Yf({ scale: r, compose: n }) : n }
}
var Ov = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
]
function GC() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...Ov,
  ].join(' ')
}
function KC() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...Ov].join(
    ' '
  )
}
var YC = {
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
  QC = {
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
function XC(e) {
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
var qC = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  hd = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  ZC = new Set(Object.values(hd)),
  md = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  JC = (e) => e.trim()
function e2(e, t) {
  if (e == null || md.has(e)) return e
  if (!(gd(e) || md.has(e))) return `url('${e}')`
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2]
  if (!i || !a) return e
  const s = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...u] = a.split(',').map(JC).filter(Boolean)
  if ((u == null ? void 0 : u.length) === 0) return e
  const c = l in hd ? hd[l] : l
  u.unshift(c)
  const d = u.map((f) => {
    if (ZC.has(f)) return f
    const h = f.indexOf(' '),
      [v, S] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      C = gd(S) ? S : S && S.split(' '),
      g = `colors.${v}`,
      p = g in t.__cssMap ? t.__cssMap[g].varRef : v
    return C ? [p, ...(Array.isArray(C) ? C : [C])].join(' ') : p
  })
  return `${s}(${d.join(', ')})`
}
var gd = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  t2 = (e, t) => e2(e, t ?? {})
function r2(e) {
  return /^var\(--.+\)$/.test(e)
}
var n2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
  },
  Ht = (e) => (t) => `${e}(${t})`,
  Y = {
    filter(e) {
      return e !== 'auto' ? e : YC
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : QC
    },
    ring(e) {
      return XC(Y.px(e))
    },
    bgClip(e) {
      return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
    },
    transform(e) {
      return e === 'auto' ? GC() : e === 'auto-gpu' ? KC() : e
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e
    },
    px(e) {
      if (e == null) return e
      const { unitless: t } = n2(e)
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
      if (r2(e) || e == null) return e
      const t = typeof e == 'string' && !e.endsWith('deg')
      return typeof e == 'number' || t ? `${e}deg` : e
    },
    gradient: t2,
    blur: Ht('blur'),
    opacity: Ht('opacity'),
    brightness: Ht('brightness'),
    contrast: Ht('contrast'),
    dropShadow: Ht('drop-shadow'),
    grayscale: Ht('grayscale'),
    hueRotate: Ht('hue-rotate'),
    invert: Ht('invert'),
    saturate: Ht('saturate'),
    sepia: Ht('sepia'),
    bgImage(e) {
      return e == null || gd(e) || md.has(e) ? e : `url(${e})`
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none'
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e }
    },
    flexDirection(e) {
      var t
      const { space: r, divide: n } = (t = qC[e]) != null ? t : {},
        o = { flexDirection: e }
      return r && (o[r] = 1), n && (o[n] = 1), o
    },
  },
  x = {
    borderWidths: kt('borderWidths'),
    borderStyles: kt('borderStyles'),
    colors: kt('colors'),
    borders: kt('borders'),
    gradients: kt('gradients', Y.gradient),
    radii: kt('radii', Y.px),
    space: kt('space', Ya(Y.vh, Y.px)),
    spaceT: kt('space', Ya(Y.vh, Y.px)),
    degreeT(e) {
      return { property: e, transform: Y.degree }
    },
    prop(e, t, r) {
      return { property: e, scale: t, ...(t && { transform: Yf({ scale: t, transform: r }) }) }
    },
    propT(e, t) {
      return { property: e, transform: t }
    },
    sizes: kt('sizes', Ya(Y.vh, Y.px)),
    sizesT: kt('sizes', Ya(Y.vh, Y.fraction)),
    shadows: kt('shadows'),
    logical: HC,
    blur: kt('blur', Y.blur),
  },
  Ss = {
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
Object.assign(Ss, { bgImage: Ss.backgroundImage, bgImg: Ss.backgroundImage })
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
var o2 = {
    color: x.colors('color'),
    textColor: x.colors('color'),
    fill: x.colors('fill'),
    stroke: x.colors('stroke'),
  },
  yd = {
    boxShadow: x.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: x.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: x.prop('backgroundBlendMode'),
    opacity: !0,
  }
Object.assign(yd, { shadow: yd.boxShadow })
var i2 = {
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
  tl = {
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
Object.assign(tl, { flexDir: tl.flexDirection })
var Nv = {
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
  a2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Y.outline },
    outlineOffset: !0,
    outlineColor: x.colors('outlineColor'),
  },
  _t = {
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
Object.assign(_t, {
  w: _t.width,
  h: _t.height,
  minW: _t.minWidth,
  maxW: _t.maxWidth,
  minH: _t.minHeight,
  maxH: _t.maxHeight,
  overscroll: _t.overscrollBehavior,
  overscrollX: _t.overscrollBehaviorX,
  overscrollY: _t.overscrollBehaviorY,
})
var s2 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: x.prop('listStyleImage'),
}
function l2(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var u2 = (e) => {
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
  c2 = u2(l2),
  d2 = {
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
  f2 = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  ju = (e, t, r) => {
    const n = {},
      o = c2(e, t, {})
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i])
    return n
  },
  p2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? d2 : e === 'focusable' ? f2 : {}
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, r) => ju(t, `layerStyles.${e}`, r) },
    textStyle: { processResult: !0, transform: (e, t, r) => ju(t, `textStyles.${e}`, r) },
    apply: { processResult: !0, transform: (e, t, r) => ju(t, e, r) },
  },
  gi = {
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
Object.assign(gi, { insetStart: gi.insetInlineStart, insetEnd: gi.insetInlineEnd })
var h2 = {
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
var m2 = {
    textDecorationColor: x.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: x.shadows('textShadow'),
  },
  g2 = {
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
  y2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: x.prop('transitionDuration', 'transition.duration'),
    transitionProperty: x.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: x.prop('transitionTimingFunction', 'transition.easing'),
  },
  v2 = {
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
  S2 = {
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
function jv(e) {
  return At(e) && e.reference ? e.reference : String(e)
}
var Gl = (e, ...t) => t.map(jv).join(` ${e} `).replace(/calc/g, ''),
  cm = (...e) => `calc(${Gl('+', ...e)})`,
  dm = (...e) => `calc(${Gl('-', ...e)})`,
  vd = (...e) => `calc(${Gl('*', ...e)})`,
  fm = (...e) => `calc(${Gl('/', ...e)})`,
  pm = (e) => {
    const t = jv(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : vd(t, -1)
  },
  vn = Object.assign(
    (e) => ({
      add: (...t) => vn(cm(e, ...t)),
      subtract: (...t) => vn(dm(e, ...t)),
      multiply: (...t) => vn(vd(e, ...t)),
      divide: (...t) => vn(fm(e, ...t)),
      negate: () => vn(pm(e)),
      toString: () => e.toString(),
    }),
    { add: cm, subtract: dm, multiply: vd, divide: fm, negate: pm }
  )
function b2(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function x2(e) {
  const t = b2(e.toString())
  return k2(w2(t))
}
function w2(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e
}
function k2(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function C2(e, t = '') {
  return [t, e].filter(Boolean).join('-')
}
function _2(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`
}
function T2(e, t = '') {
  return x2(`--${C2(e, t)}`)
}
function j(e, t, r) {
  const n = T2(e, r)
  return { variable: n, reference: _2(n, t) }
}
function P2(e) {
  const t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function E2(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '')
  return { unitless: !r, value: t, unit: r }
}
function Sd(e) {
  if (e == null) return e
  const { unitless: t } = E2(e)
  return t || typeof e == 'number' ? `${e}px` : e
}
var Wv = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Qf = (e) => Object.fromEntries(Object.entries(e).sort(Wv))
function hm(e) {
  const t = Qf(e)
  return Object.assign(Object.values(t), t)
}
function $2(e) {
  const t = Object.keys(Qf(e))
  return new Set(t)
}
function mm(e) {
  var t
  if (!e) return e
  e = (t = Sd(e)) != null ? t : e
  const r = -0.02
  return typeof e == 'number'
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`)
}
function ni(e, t) {
  const r = ['@media screen']
  return (
    e && r.push('and', `(min-width: ${Sd(e)})`),
    t && r.push('and', `(max-width: ${Sd(t)})`),
    r.join(' ')
  )
}
function A2(e) {
  var t
  if (!e) return null
  e.base = (t = e.base) != null ? t : '0px'
  const r = hm(e),
    n = Object.entries(e)
      .sort(Wv)
      .map(([a, s], l, u) => {
        var c
        let [, d] = (c = u[l + 1]) != null ? c : []
        return (
          (d = parseFloat(d) > 0 ? mm(d) : void 0),
          {
            _minW: mm(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: ni(null, d),
            minWQuery: ni(s),
            minMaxQuery: ni(s, d),
          }
        )
      }),
    o = $2(e),
    i = Array.from(o.values())
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a)
      return s.length > 0 && s.every((l) => o.has(l))
    },
    asObject: Qf(e),
    asArray: hm(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a)
    },
    media: [null, ...r.map((a) => ni(a)).slice(1)],
    toArrayValue(a) {
      if (!At(a)) throw new Error('toArrayValue: value must be an object')
      const s = i.map((l) => {
        var u
        return (u = a[l]) != null ? u : null
      })
      for (; P2(s) === null; ) s.pop()
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
var Me = {
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
  $r = (e) => Uv((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  ar = (e) => Uv((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  Uv = (e, ...t) => t.map(e).join(', '),
  Kl = {
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
    _groupHover: $r(Me.hover),
    _peerHover: ar(Me.hover),
    _groupFocus: $r(Me.focus),
    _peerFocus: ar(Me.focus),
    _groupFocusVisible: $r(Me.focusVisible),
    _peerFocusVisible: ar(Me.focusVisible),
    _groupActive: $r(Me.active),
    _peerActive: ar(Me.active),
    _groupDisabled: $r(Me.disabled),
    _peerDisabled: ar(Me.disabled),
    _groupInvalid: $r(Me.invalid),
    _peerInvalid: ar(Me.invalid),
    _groupChecked: $r(Me.checked),
    _peerChecked: ar(Me.checked),
    _groupFocusWithin: $r(Me.focusWithin),
    _peerFocusWithin: ar(Me.focusWithin),
    _peerPlaceholderShown: ar(Me.placeholderShown),
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
  R2 = Object.keys(Kl)
function gm(e, t) {
  return j(String(e).replace(/\./g, '-'), void 0, t)
}
function z2(e, t) {
  let r = {}
  const n = {}
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = gm(o, t == null ? void 0 : t.cssVarPrefix)
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [h, ...v] = f,
          S = `${h}.-${v.join('.')}`,
          C = vn.negate(s),
          g = vn.negate(u)
        n[S] = { value: C, var: l, varRef: g }
      }
      ;(r[l] = s), (n[o] = { value: s, var: l, varRef: u })
      continue
    }
    const c = (f) => {
        const v = [String(o).split('.')[0], f].join('.')
        if (!e[v]) return f
        const { reference: C } = gm(v, t == null ? void 0 : t.cssVarPrefix)
        return C
      },
      d = At(s) ? s : { default: s }
    ;(r = Zt(
      r,
      Object.entries(d).reduce((f, [h, v]) => {
        var S, C
        const g = c(v)
        if (h === 'default') return (f[l] = g), f
        const p = (C = (S = Kl) == null ? void 0 : S[h]) != null ? C : h
        return (f[p] = { [l]: g }), f
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u })
  }
  return { cssVars: r, cssMap: n }
}
function M2(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
function D2(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
var L2 = [
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
function F2(e) {
  return D2(e, L2)
}
function B2(e) {
  return e.semanticTokens
}
function I2(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e
  return o
}
function V2({ tokens: e, semanticTokens: t }) {
  var r, n
  const o = Object.entries((r = bd(e)) != null ? r : {}).map(([a, s]) => [
      a,
      { isSemantic: !1, value: s },
    ]),
    i = Object.entries((n = bd(t, 1)) != null ? n : {}).map(([a, s]) => [
      a,
      { isSemantic: !0, value: s },
    ])
  return Object.fromEntries([...o, ...i])
}
function bd(e, t = 1 / 0) {
  return (!At(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          At(o) || Array.isArray(o)
            ? Object.entries(bd(o, t - 1)).forEach(([i, a]) => {
                r[`${n}.${i}`] = a
              })
            : (r[n] = o),
          r
        ),
        {}
      )
}
function O2(e) {
  var t
  const r = I2(e),
    n = F2(r),
    o = B2(r),
    i = V2({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = z2(i, { cssVarPrefix: a })
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
      __breakpoints: A2(r.breakpoints),
    }),
    r
  )
}
var Xf = Zt({}, Ss, Q, o2, tl, _t, i2, h2, a2, Nv, p2, gi, yd, ae, S2, v2, m2, g2, s2, y2)
Object.assign({}, ae, _t, tl, Nv, gi)
var N2 = [...Object.keys(Xf), ...R2],
  j2 = { ...Xf, ...Kl },
  W2 = (e) => e in j2,
  U2 = (e) => (t) => {
    if (!t.__breakpoints) return e
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {}
    for (const a in e) {
      let s = Nr(e[a], t)
      if (s == null) continue
      if (((s = At(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
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
function H2(e) {
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
function G2(e) {
  return /^var\(--.+\)$/.test(e)
}
var K2 = (e, t) => e.startsWith('--') && typeof t == 'string' && !G2(t),
  Y2 = (e, t) => {
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
      [a, s] = H2(t)
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t
  }
function Q2(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u
      const c = Nr(i, n),
        d = U2(c)(n)
      let f = {}
      for (let h in d) {
        const v = d[h]
        let S = Nr(v, n)
        h in r && (h = r[h]), K2(h, S) && (S = Y2(n, S))
        let C = t[h]
        if ((C === !0 && (C = { property: h }), At(S))) {
          ;(f[h] = (s = f[h]) != null ? s : {}), (f[h] = Zt({}, f[h], o(S, !0)))
          continue
        }
        let g =
          (u = (l = C == null ? void 0 : C.transform) == null ? void 0 : l.call(C, S, n, c)) != null
            ? u
            : S
        g = C != null && C.processResult ? o(g, !0) : g
        const p = Nr(C == null ? void 0 : C.property, n)
        if (!a && C != null && C.static) {
          const y = Nr(C.static, n)
          f = Zt({}, f, y)
        }
        if (p && Array.isArray(p)) {
          for (const y of p) f[y] = g
          continue
        }
        if (p) {
          p === '&' && At(g) ? (f = Zt({}, f, g)) : (f[p] = g)
          continue
        }
        if (At(g)) {
          f = Zt({}, f, g)
          continue
        }
        f[h] = g
      }
      return f
    }
  return o
}
var Hv = (e) => (t) => Q2({ theme: t, pseudos: Kl, configs: Xf })(e)
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
function X2(e, t) {
  if (Array.isArray(e)) return e
  if (At(e)) return t(e)
  if (e != null) return [e]
}
function q2(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r
  return -1
}
function Z2(e) {
  const t = e.__breakpoints
  return function (n, o, i, a) {
    var s, l
    if (!t) return
    const u = {},
      c = X2(i, t.toArrayValue)
    if (!c) return u
    const d = c.length,
      f = d === 1,
      h = !!n.parts
    for (let v = 0; v < d; v++) {
      const S = t.details[v],
        C = t.details[q2(c, v)],
        g = ni(S.minW, C == null ? void 0 : C._minW),
        p = Nr((s = n[o]) == null ? void 0 : s[c[v]], a)
      if (p) {
        if (h) {
          ;(l = n.parts) == null ||
            l.forEach((y) => {
              Zt(u, { [y]: f ? p[y] : { [g]: p[y] } })
            })
          continue
        }
        if (!h) {
          f ? Zt(u, p) : (u[g] = p)
          continue
        }
        u[g] = p
      }
    }
    return u
  }
}
function J2(e) {
  return (t) => {
    var r
    const { variant: n, size: o, theme: i } = t,
      a = Z2(i)
    return Zt(
      {},
      Nr((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', n, t)
    )
  }
}
function Do(e) {
  return M2(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var e_ = {
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
  t_ = e_,
  r_ = { 'base': '0em', 'sm': '30em', 'md': '48em', 'lg': '62em', 'xl': '80em', '2xl': '96em' },
  n_ = r_,
  o_ = {
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
  i_ = o_,
  a_ = {
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
  s_ = a_,
  l_ = {
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
  u_ = l_,
  c_ = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  d_ = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  f_ = {
    'ultra-fast': '50ms',
    'faster': '100ms',
    'fast': '150ms',
    'normal': '200ms',
    'slow': '300ms',
    'slower': '400ms',
    'ultra-slow': '500ms',
  },
  p_ = { property: c_, easing: d_, duration: f_ },
  h_ = p_,
  m_ = {
    'none': 0,
    'sm': '4px',
    'base': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  g_ = m_,
  y_ = {
    'none': 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  v_ = y_,
  S_ = {
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
  Gv = S_,
  Kv = {
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
  b_ = {
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
  x_ = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  w_ = { ...Kv, ...b_, container: x_ },
  Yv = w_,
  k_ = {
    breakpoints: n_,
    zIndices: t_,
    radii: s_,
    blur: g_,
    colors: i_,
    ...Gv,
    sizes: Yv,
    shadows: u_,
    space: Kv,
    borders: v_,
    transition: h_,
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
var C_ = J('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
  __ = J('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
  T_ = J('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
  P_ = J('breadcrumb').parts('link', 'item', 'container').extend('separator')
J('button').parts()
var E_ = J('checkbox').parts('control', 'icon', 'container').extend('label')
J('progress').parts('track', 'filledTrack').extend('label')
var $_ = J('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  A_ = J('editable').parts('preview', 'input', 'textarea'),
  R_ = J('form').parts('container', 'requiredIndicator', 'helperText'),
  z_ = J('formError').parts('text', 'icon'),
  M_ = J('input').parts('addon', 'field', 'element'),
  D_ = J('list').parts('container', 'item', 'icon'),
  L_ = J('menu').parts('button', 'list', 'item').extend('groupTitle', 'command', 'divider'),
  F_ = J('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  B_ = J('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
J('pininput').parts('field')
var I_ = J('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  V_ = J('progress').parts('label', 'filledTrack', 'track'),
  O_ = J('radio').parts('container', 'control', 'label'),
  N_ = J('select').parts('field', 'icon'),
  j_ = J('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  W_ = J('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  U_ = J('switch').parts('container', 'track', 'thumb'),
  H_ = J('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  G_ = J('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  K_ = J('tag').parts('container', 'label', 'closeButton'),
  Y_ = J('card').parts('container', 'header', 'body', 'footer')
function kn(e, t, r) {
  return Math.min(Math.max(e, r), t)
}
class Q_ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`)
  }
}
var oi = Q_
function qf(e) {
  if (typeof e != 'string') throw new oi(e)
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
  let t = e.trim()
  t = nT.test(e) ? Z_(e) : e
  const r = J_.exec(t)
  if (r) {
    const a = Array.from(r).slice(1)
    return [
      ...a.slice(0, 3).map((s) => parseInt(Xi(s, 2), 16)),
      parseInt(Xi(a[3] || 'f', 2), 16) / 255,
    ]
  }
  const n = eT.exec(t)
  if (n) {
    const a = Array.from(n).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
  }
  const o = tT.exec(t)
  if (o) {
    const a = Array.from(o).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || '1')]
  }
  const i = rT.exec(t)
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
    if (kn(0, 100, s) !== s) throw new oi(e)
    if (kn(0, 100, l) !== l) throw new oi(e)
    return [...oT(a, s, l), Number.isNaN(u) ? 1 : u]
  }
  throw new oi(e)
}
function X_(e) {
  let t = 5381,
    r = e.length
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r)
  return (t >>> 0) % 2341
}
const ym = (e) => parseInt(e.replace(/_/g, ''), 36),
  q_ =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = ym(t.substring(0, 3)),
          n = ym(t.substring(3)).toString(16)
        let o = ''
        for (let i = 0; i < 6 - n.length; i++) o += '0'
        return (e[r] = `${o}${n}`), e
      }, {})
function Z_(e) {
  const t = e.toLowerCase().trim(),
    r = q_[X_(t)]
  if (!r) throw new oi(e)
  return `#${r}`
}
const Xi = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  J_ = new RegExp(`^#${Xi('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  eT = new RegExp(`^#${Xi('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  tT = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Xi(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  rT = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  nT = /^[a-z]+$/i,
  vm = (e) => Math.round(e * 255),
  oT = (e, t, r) => {
    let n = r / 100
    if (t === 0) return [n, n, n].map(vm)
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
    return [d, f, h].map(vm)
  }
function iT(e, t, r, n) {
  return `rgba(${kn(0, 255, e).toFixed()}, ${kn(0, 255, t).toFixed()}, ${kn(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(kn(0, 1, n).toFixed(3))})`
}
function aT(e, t) {
  const [r, n, o, i] = qf(e)
  return iT(r, n, o, i - t)
}
function sT(e) {
  const [t, r, n, o] = qf(e)
  let i = (a) => {
    const s = kn(0, 255, a).toString(16)
    return s.length === 1 ? `0${s}` : s
  }
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function lT(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var uT = (e) => Object.keys(e).length === 0,
  Ke = (e, t, r) => {
    const n = lT(e, `colors.${t}`, t)
    try {
      return sT(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  cT = (e) => {
    const [t, r, n] = qf(e)
    return (t * 299 + r * 587 + n * 114) / 1e3
  },
  dT = (e) => (t) => {
    const r = Ke(t, e)
    return cT(r) < 128 ? 'dark' : 'light'
  },
  fT = (e) => (t) => dT(e)(t) === 'dark',
  Eo = (e, t) => (r) => {
    const n = Ke(r, e)
    return aT(n, 1 - t)
  }
function Sm(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
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
var pT = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`
function hT(e) {
  const t = pT()
  return !e || uT(e)
    ? t
    : e.string && e.colors
    ? gT(e.string, e.colors)
    : e.string && !e.colors
    ? mT(e.string)
    : e.colors && !e.string
    ? yT(e.colors)
    : t
}
function mT(e) {
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
function gT(e, t) {
  let r = 0
  if (e.length === 0) return t[0]
  for (let n = 0; n < e.length; n += 1) (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
  return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function yT(e) {
  return e[Math.floor(Math.random() * e.length)]
}
function F(e, t) {
  return (r) => (r.colorMode === 'dark' ? t : e)
}
function Zf(e) {
  const { orientation: t, vertical: r, horizontal: n } = e
  return t ? (t === 'vertical' ? r : n) : {}
}
function Qv(e) {
  return At(e) && e.reference ? e.reference : String(e)
}
var Yl = (e, ...t) => t.map(Qv).join(` ${e} `).replace(/calc/g, ''),
  bm = (...e) => `calc(${Yl('+', ...e)})`,
  xm = (...e) => `calc(${Yl('-', ...e)})`,
  xd = (...e) => `calc(${Yl('*', ...e)})`,
  wm = (...e) => `calc(${Yl('/', ...e)})`,
  km = (e) => {
    const t = Qv(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : xd(t, -1)
  },
  ur = Object.assign(
    (e) => ({
      add: (...t) => ur(bm(e, ...t)),
      subtract: (...t) => ur(xm(e, ...t)),
      multiply: (...t) => ur(xd(e, ...t)),
      divide: (...t) => ur(wm(e, ...t)),
      negate: () => ur(km(e)),
      toString: () => e.toString(),
    }),
    { add: bm, subtract: xm, multiply: xd, divide: wm, negate: km }
  )
function vT(e) {
  return !Number.isInteger(parseFloat(e.toString()))
}
function ST(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function Xv(e) {
  const t = ST(e.toString())
  return t.includes('\\.') ? e : vT(e) ? t.replace('.', '\\.') : e
}
function bT(e, t = '') {
  return [t, Xv(e)].filter(Boolean).join('-')
}
function xT(e, t) {
  return `var(${Xv(e)}${t ? `, ${t}` : ''})`
}
function wT(e, t = '') {
  return `--${bT(e, t)}`
}
function Ee(e, t) {
  const r = wT(e, t == null ? void 0 : t.prefix)
  return { variable: r, reference: xT(r, kT(t == null ? void 0 : t.fallback)) }
}
function kT(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: CT, definePartsStyle: bs } = le(U_.keys),
  yi = Ee('switch-track-width'),
  Pn = Ee('switch-track-height'),
  Wu = Ee('switch-track-diff'),
  _T = ur.subtract(yi, Pn),
  wd = Ee('switch-thumb-x'),
  Qo = Ee('switch-bg'),
  TT = (e) => {
    const { colorScheme: t } = e
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [yi.reference],
      height: [Pn.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Qo.variable]: 'colors.gray.300',
      _dark: { [Qo.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [Qo.variable]: `colors.${t}.500`, _dark: { [Qo.variable]: `colors.${t}.200` } },
      bg: Qo.reference,
    }
  },
  PT = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Pn.reference],
    height: [Pn.reference],
    _checked: { transform: `translateX(${wd.reference})` },
  },
  ET = bs((e) => ({
    container: {
      [Wu.variable]: _T,
      [wd.variable]: Wu.reference,
      _rtl: { [wd.variable]: ur(Wu).negate().toString() },
    },
    track: TT(e),
    thumb: PT,
  })),
  $T = {
    sm: bs({ container: { [yi.variable]: '1.375rem', [Pn.variable]: 'sizes.3' } }),
    md: bs({ container: { [yi.variable]: '1.875rem', [Pn.variable]: 'sizes.4' } }),
    lg: bs({ container: { [yi.variable]: '2.875rem', [Pn.variable]: 'sizes.6' } }),
  },
  AT = CT({ baseStyle: ET, sizes: $T, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: RT, definePartsStyle: go } = le(H_.keys),
  zT = go({
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
  rl = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  MT = go((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: F('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...rl,
      },
      td: { borderBottom: '1px', borderColor: F(`${t}.100`, `${t}.700`)(e), ...rl },
      caption: { color: F('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  DT = go((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: F('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...rl,
      },
      td: { borderBottom: '1px', borderColor: F(`${t}.100`, `${t}.700`)(e), ...rl },
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
  LT = { simple: MT, striped: DT, unstyled: {} },
  FT = {
    sm: go({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: go({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: go({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  BT = RT({
    baseStyle: zT,
    variants: LT,
    sizes: FT,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  tt = j('tabs-color'),
  It = j('tabs-bg'),
  Qa = j('tabs-border-color'),
  { defineMultiStyleConfig: IT, definePartsStyle: rr } = le(G_.keys),
  VT = (e) => {
    const { orientation: t } = e
    return { display: t === 'vertical' ? 'flex' : 'block' }
  },
  OT = (e) => {
    const { isFitted: t } = e
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    }
  },
  NT = (e) => {
    const { align: t = 'start', orientation: r } = e
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: r === 'vertical' ? 'column' : 'row',
    }
  },
  jT = { p: 4 },
  WT = rr((e) => ({ root: VT(e), tab: OT(e), tablist: NT(e), tabpanel: jT })),
  UT = {
    sm: rr({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: rr({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: rr({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  HT = rr((e) => {
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
          [tt.variable]: `colors.${t}.600`,
          _dark: { [tt.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [It.variable]: 'colors.gray.200',
          _dark: { [It.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: tt.reference,
        bg: It.reference,
      },
    }
  }),
  GT = rr((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [Qa.variable]: 'transparent',
        _selected: {
          [tt.variable]: `colors.${t}.600`,
          [Qa.variable]: 'colors.white',
          _dark: { [tt.variable]: `colors.${t}.300`, [Qa.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: Qa.reference,
        },
        color: tt.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  KT = rr((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [It.variable]: 'colors.gray.50',
        _dark: { [It.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [It.variable]: 'colors.white',
          [tt.variable]: `colors.${t}.600`,
          _dark: { [It.variable]: 'colors.gray.800', [tt.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: tt.reference,
        bg: It.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  YT = rr((e) => {
    const { colorScheme: t, theme: r } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: Ke(r, `${t}.700`), bg: Ke(r, `${t}.100`) },
      },
    }
  }),
  QT = rr((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [tt.variable]: 'colors.gray.600',
        _dark: { [tt.variable]: 'inherit' },
        _selected: {
          [tt.variable]: 'colors.white',
          [It.variable]: `colors.${t}.600`,
          _dark: { [tt.variable]: 'colors.gray.800', [It.variable]: `colors.${t}.300` },
        },
        color: tt.reference,
        bg: It.reference,
      },
    }
  }),
  XT = rr({}),
  qT = {
    'line': HT,
    'enclosed': GT,
    'enclosed-colored': KT,
    'soft-rounded': YT,
    'solid-rounded': QT,
    'unstyled': XT,
  },
  ZT = IT({
    baseStyle: WT,
    sizes: UT,
    variants: qT,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  qi = j('badge-bg'),
  Xr = j('badge-color'),
  qv = j('badge-shadow'),
  JT = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: qi.reference,
    color: Xr.reference,
    boxShadow: qv.reference,
  },
  eP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Eo(`${t}.500`, 0.6)(r)
    return {
      [qi.variable]: `colors.${t}.500`,
      [Xr.variable]: 'colors.white',
      _dark: { [qi.variable]: n, [Xr.variable]: 'colors.whiteAlpha.800' },
    }
  },
  tP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Eo(`${t}.200`, 0.16)(r)
    return {
      [qi.variable]: `colors.${t}.100`,
      [Xr.variable]: `colors.${t}.800`,
      _dark: { [qi.variable]: n, [Xr.variable]: `colors.${t}.200` },
    }
  },
  rP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Eo(`${t}.200`, 0.8)(r)
    return {
      [Xr.variable]: `colors.${t}.500`,
      _dark: { [Xr.variable]: n },
      [qv.variable]: `inset 0 0 0px 1px ${Xr.reference}`,
    }
  },
  nP = { solid: eP, subtle: tP, outline: rP },
  vi = { baseStyle: JT, variants: nP, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  oP = j('badge-bg'),
  iP = j('badge-color'),
  { defineMultiStyleConfig: aP, definePartsStyle: En } = le(K_.keys),
  sP = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    color: iP.reference,
    bg: oP.reference,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' },
  },
  lP = { lineHeight: 1.2, overflow: 'visible' },
  uP = {
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
  cP = En({ container: sP, label: lP, closeButton: uP }),
  dP = {
    sm: En({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: En({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: En({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } }),
  },
  fP = {
    subtle: En((e) => {
      var t
      return { container: (t = vi.variants) == null ? void 0 : t.subtle(e) }
    }),
    solid: En((e) => {
      var t
      return { container: (t = vi.variants) == null ? void 0 : t.solid(e) }
    }),
    outline: En((e) => {
      var t
      return { container: (t = vi.variants) == null ? void 0 : t.outline(e) }
    }),
  },
  pP = aP({
    variants: fP,
    baseStyle: cP,
    sizes: dP,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: fr, defineMultiStyleConfig: hP } = le(M_.keys),
  mP = fr({
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
  Ar = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  gP = {
    lg: fr({ field: Ar.lg, addon: Ar.lg }),
    md: fr({ field: Ar.md, addon: Ar.md }),
    sm: fr({ field: Ar.sm, addon: Ar.sm }),
    xs: fr({ field: Ar.xs, addon: Ar.xs }),
  }
function Jf(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e
  return {
    focusBorderColor: t || F('blue.500', 'blue.300')(e),
    errorBorderColor: r || F('red.500', 'red.300')(e),
  }
}
var yP = fr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Jf(e)
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: F('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ke(t, n), boxShadow: `0 0 0 1px ${Ke(t, n)}` },
        _focusVisible: { zIndex: 1, borderColor: Ke(t, r), boxShadow: `0 0 0 1px ${Ke(t, r)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: F('inherit', 'whiteAlpha.50')(e),
        bg: F('gray.100', 'whiteAlpha.300')(e),
      },
    }
  }),
  vP = fr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Jf(e)
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: F('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: F('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ke(t, n) },
        _focusVisible: { bg: 'transparent', borderColor: Ke(t, r) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: F('gray.100', 'whiteAlpha.50')(e),
      },
    }
  }),
  SP = fr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Jf(e)
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: Ke(t, n), boxShadow: `0px 1px 0px 0px ${Ke(t, n)}` },
        _focusVisible: { borderColor: Ke(t, r), boxShadow: `0px 1px 0px 0px ${Ke(t, r)}` },
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
  bP = fr({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  xP = { outline: yP, filled: vP, flushed: SP, unstyled: bP },
  q = hP({
    baseStyle: mP,
    sizes: gP,
    variants: xP,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  Cm,
  wP = {
    ...((Cm = q.baseStyle) == null ? void 0 : Cm.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  _m,
  Tm,
  kP = {
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
    unstyled: (Tm = (_m = q.variants) == null ? void 0 : _m.unstyled.field) != null ? Tm : {},
  },
  Pm,
  Em,
  $m,
  Am,
  Rm,
  zm,
  Mm,
  Dm,
  CP = {
    xs: (Em = (Pm = q.sizes) == null ? void 0 : Pm.xs.field) != null ? Em : {},
    sm: (Am = ($m = q.sizes) == null ? void 0 : $m.sm.field) != null ? Am : {},
    md: (zm = (Rm = q.sizes) == null ? void 0 : Rm.md.field) != null ? zm : {},
    lg: (Dm = (Mm = q.sizes) == null ? void 0 : Mm.lg.field) != null ? Dm : {},
  },
  _P = { baseStyle: wP, sizes: CP, variants: kP, defaultProps: { size: 'md', variant: 'outline' } },
  Xa = Ee('tooltip-bg'),
  Uu = Ee('tooltip-fg'),
  TP = Ee('popper-arrow-bg'),
  PP = {
    bg: Xa.reference,
    color: Uu.reference,
    [Xa.variable]: 'colors.gray.700',
    [Uu.variable]: 'colors.whiteAlpha.900',
    _dark: { [Xa.variable]: 'colors.gray.300', [Uu.variable]: 'colors.gray.900' },
    [TP.variable]: Xa.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  EP = { baseStyle: PP },
  { defineMultiStyleConfig: $P, definePartsStyle: ii } = le(V_.keys),
  AP = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = F(Sm(), Sm('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = F(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ke(r, a)} 50%,
    transparent 100%
  )`
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
  },
  RP = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  zP = (e) => ({ bg: F('gray.100', 'whiteAlpha.300')(e) }),
  MP = (e) => ({ transitionProperty: 'common', transitionDuration: 'slow', ...AP(e) }),
  DP = ii((e) => ({ label: RP, filledTrack: MP(e), track: zP(e) })),
  LP = {
    xs: ii({ track: { h: '1' } }),
    sm: ii({ track: { h: '2' } }),
    md: ii({ track: { h: '3' } }),
    lg: ii({ track: { h: '4' } }),
  },
  FP = $P({ sizes: LP, baseStyle: DP, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  BP = (e) => typeof e == 'function'
function Qe(e, ...t) {
  return BP(e) ? e(...t) : e
}
var { definePartsStyle: xs, defineMultiStyleConfig: IP } = le(E_.keys),
  Si = j('checkbox-size'),
  VP = (e) => {
    const { colorScheme: t } = e
    return {
      w: Si.reference,
      h: Si.reference,
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
  OP = { _disabled: { cursor: 'not-allowed' } },
  NP = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  jP = { transitionProperty: 'transform', transitionDuration: 'normal' },
  WP = xs((e) => ({ icon: jP, container: OP, control: Qe(VP, e), label: NP })),
  UP = {
    sm: xs({
      control: { [Si.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: xs({
      control: { [Si.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: xs({
      control: { [Si.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  nl = IP({ baseStyle: WP, sizes: UP, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: HP, definePartsStyle: ws } = le(O_.keys),
  GP = (e) => {
    var t
    const r = (t = Qe(nl.baseStyle, e)) == null ? void 0 : t.control
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
  KP = ws((e) => {
    var t, r, n, o
    return {
      label: (r = (t = nl).baseStyle) == null ? void 0 : r.call(t, e).label,
      container: (o = (n = nl).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: GP(e),
    }
  }),
  YP = {
    md: ws({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: ws({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: ws({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  QP = HP({ baseStyle: KP, sizes: YP, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: XP, definePartsStyle: qP } = le(N_.keys),
  qa = j('select-bg'),
  Lm,
  ZP = {
    ...((Lm = q.baseStyle) == null ? void 0 : Lm.field),
    'appearance': 'none',
    'paddingBottom': '1px',
    'lineHeight': 'normal',
    'bg': qa.reference,
    [qa.variable]: 'colors.white',
    '_dark': { [qa.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: qa.reference },
  },
  JP = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  eE = qP({ field: ZP, icon: JP }),
  Za = { paddingInlineEnd: '8' },
  Fm,
  Bm,
  Im,
  Vm,
  Om,
  Nm,
  jm,
  Wm,
  tE = {
    lg: {
      ...((Fm = q.sizes) == null ? void 0 : Fm.lg),
      field: { ...((Bm = q.sizes) == null ? void 0 : Bm.lg.field), ...Za },
    },
    md: {
      ...((Im = q.sizes) == null ? void 0 : Im.md),
      field: { ...((Vm = q.sizes) == null ? void 0 : Vm.md.field), ...Za },
    },
    sm: {
      ...((Om = q.sizes) == null ? void 0 : Om.sm),
      field: { ...((Nm = q.sizes) == null ? void 0 : Nm.sm.field), ...Za },
    },
    xs: {
      ...((jm = q.sizes) == null ? void 0 : jm.xs),
      field: { ...((Wm = q.sizes) == null ? void 0 : Wm.xs.field), ...Za },
      icon: { insetEnd: '1' },
    },
  },
  rE = XP({ baseStyle: eE, sizes: tE, variants: q.variants, defaultProps: q.defaultProps }),
  Hu = j('skeleton-start-color'),
  Gu = j('skeleton-end-color'),
  nE = {
    [Hu.variable]: 'colors.gray.100',
    [Gu.variable]: 'colors.gray.400',
    _dark: { [Hu.variable]: 'colors.gray.800', [Gu.variable]: 'colors.gray.600' },
    background: Hu.reference,
    borderColor: Gu.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  oE = { baseStyle: nE },
  Ku = j('skip-link-bg'),
  iE = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [Ku.variable]: 'colors.white',
      _dark: { [Ku.variable]: 'colors.gray.700' },
      bg: Ku.reference,
    },
  },
  aE = { baseStyle: iE },
  { defineMultiStyleConfig: sE, definePartsStyle: Ql } = le(j_.keys),
  Zi = j('slider-thumb-size'),
  Ji = j('slider-track-size'),
  Ir = j('slider-bg'),
  lE = (e) => {
    const { orientation: t } = e
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...Zf({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
    }
  },
  uE = (e) => ({
    ...Zf({
      orientation: e.orientation,
      horizontal: { h: Ji.reference },
      vertical: { w: Ji.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [Ir.variable]: 'colors.gray.200',
    _dark: { [Ir.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [Ir.variable]: 'colors.gray.300',
      _dark: { [Ir.variable]: 'colors.whiteAlpha.300' },
    },
    bg: Ir.reference,
  }),
  cE = (e) => {
    const { orientation: t } = e
    return {
      ...Zf({
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
      w: Zi.reference,
      h: Zi.reference,
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
  dE = (e) => {
    const { colorScheme: t } = e
    return {
      width: 'inherit',
      height: 'inherit',
      [Ir.variable]: `colors.${t}.500`,
      _dark: { [Ir.variable]: `colors.${t}.200` },
      bg: Ir.reference,
    }
  },
  fE = Ql((e) => ({ container: lE(e), track: uE(e), thumb: cE(e), filledTrack: dE(e) })),
  pE = Ql({ container: { [Zi.variable]: 'sizes.4', [Ji.variable]: 'sizes.1' } }),
  hE = Ql({ container: { [Zi.variable]: 'sizes.3.5', [Ji.variable]: 'sizes.1' } }),
  mE = Ql({ container: { [Zi.variable]: 'sizes.2.5', [Ji.variable]: 'sizes.0.5' } }),
  gE = { lg: pE, md: hE, sm: mE },
  yE = sE({ baseStyle: fE, sizes: gE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  Sn = Ee('spinner-size'),
  vE = { width: [Sn.reference], height: [Sn.reference] },
  SE = {
    xs: { [Sn.variable]: 'sizes.3' },
    sm: { [Sn.variable]: 'sizes.4' },
    md: { [Sn.variable]: 'sizes.6' },
    lg: { [Sn.variable]: 'sizes.8' },
    xl: { [Sn.variable]: 'sizes.12' },
  },
  bE = { baseStyle: vE, sizes: SE, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: xE, definePartsStyle: Zv } = le(W_.keys),
  wE = { fontWeight: 'medium' },
  kE = { opacity: 0.8, marginBottom: '2' },
  CE = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  _E = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  TE = Zv({ container: {}, label: wE, helpText: kE, number: CE, icon: _E }),
  PE = {
    md: Zv({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  EE = xE({ baseStyle: TE, sizes: PE, defaultProps: { size: 'md' } }),
  Yu = j('kbd-bg'),
  $E = {
    [Yu.variable]: 'colors.gray.100',
    _dark: { [Yu.variable]: 'colors.whiteAlpha.100' },
    bg: Yu.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  AE = { baseStyle: $E },
  RE = {
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
  zE = { baseStyle: RE },
  { defineMultiStyleConfig: ME, definePartsStyle: DE } = le(D_.keys),
  LE = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  FE = DE({ icon: LE }),
  BE = ME({ baseStyle: FE }),
  { defineMultiStyleConfig: IE, definePartsStyle: VE } = le(L_.keys),
  Yt = j('menu-bg'),
  Qu = j('menu-shadow'),
  OE = {
    [Yt.variable]: '#fff',
    [Qu.variable]: 'shadows.sm',
    _dark: { [Yt.variable]: 'colors.gray.700', [Qu.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: Yt.reference,
    boxShadow: Qu.reference,
  },
  NE = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [Yt.variable]: 'colors.gray.100', _dark: { [Yt.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [Yt.variable]: 'colors.gray.200',
      _dark: { [Yt.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [Yt.variable]: 'colors.gray.100',
      _dark: { [Yt.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: Yt.reference,
  },
  jE = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  WE = { opacity: 0.6 },
  UE = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  HE = { transitionProperty: 'common', transitionDuration: 'normal' },
  GE = VE({ button: HE, list: OE, item: NE, groupTitle: jE, command: WE, divider: UE }),
  KE = IE({ baseStyle: GE }),
  { defineMultiStyleConfig: YE, definePartsStyle: kd } = le(F_.keys),
  Xu = j('modal-bg'),
  qu = j('modal-shadow'),
  QE = { bg: 'blackAlpha.600', zIndex: 'modal' },
  XE = (e) => {
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
  qE = (e) => {
    const { scrollBehavior: t } = e
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [Xu.variable]: 'colors.white',
      [qu.variable]: 'shadows.lg',
      _dark: { [Xu.variable]: 'colors.gray.700', [qu.variable]: 'shadows.dark-lg' },
      bg: Xu.reference,
      boxShadow: qu.reference,
    }
  },
  ZE = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  JE = { position: 'absolute', top: '2', insetEnd: '3' },
  e5 = (e) => {
    const { scrollBehavior: t } = e
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
  },
  t5 = { px: '6', py: '4' },
  r5 = kd((e) => ({
    overlay: QE,
    dialogContainer: Qe(XE, e),
    dialog: Qe(qE, e),
    header: ZE,
    closeButton: JE,
    body: Qe(e5, e),
    footer: t5,
  }))
function Dt(e) {
  return kd(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  )
}
var n5 = {
    'xs': Dt('xs'),
    'sm': Dt('sm'),
    'md': Dt('md'),
    'lg': Dt('lg'),
    'xl': Dt('xl'),
    '2xl': Dt('2xl'),
    '3xl': Dt('3xl'),
    '4xl': Dt('4xl'),
    '5xl': Dt('5xl'),
    '6xl': Dt('6xl'),
    'full': Dt('full'),
  },
  o5 = YE({ baseStyle: r5, sizes: n5, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: i5, definePartsStyle: Jv } = le(B_.keys),
  ep = Ee('number-input-stepper-width'),
  e1 = Ee('number-input-input-padding'),
  a5 = ur(ep).add('0.5rem').toString(),
  Zu = Ee('number-input-bg'),
  Ju = Ee('number-input-color'),
  ec = Ee('number-input-border-color'),
  s5 = { [ep.variable]: 'sizes.6', [e1.variable]: a5 },
  l5 = (e) => {
    var t, r
    return (r = (t = Qe(q.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {}
  },
  u5 = { width: ep.reference },
  c5 = {
    borderStart: '1px solid',
    borderStartColor: ec.reference,
    color: Ju.reference,
    bg: Zu.reference,
    [Ju.variable]: 'colors.chakra-body-text',
    [ec.variable]: 'colors.chakra-border-color',
    _dark: { [Ju.variable]: 'colors.whiteAlpha.800', [ec.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [Zu.variable]: 'colors.gray.200',
      _dark: { [Zu.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  d5 = Jv((e) => {
    var t
    return { root: s5, field: (t = Qe(l5, e)) != null ? t : {}, stepperGroup: u5, stepper: c5 }
  })
function Ja(e) {
  var t, r, n
  const o = (t = q.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
    s = Gv.fontSizes[a]
  return Jv({
    field: { ...o.field, paddingInlineEnd: e1.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: ur(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  })
}
var f5 = { xs: Ja('xs'), sm: Ja('sm'), md: Ja('md'), lg: Ja('lg') },
  p5 = i5({ baseStyle: d5, sizes: f5, variants: q.variants, defaultProps: q.defaultProps }),
  Um,
  h5 = { ...((Um = q.baseStyle) == null ? void 0 : Um.field), textAlign: 'center' },
  m5 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  Hm,
  Gm,
  g5 = {
    outline: (e) => {
      var t, r, n
      return (n =
        (r = Qe((t = q.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    flushed: (e) => {
      var t, r, n
      return (n =
        (r = Qe((t = q.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    filled: (e) => {
      var t, r, n
      return (n =
        (r = Qe((t = q.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    unstyled: (Gm = (Hm = q.variants) == null ? void 0 : Hm.unstyled.field) != null ? Gm : {},
  },
  y5 = { baseStyle: h5, sizes: m5, variants: g5, defaultProps: q.defaultProps },
  { defineMultiStyleConfig: v5, definePartsStyle: S5 } = le(I_.keys),
  es = Ee('popper-bg'),
  b5 = Ee('popper-arrow-bg'),
  Km = Ee('popper-arrow-shadow-color'),
  x5 = { zIndex: 10 },
  w5 = {
    [es.variable]: 'colors.white',
    bg: es.reference,
    [b5.variable]: es.reference,
    [Km.variable]: 'colors.gray.200',
    _dark: { [es.variable]: 'colors.gray.700', [Km.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  k5 = { px: 3, py: 2, borderBottomWidth: '1px' },
  C5 = { px: 3, py: 2 },
  _5 = { px: 3, py: 2, borderTopWidth: '1px' },
  T5 = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  P5 = S5({ popper: x5, content: w5, header: k5, body: C5, footer: _5, closeButton: T5 }),
  E5 = v5({ baseStyle: P5 }),
  { definePartsStyle: Cd, defineMultiStyleConfig: $5 } = le($_.keys),
  tc = j('drawer-bg'),
  rc = j('drawer-box-shadow')
function Hn(e) {
  return Cd(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var A5 = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  R5 = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  z5 = (e) => {
    const { isFullHeight: t } = e
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [tc.variable]: 'colors.white',
      [rc.variable]: 'shadows.lg',
      _dark: { [tc.variable]: 'colors.gray.700', [rc.variable]: 'shadows.dark-lg' },
      bg: tc.reference,
      boxShadow: rc.reference,
    }
  },
  M5 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  D5 = { position: 'absolute', top: '2', insetEnd: '3' },
  L5 = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  F5 = { px: '6', py: '4' },
  B5 = Cd((e) => ({
    overlay: A5,
    dialogContainer: R5,
    dialog: Qe(z5, e),
    header: M5,
    closeButton: D5,
    body: L5,
    footer: F5,
  })),
  I5 = { xs: Hn('xs'), sm: Hn('md'), md: Hn('lg'), lg: Hn('2xl'), xl: Hn('4xl'), full: Hn('full') },
  V5 = $5({ baseStyle: B5, sizes: I5, defaultProps: { size: 'xs' } }),
  { definePartsStyle: O5, defineMultiStyleConfig: N5 } = le(A_.keys),
  j5 = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  W5 = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  U5 = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  H5 = O5({ preview: j5, input: W5, textarea: U5 }),
  G5 = N5({ baseStyle: H5 }),
  { definePartsStyle: K5, defineMultiStyleConfig: Y5 } = le(R_.keys),
  yo = j('form-control-color'),
  Q5 = {
    marginStart: '1',
    [yo.variable]: 'colors.red.500',
    _dark: { [yo.variable]: 'colors.red.300' },
    color: yo.reference,
  },
  X5 = {
    mt: '2',
    [yo.variable]: 'colors.gray.600',
    _dark: { [yo.variable]: 'colors.whiteAlpha.600' },
    color: yo.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  q5 = K5({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: Q5,
    helperText: X5,
  }),
  Z5 = Y5({ baseStyle: q5 }),
  { definePartsStyle: J5, defineMultiStyleConfig: e$ } = le(z_.keys),
  vo = j('form-error-color'),
  t$ = {
    [vo.variable]: 'colors.red.500',
    _dark: { [vo.variable]: 'colors.red.300' },
    color: vo.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  r$ = {
    marginEnd: '0.5em',
    [vo.variable]: 'colors.red.500',
    _dark: { [vo.variable]: 'colors.red.300' },
    color: vo.reference,
  },
  n$ = J5({ text: t$, icon: r$ }),
  o$ = e$({ baseStyle: n$ }),
  i$ = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  a$ = { baseStyle: i$ },
  s$ = { fontFamily: 'heading', fontWeight: 'bold' },
  l$ = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    'xl': { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    'lg': { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    'md': { fontSize: 'xl', lineHeight: 1.2 },
    'sm': { fontSize: 'md', lineHeight: 1.2 },
    'xs': { fontSize: 'sm', lineHeight: 1.2 },
  },
  u$ = { baseStyle: s$, sizes: l$, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: c$, definePartsStyle: d$ } = le(P_.keys),
  f$ = {
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
  p$ = d$({ link: f$ }),
  h$ = c$({ baseStyle: p$ }),
  m$ = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  t1 = (e) => {
    const { colorScheme: t, theme: r } = e
    if (t === 'gray')
      return {
        color: F('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: F('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: F('gray.200', 'whiteAlpha.300')(e) },
      }
    const n = Eo(`${t}.200`, 0.12)(r),
      o = Eo(`${t}.200`, 0.24)(r)
    return {
      color: F(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: F(`${t}.50`, n)(e) },
      _active: { bg: F(`${t}.100`, o)(e) },
    }
  },
  g$ = (e) => {
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
      ...Qe(t1, e),
    }
  },
  y$ = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  v$ = (e) => {
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
      } = (t = y$[r]) != null ? t : {},
      s = F(n, `${r}.200`)(e)
    return {
      bg: s,
      color: F(o, 'gray.800')(e),
      _hover: { bg: F(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: F(a, `${r}.400`)(e) },
    }
  },
  S$ = (e) => {
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
  b$ = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  x$ = { ghost: t1, outline: g$, solid: v$, link: S$, unstyled: b$ },
  w$ = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  k$ = {
    baseStyle: m$,
    variants: x$,
    sizes: w$,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: $n, defineMultiStyleConfig: C$ } = le(Y_.keys),
  ol = j('card-bg'),
  mr = j('card-padding'),
  r1 = j('card-shadow'),
  ks = j('card-radius'),
  n1 = j('card-border-width', '0'),
  o1 = j('card-border-color'),
  _$ = $n({
    container: {
      [ol.variable]: 'colors.chakra-body-bg',
      backgroundColor: ol.reference,
      boxShadow: r1.reference,
      borderRadius: ks.reference,
      color: 'chakra-body-text',
      borderWidth: n1.reference,
      borderColor: o1.reference,
    },
    body: { padding: mr.reference, flex: '1 1 0%' },
    header: { padding: mr.reference },
    footer: { padding: mr.reference },
  }),
  T$ = {
    sm: $n({ container: { [ks.variable]: 'radii.base', [mr.variable]: 'space.3' } }),
    md: $n({ container: { [ks.variable]: 'radii.md', [mr.variable]: 'space.5' } }),
    lg: $n({ container: { [ks.variable]: 'radii.xl', [mr.variable]: 'space.7' } }),
  },
  P$ = {
    elevated: $n({
      container: { [r1.variable]: 'shadows.base', _dark: { [ol.variable]: 'colors.gray.700' } },
    }),
    outline: $n({
      container: { [n1.variable]: '1px', [o1.variable]: 'colors.chakra-border-color' },
    }),
    filled: $n({ container: { [ol.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [mr.variable]: 0 },
      header: { [mr.variable]: 0 },
      footer: { [mr.variable]: 0 },
    },
  },
  E$ = C$({
    baseStyle: _$,
    variants: P$,
    sizes: T$,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  bi = Ee('close-button-size'),
  Xo = Ee('close-button-bg'),
  $$ = {
    w: [bi.reference],
    h: [bi.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Xo.variable]: 'colors.blackAlpha.100',
      _dark: { [Xo.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Xo.variable]: 'colors.blackAlpha.200',
      _dark: { [Xo.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Xo.reference,
  },
  A$ = {
    lg: { [bi.variable]: 'sizes.10', fontSize: 'md' },
    md: { [bi.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [bi.variable]: 'sizes.6', fontSize: '2xs' },
  },
  R$ = { baseStyle: $$, sizes: A$, defaultProps: { size: 'md' } },
  { variants: z$, defaultProps: M$ } = vi,
  D$ = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  L$ = { baseStyle: D$, variants: z$, defaultProps: M$ },
  F$ = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  B$ = { baseStyle: F$ },
  I$ = { opacity: 0.6, borderColor: 'inherit' },
  V$ = { borderStyle: 'solid' },
  O$ = { borderStyle: 'dashed' },
  N$ = { solid: V$, dashed: O$ },
  j$ = { baseStyle: I$, variants: N$, defaultProps: { variant: 'solid' } },
  { definePartsStyle: W$, defineMultiStyleConfig: U$ } = le(C_.keys),
  H$ = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  G$ = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  K$ = { pt: '2', px: '4', pb: '5' },
  Y$ = { fontSize: '1.25em' },
  Q$ = W$({ container: H$, button: G$, panel: K$, icon: Y$ }),
  X$ = U$({ baseStyle: Q$ }),
  { definePartsStyle: fa, defineMultiStyleConfig: q$ } = le(__.keys),
  mt = j('alert-fg'),
  wr = j('alert-bg'),
  Z$ = fa({
    container: { bg: wr.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: mt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: mt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  })
function tp(e) {
  const { theme: t, colorScheme: r } = e,
    n = Eo(`${r}.200`, 0.16)(t)
  return { light: `colors.${r}.100`, dark: n }
}
var J$ = fa((e) => {
    const { colorScheme: t } = e,
      r = tp(e)
    return {
      container: {
        [mt.variable]: `colors.${t}.500`,
        [wr.variable]: r.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [wr.variable]: r.dark },
      },
    }
  }),
  e3 = fa((e) => {
    const { colorScheme: t } = e,
      r = tp(e)
    return {
      container: {
        [mt.variable]: `colors.${t}.500`,
        [wr.variable]: r.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [wr.variable]: r.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: mt.reference,
      },
    }
  }),
  t3 = fa((e) => {
    const { colorScheme: t } = e,
      r = tp(e)
    return {
      container: {
        [mt.variable]: `colors.${t}.500`,
        [wr.variable]: r.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [wr.variable]: r.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: mt.reference,
      },
    }
  }),
  r3 = fa((e) => {
    const { colorScheme: t } = e
    return {
      container: {
        [mt.variable]: 'colors.white',
        [wr.variable]: `colors.${t}.500`,
        _dark: { [mt.variable]: 'colors.gray.900', [wr.variable]: `colors.${t}.200` },
        color: mt.reference,
      },
    }
  }),
  n3 = { 'subtle': J$, 'left-accent': e3, 'top-accent': t3, 'solid': r3 },
  o3 = q$({
    baseStyle: Z$,
    variants: n3,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: i1, defineMultiStyleConfig: i3 } = le(T_.keys),
  So = j('avatar-border-color'),
  nc = j('avatar-bg'),
  a3 = {
    borderRadius: 'full',
    border: '0.2em solid',
    [So.variable]: 'white',
    _dark: { [So.variable]: 'colors.gray.800' },
    borderColor: So.reference,
  },
  s3 = {
    [nc.variable]: 'colors.gray.200',
    _dark: { [nc.variable]: 'colors.whiteAlpha.400' },
    bgColor: nc.reference,
  },
  Ym = j('avatar-background'),
  l3 = (e) => {
    const { name: t, theme: r } = e,
      n = t ? hT({ string: t }) : 'colors.gray.400',
      o = fT(n)(r)
    let i = 'white'
    return (
      o || (i = 'gray.800'),
      {
        'bg': Ym.reference,
        '&:not([data-loaded])': { [Ym.variable]: n },
        'color': i,
        [So.variable]: 'colors.white',
        '_dark': { [So.variable]: 'colors.gray.800' },
        'borderColor': So.reference,
        'verticalAlign': 'top',
      }
    )
  },
  u3 = i1((e) => ({ badge: Qe(a3, e), excessLabel: Qe(s3, e), container: Qe(l3, e) }))
function Rr(e) {
  const t = e !== '100%' ? Yv[e] : void 0
  return i1({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: { fontSize: `calc(${t ?? e} / 2.5)`, lineHeight: e !== '100%' ? t ?? e : void 0 },
  })
}
var c3 = {
    '2xs': Rr(4),
    'xs': Rr(6),
    'sm': Rr(8),
    'md': Rr(12),
    'lg': Rr(16),
    'xl': Rr(24),
    '2xl': Rr(32),
    'full': Rr('100%'),
  },
  d3 = i3({ baseStyle: u3, sizes: c3, defaultProps: { size: 'md' } }),
  f3 = {
    Accordion: X$,
    Alert: o3,
    Avatar: d3,
    Badge: vi,
    Breadcrumb: h$,
    Button: k$,
    Checkbox: nl,
    CloseButton: R$,
    Code: L$,
    Container: B$,
    Divider: j$,
    Drawer: V5,
    Editable: G5,
    Form: Z5,
    FormError: o$,
    FormLabel: a$,
    Heading: u$,
    Input: q,
    Kbd: AE,
    Link: zE,
    List: BE,
    Menu: KE,
    Modal: o5,
    NumberInput: p5,
    PinInput: y5,
    Popover: E5,
    Progress: FP,
    Radio: QP,
    Select: rE,
    Skeleton: oE,
    SkipLink: aE,
    Slider: yE,
    Spinner: bE,
    Stat: EE,
    Switch: AT,
    Table: BT,
    Tabs: ZT,
    Tag: pP,
    Textarea: _P,
    Tooltip: EP,
    Card: E$,
  },
  p3 = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  h3 = {
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
  m3 = 'ltr',
  g3 = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  y3 = { semanticTokens: p3, direction: m3, ...k_, components: f3, styles: h3, config: g3 }
function v3(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n])
    }),
    r
  )
}
function S3(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var b3 = (e) => {
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
  a1 = b3(S3)
function s1(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n]
      t(o, n, e) && (r[n] = o)
    }),
    r
  )
}
var l1 = (e) => s1(e, (t) => t != null)
function x3(e) {
  return typeof e == 'function'
}
function u1(e, ...t) {
  return x3(e) ? e(...t) : e
}
var w3 = typeof Element < 'u',
  k3 = typeof Map == 'function',
  C3 = typeof Set == 'function',
  _3 = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Cs(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!Cs(e[n], t[n])) return !1
      return !0
    }
    var i
    if (k3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Cs(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (C3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (_3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (w3 && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !Cs(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var T3 = function (t, r) {
  try {
    return Cs(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
function c1(e, t = {}) {
  var r
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = VC(),
    s = e ? a1(i, `components.${e}`) : void 0,
    l = n || s,
    u = Zt(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      l1(v3(o, ['children']))
    ),
    c = _.useRef({})
  if (l) {
    const f = J2(l)(u)
    T3(c.current, f) || (c.current = f)
  }
  return c.current
}
function Lo(e, t = {}) {
  return c1(e, t)
}
function P3(e, t = {}) {
  return c1(e, t)
}
var E3 = new Set([
    ...N2,
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
  $3 = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function A3(e) {
  return $3.has(e) || !E3.has(e)
}
function R3(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object')
  const r = { ...e }
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], (r[o] = n[o]))
  return r
}
var z3 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  M3 = Cg(function (e) {
    return (
      z3.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  }),
  D3 = M3,
  L3 = function (t) {
    return t !== 'theme'
  },
  Qm = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? D3 : L3
  },
  Xm = function (t, r, n) {
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
  F3 = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag
    return (
      $g(r, n, o),
      hw(function () {
        return Ag(r, n, o)
      }),
      null
    )
  },
  B3 = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a
    r !== void 0 && ((i = r.label), (a = r.target))
    var s = Xm(t, r, n),
      l = s || Qm(o),
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
      var v = Dg(function (S, C, g) {
        var p = (u && S.as) || o,
          y = '',
          w = [],
          T = S
        if (S.theme == null) {
          T = {}
          for (var A in S) T[A] = S[A]
          T.theme = _.useContext(Ri)
        }
        typeof S.className == 'string'
          ? (y = sw(C.registered, w, S.className))
          : S.className != null && (y = S.className + ' ')
        var P = Jd(d.concat(w), C.registered, T)
        ;(y += C.key + '-' + P.name), a !== void 0 && (y += ' ' + a)
        var E = u && s === void 0 ? Qm(p) : l,
          B = {}
        for (var L in S) (u && L === 'as') || (E(L) && (B[L] = S[L]))
        return (
          (B.className = y),
          (B.ref = g),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(F3, { cache: C, serialized: P, isStringTag: typeof p == 'string' }),
            _.createElement(p, B)
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
          return e(S, Es({}, r, C, { shouldForwardProp: Xm(v, C, !0) })).apply(void 0, d)
        }),
        v
      )
    }
  },
  I3 = [
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
  il = B3.bind()
I3.forEach(function (e) {
  il[e] = il(e)
})
var qm,
  V3 = (qm = il.default) != null ? qm : il,
  O3 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = s1(a, (d, f) => W2(f)),
        l = u1(e, t),
        u = R3({}, o, l, l1(s), i),
        c = Hv(u)(t.theme)
      return n ? [c, n] : c
    }
function oc(e, t) {
  const { baseStyle: r, ...n } = t ?? {}
  n.shouldForwardProp || (n.shouldForwardProp = A3)
  const o = O3({ baseStyle: r }),
    i = V3(e, n)(o)
  return An.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Kf()
    return An.createElement(i, { 'ref': u, 'data-theme': d ? c : void 0, ...l })
  })
}
function N3() {
  const e = new Map()
  return new Proxy(oc, {
    apply(t, r, n) {
      return oc(...n)
    },
    get(t, r) {
      return e.has(r) || e.set(r, oc(r)), e.get(r)
    },
  })
}
var st = N3()
function _r(e) {
  return _.forwardRef(e)
}
function j3(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: n,
    } = e,
    o = _.createContext(void 0)
  o.displayName = n
  function i() {
    var a
    const s = _.useContext(o)
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
function W3(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = _.useMemo(() => O2(r), [r])
  return Jr(yw, { theme: o, children: [z(U3, { root: t }), n] })
}
function U3({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',')
  return z($l, { styles: (r) => ({ [t]: r.__cssVars }) })
}
j3({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function H3() {
  const { colorMode: e } = Kf()
  return z($l, {
    styles: (t) => {
      const r = a1(t, 'styles.global'),
        n = u1(r, { theme: t, colorMode: e })
      return n ? Hv(n)(t) : void 0
    },
  })
}
var d1 = _.createContext({
  getDocument() {
    return document
  },
  getWindow() {
    return window
  },
})
d1.displayName = 'EnvironmentContext'
function f1(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = _.useRef(null),
    i = _.useMemo(
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
  return Jr(d1.Provider, {
    value: i,
    children: [t, a && z('span', { id: '__chakra_env', hidden: !0, ref: o })],
  })
}
f1.displayName = 'EnvironmentProvider'
var G3 = (e) => {
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
      c = z(f1, { environment: s, disabled: u, children: t })
    return z(W3, {
      theme: a,
      cssVarsRoot: l,
      children: Jr(Vv, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? z(xw, { scope: o }) : z(bw, {}),
          z(H3, {}),
          n ? z(Bg, { zIndex: n, children: c }) : c,
        ],
      }),
    })
  },
  K3 = (e, t) => e.find((r) => r.id === t)
function Zm(e, t) {
  const r = p1(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1
  return { position: r, index: n }
}
function p1(e, t) {
  for (const [r, n] of Object.entries(e)) if (K3(n, t)) return r
}
function Y3(e) {
  const t = e.includes('right'),
    r = e.includes('left')
  let n = 'center'
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  )
}
function Q3(e) {
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
function X3(e, t = []) {
  const r = _.useRef(e)
  return (
    _.useEffect(() => {
      r.current = e
    }),
    _.useCallback((...n) => {
      var o
      return (o = r.current) == null ? void 0 : o.call(r, ...n)
    }, t)
  )
}
function q3(e, t) {
  const r = X3(e)
  _.useEffect(() => {
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
function Jm(e, t) {
  const r = _.useRef(!1),
    n = _.useRef(!1)
  _.useEffect(() => {
    if (r.current && n.current) return e()
    n.current = !0
  }, t),
    _.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1
        }
      ),
      []
    )
}
const h1 = _.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  Xl = _.createContext({}),
  pa = _.createContext(null),
  ql = typeof document < 'u',
  al = ql ? _.useLayoutEffect : _.useEffect,
  m1 = _.createContext({ strict: !1 })
function Z3(e, t, r, n) {
  const { visualElement: o } = _.useContext(Xl),
    i = _.useContext(m1),
    a = _.useContext(pa),
    s = _.useContext(h1).reducedMotion,
    l = _.useRef()
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
    _.useInsertionEffect(() => {
      u && u.update(r, a)
    }),
    al(() => {
      u && u.render()
    }),
    _.useEffect(() => {
      u && u.updateFeatures()
    }),
    (window.HandoffAppearAnimations ? al : _.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges()
    }),
    u
  )
}
function io(e) {
  return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function J3(e, t, r) {
  return _.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : io(r) && (r.current = n))
    },
    [t]
  )
}
function ea(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function Zl(e) {
  return typeof e == 'object' && typeof e.start == 'function'
}
const rp = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  np = ['initial', ...rp]
function Jl(e) {
  return Zl(e.animate) || np.some((t) => ea(e[t]))
}
function g1(e) {
  return !!(Jl(e) || e.variants)
}
function e4(e, t) {
  if (Jl(e)) {
    const { initial: r, animate: n } = e
    return { initial: r === !1 || ea(r) ? r : void 0, animate: ea(n) ? n : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function t4(e) {
  const { initial: t, animate: r } = e4(e, _.useContext(Xl))
  return _.useMemo(() => ({ initial: t, animate: r }), [e0(t), e0(r)])
}
function e0(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const t0 = {
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
  ta = {}
for (const e in t0) ta[e] = { isEnabled: (t) => t0[e].some((r) => !!t[r]) }
function r4(e) {
  for (const t in e) ta[t] = { ...ta[t], ...e[t] }
}
function op(e) {
  const t = _.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const xi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
let n4 = 1
function o4() {
  return op(() => {
    if (xi.hasEverUpdated) return n4++
  })
}
const ip = _.createContext({}),
  y1 = _.createContext({}),
  i4 = Symbol.for('motionComponentSymbol')
function a4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && r4(e)
  function i(s, l) {
    let u
    const c = { ..._.useContext(h1), ...s, layoutId: s4(s) },
      { isStatic: d } = c,
      f = t4(s),
      h = d ? void 0 : o4(),
      v = n(s, d)
    if (!d && ql) {
      f.visualElement = Z3(o, v, c, t)
      const S = _.useContext(y1),
        C = _.useContext(m1).strict
      f.visualElement && (u = f.visualElement.loadFeatures(c, C, e, h, S))
    }
    return _.createElement(
      Xl.Provider,
      { value: f },
      u && f.visualElement ? _.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, h, J3(v, f.visualElement, l), v, d, f.visualElement)
    )
  }
  const a = _.forwardRef(i)
  return (a[i4] = o), a
}
function s4({ layoutId: e }) {
  const t = _.useContext(ip).id
  return t && e !== void 0 ? t + '-' + e : e
}
function l4(e) {
  function t(n, o = {}) {
    return a4(e(n, o))
  }
  if (typeof Proxy > 'u') return t
  const r = new Map()
  return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) })
}
const u4 = [
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
function ap(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(u4.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const sl = {}
function c4(e) {
  Object.assign(sl, e)
}
const eu = [
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
  Vn = new Set(eu)
function v1(e, { layout: t, layoutId: r }) {
  return (
    Vn.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!sl[e] || e === 'opacity'))
  )
}
const lt = (e) => !!(e && e.getVelocity),
  d4 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  f4 = eu.length
function p4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = ''
  for (let a = 0; a < f4; a++) {
    const s = eu[a]
    if (e[s] !== void 0) {
      const l = d4[s] || s
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
const S1 = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  b1 = S1('--'),
  _d = S1('var(--'),
  h4 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Fn = (e, t, r) => Math.min(Math.max(r, e), t),
  On = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  wi = { ...On, transform: (e) => Fn(0, 1, e) },
  ts = { ...On, default: 1 },
  ki = (e) => Math.round(e * 1e5) / 1e5,
  ra = /(-)?([\d]*\.?[\d])+/g,
  Td =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  m4 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function ha(e) {
  return typeof e == 'string'
}
const ma = (e) => ({
    test: (t) => ha(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  zr = ma('deg'),
  nr = ma('%'),
  I = ma('px'),
  g4 = ma('vh'),
  y4 = ma('vw'),
  r0 = { ...nr, parse: (e) => nr.parse(e) / 100, transform: (e) => nr.transform(e * 100) },
  n0 = { ...On, transform: Math.round },
  x1 = {
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
    rotate: zr,
    rotateX: zr,
    rotateY: zr,
    rotateZ: zr,
    scale: ts,
    scaleX: ts,
    scaleY: ts,
    scaleZ: ts,
    skew: zr,
    skewX: zr,
    skewY: zr,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: wi,
    originX: r0,
    originY: r0,
    originZ: I,
    zIndex: n0,
    fillOpacity: wi,
    strokeOpacity: wi,
    numOctaves: n0,
  }
function sp(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e
  let l = !1,
    u = !1,
    c = !0
  for (const d in t) {
    const f = t[d]
    if (b1(d)) {
      i[d] = f
      continue
    }
    const h = x1[d],
      v = h4(f, h)
    if (Vn.has(d)) {
      if (((l = !0), (a[d] = v), !c)) continue
      f !== (h.default || 0) && (c = !1)
    } else d.startsWith('origin') ? ((u = !0), (s[d] = v)) : (o[d] = v)
  }
  if (
    (t.transform ||
      (l || n ? (o.transform = p4(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: h = 0 } = s
    o.transformOrigin = `${d} ${f} ${h}`
  }
}
const lp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function w1(e, t, r) {
  for (const n in t) !lt(t[n]) && !v1(n, r) && (e[n] = t[n])
}
function v4({ transformTemplate: e }, t, r) {
  return _.useMemo(() => {
    const n = lp()
    return sp(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function S4(e, t, r) {
  const n = e.style || {},
    o = {}
  return w1(o, n, e), Object.assign(o, v4(e, t, r)), e.transformValues ? e.transformValues(o) : o
}
function b4(e, t, r) {
  const n = {},
    o = S4(e, t, r)
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
const x4 = new Set([
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
function ll(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    x4.has(e)
  )
}
let k1 = (e) => !ll(e)
function w4(e) {
  e && (k1 = (t) => (t.startsWith('on') ? !ll(t) : e(t)))
}
try {
  w4(require('@emotion/is-prop-valid').default)
} catch {}
function k4(e, t, r) {
  const n = {}
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((k1(o) ||
        (r === !0 && ll(o)) ||
        (!t && !ll(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]))
  return n
}
function o0(e, t, r) {
  return typeof e == 'string' ? e : I.transform(t + r * e)
}
function C4(e, t, r) {
  const n = o0(t, e.x, e.width),
    o = o0(r, e.y, e.height)
  return `${n} ${o}`
}
const _4 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  T4 = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function P4(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1
  const i = o ? _4 : T4
  e[i.offset] = I.transform(-n)
  const a = I.transform(t),
    s = I.transform(r)
  e[i.array] = `${a} ${s}`
}
function up(
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
  if ((sp(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: h, dimensions: v } = e
  f.transform && (v && (h.transform = f.transform), delete f.transform),
    v &&
      (n !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = C4(v, n !== void 0 ? n : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && P4(f, i, a, s, !1)
}
const C1 = () => ({ ...lp(), attrs: {} }),
  cp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function E4(e, t, r, n) {
  const o = _.useMemo(() => {
    const i = C1()
    return (
      up(i, t, { enableHardwareAcceleration: !1 }, cp(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    )
  }, [t])
  if (e.style) {
    const i = {}
    w1(i, e.style, e), (o.style = { ...i, ...o.style })
  }
  return o
}
function $4(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const u = (ap(r) ? E4 : b4)(n, a, s, r),
      d = { ...k4(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      h = _.useMemo(() => (lt(f) ? f.get() : f), [f])
    return o && (d['data-projection-id'] = o), _.createElement(r, { ...d, children: h })
  }
}
const dp = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function _1(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n))
  for (const i in r) e.style.setProperty(i, r[i])
}
const T1 = new Set([
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
function P1(e, t, r, n) {
  _1(e, t, void 0, n)
  for (const o in t.attrs) e.setAttribute(T1.has(o) ? o : dp(o), t.attrs[o])
}
function fp(e, t) {
  const { style: r } = e,
    n = {}
  for (const o in r) (lt(r[o]) || (t.style && lt(t.style[o])) || v1(o, e)) && (n[o] = r[o])
  return n
}
function E1(e, t) {
  const r = fp(e, t)
  for (const n in e)
    if (lt(e[n]) || lt(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n
      r[o] = e[n]
    }
  return r
}
function pp(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  )
}
const ul = (e) => Array.isArray(e),
  A4 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  R4 = (e) => (ul(e) ? e[e.length - 1] || 0 : e)
function _s(e) {
  const t = lt(e) ? e.get() : e
  return A4(t) ? t.toValue() : t
}
function z4({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = { latestValues: M4(n, o, i, e), renderState: t() }
  return r && (a.mount = (s) => r(n, s, a)), a
}
const $1 = (e) => (t, r) => {
  const n = _.useContext(Xl),
    o = _.useContext(pa),
    i = () => z4(e, t, n, o)
  return r ? i() : op(i)
}
function M4(e, t, r, n) {
  const o = {},
    i = n(e, {})
  for (const f in i) o[f] = _s(i[f])
  let { initial: a, animate: s } = e
  const l = Jl(e),
    u = g1(e)
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
      !Zl(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const v = pp(e, h)
        if (!v) return
        const { transitionEnd: S, transition: C, ...g } = v
        for (const p in g) {
          let y = g[p]
          if (Array.isArray(y)) {
            const w = c ? y.length - 1 : 0
            y = y[w]
          }
          y !== null && (o[p] = y)
        }
        for (const p in S) o[p] = S[p]
      }),
    o
  )
}
const D4 = {
    useVisualState: $1({
      scrapeMotionValuesFromProps: E1,
      createRenderState: C1,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
        }
        up(r, n, { enableHardwareAcceleration: !1 }, cp(t.tagName), e.transformTemplate), P1(t, r)
      },
    }),
  },
  L4 = { useVisualState: $1({ scrapeMotionValuesFromProps: fp, createRenderState: lp }) }
function F4(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(ap(e) ? D4 : L4),
    preloadedFeatures: r,
    useRender: $4(t),
    createVisualElement: n,
    Component: e,
  }
}
function pr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r)
}
const A1 = (e) =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function tu(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const B4 = (e) => (t) => A1(t) && e(t, tu(t))
function gr(e, t, r, n) {
  return pr(e, t, B4(r), n)
}
const I4 = (e, t) => (r) => t(e(r)),
  qr = (...e) => e.reduce(I4)
function R1(e) {
  let t = null
  return () => {
    const r = () => {
      t = null
    }
    return t === null ? ((t = e), r) : !1
  }
}
const i0 = R1('dragHorizontal'),
  a0 = R1('dragVertical')
function z1(e) {
  let t = !1
  if (e === 'y') t = a0()
  else if (e === 'x') t = i0()
  else {
    const r = i0(),
      n = a0()
    r && n
      ? (t = () => {
          r(), n()
        })
      : (r && r(), n && n())
  }
  return t
}
function M1() {
  const e = z1(!0)
  return e ? (e(), !1) : !0
}
class ln {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function V4(e) {
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
const We = { delta: 0, timestamp: 0, isProcessing: !1 },
  O4 = 40
let Pd = !0,
  na = !1
const ga = ['read', 'update', 'preRender', 'render', 'postRender'],
  ru = ga.reduce((e, t) => ((e[t] = V4(() => (na = !0))), e), {}),
  fe = ga.reduce((e, t) => {
    const r = ru[t]
    return (e[t] = (n, o = !1, i = !1) => (na || j4(), r.schedule(n, o, i))), e
  }, {}),
  rn = ga.reduce((e, t) => ((e[t] = ru[t].cancel), e), {}),
  ic = ga.reduce((e, t) => ((e[t] = () => ru[t].process(We)), e), {}),
  N4 = (e) => ru[e].process(We),
  D1 = (e) => {
    ;(na = !1),
      (We.delta = Pd ? 1e3 / 60 : Math.max(Math.min(e - We.timestamp, O4), 1)),
      (We.timestamp = e),
      (We.isProcessing = !0),
      ga.forEach(N4),
      (We.isProcessing = !1),
      na && ((Pd = !1), requestAnimationFrame(D1))
  },
  j4 = () => {
    ;(na = !0), (Pd = !0), We.isProcessing || requestAnimationFrame(D1)
  }
function s0(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || M1()) return
      const s = e.getProps()
      e.animationState && s.whileHover && e.animationState.setActive('whileHover', t),
        s[n] && fe.update(() => s[n](i, a))
    }
  return gr(e.current, r, o, { passive: !e.getProps()[n] })
}
class W4 extends ln {
  mount() {
    this.unmount = qr(s0(this.node, !0), s0(this.node, !1))
  }
  unmount() {}
}
class U4 extends ln {
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
    this.unmount = qr(
      pr(this.node.current, 'focus', () => this.onFocus()),
      pr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const L1 = (e, t) => (t ? (e === t ? !0 : L1(e, t.parentElement)) : !1),
  Ae = (e) => e
function ac(e, t) {
  if (!t) return
  const r = new PointerEvent('pointer' + e)
  t(r, tu(r))
}
class H4 extends ln {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ae),
      (this.removeEndListeners = Ae),
      (this.removeAccessibleListeners = Ae),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const n = this.node.getProps(),
          i = gr(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c } = this.node.getProps()
              fe.update(() => {
                L1(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
              })
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = gr(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          })
        ;(this.removeEndListeners = qr(i, a)), this.startPress(t, r)
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                ac('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && fe.update(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = pr(this.node.current, 'keyup', a)),
              ac('down', (s, l) => {
                this.startPress(s, l)
              })
          },
          r = pr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && ac('cancel', (i, a) => this.cancelPress(i, a))
          },
          o = pr(this.node.current, 'blur', n)
        this.removeAccessibleListeners = qr(r, o)
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
      !M1()
    )
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: n } = this.node.getProps()
    n && fe.update(() => n(t, r))
  }
  mount() {
    const t = this.node.getProps(),
      r = gr(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = pr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = qr(r, n)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const Ed = new WeakMap(),
  sc = new WeakMap(),
  G4 = (e) => {
    const t = Ed.get(e.target)
    t && t(e)
  },
  K4 = (e) => {
    e.forEach(G4)
  }
function Y4({ root: e, ...t }) {
  const r = e || document
  sc.has(r) || sc.set(r, {})
  const n = sc.get(r),
    o = JSON.stringify(t)
  return n[o] || (n[o] = new IntersectionObserver(K4, { root: e, ...t })), n[o]
}
function Q4(e, t, r) {
  const n = Y4(t)
  return (
    Ed.set(e, r),
    n.observe(e),
    () => {
      Ed.delete(e), n.unobserve(e)
    }
  )
}
const X4 = { some: 0, all: 1 }
class q4 extends ln {
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
        threshold: typeof o == 'number' ? o : X4[o],
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
    return Q4(this.node.current, a, s)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: r } = this.node
    ;['amount', 'margin', 'root'].some(Z4(t, r)) && this.startObserver()
  }
  unmount() {}
}
function Z4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r]
}
const J4 = {
  inView: { Feature: q4 },
  tap: { Feature: H4 },
  focus: { Feature: U4 },
  hover: { Feature: W4 },
}
function F1(e, t) {
  if (!Array.isArray(t)) return !1
  const r = t.length
  if (r !== e.length) return !1
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
  return !0
}
function eA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.get())), t
}
function tA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t
}
function nu(e, t, r) {
  const n = e.getProps()
  return pp(n, t, r !== void 0 ? r : n.custom, eA(e), tA(e))
}
const rA = 'framerAppearId',
  nA = 'data-' + dp(rA)
let oA = Ae,
  hp = Ae
const Zr = (e) => e * 1e3,
  yr = (e) => e / 1e3,
  iA = { current: !1 },
  B1 = (e) => Array.isArray(e) && typeof e[0] == 'number'
function I1(e) {
  return !!(!e || (typeof e == 'string' && V1[e]) || B1(e) || (Array.isArray(e) && e.every(I1)))
}
const ai = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  V1 = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  }
function O1(e) {
  if (e) return B1(e) ? ai(e) : Array.isArray(e) ? e.map(O1) : V1[e]
}
function aA(
  e,
  t,
  r,
  { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}
) {
  const u = { [t]: r }
  l && (u.offset = l)
  const c = O1(s)
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
const l0 = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  lc = {},
  N1 = {}
for (const e in l0) N1[e] = () => (lc[e] === void 0 && (lc[e] = l0[e]()), lc[e])
function sA(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[n]
}
const j1 = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  lA = 1e-7,
  uA = 12
function cA(e, t, r, n, o) {
  let i,
    a,
    s = 0
  do (a = t + (r - t) / 2), (i = j1(a, n, o) - e), i > 0 ? (r = a) : (t = a)
  while (Math.abs(i) > lA && ++s < uA)
  return a
}
function ya(e, t, r, n) {
  if (e === t && r === n) return Ae
  const o = (i) => cA(i, 0, 1, e, r)
  return (i) => (i === 0 || i === 1 ? i : j1(o(i), t, n))
}
const dA = ya(0.42, 0, 1, 1),
  fA = ya(0, 0, 0.58, 1),
  W1 = ya(0.42, 0, 0.58, 1),
  pA = (e) => Array.isArray(e) && typeof e[0] != 'number',
  U1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  H1 = (e) => (t) => 1 - e(1 - t),
  G1 = (e) => 1 - Math.sin(Math.acos(e)),
  mp = H1(G1),
  hA = U1(mp),
  K1 = ya(0.33, 1.53, 0.69, 0.99),
  gp = H1(K1),
  mA = U1(gp),
  gA = (e) => ((e *= 2) < 1 ? 0.5 * gp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  yA = {
    linear: Ae,
    easeIn: dA,
    easeInOut: W1,
    easeOut: fA,
    circIn: G1,
    circInOut: hA,
    circOut: mp,
    backIn: gp,
    backInOut: mA,
    backOut: K1,
    anticipate: gA,
  },
  u0 = (e) => {
    if (Array.isArray(e)) {
      hp(e.length === 4)
      const [t, r, n, o] = e
      return ya(t, r, n, o)
    } else if (typeof e == 'string') return yA[e]
    return e
  },
  yp = (e, t) => (r) =>
    !!(
      (ha(r) && m4.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Y1 = (e, t, r) => (n) => {
    if (!ha(n)) return n
    const [o, i, a, s] = n.match(ra)
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    }
  },
  vA = (e) => Fn(0, 255, e),
  uc = { ...On, transform: (e) => Math.round(vA(e)) },
  Cn = {
    test: yp('rgb', 'red'),
    parse: Y1('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      uc.transform(e) +
      ', ' +
      uc.transform(t) +
      ', ' +
      uc.transform(r) +
      ', ' +
      ki(wi.transform(n)) +
      ')',
  }
function SA(e) {
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
const $d = { test: yp('#'), parse: SA, transform: Cn.transform },
  ao = {
    test: yp('hsl', 'hue'),
    parse: Y1('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      nr.transform(ki(t)) +
      ', ' +
      nr.transform(ki(r)) +
      ', ' +
      ki(wi.transform(n)) +
      ')',
  },
  He = {
    test: (e) => Cn.test(e) || $d.test(e) || ao.test(e),
    parse: (e) => (Cn.test(e) ? Cn.parse(e) : ao.test(e) ? ao.parse(e) : $d.parse(e)),
    transform: (e) => (ha(e) ? e : e.hasOwnProperty('red') ? Cn.transform(e) : ao.transform(e)),
  },
  ye = (e, t, r) => -r * e + r * t + e
function cc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  )
}
function bA({ hue: e, saturation: t, lightness: r, alpha: n }) {
  ;(e /= 360), (t /= 100), (r /= 100)
  let o = 0,
    i = 0,
    a = 0
  if (!t) o = i = a = r
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s
    ;(o = cc(l, s, e + 1 / 3)), (i = cc(l, s, e)), (a = cc(l, s, e - 1 / 3))
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  }
}
const dc = (e, t, r) => {
    const n = e * e
    return Math.sqrt(Math.max(0, r * (t * t - n) + n))
  },
  xA = [$d, Cn, ao],
  wA = (e) => xA.find((t) => t.test(e))
function c0(e) {
  const t = wA(e)
  let r = t.parse(e)
  return t === ao && (r = bA(r)), r
}
const Q1 = (e, t) => {
    const r = c0(e),
      n = c0(t),
      o = { ...r }
    return (i) => (
      (o.red = dc(r.red, n.red, i)),
      (o.green = dc(r.green, n.green, i)),
      (o.blue = dc(r.blue, n.blue, i)),
      (o.alpha = ye(r.alpha, n.alpha, i)),
      Cn.transform(o)
    )
  },
  X1 = '${c}',
  q1 = '${n}'
function kA(e) {
  var t, r
  return (
    isNaN(e) &&
    ha(e) &&
    (((t = e.match(ra)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Td)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  )
}
function cl(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let r = 0,
    n = 0
  const o = e.match(Td)
  o && ((r = o.length), (e = e.replace(Td, X1)), t.push(...o.map(He.parse)))
  const i = e.match(ra)
  return (
    i && ((n = i.length), (e = e.replace(ra, q1)), t.push(...i.map(On.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  )
}
function Z1(e) {
  return cl(e).values
}
function J1(e) {
  const { values: t, numColors: r, tokenised: n } = cl(e),
    o = t.length
  return (i) => {
    let a = n
    for (let s = 0; s < o; s++)
      a = a.replace(s < r ? X1 : q1, s < r ? He.transform(i[s]) : ki(i[s]))
    return a
  }
}
const CA = (e) => (typeof e == 'number' ? 0 : e)
function _A(e) {
  const t = Z1(e)
  return J1(e)(t.map(CA))
}
const nn = { test: kA, parse: Z1, createTransformer: J1, getAnimatableNone: _A }
function eS(e, t) {
  return typeof e == 'number' ? (r) => ye(e, t, r) : He.test(e) ? Q1(e, t) : rS(e, t)
}
const tS = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => eS(i, t[a]))
    return (i) => {
      for (let a = 0; a < n; a++) r[a] = o[a](i)
      return r
    }
  },
  TA = (e, t) => {
    const r = { ...e, ...t },
      n = {}
    for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = eS(e[o], t[o]))
    return (o) => {
      for (const i in n) r[i] = n[i](o)
      return r
    }
  },
  rS = (e, t) => {
    const r = nn.createTransformer(t),
      n = cl(e),
      o = cl(t)
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? qr(tS(n.values, o.values), r)
      : (a) => `${a > 0 ? t : e}`
  },
  oa = (e, t, r) => {
    const n = t - e
    return n === 0 ? 1 : (r - e) / n
  },
  d0 = (e, t) => (r) => ye(e, t, r)
function PA(e) {
  return typeof e == 'number'
    ? d0
    : typeof e == 'string'
    ? He.test(e)
      ? Q1
      : rS
    : Array.isArray(e)
    ? tS
    : typeof e == 'object'
    ? TA
    : d0
}
function EA(e, t, r) {
  const n = [],
    o = r || PA(e[0]),
    i = e.length - 1
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1])
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ae : t
      s = qr(l, s)
    }
    n.push(s)
  }
  return n
}
function nS(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length
  if ((hp(i === t.length), i === 1)) return () => t[0]
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const a = EA(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = oa(e[c], e[c + 1], u)
      return a[c](d)
    }
  return r ? (u) => l(Fn(e[0], e[i - 1], u)) : l
}
function $A(e, t) {
  const r = e[e.length - 1]
  for (let n = 1; n <= t; n++) {
    const o = oa(0, t, n)
    e.push(ye(r, 1, o))
  }
}
function AA(e) {
  const t = [0]
  return $A(t, e.length - 1), t
}
function RA(e, t) {
  return e.map((r) => r * t)
}
function zA(e, t) {
  return e.map(() => t || W1).splice(0, e.length - 1)
}
function dl({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
  const o = pA(n) ? n.map(u0) : u0(n),
    i = { done: !1, value: t[0] },
    a = RA(r && r.length === t.length ? r : AA(t), e),
    s = nS(a, t, { ease: Array.isArray(o) ? o : zA(t, o) })
  return { calculatedDuration: e, next: (l) => ((i.value = s(l)), (i.done = l >= e), i) }
}
function oS(e, t) {
  return t ? e * (1e3 / t) : 0
}
const MA = 5
function iS(e, t, r) {
  const n = Math.max(t - MA, 0)
  return oS(r - e(n), t - n)
}
const fc = 0.001,
  DA = 0.01,
  f0 = 10,
  LA = 0.05,
  FA = 1
function BA({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i
  oA(e <= Zr(f0))
  let a = 1 - t
  ;(a = Fn(LA, FA, a)),
    (e = Fn(DA, f0, yr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            h = Ad(u, a),
            v = Math.exp(-d)
          return fc - (f / h) * v
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            S = Ad(Math.pow(u, 2), a)
          return ((-o(u) + fc > 0 ? -1 : 1) * ((f - h) * v)) / S
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1
          return -fc + c * d
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e)
          return c * d
        }))
  const s = 5 / e,
    l = VA(o, i, s)
  if (((e = Zr(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * n
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e }
  }
}
const IA = 12
function VA(e, t, r) {
  let n = r
  for (let o = 1; o < IA; o++) n = n - e(n) / t(n)
  return n
}
function Ad(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const OA = ['duration', 'bounce'],
  NA = ['stiffness', 'damping', 'mass']
function p0(e, t) {
  return t.some((r) => e[r] !== void 0)
}
function jA(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!p0(e, NA) && p0(e, OA)) {
    const r = BA(e)
    ;(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function aS({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
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
    } = jA(n),
    h = c ? -yr(c) : 0,
    v = l / (2 * Math.sqrt(s * u)),
    S = i - o,
    C = yr(Math.sqrt(s / u)),
    g = Math.abs(S) < 5
  r || (r = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5)
  let p
  if (v < 1) {
    const y = Ad(C, v)
    p = (w) => {
      const T = Math.exp(-v * C * w)
      return i - T * (((h + v * C * S) / y) * Math.sin(y * w) + S * Math.cos(y * w))
    }
  } else if (v === 1) p = (y) => i - Math.exp(-C * y) * (S + (h + C * S) * y)
  else {
    const y = C * Math.sqrt(v * v - 1)
    p = (w) => {
      const T = Math.exp(-v * C * w),
        A = Math.min(y * w, 300)
      return i - (T * ((h + v * C * S) * Math.sinh(A) + y * S * Math.cosh(A))) / y
    }
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (y) => {
      const w = p(y)
      if (f) a.done = y >= d
      else {
        let T = h
        y !== 0 && (v < 1 ? (T = iS(p, y, w)) : (T = 0))
        const A = Math.abs(T) <= r,
          P = Math.abs(i - w) <= t
        a.done = A && P
      }
      return (a.value = a.done ? i : w), a
    },
  }
}
function h0({
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
    g = a === void 0 ? C : a(C)
  g !== C && (S = g - d)
  const p = (E) => -S * Math.exp(-E / n),
    y = (E) => g + p(E),
    w = (E) => {
      const B = p(E),
        L = y(E)
      ;(f.done = Math.abs(B) <= u), (f.value = f.done ? g : L)
    }
  let T, A
  const P = (E) => {
    h(f.value) &&
      ((T = E),
      (A = aS({
        keyframes: [f.value, v(f.value)],
        velocity: iS(y, E, f.value),
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
        let B = !1
        return (
          !A && T === void 0 && ((B = !0), w(E), P(E)),
          T !== void 0 && E > T ? A.next(E - T) : (!B && w(E), f)
        )
      },
    }
  )
}
const WA = (e) => {
    const t = ({ timestamp: r }) => e(r)
    return {
      start: () => fe.update(t, !0),
      stop: () => rn.update(t),
      now: () => (We.isProcessing ? We.timestamp : performance.now()),
    }
  },
  UA = { decay: h0, inertia: h0, tween: dl, keyframes: dl, spring: aS },
  m0 = 2e4
function g0(e) {
  let t = 0
  const r = 50
  let n = e.next(t)
  for (; !n.done && t < m0; ) (t += r), (n = e.next(t))
  return t >= m0 ? 1 / 0 : t
}
function fl({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = WA,
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
  const g = () => {
    S && S(),
      (C = new Promise((O) => {
        S = O
      }))
  }
  g()
  let p
  const y = UA[o] || dl
  let w
  y !== dl && typeof n[0] != 'number' && ((w = nS([0, 100], n, { clamp: !1 })), (n = [0, 100]))
  const T = y({ ...f, keyframes: n })
  let A
  s === 'mirror' && (A = y({ ...f, keyframes: [...n].reverse(), velocity: -(f.velocity || 0) }))
  let P = 'idle',
    E = null,
    B = null,
    L = null
  T.calculatedDuration === null && i && (T.calculatedDuration = g0(T))
  const { calculatedDuration: pe } = T
  let Ie = 1 / 0,
    Ze = 1 / 0
  pe !== null && ((Ie = pe + a), (Ze = Ie * (i + 1) - a))
  let he = 0
  const me = (O) => {
      if (B === null) return
      h > 0 && (B = Math.min(B, O)), E !== null ? (he = E) : (he = (O - B) * h)
      const oe = he - t,
        G = oe < 0
      ;(he = Math.max(oe, 0)), P === 'finished' && E === null && (he = Ze)
      let ut = he,
        Tr = T
      if (i) {
        const Nn = he / Ie
        let Pr = Math.floor(Nn),
          Wt = Nn % 1
        !Wt && Nn >= 1 && (Wt = 1), Wt === 1 && Pr--, (Pr = Math.min(Pr, i + 1))
        const Fo = !!(Pr % 2)
        Fo && (s === 'reverse' ? ((Wt = 1 - Wt), a && (Wt -= a / Ie)) : s === 'mirror' && (Tr = A))
        let Sa = Fn(0, 1, Wt)
        he > Ze && (Sa = s === 'reverse' && Fo ? 1 : 0), (ut = Sa * Ie)
      }
      const _e = G ? { done: !1, value: n[0] } : Tr.next(ut)
      w && (_e.value = w(_e.value))
      let { done: jt } = _e
      !G && pe !== null && (jt = he >= Ze)
      const un = E === null && (P === 'finished' || (P === 'running' && jt) || (h < 0 && he <= 0))
      return d && d(_e.value), un && R(), _e
    },
    Je = () => {
      p && p.stop(), (p = void 0)
    },
    xt = () => {
      ;(P = 'idle'), Je(), g(), (B = L = null)
    },
    R = () => {
      ;(P = 'finished'), c && c(), Je(), g()
    },
    V = () => {
      if (v) return
      p || (p = r(me))
      const O = p.now()
      l && l(),
        (P = 'running'),
        E !== null ? (B = O - E) : B || (B = O),
        (L = B),
        (E = null),
        p.start()
    }
  e && V()
  const N = {
    then(O, oe) {
      return C.then(O, oe)
    },
    get time() {
      return yr(he)
    },
    set time(O) {
      ;(O = Zr(O)), (he = O), E !== null || !p || h === 0 ? (E = O) : (B = p.now() - O / h)
    },
    get duration() {
      const O = T.calculatedDuration === null ? g0(T) : T.calculatedDuration
      return yr(O)
    },
    get speed() {
      return h
    },
    set speed(O) {
      O === h || !p || ((h = O), (N.time = yr(he)))
    },
    get state() {
      return P
    },
    play: V,
    pause: () => {
      ;(P = 'paused'), (E = he)
    },
    stop: () => {
      ;(v = !0), P !== 'idle' && ((P = 'idle'), u && u(), xt())
    },
    cancel: () => {
      L !== null && me(L), xt()
    },
    complete: () => {
      P = 'finished'
    },
    sample: (O) => ((B = 0), me(O)),
  }
  return N
}
const HA = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  rs = 10,
  GA = 2e4,
  KA = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !I1(t.ease)
function YA(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      N1.waapi() &&
      HA.has(t) &&
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
  if (KA(t, o)) {
    const S = fl({ ...o, repeat: 0, delay: 0 })
    let C = { done: !1, value: c[0] }
    const g = []
    let p = 0
    for (; !C.done && p < GA; ) (C = S.sample(p)), g.push(C.value), (p += rs)
    ;(c = g), (d = p - rs), (f = 'linear')
  }
  const h = aA(e.owner.current, t, c, { ...o, duration: d, ease: f }),
    v = () => {
      fe.update(() => h.cancel()), s(), u()
    }
  return (
    (h.onfinish = () => {
      e.set(sA(c, o)), n && n(), v()
    }),
    {
      then(S, C) {
        return l.then(S, C)
      },
      get time() {
        return yr(h.currentTime || 0)
      },
      set time(S) {
        h.currentTime = Zr(S)
      },
      get speed() {
        return h.playbackRate
      },
      set speed(S) {
        h.playbackRate = S
      },
      get duration() {
        return yr(d)
      },
      play: () => {
        a || h.play()
      },
      pause: () => h.pause(),
      stop: () => {
        if (((a = !0), h.playState === 'idle')) return
        const { currentTime: S } = h
        if (S) {
          const C = fl({ ...o, autoplay: !1 })
          e.setWithVelocity(C.sample(S - rs).value, C.sample(S).value, rs)
        }
        v()
      },
      complete: () => h.finish(),
      cancel: v,
    }
  )
}
function QA({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ae,
      pause: Ae,
      stop: Ae,
      then: (i) => (i(), Promise.resolve()),
      cancel: Ae,
      complete: Ae,
    }
  )
  return t ? fl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o()
}
const XA = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  qA = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ZA = { type: 'keyframes', duration: 0.8 },
  JA = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  eR = (e, { keyframes: t }) =>
    t.length > 2 ? ZA : Vn.has(e) ? (e.startsWith('scale') ? qA(t[1]) : XA) : JA,
  Rd = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && nn.test(t) && !t.startsWith('url('))
        ),
  tR = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function rR(e) {
  const [t, r] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [n] = r.match(ra) || []
  if (!n) return e
  const o = r.replace(n, '')
  let i = tR.has(t) ? 1 : 0
  return n !== r && (i *= 100), t + '(' + i + o + ')'
}
const nR = /([a-z-]*)\(.*?\)/g,
  zd = {
    ...nn,
    getAnimatableNone: (e) => {
      const t = e.match(nR)
      return t ? t.map(rR).join(' ') : e
    },
  },
  oR = {
    ...x1,
    color: He,
    backgroundColor: He,
    outlineColor: He,
    fill: He,
    stroke: He,
    borderColor: He,
    borderTopColor: He,
    borderRightColor: He,
    borderBottomColor: He,
    borderLeftColor: He,
    filter: zd,
    WebkitFilter: zd,
  },
  vp = (e) => oR[e]
function Sp(e, t) {
  let r = vp(e)
  return r !== zd && (r = nn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
function iR({
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
function y0(e) {
  return e === 0 || (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
}
function v0(e) {
  return typeof e == 'number' ? 0 : Sp('', e)
}
function sS(e, t) {
  return e[t] || e.default || e
}
function aR(e, t, r, n) {
  const o = Rd(t, r)
  let i = n.from !== void 0 ? n.from : e.get()
  if (
    (i === 'none' && o && typeof r == 'string'
      ? (i = Sp(t, r))
      : y0(i) && typeof r == 'string'
      ? (i = v0(r))
      : !Array.isArray(r) && y0(r) && typeof i == 'string' && (r = v0(i)),
    Array.isArray(r))
  ) {
    for (let a = 0; a < r.length; a++) r[a] === null && (r[a] = a === 0 ? i : r[a - 1])
    return r
  } else return [i, r]
}
const bp =
  (e, t, r, n = {}) =>
  (o) => {
    const i = sS(n, e) || {},
      a = i.delay || n.delay || 0
    let { elapsed: s = 0 } = n
    s = s - Zr(a)
    const l = aR(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = Rd(e, u),
      f = Rd(e, c)
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
      (iR(i) || (h = { ...h, ...eR(e, h) }),
      h.duration && (h.duration = Zr(h.duration)),
      h.repeatDelay && (h.repeatDelay = Zr(h.repeatDelay)),
      !d || !f || iA.current || i.type === !1)
    )
      return QA(h)
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const v = YA(t, e, h)
      if (v) return v
    }
    return fl(h)
  }
function pl(e) {
  return !!(lt(e) && e.add)
}
const sR = (e) => /^\-?\d*\.?\d+$/.test(e),
  lR = (e) => /^0[^.\s]+$/.test(e)
function xp(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function wp(e, t) {
  const r = e.indexOf(t)
  r > -1 && e.splice(r, 1)
}
class kp {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return xp(this.subscriptions, t), () => wp(this.subscriptions, t)
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
const uR = (e) => !isNaN(parseFloat(e))
class cR {
  constructor(t, r = {}) {
    ;(this.version = '10.10.0'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: i, timestamp: a } = We
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
      (this.canTrackVelocity = uR(this.current)),
      (this.owner = r.owner)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new kp())
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
      ? oS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function $o(e, t) {
  return new cR(e, t)
}
const lS = (e) => (t) => t.test(e),
  dR = { test: (e) => e === 'auto', parse: (e) => e },
  uS = [On, I, nr, zr, y4, g4, dR],
  qo = (e) => uS.find(lS(e)),
  fR = [...uS, He, nn],
  pR = (e) => fR.find(lS(e))
function hR(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, $o(r))
}
function mR(e, t) {
  const r = nu(e, t)
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {}
  i = { ...i, ...n }
  for (const a in i) {
    const s = R4(i[a])
    hR(e, a, s)
  }
}
function gR(e, t, r) {
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
          (typeof c == 'string' && (sR(c) || lR(c))
            ? (c = parseFloat(c))
            : !pR(c) && nn.test(u) && (c = Sp(l, u)),
          e.addValue(l, $o(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c))
    }
}
function yR(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function vR(e, t, r) {
  const n = {}
  for (const o in e) {
    const i = yR(o, t)
    if (i !== void 0) n[o] = i
    else {
      const a = r.getValue(o)
      a && (n[o] = a.get())
    }
  }
  return n
}
function SR({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0
  return (t[r] = !1), n
}
function cS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
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
    if (!f || h === void 0 || (c && SR(c, d))) continue
    const v = { delay: r, elapsed: 0, ...i }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const C = e.getProps()[nA]
      C && (v.elapsed = window.HandoffAppearAnimations(C, d, f, fe))
    }
    f.start(bp(d, f, h, e.shouldReduceMotion && Vn.has(d) ? { type: !1 } : v))
    const S = f.animation
    pl(l) && (l.add(d), S.then(() => l.remove(d))), u.push(S)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && mR(e, a)
      }),
    u
  )
}
function Md(e, t, r = {}) {
  const n = nu(e, t, r.custom)
  let { transition: o = e.getDefaultTransition() || {} } = n || {}
  r.transitionOverride && (o = r.transitionOverride)
  const i = n ? () => Promise.all(cS(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o
            return bR(e, t, u + l, c, d, r)
          }
        : () => Promise.resolve(),
    { when: s } = o
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i]
    return l().then(() => u())
  } else return Promise.all([i(), a(r.delay)])
}
function bR(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n
  return (
    Array.from(e.variantChildren)
      .sort(xR)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(Md(u, t, { ...i, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(a)
  )
}
function xR(e, t) {
  return e.sortNodePosition(t)
}
function wR(e, t, r = {}) {
  e.notify('AnimationStart', t)
  let n
  if (Array.isArray(t)) {
    const o = t.map((i) => Md(e, i, r))
    n = Promise.all(o)
  } else if (typeof t == 'string') n = Md(e, t, r)
  else {
    const o = typeof t == 'function' ? nu(e, t, r.custom) : t
    n = Promise.all(cS(e, o, r))
  }
  return n.then(() => e.notify('AnimationComplete', t))
}
const kR = [...rp].reverse(),
  CR = rp.length
function _R(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => wR(e, r, n)))
}
function TR(e) {
  let t = _R(e)
  const r = ER()
  let n = !0
  const o = (l, u) => {
    const c = nu(e, u)
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
    for (let g = 0; g < CR; g++) {
      const p = kR[g],
        y = r[p],
        w = c[p] !== void 0 ? c[p] : d[p],
        T = ea(w),
        A = p === u ? y.isActive : null
      A === !1 && (S = g)
      let P = w === d[p] && w !== c[p] && T
      if (
        (P && n && e.manuallyAnimateOnMount && (P = !1),
        (y.protectedKeys = { ...v }),
        (!y.isActive && A === null) || (!w && !y.prevProp) || Zl(w) || typeof w == 'boolean')
      )
        continue
      const E = PR(y.prevProp, w)
      let B = E || (p === u && y.isActive && !P && T) || (g > S && T)
      const L = Array.isArray(w) ? w : [w]
      let pe = L.reduce(o, {})
      A === !1 && (pe = {})
      const { prevResolvedValues: Ie = {} } = y,
        Ze = { ...Ie, ...pe },
        he = (me) => {
          ;(B = !0), h.delete(me), (y.needsAnimating[me] = !0)
        }
      for (const me in Ze) {
        const Je = pe[me],
          xt = Ie[me]
        v.hasOwnProperty(me) ||
          (Je !== xt
            ? ul(Je) && ul(xt)
              ? !F1(Je, xt) || E
                ? he(me)
                : (y.protectedKeys[me] = !0)
              : Je !== void 0
              ? he(me)
              : h.add(me)
            : Je !== void 0 && h.has(me)
            ? he(me)
            : (y.protectedKeys[me] = !0))
      }
      ;(y.prevProp = w),
        (y.prevResolvedValues = pe),
        y.isActive && (v = { ...v, ...pe }),
        n && e.blockInitialAnimation && (B = !1),
        B && !P && f.push(...L.map((me) => ({ animation: me, options: { type: p, ...l } })))
    }
    if (h.size) {
      const g = {}
      h.forEach((p) => {
        const y = e.getBaseTarget(p)
        y !== void 0 && (g[p] = y)
      }),
        f.push({ animation: g })
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
function PR(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !F1(t, e) : !1
}
function pn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function ER() {
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
class $R extends ln {
  constructor(t) {
    super(t), t.animationState || (t.animationState = TR(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), Zl(t) && (this.unmount = t.subscribe(this.node))
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
let AR = 0
class RR extends ln {
  constructor() {
    super(...arguments), (this.id = AR++)
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
const zR = { animation: { Feature: $R }, exit: { Feature: RR } },
  S0 = (e, t) => Math.abs(e - t)
function MR(e, t) {
  const r = S0(e.x, t.x),
    n = S0(e.y, t.y)
  return Math.sqrt(r ** 2 + n ** 2)
}
class dS {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = hc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = MR(u.offset, { x: 0, y: 0 }) >= 3
        if (!c && !d) return
        const { point: f } = u,
          { timestamp: h } = We
        this.history.push({ ...f, timestamp: h })
        const { onStart: v, onMove: S } = this.handlers
        c || (v && v(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
          S && S(this.lastMoveEvent, u)
      }),
      (this.handlePointerMove = (u, c) => {
        ;(this.lastMoveEvent = u),
          (this.lastMoveEventInfo = pc(c, this.transformPagePoint)),
          fe.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = hc(
            u.type === 'pointercancel' ? this.lastMoveEventInfo : pc(c, this.transformPagePoint),
            this.history
          )
        this.startEvent && d && d(u, h), f && f(u, h)
      }),
      !A1(t))
    )
      return
    ;(this.handlers = r), (this.transformPagePoint = n)
    const o = tu(t),
      i = pc(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = We
    this.history = [{ ...a, timestamp: s }]
    const { onSessionStart: l } = r
    l && l(t, hc(i, this.history)),
      (this.removeListeners = qr(
        gr(window, 'pointermove', this.handlePointerMove),
        gr(window, 'pointerup', this.handlePointerUp),
        gr(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), rn.update(this.updatePoint)
  }
}
function pc(e, t) {
  return t ? { point: t(e.point) } : e
}
function b0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function hc({ point: e }, t) {
  return { point: e, delta: b0(e, fS(t)), offset: b0(e, DR(t)), velocity: LR(t, 0.1) }
}
function DR(e) {
  return e[0]
}
function fS(e) {
  return e[e.length - 1]
}
function LR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let r = e.length - 1,
    n = null
  const o = fS(e)
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > Zr(t))); ) r--
  if (!n) return { x: 0, y: 0 }
  const i = yr(o.timestamp - n.timestamp)
  if (i === 0) return { x: 0, y: 0 }
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function yt(e) {
  return e.max - e.min
}
function Dd(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r
}
function x0(e, t, r, n = 0.5) {
  ;(e.origin = n),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = yt(r) / yt(t)),
    (Dd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ye(r.min, r.max, e.origin) - e.originPoint),
    (Dd(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Ci(e, t, r, n) {
  x0(e.x, t.x, r.x, n ? n.originX : void 0), x0(e.y, t.y, r.y, n ? n.originY : void 0)
}
function w0(e, t, r) {
  ;(e.min = r.min + t.min), (e.max = e.min + yt(t))
}
function FR(e, t, r) {
  w0(e.x, t.x, r.x), w0(e.y, t.y, r.y)
}
function k0(e, t, r) {
  ;(e.min = t.min - r.min), (e.max = e.min + yt(t))
}
function _i(e, t, r) {
  k0(e.x, t.x, r.x), k0(e.y, t.y, r.y)
}
function BR(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ye(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ye(r, e, n.max) : Math.min(e, r)),
    e
  )
}
function C0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  }
}
function IR(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: C0(e.x, r, o), y: C0(e.y, t, n) }
}
function _0(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
}
function VR(e, t) {
  return { x: _0(e.x, t.x), y: _0(e.y, t.y) }
}
function OR(e, t) {
  let r = 0.5
  const n = yt(e),
    o = yt(t)
  return (
    o > n ? (r = oa(t.min, t.max - n, e.min)) : n > o && (r = oa(e.min, e.max - o, t.min)),
    Fn(0, 1, r)
  )
}
function NR(e, t) {
  const r = {}
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
}
const Ld = 0.35
function jR(e = Ld) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ld),
    { x: T0(e, 'left', 'right'), y: T0(e, 'top', 'bottom') }
  )
}
function T0(e, t, r) {
  return { min: P0(e, t), max: P0(e, r) }
}
function P0(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const E0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ti = () => ({ x: E0(), y: E0() }),
  $0 = () => ({ min: 0, max: 0 }),
  we = () => ({ x: $0(), y: $0() })
function Kt(e) {
  return [e('x'), e('y')]
}
function pS({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } }
}
function WR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function UR(e, t) {
  if (!t) return e
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom })
  return { top: r.y, left: r.x, bottom: n.y, right: n.x }
}
function mc(e) {
  return e === void 0 || e === 1
}
function Fd({ scale: e, scaleX: t, scaleY: r }) {
  return !mc(e) || !mc(t) || !mc(r)
}
function gn(e) {
  return Fd(e) || hS(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function hS(e) {
  return A0(e.x) || A0(e.y)
}
function A0(e) {
  return e && e !== '0%'
}
function hl(e, t, r) {
  const n = e - r,
    o = t * n
  return r + o
}
function R0(e, t, r, n, o) {
  return o !== void 0 && (e = hl(e, o, n)), hl(e, r, n) + t
}
function Bd(e, t = 0, r = 1, n, o) {
  ;(e.min = R0(e.min, t, r, n, o)), (e.max = R0(e.max, t, r, n, o))
}
function mS(e, { x: t, y: r }) {
  Bd(e.x, t.translate, t.scale, t.originPoint), Bd(e.y, r.translate, r.scale, r.originPoint)
}
function HR(e, t, r, n = !1) {
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
        so(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), mS(e, a)),
      n && gn(i.latestValues) && so(e, i.latestValues))
  }
  ;(t.x = z0(t.x)), (t.y = z0(t.y))
}
function z0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function Lr(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function M0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ye(e.min, e.max, i)
  Bd(e, t[r], t[n], a, t.scale)
}
const GR = ['x', 'scaleX', 'originX'],
  KR = ['y', 'scaleY', 'originY']
function so(e, t) {
  M0(e.x, t, GR), M0(e.y, t, KR)
}
function gS(e, t) {
  return pS(UR(e.getBoundingClientRect(), t))
}
function YR(e, t, r) {
  const n = gS(e, r),
    { scroll: o } = t
  return o && (Lr(n.x, o.offset.x), Lr(n.y, o.offset.y)), n
}
const QR = new WeakMap()
class XR {
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
        this.stopAnimation(), r && this.snapToCursor(tu(l, 'page').point)
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps()
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = z1(c)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Kt((v) => {
            let S = this.getAxisMotionValue(v).get() || 0
            if (nr.test(S)) {
              const { projection: C } = this.visualElement
              if (C && C.layout) {
                const g = C.layout.layoutBox[v]
                g && (S = yt(g) * (parseFloat(S) / 100))
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
          ;(this.currentDirection = qR(v)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, v),
          this.updateAxis('y', u.point, v),
          this.visualElement.render(),
          h && h(l, u)
      },
      s = (l, u) => this.stop(l, u)
    this.panSession = new dS(
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
    if (!n || !ns(t, o, this.currentDirection)) return
    const i = this.getAxisMotionValue(t)
    let a = this.originPoint[t] + n[t]
    this.constraints && this.constraints[t] && (a = BR(a, this.constraints[t], this.elastic[t])),
      i.set(a)
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints
    t && io(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = IR(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = jR(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Kt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = NR(n.layoutBox[i], this.constraints[i]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps()
    if (!t || !io(t)) return !1
    const n = t.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const i = YR(n, o.root, this.visualElement.getTransformPagePoint())
    let a = VR(o.layout.layoutBox, i)
    if (r) {
      const s = r(WR(a))
      ;(this.hasMutatedConstraints = !!s), s && (a = pS(s))
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
      u = Kt((c) => {
        if (!ns(c, r, this.currentDirection)) return
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
    return n.start(bp(t, n, 0, r))
  }
  stopAnimation() {
    Kt((t) => this.getAxisMotionValue(t).stop())
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r]
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Kt((r) => {
      const { drag: n } = this.getProps()
      if (!ns(r, n, this.currentDirection)) return
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
    if (!io(r) || !n || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    Kt((a) => {
      const s = this.getAxisMotionValue(a)
      if (s) {
        const l = s.get()
        o[a] = OR({ min: l, max: l }, this.constraints[a])
      }
    })
    const { transformTemplate: i } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Kt((a) => {
        if (!ns(a, t, null)) return
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a]
        s.set(ye(l, u, o[a]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    QR.set(this.visualElement, this)
    const t = this.visualElement.current,
      r = gr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps()
        io(l) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n()
    const a = pr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Kt((c) => {
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
        dragElastic: a = Ld,
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
function ns(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e)
}
function qR(e, t = 10) {
  let r = null
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r
}
class ZR extends ln {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ae),
      (this.removeListeners = Ae),
      (this.controls = new XR(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ae)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const D0 = (e) => (t, r) => {
  e && fe.update(() => e(t, r))
}
class JR extends ln {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ae)
  }
  onPointerDown(t) {
    this.session = new dS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: D0(t),
      onStart: D0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && fe.update(() => o(i, a))
      },
    }
  }
  mount() {
    this.removePointerDownListener = gr(this.node.current, 'pointerdown', (t) =>
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
function ez() {
  const e = _.useContext(pa)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = _.useId()
  return _.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0]
}
function tz() {
  return rz(_.useContext(pa))
}
function rz(e) {
  return e === null ? !0 : e.isPresent
}
function L0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Zo = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (I.test(e)) e = parseFloat(e)
        else return e
      const r = L0(e, t.target.x),
        n = L0(e, t.target.y)
      return `${r}% ${n}%`
    },
  },
  yS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function nz(e) {
  const t = yS.exec(e)
  if (!t) return [,]
  const [, r, n] = t
  return [r, n]
}
function Id(e, t, r = 1) {
  const [n, o] = nz(e)
  if (!n) return
  const i = window.getComputedStyle(t).getPropertyValue(n)
  return i ? i.trim() : _d(o) ? Id(o, t, r + 1) : o
}
function oz(e, { ...t }, r) {
  const n = e.current
  if (!(n instanceof Element)) return { target: t, transitionEnd: r }
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get()
      if (!_d(i)) return
      const a = Id(i, n)
      a && o.set(a)
    })
  for (const o in t) {
    const i = t[o]
    if (!_d(i)) continue
    const a = Id(i, n)
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i))
  }
  return { target: t, transitionEnd: r }
}
const F0 = '_$css',
  iz = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = []
      o && (e = e.replace(yS, (h) => (i.push(h), F0)))
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
        f = f.replace(F0, () => {
          const v = i[h]
          return h++, v
        })
      }
      return f
    },
  }
class az extends An.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
      { projection: i } = t
    c4(sz),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (xi.hasEverUpdated = !0)
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
function vS(e) {
  const [t, r] = ez(),
    n = _.useContext(ip)
  return An.createElement(az, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: _.useContext(y1),
    isPresent: t,
    safeToRemove: r,
  })
}
const sz = {
    borderRadius: {
      ...Zo,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Zo,
    borderTopRightRadius: Zo,
    borderBottomLeftRadius: Zo,
    borderBottomRightRadius: Zo,
    boxShadow: iz,
  },
  SS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  lz = SS.length,
  B0 = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  I0 = (e) => typeof e == 'number' || I.test(e)
function uz(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ye(0, r.opacity !== void 0 ? r.opacity : 1, cz(n))),
      (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, dz(n))))
    : i &&
      (e.opacity = ye(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ))
  for (let a = 0; a < lz; a++) {
    const s = `border${SS[a]}Radius`
    let l = V0(t, s),
      u = V0(r, s)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || I0(l) === I0(u)
        ? ((e[s] = Math.max(ye(B0(l), B0(u), n), 0)), (nr.test(u) || nr.test(l)) && (e[s] += '%'))
        : (e[s] = u)
  }
  ;(t.rotate || r.rotate) && (e.rotate = ye(t.rotate || 0, r.rotate || 0, n))
}
function V0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const cz = bS(0, 0.5, mp),
  dz = bS(0.5, 0.95, Ae)
function bS(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(oa(e, t, n)))
}
function O0(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function Ct(e, t) {
  O0(e.x, t.x), O0(e.y, t.y)
}
function N0(e, t, r, n, o) {
  return (e -= t), (e = hl(e, 1 / r, n)), o !== void 0 && (e = hl(e, 1 / o, n)), e
}
function fz(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (nr.test(t) && ((t = parseFloat(t)), (t = ye(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return
  let s = ye(i.min, i.max, n)
  e === i && (s -= t), (e.min = N0(e.min, t, r, s, o)), (e.max = N0(e.max, t, r, s, o))
}
function j0(e, t, [r, n, o], i, a) {
  fz(e, t[r], t[n], t[o], t.scale, i, a)
}
const pz = ['x', 'scaleX', 'originX'],
  hz = ['y', 'scaleY', 'originY']
function W0(e, t, r, n) {
  j0(e.x, t, pz, r ? r.x : void 0, n ? n.x : void 0),
    j0(e.y, t, hz, r ? r.y : void 0, n ? n.y : void 0)
}
function U0(e) {
  return e.translate === 0 && e.scale === 1
}
function xS(e) {
  return U0(e.x) && U0(e.y)
}
function Vd(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function H0(e) {
  return yt(e.x) / yt(e.y)
}
class mz {
  constructor() {
    this.members = []
  }
  add(t) {
    xp(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((wp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
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
function G0(e, t, r) {
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
const gz = (e, t) => e.depth - t.depth
class yz {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    xp(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    wp(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(gz), (this.isDirty = !1), this.children.forEach(t)
  }
}
function vz(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r
      i >= t && (rn.read(n), e(i - t))
    }
  return fe.read(n, !0), () => rn.read(n)
}
function Sz(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function bz(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function xz(e, t, r) {
  const n = lt(e) ? e : $o(e)
  return n.start(bp('', n, t, r)), n.animation
}
const K0 = ['', 'X', 'Y', 'Z'],
  Y0 = 1e3
let wz = 0
const yn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function wS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = wz++),
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
            this.nodes.forEach(_z),
            this.nodes.forEach($z),
            this.nodes.forEach(Az),
            this.nodes.forEach(Tz),
            Sz(yn)
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
      this.root === this && (this.nodes = new yz())
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new kp()),
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
      ;(this.isSVG = bz(a)), (this.instance = a)
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
            (d = vz(f, 250)),
            xi.hasAnimatedSinceResize && ((xi.hasAnimatedSinceResize = !1), this.nodes.forEach(X0))
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
              const S = this.options.transition || c.getDefaultTransition() || Lz,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: g } = c.getProps(),
                p = !this.targetLayout || !Vd(this.targetLayout, v) || h,
                y = !f && h
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y)
                const w = { ...sS(S, 'layout'), onPlay: C, onComplete: g }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                !f && this.animationProgress === 0 && X0(this),
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Rz), this.animationId++)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Q0)
        return
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size && (this.potentialNodes.forEach(Fz), this.potentialNodes.clear()),
        this.nodes.forEach(Ez),
        this.nodes.forEach(kz),
        this.nodes.forEach(Cz),
        this.clearAllSnapshots(),
        ic.update(),
        ic.preRender(),
        ic.render())
    }
    clearAllSnapshots() {
      this.nodes.forEach(Pz), this.sharedNodes.forEach(zz)
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
        s = this.projectionDelta && !xS(this.projectionDelta),
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
        Bz(l),
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
      return l && (Lr(s.x, l.offset.x), Lr(s.y, l.offset.y)), s
    }
    removeElementScroll(a) {
      const s = we()
      Ct(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Ct(s, a)
            const { scroll: f } = this.root
            f && (Lr(s.x, -f.offset.x), Lr(s.y, -f.offset.y))
          }
          Lr(s.x, c.offset.x), Lr(s.y, c.offset.y)
        }
      }
      return s
    }
    applyTransform(a, s = !1) {
      const l = we()
      Ct(l, a)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          so(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gn(c.latestValues) && so(l, c.latestValues)
      }
      return gn(this.latestValues) && so(l, this.latestValues), l
    }
    removeTransform(a) {
      const s = we()
      Ct(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !gn(u.latestValues)) continue
        Fd(u.latestValues) && u.updateSnapshot()
        const c = we(),
          d = u.measurePageBox()
        Ct(c, d), W0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return gn(this.latestValues) && W0(s, this.latestValues), s
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
          ((this.resolvedRelativeTargetAt = We.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent()
          h && h.layout
            ? ((this.relativeParent = h),
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              _i(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              Ct(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = we()), (this.targetWithTransforms = we())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !== We.timestamp &&
                  this.relativeParent.resolveTargetDelta(!0),
                FR(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ct(this.target, this.layout.layoutBox),
                mS(this.target, this.targetDelta))
              : Ct(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const h = this.getClosestProjectingParent()
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target
              ? ((this.relativeParent = h),
                (this.relativeTarget = we()),
                (this.relativeTargetOrigin = we()),
                _i(this.relativeTargetOrigin, this.target, h.target),
                Ct(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          yn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fd(this.parent.latestValues) || hS(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === We.timestamp && (u = !1),
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
      Ct(this.layoutCorrected, this.layout.layoutBox),
        HR(this.layoutCorrected, this.treeScale, this.path, l)
      const { target: f } = s
      if (!f) return
      this.projectionDelta ||
        ((this.projectionDelta = Ti()), (this.projectionDeltaWithTransform = Ti()))
      const h = this.treeScale.x,
        v = this.treeScale.y,
        S = this.projectionTransform
      Ci(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = G0(this.projectionDelta, this.treeScale)),
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
        d = Ti()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s)
      const f = we(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        S = h !== v,
        C = this.getStack(),
        g = !C || C.members.length <= 1,
        p = !!(S && !g && this.options.crossfade === !0 && !this.path.some(Dz))
      this.animationProgress = 0
      let y
      ;(this.mixTargetDelta = (w) => {
        const T = w / 1e3
        q0(d.x, a.x, T),
          q0(d.y, a.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (_i(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Mz(this.relativeTarget, this.relativeTargetOrigin, f, T),
            y && Vd(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = we()),
            Ct(y, this.relativeTarget)),
          S && ((this.animationValues = c), uz(c, u, this.latestValues, T, p, g)),
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
          ;(xi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = xz(0, Y0, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Y0), this.currentAnimation.stop()),
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
          kS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || we()
          const d = yt(this.layout.layoutBox.x)
          ;(l.x.min = a.target.x.min), (l.x.max = l.x.min + d)
          const f = yt(this.layout.layoutBox.y)
          ;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
        }
        Ct(s, l), so(s, c), Ci(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new mz()), this.sharedNodes.get(a).add(s)
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
      for (let c = 0; c < K0.length; c++) {
        const d = 'rotate' + K0[c]
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
          (u.pointerEvents = _s(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {}
        return (
          this.options.layoutId &&
            ((S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (S.pointerEvents = _s(a.pointerEvents) || '')),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((S.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          S
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = G0(this.projectionDeltaWithTransform, this.treeScale, f)),
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
      for (const S in sl) {
        if (f[S] === void 0) continue
        const { correct: C, applyTo: g } = sl[S],
          p = u.transform === 'none' ? f[S] : C(f[S], d)
        if (g) {
          const y = g.length
          for (let w = 0; w < y; w++) u[g[w]] = p
        } else u[S] = p
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? _s(a.pointerEvents) || '' : 'none'),
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
        this.root.nodes.forEach(Q0),
        this.root.sharedNodes.clear()
    }
  }
}
function kz(e) {
  e.updateLayout()
}
function Cz(e) {
  var t
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source
    i === 'size'
      ? Kt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = yt(f)
          ;(f.min = n[d].min), (f.max = f.min + h)
        })
      : kS(i, r.layoutBox, n) &&
        Kt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = yt(n[d])
          ;(f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + h))
        })
    const s = Ti()
    Ci(s, n, r.layoutBox)
    const l = Ti()
    a ? Ci(l, e.applyTransform(o, !0), r.measuredBox) : Ci(l, n, r.layoutBox)
    const u = !xS(s)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d
        if (f && h) {
          const v = we()
          _i(v, r.layoutBox, f.layoutBox)
          const S = we()
          _i(S, n, h.layoutBox),
            Vd(v, S) || (c = !0),
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
function _z(e) {
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
function Tz(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Pz(e) {
  e.clearSnapshot()
}
function Q0(e) {
  e.clearMeasurements()
}
function Ez(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function X0(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0)
}
function $z(e) {
  e.resolveTargetDelta()
}
function Az(e) {
  e.calcProjection()
}
function Rz(e) {
  e.resetRotation()
}
function zz(e) {
  e.removeLeadSnapshot()
}
function q0(e, t, r) {
  ;(e.translate = ye(t.translate, 0, r)),
    (e.scale = ye(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function Z0(e, t, r, n) {
  ;(e.min = ye(t.min, r.min, n)), (e.max = ye(t.max, r.max, n))
}
function Mz(e, t, r, n) {
  Z0(e.x, t.x, r.x, n), Z0(e.y, t.y, r.y, n)
}
function Dz(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Lz = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function Fz(e, t) {
  let r = e.root
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i]
      break
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`)
  o && e.mount(o, !0)
}
function J0(e) {
  ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function Bz(e) {
  J0(e.x), J0(e.y)
}
function kS(e, t, r) {
  return e === 'position' || (e === 'preserve-aspect' && !Dd(H0(t), H0(r), 0.2))
}
const Iz = wS({
    attachResizeListener: (e, t) => pr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  gc = { current: void 0 },
  CS = wS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!gc.current) {
        const e = new Iz(0, {})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (gc.current = e)
      }
      return gc.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  Vz = { pan: { Feature: JR }, drag: { Feature: ZR, ProjectionNode: CS, MeasureLayout: vS } },
  Oz = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  _S = (e) => Oz.has(e),
  Nz = (e) => Object.keys(e).some(_S),
  eg = (e) => e === On || e === I,
  tg = (e, t) => parseFloat(e.split(', ')[t]),
  rg =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const o = n.match(/^matrix3d\((.+)\)$/)
      if (o) return tg(o[1], t)
      {
        const i = n.match(/^matrix\((.+)\)$/)
        return i ? tg(i[1], e) : 0
      }
    },
  jz = new Set(['x', 'y', 'z']),
  Wz = eu.filter((e) => !jz.has(e))
function Uz(e) {
  const t = []
  return (
    Wz.forEach((r) => {
      const n = e.getValue(r)
      n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const ng = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: rg(4, 13),
    y: rg(5, 14),
  },
  Hz = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {}
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach((u) => {
        s[u] = ng[u](n, i)
      }),
      t.render()
    const l = t.measureViewportBox()
    return (
      r.forEach((u) => {
        const c = t.getValue(u)
        c && c.jump(s[u]), (e[u] = ng[u](l, i))
      }),
      e
    )
  },
  Gz = (e, t, r = {}, n = {}) => {
    ;(t = { ...t }), (n = { ...n })
    const o = Object.keys(t).filter(_S)
    let i = [],
      a = !1
    const s = []
    if (
      (o.forEach((l) => {
        const u = e.getValue(l)
        if (!e.hasValue(l)) return
        let c = r[l],
          d = qo(c)
        const f = t[l]
        let h
        if (ul(f)) {
          const v = f.length,
            S = f[0] === null ? 1 : 0
          ;(c = f[S]), (d = qo(c))
          for (let C = S; C < v; C++) h ? hp(qo(f[C]) === h) : (h = qo(f[C]))
        } else h = qo(f)
        if (d !== h)
          if (eg(d) && eg(h)) {
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
              : (a || ((i = Uz(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f))
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = Hz(t, e, s)
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d)
          }),
        e.render(),
        ql && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      )
    } else return { target: t, transitionEnd: n }
  }
function Kz(e, t, r, n) {
  return Nz(t) ? Gz(e, t, r, n) : { target: t, transitionEnd: n }
}
const Yz = (e, t, r, n) => {
    const o = oz(e, t, n)
    return (t = o.target), (n = o.transitionEnd), Kz(e, t, r, n)
  },
  Od = { current: null },
  TS = { current: !1 }
function Qz() {
  if (((TS.current = !0), !!ql))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Od.current = e.matches)
      e.addListener(t), t()
    } else Od.current = !1
}
function Xz(e, t, r) {
  const { willChange: n } = t
  for (const o in t) {
    const i = t[o],
      a = r[o]
    if (lt(i)) e.addValue(o, i), pl(n) && n.add(o)
    else if (lt(a)) e.addValue(o, $o(i, { owner: e })), pl(n) && n.remove(o)
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o)
        !s.hasAnimated && s.set(i)
      } else {
        const s = e.getStaticValue(o)
        e.addValue(o, $o(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o)
  return t
}
const og = new WeakMap(),
  PS = Object.keys(ta),
  qz = PS.length,
  ig = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  Zz = np.length
class Jz {
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
      (this.isControllingVariants = Jl(r)),
      (this.isVariantNode = g1(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {})
    for (const d in c) {
      const f = c[d]
      s[d] !== void 0 && lt(f) && (f.set(s[d], !1), pl(u) && u.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      og.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      TS.current || Qz(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Od.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    og.delete(this.current),
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
    const n = Vn.has(t),
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
    for (let u = 0; u < qz; u++) {
      const c = PS[u],
        { isEnabled: d, Feature: f, ProjectionNode: h, MeasureLayout: v } = ta[c]
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
        alwaysMeasureLayout: !!d || (f && io(f)),
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
    for (let n = 0; n < ig.length; n++) {
      const o = ig[n]
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
      const i = t['on' + o]
      i && (this.propEventSubscriptions[o] = this.on(o, i))
    }
    ;(this.prevMotionValues = Xz(
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
    for (let n = 0; n < Zz; n++) {
      const o = np[n],
        i = this.props[o]
      ;(ea(i) || i === !1) && (r[o] = i)
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
    return n === void 0 && r !== void 0 && ((n = $o(r, { owner: this })), this.addValue(t, n)), n
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
          ? (r = pp(this.props, n)) === null || r === void 0
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
    return this.events[t] || (this.events[t] = new kp()), this.events[t].add(r)
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r)
  }
}
class ES extends Jz {
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
    let a = vR(n, t || {}, this)
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      gR(this, n, a)
      const s = Yz(this, n, a, r)
      ;(r = s.transitionEnd), (n = s.target)
    }
    return { transition: t, transitionEnd: r, ...n }
  }
}
function eM(e) {
  return window.getComputedStyle(e)
}
class tM extends ES {
  readValueFromInstance(t, r) {
    if (Vn.has(r)) {
      const n = vp(r)
      return (n && n.default) || 0
    } else {
      const n = eM(t),
        o = (b1(r) ? n.getPropertyValue(r) : n[r]) || 0
      return typeof o == 'string' ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return gS(t, r)
  }
  build(t, r, n, o) {
    sp(t, r, n, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, r) {
    return fp(t, r)
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
    _1(t, r, n, o)
  }
}
class rM extends ES {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, r) {
    return t[r]
  }
  readValueFromInstance(t, r) {
    if (Vn.has(r)) {
      const n = vp(r)
      return (n && n.default) || 0
    }
    return (r = T1.has(r) ? r : dp(r)), t.getAttribute(r)
  }
  measureInstanceViewportBox() {
    return we()
  }
  scrapeMotionValuesFromProps(t, r) {
    return E1(t, r)
  }
  build(t, r, n, o) {
    up(t, r, n, this.isSVGTag, o.transformTemplate)
  }
  renderInstance(t, r, n, o) {
    P1(t, r, n, o)
  }
  mount(t) {
    ;(this.isSVGTag = cp(t.tagName)), super.mount(t)
  }
}
const nM = (e, t) =>
    ap(e)
      ? new rM(t, { enableHardwareAcceleration: !1 })
      : new tM(t, { enableHardwareAcceleration: !0 }),
  oM = { layout: { ProjectionNode: CS, MeasureLayout: vS } },
  iM = { ...zR, ...J4, ...Vz, ...oM },
  aM = l4((e, t) => F4(e, t, iM, nM))
function $S() {
  const e = _.useRef(!1)
  return (
    al(
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
function sM() {
  const e = $S(),
    [t, r] = _.useState(0),
    n = _.useCallback(() => {
      e.current && r(t + 1)
    }, [t])
  return [_.useCallback(() => fe.postRender(n), [n]), t]
}
class lM extends _.Component {
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
function uM({ children: e, isPresent: t }) {
  const r = _.useId(),
    n = _.useRef(null),
    o = _.useRef({ width: 0, height: 0, top: 0, left: 0 })
  return (
    _.useInsertionEffect(() => {
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
    _.createElement(lM, { isPresent: t, childRef: n, sizeRef: o }, _.cloneElement(e, { ref: n }))
  )
}
const yc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = op(cM),
    l = _.useId(),
    u = _.useMemo(
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
    _.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1))
    }, [r]),
    _.useEffect(() => {
      !r && !s.size && n && n()
    }, [r]),
    a === 'popLayout' && (e = _.createElement(uM, { isPresent: r }, e)),
    _.createElement(pa.Provider, { value: u }, e)
  )
}
function cM() {
  return new Map()
}
function dM(e) {
  return _.useEffect(() => () => e(), [])
}
const Gn = (e) => e.key || ''
function fM(e, t) {
  e.forEach((r) => {
    const n = Gn(r)
    t.set(n, r)
  })
}
function pM(e) {
  const t = []
  return (
    _.Children.forEach(e, (r) => {
      _.isValidElement(r) && t.push(r)
    }),
    t
  )
}
const hM = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  let [s] = sM()
  const l = _.useContext(ip).forceRender
  l && (s = l)
  const u = $S(),
    c = pM(e)
  let d = c
  const f = new Set(),
    h = _.useRef(d),
    v = _.useRef(new Map()).current,
    S = _.useRef(!0)
  if (
    (al(() => {
      ;(S.current = !1), fM(c, v), (h.current = d)
    }),
    dM(() => {
      ;(S.current = !0), v.clear(), f.clear()
    }),
    S.current)
  )
    return _.createElement(
      _.Fragment,
      null,
      d.map((y) =>
        _.createElement(
          yc,
          {
            key: Gn(y),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          y
        )
      )
    )
  d = [...d]
  const C = h.current.map(Gn),
    g = c.map(Gn),
    p = C.length
  for (let y = 0; y < p; y++) {
    const w = C[y]
    g.indexOf(w) === -1 && f.add(w)
  }
  return (
    a === 'wait' && f.size && (d = []),
    f.forEach((y) => {
      if (g.indexOf(y) !== -1) return
      const w = v.get(y)
      if (!w) return
      const T = C.indexOf(y),
        A = () => {
          v.delete(y), f.delete(y)
          const P = h.current.findIndex((E) => E.key === y)
          if ((h.current.splice(P, 1), !f.size)) {
            if (((h.current = c), u.current === !1)) return
            s(), n && n()
          }
        }
      d.splice(
        T,
        0,
        _.createElement(
          yc,
          {
            key: Gn(w),
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
    (d = d.map((y) => {
      const w = y.key
      return f.has(w)
        ? y
        : _.createElement(yc, { key: Gn(y), isPresent: !0, presenceAffectsLayout: i, mode: a }, y)
    })),
    _.createElement(_.Fragment, null, f.size ? d : d.map((y) => _.cloneElement(y)))
  )
}
var mM = {
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
  AS = _.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = mM,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = _.useState(s),
      h = tz()
    Jm(() => {
      h || n == null || n()
    }, [h]),
      Jm(() => {
        f(s)
      }, [s])
    const v = () => f(null),
      S = () => f(s),
      C = () => {
        h && o()
      }
    _.useEffect(() => {
      h && i && o()
    }, [h, i, o]),
      q3(C, d)
    const g = _.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...l }),
        [l, c]
      ),
      p = _.useMemo(() => Y3(a), [a])
    return z(aM.li, {
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
      children: z(st.div, {
        'role': 'status',
        'aria-atomic': 'true',
        'className': 'chakra-toast__inner',
        '__css': g,
        'children': Nr(r, { id: t, onClose: C }),
      }),
    })
  })
AS.displayName = 'ToastComponent'
var ag = {
    path: Jr('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        z('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        z('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        z('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  va = _r((e, t) => {
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
      c = Cr('chakra-icon', s),
      d = Lo('Icon', e),
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
      v = n ?? ag.viewBox
    if (r && typeof r != 'string') return z(st.svg, { as: r, ...h, ...u })
    const S = a ?? ag.path
    return z(st.svg, { verticalAlign: 'middle', viewBox: v, ...h, ...u, children: S })
  })
va.displayName = 'Icon'
function gM(e) {
  return z(va, {
    viewBox: '0 0 24 24',
    ...e,
    children: z('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  })
}
function yM(e) {
  return z(va, {
    viewBox: '0 0 24 24',
    ...e,
    children: z('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  })
}
function sg(e) {
  return z(va, {
    viewBox: '0 0 24 24',
    ...e,
    children: z('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  })
}
var vM = Sw({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  RS = _r((e, t) => {
    const r = Lo('Spinner', e),
      {
        label: n = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = Do(e),
      u = Cr('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${vM} ${i} linear infinite`,
        ...r,
      }
    return z(st.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && z(st.span, { srOnly: !0, children: n }),
    })
  })
RS.displayName = 'Spinner'
var [SM, bM] = sa({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
  [xM, Cp] = sa({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  zS = {
    info: { icon: yM, colorScheme: 'blue' },
    warning: { icon: sg, colorScheme: 'orange' },
    success: { icon: gM, colorScheme: 'green' },
    error: { icon: sg, colorScheme: 'red' },
    loading: { icon: RS, colorScheme: 'blue' },
  }
function wM(e) {
  return zS[e].colorScheme
}
function kM(e) {
  return zS[e].icon
}
var MS = _r(function (t, r) {
  const o = { display: 'inline', ...Cp().description }
  return z(st.div, { ref: r, ...t, className: Cr('chakra-alert__desc', t.className), __css: o })
})
MS.displayName = 'AlertDescription'
function DS(e) {
  const { status: t } = bM(),
    r = kM(t),
    n = Cp(),
    o = t === 'loading' ? n.spinner : n.icon
  return z(st.span, {
    display: 'inherit',
    ...e,
    className: Cr('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || z(r, { h: '100%', w: '100%' }),
  })
}
DS.displayName = 'AlertIcon'
var LS = _r(function (t, r) {
  const n = Cp()
  return z(st.div, {
    ref: r,
    ...t,
    className: Cr('chakra-alert__title', t.className),
    __css: n.title,
  })
})
LS.displayName = 'AlertTitle'
var FS = _r(function (t, r) {
  var n
  const { status: o = 'info', addRole: i = !0, ...a } = Do(t),
    s = (n = t.colorScheme) != null ? n : wM(o),
    l = P3('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    }
  return z(SM, {
    value: { status: o },
    children: z(xM, {
      value: l,
      children: z(st.div, {
        role: i ? 'alert' : void 0,
        ref: r,
        ...a,
        className: Cr('chakra-alert', t.className),
        __css: u,
      }),
    }),
  })
})
FS.displayName = 'Alert'
function CM(e) {
  return z(va, {
    'focusable': 'false',
    'aria-hidden': !0,
    ...e,
    'children': z('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  })
}
var BS = _r(function (t, r) {
  const n = Lo('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = Do(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  return z(st.button, {
    'type': 'button',
    'aria-label': 'Close',
    'ref': r,
    'disabled': i,
    '__css': { ...l, ...n, ...a },
    ...s,
    'children': o || z(CM, { width: '1em', height: '1em' }),
  })
})
BS.displayName = 'CloseButton'
var _M = {
    'top': [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom': [],
    'bottom-right': [],
  },
  Pi = TM(_M)
function TM(e) {
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
      const a = PM(o, i),
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
            { position: l, index: u } = Zm(s, o)
          return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: $M(i) }), s
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
        const a = p1(i, o)
        return a ? { ...i, [a]: i[a].map((s) => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
      })
    },
    isActive: (o) => !!Zm(Pi.getState(), o).position,
  }
}
var lg = 0
function PM(e, t = {}) {
  var r, n
  lg += 1
  const o = (r = t.id) != null ? r : lg,
    i = (n = t.position) != null ? n : 'bottom'
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Pi.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  }
}
var EM = (e) => {
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
  return Jr(FS, {
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
      z(DS, { children: u }),
      Jr(st.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && z(LS, { id: c == null ? void 0 : c.title, children: o }),
          s && z(MS, { id: c == null ? void 0 : c.description, display: 'block', children: s }),
        ],
      }),
      i && z(BS, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  })
}
function $M(e = {}) {
  const { render: t, toastComponent: r = EM } = e
  return (o) => (typeof t == 'function' ? t({ ...o, ...e }) : z(r, { ...o, ...e }))
}
var [AM, WM] = sa({ name: 'ToastOptionsContext', strict: !1 }),
  RM = (e) => {
    const t = _.useSyncExternalStore(Pi.subscribe, Pi.getState, Pi.getState),
      { motionVariants: r, component: n = AS, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s]
        return z(
          'ul',
          {
            'role': 'region',
            'aria-live': 'polite',
            'id': `chakra-toast-manager-${s}`,
            'style': Q3(s),
            'children': z(hM, {
              initial: !1,
              children: l.map((u) => z(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        )
      })
    return z(Hl, { ...o, children: a })
  },
  zM = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return Jr(G3, {
        theme: n,
        ...i,
        children: [
          z(AM, { value: o == null ? void 0 : o.defaultOptions, children: r }),
          z(RM, { ...o }),
        ],
      })
    },
  MM = zM(y3),
  Nd = _r(function (t, r) {
    const n = Lo('Heading', t),
      { className: o, ...i } = Do(t)
    return z(st.h2, { ref: r, className: Cr('chakra-heading', t.className), ...i, __css: n })
  })
Nd.displayName = 'Heading'
var IS = _r(function (t, r) {
  const { className: n, centerContent: o, ...i } = Do(t),
    a = Lo('Container', t)
  return z(st.div, {
    ref: r,
    className: Cr('chakra-container', n),
    ...i,
    __css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
  })
})
IS.displayName = 'Container'
var VS = _r(function (t, r) {
  const {
      borderLeftWidth: n,
      borderBottomWidth: o,
      borderTopWidth: i,
      borderRightWidth: a,
      borderWidth: s,
      borderStyle: l,
      borderColor: u,
      ...c
    } = Lo('Divider', t),
    { className: d, orientation: f = 'horizontal', __css: h, ...v } = Do(t),
    S = {
      vertical: { borderLeftWidth: n || a || s || '1px', height: '100%' },
      horizontal: { borderBottomWidth: o || i || s || '1px', width: '100%' },
    }
  return z(st.hr, {
    'ref': r,
    'aria-orientation': f,
    ...v,
    '__css': { ...c, border: '0', borderColor: u, borderStyle: l, ...S[f], ...h },
    'className': Cr('chakra-divider', d),
  })
})
VS.displayName = 'Divider'
var jd = {},
  ug = zi
;(jd.createRoot = ug.createRoot), (jd.hydrateRoot = ug.hydrateRoot)
var OS = 'https://static.elfsight.com/platform/platform.js'
function DM() {
  _.useEffect(function () {
    LM() || IM()
  }, [])
}
function LM() {
  return FM() || BM()
}
function FM() {
  return 'eapps' in window
}
function BM() {
  return !!document.querySelector('script[src="' + OS + '"]')
}
function IM() {
  var e = document.createElement('script')
  ;(e.src = OS), (e.defer = !0), document.head.appendChild(e)
}
function VM(e) {
  var t = e.widgetID
  return DM(), An.createElement('div', { className: 'elfsight-app-' + t })
}
var OM = _.memo(VM)
function NM() {
  return Jr(IS, {
    maxW: '6xl',
    children: [
      z(Nd, { children: 'Sedona Guest Services' }),
      z(VS, {}),
      z(Nd, { children: 'Reviews' }),
      z(OM, { widgetID: 'd254839d-abb3-4085-b4a1-59a38451e70f' }),
    ],
  })
}
jd.createRoot(document.getElementById('root')).render(
  z(An.StrictMode, { children: z(MM, { children: z(NM, {}) }) })
)
