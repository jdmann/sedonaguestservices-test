function Qw(e, t) {
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
var Fs =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function Xw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var za = {},
  qw = {
    get exports() {
      return za
    },
    set exports(e) {
      za = e
    },
  },
  _u = {},
  x = {},
  Zw = {
    get exports() {
      return x
    },
    set exports(e) {
      x = e
    },
  },
  ee = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = Symbol.for('react.element'),
  Jw = Symbol.for('react.portal'),
  ek = Symbol.for('react.fragment'),
  tk = Symbol.for('react.strict_mode'),
  rk = Symbol.for('react.profiler'),
  nk = Symbol.for('react.provider'),
  ok = Symbol.for('react.context'),
  ik = Symbol.for('react.forward_ref'),
  ak = Symbol.for('react.suspense'),
  sk = Symbol.for('react.memo'),
  lk = Symbol.for('react.lazy'),
  bm = Symbol.iterator
function uk(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (bm && e[bm]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var av = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sv = Object.assign,
  lv = {}
function wi(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = lv), (this.updater = r || av)
}
wi.prototype.isReactComponent = {}
wi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
wi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function uv() {}
uv.prototype = wi.prototype
function bh(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = lv), (this.updater = r || av)
}
var Sh = (bh.prototype = new uv())
Sh.constructor = bh
sv(Sh, wi.prototype)
Sh.isPureReactComponent = !0
var Sm = Array.isArray,
  cv = Object.prototype.hasOwnProperty,
  xh = { current: null },
  dv = { key: !0, ref: !0, __self: !0, __source: !0 }
function fv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      cv.call(t, n) && !dv.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: hs, type: e, key: i, ref: a, props: o, _owner: xh.current }
}
function ck(e, t) {
  return { $$typeof: hs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function wh(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === hs
}
function dk(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var xm = /\/+/g
function Lc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? dk('' + e.key) : t.toString(36)
}
function hl(e, t, r, n, o) {
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
          case hs:
          case Jw:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + Lc(a, 0) : n),
      Sm(o)
        ? ((r = ''),
          e != null && (r = e.replace(xm, '$&/') + '/'),
          hl(o, t, r, '', function (u) {
            return u
          }))
        : o != null &&
          (wh(o) &&
            (o = ck(
              o,
              r +
                (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(xm, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), Sm(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + Lc(i, s)
      a += hl(i, t, r, l, o)
    }
  else if (((l = uk(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Lc(i, s++)), (a += hl(i, t, r, l, o))
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
function Is(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    hl(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function fk(e) {
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
var _t = { current: null },
  pl = { transition: null },
  hk = { ReactCurrentDispatcher: _t, ReactCurrentBatchConfig: pl, ReactCurrentOwner: xh }
ee.Children = {
  map: Is,
  forEach: function (e, t, r) {
    Is(
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
      Is(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Is(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!wh(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
ee.Component = wi
ee.Fragment = ek
ee.Profiler = rk
ee.PureComponent = bh
ee.StrictMode = tk
ee.Suspense = ak
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hk
ee.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var n = sv({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = xh.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      cv.call(t, l) &&
        !dv.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    n.children = s
  }
  return { $$typeof: hs, type: e.type, key: o, ref: i, props: n, _owner: a }
}
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: ok,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nk, _context: e }),
    (e.Consumer = e)
  )
}
ee.createElement = fv
ee.createFactory = function (e) {
  var t = fv.bind(null, e)
  return (t.type = e), t
}
ee.createRef = function () {
  return { current: null }
}
ee.forwardRef = function (e) {
  return { $$typeof: ik, render: e }
}
ee.isValidElement = wh
ee.lazy = function (e) {
  return { $$typeof: lk, _payload: { _status: -1, _result: e }, _init: fk }
}
ee.memo = function (e, t) {
  return { $$typeof: sk, type: e, compare: t === void 0 ? null : t }
}
ee.startTransition = function (e) {
  var t = pl.transition
  pl.transition = {}
  try {
    e()
  } finally {
    pl.transition = t
  }
}
ee.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
ee.useCallback = function (e, t) {
  return _t.current.useCallback(e, t)
}
ee.useContext = function (e) {
  return _t.current.useContext(e)
}
ee.useDebugValue = function () {}
ee.useDeferredValue = function (e) {
  return _t.current.useDeferredValue(e)
}
ee.useEffect = function (e, t) {
  return _t.current.useEffect(e, t)
}
ee.useId = function () {
  return _t.current.useId()
}
ee.useImperativeHandle = function (e, t, r) {
  return _t.current.useImperativeHandle(e, t, r)
}
ee.useInsertionEffect = function (e, t) {
  return _t.current.useInsertionEffect(e, t)
}
ee.useLayoutEffect = function (e, t) {
  return _t.current.useLayoutEffect(e, t)
}
ee.useMemo = function (e, t) {
  return _t.current.useMemo(e, t)
}
ee.useReducer = function (e, t, r) {
  return _t.current.useReducer(e, t, r)
}
ee.useRef = function (e) {
  return _t.current.useRef(e)
}
ee.useState = function (e) {
  return _t.current.useState(e)
}
ee.useSyncExternalStore = function (e, t, r) {
  return _t.current.useSyncExternalStore(e, t, r)
}
ee.useTransition = function () {
  return _t.current.useTransition()
}
ee.version = '18.2.0'
;(function (e) {
  e.exports = ee
})(Zw)
const zt = Xw(x),
  Aa = Qw({ __proto__: null, default: zt }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pk = x,
  mk = Symbol.for('react.element'),
  gk = Symbol.for('react.fragment'),
  yk = Object.prototype.hasOwnProperty,
  vk = pk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bk = { key: !0, ref: !0, __self: !0, __source: !0 }
function hv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) yk.call(t, n) && !bk.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: mk, type: e, key: i, ref: a, props: o, _owner: vk.current }
}
_u.Fragment = gk
_u.jsx = hv
_u.jsxs = hv
;(function (e) {
  e.exports = _u
})(qw)
const kh = za.Fragment,
  A = za.jsx,
  gt = za.jsxs
function Sk(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function xk(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var wk = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xk(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = Sk(o)
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
  ft = '-ms-',
  Ll = '-moz-',
  fe = '-webkit-',
  pv = 'comm',
  Ch = 'rule',
  _h = 'decl',
  kk = '@import',
  mv = '@keyframes',
  Ck = Math.abs,
  Pu = String.fromCharCode,
  _k = Object.assign
function Pk(e, t) {
  return it(e, 0) ^ 45
    ? (((((((t << 2) ^ it(e, 0)) << 2) ^ it(e, 1)) << 2) ^ it(e, 2)) << 2) ^ it(e, 3)
    : 0
}
function gv(e) {
  return e.trim()
}
function Tk(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function pe(e, t, r) {
  return e.replace(t, r)
}
function Nd(e, t) {
  return e.indexOf(t)
}
function it(e, t) {
  return e.charCodeAt(t) | 0
}
function Ma(e, t, r) {
  return e.slice(t, r)
}
function $r(e) {
  return e.length
}
function Ph(e) {
  return e.length
}
function Os(e, t) {
  return t.push(e), e
}
function Ek(e, t) {
  return e.map(t).join('')
}
var Tu = 1,
  di = 1,
  yv = 0,
  Lt = 0,
  Ge = 0,
  ki = ''
function Eu(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Tu,
    column: di,
    length: a,
    return: '',
  }
}
function Ii(e, t) {
  return _k(Eu('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function $k() {
  return Ge
}
function Rk() {
  return (Ge = Lt > 0 ? it(ki, --Lt) : 0), di--, Ge === 10 && ((di = 1), Tu--), Ge
}
function Ht() {
  return (Ge = Lt < yv ? it(ki, Lt++) : 0), di++, Ge === 10 && ((di = 1), Tu++), Ge
}
function Mr() {
  return it(ki, Lt)
}
function ml() {
  return Lt
}
function ps(e, t) {
  return Ma(ki, e, t)
}
function Da(e) {
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
function vv(e) {
  return (Tu = di = 1), (yv = $r((ki = e))), (Lt = 0), []
}
function bv(e) {
  return (ki = ''), e
}
function gl(e) {
  return gv(ps(Lt - 1, jd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function zk(e) {
  for (; (Ge = Mr()) && Ge < 33; ) Ht()
  return Da(e) > 2 || Da(Ge) > 3 ? '' : ' '
}
function Ak(e, t) {
  for (; --t && Ht() && !(Ge < 48 || Ge > 102 || (Ge > 57 && Ge < 65) || (Ge > 70 && Ge < 97)); );
  return ps(e, ml() + (t < 6 && Mr() == 32 && Ht() == 32))
}
function jd(e) {
  for (; Ht(); )
    switch (Ge) {
      case e:
        return Lt
      case 34:
      case 39:
        e !== 34 && e !== 39 && jd(Ge)
        break
      case 40:
        e === 41 && jd(e)
        break
      case 92:
        Ht()
        break
    }
  return Lt
}
function Mk(e, t) {
  for (; Ht() && e + Ge !== 47 + 10; ) if (e + Ge === 42 + 42 && Mr() === 47) break
  return '/*' + ps(t, Lt - 1) + '*' + Pu(e === 47 ? e : Ht())
}
function Dk(e) {
  for (; !Da(Mr()); ) Ht()
  return ps(e, Lt)
}
function Lk(e) {
  return bv(yl('', null, null, null, [''], (e = vv(e)), 0, [0], e))
}
function yl(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      p = 0,
      b = 0,
      S = 1,
      y = 1,
      m = 1,
      h = 0,
      g = '',
      w = o,
      _ = i,
      z = n,
      T = g;
    y;

  )
    switch (((b = h), (h = Ht()))) {
      case 40:
        if (b != 108 && it(T, d - 1) == 58) {
          Nd((T += pe(gl(h), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        T += gl(h)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        T += zk(b)
        break
      case 92:
        T += Ak(ml() - 1, 7)
        continue
      case 47:
        switch (Mr()) {
          case 42:
          case 47:
            Os(Bk(Mk(Ht(), ml()), t, r), l)
            break
          default:
            T += '/'
        }
        break
      case 123 * S:
        s[u++] = $r(T) * m
      case 125 * S:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            y = 0
          case 59 + c:
            p > 0 &&
              $r(T) - d &&
              Os(p > 32 ? km(T + ';', n, r, d - 1) : km(pe(T, ' ', '') + ';', n, r, d - 2), l)
            break
          case 59:
            T += ';'
          default:
            if ((Os((z = wm(T, t, r, u, c, o, s, g, (w = []), (_ = []), d)), i), h === 123))
              if (c === 0) yl(T, t, z, z, w, i, d, s, _)
              else
                switch (f === 99 && it(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    yl(
                      e,
                      z,
                      z,
                      n && Os(wm(e, z, z, 0, 0, o, s, g, o, (w = []), d), _),
                      o,
                      _,
                      d,
                      s,
                      n ? w : _
                    )
                    break
                  default:
                    yl(T, z, z, z, [''], _, 0, s, _)
                }
        }
        ;(u = c = p = 0), (S = m = 1), (g = T = ''), (d = a)
        break
      case 58:
        ;(d = 1 + $r(T)), (p = b)
      default:
        if (S < 1) {
          if (h == 123) --S
          else if (h == 125 && S++ == 0 && Rk() == 125) continue
        }
        switch (((T += Pu(h)), h * S)) {
          case 38:
            m = c > 0 ? 1 : ((T += '\f'), -1)
            break
          case 44:
            ;(s[u++] = ($r(T) - 1) * m), (m = 1)
            break
          case 64:
            Mr() === 45 && (T += gl(Ht())), (f = Mr()), (c = d = $r((g = T += Dk(ml())))), h++
            break
          case 45:
            b === 45 && $r(T) == 2 && (S = 0)
        }
    }
  return i
}
function wm(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [''], p = Ph(f), b = 0, S = 0, y = 0; b < n; ++b)
    for (var m = 0, h = Ma(e, d + 1, (d = Ck((S = a[b])))), g = e; m < p; ++m)
      (g = gv(S > 0 ? f[m] + ' ' + h : pe(h, /&\f/g, f[m]))) && (l[y++] = g)
  return Eu(e, t, r, o === 0 ? Ch : s, l, u, c)
}
function Bk(e, t, r) {
  return Eu(e, t, r, pv, Pu($k()), Ma(e, 2, -2), 0)
}
function km(e, t, r, n) {
  return Eu(e, t, r, _h, Ma(e, 0, n), Ma(e, n + 1, -1), n)
}
function Jo(e, t) {
  for (var r = '', n = Ph(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function Fk(e, t, r, n) {
  switch (e.type) {
    case kk:
    case _h:
      return (e.return = e.return || e.value)
    case pv:
      return ''
    case mv:
      return (e.return = e.value + '{' + Jo(e.children, n) + '}')
    case Ch:
      e.value = e.props.join(',')
  }
  return $r((r = Jo(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function Ik(e) {
  var t = Ph(e)
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
    return a
  }
}
function Ok(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var Cm = function (t) {
  var r = new WeakMap()
  return function (n) {
    if (r.has(n)) return r.get(n)
    var o = t(n)
    return r.set(n, o), o
  }
}
function Sv(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var Vk = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = Mr()), o === 38 && i === 12 && (r[n] = 1), !Da(i); ) Ht()
    return ps(t, Lt)
  },
  Nk = function (t, r) {
    var n = -1,
      o = 44
    do
      switch (Da(o)) {
        case 0:
          o === 38 && Mr() === 12 && (r[n] = 1), (t[n] += Vk(Lt - 1, r, n))
          break
        case 2:
          t[n] += gl(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++n] = Mr() === 58 ? '&\f' : ''), (r[n] = t[n].length)
            break
          }
        default:
          t[n] += Pu(o)
      }
    while ((o = Ht()))
    return t
  },
  jk = function (t, r) {
    return bv(Nk(vv(t), r))
  },
  _m = new WeakMap(),
  Wk = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_m.get(n)) && !o) {
        _m.set(t, !0)
        for (var i = [], a = jk(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l]
      }
    }
  },
  Uk = function (t) {
    if (t.type === 'decl') {
      var r = t.value
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function xv(e, t) {
  switch (Pk(e, t)) {
    case 5103:
      return fe + 'print-' + e + e
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
      return fe + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return fe + e + Ll + e + ft + e + e
    case 6828:
    case 4268:
      return fe + e + ft + e + e
    case 6165:
      return fe + e + ft + 'flex-' + e + e
    case 5187:
      return fe + e + pe(e, /(\w+).+(:[^]+)/, fe + 'box-$1$2' + ft + 'flex-$1$2') + e
    case 5443:
      return fe + e + ft + 'flex-item-' + pe(e, /flex-|-self/, '') + e
    case 4675:
      return fe + e + ft + 'flex-line-pack' + pe(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return fe + e + ft + pe(e, 'shrink', 'negative') + e
    case 5292:
      return fe + e + ft + pe(e, 'basis', 'preferred-size') + e
    case 6060:
      return fe + 'box-' + pe(e, '-grow', '') + fe + e + ft + pe(e, 'grow', 'positive') + e
    case 4554:
      return fe + pe(e, /([^-])(transform)/g, '$1' + fe + '$2') + e
    case 6187:
      return pe(pe(pe(e, /(zoom-|grab)/, fe + '$1'), /(image-set)/, fe + '$1'), e, '') + e
    case 5495:
    case 3959:
      return pe(e, /(image-set\([^]*)/, fe + '$1$`$1')
    case 4968:
      return (
        pe(
          pe(e, /(.+:)(flex-)?(.*)/, fe + 'box-pack:$3' + ft + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        fe +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pe(e, /(.+)-inline(.+)/, fe + '$1$2') + e
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
      if ($r(e) - 1 - t > 6)
        switch (it(e, t + 1)) {
          case 109:
            if (it(e, t + 4) !== 45) break
          case 102:
            return (
              pe(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + fe + '$2-$3$1' + Ll + (it(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Nd(e, 'stretch') ? xv(pe(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (it(e, t + 1) !== 115) break
    case 6444:
      switch (it(e, $r(e) - 3 - (~Nd(e, '!important') && 10))) {
        case 107:
          return pe(e, ':', ':' + fe) + e
        case 101:
          return (
            pe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                fe +
                (it(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                fe +
                '$2$3$1' +
                ft +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (it(e, t + 11)) {
        case 114:
          return fe + e + ft + pe(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return fe + e + ft + pe(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return fe + e + ft + pe(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return fe + e + ft + e + e
  }
  return e
}
var Hk = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case _h:
          t.return = xv(t.value, t.length)
          break
        case mv:
          return Jo([Ii(t, { value: pe(t.value, '@', '@' + fe) })], o)
        case Ch:
          if (t.length)
            return Ek(t.props, function (i) {
              switch (Tk(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Jo([Ii(t, { props: [pe(i, /:(read-\w+)/, ':' + Ll + '$1')] })], o)
                case '::placeholder':
                  return Jo(
                    [
                      Ii(t, { props: [pe(i, /:(plac\w+)/, ':' + fe + 'input-$1')] }),
                      Ii(t, { props: [pe(i, /:(plac\w+)/, ':' + Ll + '$1')] }),
                      Ii(t, { props: [pe(i, /:(plac\w+)/, ft + 'input-$1')] }),
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  Gk = [Hk],
  Kk = function (t) {
    var r = t.key
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(n, function (S) {
        var y = S.getAttribute('data-emotion')
        y.indexOf(' ') !== -1 && (document.head.appendChild(S), S.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || Gk,
      i = {},
      a,
      s = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (S) {
          for (var y = S.getAttribute('data-emotion').split(' '), m = 1; m < y.length; m++)
            i[y[m]] = !0
          s.push(S)
        }
      )
    var l,
      u = [Wk, Uk]
    {
      var c,
        d = [
          Fk,
          Ok(function (S) {
            c.insert(S)
          }),
        ],
        f = Ik(u.concat(o, d)),
        p = function (y) {
          return Jo(Lk(y), f)
        }
      l = function (y, m, h, g) {
        ;(c = h), p(y ? y + '{' + m.styles + '}' : m.styles), g && (b.inserted[m.name] = !0)
      }
    }
    var b = {
      key: r,
      sheet: new wk({
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
    return b.sheet.hydrate(s), b
  }
function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Bl.apply(this, arguments)
  )
}
var Wd = {},
  Yk = {
    get exports() {
      return Wd
    },
    set exports(e) {
      Wd = e
    },
  },
  ye = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rt = typeof Symbol == 'function' && Symbol.for,
  Th = rt ? Symbol.for('react.element') : 60103,
  Eh = rt ? Symbol.for('react.portal') : 60106,
  $u = rt ? Symbol.for('react.fragment') : 60107,
  Ru = rt ? Symbol.for('react.strict_mode') : 60108,
  zu = rt ? Symbol.for('react.profiler') : 60114,
  Au = rt ? Symbol.for('react.provider') : 60109,
  Mu = rt ? Symbol.for('react.context') : 60110,
  $h = rt ? Symbol.for('react.async_mode') : 60111,
  Du = rt ? Symbol.for('react.concurrent_mode') : 60111,
  Lu = rt ? Symbol.for('react.forward_ref') : 60112,
  Bu = rt ? Symbol.for('react.suspense') : 60113,
  Qk = rt ? Symbol.for('react.suspense_list') : 60120,
  Fu = rt ? Symbol.for('react.memo') : 60115,
  Iu = rt ? Symbol.for('react.lazy') : 60116,
  Xk = rt ? Symbol.for('react.block') : 60121,
  qk = rt ? Symbol.for('react.fundamental') : 60117,
  Zk = rt ? Symbol.for('react.responder') : 60118,
  Jk = rt ? Symbol.for('react.scope') : 60119
function Xt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Th:
        switch (((e = e.type), e)) {
          case $h:
          case Du:
          case $u:
          case zu:
          case Ru:
          case Bu:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Mu:
              case Lu:
              case Iu:
              case Fu:
              case Au:
                return e
              default:
                return t
            }
        }
      case Eh:
        return t
    }
  }
}
function wv(e) {
  return Xt(e) === Du
}
ye.AsyncMode = $h
ye.ConcurrentMode = Du
ye.ContextConsumer = Mu
ye.ContextProvider = Au
ye.Element = Th
ye.ForwardRef = Lu
ye.Fragment = $u
ye.Lazy = Iu
ye.Memo = Fu
ye.Portal = Eh
ye.Profiler = zu
ye.StrictMode = Ru
ye.Suspense = Bu
ye.isAsyncMode = function (e) {
  return wv(e) || Xt(e) === $h
}
ye.isConcurrentMode = wv
ye.isContextConsumer = function (e) {
  return Xt(e) === Mu
}
ye.isContextProvider = function (e) {
  return Xt(e) === Au
}
ye.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Th
}
ye.isForwardRef = function (e) {
  return Xt(e) === Lu
}
ye.isFragment = function (e) {
  return Xt(e) === $u
}
ye.isLazy = function (e) {
  return Xt(e) === Iu
}
ye.isMemo = function (e) {
  return Xt(e) === Fu
}
ye.isPortal = function (e) {
  return Xt(e) === Eh
}
ye.isProfiler = function (e) {
  return Xt(e) === zu
}
ye.isStrictMode = function (e) {
  return Xt(e) === Ru
}
ye.isSuspense = function (e) {
  return Xt(e) === Bu
}
ye.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === $u ||
    e === Du ||
    e === zu ||
    e === Ru ||
    e === Bu ||
    e === Qk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Iu ||
        e.$$typeof === Fu ||
        e.$$typeof === Au ||
        e.$$typeof === Mu ||
        e.$$typeof === Lu ||
        e.$$typeof === qk ||
        e.$$typeof === Zk ||
        e.$$typeof === Jk ||
        e.$$typeof === Xk))
  )
}
ye.typeOf = Xt
;(function (e) {
  e.exports = ye
})(Yk)
var kv = Wd,
  eC = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  tC = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Cv = {}
Cv[kv.ForwardRef] = eC
Cv[kv.Memo] = tC
var rC = !0
function nC(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var _v = function (t, r, n) {
    var o = t.key + '-' + r.name
    ;(n === !1 || rC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
  },
  Pv = function (t, r, n) {
    _v(t, r, n)
    var o = t.key + '-' + r.name
    if (t.inserted[r.name] === void 0) {
      var i = r
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function oC(e) {
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
var iC = {
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
  aC = /[A-Z]|^ms/g,
  sC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Tv = function (t) {
    return t.charCodeAt(1) === 45
  },
  Pm = function (t) {
    return t != null && typeof t != 'boolean'
  },
  Bc = Sv(function (e) {
    return Tv(e) ? e : e.replace(aC, '-$&').toLowerCase()
  }),
  Tm = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(sC, function (n, o, i) {
            return (Rr = { name: o, styles: i, next: Rr }), o
          })
    }
    return iC[t] !== 1 && !Tv(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r
  }
function La(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) return r
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (Rr = { name: r.name, styles: r.styles, next: Rr }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; ) (Rr = { name: n.name, styles: n.styles, next: Rr }), (n = n.next)
        var o = r.styles + ';'
        return o
      }
      return lC(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var i = Rr,
          a = r(e)
        return (Rr = i), La(e, t, a)
      }
      break
    }
  }
  if (t == null) return r
  var s = t[r]
  return s !== void 0 ? s : r
}
function lC(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += La(e, t, r[o]) + ';'
  else
    for (var i in r) {
      var a = r[i]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : Pm(a) && (n += Bc(i) + ':' + Tm(i, a) + ';')
      else if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++) Pm(a[s]) && (n += Bc(i) + ':' + Tm(i, a[s]) + ';')
      else {
        var l = La(e, t, a)
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += Bc(i) + ':' + l + ';'
            break
          }
          default:
            n += i + '{' + l + '}'
        }
      }
    }
  return n
}
var Em = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Rr,
  Rh = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0]
    var o = !0,
      i = ''
    Rr = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((o = !1), (i += La(n, r, a))) : (i += a[0])
    for (var s = 1; s < t.length; s++) (i += La(n, r, t[s])), o && (i += a[s])
    Em.lastIndex = 0
    for (var l = '', u; (u = Em.exec(i)) !== null; ) l += '-' + u[1]
    var c = oC(i) + l
    return { name: c, styles: i, next: Rr }
  },
  uC = function (t) {
    return t()
  },
  Ev = Aa['useInsertionEffect'] ? Aa['useInsertionEffect'] : !1,
  cC = Ev || uC,
  $m = Ev || x.useLayoutEffect,
  $v = x.createContext(typeof HTMLElement < 'u' ? Kk({ key: 'css' }) : null)
$v.Provider
var Rv = function (t) {
    return x.forwardRef(function (r, n) {
      var o = x.useContext($v)
      return t(r, o, n)
    })
  },
  Ba = x.createContext({}),
  dC = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t)
      return n
    }
    return Bl({}, t, r)
  },
  fC = Cm(function (e) {
    return Cm(function (t) {
      return dC(e, t)
    })
  }),
  hC = function (t) {
    var r = x.useContext(Ba)
    return (
      t.theme !== r && (r = fC(r)(t.theme)), x.createElement(Ba.Provider, { value: r }, t.children)
    )
  },
  Ou = Rv(function (e, t) {
    var r = e.styles,
      n = Rh([r], void 0, x.useContext(Ba)),
      o = x.useRef()
    return (
      $m(
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
      $m(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1]
          if (s) {
            i[1] = !1
            return
          }
          if ((n.next !== void 0 && Pv(t, n.next, !0), a.tags.length)) {
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
function pC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return Rh(t)
}
var mC = function () {
    var t = pC.apply(void 0, arguments),
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
  zv = String.raw,
  Av = zv`
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
  gC = () => A(Ou, { styles: Av }),
  yC = ({ scope: e = '' }) =>
    A(Ou, {
      styles: zv`
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

      ${Av}
    `,
    })
function vC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function Ci(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = x.createContext(a)
  s.displayName = t
  function l() {
    var u
    const c = x.useContext(s)
    if (!c && r) {
      const d = new Error(i ?? vC(n, o))
      throw (
        ((d.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, d, l), d)
      )
    }
    return c
  }
  return [s.Provider, l, s]
}
var [bC, SC] = Ci({ strict: !1, name: 'PortalManagerContext' })
function Mv(e) {
  const { children: t, zIndex: r } = e
  return A(bC, { value: { zIndex: r }, children: t })
}
Mv.displayName = 'PortalManager'
var Fa = globalThis != null && globalThis.document ? x.useLayoutEffect : x.useEffect,
  Ia = {},
  xC = {
    get exports() {
      return Ia
    },
    set exports(e) {
      Ia = e
    },
  },
  qt = {},
  Ud = {},
  wC = {
    get exports() {
      return Ud
    },
    set exports(e) {
      Ud = e
    },
  },
  Dv = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(L, Y) {
    var V = L.length
    L.push(Y)
    e: for (; 0 < V; ) {
      var U = (V - 1) >>> 1,
        ve = L[U]
      if (0 < o(ve, Y)) (L[U] = Y), (L[V] = ve), (V = U)
      else break e
    }
  }
  function r(L) {
    return L.length === 0 ? null : L[0]
  }
  function n(L) {
    if (L.length === 0) return null
    var Y = L[0],
      V = L.pop()
    if (V !== Y) {
      L[0] = V
      e: for (var U = 0, ve = L.length, te = ve >>> 1; U < te; ) {
        var Fe = 2 * (U + 1) - 1,
          xr = L[Fe],
          Ne = Fe + 1,
          Ft = L[Ne]
        if (0 > o(xr, V))
          Ne < ve && 0 > o(Ft, xr)
            ? ((L[U] = Ft), (L[Ne] = V), (U = Ne))
            : ((L[U] = xr), (L[Fe] = V), (U = Fe))
        else if (Ne < ve && 0 > o(Ft, V)) (L[U] = Ft), (L[Ne] = V), (U = Ne)
        else break e
      }
    }
    return Y
  }
  function o(L, Y) {
    var V = L.sortIndex - Y.sortIndex
    return V !== 0 ? V : L.id - Y.id
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
    p = !1,
    b = !1,
    S = !1,
    y = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function g(L) {
    for (var Y = r(u); Y !== null; ) {
      if (Y.callback === null) n(u)
      else if (Y.startTime <= L) n(u), (Y.sortIndex = Y.expirationTime), t(l, Y)
      else break
      Y = r(u)
    }
  }
  function w(L) {
    if (((S = !1), g(L), !b))
      if (r(l) !== null) (b = !0), Ze(_)
      else {
        var Y = r(u)
        Y !== null && Tt(w, Y.startTime - L)
      }
  }
  function _(L, Y) {
    ;(b = !1), S && ((S = !1), m($), ($ = -1)), (p = !0)
    var V = f
    try {
      for (g(Y), d = r(l); d !== null && (!(d.expirationTime > Y) || (L && !ue())); ) {
        var U = d.callback
        if (typeof U == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var ve = U(d.expirationTime <= Y)
          ;(Y = e.unstable_now()),
            typeof ve == 'function' ? (d.callback = ve) : d === r(l) && n(l),
            g(Y)
        } else n(l)
        d = r(l)
      }
      if (d !== null) var te = !0
      else {
        var Fe = r(u)
        Fe !== null && Tt(w, Fe.startTime - Y), (te = !1)
      }
      return te
    } finally {
      ;(d = null), (f = V), (p = !1)
    }
  }
  var z = !1,
    T = null,
    $ = -1,
    j = 5,
    O = -1
  function ue() {
    return !(e.unstable_now() - O < j)
  }
  function ze() {
    if (T !== null) {
      var L = e.unstable_now()
      O = L
      var Y = !0
      try {
        Y = T(!0, L)
      } finally {
        Y ? Ve() : ((z = !1), (T = null))
      }
    } else z = !1
  }
  var Ve
  if (typeof h == 'function')
    Ve = function () {
      h(ze)
    }
  else if (typeof MessageChannel < 'u') {
    var ce = new MessageChannel(),
      se = ce.port2
    ;(ce.port1.onmessage = ze),
      (Ve = function () {
        se.postMessage(null)
      })
  } else
    Ve = function () {
      y(ze, 0)
    }
  function Ze(L) {
    ;(T = L), z || ((z = !0), Ve())
  }
  function Tt(L, Y) {
    $ = y(function () {
      L(e.unstable_now())
    }, Y)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null
    }),
    (e.unstable_continueExecution = function () {
      b || p || ((b = !0), Ze(_))
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < L ? Math.floor(1e3 / L) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l)
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var Y = 3
          break
        default:
          Y = f
      }
      var V = f
      f = Y
      try {
        return L()
      } finally {
        f = V
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, Y) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          L = 3
      }
      var V = f
      f = L
      try {
        return Y()
      } finally {
        f = V
      }
    }),
    (e.unstable_scheduleCallback = function (L, Y, V) {
      var U = e.unstable_now()
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? U + V : U))
          : (V = U),
        L)
      ) {
        case 1:
          var ve = -1
          break
        case 2:
          ve = 250
          break
        case 5:
          ve = 1073741823
          break
        case 4:
          ve = 1e4
          break
        default:
          ve = 5e3
      }
      return (
        (ve = V + ve),
        (L = {
          id: c++,
          callback: Y,
          priorityLevel: L,
          startTime: V,
          expirationTime: ve,
          sortIndex: -1,
        }),
        V > U
          ? ((L.sortIndex = V),
            t(u, L),
            r(l) === null && L === r(u) && (S ? (m($), ($ = -1)) : (S = !0), Tt(w, V - U)))
          : ((L.sortIndex = ve), t(l, L), b || p || ((b = !0), Ze(_))),
        L
      )
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (L) {
      var Y = f
      return function () {
        var V = f
        f = Y
        try {
          return L.apply(this, arguments)
        } finally {
          f = V
        }
      }
    })
})(Dv)
;(function (e) {
  e.exports = Dv
})(wC)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lv = x,
  Yt = Ud
function D(e) {
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
var Bv = new Set(),
  Oa = {}
function wo(e, t) {
  fi(e, t), fi(e + 'Capture', t)
}
function fi(e, t) {
  for (Oa[e] = t, e = 0; e < t.length; e++) Bv.add(t[e])
}
var rn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Hd = Object.prototype.hasOwnProperty,
  kC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rm = {},
  zm = {}
function CC(e) {
  return Hd.call(zm, e) ? !0 : Hd.call(Rm, e) ? !1 : kC.test(e) ? (zm[e] = !0) : ((Rm[e] = !0), !1)
}
function _C(e, t, r, n) {
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
function PC(e, t, r, n) {
  if (t === null || typeof t > 'u' || _C(e, t, r, n)) return !0
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
function Pt(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var st = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    st[e] = new Pt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  st[t] = new Pt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  st[e] = new Pt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  st[e] = new Pt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    st[e] = new Pt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  st[e] = new Pt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  st[e] = new Pt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  st[e] = new Pt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  st[e] = new Pt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var zh = /[\-:]([a-z])/g
function Ah(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zh, Ah)
    st[t] = new Pt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zh, Ah)
    st[t] = new Pt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(zh, Ah)
  st[t] = new Pt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  st[e] = new Pt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
st.xlinkHref = new Pt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  st[e] = new Pt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Mh(e, t, r, n) {
  var o = st.hasOwnProperty(t) ? st[t] : null
  ;(o !== null
    ? o.type !== 0
    : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (PC(t, r, o, n) && (r = null),
    n || o === null
      ? CC(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
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
var un = Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vs = Symbol.for('react.element'),
  Bo = Symbol.for('react.portal'),
  Fo = Symbol.for('react.fragment'),
  Dh = Symbol.for('react.strict_mode'),
  Gd = Symbol.for('react.profiler'),
  Fv = Symbol.for('react.provider'),
  Iv = Symbol.for('react.context'),
  Lh = Symbol.for('react.forward_ref'),
  Kd = Symbol.for('react.suspense'),
  Yd = Symbol.for('react.suspense_list'),
  Bh = Symbol.for('react.memo'),
  Sn = Symbol.for('react.lazy'),
  Ov = Symbol.for('react.offscreen'),
  Am = Symbol.iterator
function Oi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Am && e[Am]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Be = Object.assign,
  Fc
function Ji(e) {
  if (Fc === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      Fc = (t && t[1]) || ''
    }
  return (
    `
` +
    Fc +
    e
  )
}
var Ic = !1
function Oc(e, t) {
  if (!e || Ic) return ''
  Ic = !0
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
    ;(Ic = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? Ji(e) : ''
}
function TC(e) {
  switch (e.tag) {
    case 5:
      return Ji(e.type)
    case 16:
      return Ji('Lazy')
    case 13:
      return Ji('Suspense')
    case 19:
      return Ji('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Oc(e.type, !1)), e
    case 11:
      return (e = Oc(e.type.render, !1)), e
    case 1:
      return (e = Oc(e.type, !0)), e
    default:
      return ''
  }
}
function Qd(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Fo:
      return 'Fragment'
    case Bo:
      return 'Portal'
    case Gd:
      return 'Profiler'
    case Dh:
      return 'StrictMode'
    case Kd:
      return 'Suspense'
    case Yd:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Iv:
        return (e.displayName || 'Context') + '.Consumer'
      case Fv:
        return (e._context.displayName || 'Context') + '.Provider'
      case Lh:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Bh:
        return (t = e.displayName || null), t !== null ? t : Qd(e.type) || 'Memo'
      case Sn:
        ;(t = e._payload), (e = e._init)
        try {
          return Qd(e(t))
        } catch {}
    }
  return null
}
function EC(e) {
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
      return Qd(t)
    case 8:
      return t === Dh ? 'StrictMode' : 'Mode'
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
function Nn(e) {
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
function Vv(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function $C(e) {
  var t = Vv(e) ? 'checked' : 'value',
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
function Ns(e) {
  e._valueTracker || (e._valueTracker = $C(e))
}
function Nv(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = Vv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function Fl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Xd(e, t) {
  var r = t.checked
  return Be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function Mm(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = Nn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function jv(e, t) {
  ;(t = t.checked), t != null && Mh(e, 'checked', t, !1)
}
function qd(e, t) {
  jv(e, t)
  var r = Nn(t.value),
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
    ? Zd(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Zd(e, t.type, Nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Dm(e, t, r) {
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
function Zd(e, t, r) {
  ;(t !== 'number' || Fl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var ea = Array.isArray
function ei(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + Nn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Jd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91))
  return Be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Lm(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(D(92))
      if (ea(r)) {
        if (1 < r.length) throw Error(D(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: Nn(r) }
}
function Wv(e, t) {
  var r = Nn(t.value),
    n = Nn(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function Bm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Uv(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ef(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Uv(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var js,
  Hv = (function (e) {
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
        js = js || document.createElement('div'),
          js.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Va(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var la = {
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
  RC = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(la).forEach(function (e) {
  RC.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (la[t] = la[e])
  })
})
function Gv(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (la.hasOwnProperty(e) && la[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Kv(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = Gv(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var zC = Be(
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
function tf(e, t) {
  if (t) {
    if (zC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(D(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(D(62))
  }
}
function rf(e, t) {
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
var nf = null
function Fh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var of = null,
  ti = null,
  ri = null
function Fm(e) {
  if ((e = ys(e))) {
    if (typeof of != 'function') throw Error(D(280))
    var t = e.stateNode
    t && ((t = Uu(t)), of(e.stateNode, e.type, t))
  }
}
function Yv(e) {
  ti ? (ri ? ri.push(e) : (ri = [e])) : (ti = e)
}
function Qv() {
  if (ti) {
    var e = ti,
      t = ri
    if (((ri = ti = null), Fm(e), t)) for (e = 0; e < t.length; e++) Fm(t[e])
  }
}
function Xv(e, t) {
  return e(t)
}
function qv() {}
var Vc = !1
function Zv(e, t, r) {
  if (Vc) return e(t, r)
  Vc = !0
  try {
    return Xv(e, t, r)
  } finally {
    ;(Vc = !1), (ti !== null || ri !== null) && (qv(), Qv())
  }
}
function Na(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = Uu(r)
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
  if (r && typeof r != 'function') throw Error(D(231, t, typeof r))
  return r
}
var af = !1
if (rn)
  try {
    var Vi = {}
    Object.defineProperty(Vi, 'passive', {
      get: function () {
        af = !0
      },
    }),
      window.addEventListener('test', Vi, Vi),
      window.removeEventListener('test', Vi, Vi)
  } catch {
    af = !1
  }
function AC(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var ua = !1,
  Il = null,
  Ol = !1,
  sf = null,
  MC = {
    onError: function (e) {
      ;(ua = !0), (Il = e)
    },
  }
function DC(e, t, r, n, o, i, a, s, l) {
  ;(ua = !1), (Il = null), AC.apply(MC, arguments)
}
function LC(e, t, r, n, o, i, a, s, l) {
  if ((DC.apply(this, arguments), ua)) {
    if (ua) {
      var u = Il
      ;(ua = !1), (Il = null)
    } else throw Error(D(198))
    Ol || ((Ol = !0), (sf = u))
  }
}
function ko(e) {
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
function Jv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function Im(e) {
  if (ko(e) !== e) throw Error(D(188))
}
function BC(e) {
  var t = e.alternate
  if (!t) {
    if (((t = ko(e)), t === null)) throw Error(D(188))
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
        if (i === r) return Im(o), e
        if (i === n) return Im(o), t
        i = i.sibling
      }
      throw Error(D(188))
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
        if (!a) throw Error(D(189))
      }
    }
    if (r.alternate !== n) throw Error(D(190))
  }
  if (r.tag !== 3) throw Error(D(188))
  return r.stateNode.current === r ? e : t
}
function e1(e) {
  return (e = BC(e)), e !== null ? t1(e) : null
}
function t1(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = t1(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var r1 = Yt.unstable_scheduleCallback,
  Om = Yt.unstable_cancelCallback,
  FC = Yt.unstable_shouldYield,
  IC = Yt.unstable_requestPaint,
  We = Yt.unstable_now,
  OC = Yt.unstable_getCurrentPriorityLevel,
  Ih = Yt.unstable_ImmediatePriority,
  n1 = Yt.unstable_UserBlockingPriority,
  Vl = Yt.unstable_NormalPriority,
  VC = Yt.unstable_LowPriority,
  o1 = Yt.unstable_IdlePriority,
  Vu = null,
  Dr = null
function NC(e) {
  if (Dr && typeof Dr.onCommitFiberRoot == 'function')
    try {
      Dr.onCommitFiberRoot(Vu, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var vr = Math.clz32 ? Math.clz32 : UC,
  jC = Math.log,
  WC = Math.LN2
function UC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jC(e) / WC) | 0)) | 0
}
var Ws = 64,
  Us = 4194304
function ta(e) {
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
function Nl(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = ta(s)) : ((i &= a), i !== 0 && (n = ta(i)))
  } else (a = r & ~o), a !== 0 ? (n = ta(a)) : i !== 0 && (n = ta(i))
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
      (r = 31 - vr(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function HC(e, t) {
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
function GC(e, t) {
  for (
    var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - vr(i),
      s = 1 << a,
      l = o[a]
    l === -1 ? (!(s & r) || s & n) && (o[a] = HC(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
  }
}
function lf(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function i1() {
  var e = Ws
  return (Ws <<= 1), !(Ws & 4194240) && (Ws = 64), e
}
function Nc(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function ms(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vr(t)),
    (e[t] = r)
}
function KC(e, t) {
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
    var o = 31 - vr(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function Oh(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - vr(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var ge = 0
function a1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var s1,
  Vh,
  l1,
  u1,
  c1,
  uf = !1,
  Hs = [],
  $n = null,
  Rn = null,
  zn = null,
  ja = new Map(),
  Wa = new Map(),
  kn = [],
  YC =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Vm(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      $n = null
      break
    case 'dragenter':
    case 'dragleave':
      Rn = null
      break
    case 'mouseover':
    case 'mouseout':
      zn = null
      break
    case 'pointerover':
    case 'pointerout':
      ja.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Wa.delete(t.pointerId)
  }
}
function Ni(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ys(t)), t !== null && Vh(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function QC(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return ($n = Ni($n, e, t, r, n, o)), !0
    case 'dragenter':
      return (Rn = Ni(Rn, e, t, r, n, o)), !0
    case 'mouseover':
      return (zn = Ni(zn, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return ja.set(i, Ni(ja.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Wa.set(i, Ni(Wa.get(i) || null, e, t, r, n, o)), !0
  }
  return !1
}
function d1(e) {
  var t = io(e.target)
  if (t !== null) {
    var r = ko(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Jv(r)), t !== null)) {
          ;(e.blockedOn = t),
            c1(e.priority, function () {
              l1(r)
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
function vl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = cf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(nf = n), r.target.dispatchEvent(n), (nf = null)
    } else return (t = ys(r)), t !== null && Vh(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function Nm(e, t, r) {
  vl(e) && r.delete(t)
}
function XC() {
  ;(uf = !1),
    $n !== null && vl($n) && ($n = null),
    Rn !== null && vl(Rn) && (Rn = null),
    zn !== null && vl(zn) && (zn = null),
    ja.forEach(Nm),
    Wa.forEach(Nm)
}
function ji(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    uf || ((uf = !0), Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, XC)))
}
function Ua(e) {
  function t(o) {
    return ji(o, e)
  }
  if (0 < Hs.length) {
    ji(Hs[0], e)
    for (var r = 1; r < Hs.length; r++) {
      var n = Hs[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    $n !== null && ji($n, e),
      Rn !== null && ji(Rn, e),
      zn !== null && ji(zn, e),
      ja.forEach(t),
      Wa.forEach(t),
      r = 0;
    r < kn.length;
    r++
  )
    (n = kn[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < kn.length && ((r = kn[0]), r.blockedOn === null); )
    d1(r), r.blockedOn === null && kn.shift()
}
var ni = un.ReactCurrentBatchConfig,
  jl = !0
function qC(e, t, r, n) {
  var o = ge,
    i = ni.transition
  ni.transition = null
  try {
    ;(ge = 1), Nh(e, t, r, n)
  } finally {
    ;(ge = o), (ni.transition = i)
  }
}
function ZC(e, t, r, n) {
  var o = ge,
    i = ni.transition
  ni.transition = null
  try {
    ;(ge = 4), Nh(e, t, r, n)
  } finally {
    ;(ge = o), (ni.transition = i)
  }
}
function Nh(e, t, r, n) {
  if (jl) {
    var o = cf(e, t, r, n)
    if (o === null) qc(e, t, n, Wl, r), Vm(e, n)
    else if (QC(o, e, t, r, n)) n.stopPropagation()
    else if ((Vm(e, n), t & 4 && -1 < YC.indexOf(e))) {
      for (; o !== null; ) {
        var i = ys(o)
        if ((i !== null && s1(i), (i = cf(e, t, r, n)), i === null && qc(e, t, n, Wl, r), i === o))
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else qc(e, t, n, null, r)
  }
}
var Wl = null
function cf(e, t, r, n) {
  if (((Wl = null), (e = Fh(n)), (e = io(e)), e !== null))
    if (((t = ko(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = Jv(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Wl = e), null
}
function f1(e) {
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
      switch (OC()) {
        case Ih:
          return 1
        case n1:
          return 4
        case Vl:
        case VC:
          return 16
        case o1:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Pn = null,
  jh = null,
  bl = null
function h1() {
  if (bl) return bl
  var e,
    t = jh,
    r = t.length,
    n,
    o = 'value' in Pn ? Pn.value : Pn.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (bl = o.slice(e, 1 < n ? 1 - n : void 0))
}
function Sl(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Gs() {
  return !0
}
function jm() {
  return !1
}
function Zt(e) {
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
        ? Gs
        : jm),
      (this.isPropagationStopped = jm),
      this
    )
  }
  return (
    Be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = Gs))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Gs))
      },
      persist: function () {},
      isPersistent: Gs,
    }),
    t
  )
}
var _i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wh = Zt(_i),
  gs = Be({}, _i, { view: 0, detail: 0 }),
  JC = Zt(gs),
  jc,
  Wc,
  Wi,
  Nu = Be({}, gs, {
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
    getModifierState: Uh,
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
        : (e !== Wi &&
            (Wi && e.type === 'mousemove'
              ? ((jc = e.screenX - Wi.screenX), (Wc = e.screenY - Wi.screenY))
              : (Wc = jc = 0),
            (Wi = e)),
          jc)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Wc
    },
  }),
  Wm = Zt(Nu),
  e2 = Be({}, Nu, { dataTransfer: 0 }),
  t2 = Zt(e2),
  r2 = Be({}, gs, { relatedTarget: 0 }),
  Uc = Zt(r2),
  n2 = Be({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o2 = Zt(n2),
  i2 = Be({}, _i, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  a2 = Zt(i2),
  s2 = Be({}, _i, { data: 0 }),
  Um = Zt(s2),
  l2 = {
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
  u2 = {
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
  c2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function d2(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = c2[e]) ? !!t[e] : !1
}
function Uh() {
  return d2
}
var f2 = Be({}, gs, {
    key: function (e) {
      if (e.key) {
        var t = l2[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Sl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? u2[e.keyCode] || 'Unidentified'
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
    getModifierState: Uh,
    charCode: function (e) {
      return e.type === 'keypress' ? Sl(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Sl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  h2 = Zt(f2),
  p2 = Be({}, Nu, {
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
  Hm = Zt(p2),
  m2 = Be({}, gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uh,
  }),
  g2 = Zt(m2),
  y2 = Be({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v2 = Zt(y2),
  b2 = Be({}, Nu, {
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
  S2 = Zt(b2),
  x2 = [9, 13, 27, 32],
  Hh = rn && 'CompositionEvent' in window,
  ca = null
rn && 'documentMode' in document && (ca = document.documentMode)
var w2 = rn && 'TextEvent' in window && !ca,
  p1 = rn && (!Hh || (ca && 8 < ca && 11 >= ca)),
  Gm = String.fromCharCode(32),
  Km = !1
function m1(e, t) {
  switch (e) {
    case 'keyup':
      return x2.indexOf(t.keyCode) !== -1
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
function g1(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Io = !1
function k2(e, t) {
  switch (e) {
    case 'compositionend':
      return g1(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Km = !0), Gm)
    case 'textInput':
      return (e = t.data), e === Gm && Km ? null : e
    default:
      return null
  }
}
function C2(e, t) {
  if (Io)
    return e === 'compositionend' || (!Hh && m1(e, t))
      ? ((e = h1()), (bl = jh = Pn = null), (Io = !1), e)
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
      return p1 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var _2 = {
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
function Ym(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!_2[e.type] : t === 'textarea'
}
function y1(e, t, r, n) {
  Yv(n),
    (t = Ul(t, 'onChange')),
    0 < t.length &&
      ((r = new Wh('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var da = null,
  Ha = null
function P2(e) {
  E1(e, 0)
}
function ju(e) {
  var t = No(e)
  if (Nv(t)) return e
}
function T2(e, t) {
  if (e === 'change') return t
}
var v1 = !1
if (rn) {
  var Hc
  if (rn) {
    var Gc = 'oninput' in document
    if (!Gc) {
      var Qm = document.createElement('div')
      Qm.setAttribute('oninput', 'return;'), (Gc = typeof Qm.oninput == 'function')
    }
    Hc = Gc
  } else Hc = !1
  v1 = Hc && (!document.documentMode || 9 < document.documentMode)
}
function Xm() {
  da && (da.detachEvent('onpropertychange', b1), (Ha = da = null))
}
function b1(e) {
  if (e.propertyName === 'value' && ju(Ha)) {
    var t = []
    y1(t, Ha, e, Fh(e)), Zv(P2, t)
  }
}
function E2(e, t, r) {
  e === 'focusin'
    ? (Xm(), (da = t), (Ha = r), da.attachEvent('onpropertychange', b1))
    : e === 'focusout' && Xm()
}
function $2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ju(Ha)
}
function R2(e, t) {
  if (e === 'click') return ju(t)
}
function z2(e, t) {
  if (e === 'input' || e === 'change') return ju(t)
}
function A2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Sr = typeof Object.is == 'function' ? Object.is : A2
function Ga(e, t) {
  if (Sr(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!Hd.call(t, o) || !Sr(e[o], t[o])) return !1
  }
  return !0
}
function qm(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Zm(e, t) {
  var r = qm(e)
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
    r = qm(r)
  }
}
function S1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? S1(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function x1() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = Fl(e.document)
  }
  return t
}
function Gh(e) {
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
function M2(e) {
  var t = x1(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && S1(r.ownerDocument.documentElement, r)) {
    if (n !== null && Gh(r)) {
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
          (o = Zm(r, i))
        var a = Zm(r, n)
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
var D2 = rn && 'documentMode' in document && 11 >= document.documentMode,
  Oo = null,
  df = null,
  fa = null,
  ff = !1
function Jm(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  ff ||
    Oo == null ||
    Oo !== Fl(n) ||
    ((n = Oo),
    'selectionStart' in n && Gh(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (fa && Ga(fa, n)) ||
      ((fa = n),
      (n = Ul(df, 'onSelect')),
      0 < n.length &&
        ((t = new Wh('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Oo))))
}
function Ks(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var Vo = {
    animationend: Ks('Animation', 'AnimationEnd'),
    animationiteration: Ks('Animation', 'AnimationIteration'),
    animationstart: Ks('Animation', 'AnimationStart'),
    transitionend: Ks('Transition', 'TransitionEnd'),
  },
  Kc = {},
  w1 = {}
rn &&
  ((w1 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vo.animationend.animation,
    delete Vo.animationiteration.animation,
    delete Vo.animationstart.animation),
  'TransitionEvent' in window || delete Vo.transitionend.transition)
function Wu(e) {
  if (Kc[e]) return Kc[e]
  if (!Vo[e]) return e
  var t = Vo[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in w1) return (Kc[e] = t[r])
  return e
}
var k1 = Wu('animationend'),
  C1 = Wu('animationiteration'),
  _1 = Wu('animationstart'),
  P1 = Wu('transitionend'),
  T1 = new Map(),
  e0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Hn(e, t) {
  T1.set(e, t), wo(t, [e])
}
for (var Yc = 0; Yc < e0.length; Yc++) {
  var Qc = e0[Yc],
    L2 = Qc.toLowerCase(),
    B2 = Qc[0].toUpperCase() + Qc.slice(1)
  Hn(L2, 'on' + B2)
}
Hn(k1, 'onAnimationEnd')
Hn(C1, 'onAnimationIteration')
Hn(_1, 'onAnimationStart')
Hn('dblclick', 'onDoubleClick')
Hn('focusin', 'onFocus')
Hn('focusout', 'onBlur')
Hn(P1, 'onTransitionEnd')
fi('onMouseEnter', ['mouseout', 'mouseover'])
fi('onMouseLeave', ['mouseout', 'mouseover'])
fi('onPointerEnter', ['pointerout', 'pointerover'])
fi('onPointerLeave', ['pointerout', 'pointerover'])
wo('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
wo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
wo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
wo('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
wo('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
wo('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var ra =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  F2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ra))
function t0(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), LC(n, t, void 0, e), (e.currentTarget = null)
}
function E1(e, t) {
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
          t0(o, s, u), (i = l)
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
          t0(o, s, u), (i = l)
        }
    }
  }
  if (Ol) throw ((e = sf), (Ol = !1), (sf = null), e)
}
function ke(e, t) {
  var r = t[yf]
  r === void 0 && (r = t[yf] = new Set())
  var n = e + '__bubble'
  r.has(n) || ($1(t, e, 2, !1), r.add(n))
}
function Xc(e, t, r) {
  var n = 0
  t && (n |= 4), $1(r, e, n, t)
}
var Ys = '_reactListening' + Math.random().toString(36).slice(2)
function Ka(e) {
  if (!e[Ys]) {
    ;(e[Ys] = !0),
      Bv.forEach(function (r) {
        r !== 'selectionchange' && (F2.has(r) || Xc(r, !1, e), Xc(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ys] || ((t[Ys] = !0), Xc('selectionchange', !1, t))
  }
}
function $1(e, t, r, n) {
  switch (f1(t)) {
    case 1:
      var o = qC
      break
    case 4:
      o = ZC
      break
    default:
      o = Nh
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !af || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function qc(e, t, r, n, o) {
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
          if (((a = io(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  Zv(function () {
    var u = i,
      c = Fh(r),
      d = []
    e: {
      var f = T1.get(e)
      if (f !== void 0) {
        var p = Wh,
          b = e
        switch (e) {
          case 'keypress':
            if (Sl(r) === 0) break e
          case 'keydown':
          case 'keyup':
            p = h2
            break
          case 'focusin':
            ;(b = 'focus'), (p = Uc)
            break
          case 'focusout':
            ;(b = 'blur'), (p = Uc)
            break
          case 'beforeblur':
          case 'afterblur':
            p = Uc
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
            p = Wm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = t2
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = g2
            break
          case k1:
          case C1:
          case _1:
            p = o2
            break
          case P1:
            p = v2
            break
          case 'scroll':
            p = JC
            break
          case 'wheel':
            p = S2
            break
          case 'copy':
          case 'cut':
          case 'paste':
            p = a2
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Hm
        }
        var S = (t & 4) !== 0,
          y = !S && e === 'scroll',
          m = S ? (f !== null ? f + 'Capture' : null) : f
        S = []
        for (var h = u, g; h !== null; ) {
          g = h
          var w = g.stateNode
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w), m !== null && ((w = Na(h, m)), w != null && S.push(Ya(h, w, g)))),
            y)
          )
            break
          h = h.return
        }
        0 < S.length && ((f = new p(f, b, null, r, c)), d.push({ event: f, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          f && r !== nf && (b = r.relatedTarget || r.fromElement) && (io(b) || b[nn]))
        )
          break e
        if (
          (p || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          p
            ? ((b = r.relatedTarget || r.toElement),
              (p = u),
              (b = b ? io(b) : null),
              b !== null && ((y = ko(b)), b !== y || (b.tag !== 5 && b.tag !== 6)) && (b = null))
            : ((p = null), (b = u)),
          p !== b)
        ) {
          if (
            ((S = Wm),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = Hm), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (y = p == null ? f : No(p)),
            (g = b == null ? f : No(b)),
            (f = new S(w, h + 'leave', p, r, c)),
            (f.target = y),
            (f.relatedTarget = g),
            (w = null),
            io(c) === u &&
              ((S = new S(m, h + 'enter', b, r, c)),
              (S.target = g),
              (S.relatedTarget = y),
              (w = S)),
            (y = w),
            p && b)
          )
            t: {
              for (S = p, m = b, h = 0, g = S; g; g = Ao(g)) h++
              for (g = 0, w = m; w; w = Ao(w)) g++
              for (; 0 < h - g; ) (S = Ao(S)), h--
              for (; 0 < g - h; ) (m = Ao(m)), g--
              for (; h--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t
                ;(S = Ao(S)), (m = Ao(m))
              }
              S = null
            }
          else S = null
          p !== null && r0(d, f, p, S, !1), b !== null && y !== null && r0(d, y, b, S, !0)
        }
      }
      e: {
        if (
          ((f = u ? No(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && f.type === 'file'))
        )
          var _ = T2
        else if (Ym(f))
          if (v1) _ = z2
          else {
            _ = $2
            var z = E2
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (_ = R2)
        if (_ && (_ = _(e, u))) {
          y1(d, _, r, c)
          break e
        }
        z && z(e, f, u),
          e === 'focusout' &&
            (z = f._wrapperState) &&
            z.controlled &&
            f.type === 'number' &&
            Zd(f, 'number', f.value)
      }
      switch (((z = u ? No(u) : window), e)) {
        case 'focusin':
          ;(Ym(z) || z.contentEditable === 'true') && ((Oo = z), (df = u), (fa = null))
          break
        case 'focusout':
          fa = df = Oo = null
          break
        case 'mousedown':
          ff = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ff = !1), Jm(d, r, c)
          break
        case 'selectionchange':
          if (D2) break
        case 'keydown':
        case 'keyup':
          Jm(d, r, c)
      }
      var T
      if (Hh)
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
        Io
          ? m1(e, r) && ($ = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && ($ = 'onCompositionStart')
      $ &&
        (p1 &&
          r.locale !== 'ko' &&
          (Io || $ !== 'onCompositionStart'
            ? $ === 'onCompositionEnd' && Io && (T = h1())
            : ((Pn = c), (jh = 'value' in Pn ? Pn.value : Pn.textContent), (Io = !0))),
        (z = Ul(u, $)),
        0 < z.length &&
          (($ = new Um($, e, null, r, c)),
          d.push({ event: $, listeners: z }),
          T ? ($.data = T) : ((T = g1(r)), T !== null && ($.data = T)))),
        (T = w2 ? k2(e, r) : C2(e, r)) &&
          ((u = Ul(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Um('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)))
    }
    E1(d, t)
  })
}
function Ya(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function Ul(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Na(e, r)),
      i != null && n.unshift(Ya(e, i, o)),
      (i = Na(e, t)),
      i != null && n.push(Ya(e, i, o))),
      (e = e.return)
  }
  return n
}
function Ao(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function r0(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Na(r, i)), l != null && a.unshift(Ya(r, l, s)))
        : o || ((l = Na(r, i)), l != null && a.push(Ya(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var I2 = /\r\n?/g,
  O2 = /\u0000|\uFFFD/g
function n0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      I2,
      `
`
    )
    .replace(O2, '')
}
function Qs(e, t, r) {
  if (((t = n0(t)), n0(e) !== t && r)) throw Error(D(425))
}
function Hl() {}
var hf = null,
  pf = null
function mf(e, t) {
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
var gf = typeof setTimeout == 'function' ? setTimeout : void 0,
  V2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  o0 = typeof Promise == 'function' ? Promise : void 0,
  N2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof o0 < 'u'
      ? function (e) {
          return o0.resolve(null).then(e).catch(j2)
        }
      : gf
function j2(e) {
  setTimeout(function () {
    throw e
  })
}
function Zc(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), Ua(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  Ua(t)
}
function An(e) {
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
function i0(e) {
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
var Pi = Math.random().toString(36).slice(2),
  zr = '__reactFiber$' + Pi,
  Qa = '__reactProps$' + Pi,
  nn = '__reactContainer$' + Pi,
  yf = '__reactEvents$' + Pi,
  W2 = '__reactListeners$' + Pi,
  U2 = '__reactHandles$' + Pi
function io(e) {
  var t = e[zr]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[nn] || r[zr])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = i0(e); e !== null; ) {
          if ((r = e[zr])) return r
          e = i0(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function ys(e) {
  return (
    (e = e[zr] || e[nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function No(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(D(33))
}
function Uu(e) {
  return e[Qa] || null
}
var vf = [],
  jo = -1
function Gn(e) {
  return { current: e }
}
function _e(e) {
  0 > jo || ((e.current = vf[jo]), (vf[jo] = null), jo--)
}
function we(e, t) {
  jo++, (vf[jo] = e.current), (e.current = t)
}
var jn = {},
  vt = Gn(jn),
  At = Gn(!1),
  go = jn
function hi(e, t) {
  var r = e.type.contextTypes
  if (!r) return jn
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
function Mt(e) {
  return (e = e.childContextTypes), e != null
}
function Gl() {
  _e(At), _e(vt)
}
function a0(e, t, r) {
  if (vt.current !== jn) throw Error(D(168))
  we(vt, t), we(At, r)
}
function R1(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error(D(108, EC(e) || 'Unknown', o))
  return Be({}, r, n)
}
function Kl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (go = vt.current),
    we(vt, e),
    we(At, At.current),
    !0
  )
}
function s0(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(D(169))
  r
    ? ((e = R1(e, t, go)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      _e(At),
      _e(vt),
      we(vt, e))
    : _e(At),
    we(At, r)
}
var Hr = null,
  Hu = !1,
  Jc = !1
function z1(e) {
  Hr === null ? (Hr = [e]) : Hr.push(e)
}
function H2(e) {
  ;(Hu = !0), z1(e)
}
function Kn() {
  if (!Jc && Hr !== null) {
    Jc = !0
    var e = 0,
      t = ge
    try {
      var r = Hr
      for (ge = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(Hr = null), (Hu = !1)
    } catch (o) {
      throw (Hr !== null && (Hr = Hr.slice(e + 1)), r1(Ih, Kn), o)
    } finally {
      ;(ge = t), (Jc = !1)
    }
  }
  return null
}
var Wo = [],
  Uo = 0,
  Yl = null,
  Ql = 0,
  ir = [],
  ar = 0,
  yo = null,
  Kr = 1,
  Yr = ''
function Jn(e, t) {
  ;(Wo[Uo++] = Ql), (Wo[Uo++] = Yl), (Yl = e), (Ql = t)
}
function A1(e, t, r) {
  ;(ir[ar++] = Kr), (ir[ar++] = Yr), (ir[ar++] = yo), (yo = e)
  var n = Kr
  e = Yr
  var o = 32 - vr(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - vr(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (Kr = (1 << (32 - vr(t) + o)) | (r << o) | n),
      (Yr = i + e)
  } else (Kr = (1 << i) | (r << o) | n), (Yr = e)
}
function Kh(e) {
  e.return !== null && (Jn(e, 1), A1(e, 1, 0))
}
function Yh(e) {
  for (; e === Yl; ) (Yl = Wo[--Uo]), (Wo[Uo] = null), (Ql = Wo[--Uo]), (Wo[Uo] = null)
  for (; e === yo; )
    (yo = ir[--ar]),
      (ir[ar] = null),
      (Yr = ir[--ar]),
      (ir[ar] = null),
      (Kr = ir[--ar]),
      (ir[ar] = null)
}
var Gt = null,
  Ut = null,
  $e = !1,
  gr = null
function M1(e, t) {
  var r = sr(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function l0(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Ut = An(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Ut = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = yo !== null ? { id: Kr, overflow: Yr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = sr(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Gt = e),
            (Ut = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function bf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Sf(e) {
  if ($e) {
    var t = Ut
    if (t) {
      var r = t
      if (!l0(e, t)) {
        if (bf(e)) throw Error(D(418))
        t = An(r.nextSibling)
        var n = Gt
        t && l0(e, t) ? M1(n, r) : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e))
      }
    } else {
      if (bf(e)) throw Error(D(418))
      ;(e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e)
    }
  }
}
function u0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Gt = e
}
function Xs(e) {
  if (e !== Gt) return !1
  if (!$e) return u0(e), ($e = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !mf(e.type, e.memoizedProps))),
    t && (t = Ut))
  ) {
    if (bf(e)) throw (D1(), Error(D(418)))
    for (; t; ) M1(e, t), (t = An(t.nextSibling))
  }
  if ((u0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(D(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              Ut = An(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ut = null
    }
  } else Ut = Gt ? An(e.stateNode.nextSibling) : null
  return !0
}
function D1() {
  for (var e = Ut; e; ) e = An(e.nextSibling)
}
function pi() {
  ;(Ut = Gt = null), ($e = !1)
}
function Qh(e) {
  gr === null ? (gr = [e]) : gr.push(e)
}
var G2 = un.ReactCurrentBatchConfig
function pr(e, t) {
  if (e && e.defaultProps) {
    ;(t = Be({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var Xl = Gn(null),
  ql = null,
  Ho = null,
  Xh = null
function qh() {
  Xh = Ho = ql = null
}
function Zh(e) {
  var t = Xl.current
  _e(Xl), (e._currentValue = t)
}
function xf(e, t, r) {
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
function oi(e, t) {
  ;(ql = e),
    (Xh = Ho = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Rt = !0), (e.firstContext = null))
}
function cr(e) {
  var t = e._currentValue
  if (Xh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ho === null)) {
      if (ql === null) throw Error(D(308))
      ;(Ho = e), (ql.dependencies = { lanes: 0, firstContext: e })
    } else Ho = Ho.next = e
  return t
}
var ao = null
function Jh(e) {
  ao === null ? (ao = [e]) : ao.push(e)
}
function L1(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), Jh(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    on(e, n)
  )
}
function on(e, t) {
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
var xn = !1
function ep(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function B1(e, t) {
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
function qr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Mn(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), ae & 2)) {
    var o = n.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), on(e, r)
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Jh(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    on(e, r)
  )
}
function xl(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Oh(e, r)
  }
}
function c0(e, t) {
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
function Zl(e, t, r, n) {
  var o = e.updateQueue
  xn = !1
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
        p = s.eventTime
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var b = e,
            S = s
          switch (((f = t), (p = r), S.tag)) {
            case 1:
              if (((b = S.payload), typeof b == 'function')) {
                d = b.call(p, d, f)
                break e
              }
              d = b
              break e
            case 3:
              b.flags = (b.flags & -65537) | 128
            case 0:
              if (((b = S.payload), (f = typeof b == 'function' ? b.call(p, d, f) : b), f == null))
                break e
              d = Be({}, d, f)
              break e
            case 2:
              xn = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [s]) : f.push(s))
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
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
    ;(bo |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function d0(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function')) throw Error(D(191, o))
        o.call(n)
      }
    }
}
var F1 = new Lv.Component().refs
function wf(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Be({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Gu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ko(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = kt(),
      o = Ln(e),
      i = qr(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = Mn(e, i, o)),
      t !== null && (br(t, e, o, n), xl(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = kt(),
      o = Ln(e),
      i = qr(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Mn(e, i, o)),
      t !== null && (br(t, e, o, n), xl(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = kt(),
      n = Ln(e),
      o = qr(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Mn(e, o, n)),
      t !== null && (br(t, e, n, r), xl(t, e, n))
  },
}
function f0(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ga(r, n) || !Ga(o, i)
      : !0
  )
}
function I1(e, t, r) {
  var n = !1,
    o = jn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = cr(i))
      : ((o = Mt(t) ? go : vt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? hi(e, o) : jn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gu),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function h0(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Gu.enqueueReplaceState(t, t.state, null)
}
function kf(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = F1), ep(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = cr(i))
    : ((i = Mt(t) ? go : vt.current), (o.context = hi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (wf(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Gu.enqueueReplaceState(o, o.state, null),
      Zl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Ui(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(D(309))
        var n = r.stateNode
      }
      if (!n) throw Error(D(147, e))
      var o = n,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === F1 && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(D(284))
    if (!r._owner) throw Error(D(290, e))
  }
  return e
}
function qs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function p0(e) {
  var t = e._init
  return t(e._payload)
}
function O1(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h)
    }
  }
  function r(m, h) {
    if (!e) return null
    for (; h !== null; ) t(m, h), (h = h.sibling)
    return null
  }
  function n(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
    return m
  }
  function o(m, h) {
    return (m = Bn(m, h)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    )
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, h, g, w) {
    return h === null || h.tag !== 6
      ? ((h = ad(g, m.mode, w)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h)
  }
  function l(m, h, g, w) {
    var _ = g.type
    return _ === Fo
      ? c(m, h, g.props.children, w, g.key)
      : h !== null &&
        (h.elementType === _ ||
          (typeof _ == 'object' && _ !== null && _.$$typeof === Sn && p0(_) === h.type))
      ? ((w = o(h, g.props)), (w.ref = Ui(m, h, g)), (w.return = m), w)
      : ((w = Tl(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Ui(m, h, g)),
        (w.return = m),
        w)
  }
  function u(m, h, g, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = sd(g, m.mode, w)), (h.return = m), h)
      : ((h = o(h, g.children || [])), (h.return = m), h)
  }
  function c(m, h, g, w, _) {
    return h === null || h.tag !== 7
      ? ((h = fo(g, m.mode, w, _)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h)
  }
  function d(m, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = ad('' + h, m.mode, g)), (h.return = m), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Vs:
          return (
            (g = Tl(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = Ui(m, null, h)),
            (g.return = m),
            g
          )
        case Bo:
          return (h = sd(h, m.mode, g)), (h.return = m), h
        case Sn:
          var w = h._init
          return d(m, w(h._payload), g)
      }
      if (ea(h) || Oi(h)) return (h = fo(h, m.mode, g, null)), (h.return = m), h
      qs(m, h)
    }
    return null
  }
  function f(m, h, g, w) {
    var _ = h !== null ? h.key : null
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return _ !== null ? null : s(m, h, '' + g, w)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Vs:
          return g.key === _ ? l(m, h, g, w) : null
        case Bo:
          return g.key === _ ? u(m, h, g, w) : null
        case Sn:
          return (_ = g._init), f(m, h, _(g._payload), w)
      }
      if (ea(g) || Oi(g)) return _ !== null ? null : c(m, h, g, w, null)
      qs(m, g)
    }
    return null
  }
  function p(m, h, g, w, _) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(g) || null), s(h, m, '' + w, _)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Vs:
          return (m = m.get(w.key === null ? g : w.key) || null), l(h, m, w, _)
        case Bo:
          return (m = m.get(w.key === null ? g : w.key) || null), u(h, m, w, _)
        case Sn:
          var z = w._init
          return p(m, h, g, z(w._payload), _)
      }
      if (ea(w) || Oi(w)) return (m = m.get(g) || null), c(h, m, w, _, null)
      qs(h, w)
    }
    return null
  }
  function b(m, h, g, w) {
    for (var _ = null, z = null, T = h, $ = (h = 0), j = null; T !== null && $ < g.length; $++) {
      T.index > $ ? ((j = T), (T = null)) : (j = T.sibling)
      var O = f(m, T, g[$], w)
      if (O === null) {
        T === null && (T = j)
        break
      }
      e && T && O.alternate === null && t(m, T),
        (h = i(O, h, $)),
        z === null ? (_ = O) : (z.sibling = O),
        (z = O),
        (T = j)
    }
    if ($ === g.length) return r(m, T), $e && Jn(m, $), _
    if (T === null) {
      for (; $ < g.length; $++)
        (T = d(m, g[$], w)),
          T !== null && ((h = i(T, h, $)), z === null ? (_ = T) : (z.sibling = T), (z = T))
      return $e && Jn(m, $), _
    }
    for (T = n(m, T); $ < g.length; $++)
      (j = p(T, m, $, g[$], w)),
        j !== null &&
          (e && j.alternate !== null && T.delete(j.key === null ? $ : j.key),
          (h = i(j, h, $)),
          z === null ? (_ = j) : (z.sibling = j),
          (z = j))
    return (
      e &&
        T.forEach(function (ue) {
          return t(m, ue)
        }),
      $e && Jn(m, $),
      _
    )
  }
  function S(m, h, g, w) {
    var _ = Oi(g)
    if (typeof _ != 'function') throw Error(D(150))
    if (((g = _.call(g)), g == null)) throw Error(D(151))
    for (
      var z = (_ = null), T = h, $ = (h = 0), j = null, O = g.next();
      T !== null && !O.done;
      $++, O = g.next()
    ) {
      T.index > $ ? ((j = T), (T = null)) : (j = T.sibling)
      var ue = f(m, T, O.value, w)
      if (ue === null) {
        T === null && (T = j)
        break
      }
      e && T && ue.alternate === null && t(m, T),
        (h = i(ue, h, $)),
        z === null ? (_ = ue) : (z.sibling = ue),
        (z = ue),
        (T = j)
    }
    if (O.done) return r(m, T), $e && Jn(m, $), _
    if (T === null) {
      for (; !O.done; $++, O = g.next())
        (O = d(m, O.value, w)),
          O !== null && ((h = i(O, h, $)), z === null ? (_ = O) : (z.sibling = O), (z = O))
      return $e && Jn(m, $), _
    }
    for (T = n(m, T); !O.done; $++, O = g.next())
      (O = p(T, m, $, O.value, w)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? $ : O.key),
          (h = i(O, h, $)),
          z === null ? (_ = O) : (z.sibling = O),
          (z = O))
    return (
      e &&
        T.forEach(function (ze) {
          return t(m, ze)
        }),
      $e && Jn(m, $),
      _
    )
  }
  function y(m, h, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Fo &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Vs:
          e: {
            for (var _ = g.key, z = h; z !== null; ) {
              if (z.key === _) {
                if (((_ = g.type), _ === Fo)) {
                  if (z.tag === 7) {
                    r(m, z.sibling), (h = o(z, g.props.children)), (h.return = m), (m = h)
                    break e
                  }
                } else if (
                  z.elementType === _ ||
                  (typeof _ == 'object' && _ !== null && _.$$typeof === Sn && p0(_) === z.type)
                ) {
                  r(m, z.sibling),
                    (h = o(z, g.props)),
                    (h.ref = Ui(m, z, g)),
                    (h.return = m),
                    (m = h)
                  break e
                }
                r(m, z)
                break
              } else t(m, z)
              z = z.sibling
            }
            g.type === Fo
              ? ((h = fo(g.props.children, m.mode, w, g.key)), (h.return = m), (m = h))
              : ((w = Tl(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Ui(m, h, g)),
                (w.return = m),
                (m = w))
          }
          return a(m)
        case Bo:
          e: {
            for (z = g.key; h !== null; ) {
              if (h.key === z)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  r(m, h.sibling), (h = o(h, g.children || [])), (h.return = m), (m = h)
                  break e
                } else {
                  r(m, h)
                  break
                }
              else t(m, h)
              h = h.sibling
            }
            ;(h = sd(g, m.mode, w)), (h.return = m), (m = h)
          }
          return a(m)
        case Sn:
          return (z = g._init), y(m, h, z(g._payload), w)
      }
      if (ea(g)) return b(m, h, g, w)
      if (Oi(g)) return S(m, h, g, w)
      qs(m, g)
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (r(m, h.sibling), (h = o(h, g)), (h.return = m), (m = h))
          : (r(m, h), (h = ad(g, m.mode, w)), (h.return = m), (m = h)),
        a(m))
      : r(m, h)
  }
  return y
}
var mi = O1(!0),
  V1 = O1(!1),
  vs = {},
  Lr = Gn(vs),
  Xa = Gn(vs),
  qa = Gn(vs)
function so(e) {
  if (e === vs) throw Error(D(174))
  return e
}
function tp(e, t) {
  switch ((we(qa, t), we(Xa, e), we(Lr, vs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ef(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ef(t, e))
  }
  _e(Lr), we(Lr, t)
}
function gi() {
  _e(Lr), _e(Xa), _e(qa)
}
function N1(e) {
  so(qa.current)
  var t = so(Lr.current),
    r = ef(t, e.type)
  t !== r && (we(Xa, e), we(Lr, r))
}
function rp(e) {
  Xa.current === e && (_e(Lr), _e(Xa))
}
var Me = Gn(0)
function Jl(e) {
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
var ed = []
function np() {
  for (var e = 0; e < ed.length; e++) ed[e]._workInProgressVersionPrimary = null
  ed.length = 0
}
var wl = un.ReactCurrentDispatcher,
  td = un.ReactCurrentBatchConfig,
  vo = 0,
  Le = null,
  Qe = null,
  Je = null,
  eu = !1,
  ha = !1,
  Za = 0,
  K2 = 0
function ct() {
  throw Error(D(321))
}
function op(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!Sr(e[r], t[r])) return !1
  return !0
}
function ip(e, t, r, n, o, i) {
  if (
    ((vo = i),
    (Le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? q2 : Z2),
    (e = r(n, o)),
    ha)
  ) {
    i = 0
    do {
      if (((ha = !1), (Za = 0), 25 <= i)) throw Error(D(301))
      ;(i += 1), (Je = Qe = null), (t.updateQueue = null), (wl.current = J2), (e = r(n, o))
    } while (ha)
  }
  if (
    ((wl.current = tu),
    (t = Qe !== null && Qe.next !== null),
    (vo = 0),
    (Je = Qe = Le = null),
    (eu = !1),
    t)
  )
    throw Error(D(300))
  return e
}
function ap() {
  var e = Za !== 0
  return (Za = 0), e
}
function _r() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return Je === null ? (Le.memoizedState = Je = e) : (Je = Je.next = e), Je
}
function dr() {
  if (Qe === null) {
    var e = Le.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Qe.next
  var t = Je === null ? Le.memoizedState : Je.next
  if (t !== null) (Je = t), (Qe = e)
  else {
    if (e === null) throw Error(D(310))
    ;(Qe = e),
      (e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null,
      }),
      Je === null ? (Le.memoizedState = Je = e) : (Je = Je.next = e)
  }
  return Je
}
function Ja(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function rd(e) {
  var t = dr(),
    r = t.queue
  if (r === null) throw Error(D(311))
  r.lastRenderedReducer = e
  var n = Qe,
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
      if ((vo & c) === c)
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
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d), (Le.lanes |= c), (bo |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    l === null ? (a = n) : (l.next = s),
      Sr(n, t.memoizedState) || (Rt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (Le.lanes |= i), (bo |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function nd(e) {
  var t = dr(),
    r = t.queue
  if (r === null) throw Error(D(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    Sr(i, t.memoizedState) || (Rt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function j1() {}
function W1(e, t) {
  var r = Le,
    n = dr(),
    o = t(),
    i = !Sr(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (Rt = !0)),
    (n = n.queue),
    sp(G1.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Je !== null && Je.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), es(9, H1.bind(null, r, n, o, t), void 0, null), tt === null))
      throw Error(D(349))
    vo & 30 || U1(r, t, o)
  }
  return o
}
function U1(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Le.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function H1(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), K1(t) && Y1(e)
}
function G1(e, t, r) {
  return r(function () {
    K1(t) && Y1(e)
  })
}
function K1(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !Sr(e, r)
  } catch {
    return !0
  }
}
function Y1(e) {
  var t = on(e, 1)
  t !== null && br(t, e, 1, -1)
}
function m0(e) {
  var t = _r()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ja,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = X2.bind(null, Le, e)),
    [t.memoizedState, e]
  )
}
function es(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function Q1() {
  return dr().memoizedState
}
function kl(e, t, r, n) {
  var o = _r()
  ;(Le.flags |= e), (o.memoizedState = es(1 | t, r, void 0, n === void 0 ? null : n))
}
function Ku(e, t, r, n) {
  var o = dr()
  n = n === void 0 ? null : n
  var i = void 0
  if (Qe !== null) {
    var a = Qe.memoizedState
    if (((i = a.destroy), n !== null && op(n, a.deps))) {
      o.memoizedState = es(t, r, i, n)
      return
    }
  }
  ;(Le.flags |= e), (o.memoizedState = es(1 | t, r, i, n))
}
function g0(e, t) {
  return kl(8390656, 8, e, t)
}
function sp(e, t) {
  return Ku(2048, 8, e, t)
}
function X1(e, t) {
  return Ku(4, 2, e, t)
}
function q1(e, t) {
  return Ku(4, 4, e, t)
}
function Z1(e, t) {
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
function J1(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Ku(4, 4, Z1.bind(null, t, e), r)
}
function lp() {}
function eb(e, t) {
  var r = dr()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && op(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function tb(e, t) {
  var r = dr()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && op(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function rb(e, t, r) {
  return vo & 21
    ? (Sr(r, t) || ((r = i1()), (Le.lanes |= r), (bo |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = r))
}
function Y2(e, t) {
  var r = ge
  ;(ge = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = td.transition
  td.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ge = r), (td.transition = n)
  }
}
function nb() {
  return dr().memoizedState
}
function Q2(e, t, r) {
  var n = Ln(e)
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), ob(e)))
    ib(t, r)
  else if (((r = L1(e, t, r, n)), r !== null)) {
    var o = kt()
    br(r, e, n, o), ab(r, t, n)
  }
}
function X2(e, t, r) {
  var n = Ln(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (ob(e)) ib(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), Sr(s, a))) {
          var l = t.interleaved
          l === null ? ((o.next = o), Jh(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = L1(e, t, o, n)), r !== null && ((o = kt()), br(r, e, n, o), ab(r, t, n))
  }
}
function ob(e) {
  var t = e.alternate
  return e === Le || (t !== null && t === Le)
}
function ib(e, t) {
  ha = eu = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function ab(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Oh(e, r)
  }
}
var tu = {
    readContext: cr,
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useInsertionEffect: ct,
    useLayoutEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useMutableSource: ct,
    useSyncExternalStore: ct,
    useId: ct,
    unstable_isNewReconciler: !1,
  },
  q2 = {
    readContext: cr,
    useCallback: function (e, t) {
      return (_r().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: cr,
    useEffect: g0,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), kl(4194308, 4, Z1.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return kl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return kl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = _r()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = _r()
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
        (e = e.dispatch = Q2.bind(null, Le, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = _r()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: m0,
    useDebugValue: lp,
    useDeferredValue: function (e) {
      return (_r().memoizedState = e)
    },
    useTransition: function () {
      var e = m0(!1),
        t = e[0]
      return (e = Y2.bind(null, e[1])), (_r().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Le,
        o = _r()
      if ($e) {
        if (r === void 0) throw Error(D(407))
        r = r()
      } else {
        if (((r = t()), tt === null)) throw Error(D(349))
        vo & 30 || U1(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        g0(G1.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        es(9, H1.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = _r(),
        t = tt.identifierPrefix
      if ($e) {
        var r = Yr,
          n = Kr
        ;(r = (n & ~(1 << (32 - vr(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Za++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = K2++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Z2 = {
    readContext: cr,
    useCallback: eb,
    useContext: cr,
    useEffect: sp,
    useImperativeHandle: J1,
    useInsertionEffect: X1,
    useLayoutEffect: q1,
    useMemo: tb,
    useReducer: rd,
    useRef: Q1,
    useState: function () {
      return rd(Ja)
    },
    useDebugValue: lp,
    useDeferredValue: function (e) {
      var t = dr()
      return rb(t, Qe.memoizedState, e)
    },
    useTransition: function () {
      var e = rd(Ja)[0],
        t = dr().memoizedState
      return [e, t]
    },
    useMutableSource: j1,
    useSyncExternalStore: W1,
    useId: nb,
    unstable_isNewReconciler: !1,
  },
  J2 = {
    readContext: cr,
    useCallback: eb,
    useContext: cr,
    useEffect: sp,
    useImperativeHandle: J1,
    useInsertionEffect: X1,
    useLayoutEffect: q1,
    useMemo: tb,
    useReducer: nd,
    useRef: Q1,
    useState: function () {
      return nd(Ja)
    },
    useDebugValue: lp,
    useDeferredValue: function (e) {
      var t = dr()
      return Qe === null ? (t.memoizedState = e) : rb(t, Qe.memoizedState, e)
    },
    useTransition: function () {
      var e = nd(Ja)[0],
        t = dr().memoizedState
      return [e, t]
    },
    useMutableSource: j1,
    useSyncExternalStore: W1,
    useId: nb,
    unstable_isNewReconciler: !1,
  }
function yi(e, t) {
  try {
    var r = '',
      n = t
    do (r += TC(n)), (n = n.return)
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
function od(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function Cf(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var e_ = typeof WeakMap == 'function' ? WeakMap : Map
function sb(e, t, r) {
  ;(r = qr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      nu || ((nu = !0), (Df = n)), Cf(e, t)
    }),
    r
  )
}
function lb(e, t, r) {
  ;(r = qr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        Cf(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        Cf(e, t), typeof n != 'function' && (Dn === null ? (Dn = new Set([this])) : Dn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function y0(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new e_()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = p_.bind(null, e, t, r)), t.then(e, e))
}
function v0(e) {
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
function b0(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null ? (r.tag = 17) : ((t = qr(-1, 1)), (t.tag = 2), Mn(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var t_ = un.ReactCurrentOwner,
  Rt = !1
function xt(e, t, r, n) {
  t.child = e === null ? V1(t, null, r, n) : mi(t, e.child, r, n)
}
function S0(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    oi(t, o),
    (n = ip(e, t, r, n, i, o)),
    (r = ap()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), an(e, t, o))
      : ($e && r && Kh(t), (t.flags |= 1), xt(e, t, n, o), t.child)
  )
}
function x0(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !gp(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ub(e, t, i, n, o))
      : ((e = Tl(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : Ga), r(a, n) && e.ref === t.ref)) return an(e, t, o)
  }
  return (t.flags |= 1), (e = Bn(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function ub(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Ga(i, n) && e.ref === t.ref)
      if (((Rt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Rt = !0)
      else return (t.lanes = e.lanes), an(e, t, o)
  }
  return _f(e, t, r, n, o)
}
function cb(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(Ko, Wt),
        (Wt |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          we(Ko, Wt),
          (Wt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        we(Ko, Wt),
        (Wt |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), we(Ko, Wt), (Wt |= n)
  return xt(e, t, o, r), t.child
}
function db(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function _f(e, t, r, n, o) {
  var i = Mt(r) ? go : vt.current
  return (
    (i = hi(t, i)),
    oi(t, o),
    (r = ip(e, t, r, n, i, o)),
    (n = ap()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), an(e, t, o))
      : ($e && n && Kh(t), (t.flags |= 1), xt(e, t, r, o), t.child)
  )
}
function w0(e, t, r, n, o) {
  if (Mt(r)) {
    var i = !0
    Kl(t)
  } else i = !1
  if ((oi(t, o), t.stateNode === null)) Cl(e, t), I1(t, r, n), kf(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null
      ? (u = cr(u))
      : ((u = Mt(r) ? go : vt.current), (u = hi(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== u) && h0(t, a, n, u)),
      (xn = !1)
    var f = t.memoizedState
    ;(a.state = f),
      Zl(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || At.current || xn
        ? (typeof c == 'function' && (wf(t, r, c, n), (l = t.memoizedState)),
          (s = xn || f0(t, r, s, n, f, l, u))
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
      B1(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : pr(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = cr(l))
        : ((l = Mt(r) ? go : vt.current), (l = hi(t, l)))
    var p = r.getDerivedStateFromProps
    ;(c = typeof p == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && h0(t, a, n, l)),
      (xn = !1),
      (f = t.memoizedState),
      (a.state = f),
      Zl(t, n, a, o)
    var b = t.memoizedState
    s !== d || f !== b || At.current || xn
      ? (typeof p == 'function' && (wf(t, r, p, n), (b = t.memoizedState)),
        (u = xn || f0(t, r, u, n, f, b, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, b, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, b, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = b)),
        (a.props = n),
        (a.state = b),
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
  return Pf(e, t, r, n, i, o)
}
function Pf(e, t, r, n, o, i) {
  db(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && s0(t, r, !1), an(e, t, i)
  ;(n = t.stateNode), (t_.current = t)
  var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = mi(t, e.child, null, i)), (t.child = mi(t, null, s, i)))
      : xt(e, t, s, i),
    (t.memoizedState = n.state),
    o && s0(t, r, !0),
    t.child
  )
}
function fb(e) {
  var t = e.stateNode
  t.pendingContext
    ? a0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && a0(e, t.context, !1),
    tp(e, t.containerInfo)
}
function k0(e, t, r, n, o) {
  return pi(), Qh(o), (t.flags |= 256), xt(e, t, r, n), t.child
}
var Tf = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ef(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function hb(e, t, r) {
  var n = t.pendingProps,
    o = Me.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Me, o & 1),
    e === null)
  )
    return (
      Sf(t),
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
                : (i = Xu(a, n, 0, null)),
              (e = fo(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ef(r)),
              (t.memoizedState = Tf),
              e)
            : up(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return r_(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = Bn(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Bn(s, i)) : ((i = fo(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ef(r)
          : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Tf),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Bn(i, { mode: 'visible', children: n.children })),
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
function up(e, t) {
  return (t = Xu({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Zs(e, t, r, n) {
  return (
    n !== null && Qh(n),
    mi(t, e.child, null, r),
    (e = up(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function r_(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = od(Error(D(422)))), Zs(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = Xu({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = fo(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && mi(t, e.child, null, a),
        (t.child.memoizedState = Ef(a)),
        (t.memoizedState = Tf),
        i)
  if (!(t.mode & 1)) return Zs(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error(D(419))), (n = od(i, n, void 0)), Zs(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), Rt || s)) {
    if (((n = tt), n !== null)) {
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
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), on(e, o), br(n, e, o, -1))
    }
    return mp(), (n = od(Error(D(421)))), Zs(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = m_.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ut = An(o.nextSibling)),
      (Gt = t),
      ($e = !0),
      (gr = null),
      e !== null &&
        ((ir[ar++] = Kr),
        (ir[ar++] = Yr),
        (ir[ar++] = yo),
        (Kr = e.id),
        (Yr = e.overflow),
        (yo = t)),
      (t = up(t, n.children)),
      (t.flags |= 4096),
      t)
}
function C0(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), xf(e.return, t, r)
}
function id(e, t, r, n, o) {
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
function pb(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((xt(e, t, n.children, r), (n = Me.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && C0(e, r, t)
        else if (e.tag === 19) C0(e, r, t)
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
  if ((we(Me, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate), e !== null && Jl(e) === null && (o = r), (r = r.sibling)
        ;(r = o),
          r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)),
          id(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jl(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        id(t, !0, r, null, i)
        break
      case 'together':
        id(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Cl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function an(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (bo |= t.lanes), !(r & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error(D(153))
  if (t.child !== null) {
    for (e = t.child, r = Bn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = Bn(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function n_(e, t, r) {
  switch (t.tag) {
    case 3:
      fb(t), pi()
      break
    case 5:
      N1(t)
      break
    case 1:
      Mt(t.type) && Kl(t)
      break
    case 4:
      tp(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      we(Xl, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (we(Me, Me.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? hb(e, t, r)
          : (we(Me, Me.current & 1), (e = an(e, t, r)), e !== null ? e.sibling : null)
      we(Me, Me.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return pb(e, t, r)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Me, Me.current),
        n)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), cb(e, t, r)
  }
  return an(e, t, r)
}
var mb, $f, gb, yb
mb = function (e, t) {
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
$f = function () {}
gb = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), so(Lr.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = Xd(e, o)), (n = Xd(e, n)), (i = [])
        break
      case 'select':
        ;(o = Be({}, o, { value: void 0 })), (n = Be({}, n, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Jd(e, o)), (n = Jd(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = Hl)
    }
    tf(r, n)
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
            (Oa.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
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
              (Oa.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ke('scroll', e), i || s === l || (i = []))
                : (i = i || []).push(u, l))
    }
    r && (i = i || []).push('style', r)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
yb = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Hi(e, t) {
  if (!$e)
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
function dt(e) {
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
function o_(e, t, r) {
  var n = t.pendingProps
  switch ((Yh(t), t.tag)) {
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
      return dt(t), null
    case 1:
      return Mt(t.type) && Gl(), dt(t), null
    case 3:
      return (
        (n = t.stateNode),
        gi(),
        _e(At),
        _e(vt),
        np(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gr !== null && (Ff(gr), (gr = null)))),
        $f(e, t),
        dt(t),
        null
      )
    case 5:
      rp(t)
      var o = so(qa.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        gb(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(D(166))
          return dt(t), null
        }
        if (((e = so(Lr.current)), Xs(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[zr] = t), (n[Qa] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              ke('cancel', n), ke('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ke('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < ra.length; o++) ke(ra[o], n)
              break
            case 'source':
              ke('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              ke('error', n), ke('load', n)
              break
            case 'details':
              ke('toggle', n)
              break
            case 'input':
              Mm(n, i), ke('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }), ke('invalid', n)
              break
            case 'textarea':
              Lm(n, i), ke('invalid', n)
          }
          tf(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Qs(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Qs(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Oa.hasOwnProperty(a) && s != null && a === 'onScroll' && ke('scroll', n)
            }
          switch (r) {
            case 'input':
              Ns(n), Dm(n, i, !0)
              break
            case 'textarea':
              Ns(n), Bm(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = Hl)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Uv(r)),
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
            (e[zr] = t),
            (e[Qa] = n),
            mb(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = rf(r, n)), r)) {
              case 'dialog':
                ke('cancel', e), ke('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ke('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < ra.length; o++) ke(ra[o], e)
                o = n
                break
              case 'source':
                ke('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                ke('error', e), ke('load', e), (o = n)
                break
              case 'details':
                ke('toggle', e), (o = n)
                break
              case 'input':
                Mm(e, n), (o = Xd(e, n)), ke('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Be({}, n, { value: void 0 })),
                  ke('invalid', e)
                break
              case 'textarea':
                Lm(e, n), (o = Jd(e, n)), ke('invalid', e)
                break
              default:
                o = n
            }
            tf(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? Kv(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Hv(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Va(e, l)
                    : typeof l == 'number' && Va(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Oa.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ke('scroll', e)
                      : l != null && Mh(e, i, l, a))
              }
            switch (r) {
              case 'input':
                Ns(e), Dm(e, n, !1)
                break
              case 'textarea':
                Ns(e), Bm(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + Nn(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? ei(e, !!n.multiple, i, !1)
                    : n.defaultValue != null && ei(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Hl)
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
      return dt(t), null
    case 6:
      if (e && t.stateNode != null) yb(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(D(166))
        if (((r = so(qa.current)), so(Lr.current), Xs(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[zr] = t),
            (i = n.nodeValue !== r) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qs(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qs(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[zr] = t),
            (t.stateNode = n)
      }
      return dt(t), null
    case 13:
      if (
        (_e(Me),
        (n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($e && Ut !== null && t.mode & 1 && !(t.flags & 128))
          D1(), pi(), (t.flags |= 98560), (i = !1)
        else if (((i = Xs(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(D(317))
            i[zr] = t
          } else pi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          dt(t), (i = !1)
        } else gr !== null && (Ff(gr), (gr = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || Me.current & 1 ? Xe === 0 && (Xe = 3) : mp())),
          t.updateQueue !== null && (t.flags |= 4),
          dt(t),
          null)
    case 4:
      return gi(), $f(e, t), e === null && Ka(t.stateNode.containerInfo), dt(t), null
    case 10:
      return Zh(t.type._context), dt(t), null
    case 17:
      return Mt(t.type) && Gl(), dt(t), null
    case 19:
      if ((_e(Me), (i = t.memoizedState), i === null)) return dt(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Hi(i, !1)
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Jl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Hi(i, !1),
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
                return we(Me, (Me.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            We() > vi &&
            ((t.flags |= 128), (n = !0), Hi(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Jl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Hi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !$e)
            )
              return dt(t), null
          } else
            2 * We() - i.renderingStartTime > vi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Hi(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last), r !== null ? (r.sibling = a) : (t.child = a), (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = We()),
          (t.sibling = null),
          (r = Me.current),
          we(Me, n ? (r & 1) | 2 : r & 1),
          t)
        : (dt(t), null)
    case 22:
    case 23:
      return (
        pp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Wt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : dt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(D(156, t.tag))
}
function i_(e, t) {
  switch ((Yh(t), t.tag)) {
    case 1:
      return (
        Mt(t.type) && Gl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        gi(),
        _e(At),
        _e(vt),
        np(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return rp(t), null
    case 13:
      if ((_e(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(D(340))
        pi()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return _e(Me), null
    case 4:
      return gi(), null
    case 10:
      return Zh(t.type._context), null
    case 22:
    case 23:
      return pp(), null
    case 24:
      return null
    default:
      return null
  }
}
var Js = !1,
  ht = !1,
  a_ = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null
function Go(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        Ie(e, t, n)
      }
    else r.current = null
}
function Rf(e, t, r) {
  try {
    r()
  } catch (n) {
    Ie(e, t, n)
  }
}
var _0 = !1
function s_(e, t) {
  if (((hf = jl), (e = x1()), Gh(e))) {
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
              var p;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p)
            for (;;) {
              if (d === e) break t
              if (
                (f === r && ++u === o && (s = a),
                f === i && ++c === n && (l = a),
                (p = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = p
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (pf = { focusedElem: e, selectionRange: r }, jl = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e)
    else
      for (; F !== null; ) {
        t = F
        try {
          var b = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (b !== null) {
                  var S = b.memoizedProps,
                    y = b.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : pr(t.type, S), y)
                  m.__reactInternalSnapshotBeforeUpdate = h
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
                throw Error(D(163))
            }
        } catch (w) {
          Ie(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (F = e)
          break
        }
        F = t.return
      }
  return (b = _0), (_0 = !1), b
}
function pa(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Rf(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function Yu(e, t) {
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
function zf(e) {
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
function vb(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), vb(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[zr], delete t[Qa], delete t[yf], delete t[W2], delete t[U2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function bb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function P0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bb(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Af(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = Hl))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Af(e, t, r), e = e.sibling; e !== null; ) Af(e, t, r), (e = e.sibling)
}
function Mf(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Mf(e, t, r), e = e.sibling; e !== null; ) Mf(e, t, r), (e = e.sibling)
}
var ot = null,
  mr = !1
function mn(e, t, r) {
  for (r = r.child; r !== null; ) Sb(e, t, r), (r = r.sibling)
}
function Sb(e, t, r) {
  if (Dr && typeof Dr.onCommitFiberUnmount == 'function')
    try {
      Dr.onCommitFiberUnmount(Vu, r)
    } catch {}
  switch (r.tag) {
    case 5:
      ht || Go(r, t)
    case 6:
      var n = ot,
        o = mr
      ;(ot = null),
        mn(e, t, r),
        (ot = n),
        (mr = o),
        ot !== null &&
          (mr
            ? ((e = ot),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ot.removeChild(r.stateNode))
      break
    case 18:
      ot !== null &&
        (mr
          ? ((e = ot),
            (r = r.stateNode),
            e.nodeType === 8 ? Zc(e.parentNode, r) : e.nodeType === 1 && Zc(e, r),
            Ua(e))
          : Zc(ot, r.stateNode))
      break
    case 4:
      ;(n = ot),
        (o = mr),
        (ot = r.stateNode.containerInfo),
        (mr = !0),
        mn(e, t, r),
        (ot = n),
        (mr = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ht && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && Rf(r, t, a), (o = o.next)
        } while (o !== n)
      }
      mn(e, t, r)
      break
    case 1:
      if (!ht && (Go(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (s) {
          Ie(r, t, s)
        }
      mn(e, t, r)
      break
    case 21:
      mn(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((ht = (n = ht) || r.memoizedState !== null), mn(e, t, r), (ht = n))
        : mn(e, t, r)
      break
    default:
      mn(e, t, r)
  }
}
function T0(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new a_()),
      t.forEach(function (n) {
        var o = g_.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function fr(e, t) {
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
              ;(ot = s.stateNode), (mr = !1)
              break e
            case 3:
              ;(ot = s.stateNode.containerInfo), (mr = !0)
              break e
            case 4:
              ;(ot = s.stateNode.containerInfo), (mr = !0)
              break e
          }
          s = s.return
        }
        if (ot === null) throw Error(D(160))
        Sb(i, a, o), (ot = null), (mr = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        Ie(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xb(t, e), (t = t.sibling)
}
function xb(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((fr(t, e), kr(e), n & 4)) {
        try {
          pa(3, e, e.return), Yu(3, e)
        } catch (S) {
          Ie(e, e.return, S)
        }
        try {
          pa(5, e, e.return)
        } catch (S) {
          Ie(e, e.return, S)
        }
      }
      break
    case 1:
      fr(t, e), kr(e), n & 512 && r !== null && Go(r, r.return)
      break
    case 5:
      if ((fr(t, e), kr(e), n & 512 && r !== null && Go(r, r.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Va(o, '')
        } catch (S) {
          Ie(e, e.return, S)
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && jv(o, i), rf(s, a)
            var u = rf(s, i)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1]
              c === 'style'
                ? Kv(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? Hv(o, d)
                : c === 'children'
                ? Va(o, d)
                : Mh(o, c, d, u)
            }
            switch (s) {
              case 'input':
                qd(o, i)
                break
              case 'textarea':
                Wv(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var p = i.value
                p != null
                  ? ei(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ei(o, !!i.multiple, i.defaultValue, !0)
                      : ei(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Qa] = i
          } catch (S) {
            Ie(e, e.return, S)
          }
      }
      break
    case 6:
      if ((fr(t, e), kr(e), n & 4)) {
        if (e.stateNode === null) throw Error(D(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          Ie(e, e.return, S)
        }
      }
      break
    case 3:
      if ((fr(t, e), kr(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          Ua(t.containerInfo)
        } catch (S) {
          Ie(e, e.return, S)
        }
      break
    case 4:
      fr(t, e), kr(e)
      break
    case 13:
      fr(t, e),
        kr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (fp = We())),
        n & 4 && T0(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ht = (u = ht) || c), fr(t, e), (ht = u)) : fr(t, e),
        kr(e),
        n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pa(4, f, f.return)
                  break
                case 1:
                  Go(f, f.return)
                  var b = f.stateNode
                  if (typeof b.componentWillUnmount == 'function') {
                    ;(n = f), (r = f.return)
                    try {
                      ;(t = n),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount()
                    } catch (S) {
                      Ie(n, r, S)
                    }
                  }
                  break
                case 5:
                  Go(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    $0(d)
                    continue
                  }
              }
              p !== null ? ((p.return = f), (F = p)) : $0(d)
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
                      (s.style.display = Gv('display', a)))
              } catch (S) {
                Ie(e, e.return, S)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (S) {
                Ie(e, e.return, S)
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
      fr(t, e), kr(e), n & 4 && T0(e)
      break
    case 21:
      break
    default:
      fr(t, e), kr(e)
  }
}
function kr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (bb(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(D(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Va(o, ''), (n.flags &= -33))
          var i = P0(e)
          Mf(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = P0(e)
          Af(e, s, a)
          break
        default:
          throw Error(D(161))
      }
    } catch (l) {
      Ie(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function l_(e, t, r) {
  ;(F = e), wb(e)
}
function wb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Js
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || ht
        s = Js
        var u = ht
        if (((Js = a), (ht = l) && !u))
          for (F = o; F !== null; )
            (a = F),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? R0(o)
                : l !== null
                ? ((l.return = a), (F = l))
                : R0(o)
        for (; i !== null; ) (F = i), wb(i), (i = i.sibling)
        ;(F = o), (Js = s), (ht = u)
      }
      E0(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : E0(e)
  }
}
function E0(e) {
  for (; F !== null; ) {
    var t = F
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || Yu(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !ht)
                if (r === null) n.componentDidMount()
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : pr(t.type, r.memoizedProps)
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && d0(t, i, n)
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
                d0(t, a, r)
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
                    d !== null && Ua(d)
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
              throw Error(D(163))
          }
        ht || (t.flags & 512 && zf(t))
      } catch (f) {
        Ie(t, t.return, f)
      }
    }
    if (t === e) {
      F = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (F = r)
      break
    }
    F = t.return
  }
}
function $0(e) {
  for (; F !== null; ) {
    var t = F
    if (t === e) {
      F = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (F = r)
      break
    }
    F = t.return
  }
}
function R0(e) {
  for (; F !== null; ) {
    var t = F
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            Yu(4, t)
          } catch (l) {
            Ie(t, r, l)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var o = t.return
            try {
              n.componentDidMount()
            } catch (l) {
              Ie(t, o, l)
            }
          }
          var i = t.return
          try {
            zf(t)
          } catch (l) {
            Ie(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            zf(t)
          } catch (l) {
            Ie(t, a, l)
          }
      }
    } catch (l) {
      Ie(t, t.return, l)
    }
    if (t === e) {
      F = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (F = s)
      break
    }
    F = t.return
  }
}
var u_ = Math.ceil,
  ru = un.ReactCurrentDispatcher,
  cp = un.ReactCurrentOwner,
  ur = un.ReactCurrentBatchConfig,
  ae = 0,
  tt = null,
  Ke = null,
  at = 0,
  Wt = 0,
  Ko = Gn(0),
  Xe = 0,
  ts = null,
  bo = 0,
  Qu = 0,
  dp = 0,
  ma = null,
  Et = null,
  fp = 0,
  vi = 1 / 0,
  Wr = null,
  nu = !1,
  Df = null,
  Dn = null,
  el = !1,
  Tn = null,
  ou = 0,
  ga = 0,
  Lf = null,
  _l = -1,
  Pl = 0
function kt() {
  return ae & 6 ? We() : _l !== -1 ? _l : (_l = We())
}
function Ln(e) {
  return e.mode & 1
    ? ae & 2 && at !== 0
      ? at & -at
      : G2.transition !== null
      ? (Pl === 0 && (Pl = i1()), Pl)
      : ((e = ge), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : f1(e.type))), e)
    : 1
}
function br(e, t, r, n) {
  if (50 < ga) throw ((ga = 0), (Lf = null), Error(D(185)))
  ms(e, r, n),
    (!(ae & 2) || e !== tt) &&
      (e === tt && (!(ae & 2) && (Qu |= r), Xe === 4 && Cn(e, at)),
      Dt(e, n),
      r === 1 && ae === 0 && !(t.mode & 1) && ((vi = We() + 500), Hu && Kn()))
}
function Dt(e, t) {
  var r = e.callbackNode
  GC(e, t)
  var n = Nl(e, e === tt ? at : 0)
  if (n === 0) r !== null && Om(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Om(r), t === 1))
      e.tag === 0 ? H2(z0.bind(null, e)) : z1(z0.bind(null, e)),
        N2(function () {
          !(ae & 6) && Kn()
        }),
        (r = null)
    else {
      switch (a1(n)) {
        case 1:
          r = Ih
          break
        case 4:
          r = n1
          break
        case 16:
          r = Vl
          break
        case 536870912:
          r = o1
          break
        default:
          r = Vl
      }
      r = Rb(r, kb.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function kb(e, t) {
  if (((_l = -1), (Pl = 0), ae & 6)) throw Error(D(327))
  var r = e.callbackNode
  if (ii() && e.callbackNode !== r) return null
  var n = Nl(e, e === tt ? at : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = iu(e, n)
  else {
    t = n
    var o = ae
    ae |= 2
    var i = _b()
    ;(tt !== e || at !== t) && ((Wr = null), (vi = We() + 500), co(e, t))
    do
      try {
        f_()
        break
      } catch (s) {
        Cb(e, s)
      }
    while (1)
    qh(), (ru.current = i), (ae = o), Ke !== null ? (t = 0) : ((tt = null), (at = 0), (t = Xe))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = lf(e)), o !== 0 && ((n = o), (t = Bf(e, o)))), t === 1))
      throw ((r = ts), co(e, 0), Cn(e, n), Dt(e, We()), r)
    if (t === 6) Cn(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !c_(o) &&
          ((t = iu(e, n)), t === 2 && ((i = lf(e)), i !== 0 && ((n = i), (t = Bf(e, i)))), t === 1))
      )
        throw ((r = ts), co(e, 0), Cn(e, n), Dt(e, We()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(D(345))
        case 2:
          eo(e, Et, Wr)
          break
        case 3:
          if ((Cn(e, n), (n & 130023424) === n && ((t = fp + 500 - We()), 10 < t))) {
            if (Nl(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              kt(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = gf(eo.bind(null, e, Et, Wr), t)
            break
          }
          eo(e, Et, Wr)
          break
        case 4:
          if ((Cn(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - vr(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = We() - n),
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
                : 1960 * u_(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = gf(eo.bind(null, e, Et, Wr), n)
            break
          }
          eo(e, Et, Wr)
          break
        case 5:
          eo(e, Et, Wr)
          break
        default:
          throw Error(D(329))
      }
    }
  }
  return Dt(e, We()), e.callbackNode === r ? kb.bind(null, e) : null
}
function Bf(e, t) {
  var r = ma
  return (
    e.current.memoizedState.isDehydrated && (co(e, t).flags |= 256),
    (e = iu(e, t)),
    e !== 2 && ((t = Et), (Et = r), t !== null && Ff(t)),
    e
  )
}
function Ff(e) {
  Et === null ? (Et = e) : Et.push.apply(Et, e)
}
function c_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Sr(i(), o)) return !1
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
function Cn(e, t) {
  for (
    t &= ~dp, t &= ~Qu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - vr(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function z0(e) {
  if (ae & 6) throw Error(D(327))
  ii()
  var t = Nl(e, 0)
  if (!(t & 1)) return Dt(e, We()), null
  var r = iu(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = lf(e)
    n !== 0 && ((t = n), (r = Bf(e, n)))
  }
  if (r === 1) throw ((r = ts), co(e, 0), Cn(e, t), Dt(e, We()), r)
  if (r === 6) throw Error(D(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), eo(e, Et, Wr), Dt(e, We()), null
  )
}
function hp(e, t) {
  var r = ae
  ae |= 1
  try {
    return e(t)
  } finally {
    ;(ae = r), ae === 0 && ((vi = We() + 500), Hu && Kn())
  }
}
function So(e) {
  Tn !== null && Tn.tag === 0 && !(ae & 6) && ii()
  var t = ae
  ae |= 1
  var r = ur.transition,
    n = ge
  try {
    if (((ur.transition = null), (ge = 1), e)) return e()
  } finally {
    ;(ge = n), (ur.transition = r), (ae = t), !(ae & 6) && Kn()
  }
}
function pp() {
  ;(Wt = Ko.current), _e(Ko)
}
function co(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), V2(r)), Ke !== null))
    for (r = Ke.return; r !== null; ) {
      var n = r
      switch ((Yh(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Gl()
          break
        case 3:
          gi(), _e(At), _e(vt), np()
          break
        case 5:
          rp(n)
          break
        case 4:
          gi()
          break
        case 13:
          _e(Me)
          break
        case 19:
          _e(Me)
          break
        case 10:
          Zh(n.type._context)
          break
        case 22:
        case 23:
          pp()
      }
      r = r.return
    }
  if (
    ((tt = e),
    (Ke = e = Bn(e.current, null)),
    (at = Wt = t),
    (Xe = 0),
    (ts = null),
    (dp = Qu = bo = 0),
    (Et = ma = null),
    ao !== null)
  ) {
    for (t = 0; t < ao.length; t++)
      if (((r = ao[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    ao = null
  }
  return e
}
function Cb(e, t) {
  do {
    var r = Ke
    try {
      if ((qh(), (wl.current = tu), eu)) {
        for (var n = Le.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        eu = !1
      }
      if (
        ((vo = 0),
        (Je = Qe = Le = null),
        (ha = !1),
        (Za = 0),
        (cp.current = null),
        r === null || r.return === null)
      ) {
        ;(Xe = 1), (ts = t), (Ke = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t
        if (
          ((t = at),
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
          var p = v0(a)
          if (p !== null) {
            ;(p.flags &= -257), b0(p, a, s, i, t), p.mode & 1 && y0(i, u, t), (t = p), (l = u)
            var b = t.updateQueue
            if (b === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else b.add(l)
            break e
          } else {
            if (!(t & 1)) {
              y0(i, u, t), mp()
              break e
            }
            l = Error(D(426))
          }
        } else if ($e && s.mode & 1) {
          var y = v0(a)
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), b0(y, a, s, i, t), Qh(yi(l, s))
            break e
          }
        }
        ;(i = l = yi(l, s)), Xe !== 4 && (Xe = 2), ma === null ? (ma = [i]) : ma.push(i), (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = sb(i, l, t)
              c0(i, m)
              break e
            case 1:
              s = l
              var h = i.type,
                g = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Dn === null || !Dn.has(g))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = lb(i, s, t)
                c0(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Tb(r)
    } catch (_) {
      ;(t = _), Ke === r && r !== null && (Ke = r = r.return)
      continue
    }
    break
  } while (1)
}
function _b() {
  var e = ru.current
  return (ru.current = tu), e === null ? tu : e
}
function mp() {
  ;(Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    tt === null || (!(bo & 268435455) && !(Qu & 268435455)) || Cn(tt, at)
}
function iu(e, t) {
  var r = ae
  ae |= 2
  var n = _b()
  ;(tt !== e || at !== t) && ((Wr = null), co(e, t))
  do
    try {
      d_()
      break
    } catch (o) {
      Cb(e, o)
    }
  while (1)
  if ((qh(), (ae = r), (ru.current = n), Ke !== null)) throw Error(D(261))
  return (tt = null), (at = 0), Xe
}
function d_() {
  for (; Ke !== null; ) Pb(Ke)
}
function f_() {
  for (; Ke !== null && !FC(); ) Pb(Ke)
}
function Pb(e) {
  var t = $b(e.alternate, e, Wt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Tb(e) : (Ke = t), (cp.current = null)
}
function Tb(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = i_(r, t)), r !== null)) {
        ;(r.flags &= 32767), (Ke = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Xe = 6), (Ke = null)
        return
      }
    } else if (((r = o_(r, t, Wt)), r !== null)) {
      Ke = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t
      return
    }
    Ke = t = e
  } while (t !== null)
  Xe === 0 && (Xe = 5)
}
function eo(e, t, r) {
  var n = ge,
    o = ur.transition
  try {
    ;(ur.transition = null), (ge = 1), h_(e, t, r, n)
  } finally {
    ;(ur.transition = o), (ge = n)
  }
  return null
}
function h_(e, t, r, n) {
  do ii()
  while (Tn !== null)
  if (ae & 6) throw Error(D(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(D(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (KC(e, i),
    e === tt && ((Ke = tt = null), (at = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      el ||
      ((el = !0),
      Rb(Vl, function () {
        return ii(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = ur.transition), (ur.transition = null)
    var a = ge
    ge = 1
    var s = ae
    ;(ae |= 4),
      (cp.current = null),
      s_(e, r),
      xb(r, e),
      M2(pf),
      (jl = !!hf),
      (pf = hf = null),
      (e.current = r),
      l_(r),
      IC(),
      (ae = s),
      (ge = a),
      (ur.transition = i)
  } else e.current = r
  if (
    (el && ((el = !1), (Tn = e), (ou = o)),
    (i = e.pendingLanes),
    i === 0 && (Dn = null),
    NC(r.stateNode),
    Dt(e, We()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (nu) throw ((nu = !1), (e = Df), (Df = null), e)
  return (
    ou & 1 && e.tag !== 0 && ii(),
    (i = e.pendingLanes),
    i & 1 ? (e === Lf ? ga++ : ((ga = 0), (Lf = e))) : (ga = 0),
    Kn(),
    null
  )
}
function ii() {
  if (Tn !== null) {
    var e = a1(ou),
      t = ur.transition,
      r = ge
    try {
      if (((ur.transition = null), (ge = 16 > e ? 16 : e), Tn === null)) var n = !1
      else {
        if (((e = Tn), (Tn = null), (ou = 0), ae & 6)) throw Error(D(331))
        var o = ae
        for (ae |= 4, F = e.current; F !== null; ) {
          var i = F,
            a = i.child
          if (F.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (F = u; F !== null; ) {
                  var c = F
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pa(8, c, i)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (F = d)
                  else
                    for (; F !== null; ) {
                      c = F
                      var f = c.sibling,
                        p = c.return
                      if ((vb(c), c === u)) {
                        F = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = p), (F = f)
                        break
                      }
                      F = p
                    }
                }
              }
              var b = i.alternate
              if (b !== null) {
                var S = b.child
                if (S !== null) {
                  b.child = null
                  do {
                    var y = S.sibling
                    ;(S.sibling = null), (S = y)
                  } while (S !== null)
                }
              }
              F = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (F = a)
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pa(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (F = m)
                break e
              }
              F = i.return
            }
        }
        var h = e.current
        for (F = h; F !== null; ) {
          a = F
          var g = a.child
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (F = g)
          else
            e: for (a = h; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yu(9, s)
                  }
                } catch (_) {
                  Ie(s, s.return, _)
                }
              if (s === a) {
                F = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (F = w)
                break e
              }
              F = s.return
            }
        }
        if (((ae = o), Kn(), Dr && typeof Dr.onPostCommitFiberRoot == 'function'))
          try {
            Dr.onPostCommitFiberRoot(Vu, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(ge = r), (ur.transition = t)
    }
  }
  return !1
}
function A0(e, t, r) {
  ;(t = yi(r, t)),
    (t = sb(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = kt()),
    e !== null && (ms(e, 1, t), Dt(e, t))
}
function Ie(e, t, r) {
  if (e.tag === 3) A0(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        A0(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (Dn === null || !Dn.has(n)))
        ) {
          ;(e = yi(r, e)),
            (e = lb(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = kt()),
            t !== null && (ms(t, 1, e), Dt(t, e))
          break
        }
      }
      t = t.return
    }
}
function p_(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = kt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    tt === e &&
      (at & r) === r &&
      (Xe === 4 || (Xe === 3 && (at & 130023424) === at && 500 > We() - fp) ? co(e, 0) : (dp |= r)),
    Dt(e, t)
}
function Eb(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Us), (Us <<= 1), !(Us & 130023424) && (Us = 4194304)) : (t = 1))
  var r = kt()
  ;(e = on(e, t)), e !== null && (ms(e, t, r), Dt(e, r))
}
function m_(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), Eb(e, r)
}
function g_(e, t) {
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
      throw Error(D(314))
  }
  n !== null && n.delete(t), Eb(e, r)
}
var $b
$b = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current) Rt = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Rt = !1), n_(e, t, r)
      Rt = !!(e.flags & 131072)
    }
  else (Rt = !1), $e && t.flags & 1048576 && A1(t, Ql, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      Cl(e, t), (e = t.pendingProps)
      var o = hi(t, vt.current)
      oi(t, r), (o = ip(null, t, n, e, o, r))
      var i = ap()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Mt(n) ? ((i = !0), Kl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            ep(t),
            (o.updater = Gu),
            (t.stateNode = o),
            (o._reactInternals = t),
            kf(t, n, e, r),
            (t = Pf(null, t, n, !0, i, r)))
          : ((t.tag = 0), $e && i && Kh(t), xt(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = v_(n)),
          (e = pr(n, e)),
          o)
        ) {
          case 0:
            t = _f(null, t, n, e, r)
            break e
          case 1:
            t = w0(null, t, n, e, r)
            break e
          case 11:
            t = S0(null, t, n, e, r)
            break e
          case 14:
            t = x0(null, t, n, pr(n.type, e), r)
            break e
        }
        throw Error(D(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : pr(n, o)),
        _f(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : pr(n, o)),
        w0(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((fb(t), e === null)) throw Error(D(387))
        ;(n = t.pendingProps), (i = t.memoizedState), (o = i.element), B1(e, t), Zl(t, n, null, r)
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
            ;(o = yi(Error(D(423)), t)), (t = k0(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = yi(Error(D(424)), t)), (t = k0(e, t, n, r, o))
            break e
          } else
            for (
              Ut = An(t.stateNode.containerInfo.firstChild),
                Gt = t,
                $e = !0,
                gr = null,
                r = V1(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((pi(), n === o)) {
            t = an(e, t, r)
            break e
          }
          xt(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        N1(t),
        e === null && Sf(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        mf(n, o) ? (a = null) : i !== null && mf(n, i) && (t.flags |= 32),
        db(e, t),
        xt(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && Sf(t), null
    case 13:
      return hb(e, t, r)
    case 4:
      return (
        tp(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = mi(t, null, n, r)) : xt(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : pr(n, o)),
        S0(e, t, n, o, r)
      )
    case 7:
      return xt(e, t, t.pendingProps, r), t.child
    case 8:
      return xt(e, t, t.pendingProps.children, r), t.child
    case 12:
      return xt(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          we(Xl, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Sr(i.value, a)) {
            if (i.children === o.children && !At.current) {
              t = an(e, t, r)
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
                      ;(l = qr(-1, r & -r)), (l.tag = 2)
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
                      xf(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(D(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  xf(a, r, t),
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
        xt(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        oi(t, r),
        (o = cr(o)),
        (n = n(o)),
        (t.flags |= 1),
        xt(e, t, n, r),
        t.child
      )
    case 14:
      return (n = t.type), (o = pr(n, t.pendingProps)), (o = pr(n.type, o)), x0(e, t, n, o, r)
    case 15:
      return ub(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : pr(n, o)),
        Cl(e, t),
        (t.tag = 1),
        Mt(n) ? ((e = !0), Kl(t)) : (e = !1),
        oi(t, r),
        I1(t, n, o),
        kf(t, n, o, r),
        Pf(null, t, n, !0, e, r)
      )
    case 19:
      return pb(e, t, r)
    case 22:
      return cb(e, t, r)
  }
  throw Error(D(156, t.tag))
}
function Rb(e, t) {
  return r1(e, t)
}
function y_(e, t, r, n) {
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
function sr(e, t, r, n) {
  return new y_(e, t, r, n)
}
function gp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function v_(e) {
  if (typeof e == 'function') return gp(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Lh)) return 11
    if (e === Bh) return 14
  }
  return 2
}
function Bn(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = sr(e.tag, t, e.key, e.mode)),
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
function Tl(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) gp(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Fo:
        return fo(r.children, o, i, t)
      case Dh:
        ;(a = 8), (o |= 8)
        break
      case Gd:
        return (e = sr(12, r, t, o | 2)), (e.elementType = Gd), (e.lanes = i), e
      case Kd:
        return (e = sr(13, r, t, o)), (e.elementType = Kd), (e.lanes = i), e
      case Yd:
        return (e = sr(19, r, t, o)), (e.elementType = Yd), (e.lanes = i), e
      case Ov:
        return Xu(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Fv:
              a = 10
              break e
            case Iv:
              a = 9
              break e
            case Lh:
              a = 11
              break e
            case Bh:
              a = 14
              break e
            case Sn:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(D(130, e == null ? e : typeof e, ''))
    }
  return (t = sr(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
}
function fo(e, t, r, n) {
  return (e = sr(7, e, n, t)), (e.lanes = r), e
}
function Xu(e, t, r, n) {
  return (
    (e = sr(22, e, n, t)), (e.elementType = Ov), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
  )
}
function ad(e, t, r) {
  return (e = sr(6, e, null, t)), (e.lanes = r), e
}
function sd(e, t, r) {
  return (
    (t = sr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function b_(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nc(0)),
    (this.expirationTimes = Nc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nc(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function yp(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new b_(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = sr(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ep(i),
    e
  )
}
function S_(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Bo,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function zb(e) {
  if (!e) return jn
  e = e._reactInternals
  e: {
    if (ko(e) !== e || e.tag !== 1) throw Error(D(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(D(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (Mt(r)) return R1(e, r, t)
  }
  return t
}
function Ab(e, t, r, n, o, i, a, s, l) {
  return (
    (e = yp(r, n, !0, e, o, i, a, s, l)),
    (e.context = zb(null)),
    (r = e.current),
    (n = kt()),
    (o = Ln(r)),
    (i = qr(n, o)),
    (i.callback = t ?? null),
    Mn(r, i, o),
    (e.current.lanes = o),
    ms(e, o, n),
    Dt(e, n),
    e
  )
}
function qu(e, t, r, n) {
  var o = t.current,
    i = kt(),
    a = Ln(o)
  return (
    (r = zb(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = qr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Mn(o, t, a)),
    e !== null && (br(e, o, a, i), xl(e, o, a)),
    a
  )
}
function au(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function M0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function vp(e, t) {
  M0(e, t), (e = e.alternate) && M0(e, t)
}
function x_() {
  return null
}
var Mb =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function bp(e) {
  this._internalRoot = e
}
Zu.prototype.render = bp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(D(409))
  qu(e, t, null, null)
}
Zu.prototype.unmount = bp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    So(function () {
      qu(null, e, null, null)
    }),
      (t[nn] = null)
  }
}
function Zu(e) {
  this._internalRoot = e
}
Zu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = u1()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < kn.length && t !== 0 && t < kn[r].priority; r++);
    kn.splice(r, 0, e), r === 0 && d1(e)
  }
}
function Sp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ju(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function D0() {}
function w_(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var u = au(a)
        i.call(u)
      }
    }
    var a = Ab(t, n, e, 0, null, !1, !1, '', D0)
    return (
      (e._reactRootContainer = a),
      (e[nn] = a.current),
      Ka(e.nodeType === 8 ? e.parentNode : e),
      So(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var u = au(l)
      s.call(u)
    }
  }
  var l = yp(e, 0, !1, null, null, !1, !1, '', D0)
  return (
    (e._reactRootContainer = l),
    (e[nn] = l.current),
    Ka(e.nodeType === 8 ? e.parentNode : e),
    So(function () {
      qu(t, l, r, n)
    }),
    l
  )
}
function ec(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = au(a)
        s.call(l)
      }
    }
    qu(t, a, e, o)
  } else a = w_(r, t, e, o, n)
  return au(a)
}
s1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = ta(t.pendingLanes)
        r !== 0 && (Oh(t, r | 1), Dt(t, We()), !(ae & 6) && ((vi = We() + 500), Kn()))
      }
      break
    case 13:
      So(function () {
        var n = on(e, 1)
        if (n !== null) {
          var o = kt()
          br(n, e, 1, o)
        }
      }),
        vp(e, 1)
  }
}
Vh = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728)
    if (t !== null) {
      var r = kt()
      br(t, e, 134217728, r)
    }
    vp(e, 134217728)
  }
}
l1 = function (e) {
  if (e.tag === 13) {
    var t = Ln(e),
      r = on(e, t)
    if (r !== null) {
      var n = kt()
      br(r, e, t, n)
    }
    vp(e, t)
  }
}
u1 = function () {
  return ge
}
c1 = function (e, t) {
  var r = ge
  try {
    return (ge = e), t()
  } finally {
    ge = r
  }
}
of = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((qd(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = Uu(n)
            if (!o) throw Error(D(90))
            Nv(n), qd(n, o)
          }
        }
      }
      break
    case 'textarea':
      Wv(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && ei(e, !!r.multiple, t, !1)
  }
}
Xv = hp
qv = So
var k_ = { usingClientEntryPoint: !1, Events: [ys, No, Uu, Yv, Qv, hp] },
  Gi = {
    findFiberByHostInstance: io,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  C_ = {
    bundleType: Gi.bundleType,
    version: Gi.version,
    rendererPackageName: Gi.rendererPackageName,
    rendererConfig: Gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = e1(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Gi.findFiberByHostInstance || x_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      ;(Vu = tl.inject(C_)), (Dr = tl)
    } catch {}
}
qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k_
qt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Sp(t)) throw Error(D(200))
  return S_(e, t, null, r)
}
qt.createRoot = function (e, t) {
  if (!Sp(e)) throw Error(D(299))
  var r = !1,
    n = '',
    o = Mb
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = yp(e, 1, !1, null, null, r, !1, n, o)),
    (e[nn] = t.current),
    Ka(e.nodeType === 8 ? e.parentNode : e),
    new bp(t)
  )
}
qt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(D(188))
      : ((e = Object.keys(e).join(',')), Error(D(268, e)))
  return (e = e1(t)), (e = e === null ? null : e.stateNode), e
}
qt.flushSync = function (e) {
  return So(e)
}
qt.hydrate = function (e, t, r) {
  if (!Ju(t)) throw Error(D(200))
  return ec(null, e, t, !0, r)
}
qt.hydrateRoot = function (e, t, r) {
  if (!Sp(e)) throw Error(D(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = Mb
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = Ab(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[nn] = t.current),
    Ka(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new Zu(t)
}
qt.render = function (e, t, r) {
  if (!Ju(t)) throw Error(D(200))
  return ec(null, e, t, !1, r)
}
qt.unmountComponentAtNode = function (e) {
  if (!Ju(e)) throw Error(D(40))
  return e._reactRootContainer
    ? (So(function () {
        ec(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[nn] = null)
        })
      }),
      !0)
    : !1
}
qt.unstable_batchedUpdates = hp
qt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Ju(r)) throw Error(D(200))
  if (e == null || e._reactInternals === void 0) throw Error(D(38))
  return ec(e, t, r, !1, n)
}
qt.version = '18.2.0-next-9e3b772b8-20220608'
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
  t(), (e.exports = qt)
})(xC)
var [Db, __] = Ci({ strict: !1, name: 'PortalContext' }),
  xp = 'chakra-portal',
  P_ = '.chakra-portal',
  T_ = (e) =>
    A('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  E_ = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = x.useState(null),
      i = x.useRef(null),
      [, a] = x.useState({})
    x.useEffect(() => a({}), [])
    const s = __(),
      l = SC()
    Fa(() => {
      if (!n) return
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body
      if (!d) return
      ;(i.current = c.createElement('div')),
        (i.current.className = xp),
        d.appendChild(i.current),
        a({})
      const f = i.current
      return () => {
        d.contains(f) && d.removeChild(f)
      }
    }, [n])
    const u =
      l != null && l.zIndex ? A(T_, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r
    return i.current
      ? Ia.createPortal(A(Db, { value: i.current, children: u }), i.current)
      : A('span', {
          ref: (c) => {
            c && o(c)
          },
        })
  },
  $_ = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = x.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div')
        return l && (l.className = xp), l
      }, [o]),
      [, s] = x.useState({})
    return (
      Fa(() => s({}), []),
      Fa(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a)
            }
          )
      }, [a, i]),
      i && a ? Ia.createPortal(A(Db, { value: n ? a : null, children: t }), a) : null
    )
  }
function tc(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t
  return r ? A($_, { containerRef: r, ...n }) : A(E_, { ...n })
}
tc.className = xp
tc.selector = P_
tc.displayName = 'Portal'
function wp() {
  const e = x.useContext(Ba)
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    )
  return e
}
var kp = x.createContext({})
kp.displayName = 'ColorModeContext'
function Cp() {
  const e = x.useContext(kp)
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
  return e
}
var rl = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function R_(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0
        ;(document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o()
      },
      setClassName(n) {
        document.body.classList.add(n ? rl.dark : rl.light),
          document.body.classList.remove(n ? rl.light : rl.dark)
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
var z_ = 'chakra-ui-color-mode'
function A_(e) {
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
var M_ = A_(z_),
  L0 = () => {}
function B0(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function Lb(e) {
  const {
      value: t,
      children: r,
      options: { useSystemColorMode: n, initialColorMode: o, disableTransitionOnChange: i } = {},
      colorModeManager: a = M_,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = x.useState(() => B0(a, s)),
    [c, d] = x.useState(() => B0(a)),
    {
      getSystemTheme: f,
      setClassName: p,
      setDataset: b,
      addListener: S,
    } = x.useMemo(() => R_({ preventTransition: i }), [i]),
    y = o === 'system' && !l ? c : l,
    m = x.useCallback(
      (w) => {
        const _ = w === 'system' ? f() : w
        u(_), p(_ === 'dark'), b(_), a.set(_)
      },
      [a, f, p, b]
    )
  Fa(() => {
    o === 'system' && d(f())
  }, []),
    x.useEffect(() => {
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
  const h = x.useCallback(() => {
    m(y === 'dark' ? 'light' : 'dark')
  }, [y, m])
  x.useEffect(() => {
    if (n) return S(m)
  }, [n, S, m])
  const g = x.useMemo(
    () => ({
      colorMode: t ?? y,
      toggleColorMode: t ? L0 : h,
      setColorMode: t ? L0 : m,
      forced: t !== void 0,
    }),
    [y, h, m, t]
  )
  return A(kp.Provider, { value: g, children: r })
}
Lb.displayName = 'ColorModeProvider'
function D_() {
  const e = Cp(),
    t = wp()
  return { ...e, theme: t }
}
var Jt = (...e) => e.filter(Boolean).join(' ')
function yt(e) {
  const t = typeof e
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function En(e, ...t) {
  return L_(e) ? e(...t) : e
}
var L_ = (e) => typeof e == 'function',
  F0 = (e) => (e ? '' : void 0),
  su = {},
  B_ = {
    get exports() {
      return su
    },
    set exports(e) {
      su = e
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
    p = '[object Function]',
    b = '[object GeneratorFunction]',
    S = '[object Map]',
    y = '[object Number]',
    m = '[object Null]',
    h = '[object Object]',
    g = '[object Proxy]',
    w = '[object RegExp]',
    _ = '[object Set]',
    z = '[object String]',
    T = '[object Undefined]',
    $ = '[object WeakMap]',
    j = '[object ArrayBuffer]',
    O = '[object DataView]',
    ue = '[object Float32Array]',
    ze = '[object Float64Array]',
    Ve = '[object Int8Array]',
    ce = '[object Int16Array]',
    se = '[object Int32Array]',
    Ze = '[object Uint8Array]',
    Tt = '[object Uint8ClampedArray]',
    L = '[object Uint16Array]',
    Y = '[object Uint32Array]',
    V = /[\\^$.*+?()[\]{}|]/g,
    U = /^\[object .+?Constructor\]$/,
    ve = /^(?:0|[1-9]\d*)$/,
    te = {}
  ;(te[ue] = te[ze] = te[Ve] = te[ce] = te[se] = te[Ze] = te[Tt] = te[L] = te[Y] = !0),
    (te[s] =
      te[l] =
      te[j] =
      te[c] =
      te[O] =
      te[d] =
      te[f] =
      te[p] =
      te[S] =
      te[y] =
      te[h] =
      te[w] =
      te[_] =
      te[z] =
      te[$] =
        !1)
  var Fe = typeof Fs == 'object' && Fs && Fs.Object === Object && Fs,
    xr = typeof self == 'object' && self && self.Object === Object && self,
    Ne = Fe || xr || Function('return this')(),
    Ft = t && !t.nodeType && t,
    Ir = Ft && !0 && e && !e.nodeType && e,
    dn = Ir && Ir.exports === Ft,
    wr = dn && Fe.process,
    lt = (function () {
      try {
        var v = Ir && Ir.require && Ir.require('util').types
        return v || (wr && wr.binding && wr.binding('util'))
      } catch {}
    })(),
    fn = lt && lt.isTypedArray
  function hn(v, k, P) {
    switch (P.length) {
      case 0:
        return v.call(k)
      case 1:
        return v.call(k, P[0])
      case 2:
        return v.call(k, P[0], P[1])
      case 3:
        return v.call(k, P[0], P[1], P[2])
    }
    return v.apply(k, P)
  }
  function Ri(v, k) {
    for (var P = -1, B = Array(v); ++P < v; ) B[P] = k(P)
    return B
  }
  function zi(v) {
    return function (k) {
      return v(k)
    }
  }
  function To(v, k) {
    return v == null ? void 0 : v[k]
  }
  function Es(v, k) {
    return function (P) {
      return v(k(P))
    }
  }
  var Sc = Array.prototype,
    $s = Function.prototype,
    Eo = Object.prototype,
    Or = Ne['__core-js_shared__'],
    Vr = $s.toString,
    er = Eo.hasOwnProperty,
    $o = (function () {
      var v = /[^.]+$/.exec((Or && Or.keys && Or.keys.IE_PROTO) || '')
      return v ? 'Symbol(src)_1.' + v : ''
    })(),
    Rs = Eo.toString,
    xc = Vr.call(Object),
    zs = RegExp(
      '^' +
        Vr.call(er)
          .replace(V, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    Ro = dn ? Ne.Buffer : void 0,
    E = Ne.Symbol,
    R = Ne.Uint8Array,
    M = Ro ? Ro.allocUnsafe : void 0,
    I = Es(Object.getPrototypeOf, Object),
    N = Object.create,
    Q = Eo.propertyIsEnumerable,
    X = Sc.splice,
    H = E ? E.toStringTag : void 0,
    W = (function () {
      try {
        var v = Tc(Object, 'defineProperty')
        return v({}, '', {}), v
      } catch {}
    })(),
    be = Ro ? Ro.isBuffer : void 0,
    ne = Math.max,
    It = Date.now,
    je = Tc(Ne, 'Map'),
    Ae = Tc(Object, 'create'),
    Ot = (function () {
      function v() {}
      return function (k) {
        if (!qn(k)) return {}
        if (N) return N(k)
        v.prototype = k
        var P = new v()
        return (v.prototype = void 0), P
      }
    })()
  function Vt(v) {
    var k = -1,
      P = v == null ? 0 : v.length
    for (this.clear(); ++k < P; ) {
      var B = v[k]
      this.set(B[0], B[1])
    }
  }
  function Ai() {
    ;(this.__data__ = Ae ? Ae(null) : {}), (this.size = 0)
  }
  function Qn(v) {
    var k = this.has(v) && delete this.__data__[v]
    return (this.size -= k ? 1 : 0), k
  }
  function pn(v) {
    var k = this.__data__
    if (Ae) {
      var P = k[v]
      return P === n ? void 0 : P
    }
    return er.call(k, v) ? k[v] : void 0
  }
  function Mi(v) {
    var k = this.__data__
    return Ae ? k[v] !== void 0 : er.call(k, v)
  }
  function Di(v, k) {
    var P = this.__data__
    return (this.size += this.has(v) ? 0 : 1), (P[v] = Ae && k === void 0 ? n : k), this
  }
  ;(Vt.prototype.clear = Ai),
    (Vt.prototype.delete = Qn),
    (Vt.prototype.get = pn),
    (Vt.prototype.has = Mi),
    (Vt.prototype.set = Di)
  function xe(v) {
    var k = -1,
      P = v == null ? 0 : v.length
    for (this.clear(); ++k < P; ) {
      var B = v[k]
      this.set(B[0], B[1])
    }
  }
  function Nt() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function Nr(v) {
    var k = this.__data__,
      P = Ms(k, v)
    if (P < 0) return !1
    var B = k.length - 1
    return P == B ? k.pop() : X.call(k, P, 1), --this.size, !0
  }
  function Xn(v) {
    var k = this.__data__,
      P = Ms(k, v)
    return P < 0 ? void 0 : k[P][1]
  }
  function wc(v) {
    return Ms(this.__data__, v) > -1
  }
  function kc(v, k) {
    var P = this.__data__,
      B = Ms(P, v)
    return B < 0 ? (++this.size, P.push([v, k])) : (P[B][1] = k), this
  }
  ;(xe.prototype.clear = Nt),
    (xe.prototype.delete = Nr),
    (xe.prototype.get = Xn),
    (xe.prototype.has = wc),
    (xe.prototype.set = kc)
  function ut(v) {
    var k = -1,
      P = v == null ? 0 : v.length
    for (this.clear(); ++k < P; ) {
      var B = v[k]
      this.set(B[0], B[1])
    }
  }
  function Li() {
    ;(this.size = 0), (this.__data__ = { hash: new Vt(), map: new (je || xe)(), string: new Vt() })
  }
  function As(v) {
    var k = Ls(this, v).delete(v)
    return (this.size -= k ? 1 : 0), k
  }
  function Cc(v) {
    return Ls(this, v).get(v)
  }
  function uw(v) {
    return Ls(this, v).has(v)
  }
  function cw(v, k) {
    var P = Ls(this, v),
      B = P.size
    return P.set(v, k), (this.size += P.size == B ? 0 : 1), this
  }
  ;(ut.prototype.clear = Li),
    (ut.prototype.delete = As),
    (ut.prototype.get = Cc),
    (ut.prototype.has = uw),
    (ut.prototype.set = cw)
  function zo(v) {
    var k = (this.__data__ = new xe(v))
    this.size = k.size
  }
  function dw() {
    ;(this.__data__ = new xe()), (this.size = 0)
  }
  function fw(v) {
    var k = this.__data__,
      P = k.delete(v)
    return (this.size = k.size), P
  }
  function hw(v) {
    return this.__data__.get(v)
  }
  function pw(v) {
    return this.__data__.has(v)
  }
  function mw(v, k) {
    var P = this.__data__
    if (P instanceof xe) {
      var B = P.__data__
      if (!je || B.length < r - 1) return B.push([v, k]), (this.size = ++P.size), this
      P = this.__data__ = new ut(B)
    }
    return P.set(v, k), (this.size = P.size), this
  }
  ;(zo.prototype.clear = dw),
    (zo.prototype.delete = fw),
    (zo.prototype.get = hw),
    (zo.prototype.has = pw),
    (zo.prototype.set = mw)
  function gw(v, k) {
    var P = Rc(v),
      B = !P && $c(v),
      oe = !P && !B && hm(v),
      Se = !P && !B && !oe && mm(v),
      Te = P || B || oe || Se,
      re = Te ? Ri(v.length, String) : [],
      Ee = re.length
    for (var tr in v)
      (k || er.call(v, tr)) &&
        !(
          Te &&
          (tr == 'length' ||
            (oe && (tr == 'offset' || tr == 'parent')) ||
            (Se && (tr == 'buffer' || tr == 'byteLength' || tr == 'byteOffset')) ||
            dm(tr, Ee))
        ) &&
        re.push(tr)
    return re
  }
  function _c(v, k, P) {
    ;((P !== void 0 && !Bs(v[k], P)) || (P === void 0 && !(k in v))) && Pc(v, k, P)
  }
  function yw(v, k, P) {
    var B = v[k]
    ;(!(er.call(v, k) && Bs(B, P)) || (P === void 0 && !(k in v))) && Pc(v, k, P)
  }
  function Ms(v, k) {
    for (var P = v.length; P--; ) if (Bs(v[P][0], k)) return P
    return -1
  }
  function Pc(v, k, P) {
    k == '__proto__' && W
      ? W(v, k, { configurable: !0, enumerable: !0, value: P, writable: !0 })
      : (v[k] = P)
  }
  var vw = zw()
  function Ds(v) {
    return v == null ? (v === void 0 ? T : m) : H && H in Object(v) ? Aw(v) : Iw(v)
  }
  function um(v) {
    return Bi(v) && Ds(v) == s
  }
  function bw(v) {
    if (!qn(v) || Bw(v)) return !1
    var k = Ac(v) ? zs : U
    return k.test(jw(v))
  }
  function Sw(v) {
    return Bi(v) && pm(v.length) && !!te[Ds(v)]
  }
  function xw(v) {
    if (!qn(v)) return Fw(v)
    var k = fm(v),
      P = []
    for (var B in v) (B == 'constructor' && (k || !er.call(v, B))) || P.push(B)
    return P
  }
  function cm(v, k, P, B, oe) {
    v !== k &&
      vw(
        k,
        function (Se, Te) {
          if ((oe || (oe = new zo()), qn(Se))) ww(v, k, Te, P, cm, B, oe)
          else {
            var re = B ? B(Ec(v, Te), Se, Te + '', v, k, oe) : void 0
            re === void 0 && (re = Se), _c(v, Te, re)
          }
        },
        gm
      )
  }
  function ww(v, k, P, B, oe, Se, Te) {
    var re = Ec(v, P),
      Ee = Ec(k, P),
      tr = Te.get(Ee)
    if (tr) {
      _c(v, P, tr)
      return
    }
    var jt = Se ? Se(re, Ee, P + '', v, k, Te) : void 0,
      Fi = jt === void 0
    if (Fi) {
      var Mc = Rc(Ee),
        Dc = !Mc && hm(Ee),
        vm = !Mc && !Dc && mm(Ee)
      ;(jt = Ee),
        Mc || Dc || vm
          ? Rc(re)
            ? (jt = re)
            : Ww(re)
            ? (jt = Ew(re))
            : Dc
            ? ((Fi = !1), (jt = _w(Ee, !0)))
            : vm
            ? ((Fi = !1), (jt = Tw(Ee, !0)))
            : (jt = [])
          : Uw(Ee) || $c(Ee)
          ? ((jt = re), $c(re) ? (jt = Hw(re)) : (!qn(re) || Ac(re)) && (jt = Mw(Ee)))
          : (Fi = !1)
    }
    Fi && (Te.set(Ee, jt), oe(jt, Ee, B, Se, Te), Te.delete(Ee)), _c(v, P, jt)
  }
  function kw(v, k) {
    return Vw(Ow(v, k, ym), v + '')
  }
  var Cw = W
    ? function (v, k) {
        return W(v, 'toString', { configurable: !0, enumerable: !1, value: Kw(k), writable: !0 })
      }
    : ym
  function _w(v, k) {
    if (k) return v.slice()
    var P = v.length,
      B = M ? M(P) : new v.constructor(P)
    return v.copy(B), B
  }
  function Pw(v) {
    var k = new v.constructor(v.byteLength)
    return new R(k).set(new R(v)), k
  }
  function Tw(v, k) {
    var P = k ? Pw(v.buffer) : v.buffer
    return new v.constructor(P, v.byteOffset, v.length)
  }
  function Ew(v, k) {
    var P = -1,
      B = v.length
    for (k || (k = Array(B)); ++P < B; ) k[P] = v[P]
    return k
  }
  function $w(v, k, P, B) {
    var oe = !P
    P || (P = {})
    for (var Se = -1, Te = k.length; ++Se < Te; ) {
      var re = k[Se],
        Ee = B ? B(P[re], v[re], re, P, v) : void 0
      Ee === void 0 && (Ee = v[re]), oe ? Pc(P, re, Ee) : yw(P, re, Ee)
    }
    return P
  }
  function Rw(v) {
    return kw(function (k, P) {
      var B = -1,
        oe = P.length,
        Se = oe > 1 ? P[oe - 1] : void 0,
        Te = oe > 2 ? P[2] : void 0
      for (
        Se = v.length > 3 && typeof Se == 'function' ? (oe--, Se) : void 0,
          Te && Dw(P[0], P[1], Te) && ((Se = oe < 3 ? void 0 : Se), (oe = 1)),
          k = Object(k);
        ++B < oe;

      ) {
        var re = P[B]
        re && v(k, re, B, Se)
      }
      return k
    })
  }
  function zw(v) {
    return function (k, P, B) {
      for (var oe = -1, Se = Object(k), Te = B(k), re = Te.length; re--; ) {
        var Ee = Te[v ? re : ++oe]
        if (P(Se[Ee], Ee, Se) === !1) break
      }
      return k
    }
  }
  function Ls(v, k) {
    var P = v.__data__
    return Lw(k) ? P[typeof k == 'string' ? 'string' : 'hash'] : P.map
  }
  function Tc(v, k) {
    var P = To(v, k)
    return bw(P) ? P : void 0
  }
  function Aw(v) {
    var k = er.call(v, H),
      P = v[H]
    try {
      v[H] = void 0
      var B = !0
    } catch {}
    var oe = Rs.call(v)
    return B && (k ? (v[H] = P) : delete v[H]), oe
  }
  function Mw(v) {
    return typeof v.constructor == 'function' && !fm(v) ? Ot(I(v)) : {}
  }
  function dm(v, k) {
    var P = typeof v
    return (
      (k = k ?? a),
      !!k && (P == 'number' || (P != 'symbol' && ve.test(v))) && v > -1 && v % 1 == 0 && v < k
    )
  }
  function Dw(v, k, P) {
    if (!qn(P)) return !1
    var B = typeof k
    return (B == 'number' ? zc(P) && dm(k, P.length) : B == 'string' && k in P) ? Bs(P[k], v) : !1
  }
  function Lw(v) {
    var k = typeof v
    return k == 'string' || k == 'number' || k == 'symbol' || k == 'boolean'
      ? v !== '__proto__'
      : v === null
  }
  function Bw(v) {
    return !!$o && $o in v
  }
  function fm(v) {
    var k = v && v.constructor,
      P = (typeof k == 'function' && k.prototype) || Eo
    return v === P
  }
  function Fw(v) {
    var k = []
    if (v != null) for (var P in Object(v)) k.push(P)
    return k
  }
  function Iw(v) {
    return Rs.call(v)
  }
  function Ow(v, k, P) {
    return (
      (k = ne(k === void 0 ? v.length - 1 : k, 0)),
      function () {
        for (var B = arguments, oe = -1, Se = ne(B.length - k, 0), Te = Array(Se); ++oe < Se; )
          Te[oe] = B[k + oe]
        oe = -1
        for (var re = Array(k + 1); ++oe < k; ) re[oe] = B[oe]
        return (re[k] = P(Te)), hn(v, this, re)
      }
    )
  }
  function Ec(v, k) {
    if (!(k === 'constructor' && typeof v[k] == 'function') && k != '__proto__') return v[k]
  }
  var Vw = Nw(Cw)
  function Nw(v) {
    var k = 0,
      P = 0
    return function () {
      var B = It(),
        oe = i - (B - P)
      if (((P = B), oe > 0)) {
        if (++k >= o) return arguments[0]
      } else k = 0
      return v.apply(void 0, arguments)
    }
  }
  function jw(v) {
    if (v != null) {
      try {
        return Vr.call(v)
      } catch {}
      try {
        return v + ''
      } catch {}
    }
    return ''
  }
  function Bs(v, k) {
    return v === k || (v !== v && k !== k)
  }
  var $c = um(
      (function () {
        return arguments
      })()
    )
      ? um
      : function (v) {
          return Bi(v) && er.call(v, 'callee') && !Q.call(v, 'callee')
        },
    Rc = Array.isArray
  function zc(v) {
    return v != null && pm(v.length) && !Ac(v)
  }
  function Ww(v) {
    return Bi(v) && zc(v)
  }
  var hm = be || Yw
  function Ac(v) {
    if (!qn(v)) return !1
    var k = Ds(v)
    return k == p || k == b || k == u || k == g
  }
  function pm(v) {
    return typeof v == 'number' && v > -1 && v % 1 == 0 && v <= a
  }
  function qn(v) {
    var k = typeof v
    return v != null && (k == 'object' || k == 'function')
  }
  function Bi(v) {
    return v != null && typeof v == 'object'
  }
  function Uw(v) {
    if (!Bi(v) || Ds(v) != h) return !1
    var k = I(v)
    if (k === null) return !0
    var P = er.call(k, 'constructor') && k.constructor
    return typeof P == 'function' && P instanceof P && Vr.call(P) == xc
  }
  var mm = fn ? zi(fn) : Sw
  function Hw(v) {
    return $w(v, gm(v))
  }
  function gm(v) {
    return zc(v) ? gw(v, !0) : xw(v)
  }
  var Gw = Rw(function (v, k, P, B) {
    cm(v, k, P, B)
  })
  function Kw(v) {
    return function () {
      return v
    }
  }
  function ym(v) {
    return v
  }
  function Yw() {
    return !1
  }
  e.exports = Gw
})(B_, su)
const lr = su
var F_ = (e) => /!(important)?$/.test(e),
  I0 = (e) => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  I_ = (e, t) => (r) => {
    const n = String(t),
      o = F_(n),
      i = I0(n),
      a = e ? `${e}.${i}` : i
    let s = yt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t
    return (s = I0(s)), o ? `${s} !important` : s
  }
function _p(e) {
  const { scale: t, transform: r, compose: n } = e
  return (i, a) => {
    var s
    const l = I_(t, i)(a)
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l
    return n && (u = n(u, a)), u
  }
}
var nl =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t)
function rr(e, t) {
  return (r) => {
    const n = { property: r, scale: e }
    return (n.transform = _p({ scale: e, transform: t })), n
  }
}
var O_ =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === 'rtl' ? e : t
function V_(e) {
  const { property: t, scale: r, transform: n } = e
  return { scale: r, property: O_(t), transform: r ? _p({ scale: r, compose: n }) : n }
}
var Bb = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
]
function N_() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...Bb,
  ].join(' ')
}
function j_() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...Bb].join(
    ' '
  )
}
var W_ = {
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
  U_ = {
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
function H_(e) {
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
var G_ = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  If = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  K_ = new Set(Object.values(If)),
  Of = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  Y_ = (e) => e.trim()
function Q_(e, t) {
  if (e == null || Of.has(e)) return e
  if (!(Vf(e) || Of.has(e))) return `url('${e}')`
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2]
  if (!i || !a) return e
  const s = i.includes('-gradient') ? i : `${i}-gradient`,
    [l, ...u] = a.split(',').map(Y_).filter(Boolean)
  if ((u == null ? void 0 : u.length) === 0) return e
  const c = l in If ? If[l] : l
  u.unshift(c)
  const d = u.map((f) => {
    if (K_.has(f)) return f
    const p = f.indexOf(' '),
      [b, S] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      y = Vf(S) ? S : S && S.split(' '),
      m = `colors.${b}`,
      h = m in t.__cssMap ? t.__cssMap[m].varRef : b
    return y ? [h, ...(Array.isArray(y) ? y : [y])].join(' ') : h
  })
  return `${s}(${d.join(', ')})`
}
var Vf = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
  X_ = (e, t) => Q_(e, t ?? {})
function q_(e) {
  return /^var\(--.+\)$/.test(e)
}
var Z_ = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
  },
  Cr = (e) => (t) => `${e}(${t})`,
  le = {
    filter(e) {
      return e !== 'auto' ? e : W_
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : U_
    },
    ring(e) {
      return H_(le.px(e))
    },
    bgClip(e) {
      return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
    },
    transform(e) {
      return e === 'auto' ? N_() : e === 'auto-gpu' ? j_() : e
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e
    },
    px(e) {
      if (e == null) return e
      const { unitless: t } = Z_(e)
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
      if (q_(e) || e == null) return e
      const t = typeof e == 'string' && !e.endsWith('deg')
      return typeof e == 'number' || t ? `${e}deg` : e
    },
    gradient: X_,
    blur: Cr('blur'),
    opacity: Cr('opacity'),
    brightness: Cr('brightness'),
    contrast: Cr('contrast'),
    dropShadow: Cr('drop-shadow'),
    grayscale: Cr('grayscale'),
    hueRotate: Cr('hue-rotate'),
    invert: Cr('invert'),
    saturate: Cr('saturate'),
    sepia: Cr('sepia'),
    bgImage(e) {
      return e == null || Vf(e) || Of.has(e) ? e : `url(${e})`
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none'
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e }
    },
    flexDirection(e) {
      var t
      const { space: r, divide: n } = (t = G_[e]) != null ? t : {},
        o = { flexDirection: e }
      return r && (o[r] = 1), n && (o[n] = 1), o
    },
  },
  C = {
    borderWidths: rr('borderWidths'),
    borderStyles: rr('borderStyles'),
    colors: rr('colors'),
    borders: rr('borders'),
    gradients: rr('gradients', le.gradient),
    radii: rr('radii', le.px),
    space: rr('space', nl(le.vh, le.px)),
    spaceT: rr('space', nl(le.vh, le.px)),
    degreeT(e) {
      return { property: e, transform: le.degree }
    },
    prop(e, t, r) {
      return { property: e, scale: t, ...(t && { transform: _p({ scale: t, transform: r }) }) }
    },
    propT(e, t) {
      return { property: e, transform: t }
    },
    sizes: rr('sizes', nl(le.vh, le.px)),
    sizesT: rr('sizes', nl(le.vh, le.fraction)),
    shadows: rr('shadows'),
    logical: V_,
    blur: rr('blur', le.blur),
  },
  El = {
    background: C.colors('background'),
    backgroundColor: C.colors('backgroundColor'),
    backgroundImage: C.gradients('backgroundImage'),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: le.bgClip },
    bgSize: C.prop('backgroundSize'),
    bgPosition: C.prop('backgroundPosition'),
    bg: C.colors('background'),
    bgColor: C.colors('backgroundColor'),
    bgPos: C.prop('backgroundPosition'),
    bgRepeat: C.prop('backgroundRepeat'),
    bgAttachment: C.prop('backgroundAttachment'),
    bgGradient: C.gradients('backgroundImage'),
    bgClip: { transform: le.bgClip },
  }
Object.assign(El, { bgImage: El.backgroundImage, bgImg: El.backgroundImage })
var de = {
  border: C.borders('border'),
  borderWidth: C.borderWidths('borderWidth'),
  borderStyle: C.borderStyles('borderStyle'),
  borderColor: C.colors('borderColor'),
  borderRadius: C.radii('borderRadius'),
  borderTop: C.borders('borderTop'),
  borderBlockStart: C.borders('borderBlockStart'),
  borderTopLeftRadius: C.radii('borderTopLeftRadius'),
  borderStartStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: C.radii('borderTopRightRadius'),
  borderStartEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: C.borders('borderRight'),
  borderInlineEnd: C.borders('borderInlineEnd'),
  borderBottom: C.borders('borderBottom'),
  borderBlockEnd: C.borders('borderBlockEnd'),
  borderBottomLeftRadius: C.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: C.radii('borderBottomRightRadius'),
  borderLeft: C.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: C.borders(['borderLeft', 'borderRight']),
  borderInline: C.borders('borderInline'),
  borderY: C.borders(['borderTop', 'borderBottom']),
  borderBlock: C.borders('borderBlock'),
  borderTopWidth: C.borderWidths('borderTopWidth'),
  borderBlockStartWidth: C.borderWidths('borderBlockStartWidth'),
  borderTopColor: C.colors('borderTopColor'),
  borderBlockStartColor: C.colors('borderBlockStartColor'),
  borderTopStyle: C.borderStyles('borderTopStyle'),
  borderBlockStartStyle: C.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: C.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: C.borderWidths('borderBlockEndWidth'),
  borderBottomColor: C.colors('borderBottomColor'),
  borderBlockEndColor: C.colors('borderBlockEndColor'),
  borderBottomStyle: C.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: C.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: C.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: C.borderWidths('borderInlineStartWidth'),
  borderLeftColor: C.colors('borderLeftColor'),
  borderInlineStartColor: C.colors('borderInlineStartColor'),
  borderLeftStyle: C.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: C.borderStyles('borderInlineStartStyle'),
  borderRightWidth: C.borderWidths('borderRightWidth'),
  borderInlineEndWidth: C.borderWidths('borderInlineEndWidth'),
  borderRightColor: C.colors('borderRightColor'),
  borderInlineEndColor: C.colors('borderInlineEndColor'),
  borderRightStyle: C.borderStyles('borderRightStyle'),
  borderInlineEndStyle: C.borderStyles('borderInlineEndStyle'),
  borderTopRadius: C.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: C.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: C.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: C.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
}
Object.assign(de, {
  rounded: de.borderRadius,
  roundedTop: de.borderTopRadius,
  roundedTopLeft: de.borderTopLeftRadius,
  roundedTopRight: de.borderTopRightRadius,
  roundedTopStart: de.borderStartStartRadius,
  roundedTopEnd: de.borderStartEndRadius,
  roundedBottom: de.borderBottomRadius,
  roundedBottomLeft: de.borderBottomLeftRadius,
  roundedBottomRight: de.borderBottomRightRadius,
  roundedBottomStart: de.borderEndStartRadius,
  roundedBottomEnd: de.borderEndEndRadius,
  roundedLeft: de.borderLeftRadius,
  roundedRight: de.borderRightRadius,
  roundedStart: de.borderInlineStartRadius,
  roundedEnd: de.borderInlineEndRadius,
  borderStart: de.borderInlineStart,
  borderEnd: de.borderInlineEnd,
  borderTopStartRadius: de.borderStartStartRadius,
  borderTopEndRadius: de.borderStartEndRadius,
  borderBottomStartRadius: de.borderEndStartRadius,
  borderBottomEndRadius: de.borderEndEndRadius,
  borderStartRadius: de.borderInlineStartRadius,
  borderEndRadius: de.borderInlineEndRadius,
  borderStartWidth: de.borderInlineStartWidth,
  borderEndWidth: de.borderInlineEndWidth,
  borderStartColor: de.borderInlineStartColor,
  borderEndColor: de.borderInlineEndColor,
  borderStartStyle: de.borderInlineStartStyle,
  borderEndStyle: de.borderInlineEndStyle,
})
var J_ = {
    color: C.colors('color'),
    textColor: C.colors('color'),
    fill: C.colors('fill'),
    stroke: C.colors('stroke'),
  },
  Nf = {
    boxShadow: C.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: C.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: C.prop('backgroundBlendMode'),
    opacity: !0,
  }
Object.assign(Nf, { shadow: Nf.boxShadow })
var eP = {
    filter: { transform: le.filter },
    blur: C.blur('--chakra-blur'),
    brightness: C.propT('--chakra-brightness', le.brightness),
    contrast: C.propT('--chakra-contrast', le.contrast),
    hueRotate: C.degreeT('--chakra-hue-rotate'),
    invert: C.propT('--chakra-invert', le.invert),
    saturate: C.propT('--chakra-saturate', le.saturate),
    dropShadow: C.propT('--chakra-drop-shadow', le.dropShadow),
    backdropFilter: { transform: le.backdropFilter },
    backdropBlur: C.blur('--chakra-backdrop-blur'),
    backdropBrightness: C.propT('--chakra-backdrop-brightness', le.brightness),
    backdropContrast: C.propT('--chakra-backdrop-contrast', le.contrast),
    backdropHueRotate: C.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: C.propT('--chakra-backdrop-invert', le.invert),
    backdropSaturate: C.propT('--chakra-backdrop-saturate', le.saturate),
  },
  lu = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: le.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space('gap'),
    rowGap: C.space('rowGap'),
    columnGap: C.space('columnGap'),
  }
Object.assign(lu, { flexDir: lu.flexDirection })
var Fb = {
    gridGap: C.space('gridGap'),
    gridColumnGap: C.space('gridColumnGap'),
    gridRowGap: C.space('gridRowGap'),
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
  tP = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: le.outline },
    outlineOffset: !0,
    outlineColor: C.colors('outlineColor'),
  },
  or = {
    width: C.sizesT('width'),
    inlineSize: C.sizesT('inlineSize'),
    height: C.sizes('height'),
    blockSize: C.sizes('blockSize'),
    boxSize: C.sizes(['width', 'height']),
    minWidth: C.sizes('minWidth'),
    minInlineSize: C.sizes('minInlineSize'),
    minHeight: C.sizes('minHeight'),
    minBlockSize: C.sizes('minBlockSize'),
    maxWidth: C.sizes('maxWidth'),
    maxInlineSize: C.sizes('maxInlineSize'),
    maxHeight: C.sizes('maxHeight'),
    maxBlockSize: C.sizes('maxBlockSize'),
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
    float: C.propT('float', le.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  }
Object.assign(or, {
  w: or.width,
  h: or.height,
  minW: or.minWidth,
  maxW: or.maxWidth,
  minH: or.minHeight,
  maxH: or.maxHeight,
  overscroll: or.overscrollBehavior,
  overscrollX: or.overscrollBehaviorX,
  overscrollY: or.overscrollBehaviorY,
})
var rP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: C.prop('listStyleImage'),
}
function nP(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var oP = (e) => {
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
  iP = oP(nP),
  aP = {
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
  sP = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  ld = (e, t, r) => {
    const n = {},
      o = iP(e, t, {})
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i])
    return n
  },
  lP = {
    srOnly: {
      transform(e) {
        return e === !0 ? aP : e === 'focusable' ? sP : {}
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, r) => ld(t, `layerStyles.${e}`, r) },
    textStyle: { processResult: !0, transform: (e, t, r) => ld(t, `textStyles.${e}`, r) },
    apply: { processResult: !0, transform: (e, t, r) => ld(t, e, r) },
  },
  ya = {
    position: !0,
    pos: C.prop('position'),
    zIndex: C.prop('zIndex', 'zIndices'),
    inset: C.spaceT('inset'),
    insetX: C.spaceT(['left', 'right']),
    insetInline: C.spaceT('insetInline'),
    insetY: C.spaceT(['top', 'bottom']),
    insetBlock: C.spaceT('insetBlock'),
    top: C.spaceT('top'),
    insetBlockStart: C.spaceT('insetBlockStart'),
    bottom: C.spaceT('bottom'),
    insetBlockEnd: C.spaceT('insetBlockEnd'),
    left: C.spaceT('left'),
    insetInlineStart: C.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
    right: C.spaceT('right'),
    insetInlineEnd: C.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } }),
  }
Object.assign(ya, { insetStart: ya.insetInlineStart, insetEnd: ya.insetInlineEnd })
var uP = {
    ring: { transform: le.ring },
    ringColor: C.colors('--chakra-ring-color'),
    ringOffset: C.prop('--chakra-ring-offset-width'),
    ringOffsetColor: C.colors('--chakra-ring-offset-color'),
    ringInset: C.prop('--chakra-ring-inset'),
  },
  Ce = {
    margin: C.spaceT('margin'),
    marginTop: C.spaceT('marginTop'),
    marginBlockStart: C.spaceT('marginBlockStart'),
    marginRight: C.spaceT('marginRight'),
    marginInlineEnd: C.spaceT('marginInlineEnd'),
    marginBottom: C.spaceT('marginBottom'),
    marginBlockEnd: C.spaceT('marginBlockEnd'),
    marginLeft: C.spaceT('marginLeft'),
    marginInlineStart: C.spaceT('marginInlineStart'),
    marginX: C.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: C.spaceT('marginInline'),
    marginY: C.spaceT(['marginTop', 'marginBottom']),
    marginBlock: C.spaceT('marginBlock'),
    padding: C.space('padding'),
    paddingTop: C.space('paddingTop'),
    paddingBlockStart: C.space('paddingBlockStart'),
    paddingRight: C.space('paddingRight'),
    paddingBottom: C.space('paddingBottom'),
    paddingBlockEnd: C.space('paddingBlockEnd'),
    paddingLeft: C.space('paddingLeft'),
    paddingInlineStart: C.space('paddingInlineStart'),
    paddingInlineEnd: C.space('paddingInlineEnd'),
    paddingX: C.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: C.space('paddingInline'),
    paddingY: C.space(['paddingTop', 'paddingBottom']),
    paddingBlock: C.space('paddingBlock'),
  }
Object.assign(Ce, {
  m: Ce.margin,
  mt: Ce.marginTop,
  mr: Ce.marginRight,
  me: Ce.marginInlineEnd,
  marginEnd: Ce.marginInlineEnd,
  mb: Ce.marginBottom,
  ml: Ce.marginLeft,
  ms: Ce.marginInlineStart,
  marginStart: Ce.marginInlineStart,
  mx: Ce.marginX,
  my: Ce.marginY,
  p: Ce.padding,
  pt: Ce.paddingTop,
  py: Ce.paddingY,
  px: Ce.paddingX,
  pb: Ce.paddingBottom,
  pl: Ce.paddingLeft,
  ps: Ce.paddingInlineStart,
  paddingStart: Ce.paddingInlineStart,
  pr: Ce.paddingRight,
  pe: Ce.paddingInlineEnd,
  paddingEnd: Ce.paddingInlineEnd,
})
var cP = {
    textDecorationColor: C.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows('textShadow'),
  },
  dP = {
    clipPath: !0,
    transform: C.propT('transform', le.transform),
    transformOrigin: !0,
    translateX: C.spaceT('--chakra-translate-x'),
    translateY: C.spaceT('--chakra-translate-y'),
    skewX: C.degreeT('--chakra-skew-x'),
    skewY: C.degreeT('--chakra-skew-y'),
    scaleX: C.prop('--chakra-scale-x'),
    scaleY: C.prop('--chakra-scale-y'),
    scale: C.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: C.degreeT('--chakra-rotate'),
  },
  fP = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop('transitionDuration', 'transition.duration'),
    transitionProperty: C.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: C.prop('transitionTimingFunction', 'transition.easing'),
  },
  hP = {
    fontFamily: C.prop('fontFamily', 'fonts'),
    fontSize: C.prop('fontSize', 'fontSizes', le.px),
    fontWeight: C.prop('fontWeight', 'fontWeights'),
    lineHeight: C.prop('lineHeight', 'lineHeights'),
    letterSpacing: C.prop('letterSpacing', 'letterSpacings'),
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
  pP = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT('scrollMargin'),
    scrollMarginTop: C.spaceT('scrollMarginTop'),
    scrollMarginBottom: C.spaceT('scrollMarginBottom'),
    scrollMarginLeft: C.spaceT('scrollMarginLeft'),
    scrollMarginRight: C.spaceT('scrollMarginRight'),
    scrollMarginX: C.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: C.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: C.spaceT('scrollPadding'),
    scrollPaddingTop: C.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: C.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: C.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: C.spaceT('scrollPaddingRight'),
    scrollPaddingX: C.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: C.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  }
function Ib(e) {
  return yt(e) && e.reference ? e.reference : String(e)
}
var rc = (e, ...t) => t.map(Ib).join(` ${e} `).replace(/calc/g, ''),
  O0 = (...e) => `calc(${rc('+', ...e)})`,
  V0 = (...e) => `calc(${rc('-', ...e)})`,
  jf = (...e) => `calc(${rc('*', ...e)})`,
  N0 = (...e) => `calc(${rc('/', ...e)})`,
  j0 = (e) => {
    const t = Ib(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : jf(t, -1)
  },
  no = Object.assign(
    (e) => ({
      add: (...t) => no(O0(e, ...t)),
      subtract: (...t) => no(V0(e, ...t)),
      multiply: (...t) => no(jf(e, ...t)),
      divide: (...t) => no(N0(e, ...t)),
      negate: () => no(j0(e)),
      toString: () => e.toString(),
    }),
    { add: O0, subtract: V0, multiply: jf, divide: N0, negate: j0 }
  )
function mP(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function gP(e) {
  const t = mP(e.toString())
  return vP(yP(t))
}
function yP(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e
}
function vP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function bP(e, t = '') {
  return [t, e].filter(Boolean).join('-')
}
function SP(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`
}
function xP(e, t = '') {
  return gP(`--${bP(e, t)}`)
}
function J(e, t, r) {
  const n = xP(e, r)
  return { variable: n, reference: SP(n, t) }
}
function wP(e) {
  const t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function kP(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '')
  return { unitless: !r, value: t, unit: r }
}
function Wf(e) {
  if (e == null) return e
  const { unitless: t } = kP(e)
  return t || typeof e == 'number' ? `${e}px` : e
}
var Ob = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Pp = (e) => Object.fromEntries(Object.entries(e).sort(Ob))
function W0(e) {
  const t = Pp(e)
  return Object.assign(Object.values(t), t)
}
function CP(e) {
  const t = Object.keys(Pp(e))
  return new Set(t)
}
function U0(e) {
  var t
  if (!e) return e
  e = (t = Wf(e)) != null ? t : e
  const r = -0.02
  return typeof e == 'number'
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`)
}
function na(e, t) {
  const r = ['@media screen']
  return (
    e && r.push('and', `(min-width: ${Wf(e)})`),
    t && r.push('and', `(max-width: ${Wf(t)})`),
    r.join(' ')
  )
}
function _P(e) {
  var t
  if (!e) return null
  e.base = (t = e.base) != null ? t : '0px'
  const r = W0(e),
    n = Object.entries(e)
      .sort(Ob)
      .map(([a, s], l, u) => {
        var c
        let [, d] = (c = u[l + 1]) != null ? c : []
        return (
          (d = parseFloat(d) > 0 ? U0(d) : void 0),
          {
            _minW: U0(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: na(null, d),
            minWQuery: na(s),
            minMaxQuery: na(s, d),
          }
        )
      }),
    o = CP(e),
    i = Array.from(o.values())
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a)
      return s.length > 0 && s.every((l) => o.has(l))
    },
    asObject: Pp(e),
    asArray: W0(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a)
    },
    media: [null, ...r.map((a) => na(a)).slice(1)],
    toArrayValue(a) {
      if (!yt(a)) throw new Error('toArrayValue: value must be an object')
      const s = i.map((l) => {
        var u
        return (u = a[l]) != null ? u : null
      })
      for (; wP(s) === null; ) s.pop()
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
var nt = {
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
  gn = (e) => Vb((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  jr = (e) => Vb((t) => e(t, '~ &'), '[data-peer]', '.peer'),
  Vb = (e, ...t) => t.map(e).join(', '),
  nc = {
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
    _groupHover: gn(nt.hover),
    _peerHover: jr(nt.hover),
    _groupFocus: gn(nt.focus),
    _peerFocus: jr(nt.focus),
    _groupFocusVisible: gn(nt.focusVisible),
    _peerFocusVisible: jr(nt.focusVisible),
    _groupActive: gn(nt.active),
    _peerActive: jr(nt.active),
    _groupDisabled: gn(nt.disabled),
    _peerDisabled: jr(nt.disabled),
    _groupInvalid: gn(nt.invalid),
    _peerInvalid: jr(nt.invalid),
    _groupChecked: gn(nt.checked),
    _peerChecked: jr(nt.checked),
    _groupFocusWithin: gn(nt.focusWithin),
    _peerFocusWithin: jr(nt.focusWithin),
    _peerPlaceholderShown: jr(nt.placeholderShown),
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
  PP = Object.keys(nc)
function H0(e, t) {
  return J(String(e).replace(/\./g, '-'), void 0, t)
}
function TP(e, t) {
  let r = {}
  const n = {}
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = H0(o, t == null ? void 0 : t.cssVarPrefix)
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [p, ...b] = f,
          S = `${p}.-${b.join('.')}`,
          y = no.negate(s),
          m = no.negate(u)
        n[S] = { value: y, var: l, varRef: m }
      }
      ;(r[l] = s), (n[o] = { value: s, var: l, varRef: u })
      continue
    }
    const c = (f) => {
        const b = [String(o).split('.')[0], f].join('.')
        if (!e[b]) return f
        const { reference: y } = H0(b, t == null ? void 0 : t.cssVarPrefix)
        return y
      },
      d = yt(s) ? s : { default: s }
    ;(r = lr(
      r,
      Object.entries(d).reduce((f, [p, b]) => {
        var S, y
        const m = c(b)
        if (p === 'default') return (f[l] = m), f
        const h = (y = (S = nc) == null ? void 0 : S[p]) != null ? y : p
        return (f[h] = { [l]: m }), f
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u })
  }
  return { cssVars: r, cssMap: n }
}
function EP(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
function $P(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
var RP = [
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
function zP(e) {
  return $P(e, RP)
}
function AP(e) {
  return e.semanticTokens
}
function MP(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e
  return o
}
function DP({ tokens: e, semanticTokens: t }) {
  var r, n
  const o = Object.entries((r = Uf(e)) != null ? r : {}).map(([a, s]) => [
      a,
      { isSemantic: !1, value: s },
    ]),
    i = Object.entries((n = Uf(t, 1)) != null ? n : {}).map(([a, s]) => [
      a,
      { isSemantic: !0, value: s },
    ])
  return Object.fromEntries([...o, ...i])
}
function Uf(e, t = 1 / 0) {
  return (!yt(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          yt(o) || Array.isArray(o)
            ? Object.entries(Uf(o, t - 1)).forEach(([i, a]) => {
                r[`${n}.${i}`] = a
              })
            : (r[n] = o),
          r
        ),
        {}
      )
}
function LP(e) {
  var t
  const r = MP(e),
    n = zP(r),
    o = AP(r),
    i = DP({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = TP(i, { cssVarPrefix: a })
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
      __breakpoints: _P(r.breakpoints),
    }),
    r
  )
}
var Tp = lr({}, El, de, J_, lu, or, eP, uP, tP, Fb, lP, ya, Nf, Ce, pP, hP, cP, dP, rP, fP)
Object.assign({}, Ce, or, lu, Fb, ya)
var BP = [...Object.keys(Tp), ...PP],
  FP = { ...Tp, ...nc },
  IP = (e) => e in FP,
  OP = (e) => (t) => {
    if (!t.__breakpoints) return e
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {}
    for (const a in e) {
      let s = En(e[a], t)
      if (s == null) continue
      if (((s = yt(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
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
function VP(e) {
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
function NP(e) {
  return /^var\(--.+\)$/.test(e)
}
var jP = (e, t) => e.startsWith('--') && typeof t == 'string' && !NP(t),
  WP = (e, t) => {
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
      [a, s] = VP(t)
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t
  }
function UP(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u
      const c = En(i, n),
        d = OP(c)(n)
      let f = {}
      for (let p in d) {
        const b = d[p]
        let S = En(b, n)
        p in r && (p = r[p]), jP(p, S) && (S = WP(n, S))
        let y = t[p]
        if ((y === !0 && (y = { property: p }), yt(S))) {
          ;(f[p] = (s = f[p]) != null ? s : {}), (f[p] = lr({}, f[p], o(S, !0)))
          continue
        }
        let m =
          (u = (l = y == null ? void 0 : y.transform) == null ? void 0 : l.call(y, S, n, c)) != null
            ? u
            : S
        m = y != null && y.processResult ? o(m, !0) : m
        const h = En(y == null ? void 0 : y.property, n)
        if (!a && y != null && y.static) {
          const g = En(y.static, n)
          f = lr({}, f, g)
        }
        if (h && Array.isArray(h)) {
          for (const g of h) f[g] = m
          continue
        }
        if (h) {
          h === '&' && yt(m) ? (f = lr({}, f, m)) : (f[h] = m)
          continue
        }
        if (yt(m)) {
          f = lr({}, f, m)
          continue
        }
        f[p] = m
      }
      return f
    }
  return o
}
var Nb = (e) => (t) => UP({ theme: t, pseudos: nc, configs: Tp })(e)
function Pe(e) {
  return {
    definePartsStyle(t) {
      return t
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t }
    },
  }
}
function HP(e, t) {
  if (Array.isArray(e)) return e
  if (yt(e)) return t(e)
  if (e != null) return [e]
}
function GP(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r
  return -1
}
function KP(e) {
  const t = e.__breakpoints
  return function (n, o, i, a) {
    var s, l
    if (!t) return
    const u = {},
      c = HP(i, t.toArrayValue)
    if (!c) return u
    const d = c.length,
      f = d === 1,
      p = !!n.parts
    for (let b = 0; b < d; b++) {
      const S = t.details[b],
        y = t.details[GP(c, b)],
        m = na(S.minW, y == null ? void 0 : y._minW),
        h = En((s = n[o]) == null ? void 0 : s[c[b]], a)
      if (h) {
        if (p) {
          ;(l = n.parts) == null ||
            l.forEach((g) => {
              lr(u, { [g]: f ? h[g] : { [m]: h[g] } })
            })
          continue
        }
        if (!p) {
          f ? lr(u, h) : (u[m] = h)
          continue
        }
        u[m] = h
      }
    }
    return u
  }
}
function YP(e) {
  return (t) => {
    var r
    const { variant: n, size: o, theme: i } = t,
      a = KP(i)
    return lr(
      {},
      En((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', n, t)
    )
  }
}
function Ti(e) {
  return EP(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var QP = [
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
function XP(e) {
  return yt(e) ? QP.every((t) => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var qP = {
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
  ZP = qP,
  JP = { 'base': '0em', 'sm': '30em', 'md': '48em', 'lg': '62em', 'xl': '80em', '2xl': '96em' },
  eT = JP,
  tT = {
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
  rT = tT,
  nT = {
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
  oT = nT,
  iT = {
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
  aT = iT,
  sT = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  lT = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  uT = {
    'ultra-fast': '50ms',
    'faster': '100ms',
    'fast': '150ms',
    'normal': '200ms',
    'slow': '300ms',
    'slower': '400ms',
    'ultra-slow': '500ms',
  },
  cT = { property: sT, easing: lT, duration: uT },
  dT = cT,
  fT = {
    'none': 0,
    'sm': '4px',
    'base': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  hT = fT,
  pT = {
    'none': 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  mT = pT,
  gT = {
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
  jb = gT,
  Wb = {
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
  yT = {
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
  vT = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  bT = { ...Wb, ...yT, container: vT },
  Ub = bT,
  ST = {
    breakpoints: eT,
    zIndices: ZP,
    radii: oT,
    blur: hT,
    colors: rT,
    ...jb,
    sizes: Ub,
    shadows: aT,
    space: Wb,
    borders: mT,
    transition: dT,
  }
function me(e, t = {}) {
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
    return me(e, t)
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d))
    return me(e, t)
  }
  function a() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]))
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]))
  }
  function l(c) {
    const p = `chakra-${(['container', 'root'].includes(c ?? '') ? [e] : [e, c])
      .filter(Boolean)
      .join('__')}`
    return { className: p, selector: `.${p}`, toString: () => c }
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
var xT = me('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
  wT = me('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
  kT = me('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
  CT = me('breadcrumb').parts('link', 'item', 'container').extend('separator')
me('button').parts()
var _T = me('checkbox').parts('control', 'icon', 'container').extend('label')
me('progress').parts('track', 'filledTrack').extend('label')
var PT = me('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  TT = me('editable').parts('preview', 'input', 'textarea'),
  ET = me('form').parts('container', 'requiredIndicator', 'helperText'),
  $T = me('formError').parts('text', 'icon'),
  RT = me('input').parts('addon', 'field', 'element'),
  zT = me('list').parts('container', 'item', 'icon'),
  AT = me('menu').parts('button', 'list', 'item').extend('groupTitle', 'command', 'divider'),
  MT = me('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  DT = me('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
me('pininput').parts('field')
var LT = me('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  BT = me('progress').parts('label', 'filledTrack', 'track'),
  FT = me('radio').parts('container', 'control', 'label'),
  IT = me('select').parts('field', 'icon'),
  OT = me('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  VT = me('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  NT = me('switch').parts('container', 'track', 'thumb'),
  jT = me('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  WT = me('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  UT = me('tag').parts('container', 'label', 'closeButton'),
  HT = me('card').parts('container', 'header', 'body', 'footer')
function Ar(e, t, r) {
  return Math.min(Math.max(e, r), t)
}
class GT extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`)
  }
}
var oa = GT
function oc(e) {
  if (typeof e != 'string') throw new oa(e)
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
  let t = e.trim()
  t = eE.test(e) ? QT(e) : e
  const r = XT.exec(t)
  if (r) {
    const a = Array.from(r).slice(1)
    return [
      ...a.slice(0, 3).map((s) => parseInt(rs(s, 2), 16)),
      parseInt(rs(a[3] || 'f', 2), 16) / 255,
    ]
  }
  const n = qT.exec(t)
  if (n) {
    const a = Array.from(n).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
  }
  const o = ZT.exec(t)
  if (o) {
    const a = Array.from(o).slice(1)
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || '1')]
  }
  const i = JT.exec(t)
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
    if (Ar(0, 100, s) !== s) throw new oa(e)
    if (Ar(0, 100, l) !== l) throw new oa(e)
    return [...tE(a, s, l), Number.isNaN(u) ? 1 : u]
  }
  throw new oa(e)
}
function KT(e) {
  let t = 5381,
    r = e.length
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r)
  return (t >>> 0) % 2341
}
const G0 = (e) => parseInt(e.replace(/_/g, ''), 36),
  YT =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = G0(t.substring(0, 3)),
          n = G0(t.substring(3)).toString(16)
        let o = ''
        for (let i = 0; i < 6 - n.length; i++) o += '0'
        return (e[r] = `${o}${n}`), e
      }, {})
function QT(e) {
  const t = e.toLowerCase().trim(),
    r = YT[KT(t)]
  if (!r) throw new oa(e)
  return `#${r}`
}
const rs = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  XT = new RegExp(`^#${rs('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  qT = new RegExp(`^#${rs('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  ZT = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${rs(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  JT = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  eE = /^[a-z]+$/i,
  K0 = (e) => Math.round(e * 255),
  tE = (e, t, r) => {
    let n = r / 100
    if (t === 0) return [n, n, n].map(K0)
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
      p = u + c
    return [d, f, p].map(K0)
  }
function rE(e) {
  const [t, r, n, o] = oc(e).map((d, f) => (f === 3 ? d : d / 255)),
    i = Math.max(t, r, n),
    a = Math.min(t, r, n),
    s = (i + a) / 2
  if (i === a) return [0, 0, s, o]
  const l = i - a,
    u = s > 0.5 ? l / (2 - i - a) : l / (i + a)
  return [
    60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4),
    u,
    s,
    o,
  ]
}
function nE(e, t, r, n) {
  return `hsla(${(e % 360).toFixed()}, ${Ar(0, 100, t * 100).toFixed()}%, ${Ar(
    0,
    100,
    r * 100
  ).toFixed()}%, ${parseFloat(Ar(0, 1, n).toFixed(3))})`
}
function oE(e, t) {
  const [r, n, o, i] = rE(e)
  return nE(r, n, o - t, i)
}
function iE(e, t, r, n) {
  return `rgba(${Ar(0, 255, e).toFixed()}, ${Ar(0, 255, t).toFixed()}, ${Ar(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(Ar(0, 1, n).toFixed(3))})`
}
function Hb(e, t) {
  const [r, n, o, i] = oc(e)
  return iE(r, n, o, i - t)
}
function Ep(e) {
  const [t, r, n, o] = oc(e)
  let i = (a) => {
    const s = Ar(0, 255, a).toString(16)
    return s.length === 1 ? `0${s}` : s
  }
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function aE(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var sE = (e) => Object.keys(e).length === 0,
  wt = (e, t, r) => {
    const n = aE(e, `colors.${t}`, t)
    try {
      return Ep(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  lE = (e) => {
    const [t, r, n] = oc(e)
    return (t * 299 + r * 587 + n * 114) / 1e3
  },
  uE = (e) => (t) => {
    const r = wt(t, e)
    return lE(r) < 128 ? 'dark' : 'light'
  },
  cE = (e) => (t) => uE(e)(t) === 'dark',
  bi = (e, t) => (r) => {
    const n = wt(r, e)
    return Hb(n, 1 - t)
  }
function Y0(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
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
var dE = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`
function fE(e) {
  const t = dE()
  return !e || sE(e)
    ? t
    : e.string && e.colors
    ? pE(e.string, e.colors)
    : e.string && !e.colors
    ? hE(e.string)
    : e.colors && !e.string
    ? mE(e.colors)
    : t
}
function hE(e) {
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
function pE(e, t) {
  let r = 0
  if (e.length === 0) return t[0]
  for (let n = 0; n < e.length; n += 1) (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
  return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function mE(e) {
  return e[Math.floor(Math.random() * e.length)]
}
function G(e, t) {
  return (r) => (r.colorMode === 'dark' ? t : e)
}
function $p(e) {
  const { orientation: t, vertical: r, horizontal: n } = e
  return t ? (t === 'vertical' ? r : n) : {}
}
function Gb(e) {
  return yt(e) && e.reference ? e.reference : String(e)
}
var ic = (e, ...t) => t.map(Gb).join(` ${e} `).replace(/calc/g, ''),
  Q0 = (...e) => `calc(${ic('+', ...e)})`,
  X0 = (...e) => `calc(${ic('-', ...e)})`,
  Hf = (...e) => `calc(${ic('*', ...e)})`,
  q0 = (...e) => `calc(${ic('/', ...e)})`,
  Z0 = (e) => {
    const t = Gb(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : Hf(t, -1)
  },
  Gr = Object.assign(
    (e) => ({
      add: (...t) => Gr(Q0(e, ...t)),
      subtract: (...t) => Gr(X0(e, ...t)),
      multiply: (...t) => Gr(Hf(e, ...t)),
      divide: (...t) => Gr(q0(e, ...t)),
      negate: () => Gr(Z0(e)),
      toString: () => e.toString(),
    }),
    { add: Q0, subtract: X0, multiply: Hf, divide: q0, negate: Z0 }
  )
function gE(e) {
  return !Number.isInteger(parseFloat(e.toString()))
}
function yE(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function Kb(e) {
  const t = yE(e.toString())
  return t.includes('\\.') ? e : gE(e) ? t.replace('.', '\\.') : e
}
function vE(e, t = '') {
  return [t, Kb(e)].filter(Boolean).join('-')
}
function bE(e, t) {
  return `var(${Kb(e)}${t ? `, ${t}` : ''})`
}
function SE(e, t = '') {
  return `--${vE(e, t)}`
}
function qe(e, t) {
  const r = SE(e, t == null ? void 0 : t.prefix)
  return { variable: r, reference: bE(r, xE(t == null ? void 0 : t.fallback)) }
}
function xE(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: wE, definePartsStyle: $l } = Pe(NT.keys),
  va = qe('switch-track-width'),
  ho = qe('switch-track-height'),
  ud = qe('switch-track-diff'),
  kE = Gr.subtract(va, ho),
  Gf = qe('switch-thumb-x'),
  Ki = qe('switch-bg'),
  CE = (e) => {
    const { colorScheme: t } = e
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [va.reference],
      height: [ho.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Ki.variable]: 'colors.gray.300',
      _dark: { [Ki.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [Ki.variable]: `colors.${t}.500`, _dark: { [Ki.variable]: `colors.${t}.200` } },
      bg: Ki.reference,
    }
  },
  _E = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [ho.reference],
    height: [ho.reference],
    _checked: { transform: `translateX(${Gf.reference})` },
  },
  PE = $l((e) => ({
    container: {
      [ud.variable]: kE,
      [Gf.variable]: ud.reference,
      _rtl: { [Gf.variable]: Gr(ud).negate().toString() },
    },
    track: CE(e),
    thumb: _E,
  })),
  TE = {
    sm: $l({ container: { [va.variable]: '1.375rem', [ho.variable]: 'sizes.3' } }),
    md: $l({ container: { [va.variable]: '1.875rem', [ho.variable]: 'sizes.4' } }),
    lg: $l({ container: { [va.variable]: '2.875rem', [ho.variable]: 'sizes.6' } }),
  },
  EE = wE({ baseStyle: PE, sizes: TE, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: $E, definePartsStyle: ai } = Pe(jT.keys),
  RE = ai({
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
  uu = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  zE = ai((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: G('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...uu,
      },
      td: { borderBottom: '1px', borderColor: G(`${t}.100`, `${t}.700`)(e), ...uu },
      caption: { color: G('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  AE = ai((e) => {
    const { colorScheme: t } = e
    return {
      th: {
        color: G('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...uu,
      },
      td: { borderBottom: '1px', borderColor: G(`${t}.100`, `${t}.700`)(e), ...uu },
      caption: { color: G('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: G(`${t}.100`, `${t}.700`)(e) },
            'td': { background: G(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  ME = { simple: zE, striped: AE, unstyled: {} },
  DE = {
    sm: ai({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: ai({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: ai({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  LE = $E({
    baseStyle: RE,
    variants: ME,
    sizes: DE,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  $t = J('tabs-color'),
  yr = J('tabs-bg'),
  ol = J('tabs-border-color'),
  { defineMultiStyleConfig: BE, definePartsStyle: Br } = Pe(WT.keys),
  FE = (e) => {
    const { orientation: t } = e
    return { display: t === 'vertical' ? 'flex' : 'block' }
  },
  IE = (e) => {
    const { isFitted: t } = e
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    }
  },
  OE = (e) => {
    const { align: t = 'start', orientation: r } = e
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: r === 'vertical' ? 'column' : 'row',
    }
  },
  VE = { p: 4 },
  NE = Br((e) => ({ root: FE(e), tab: IE(e), tablist: OE(e), tabpanel: VE })),
  jE = {
    sm: Br({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: Br({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: Br({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  WE = Br((e) => {
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
          [$t.variable]: `colors.${t}.600`,
          _dark: { [$t.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [yr.variable]: 'colors.gray.200',
          _dark: { [yr.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: $t.reference,
        bg: yr.reference,
      },
    }
  }),
  UE = Br((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [ol.variable]: 'transparent',
        _selected: {
          [$t.variable]: `colors.${t}.600`,
          [ol.variable]: 'colors.white',
          _dark: { [$t.variable]: `colors.${t}.300`, [ol.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: ol.reference,
        },
        color: $t.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  HE = Br((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [yr.variable]: 'colors.gray.50',
        _dark: { [yr.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [yr.variable]: 'colors.white',
          [$t.variable]: `colors.${t}.600`,
          _dark: { [yr.variable]: 'colors.gray.800', [$t.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: $t.reference,
        bg: yr.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  GE = Br((e) => {
    const { colorScheme: t, theme: r } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: wt(r, `${t}.700`), bg: wt(r, `${t}.100`) },
      },
    }
  }),
  KE = Br((e) => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [$t.variable]: 'colors.gray.600',
        _dark: { [$t.variable]: 'inherit' },
        _selected: {
          [$t.variable]: 'colors.white',
          [yr.variable]: `colors.${t}.600`,
          _dark: { [$t.variable]: 'colors.gray.800', [yr.variable]: `colors.${t}.300` },
        },
        color: $t.reference,
        bg: yr.reference,
      },
    }
  }),
  YE = Br({}),
  QE = {
    'line': WE,
    'enclosed': UE,
    'enclosed-colored': HE,
    'soft-rounded': GE,
    'solid-rounded': KE,
    'unstyled': YE,
  },
  XE = BE({
    baseStyle: NE,
    sizes: jE,
    variants: QE,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  ns = J('badge-bg'),
  Fn = J('badge-color'),
  Yb = J('badge-shadow'),
  qE = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: ns.reference,
    color: Fn.reference,
    boxShadow: Yb.reference,
  },
  ZE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = bi(`${t}.500`, 0.6)(r)
    return {
      [ns.variable]: `colors.${t}.500`,
      [Fn.variable]: 'colors.white',
      _dark: { [ns.variable]: n, [Fn.variable]: 'colors.whiteAlpha.800' },
    }
  },
  JE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = bi(`${t}.200`, 0.16)(r)
    return {
      [ns.variable]: `colors.${t}.100`,
      [Fn.variable]: `colors.${t}.800`,
      _dark: { [ns.variable]: n, [Fn.variable]: `colors.${t}.200` },
    }
  },
  e5 = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = bi(`${t}.200`, 0.8)(r)
    return {
      [Fn.variable]: `colors.${t}.500`,
      _dark: { [Fn.variable]: n },
      [Yb.variable]: `inset 0 0 0px 1px ${Fn.reference}`,
    }
  },
  t5 = { solid: ZE, subtle: JE, outline: e5 },
  ba = { baseStyle: qE, variants: t5, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  r5 = J('badge-bg'),
  n5 = J('badge-color'),
  { defineMultiStyleConfig: o5, definePartsStyle: po } = Pe(UT.keys),
  i5 = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    color: n5.reference,
    bg: r5.reference,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' },
  },
  a5 = { lineHeight: 1.2, overflow: 'visible' },
  s5 = {
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
  l5 = po({ container: i5, label: a5, closeButton: s5 }),
  u5 = {
    sm: po({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: po({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: po({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } }),
  },
  c5 = {
    subtle: po((e) => {
      var t
      return { container: (t = ba.variants) == null ? void 0 : t.subtle(e) }
    }),
    solid: po((e) => {
      var t
      return { container: (t = ba.variants) == null ? void 0 : t.solid(e) }
    }),
    outline: po((e) => {
      var t
      return { container: (t = ba.variants) == null ? void 0 : t.outline(e) }
    }),
  },
  d5 = o5({
    variants: c5,
    baseStyle: l5,
    sizes: u5,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: Qr, defineMultiStyleConfig: f5 } = Pe(RT.keys),
  h5 = Qr({
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
  yn = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  p5 = {
    lg: Qr({ field: yn.lg, addon: yn.lg }),
    md: Qr({ field: yn.md, addon: yn.md }),
    sm: Qr({ field: yn.sm, addon: yn.sm }),
    xs: Qr({ field: yn.xs, addon: yn.xs }),
  }
function Rp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e
  return {
    focusBorderColor: t || G('blue.500', 'blue.300')(e),
    errorBorderColor: r || G('red.500', 'red.300')(e),
  }
}
var m5 = Qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Rp(e)
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: G('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: wt(t, n), boxShadow: `0 0 0 1px ${wt(t, n)}` },
        _focusVisible: { zIndex: 1, borderColor: wt(t, r), boxShadow: `0 0 0 1px ${wt(t, r)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: G('inherit', 'whiteAlpha.50')(e),
        bg: G('gray.100', 'whiteAlpha.300')(e),
      },
    }
  }),
  g5 = Qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Rp(e)
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: G('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: G('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: wt(t, n) },
        _focusVisible: { bg: 'transparent', borderColor: wt(t, r) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: G('gray.100', 'whiteAlpha.50')(e),
      },
    }
  }),
  y5 = Qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Rp(e)
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: wt(t, n), boxShadow: `0px 1px 0px 0px ${wt(t, n)}` },
        _focusVisible: { borderColor: wt(t, r), boxShadow: `0px 1px 0px 0px ${wt(t, r)}` },
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
  v5 = Qr({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  b5 = { outline: m5, filled: g5, flushed: y5, unstyled: v5 },
  he = f5({
    baseStyle: h5,
    sizes: p5,
    variants: b5,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  J0,
  S5 = {
    ...((J0 = he.baseStyle) == null ? void 0 : J0.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  eg,
  tg,
  x5 = {
    outline: (e) => {
      var t, r
      return (r = (t = he.variants) == null ? void 0 : t.outline(e).field) != null ? r : {}
    },
    flushed: (e) => {
      var t, r
      return (r = (t = he.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {}
    },
    filled: (e) => {
      var t, r
      return (r = (t = he.variants) == null ? void 0 : t.filled(e).field) != null ? r : {}
    },
    unstyled: (tg = (eg = he.variants) == null ? void 0 : eg.unstyled.field) != null ? tg : {},
  },
  rg,
  ng,
  og,
  ig,
  ag,
  sg,
  lg,
  ug,
  w5 = {
    xs: (ng = (rg = he.sizes) == null ? void 0 : rg.xs.field) != null ? ng : {},
    sm: (ig = (og = he.sizes) == null ? void 0 : og.sm.field) != null ? ig : {},
    md: (sg = (ag = he.sizes) == null ? void 0 : ag.md.field) != null ? sg : {},
    lg: (ug = (lg = he.sizes) == null ? void 0 : lg.lg.field) != null ? ug : {},
  },
  k5 = { baseStyle: S5, sizes: w5, variants: x5, defaultProps: { size: 'md', variant: 'outline' } },
  il = qe('tooltip-bg'),
  cd = qe('tooltip-fg'),
  C5 = qe('popper-arrow-bg'),
  _5 = {
    bg: il.reference,
    color: cd.reference,
    [il.variable]: 'colors.gray.700',
    [cd.variable]: 'colors.whiteAlpha.900',
    _dark: { [il.variable]: 'colors.gray.300', [cd.variable]: 'colors.gray.900' },
    [C5.variable]: il.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  P5 = { baseStyle: _5 },
  { defineMultiStyleConfig: T5, definePartsStyle: ia } = Pe(BT.keys),
  E5 = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = G(Y0(), Y0('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = G(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${wt(r, a)} 50%,
    transparent 100%
  )`
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
  },
  $5 = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  R5 = (e) => ({ bg: G('gray.100', 'whiteAlpha.300')(e) }),
  z5 = (e) => ({ transitionProperty: 'common', transitionDuration: 'slow', ...E5(e) }),
  A5 = ia((e) => ({ label: $5, filledTrack: z5(e), track: R5(e) })),
  M5 = {
    xs: ia({ track: { h: '1' } }),
    sm: ia({ track: { h: '2' } }),
    md: ia({ track: { h: '3' } }),
    lg: ia({ track: { h: '4' } }),
  },
  D5 = T5({ sizes: M5, baseStyle: A5, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  L5 = (e) => typeof e == 'function'
function Ct(e, ...t) {
  return L5(e) ? e(...t) : e
}
var { definePartsStyle: Rl, defineMultiStyleConfig: B5 } = Pe(_T.keys),
  Sa = J('checkbox-size'),
  F5 = (e) => {
    const { colorScheme: t } = e
    return {
      w: Sa.reference,
      h: Sa.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: G(`${t}.500`, `${t}.200`)(e),
        borderColor: G(`${t}.500`, `${t}.200`)(e),
        color: G('white', 'gray.900')(e),
        _hover: { bg: G(`${t}.600`, `${t}.300`)(e), borderColor: G(`${t}.600`, `${t}.300`)(e) },
        _disabled: {
          borderColor: G('gray.200', 'transparent')(e),
          bg: G('gray.200', 'whiteAlpha.300')(e),
          color: G('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: G(`${t}.500`, `${t}.200`)(e),
        borderColor: G(`${t}.500`, `${t}.200`)(e),
        color: G('white', 'gray.900')(e),
      },
      _disabled: {
        bg: G('gray.100', 'whiteAlpha.100')(e),
        borderColor: G('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: G('red.500', 'red.300')(e) },
    }
  },
  I5 = { _disabled: { cursor: 'not-allowed' } },
  O5 = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  V5 = { transitionProperty: 'transform', transitionDuration: 'normal' },
  N5 = Rl((e) => ({ icon: V5, container: I5, control: Ct(F5, e), label: O5 })),
  j5 = {
    sm: Rl({
      control: { [Sa.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: Rl({
      control: { [Sa.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: Rl({
      control: { [Sa.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  cu = B5({ baseStyle: N5, sizes: j5, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: W5, definePartsStyle: zl } = Pe(FT.keys),
  U5 = (e) => {
    var t
    const r = (t = Ct(cu.baseStyle, e)) == null ? void 0 : t.control
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
  H5 = zl((e) => {
    var t, r, n, o
    return {
      label: (r = (t = cu).baseStyle) == null ? void 0 : r.call(t, e).label,
      container: (o = (n = cu).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: U5(e),
    }
  }),
  G5 = {
    md: zl({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: zl({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: zl({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  K5 = W5({ baseStyle: H5, sizes: G5, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: Y5, definePartsStyle: Q5 } = Pe(IT.keys),
  al = J('select-bg'),
  cg,
  X5 = {
    ...((cg = he.baseStyle) == null ? void 0 : cg.field),
    'appearance': 'none',
    'paddingBottom': '1px',
    'lineHeight': 'normal',
    'bg': al.reference,
    [al.variable]: 'colors.white',
    '_dark': { [al.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: al.reference },
  },
  q5 = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  Z5 = Q5({ field: X5, icon: q5 }),
  sl = { paddingInlineEnd: '8' },
  dg,
  fg,
  hg,
  pg,
  mg,
  gg,
  yg,
  vg,
  J5 = {
    lg: {
      ...((dg = he.sizes) == null ? void 0 : dg.lg),
      field: { ...((fg = he.sizes) == null ? void 0 : fg.lg.field), ...sl },
    },
    md: {
      ...((hg = he.sizes) == null ? void 0 : hg.md),
      field: { ...((pg = he.sizes) == null ? void 0 : pg.md.field), ...sl },
    },
    sm: {
      ...((mg = he.sizes) == null ? void 0 : mg.sm),
      field: { ...((gg = he.sizes) == null ? void 0 : gg.sm.field), ...sl },
    },
    xs: {
      ...((yg = he.sizes) == null ? void 0 : yg.xs),
      field: { ...((vg = he.sizes) == null ? void 0 : vg.xs.field), ...sl },
      icon: { insetEnd: '1' },
    },
  },
  e$ = Y5({ baseStyle: Z5, sizes: J5, variants: he.variants, defaultProps: he.defaultProps }),
  dd = J('skeleton-start-color'),
  fd = J('skeleton-end-color'),
  t$ = {
    [dd.variable]: 'colors.gray.100',
    [fd.variable]: 'colors.gray.400',
    _dark: { [dd.variable]: 'colors.gray.800', [fd.variable]: 'colors.gray.600' },
    background: dd.reference,
    borderColor: fd.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  r$ = { baseStyle: t$ },
  hd = J('skip-link-bg'),
  n$ = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [hd.variable]: 'colors.white',
      _dark: { [hd.variable]: 'colors.gray.700' },
      bg: hd.reference,
    },
  },
  o$ = { baseStyle: n$ },
  { defineMultiStyleConfig: i$, definePartsStyle: ac } = Pe(OT.keys),
  os = J('slider-thumb-size'),
  is = J('slider-track-size'),
  _n = J('slider-bg'),
  a$ = (e) => {
    const { orientation: t } = e
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...$p({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
    }
  },
  s$ = (e) => ({
    ...$p({
      orientation: e.orientation,
      horizontal: { h: is.reference },
      vertical: { w: is.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [_n.variable]: 'colors.gray.200',
    _dark: { [_n.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [_n.variable]: 'colors.gray.300',
      _dark: { [_n.variable]: 'colors.whiteAlpha.300' },
    },
    bg: _n.reference,
  }),
  l$ = (e) => {
    const { orientation: t } = e
    return {
      ...$p({
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
      w: os.reference,
      h: os.reference,
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
  u$ = (e) => {
    const { colorScheme: t } = e
    return {
      width: 'inherit',
      height: 'inherit',
      [_n.variable]: `colors.${t}.500`,
      _dark: { [_n.variable]: `colors.${t}.200` },
      bg: _n.reference,
    }
  },
  c$ = ac((e) => ({ container: a$(e), track: s$(e), thumb: l$(e), filledTrack: u$(e) })),
  d$ = ac({ container: { [os.variable]: 'sizes.4', [is.variable]: 'sizes.1' } }),
  f$ = ac({ container: { [os.variable]: 'sizes.3.5', [is.variable]: 'sizes.1' } }),
  h$ = ac({ container: { [os.variable]: 'sizes.2.5', [is.variable]: 'sizes.0.5' } }),
  p$ = { lg: d$, md: f$, sm: h$ },
  m$ = i$({ baseStyle: c$, sizes: p$, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  oo = qe('spinner-size'),
  g$ = { width: [oo.reference], height: [oo.reference] },
  y$ = {
    xs: { [oo.variable]: 'sizes.3' },
    sm: { [oo.variable]: 'sizes.4' },
    md: { [oo.variable]: 'sizes.6' },
    lg: { [oo.variable]: 'sizes.8' },
    xl: { [oo.variable]: 'sizes.12' },
  },
  v$ = { baseStyle: g$, sizes: y$, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: b$, definePartsStyle: Qb } = Pe(VT.keys),
  S$ = { fontWeight: 'medium' },
  x$ = { opacity: 0.8, marginBottom: '2' },
  w$ = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  k$ = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  C$ = Qb({ container: {}, label: S$, helpText: x$, number: w$, icon: k$ }),
  _$ = {
    md: Qb({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  P$ = b$({ baseStyle: C$, sizes: _$, defaultProps: { size: 'md' } }),
  pd = J('kbd-bg'),
  T$ = {
    [pd.variable]: 'colors.gray.100',
    _dark: { [pd.variable]: 'colors.whiteAlpha.100' },
    bg: pd.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  E$ = { baseStyle: T$ },
  $$ = {
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
  R$ = { baseStyle: $$ },
  { defineMultiStyleConfig: z$, definePartsStyle: A$ } = Pe(zT.keys),
  M$ = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  D$ = A$({ icon: M$ }),
  L$ = z$({ baseStyle: D$ }),
  { defineMultiStyleConfig: B$, definePartsStyle: F$ } = Pe(AT.keys),
  Er = J('menu-bg'),
  md = J('menu-shadow'),
  I$ = {
    [Er.variable]: '#fff',
    [md.variable]: 'shadows.sm',
    _dark: { [Er.variable]: 'colors.gray.700', [md.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: Er.reference,
    boxShadow: md.reference,
  },
  O$ = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [Er.variable]: 'colors.gray.100', _dark: { [Er.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [Er.variable]: 'colors.gray.200',
      _dark: { [Er.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [Er.variable]: 'colors.gray.100',
      _dark: { [Er.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: Er.reference,
  },
  V$ = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  N$ = { opacity: 0.6 },
  j$ = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  W$ = { transitionProperty: 'common', transitionDuration: 'normal' },
  U$ = F$({ button: W$, list: I$, item: O$, groupTitle: V$, command: N$, divider: j$ }),
  H$ = B$({ baseStyle: U$ }),
  { defineMultiStyleConfig: G$, definePartsStyle: Kf } = Pe(MT.keys),
  gd = J('modal-bg'),
  yd = J('modal-shadow'),
  K$ = { bg: 'blackAlpha.600', zIndex: 'modal' },
  Y$ = (e) => {
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
  Q$ = (e) => {
    const { scrollBehavior: t } = e
    return {
      borderRadius: 'md',
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      [gd.variable]: 'colors.white',
      [yd.variable]: 'shadows.lg',
      _dark: { [gd.variable]: 'colors.gray.700', [yd.variable]: 'shadows.dark-lg' },
      bg: gd.reference,
      boxShadow: yd.reference,
    }
  },
  X$ = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  q$ = { position: 'absolute', top: '2', insetEnd: '3' },
  Z$ = (e) => {
    const { scrollBehavior: t } = e
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
  },
  J$ = { px: '6', py: '4' },
  eR = Kf((e) => ({
    overlay: K$,
    dialogContainer: Ct(Y$, e),
    dialog: Ct(Q$, e),
    header: X$,
    closeButton: q$,
    body: Ct(Z$, e),
    footer: J$,
  }))
function hr(e) {
  return Kf(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  )
}
var tR = {
    'xs': hr('xs'),
    'sm': hr('sm'),
    'md': hr('md'),
    'lg': hr('lg'),
    'xl': hr('xl'),
    '2xl': hr('2xl'),
    '3xl': hr('3xl'),
    '4xl': hr('4xl'),
    '5xl': hr('5xl'),
    '6xl': hr('6xl'),
    'full': hr('full'),
  },
  rR = G$({ baseStyle: eR, sizes: tR, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: nR, definePartsStyle: Xb } = Pe(DT.keys),
  zp = qe('number-input-stepper-width'),
  qb = qe('number-input-input-padding'),
  oR = Gr(zp).add('0.5rem').toString(),
  vd = qe('number-input-bg'),
  bd = qe('number-input-color'),
  Sd = qe('number-input-border-color'),
  iR = { [zp.variable]: 'sizes.6', [qb.variable]: oR },
  aR = (e) => {
    var t, r
    return (r = (t = Ct(he.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {}
  },
  sR = { width: zp.reference },
  lR = {
    borderStart: '1px solid',
    borderStartColor: Sd.reference,
    color: bd.reference,
    bg: vd.reference,
    [bd.variable]: 'colors.chakra-body-text',
    [Sd.variable]: 'colors.chakra-border-color',
    _dark: { [bd.variable]: 'colors.whiteAlpha.800', [Sd.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [vd.variable]: 'colors.gray.200',
      _dark: { [vd.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  uR = Xb((e) => {
    var t
    return { root: iR, field: (t = Ct(aR, e)) != null ? t : {}, stepperGroup: sR, stepper: lR }
  })
function ll(e) {
  var t, r, n
  const o = (t = he.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
    s = jb.fontSizes[a]
  return Xb({
    field: { ...o.field, paddingInlineEnd: qb.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: Gr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  })
}
var cR = { xs: ll('xs'), sm: ll('sm'), md: ll('md'), lg: ll('lg') },
  dR = nR({ baseStyle: uR, sizes: cR, variants: he.variants, defaultProps: he.defaultProps }),
  bg,
  fR = { ...((bg = he.baseStyle) == null ? void 0 : bg.field), textAlign: 'center' },
  hR = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  Sg,
  xg,
  pR = {
    outline: (e) => {
      var t, r, n
      return (n =
        (r = Ct((t = he.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    flushed: (e) => {
      var t, r, n
      return (n =
        (r = Ct((t = he.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    filled: (e) => {
      var t, r, n
      return (n =
        (r = Ct((t = he.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    unstyled: (xg = (Sg = he.variants) == null ? void 0 : Sg.unstyled.field) != null ? xg : {},
  },
  mR = { baseStyle: fR, sizes: hR, variants: pR, defaultProps: he.defaultProps },
  { defineMultiStyleConfig: gR, definePartsStyle: yR } = Pe(LT.keys),
  ul = qe('popper-bg'),
  vR = qe('popper-arrow-bg'),
  wg = qe('popper-arrow-shadow-color'),
  bR = { zIndex: 10 },
  SR = {
    [ul.variable]: 'colors.white',
    bg: ul.reference,
    [vR.variable]: ul.reference,
    [wg.variable]: 'colors.gray.200',
    _dark: { [ul.variable]: 'colors.gray.700', [wg.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  xR = { px: 3, py: 2, borderBottomWidth: '1px' },
  wR = { px: 3, py: 2 },
  kR = { px: 3, py: 2, borderTopWidth: '1px' },
  CR = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  _R = yR({ popper: bR, content: SR, header: xR, body: wR, footer: kR, closeButton: CR }),
  PR = gR({ baseStyle: _R }),
  { definePartsStyle: Yf, defineMultiStyleConfig: TR } = Pe(PT.keys),
  xd = J('drawer-bg'),
  wd = J('drawer-box-shadow')
function Mo(e) {
  return Yf(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var ER = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  $R = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  RR = (e) => {
    const { isFullHeight: t } = e
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [xd.variable]: 'colors.white',
      [wd.variable]: 'shadows.lg',
      _dark: { [xd.variable]: 'colors.gray.700', [wd.variable]: 'shadows.dark-lg' },
      bg: xd.reference,
      boxShadow: wd.reference,
    }
  },
  zR = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  AR = { position: 'absolute', top: '2', insetEnd: '3' },
  MR = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  DR = { px: '6', py: '4' },
  LR = Yf((e) => ({
    overlay: ER,
    dialogContainer: $R,
    dialog: Ct(RR, e),
    header: zR,
    closeButton: AR,
    body: MR,
    footer: DR,
  })),
  BR = { xs: Mo('xs'), sm: Mo('md'), md: Mo('lg'), lg: Mo('2xl'), xl: Mo('4xl'), full: Mo('full') },
  FR = TR({ baseStyle: LR, sizes: BR, defaultProps: { size: 'xs' } }),
  { definePartsStyle: IR, defineMultiStyleConfig: OR } = Pe(TT.keys),
  VR = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  NR = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  jR = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  WR = IR({ preview: VR, input: NR, textarea: jR }),
  UR = OR({ baseStyle: WR }),
  { definePartsStyle: HR, defineMultiStyleConfig: GR } = Pe(ET.keys),
  si = J('form-control-color'),
  KR = {
    marginStart: '1',
    [si.variable]: 'colors.red.500',
    _dark: { [si.variable]: 'colors.red.300' },
    color: si.reference,
  },
  YR = {
    mt: '2',
    [si.variable]: 'colors.gray.600',
    _dark: { [si.variable]: 'colors.whiteAlpha.600' },
    color: si.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  QR = HR({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: KR,
    helperText: YR,
  }),
  XR = GR({ baseStyle: QR }),
  { definePartsStyle: qR, defineMultiStyleConfig: ZR } = Pe($T.keys),
  li = J('form-error-color'),
  JR = {
    [li.variable]: 'colors.red.500',
    _dark: { [li.variable]: 'colors.red.300' },
    color: li.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  e4 = {
    marginEnd: '0.5em',
    [li.variable]: 'colors.red.500',
    _dark: { [li.variable]: 'colors.red.300' },
    color: li.reference,
  },
  t4 = qR({ text: JR, icon: e4 }),
  r4 = ZR({ baseStyle: t4 }),
  n4 = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  o4 = { baseStyle: n4 },
  i4 = { fontFamily: 'heading', fontWeight: 'bold' },
  a4 = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    'xl': { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    'lg': { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    'md': { fontSize: 'xl', lineHeight: 1.2 },
    'sm': { fontSize: 'md', lineHeight: 1.2 },
    'xs': { fontSize: 'sm', lineHeight: 1.2 },
  },
  s4 = { baseStyle: i4, sizes: a4, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: l4, definePartsStyle: u4 } = Pe(CT.keys),
  c4 = {
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
  d4 = u4({ link: c4 }),
  f4 = l4({ baseStyle: d4 }),
  h4 = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  Zb = (e) => {
    const { colorScheme: t, theme: r } = e
    if (t === 'gray')
      return {
        color: G('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: G('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: G('gray.200', 'whiteAlpha.300')(e) },
      }
    const n = bi(`${t}.200`, 0.12)(r),
      o = bi(`${t}.200`, 0.24)(r)
    return {
      color: G(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: G(`${t}.50`, n)(e) },
      _active: { bg: G(`${t}.100`, o)(e) },
    }
  },
  p4 = (e) => {
    const { colorScheme: t } = e,
      r = G('gray.200', 'whiteAlpha.300')(e)
    return {
      'border': '1px solid',
      'borderColor': t === 'gray' ? r : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px',
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px',
      },
      ...Ct(Zb, e),
    }
  },
  m4 = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  g4 = (e) => {
    var t
    const { colorScheme: r } = e
    if (r === 'gray') {
      const l = G('gray.100', 'whiteAlpha.200')(e)
      return {
        bg: l,
        _hover: { bg: G('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: l } },
        _active: { bg: G('gray.300', 'whiteAlpha.400')(e) },
      }
    }
    const {
        bg: n = `${r}.500`,
        color: o = 'white',
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = m4[r]) != null ? t : {},
      s = G(n, `${r}.200`)(e)
    return {
      bg: s,
      color: G(o, 'gray.800')(e),
      _hover: { bg: G(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: G(a, `${r}.400`)(e) },
    }
  },
  y4 = (e) => {
    const { colorScheme: t } = e
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: G(`${t}.500`, `${t}.200`)(e),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: G(`${t}.700`, `${t}.500`)(e) },
    }
  },
  v4 = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  b4 = { ghost: Zb, outline: p4, solid: g4, link: y4, unstyled: v4 },
  S4 = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  x4 = {
    baseStyle: h4,
    variants: b4,
    sizes: S4,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: mo, defineMultiStyleConfig: w4 } = Pe(HT.keys),
  du = J('card-bg'),
  Zr = J('card-padding'),
  Jb = J('card-shadow'),
  Al = J('card-radius'),
  eS = J('card-border-width', '0'),
  tS = J('card-border-color'),
  k4 = mo({
    container: {
      [du.variable]: 'colors.chakra-body-bg',
      backgroundColor: du.reference,
      boxShadow: Jb.reference,
      borderRadius: Al.reference,
      color: 'chakra-body-text',
      borderWidth: eS.reference,
      borderColor: tS.reference,
    },
    body: { padding: Zr.reference, flex: '1 1 0%' },
    header: { padding: Zr.reference },
    footer: { padding: Zr.reference },
  }),
  C4 = {
    sm: mo({ container: { [Al.variable]: 'radii.base', [Zr.variable]: 'space.3' } }),
    md: mo({ container: { [Al.variable]: 'radii.md', [Zr.variable]: 'space.5' } }),
    lg: mo({ container: { [Al.variable]: 'radii.xl', [Zr.variable]: 'space.7' } }),
  },
  _4 = {
    elevated: mo({
      container: { [Jb.variable]: 'shadows.base', _dark: { [du.variable]: 'colors.gray.700' } },
    }),
    outline: mo({
      container: { [eS.variable]: '1px', [tS.variable]: 'colors.chakra-border-color' },
    }),
    filled: mo({ container: { [du.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [Zr.variable]: 0 },
      header: { [Zr.variable]: 0 },
      footer: { [Zr.variable]: 0 },
    },
  },
  P4 = w4({
    baseStyle: k4,
    variants: _4,
    sizes: C4,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  xa = qe('close-button-size'),
  Yi = qe('close-button-bg'),
  T4 = {
    w: [xa.reference],
    h: [xa.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Yi.variable]: 'colors.blackAlpha.100',
      _dark: { [Yi.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Yi.variable]: 'colors.blackAlpha.200',
      _dark: { [Yi.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Yi.reference,
  },
  E4 = {
    lg: { [xa.variable]: 'sizes.10', fontSize: 'md' },
    md: { [xa.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [xa.variable]: 'sizes.6', fontSize: '2xs' },
  },
  $4 = { baseStyle: T4, sizes: E4, defaultProps: { size: 'md' } },
  { variants: R4, defaultProps: z4 } = ba,
  A4 = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  M4 = { baseStyle: A4, variants: R4, defaultProps: z4 },
  D4 = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  L4 = { baseStyle: D4 },
  B4 = { opacity: 0.6, borderColor: 'inherit' },
  F4 = { borderStyle: 'solid' },
  I4 = { borderStyle: 'dashed' },
  O4 = { solid: F4, dashed: I4 },
  V4 = { baseStyle: B4, variants: O4, defaultProps: { variant: 'solid' } },
  { definePartsStyle: N4, defineMultiStyleConfig: j4 } = Pe(xT.keys),
  W4 = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  U4 = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  H4 = { pt: '2', px: '4', pb: '5' },
  G4 = { fontSize: '1.25em' },
  K4 = N4({ container: W4, button: U4, panel: H4, icon: G4 }),
  Y4 = j4({ baseStyle: K4 }),
  { definePartsStyle: bs, defineMultiStyleConfig: Q4 } = Pe(wT.keys),
  Kt = J('alert-fg'),
  sn = J('alert-bg'),
  X4 = bs({
    container: { bg: sn.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: Kt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: Kt.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  })
function Ap(e) {
  const { theme: t, colorScheme: r } = e,
    n = bi(`${r}.200`, 0.16)(t)
  return { light: `colors.${r}.100`, dark: n }
}
var q4 = bs((e) => {
    const { colorScheme: t } = e,
      r = Ap(e)
    return {
      container: {
        [Kt.variable]: `colors.${t}.500`,
        [sn.variable]: r.light,
        _dark: { [Kt.variable]: `colors.${t}.200`, [sn.variable]: r.dark },
      },
    }
  }),
  Z4 = bs((e) => {
    const { colorScheme: t } = e,
      r = Ap(e)
    return {
      container: {
        [Kt.variable]: `colors.${t}.500`,
        [sn.variable]: r.light,
        _dark: { [Kt.variable]: `colors.${t}.200`, [sn.variable]: r.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: Kt.reference,
      },
    }
  }),
  J4 = bs((e) => {
    const { colorScheme: t } = e,
      r = Ap(e)
    return {
      container: {
        [Kt.variable]: `colors.${t}.500`,
        [sn.variable]: r.light,
        _dark: { [Kt.variable]: `colors.${t}.200`, [sn.variable]: r.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: Kt.reference,
      },
    }
  }),
  ez = bs((e) => {
    const { colorScheme: t } = e
    return {
      container: {
        [Kt.variable]: 'colors.white',
        [sn.variable]: `colors.${t}.500`,
        _dark: { [Kt.variable]: 'colors.gray.900', [sn.variable]: `colors.${t}.200` },
        color: Kt.reference,
      },
    }
  }),
  tz = { 'subtle': q4, 'left-accent': Z4, 'top-accent': J4, 'solid': ez },
  rz = Q4({
    baseStyle: X4,
    variants: tz,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: rS, defineMultiStyleConfig: nz } = Pe(kT.keys),
  ui = J('avatar-border-color'),
  kd = J('avatar-bg'),
  oz = {
    borderRadius: 'full',
    border: '0.2em solid',
    [ui.variable]: 'white',
    _dark: { [ui.variable]: 'colors.gray.800' },
    borderColor: ui.reference,
  },
  iz = {
    [kd.variable]: 'colors.gray.200',
    _dark: { [kd.variable]: 'colors.whiteAlpha.400' },
    bgColor: kd.reference,
  },
  kg = J('avatar-background'),
  az = (e) => {
    const { name: t, theme: r } = e,
      n = t ? fE({ string: t }) : 'colors.gray.400',
      o = cE(n)(r)
    let i = 'white'
    return (
      o || (i = 'gray.800'),
      {
        'bg': kg.reference,
        '&:not([data-loaded])': { [kg.variable]: n },
        'color': i,
        [ui.variable]: 'colors.white',
        '_dark': { [ui.variable]: 'colors.gray.800' },
        'borderColor': ui.reference,
        'verticalAlign': 'top',
      }
    )
  },
  sz = rS((e) => ({ badge: Ct(oz, e), excessLabel: Ct(iz, e), container: Ct(az, e) }))
function vn(e) {
  const t = e !== '100%' ? Ub[e] : void 0
  return rS({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: { fontSize: `calc(${t ?? e} / 2.5)`, lineHeight: e !== '100%' ? t ?? e : void 0 },
  })
}
var lz = {
    '2xs': vn(4),
    'xs': vn(6),
    'sm': vn(8),
    'md': vn(12),
    'lg': vn(16),
    'xl': vn(24),
    '2xl': vn(32),
    'full': vn('100%'),
  },
  uz = nz({ baseStyle: sz, sizes: lz, defaultProps: { size: 'md' } }),
  cz = {
    Accordion: Y4,
    Alert: rz,
    Avatar: uz,
    Badge: ba,
    Breadcrumb: f4,
    Button: x4,
    Checkbox: cu,
    CloseButton: $4,
    Code: M4,
    Container: L4,
    Divider: V4,
    Drawer: FR,
    Editable: UR,
    Form: XR,
    FormError: r4,
    FormLabel: o4,
    Heading: s4,
    Input: he,
    Kbd: E$,
    Link: R$,
    List: L$,
    Menu: H$,
    Modal: rR,
    NumberInput: dR,
    PinInput: mR,
    Popover: PR,
    Progress: D5,
    Radio: K5,
    Select: e$,
    Skeleton: r$,
    SkipLink: o$,
    Slider: m$,
    Spinner: v$,
    Stat: P$,
    Switch: EE,
    Table: LE,
    Tabs: XE,
    Tag: d5,
    Textarea: k5,
    Tooltip: P5,
    Card: P4,
  },
  dz = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  fz = {
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
  hz = 'ltr',
  pz = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  nS = { semanticTokens: dz, direction: hz, ...ST, components: cz, styles: fz, config: pz }
function aa(e) {
  return typeof e == 'function'
}
function mz(...e) {
  return (t) => e.reduce((r, n) => n(r), t)
}
var gz = (e) =>
    function (...r) {
      let n = [...r],
        o = r[r.length - 1]
      return (
        XP(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = e),
        mz(...n.map((i) => (a) => aa(i) ? i(a) : vz(a, i)))(o)
      )
    },
  yz = gz(nS)
function vz(...e) {
  return lr({}, ...e, oS)
}
function oS(e, t, r, n) {
  if ((aa(e) || aa(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = aa(e) ? e(...o) : e,
        a = aa(t) ? t(...o) : t
      return lr({}, i, a, oS)
    }
}
function bz(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n])
    }),
    r
  )
}
function Sz(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var xz = (e) => {
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
  iS = xz(Sz)
function aS(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n]
      t(o, n, e) && (r[n] = o)
    }),
    r
  )
}
var sS = (e) => aS(e, (t) => t != null)
function wz(e) {
  return typeof e == 'function'
}
function lS(e, ...t) {
  return wz(e) ? e(...t) : e
}
var kz = typeof Element < 'u',
  Cz = typeof Map == 'function',
  _z = typeof Set == 'function',
  Pz = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Ml(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!Ml(e[n], t[n])) return !1
      return !0
    }
    var i
    if (Cz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Ml(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (_z && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (Pz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (kz && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !Ml(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var Tz = function (t, r) {
  try {
    return Ml(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
function uS(e, t = {}) {
  var r
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = D_(),
    s = e ? iS(i, `components.${e}`) : void 0,
    l = n || s,
    u = lr(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      sS(bz(o, ['children']))
    ),
    c = x.useRef({})
  if (l) {
    const f = YP(l)(u)
    Tz(c.current, f) || (c.current = f)
  }
  return c.current
}
function Ei(e, t = {}) {
  return uS(e, t)
}
function Ez(e, t = {}) {
  return uS(e, t)
}
var $z = new Set([
    ...BP,
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
  Rz = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function zz(e) {
  return Rz.has(e) || !$z.has(e)
}
function Az(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object')
  const r = { ...e }
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], (r[o] = n[o]))
  return r
}
var Mz =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Dz = Sv(function (e) {
    return (
      Mz.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  }),
  Lz = Dz,
  Bz = function (t) {
    return t !== 'theme'
  },
  Cg = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Lz : Bz
  },
  _g = function (t, r, n) {
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
  Fz = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag
    return (
      _v(r, n, o),
      cC(function () {
        return Pv(r, n, o)
      }),
      null
    )
  },
  Iz = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a
    r !== void 0 && ((i = r.label), (a = r.target))
    var s = _g(t, r, n),
      l = s || Cg(o),
      u = !l('as')
    return function () {
      var c = arguments,
        d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if ((i !== void 0 && d.push('label:' + i + ';'), c[0] == null || c[0].raw === void 0))
        d.push.apply(d, c)
      else {
        d.push(c[0][0])
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p])
      }
      var b = Rv(function (S, y, m) {
        var h = (u && S.as) || o,
          g = '',
          w = [],
          _ = S
        if (S.theme == null) {
          _ = {}
          for (var z in S) _[z] = S[z]
          _.theme = x.useContext(Ba)
        }
        typeof S.className == 'string'
          ? (g = nC(y.registered, w, S.className))
          : S.className != null && (g = S.className + ' ')
        var T = Rh(d.concat(w), y.registered, _)
        ;(g += y.key + '-' + T.name), a !== void 0 && (g += ' ' + a)
        var $ = u && s === void 0 ? Cg(h) : l,
          j = {}
        for (var O in S) (u && O === 'as') || ($(O) && (j[O] = S[O]))
        return (
          (j.className = g),
          (j.ref = m),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(Fz, { cache: y, serialized: T, isStringTag: typeof h == 'string' }),
            x.createElement(h, j)
          )
        )
      })
      return (
        (b.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (b.defaultProps = t.defaultProps),
        (b.__emotion_real = b),
        (b.__emotion_base = o),
        (b.__emotion_styles = d),
        (b.__emotion_forwardProp = s),
        Object.defineProperty(b, 'toString', {
          value: function () {
            return '.' + a
          },
        }),
        (b.withComponent = function (S, y) {
          return e(S, Bl({}, r, y, { shouldForwardProp: _g(b, y, !0) })).apply(void 0, d)
        }),
        b
      )
    }
  },
  Oz = [
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
  fu = Iz.bind()
Oz.forEach(function (e) {
  fu[e] = fu(e)
})
var Pg,
  Vz = (Pg = fu.default) != null ? Pg : fu,
  Nz =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = aS(a, (d, f) => IP(f)),
        l = lS(e, t),
        u = Az({}, o, l, sS(s), i),
        c = Nb(u)(t.theme)
      return n ? [c, n] : c
    }
function Cd(e, t) {
  const { baseStyle: r, ...n } = t ?? {}
  n.shouldForwardProp || (n.shouldForwardProp = zz)
  const o = Nz({ baseStyle: r }),
    i = Vz(e, n)(o)
  return zt.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Cp()
    return zt.createElement(i, { 'ref': u, 'data-theme': d ? c : void 0, ...l })
  })
}
function jz() {
  const e = new Map()
  return new Proxy(Cd, {
    apply(t, r, n) {
      return Cd(...n)
    },
    get(t, r) {
      return e.has(r) || e.set(r, Cd(r)), e.get(r)
    },
  })
}
var Oe = jz()
function bt(e) {
  return x.forwardRef(e)
}
function Wz(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: n,
    } = e,
    o = x.createContext(void 0)
  o.displayName = n
  function i() {
    var a
    const s = x.useContext(o)
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
function Uz(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = x.useMemo(() => LP(r), [r])
  return gt(hC, { theme: o, children: [A(Hz, { root: t }), n] })
}
function Hz({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',')
  return A(Ou, { styles: (r) => ({ [t]: r.__cssVars }) })
}
Wz({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function Gz() {
  const { colorMode: e } = Cp()
  return A(Ou, {
    styles: (t) => {
      const r = iS(t, 'styles.global'),
        n = lS(r, { theme: t, colorMode: e })
      return n ? Nb(n)(t) : void 0
    },
  })
}
var Mp = x.createContext({
  getDocument() {
    return document
  },
  getWindow() {
    return window
  },
})
Mp.displayName = 'EnvironmentContext'
function Kz({ defer: e } = {}) {
  const [, t] = x.useReducer((r) => r + 1, 0)
  return (
    Fa(() => {
      e && t()
    }, [e]),
    x.useContext(Mp)
  )
}
function cS(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = x.useRef(null),
    i = x.useMemo(
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
  return gt(Mp.Provider, {
    value: i,
    children: [t, a && A('span', { id: '__chakra_env', hidden: !0, ref: o })],
  })
}
cS.displayName = 'EnvironmentProvider'
var Yz = (e) => {
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
      c = A(cS, { environment: s, disabled: u, children: t })
    return A(Uz, {
      theme: a,
      cssVarsRoot: l,
      children: gt(Lb, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? A(yC, { scope: o }) : A(gC, {}),
          A(Gz, {}),
          n ? A(Mv, { zIndex: n, children: c }) : c,
        ],
      }),
    })
  },
  Qz = (e, t) => e.find((r) => r.id === t)
function Tg(e, t) {
  const r = dS(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1
  return { position: r, index: n }
}
function dS(e, t) {
  for (const [r, n] of Object.entries(e)) if (Qz(n, t)) return r
}
function Xz(e) {
  const t = e.includes('right'),
    r = e.includes('left')
  let n = 'center'
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  )
}
function qz(e) {
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
function Zz(e, t = []) {
  const r = x.useRef(e)
  return (
    x.useEffect(() => {
      r.current = e
    }),
    x.useCallback((...n) => {
      var o
      return (o = r.current) == null ? void 0 : o.call(r, ...n)
    }, t)
  )
}
function Jz(e, t) {
  const r = Zz(e)
  x.useEffect(() => {
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
function Eg(e, t) {
  const r = x.useRef(!1),
    n = x.useRef(!1)
  x.useEffect(() => {
    if (r.current && n.current) return e()
    n.current = !0
  }, t),
    x.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1
        }
      ),
      []
    )
}
const fS = x.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  sc = x.createContext({}),
  Ss = x.createContext(null),
  lc = typeof document < 'u',
  hu = lc ? x.useLayoutEffect : x.useEffect,
  hS = x.createContext({ strict: !1 })
function e3(e, t, r, n) {
  const { visualElement: o } = x.useContext(sc),
    i = x.useContext(hS),
    a = x.useContext(Ss),
    s = x.useContext(fS).reducedMotion,
    l = x.useRef()
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
    x.useInsertionEffect(() => {
      u && u.update(r, a)
    }),
    hu(() => {
      u && u.render()
    }),
    x.useEffect(() => {
      u && u.updateFeatures()
    }),
    (window.HandoffAppearAnimations ? hu : x.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges()
    }),
    u
  )
}
function Yo(e) {
  return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function t3(e, t, r) {
  return x.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : Yo(r) && (r.current = n))
    },
    [t]
  )
}
function as(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function uc(e) {
  return typeof e == 'object' && typeof e.start == 'function'
}
const Dp = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Lp = ['initial', ...Dp]
function cc(e) {
  return uc(e.animate) || Lp.some((t) => as(e[t]))
}
function pS(e) {
  return !!(cc(e) || e.variants)
}
function r3(e, t) {
  if (cc(e)) {
    const { initial: r, animate: n } = e
    return { initial: r === !1 || as(r) ? r : void 0, animate: as(n) ? n : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function n3(e) {
  const { initial: t, animate: r } = r3(e, x.useContext(sc))
  return x.useMemo(() => ({ initial: t, animate: r }), [$g(t), $g(r)])
}
function $g(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const Rg = {
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
  ss = {}
for (const e in Rg) ss[e] = { isEnabled: (t) => Rg[e].some((r) => !!t[r]) }
function o3(e) {
  for (const t in e) ss[t] = { ...ss[t], ...e[t] }
}
function Bp(e) {
  const t = x.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
let i3 = 1
function a3() {
  return Bp(() => {
    if (wa.hasEverUpdated) return i3++
  })
}
const Fp = x.createContext({}),
  mS = x.createContext({}),
  s3 = Symbol.for('motionComponentSymbol')
function l3({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && o3(e)
  function i(s, l) {
    let u
    const c = { ...x.useContext(fS), ...s, layoutId: u3(s) },
      { isStatic: d } = c,
      f = n3(s),
      p = d ? void 0 : a3(),
      b = n(s, d)
    if (!d && lc) {
      f.visualElement = e3(o, b, c, t)
      const S = x.useContext(mS),
        y = x.useContext(hS).strict
      f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, p, S))
    }
    return x.createElement(
      sc.Provider,
      { value: f },
      u && f.visualElement ? x.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, p, t3(b, f.visualElement, l), b, d, f.visualElement)
    )
  }
  const a = x.forwardRef(i)
  return (a[s3] = o), a
}
function u3({ layoutId: e }) {
  const t = x.useContext(Fp).id
  return t && e !== void 0 ? t + '-' + e : e
}
function c3(e) {
  function t(n, o = {}) {
    return l3(e(n, o))
  }
  if (typeof Proxy > 'u') return t
  const r = new Map()
  return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) })
}
const d3 = [
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
function Ip(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(d3.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const pu = {}
function f3(e) {
  Object.assign(pu, e)
}
const dc = [
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
  Co = new Set(dc)
function gS(e, { layout: t, layoutId: r }) {
  return (
    Co.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!pu[e] || e === 'opacity'))
  )
}
const Bt = (e) => !!(e && e.getVelocity),
  h3 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  p3 = dc.length
function m3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = ''
  for (let a = 0; a < p3; a++) {
    const s = dc[a]
    if (e[s] !== void 0) {
      const l = h3[s] || s
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
const yS = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  vS = yS('--'),
  Qf = yS('var(--'),
  g3 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  xo = (e, t, r) => Math.min(Math.max(r, e), t),
  _o = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  ka = { ..._o, transform: (e) => xo(0, 1, e) },
  cl = { ..._o, default: 1 },
  Ca = (e) => Math.round(e * 1e5) / 1e5,
  ls = /(-)?([\d]*\.?[\d])+/g,
  Xf =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  y3 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function xs(e) {
  return typeof e == 'string'
}
const ws = (e) => ({
    test: (t) => xs(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  bn = ws('deg'),
  Fr = ws('%'),
  K = ws('px'),
  v3 = ws('vh'),
  b3 = ws('vw'),
  zg = { ...Fr, parse: (e) => Fr.parse(e) / 100, transform: (e) => Fr.transform(e * 100) },
  Ag = { ..._o, transform: Math.round },
  bS = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: bn,
    rotateX: bn,
    rotateY: bn,
    rotateZ: bn,
    scale: cl,
    scaleX: cl,
    scaleY: cl,
    scaleZ: cl,
    skew: bn,
    skewX: bn,
    skewY: bn,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: ka,
    originX: zg,
    originY: zg,
    originZ: K,
    zIndex: Ag,
    fillOpacity: ka,
    strokeOpacity: ka,
    numOctaves: Ag,
  }
function Op(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e
  let l = !1,
    u = !1,
    c = !0
  for (const d in t) {
    const f = t[d]
    if (vS(d)) {
      i[d] = f
      continue
    }
    const p = bS[d],
      b = g3(f, p)
    if (Co.has(d)) {
      if (((l = !0), (a[d] = b), !c)) continue
      f !== (p.default || 0) && (c = !1)
    } else d.startsWith('origin') ? ((u = !0), (s[d] = b)) : (o[d] = b)
  }
  if (
    (t.transform ||
      (l || n ? (o.transform = m3(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: p = 0 } = s
    o.transformOrigin = `${d} ${f} ${p}`
  }
}
const Vp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function SS(e, t, r) {
  for (const n in t) !Bt(t[n]) && !gS(n, r) && (e[n] = t[n])
}
function S3({ transformTemplate: e }, t, r) {
  return x.useMemo(() => {
    const n = Vp()
    return Op(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function x3(e, t, r) {
  const n = e.style || {},
    o = {}
  return SS(o, n, e), Object.assign(o, S3(e, t, r)), e.transformValues ? e.transformValues(o) : o
}
function w3(e, t, r) {
  const n = {},
    o = x3(e, t, r)
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
const k3 = new Set([
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
function mu(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    k3.has(e)
  )
}
let xS = (e) => !mu(e)
function C3(e) {
  e && (xS = (t) => (t.startsWith('on') ? !mu(t) : e(t)))
}
try {
  C3(require('@emotion/is-prop-valid').default)
} catch {}
function _3(e, t, r) {
  const n = {}
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((xS(o) ||
        (r === !0 && mu(o)) ||
        (!t && !mu(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]))
  return n
}
function Mg(e, t, r) {
  return typeof e == 'string' ? e : K.transform(t + r * e)
}
function P3(e, t, r) {
  const n = Mg(t, e.x, e.width),
    o = Mg(r, e.y, e.height)
  return `${n} ${o}`
}
const T3 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  E3 = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function $3(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1
  const i = o ? T3 : E3
  e[i.offset] = K.transform(-n)
  const a = K.transform(t),
    s = K.transform(r)
  e[i.array] = `${a} ${s}`
}
function Np(
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
  if ((Op(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: p, dimensions: b } = e
  f.transform && (b && (p.transform = f.transform), delete f.transform),
    b &&
      (n !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = P3(b, n !== void 0 ? n : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && $3(f, i, a, s, !1)
}
const wS = () => ({ ...Vp(), attrs: {} }),
  jp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function R3(e, t, r, n) {
  const o = x.useMemo(() => {
    const i = wS()
    return (
      Np(i, t, { enableHardwareAcceleration: !1 }, jp(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    )
  }, [t])
  if (e.style) {
    const i = {}
    SS(i, e.style, e), (o.style = { ...i, ...o.style })
  }
  return o
}
function z3(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const u = (Ip(r) ? R3 : w3)(n, a, s, r),
      d = { ..._3(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      p = x.useMemo(() => (Bt(f) ? f.get() : f), [f])
    return o && (d['data-projection-id'] = o), x.createElement(r, { ...d, children: p })
  }
}
const Wp = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function kS(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n))
  for (const i in r) e.style.setProperty(i, r[i])
}
const CS = new Set([
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
function _S(e, t, r, n) {
  kS(e, t, void 0, n)
  for (const o in t.attrs) e.setAttribute(CS.has(o) ? o : Wp(o), t.attrs[o])
}
function Up(e, t) {
  const { style: r } = e,
    n = {}
  for (const o in r) (Bt(r[o]) || (t.style && Bt(t.style[o])) || gS(o, e)) && (n[o] = r[o])
  return n
}
function PS(e, t) {
  const r = Up(e, t)
  for (const n in e)
    if (Bt(e[n]) || Bt(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n
      r[o] = e[n]
    }
  return r
}
function Hp(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  )
}
const gu = (e) => Array.isArray(e),
  A3 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  M3 = (e) => (gu(e) ? e[e.length - 1] || 0 : e)
function Dl(e) {
  const t = Bt(e) ? e.get() : e
  return A3(t) ? t.toValue() : t
}
function D3({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = { latestValues: L3(n, o, i, e), renderState: t() }
  return r && (a.mount = (s) => r(n, s, a)), a
}
const TS = (e) => (t, r) => {
  const n = x.useContext(sc),
    o = x.useContext(Ss),
    i = () => D3(e, t, n, o)
  return r ? i() : Bp(i)
}
function L3(e, t, r, n) {
  const o = {},
    i = n(e, {})
  for (const f in i) o[f] = Dl(i[f])
  let { initial: a, animate: s } = e
  const l = cc(e),
    u = pS(e)
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
      !uc(d) &&
      (Array.isArray(d) ? d : [d]).forEach((p) => {
        const b = Hp(e, p)
        if (!b) return
        const { transitionEnd: S, transition: y, ...m } = b
        for (const h in m) {
          let g = m[h]
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0
            g = g[w]
          }
          g !== null && (o[h] = g)
        }
        for (const h in S) o[h] = S[h]
      }),
    o
  )
}
const B3 = {
    useVisualState: TS({
      scrapeMotionValuesFromProps: PS,
      createRenderState: wS,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
        }
        Np(r, n, { enableHardwareAcceleration: !1 }, jp(t.tagName), e.transformTemplate), _S(t, r)
      },
    }),
  },
  F3 = { useVisualState: TS({ scrapeMotionValuesFromProps: Up, createRenderState: Vp }) }
function I3(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Ip(e) ? B3 : F3),
    preloadedFeatures: r,
    useRender: z3(t),
    createVisualElement: n,
    Component: e,
  }
}
function Xr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r)
}
const ES = (e) =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function fc(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const O3 = (e) => (t) => ES(t) && e(t, fc(t))
function Jr(e, t, r, n) {
  return Xr(e, t, O3(r), n)
}
const V3 = (e, t) => (r) => t(e(r)),
  In = (...e) => e.reduce(V3)
function $S(e) {
  let t = null
  return () => {
    const r = () => {
      t = null
    }
    return t === null ? ((t = e), r) : !1
  }
}
const Dg = $S('dragHorizontal'),
  Lg = $S('dragVertical')
function RS(e) {
  let t = !1
  if (e === 'y') t = Lg()
  else if (e === 'x') t = Dg()
  else {
    const r = Dg(),
      n = Lg()
    r && n
      ? (t = () => {
          r(), n()
        })
      : (r && r(), n && n())
  }
  return t
}
function zS() {
  const e = RS(!0)
  return e ? (e(), !1) : !0
}
class Yn {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function N3(e) {
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
const pt = { delta: 0, timestamp: 0, isProcessing: !1 },
  j3 = 40
let qf = !0,
  us = !1
const ks = ['read', 'update', 'preRender', 'render', 'postRender'],
  hc = ks.reduce((e, t) => ((e[t] = N3(() => (us = !0))), e), {}),
  Re = ks.reduce((e, t) => {
    const r = hc[t]
    return (e[t] = (n, o = !1, i = !1) => (us || U3(), r.schedule(n, o, i))), e
  }, {}),
  Wn = ks.reduce((e, t) => ((e[t] = hc[t].cancel), e), {}),
  _d = ks.reduce((e, t) => ((e[t] = () => hc[t].process(pt)), e), {}),
  W3 = (e) => hc[e].process(pt),
  AS = (e) => {
    ;(us = !1),
      (pt.delta = qf ? 1e3 / 60 : Math.max(Math.min(e - pt.timestamp, j3), 1)),
      (pt.timestamp = e),
      (pt.isProcessing = !0),
      ks.forEach(W3),
      (pt.isProcessing = !1),
      us && ((qf = !1), requestAnimationFrame(AS))
  },
  U3 = () => {
    ;(us = !0), (qf = !0), pt.isProcessing || requestAnimationFrame(AS)
  }
function Bg(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || zS()) return
      const s = e.getProps()
      e.animationState && s.whileHover && e.animationState.setActive('whileHover', t),
        s[n] && Re.update(() => s[n](i, a))
    }
  return Jr(e.current, r, o, { passive: !e.getProps()[n] })
}
class H3 extends Yn {
  mount() {
    this.unmount = In(Bg(this.node, !0), Bg(this.node, !1))
  }
  unmount() {}
}
class G3 extends Yn {
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
    this.unmount = In(
      Xr(this.node.current, 'focus', () => this.onFocus()),
      Xr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const MS = (e, t) => (t ? (e === t ? !0 : MS(e, t.parentElement)) : !1),
  et = (e) => e
function Pd(e, t) {
  if (!t) return
  const r = new PointerEvent('pointer' + e)
  t(r, fc(r))
}
class K3 extends Yn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = et),
      (this.removeEndListeners = et),
      (this.removeAccessibleListeners = et),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const n = this.node.getProps(),
          i = Jr(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c } = this.node.getProps()
              Re.update(() => {
                MS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
              })
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = Jr(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          })
        ;(this.removeEndListeners = In(i, a)), this.startPress(t, r)
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Pd('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && Re.update(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = Xr(this.node.current, 'keyup', a)),
              Pd('down', (s, l) => {
                this.startPress(s, l)
              })
          },
          r = Xr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && Pd('cancel', (i, a) => this.cancelPress(i, a))
          },
          o = Xr(this.node.current, 'blur', n)
        this.removeAccessibleListeners = In(r, o)
      })
  }
  startPress(t, r) {
    this.isPressing = !0
    const { onTapStart: n, whileTap: o } = this.node.getProps()
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      n && Re.update(() => n(t, r))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !zS()
    )
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: n } = this.node.getProps()
    n && Re.update(() => n(t, r))
  }
  mount() {
    const t = this.node.getProps(),
      r = Jr(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Xr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = In(r, n)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const Zf = new WeakMap(),
  Td = new WeakMap(),
  Y3 = (e) => {
    const t = Zf.get(e.target)
    t && t(e)
  },
  Q3 = (e) => {
    e.forEach(Y3)
  }
function X3({ root: e, ...t }) {
  const r = e || document
  Td.has(r) || Td.set(r, {})
  const n = Td.get(r),
    o = JSON.stringify(t)
  return n[o] || (n[o] = new IntersectionObserver(Q3, { root: e, ...t })), n[o]
}
function q3(e, t, r) {
  const n = X3(t)
  return (
    Zf.set(e, r),
    n.observe(e),
    () => {
      Zf.delete(e), n.unobserve(e)
    }
  )
}
const Z3 = { some: 0, all: 1 }
class J3 extends Yn {
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
        threshold: typeof o == 'number' ? o : Z3[o],
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
    return q3(this.node.current, a, s)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: r } = this.node
    ;['amount', 'margin', 'root'].some(eA(t, r)) && this.startObserver()
  }
  unmount() {}
}
function eA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r]
}
const tA = {
  inView: { Feature: J3 },
  tap: { Feature: K3 },
  focus: { Feature: G3 },
  hover: { Feature: H3 },
}
function DS(e, t) {
  if (!Array.isArray(t)) return !1
  const r = t.length
  if (r !== e.length) return !1
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
  return !0
}
function rA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.get())), t
}
function nA(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t
}
function pc(e, t, r) {
  const n = e.getProps()
  return Hp(n, t, r !== void 0 ? r : n.custom, rA(e), nA(e))
}
const oA = 'framerAppearId',
  iA = 'data-' + Wp(oA)
let aA = et,
  Gp = et
const On = (e) => e * 1e3,
  en = (e) => e / 1e3,
  sA = { current: !1 },
  LS = (e) => Array.isArray(e) && typeof e[0] == 'number'
function BS(e) {
  return !!(!e || (typeof e == 'string' && FS[e]) || LS(e) || (Array.isArray(e) && e.every(BS)))
}
const sa = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  FS = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: sa([0, 0.65, 0.55, 1]),
    circOut: sa([0.55, 0, 1, 0.45]),
    backIn: sa([0.31, 0.01, 0.66, -0.59]),
    backOut: sa([0.33, 1.53, 0.69, 0.99]),
  }
function IS(e) {
  if (e) return LS(e) ? sa(e) : Array.isArray(e) ? e.map(IS) : FS[e]
}
function lA(
  e,
  t,
  r,
  { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}
) {
  const u = { [t]: r }
  l && (u.offset = l)
  const c = IS(s)
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
const Fg = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  Ed = {},
  OS = {}
for (const e in Fg) OS[e] = () => (Ed[e] === void 0 && (Ed[e] = Fg[e]()), Ed[e])
function uA(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[n]
}
const VS = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  cA = 1e-7,
  dA = 12
function fA(e, t, r, n, o) {
  let i,
    a,
    s = 0
  do (a = t + (r - t) / 2), (i = VS(a, n, o) - e), i > 0 ? (r = a) : (t = a)
  while (Math.abs(i) > cA && ++s < dA)
  return a
}
function Cs(e, t, r, n) {
  if (e === t && r === n) return et
  const o = (i) => fA(i, 0, 1, e, r)
  return (i) => (i === 0 || i === 1 ? i : VS(o(i), t, n))
}
const hA = Cs(0.42, 0, 1, 1),
  pA = Cs(0, 0, 0.58, 1),
  NS = Cs(0.42, 0, 0.58, 1),
  mA = (e) => Array.isArray(e) && typeof e[0] != 'number',
  jS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  WS = (e) => (t) => 1 - e(1 - t),
  US = (e) => 1 - Math.sin(Math.acos(e)),
  Kp = WS(US),
  gA = jS(Kp),
  HS = Cs(0.33, 1.53, 0.69, 0.99),
  Yp = WS(HS),
  yA = jS(Yp),
  vA = (e) => ((e *= 2) < 1 ? 0.5 * Yp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  bA = {
    linear: et,
    easeIn: hA,
    easeInOut: NS,
    easeOut: pA,
    circIn: US,
    circInOut: gA,
    circOut: Kp,
    backIn: Yp,
    backInOut: yA,
    backOut: HS,
    anticipate: vA,
  },
  Ig = (e) => {
    if (Array.isArray(e)) {
      Gp(e.length === 4)
      const [t, r, n, o] = e
      return Cs(t, r, n, o)
    } else if (typeof e == 'string') return bA[e]
    return e
  },
  Qp = (e, t) => (r) =>
    !!(
      (xs(r) && y3.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  GS = (e, t, r) => (n) => {
    if (!xs(n)) return n
    const [o, i, a, s] = n.match(ls)
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    }
  },
  SA = (e) => xo(0, 255, e),
  $d = { ..._o, transform: (e) => Math.round(SA(e)) },
  lo = {
    test: Qp('rgb', 'red'),
    parse: GS('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      $d.transform(e) +
      ', ' +
      $d.transform(t) +
      ', ' +
      $d.transform(r) +
      ', ' +
      Ca(ka.transform(n)) +
      ')',
  }
function xA(e) {
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
const Jf = { test: Qp('#'), parse: xA, transform: lo.transform },
  Qo = {
    test: Qp('hsl', 'hue'),
    parse: GS('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Fr.transform(Ca(t)) +
      ', ' +
      Fr.transform(Ca(r)) +
      ', ' +
      Ca(ka.transform(n)) +
      ')',
  },
  St = {
    test: (e) => lo.test(e) || Jf.test(e) || Qo.test(e),
    parse: (e) => (lo.test(e) ? lo.parse(e) : Qo.test(e) ? Qo.parse(e) : Jf.parse(e)),
    transform: (e) => (xs(e) ? e : e.hasOwnProperty('red') ? lo.transform(e) : Qo.transform(e)),
  },
  De = (e, t, r) => -r * e + r * t + e
function Rd(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  )
}
function wA({ hue: e, saturation: t, lightness: r, alpha: n }) {
  ;(e /= 360), (t /= 100), (r /= 100)
  let o = 0,
    i = 0,
    a = 0
  if (!t) o = i = a = r
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s
    ;(o = Rd(l, s, e + 1 / 3)), (i = Rd(l, s, e)), (a = Rd(l, s, e - 1 / 3))
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  }
}
const zd = (e, t, r) => {
    const n = e * e
    return Math.sqrt(Math.max(0, r * (t * t - n) + n))
  },
  kA = [Jf, lo, Qo],
  CA = (e) => kA.find((t) => t.test(e))
function Og(e) {
  const t = CA(e)
  let r = t.parse(e)
  return t === Qo && (r = wA(r)), r
}
const KS = (e, t) => {
    const r = Og(e),
      n = Og(t),
      o = { ...r }
    return (i) => (
      (o.red = zd(r.red, n.red, i)),
      (o.green = zd(r.green, n.green, i)),
      (o.blue = zd(r.blue, n.blue, i)),
      (o.alpha = De(r.alpha, n.alpha, i)),
      lo.transform(o)
    )
  },
  YS = '${c}',
  QS = '${n}'
function _A(e) {
  var t, r
  return (
    isNaN(e) &&
    xs(e) &&
    (((t = e.match(ls)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Xf)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  )
}
function yu(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let r = 0,
    n = 0
  const o = e.match(Xf)
  o && ((r = o.length), (e = e.replace(Xf, YS)), t.push(...o.map(St.parse)))
  const i = e.match(ls)
  return (
    i && ((n = i.length), (e = e.replace(ls, QS)), t.push(...i.map(_o.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  )
}
function XS(e) {
  return yu(e).values
}
function qS(e) {
  const { values: t, numColors: r, tokenised: n } = yu(e),
    o = t.length
  return (i) => {
    let a = n
    for (let s = 0; s < o; s++)
      a = a.replace(s < r ? YS : QS, s < r ? St.transform(i[s]) : Ca(i[s]))
    return a
  }
}
const PA = (e) => (typeof e == 'number' ? 0 : e)
function TA(e) {
  const t = XS(e)
  return qS(e)(t.map(PA))
}
const Un = { test: _A, parse: XS, createTransformer: qS, getAnimatableNone: TA }
function ZS(e, t) {
  return typeof e == 'number' ? (r) => De(e, t, r) : St.test(e) ? KS(e, t) : ex(e, t)
}
const JS = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => ZS(i, t[a]))
    return (i) => {
      for (let a = 0; a < n; a++) r[a] = o[a](i)
      return r
    }
  },
  EA = (e, t) => {
    const r = { ...e, ...t },
      n = {}
    for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = ZS(e[o], t[o]))
    return (o) => {
      for (const i in n) r[i] = n[i](o)
      return r
    }
  },
  ex = (e, t) => {
    const r = Un.createTransformer(t),
      n = yu(e),
      o = yu(t)
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? In(JS(n.values, o.values), r)
      : (a) => `${a > 0 ? t : e}`
  },
  cs = (e, t, r) => {
    const n = t - e
    return n === 0 ? 1 : (r - e) / n
  },
  Vg = (e, t) => (r) => De(e, t, r)
function $A(e) {
  return typeof e == 'number'
    ? Vg
    : typeof e == 'string'
    ? St.test(e)
      ? KS
      : ex
    : Array.isArray(e)
    ? JS
    : typeof e == 'object'
    ? EA
    : Vg
}
function RA(e, t, r) {
  const n = [],
    o = r || $A(e[0]),
    i = e.length - 1
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1])
    if (t) {
      const l = Array.isArray(t) ? t[a] || et : t
      s = In(l, s)
    }
    n.push(s)
  }
  return n
}
function tx(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length
  if ((Gp(i === t.length), i === 1)) return () => t[0]
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const a = RA(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = cs(e[c], e[c + 1], u)
      return a[c](d)
    }
  return r ? (u) => l(xo(e[0], e[i - 1], u)) : l
}
function zA(e, t) {
  const r = e[e.length - 1]
  for (let n = 1; n <= t; n++) {
    const o = cs(0, t, n)
    e.push(De(r, 1, o))
  }
}
function AA(e) {
  const t = [0]
  return zA(t, e.length - 1), t
}
function MA(e, t) {
  return e.map((r) => r * t)
}
function DA(e, t) {
  return e.map(() => t || NS).splice(0, e.length - 1)
}
function vu({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
  const o = mA(n) ? n.map(Ig) : Ig(n),
    i = { done: !1, value: t[0] },
    a = MA(r && r.length === t.length ? r : AA(t), e),
    s = tx(a, t, { ease: Array.isArray(o) ? o : DA(t, o) })
  return { calculatedDuration: e, next: (l) => ((i.value = s(l)), (i.done = l >= e), i) }
}
function rx(e, t) {
  return t ? e * (1e3 / t) : 0
}
const LA = 5
function nx(e, t, r) {
  const n = Math.max(t - LA, 0)
  return rx(r - e(n), t - n)
}
const Ad = 0.001,
  BA = 0.01,
  Ng = 10,
  FA = 0.05,
  IA = 1
function OA({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i
  aA(e <= On(Ng))
  let a = 1 - t
  ;(a = xo(FA, IA, a)),
    (e = xo(BA, Ng, en(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            p = eh(u, a),
            b = Math.exp(-d)
          return Ad - (f / p) * b
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            b = Math.exp(-d),
            S = eh(Math.pow(u, 2), a)
          return ((-o(u) + Ad > 0 ? -1 : 1) * ((f - p) * b)) / S
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1
          return -Ad + c * d
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e)
          return c * d
        }))
  const s = 5 / e,
    l = NA(o, i, s)
  if (((e = On(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * n
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e }
  }
}
const VA = 12
function NA(e, t, r) {
  let n = r
  for (let o = 1; o < VA; o++) n = n - e(n) / t(n)
  return n
}
function eh(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const jA = ['duration', 'bounce'],
  WA = ['stiffness', 'damping', 'mass']
function jg(e, t) {
  return t.some((r) => e[r] !== void 0)
}
function UA(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!jg(e, WA) && jg(e, jA)) {
    const r = OA(e)
    ;(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function ox({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
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
    } = UA(n),
    p = c ? -en(c) : 0,
    b = l / (2 * Math.sqrt(s * u)),
    S = i - o,
    y = en(Math.sqrt(s / u)),
    m = Math.abs(S) < 5
  r || (r = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5)
  let h
  if (b < 1) {
    const g = eh(y, b)
    h = (w) => {
      const _ = Math.exp(-b * y * w)
      return i - _ * (((p + b * y * S) / g) * Math.sin(g * w) + S * Math.cos(g * w))
    }
  } else if (b === 1) h = (g) => i - Math.exp(-y * g) * (S + (p + y * S) * g)
  else {
    const g = y * Math.sqrt(b * b - 1)
    h = (w) => {
      const _ = Math.exp(-b * y * w),
        z = Math.min(g * w, 300)
      return i - (_ * ((p + b * y * S) * Math.sinh(z) + g * S * Math.cosh(z))) / g
    }
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (g) => {
      const w = h(g)
      if (f) a.done = g >= d
      else {
        let _ = p
        g !== 0 && (b < 1 ? (_ = nx(h, g, w)) : (_ = 0))
        const z = Math.abs(_) <= r,
          T = Math.abs(i - w) <= t
        a.done = z && T
      }
      return (a.value = a.done ? i : w), a
    },
  }
}
function Wg({
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
    p = ($) => (s !== void 0 && $ < s) || (l !== void 0 && $ > l),
    b = ($) => (s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l)
  let S = r * t
  const y = d + S,
    m = a === void 0 ? y : a(y)
  m !== y && (S = m - d)
  const h = ($) => -S * Math.exp(-$ / n),
    g = ($) => m + h($),
    w = ($) => {
      const j = h($),
        O = g($)
      ;(f.done = Math.abs(j) <= u), (f.value = f.done ? m : O)
    }
  let _, z
  const T = ($) => {
    p(f.value) &&
      ((_ = $),
      (z = ox({
        keyframes: [f.value, b(f.value)],
        velocity: nx(g, $, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })))
  }
  return (
    T(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let j = !1
        return (
          !z && _ === void 0 && ((j = !0), w($), T($)),
          _ !== void 0 && $ > _ ? z.next($ - _) : (!j && w($), f)
        )
      },
    }
  )
}
const HA = (e) => {
    const t = ({ timestamp: r }) => e(r)
    return {
      start: () => Re.update(t, !0),
      stop: () => Wn.update(t),
      now: () => (pt.isProcessing ? pt.timestamp : performance.now()),
    }
  },
  GA = { decay: Wg, inertia: Wg, tween: vu, keyframes: vu, spring: ox },
  Ug = 2e4
function Hg(e) {
  let t = 0
  const r = 50
  let n = e.next(t)
  for (; !n.done && t < Ug; ) (t += r), (n = e.next(t))
  return t >= Ug ? 1 / 0 : t
}
function bu({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = HA,
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
  let p = 1,
    b = !1,
    S,
    y
  const m = () => {
    S && S(),
      (y = new Promise((U) => {
        S = U
      }))
  }
  m()
  let h
  const g = GA[o] || vu
  let w
  g !== vu && typeof n[0] != 'number' && ((w = tx([0, 100], n, { clamp: !1 })), (n = [0, 100]))
  const _ = g({ ...f, keyframes: n })
  let z
  s === 'mirror' && (z = g({ ...f, keyframes: [...n].reverse(), velocity: -(f.velocity || 0) }))
  let T = 'idle',
    $ = null,
    j = null,
    O = null
  _.calculatedDuration === null && i && (_.calculatedDuration = Hg(_))
  const { calculatedDuration: ue } = _
  let ze = 1 / 0,
    Ve = 1 / 0
  ue !== null && ((ze = ue + a), (Ve = ze * (i + 1) - a))
  let ce = 0
  const se = (U) => {
      if (j === null) return
      p > 0 && (j = Math.min(j, U)), $ !== null ? (ce = $) : (ce = (U - j) * p)
      const ve = ce - t,
        te = ve < 0
      ;(ce = Math.max(ve, 0)), T === 'finished' && $ === null && (ce = Ve)
      let Fe = ce,
        xr = _
      if (i) {
        const dn = ce / ze
        let wr = Math.floor(dn),
          lt = dn % 1
        !lt && dn >= 1 && (lt = 1), lt === 1 && wr--, (wr = Math.min(wr, i + 1))
        const fn = !!(wr % 2)
        fn && (s === 'reverse' ? ((lt = 1 - lt), a && (lt -= a / ze)) : s === 'mirror' && (xr = z))
        let hn = xo(0, 1, lt)
        ce > Ve && (hn = s === 'reverse' && fn ? 1 : 0), (Fe = hn * ze)
      }
      const Ne = te ? { done: !1, value: n[0] } : xr.next(Fe)
      w && (Ne.value = w(Ne.value))
      let { done: Ft } = Ne
      !te && ue !== null && (Ft = ce >= Ve)
      const Ir = $ === null && (T === 'finished' || (T === 'running' && Ft) || (p < 0 && ce <= 0))
      return d && d(Ne.value), Ir && L(), Ne
    },
    Ze = () => {
      h && h.stop(), (h = void 0)
    },
    Tt = () => {
      ;(T = 'idle'), Ze(), m(), (j = O = null)
    },
    L = () => {
      ;(T = 'finished'), c && c(), Ze(), m()
    },
    Y = () => {
      if (b) return
      h || (h = r(se))
      const U = h.now()
      l && l(),
        (T = 'running'),
        $ !== null ? (j = U - $) : j || (j = U),
        (O = j),
        ($ = null),
        h.start()
    }
  e && Y()
  const V = {
    then(U, ve) {
      return y.then(U, ve)
    },
    get time() {
      return en(ce)
    },
    set time(U) {
      ;(U = On(U)), (ce = U), $ !== null || !h || p === 0 ? ($ = U) : (j = h.now() - U / p)
    },
    get duration() {
      const U = _.calculatedDuration === null ? Hg(_) : _.calculatedDuration
      return en(U)
    },
    get speed() {
      return p
    },
    set speed(U) {
      U === p || !h || ((p = U), (V.time = en(ce)))
    },
    get state() {
      return T
    },
    play: Y,
    pause: () => {
      ;(T = 'paused'), ($ = ce)
    },
    stop: () => {
      ;(b = !0), T !== 'idle' && ((T = 'idle'), u && u(), Tt())
    },
    cancel: () => {
      O !== null && se(O), Tt()
    },
    complete: () => {
      T = 'finished'
    },
    sample: (U) => ((j = 0), se(U)),
  }
  return V
}
const KA = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  dl = 10,
  YA = 2e4,
  QA = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !BS(t.ease)
function XA(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      OS.waapi() &&
      KA.has(t) &&
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
  if (QA(t, o)) {
    const S = bu({ ...o, repeat: 0, delay: 0 })
    let y = { done: !1, value: c[0] }
    const m = []
    let h = 0
    for (; !y.done && h < YA; ) (y = S.sample(h)), m.push(y.value), (h += dl)
    ;(c = m), (d = h - dl), (f = 'linear')
  }
  const p = lA(e.owner.current, t, c, { ...o, duration: d, ease: f }),
    b = () => {
      Re.update(() => p.cancel()), s(), u()
    }
  return (
    (p.onfinish = () => {
      e.set(uA(c, o)), n && n(), b()
    }),
    {
      then(S, y) {
        return l.then(S, y)
      },
      get time() {
        return en(p.currentTime || 0)
      },
      set time(S) {
        p.currentTime = On(S)
      },
      get speed() {
        return p.playbackRate
      },
      set speed(S) {
        p.playbackRate = S
      },
      get duration() {
        return en(d)
      },
      play: () => {
        a || p.play()
      },
      pause: () => p.pause(),
      stop: () => {
        if (((a = !0), p.playState === 'idle')) return
        const { currentTime: S } = p
        if (S) {
          const y = bu({ ...o, autoplay: !1 })
          e.setWithVelocity(y.sample(S - dl).value, y.sample(S).value, dl)
        }
        b()
      },
      complete: () => p.finish(),
      cancel: b,
    }
  )
}
function qA({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: et,
      pause: et,
      stop: et,
      then: (i) => (i(), Promise.resolve()),
      cancel: et,
      complete: et,
    }
  )
  return t ? bu({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o()
}
const ZA = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  JA = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eM = { type: 'keyframes', duration: 0.8 },
  tM = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  rM = (e, { keyframes: t }) =>
    t.length > 2 ? eM : Co.has(e) ? (e.startsWith('scale') ? JA(t[1]) : ZA) : tM,
  th = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && Un.test(t) && !t.startsWith('url('))
        ),
  nM = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function oM(e) {
  const [t, r] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [n] = r.match(ls) || []
  if (!n) return e
  const o = r.replace(n, '')
  let i = nM.has(t) ? 1 : 0
  return n !== r && (i *= 100), t + '(' + i + o + ')'
}
const iM = /([a-z-]*)\(.*?\)/g,
  rh = {
    ...Un,
    getAnimatableNone: (e) => {
      const t = e.match(iM)
      return t ? t.map(oM).join(' ') : e
    },
  },
  aM = {
    ...bS,
    color: St,
    backgroundColor: St,
    outlineColor: St,
    fill: St,
    stroke: St,
    borderColor: St,
    borderTopColor: St,
    borderRightColor: St,
    borderBottomColor: St,
    borderLeftColor: St,
    filter: rh,
    WebkitFilter: rh,
  },
  Xp = (e) => aM[e]
function qp(e, t) {
  let r = Xp(e)
  return r !== rh && (r = Un), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
function sM({
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
function Gg(e) {
  return e === 0 || (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
}
function Kg(e) {
  return typeof e == 'number' ? 0 : qp('', e)
}
function ix(e, t) {
  return e[t] || e.default || e
}
function lM(e, t, r, n) {
  const o = th(t, r)
  let i = n.from !== void 0 ? n.from : e.get()
  if (
    (i === 'none' && o && typeof r == 'string'
      ? (i = qp(t, r))
      : Gg(i) && typeof r == 'string'
      ? (i = Kg(r))
      : !Array.isArray(r) && Gg(r) && typeof i == 'string' && (r = Kg(i)),
    Array.isArray(r))
  ) {
    for (let a = 0; a < r.length; a++) r[a] === null && (r[a] = a === 0 ? i : r[a - 1])
    return r
  } else return [i, r]
}
const Zp =
  (e, t, r, n = {}) =>
  (o) => {
    const i = ix(n, e) || {},
      a = i.delay || n.delay || 0
    let { elapsed: s = 0 } = n
    s = s - On(a)
    const l = lM(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = th(e, u),
      f = th(e, c)
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: 'easeOut',
      ...i,
      delay: -s,
      onUpdate: (b) => {
        t.set(b), i.onUpdate && i.onUpdate(b)
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete()
      },
    }
    if (
      (sM(i) || (p = { ...p, ...rM(e, p) }),
      p.duration && (p.duration = On(p.duration)),
      p.repeatDelay && (p.repeatDelay = On(p.repeatDelay)),
      !d || !f || sA.current || i.type === !1)
    )
      return qA(p)
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const b = XA(t, e, p)
      if (b) return b
    }
    return bu(p)
  }
function Su(e) {
  return !!(Bt(e) && e.add)
}
const uM = (e) => /^\-?\d*\.?\d+$/.test(e),
  cM = (e) => /^0[^.\s]+$/.test(e)
function Jp(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function em(e, t) {
  const r = e.indexOf(t)
  r > -1 && e.splice(r, 1)
}
class tm {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return Jp(this.subscriptions, t), () => em(this.subscriptions, t)
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
const dM = (e) => !isNaN(parseFloat(e))
class fM {
  constructor(t, r = {}) {
    ;(this.version = '10.10.0'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: i, timestamp: a } = pt
        this.lastUpdated !== a &&
          ((this.timeDelta = i), (this.lastUpdated = a), Re.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => Re.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = dM(this.current)),
      (this.owner = r.owner)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new tm())
    const n = this.events[t].add(r)
    return t === 'change'
      ? () => {
          n(),
            Re.read(() => {
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
      ? rx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Si(e, t) {
  return new fM(e, t)
}
const ax = (e) => (t) => t.test(e),
  hM = { test: (e) => e === 'auto', parse: (e) => e },
  sx = [_o, K, Fr, bn, b3, v3, hM],
  Qi = (e) => sx.find(ax(e)),
  pM = [...sx, St, Un],
  mM = (e) => pM.find(ax(e))
function gM(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Si(r))
}
function yM(e, t) {
  const r = pc(e, t)
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {}
  i = { ...i, ...n }
  for (const a in i) {
    const s = M3(i[a])
    gM(e, a, s)
  }
}
function vM(e, t, r) {
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
          (typeof c == 'string' && (uM(c) || cM(c))
            ? (c = parseFloat(c))
            : !mM(c) && Un.test(u) && (c = qp(l, u)),
          e.addValue(l, Si(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c))
    }
}
function bM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function SM(e, t, r) {
  const n = {}
  for (const o in e) {
    const i = bM(o, t)
    if (i !== void 0) n[o] = i
    else {
      const a = r.getValue(o)
      a && (n[o] = a.get())
    }
  }
  return n
}
function xM({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0
  return (t[r] = !1), n
}
function lx(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
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
      p = s[d]
    if (!f || p === void 0 || (c && xM(c, d))) continue
    const b = { delay: r, elapsed: 0, ...i }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const y = e.getProps()[iA]
      y && (b.elapsed = window.HandoffAppearAnimations(y, d, f, Re))
    }
    f.start(Zp(d, f, p, e.shouldReduceMotion && Co.has(d) ? { type: !1 } : b))
    const S = f.animation
    Su(l) && (l.add(d), S.then(() => l.remove(d))), u.push(S)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && yM(e, a)
      }),
    u
  )
}
function nh(e, t, r = {}) {
  const n = pc(e, t, r.custom)
  let { transition: o = e.getDefaultTransition() || {} } = n || {}
  r.transitionOverride && (o = r.transitionOverride)
  const i = n ? () => Promise.all(lx(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o
            return wM(e, t, u + l, c, d, r)
          }
        : () => Promise.resolve(),
    { when: s } = o
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i]
    return l().then(() => u())
  } else return Promise.all([i(), a(r.delay)])
}
function wM(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n
  return (
    Array.from(e.variantChildren)
      .sort(kM)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(nh(u, t, { ...i, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(a)
  )
}
function kM(e, t) {
  return e.sortNodePosition(t)
}
function CM(e, t, r = {}) {
  e.notify('AnimationStart', t)
  let n
  if (Array.isArray(t)) {
    const o = t.map((i) => nh(e, i, r))
    n = Promise.all(o)
  } else if (typeof t == 'string') n = nh(e, t, r)
  else {
    const o = typeof t == 'function' ? pc(e, t, r.custom) : t
    n = Promise.all(lx(e, o, r))
  }
  return n.then(() => e.notify('AnimationComplete', t))
}
const _M = [...Dp].reverse(),
  PM = Dp.length
function TM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => CM(e, r, n)))
}
function EM(e) {
  let t = TM(e)
  const r = RM()
  let n = !0
  const o = (l, u) => {
    const c = pc(e, u)
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c
      l = { ...l, ...p, ...f }
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
      p = new Set()
    let b = {},
      S = 1 / 0
    for (let m = 0; m < PM; m++) {
      const h = _M[m],
        g = r[h],
        w = c[h] !== void 0 ? c[h] : d[h],
        _ = as(w),
        z = h === u ? g.isActive : null
      z === !1 && (S = m)
      let T = w === d[h] && w !== c[h] && _
      if (
        (T && n && e.manuallyAnimateOnMount && (T = !1),
        (g.protectedKeys = { ...b }),
        (!g.isActive && z === null) || (!w && !g.prevProp) || uc(w) || typeof w == 'boolean')
      )
        continue
      const $ = $M(g.prevProp, w)
      let j = $ || (h === u && g.isActive && !T && _) || (m > S && _)
      const O = Array.isArray(w) ? w : [w]
      let ue = O.reduce(o, {})
      z === !1 && (ue = {})
      const { prevResolvedValues: ze = {} } = g,
        Ve = { ...ze, ...ue },
        ce = (se) => {
          ;(j = !0), p.delete(se), (g.needsAnimating[se] = !0)
        }
      for (const se in Ve) {
        const Ze = ue[se],
          Tt = ze[se]
        b.hasOwnProperty(se) ||
          (Ze !== Tt
            ? gu(Ze) && gu(Tt)
              ? !DS(Ze, Tt) || $
                ? ce(se)
                : (g.protectedKeys[se] = !0)
              : Ze !== void 0
              ? ce(se)
              : p.add(se)
            : Ze !== void 0 && p.has(se)
            ? ce(se)
            : (g.protectedKeys[se] = !0))
      }
      ;(g.prevProp = w),
        (g.prevResolvedValues = ue),
        g.isActive && (b = { ...b, ...ue }),
        n && e.blockInitialAnimation && (j = !1),
        j && !T && f.push(...O.map((se) => ({ animation: se, options: { type: h, ...l } })))
    }
    if (p.size) {
      const m = {}
      p.forEach((h) => {
        const g = e.getBaseTarget(h)
        g !== void 0 && (m[h] = g)
      }),
        f.push({ animation: m })
    }
    let y = !!f.length
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (y = !1),
      (n = !1),
      y ? t(f) : Promise.resolve()
    )
  }
  function s(l, u, c) {
    var d
    if (r[l].isActive === u) return Promise.resolve()
    ;(d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((p) => {
        var b
        return (b = p.animationState) === null || b === void 0 ? void 0 : b.setActive(l, u)
      }),
      (r[l].isActive = u)
    const f = a(c, l)
    for (const p in r) r[p].protectedKeys = {}
    return f
  }
  return { animateChanges: a, setActive: s, setAnimateFunction: i, getState: () => r }
}
function $M(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !DS(t, e) : !1
}
function Zn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function RM() {
  return {
    animate: Zn(!0),
    whileInView: Zn(),
    whileHover: Zn(),
    whileTap: Zn(),
    whileDrag: Zn(),
    whileFocus: Zn(),
    exit: Zn(),
  }
}
class zM extends Yn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = EM(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), uc(t) && (this.unmount = t.subscribe(this.node))
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
let AM = 0
class MM extends Yn {
  constructor() {
    super(...arguments), (this.id = AM++)
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
const DM = { animation: { Feature: zM }, exit: { Feature: MM } },
  Yg = (e, t) => Math.abs(e - t)
function LM(e, t) {
  const r = Yg(e.x, t.x),
    n = Yg(e.y, t.y)
  return Math.sqrt(r ** 2 + n ** 2)
}
class ux {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = Dd(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = LM(u.offset, { x: 0, y: 0 }) >= 3
        if (!c && !d) return
        const { point: f } = u,
          { timestamp: p } = pt
        this.history.push({ ...f, timestamp: p })
        const { onStart: b, onMove: S } = this.handlers
        c || (b && b(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
          S && S(this.lastMoveEvent, u)
      }),
      (this.handlePointerMove = (u, c) => {
        ;(this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Md(c, this.transformPagePoint)),
          Re.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          p = Dd(
            u.type === 'pointercancel' ? this.lastMoveEventInfo : Md(c, this.transformPagePoint),
            this.history
          )
        this.startEvent && d && d(u, p), f && f(u, p)
      }),
      !ES(t))
    )
      return
    ;(this.handlers = r), (this.transformPagePoint = n)
    const o = fc(t),
      i = Md(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = pt
    this.history = [{ ...a, timestamp: s }]
    const { onSessionStart: l } = r
    l && l(t, Dd(i, this.history)),
      (this.removeListeners = In(
        Jr(window, 'pointermove', this.handlePointerMove),
        Jr(window, 'pointerup', this.handlePointerUp),
        Jr(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), Wn.update(this.updatePoint)
  }
}
function Md(e, t) {
  return t ? { point: t(e.point) } : e
}
function Qg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function Dd({ point: e }, t) {
  return { point: e, delta: Qg(e, cx(t)), offset: Qg(e, BM(t)), velocity: FM(t, 0.1) }
}
function BM(e) {
  return e[0]
}
function cx(e) {
  return e[e.length - 1]
}
function FM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let r = e.length - 1,
    n = null
  const o = cx(e)
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > On(t))); ) r--
  if (!n) return { x: 0, y: 0 }
  const i = en(o.timestamp - n.timestamp)
  if (i === 0) return { x: 0, y: 0 }
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function Qt(e) {
  return e.max - e.min
}
function oh(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r
}
function Xg(e, t, r, n = 0.5) {
  ;(e.origin = n),
    (e.originPoint = De(t.min, t.max, e.origin)),
    (e.scale = Qt(r) / Qt(t)),
    (oh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = De(r.min, r.max, e.origin) - e.originPoint),
    (oh(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function _a(e, t, r, n) {
  Xg(e.x, t.x, r.x, n ? n.originX : void 0), Xg(e.y, t.y, r.y, n ? n.originY : void 0)
}
function qg(e, t, r) {
  ;(e.min = r.min + t.min), (e.max = e.min + Qt(t))
}
function IM(e, t, r) {
  qg(e.x, t.x, r.x), qg(e.y, t.y, r.y)
}
function Zg(e, t, r) {
  ;(e.min = t.min - r.min), (e.max = e.min + Qt(t))
}
function Pa(e, t, r) {
  Zg(e.x, t.x, r.x), Zg(e.y, t.y, r.y)
}
function OM(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? De(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? De(r, e, n.max) : Math.min(e, r)),
    e
  )
}
function Jg(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  }
}
function VM(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: Jg(e.x, r, o), y: Jg(e.y, t, n) }
}
function ey(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
}
function NM(e, t) {
  return { x: ey(e.x, t.x), y: ey(e.y, t.y) }
}
function jM(e, t) {
  let r = 0.5
  const n = Qt(e),
    o = Qt(t)
  return (
    o > n ? (r = cs(t.min, t.max - n, e.min)) : n > o && (r = cs(e.min, e.max - o, t.min)),
    xo(0, 1, r)
  )
}
function WM(e, t) {
  const r = {}
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
}
const ih = 0.35
function UM(e = ih) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ih),
    { x: ty(e, 'left', 'right'), y: ty(e, 'top', 'bottom') }
  )
}
function ty(e, t, r) {
  return { min: ry(e, t), max: ry(e, r) }
}
function ry(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const ny = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ta = () => ({ x: ny(), y: ny() }),
  oy = () => ({ min: 0, max: 0 }),
  Ue = () => ({ x: oy(), y: oy() })
function Pr(e) {
  return [e('x'), e('y')]
}
function dx({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } }
}
function HM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function GM(e, t) {
  if (!t) return e
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom })
  return { top: r.y, left: r.x, bottom: n.y, right: n.x }
}
function Ld(e) {
  return e === void 0 || e === 1
}
function ah({ scale: e, scaleX: t, scaleY: r }) {
  return !Ld(e) || !Ld(t) || !Ld(r)
}
function to(e) {
  return ah(e) || fx(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function fx(e) {
  return iy(e.x) || iy(e.y)
}
function iy(e) {
  return e && e !== '0%'
}
function xu(e, t, r) {
  const n = e - r,
    o = t * n
  return r + o
}
function ay(e, t, r, n, o) {
  return o !== void 0 && (e = xu(e, o, n)), xu(e, r, n) + t
}
function sh(e, t = 0, r = 1, n, o) {
  ;(e.min = ay(e.min, t, r, n, o)), (e.max = ay(e.max, t, r, n, o))
}
function hx(e, { x: t, y: r }) {
  sh(e.x, t.translate, t.scale, t.originPoint), sh(e.y, r.translate, r.scale, r.originPoint)
}
function KM(e, t, r, n = !1) {
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
        Xo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), hx(e, a)),
      n && to(i.latestValues) && Xo(e, i.latestValues))
  }
  ;(t.x = sy(t.x)), (t.y = sy(t.y))
}
function sy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function wn(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function ly(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = De(e.min, e.max, i)
  sh(e, t[r], t[n], a, t.scale)
}
const YM = ['x', 'scaleX', 'originX'],
  QM = ['y', 'scaleY', 'originY']
function Xo(e, t) {
  ly(e.x, t, YM), ly(e.y, t, QM)
}
function px(e, t) {
  return dx(GM(e.getBoundingClientRect(), t))
}
function XM(e, t, r) {
  const n = px(e, r),
    { scroll: o } = t
  return o && (wn(n.x, o.offset.x), wn(n.y, o.offset.y)), n
}
const qM = new WeakMap()
class ZM {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ue()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement
    if (n && n.isPresent === !1) return
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(fc(l, 'page').point)
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps()
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = RS(c)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Pr((b) => {
            let S = this.getAxisMotionValue(b).get() || 0
            if (Fr.test(S)) {
              const { projection: y } = this.visualElement
              if (y && y.layout) {
                const m = y.layout.layoutBox[b]
                m && (S = Qt(m) * (parseFloat(S) / 100))
              }
            }
            this.originPoint[b] = S
          }),
          f && Re.update(() => f(l, u))
        const { animationState: p } = this.visualElement
        p && p.setActive('whileDrag', !0)
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: p,
        } = this.getProps()
        if (!c && !this.openGlobalLock) return
        const { offset: b } = u
        if (d && this.currentDirection === null) {
          ;(this.currentDirection = JM(b)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, b),
          this.updateAxis('y', u.point, b),
          this.visualElement.render(),
          p && p(l, u)
      },
      s = (l, u) => this.stop(l, u)
    this.panSession = new ux(
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
    i && Re.update(() => i(t, r))
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
    if (!n || !fl(t, o, this.currentDirection)) return
    const i = this.getAxisMotionValue(t)
    let a = this.originPoint[t] + n[t]
    this.constraints && this.constraints[t] && (a = OM(a, this.constraints[t], this.elastic[t])),
      i.set(a)
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints
    t && Yo(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = VM(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = UM(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Pr((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = WM(n.layoutBox[i], this.constraints[i]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps()
    if (!t || !Yo(t)) return !1
    const n = t.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const i = XM(n, o.root, this.visualElement.getTransformPagePoint())
    let a = NM(o.layout.layoutBox, i)
    if (r) {
      const s = r(HM(a))
      ;(this.hasMutatedConstraints = !!s), s && (a = dx(s))
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
      u = Pr((c) => {
        if (!fl(c, r, this.currentDirection)) return
        let d = (l && l[c]) || {}
        a && (d = { min: 0, max: 0 })
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          b = {
            type: 'inertia',
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          }
        return this.startAxisValueAnimation(c, b)
      })
    return Promise.all(u).then(s)
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t)
    return n.start(Zp(t, n, 0, r))
  }
  stopAnimation() {
    Pr((t) => this.getAxisMotionValue(t).stop())
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r]
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Pr((r) => {
      const { drag: n } = this.getProps()
      if (!fl(r, n, this.currentDirection)) return
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r)
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r]
        i.set(t[r] - De(a, s, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement
    if (!Yo(r) || !n || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    Pr((a) => {
      const s = this.getAxisMotionValue(a)
      if (s) {
        const l = s.get()
        o[a] = jM({ min: l, max: l }, this.constraints[a])
      }
    })
    const { transformTemplate: i } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Pr((a) => {
        if (!fl(a, t, null)) return
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a]
        s.set(De(l, u, o[a]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    qM.set(this.visualElement, this)
    const t = this.visualElement.current,
      r = Jr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps()
        Yo(l) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n()
    const a = Xr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Pr((c) => {
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
        dragElastic: a = ih,
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
function fl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e)
}
function JM(e, t = 10) {
  let r = null
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r
}
class eD extends Yn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = et),
      (this.removeListeners = et),
      (this.controls = new ZM(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || et)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const uy = (e) => (t, r) => {
  e && Re.update(() => e(t, r))
}
class tD extends Yn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = et)
  }
  onPointerDown(t) {
    this.session = new ux(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: uy(t),
      onStart: uy(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && Re.update(() => o(i, a))
      },
    }
  }
  mount() {
    this.removePointerDownListener = Jr(this.node.current, 'pointerdown', (t) =>
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
function rD() {
  const e = x.useContext(Ss)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = x.useId()
  return x.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0]
}
function nD() {
  return oD(x.useContext(Ss))
}
function oD(e) {
  return e === null ? !0 : e.isPresent
}
function cy(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Xi = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (K.test(e)) e = parseFloat(e)
        else return e
      const r = cy(e, t.target.x),
        n = cy(e, t.target.y)
      return `${r}% ${n}%`
    },
  },
  mx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function iD(e) {
  const t = mx.exec(e)
  if (!t) return [,]
  const [, r, n] = t
  return [r, n]
}
function lh(e, t, r = 1) {
  const [n, o] = iD(e)
  if (!n) return
  const i = window.getComputedStyle(t).getPropertyValue(n)
  return i ? i.trim() : Qf(o) ? lh(o, t, r + 1) : o
}
function aD(e, { ...t }, r) {
  const n = e.current
  if (!(n instanceof Element)) return { target: t, transitionEnd: r }
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get()
      if (!Qf(i)) return
      const a = lh(i, n)
      a && o.set(a)
    })
  for (const o in t) {
    const i = t[o]
    if (!Qf(i)) continue
    const a = lh(i, n)
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i))
  }
  return { target: t, transitionEnd: r }
}
const dy = '_$css',
  sD = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = []
      o && (e = e.replace(mx, (p) => (i.push(p), dy)))
      const a = Un.parse(e)
      if (a.length > 5) return n
      const s = Un.createTransformer(e),
        l = typeof a[0] != 'number' ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y
      ;(a[0 + l] /= u), (a[1 + l] /= c)
      const d = De(u, c, 0.5)
      typeof a[2 + l] == 'number' && (a[2 + l] /= d), typeof a[3 + l] == 'number' && (a[3 + l] /= d)
      let f = s(a)
      if (o) {
        let p = 0
        f = f.replace(dy, () => {
          const b = i[p]
          return p++, b
        })
      }
      return f
    },
  }
class lD extends zt.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
      { projection: i } = t
    f3(uD),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (wa.hasEverUpdated = !0)
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
              Re.postRender(() => {
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
function gx(e) {
  const [t, r] = rD(),
    n = x.useContext(Fp)
  return zt.createElement(lD, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: x.useContext(mS),
    isPresent: t,
    safeToRemove: r,
  })
}
const uD = {
    borderRadius: {
      ...Xi,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Xi,
    borderTopRightRadius: Xi,
    borderBottomLeftRadius: Xi,
    borderBottomRightRadius: Xi,
    boxShadow: sD,
  },
  yx = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  cD = yx.length,
  fy = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  hy = (e) => typeof e == 'number' || K.test(e)
function dD(e, t, r, n, o, i) {
  o
    ? ((e.opacity = De(0, r.opacity !== void 0 ? r.opacity : 1, fD(n))),
      (e.opacityExit = De(t.opacity !== void 0 ? t.opacity : 1, 0, hD(n))))
    : i &&
      (e.opacity = De(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ))
  for (let a = 0; a < cD; a++) {
    const s = `border${yx[a]}Radius`
    let l = py(t, s),
      u = py(r, s)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || hy(l) === hy(u)
        ? ((e[s] = Math.max(De(fy(l), fy(u), n), 0)), (Fr.test(u) || Fr.test(l)) && (e[s] += '%'))
        : (e[s] = u)
  }
  ;(t.rotate || r.rotate) && (e.rotate = De(t.rotate || 0, r.rotate || 0, n))
}
function py(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const fD = vx(0, 0.5, Kp),
  hD = vx(0.5, 0.95, et)
function vx(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(cs(e, t, n)))
}
function my(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function nr(e, t) {
  my(e.x, t.x), my(e.y, t.y)
}
function gy(e, t, r, n, o) {
  return (e -= t), (e = xu(e, 1 / r, n)), o !== void 0 && (e = xu(e, 1 / o, n)), e
}
function pD(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (Fr.test(t) && ((t = parseFloat(t)), (t = De(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return
  let s = De(i.min, i.max, n)
  e === i && (s -= t), (e.min = gy(e.min, t, r, s, o)), (e.max = gy(e.max, t, r, s, o))
}
function yy(e, t, [r, n, o], i, a) {
  pD(e, t[r], t[n], t[o], t.scale, i, a)
}
const mD = ['x', 'scaleX', 'originX'],
  gD = ['y', 'scaleY', 'originY']
function vy(e, t, r, n) {
  yy(e.x, t, mD, r ? r.x : void 0, n ? n.x : void 0),
    yy(e.y, t, gD, r ? r.y : void 0, n ? n.y : void 0)
}
function by(e) {
  return e.translate === 0 && e.scale === 1
}
function bx(e) {
  return by(e.x) && by(e.y)
}
function uh(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function Sy(e) {
  return Qt(e.x) / Qt(e.y)
}
class yD {
  constructor() {
    this.members = []
  }
  add(t) {
    Jp(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((em(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
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
function xy(e, t, r) {
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
const vD = (e, t) => e.depth - t.depth
class bD {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    Jp(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    em(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(vD), (this.isDirty = !1), this.children.forEach(t)
  }
}
function SD(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r
      i >= t && (Wn.read(n), e(i - t))
    }
  return Re.read(n, !0), () => Wn.read(n)
}
function xD(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function wD(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function kD(e, t, r) {
  const n = Bt(e) ? e : Si(e)
  return n.start(Zp('', n, t, r)), n.animation
}
const wy = ['', 'X', 'Y', 'Z'],
  ky = 1e3
let CD = 0
const ro = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function Sx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = CD++),
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
          ;(ro.totalNodes = ro.resolvedTargetDeltas = ro.recalculatedProjection = 0),
            this.nodes.forEach(TD),
            this.nodes.forEach(zD),
            this.nodes.forEach(AD),
            this.nodes.forEach(ED),
            xD(ro)
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
      this.root === this && (this.nodes = new bD())
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new tm()),
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
      ;(this.isSVG = wD(a)), (this.instance = a)
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
            (d = SD(f, 250)),
            wa.hasAnimatedSinceResize && ((wa.hasAnimatedSinceResize = !1), this.nodes.forEach(_y))
        })
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: b }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const S = this.options.transition || c.getDefaultTransition() || FD,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: m } = c.getProps(),
                h = !this.targetLayout || !uh(this.targetLayout, b) || p,
                g = !f && p
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g)
                const w = { ...ix(S, 'layout'), onPlay: y, onComplete: m }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                !f && this.animationProgress === 0 && _y(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = b
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const a = this.getStack()
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Wn.preRender(this.updateProjection)
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(MD), this.animationId++)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Cy)
        return
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size && (this.potentialNodes.forEach(ID), this.potentialNodes.clear()),
        this.nodes.forEach(RD),
        this.nodes.forEach(_D),
        this.nodes.forEach(PD),
        this.clearAllSnapshots(),
        _d.update(),
        _d.preRender(),
        _d.render())
    }
    clearAllSnapshots() {
      this.nodes.forEach($D), this.sharedNodes.forEach(DD)
    }
    scheduleUpdateProjection() {
      Re.preRender(this.updateProjection, !1, !0)
    }
    scheduleCheckAfterUnmount() {
      Re.postRender(() => {
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
        (this.layoutCorrected = Ue()),
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
        s = this.projectionDelta && !bx(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      a &&
        (s || to(this.latestValues) || c) &&
        (o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(a = !0) {
      const s = this.measurePageBox()
      let l = this.removeElementScroll(s)
      return (
        a && (l = this.removeTransform(l)),
        OD(l),
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
      if (!a) return Ue()
      const s = a.measureViewportBox(),
        { scroll: l } = this.root
      return l && (wn(s.x, l.offset.x), wn(s.y, l.offset.y)), s
    }
    removeElementScroll(a) {
      const s = Ue()
      nr(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            nr(s, a)
            const { scroll: f } = this.root
            f && (wn(s.x, -f.offset.x), wn(s.y, -f.offset.y))
          }
          wn(s.x, c.offset.x), wn(s.y, c.offset.y)
        }
      }
      return s
    }
    applyTransform(a, s = !1) {
      const l = Ue()
      nr(l, a)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Xo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          to(c.latestValues) && Xo(l, c.latestValues)
      }
      return to(this.latestValues) && Xo(l, this.latestValues), l
    }
    removeTransform(a) {
      const s = Ue()
      nr(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !to(u.latestValues)) continue
        ah(u.latestValues) && u.updateSnapshot()
        const c = Ue(),
          d = u.measurePageBox()
        nr(c, d), vy(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return to(this.latestValues) && vy(s, this.latestValues), s
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
          ((this.resolvedRelativeTargetAt = pt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent()
          p && p.layout
            ? ((this.relativeParent = p),
              (this.relativeTarget = Ue()),
              (this.relativeTargetOrigin = Ue()),
              Pa(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
              nr(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ue()), (this.targetWithTransforms = Ue())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !== pt.timestamp &&
                  this.relativeParent.resolveTargetDelta(!0),
                IM(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : nr(this.target, this.layout.layoutBox),
                hx(this.target, this.targetDelta))
              : nr(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const p = this.getClosestProjectingParent()
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target
              ? ((this.relativeParent = p),
                (this.relativeTarget = Ue()),
                (this.relativeTargetOrigin = Ue()),
                Pa(this.relativeTargetOrigin, this.target, p.target),
                nr(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          ro.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ah(this.parent.latestValues) || fx(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === pt.timestamp && (u = !1),
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
      nr(this.layoutCorrected, this.layout.layoutBox),
        KM(this.layoutCorrected, this.treeScale, this.path, l)
      const { target: f } = s
      if (!f) return
      this.projectionDelta ||
        ((this.projectionDelta = Ta()), (this.projectionDeltaWithTransform = Ta()))
      const p = this.treeScale.x,
        b = this.treeScale.y,
        S = this.projectionTransform
      _a(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = xy(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== S || this.treeScale.x !== p || this.treeScale.y !== b) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        ro.recalculatedProjection++
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
        d = Ta()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s)
      const f = Ue(),
        p = l ? l.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        S = p !== b,
        y = this.getStack(),
        m = !y || y.members.length <= 1,
        h = !!(S && !m && this.options.crossfade === !0 && !this.path.some(BD))
      this.animationProgress = 0
      let g
      ;(this.mixTargetDelta = (w) => {
        const _ = w / 1e3
        Py(d.x, a.x, _),
          Py(d.y, a.y, _),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            LD(this.relativeTarget, this.relativeTargetOrigin, f, _),
            g && uh(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ue()),
            nr(g, this.relativeTarget)),
          S && ((this.animationValues = c), dD(c, u, this.latestValues, _, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = _)
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
          (Wn.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Re.update(() => {
          ;(wa.hasAnimatedSinceResize = !0),
            (this.currentAnimation = kD(0, ky, {
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
        (this.mixTargetDelta && this.mixTargetDelta(ky), this.currentAnimation.stop()),
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
          xx(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ue()
          const d = Qt(this.layout.layoutBox.x)
          ;(l.x.min = a.target.x.min), (l.x.max = l.x.min + d)
          const f = Qt(this.layout.layoutBox.y)
          ;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
        }
        nr(s, l), Xo(s, c), _a(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new yD()), this.sharedNodes.get(a).add(s)
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
      for (let c = 0; c < wy.length; c++) {
        const d = 'rotate' + wy[c]
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
          (u.pointerEvents = Dl(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {}
        return (
          this.options.layoutId &&
            ((S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (S.pointerEvents = Dl(a.pointerEvents) || '')),
          this.hasProjected &&
            !to(this.latestValues) &&
            ((S.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          S
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = xy(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (u.transform = c(f, u.transform))
      const { x: p, y: b } = this.projectionDelta
      ;(u.transformOrigin = `${p.origin * 100}% ${b.origin * 100}% 0`),
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
      for (const S in pu) {
        if (f[S] === void 0) continue
        const { correct: y, applyTo: m } = pu[S],
          h = u.transform === 'none' ? f[S] : y(f[S], d)
        if (m) {
          const g = m.length
          for (let w = 0; w < g; w++) u[m[w]] = h
        } else u[S] = h
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Dl(a.pointerEvents) || '' : 'none'),
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
        this.root.nodes.forEach(Cy),
        this.root.sharedNodes.clear()
    }
  }
}
function _D(e) {
  e.updateLayout()
}
function PD(e) {
  var t
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source
    i === 'size'
      ? Pr((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            p = Qt(f)
          ;(f.min = n[d].min), (f.max = f.min + p)
        })
      : xx(i, r.layoutBox, n) &&
        Pr((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            p = Qt(n[d])
          ;(f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + p))
        })
    const s = Ta()
    _a(s, n, r.layoutBox)
    const l = Ta()
    a ? _a(l, e.applyTransform(o, !0), r.measuredBox) : _a(l, n, r.layoutBox)
    const u = !bx(s)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d
        if (f && p) {
          const b = Ue()
          Pa(b, r.layoutBox, f.layoutBox)
          const S = Ue()
          Pa(S, n, p.layoutBox),
            uh(b, S) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = S), (e.relativeTargetOrigin = b), (e.relativeParent = d))
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
function TD(e) {
  ro.totalNodes++,
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
function ED(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function $D(e) {
  e.clearSnapshot()
}
function Cy(e) {
  e.clearMeasurements()
}
function RD(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function _y(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0)
}
function zD(e) {
  e.resolveTargetDelta()
}
function AD(e) {
  e.calcProjection()
}
function MD(e) {
  e.resetRotation()
}
function DD(e) {
  e.removeLeadSnapshot()
}
function Py(e, t, r) {
  ;(e.translate = De(t.translate, 0, r)),
    (e.scale = De(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function Ty(e, t, r, n) {
  ;(e.min = De(t.min, r.min, n)), (e.max = De(t.max, r.max, n))
}
function LD(e, t, r, n) {
  Ty(e.x, t.x, r.x, n), Ty(e.y, t.y, r.y, n)
}
function BD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const FD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function ID(e, t) {
  let r = e.root
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i]
      break
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`)
  o && e.mount(o, !0)
}
function Ey(e) {
  ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function OD(e) {
  Ey(e.x), Ey(e.y)
}
function xx(e, t, r) {
  return e === 'position' || (e === 'preserve-aspect' && !oh(Sy(t), Sy(r), 0.2))
}
const VD = Sx({
    attachResizeListener: (e, t) => Xr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Bd = { current: void 0 },
  wx = Sx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Bd.current) {
        const e = new VD(0, {})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Bd.current = e)
      }
      return Bd.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  ND = { pan: { Feature: tD }, drag: { Feature: eD, ProjectionNode: wx, MeasureLayout: gx } },
  jD = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  kx = (e) => jD.has(e),
  WD = (e) => Object.keys(e).some(kx),
  $y = (e) => e === _o || e === K,
  Ry = (e, t) => parseFloat(e.split(', ')[t]),
  zy =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const o = n.match(/^matrix3d\((.+)\)$/)
      if (o) return Ry(o[1], t)
      {
        const i = n.match(/^matrix\((.+)\)$/)
        return i ? Ry(i[1], e) : 0
      }
    },
  UD = new Set(['x', 'y', 'z']),
  HD = dc.filter((e) => !UD.has(e))
function GD(e) {
  const t = []
  return (
    HD.forEach((r) => {
      const n = e.getValue(r)
      n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const Ay = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: zy(4, 13),
    y: zy(5, 14),
  },
  KD = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {}
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach((u) => {
        s[u] = Ay[u](n, i)
      }),
      t.render()
    const l = t.measureViewportBox()
    return (
      r.forEach((u) => {
        const c = t.getValue(u)
        c && c.jump(s[u]), (e[u] = Ay[u](l, i))
      }),
      e
    )
  },
  YD = (e, t, r = {}, n = {}) => {
    ;(t = { ...t }), (n = { ...n })
    const o = Object.keys(t).filter(kx)
    let i = [],
      a = !1
    const s = []
    if (
      (o.forEach((l) => {
        const u = e.getValue(l)
        if (!e.hasValue(l)) return
        let c = r[l],
          d = Qi(c)
        const f = t[l]
        let p
        if (gu(f)) {
          const b = f.length,
            S = f[0] === null ? 1 : 0
          ;(c = f[S]), (d = Qi(c))
          for (let y = S; y < b; y++) p ? Gp(Qi(f[y]) === p) : (p = Qi(f[y]))
        } else p = Qi(f)
        if (d !== p)
          if ($y(d) && $y(p)) {
            const b = u.get()
            typeof b == 'string' && u.set(parseFloat(b)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && p === K && (t[l] = f.map(parseFloat))
          } else
            d != null && d.transform && p != null && p.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = GD(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f))
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = KD(t, e, s)
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d)
          }),
        e.render(),
        lc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      )
    } else return { target: t, transitionEnd: n }
  }
function QD(e, t, r, n) {
  return WD(t) ? YD(e, t, r, n) : { target: t, transitionEnd: n }
}
const XD = (e, t, r, n) => {
    const o = aD(e, t, n)
    return (t = o.target), (n = o.transitionEnd), QD(e, t, r, n)
  },
  ch = { current: null },
  Cx = { current: !1 }
function qD() {
  if (((Cx.current = !0), !!lc))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (ch.current = e.matches)
      e.addListener(t), t()
    } else ch.current = !1
}
function ZD(e, t, r) {
  const { willChange: n } = t
  for (const o in t) {
    const i = t[o],
      a = r[o]
    if (Bt(i)) e.addValue(o, i), Su(n) && n.add(o)
    else if (Bt(a)) e.addValue(o, Si(i, { owner: e })), Su(n) && n.remove(o)
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o)
        !s.hasAnimated && s.set(i)
      } else {
        const s = e.getStaticValue(o)
        e.addValue(o, Si(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o)
  return t
}
const My = new WeakMap(),
  _x = Object.keys(ss),
  JD = _x.length,
  Dy = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  eL = Lp.length
class tL {
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
      (this.scheduleRender = () => Re.render(this.render, !1, !0))
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
      (this.isControllingVariants = cc(r)),
      (this.isVariantNode = pS(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {})
    for (const d in c) {
      const f = c[d]
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Su(u) && u.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      My.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      Cx.current || qD(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : ch.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    My.delete(this.current),
      this.projection && this.projection.unmount(),
      Wn.update(this.notifyUpdate),
      Wn.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, r) {
    const n = Co.has(t),
      o = r.on('change', (a) => {
        ;(this.latestValues[t] = a),
          this.props.onUpdate && Re.update(this.notifyUpdate, !1, !0),
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
    for (let u = 0; u < JD; u++) {
      const c = _x[u],
        { isEnabled: d, Feature: f, ProjectionNode: p, MeasureLayout: b } = ss[c]
      p && (s = p),
        d(r) && (!this.features[c] && f && (this.features[c] = new f(this)), b && (l = b))
    }
    if (!this.projection && s) {
      this.projection = new s(i, this.latestValues, this.parent && this.parent.projection)
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: p,
        layoutRoot: b,
      } = r
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && Yo(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == 'string' ? c : 'both',
        initialPromotionConfig: a,
        layoutScroll: p,
        layoutRoot: b,
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ue()
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
    for (let n = 0; n < Dy.length; n++) {
      const o = Dy[n]
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
      const i = t['on' + o]
      i && (this.propEventSubscriptions[o] = this.on(o, i))
    }
    ;(this.prevMotionValues = ZD(
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
    for (let n = 0; n < eL; n++) {
      const o = Lp[n],
        i = this.props[o]
      ;(as(i) || i === !1) && (r[o] = i)
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
    return n === void 0 && r !== void 0 && ((n = Si(r, { owner: this })), this.addValue(t, n)), n
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
          ? (r = Hp(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0
    if (n && o !== void 0) return o
    const i = this.getBaseTargetFromProps(this.props, t)
    return i !== void 0 && !Bt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new tm()), this.events[t].add(r)
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r)
  }
}
class Px extends tL {
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
    let a = SM(n, t || {}, this)
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      vM(this, n, a)
      const s = XD(this, n, a, r)
      ;(r = s.transitionEnd), (n = s.target)
    }
    return { transition: t, transitionEnd: r, ...n }
  }
}
function rL(e) {
  return window.getComputedStyle(e)
}
class nL extends Px {
  readValueFromInstance(t, r) {
    if (Co.has(r)) {
      const n = Xp(r)
      return (n && n.default) || 0
    } else {
      const n = rL(t),
        o = (vS(r) ? n.getPropertyValue(r) : n[r]) || 0
      return typeof o == 'string' ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return px(t, r)
  }
  build(t, r, n, o) {
    Op(t, r, n, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, r) {
    return Up(t, r)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    Bt(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`)
      }))
  }
  renderInstance(t, r, n, o) {
    kS(t, r, n, o)
  }
}
class oL extends Px {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, r) {
    return t[r]
  }
  readValueFromInstance(t, r) {
    if (Co.has(r)) {
      const n = Xp(r)
      return (n && n.default) || 0
    }
    return (r = CS.has(r) ? r : Wp(r)), t.getAttribute(r)
  }
  measureInstanceViewportBox() {
    return Ue()
  }
  scrapeMotionValuesFromProps(t, r) {
    return PS(t, r)
  }
  build(t, r, n, o) {
    Np(t, r, n, this.isSVGTag, o.transformTemplate)
  }
  renderInstance(t, r, n, o) {
    _S(t, r, n, o)
  }
  mount(t) {
    ;(this.isSVGTag = jp(t.tagName)), super.mount(t)
  }
}
const iL = (e, t) =>
    Ip(e)
      ? new oL(t, { enableHardwareAcceleration: !1 })
      : new nL(t, { enableHardwareAcceleration: !0 }),
  aL = { layout: { ProjectionNode: wx, MeasureLayout: gx } },
  sL = { ...DM, ...tA, ...ND, ...aL },
  lL = c3((e, t) => I3(e, t, sL, iL))
function Tx() {
  const e = x.useRef(!1)
  return (
    hu(
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
function uL() {
  const e = Tx(),
    [t, r] = x.useState(0),
    n = x.useCallback(() => {
      e.current && r(t + 1)
    }, [t])
  return [x.useCallback(() => Re.postRender(n), [n]), t]
}
class cL extends x.Component {
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
function dL({ children: e, isPresent: t }) {
  const r = x.useId(),
    n = x.useRef(null),
    o = x.useRef({ width: 0, height: 0, top: 0, left: 0 })
  return (
    x.useInsertionEffect(() => {
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
    x.createElement(cL, { isPresent: t, childRef: n, sizeRef: o }, x.cloneElement(e, { ref: n }))
  )
}
const Fd = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = Bp(fL),
    l = x.useId(),
    u = x.useMemo(
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
    x.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1))
    }, [r]),
    x.useEffect(() => {
      !r && !s.size && n && n()
    }, [r]),
    a === 'popLayout' && (e = x.createElement(dL, { isPresent: r }, e)),
    x.createElement(Ss.Provider, { value: u }, e)
  )
}
function fL() {
  return new Map()
}
function hL(e) {
  return x.useEffect(() => () => e(), [])
}
const Do = (e) => e.key || ''
function pL(e, t) {
  e.forEach((r) => {
    const n = Do(r)
    t.set(n, r)
  })
}
function mL(e) {
  const t = []
  return (
    x.Children.forEach(e, (r) => {
      x.isValidElement(r) && t.push(r)
    }),
    t
  )
}
const gL = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  let [s] = uL()
  const l = x.useContext(Fp).forceRender
  l && (s = l)
  const u = Tx(),
    c = mL(e)
  let d = c
  const f = new Set(),
    p = x.useRef(d),
    b = x.useRef(new Map()).current,
    S = x.useRef(!0)
  if (
    (hu(() => {
      ;(S.current = !1), pL(c, b), (p.current = d)
    }),
    hL(() => {
      ;(S.current = !0), b.clear(), f.clear()
    }),
    S.current)
  )
    return x.createElement(
      x.Fragment,
      null,
      d.map((g) =>
        x.createElement(
          Fd,
          {
            key: Do(g),
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
  const y = p.current.map(Do),
    m = c.map(Do),
    h = y.length
  for (let g = 0; g < h; g++) {
    const w = y[g]
    m.indexOf(w) === -1 && f.add(w)
  }
  return (
    a === 'wait' && f.size && (d = []),
    f.forEach((g) => {
      if (m.indexOf(g) !== -1) return
      const w = b.get(g)
      if (!w) return
      const _ = y.indexOf(g),
        z = () => {
          b.delete(g), f.delete(g)
          const T = p.current.findIndex(($) => $.key === g)
          if ((p.current.splice(T, 1), !f.size)) {
            if (((p.current = c), u.current === !1)) return
            s(), n && n()
          }
        }
      d.splice(
        _,
        0,
        x.createElement(
          Fd,
          {
            key: Do(w),
            isPresent: !1,
            onExitComplete: z,
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
        : x.createElement(Fd, { key: Do(g), isPresent: !0, presenceAffectsLayout: i, mode: a }, g)
    })),
    x.createElement(x.Fragment, null, f.size ? d : d.map((g) => x.cloneElement(g)))
  )
}
var yL = {
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
  Ex = x.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = yL,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = x.useState(s),
      p = nD()
    Eg(() => {
      p || n == null || n()
    }, [p]),
      Eg(() => {
        f(s)
      }, [s])
    const b = () => f(null),
      S = () => f(s),
      y = () => {
        p && o()
      }
    x.useEffect(() => {
      p && i && o()
    }, [p, i, o]),
      Jz(y, d)
    const m = x.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...l }),
        [l, c]
      ),
      h = x.useMemo(() => Xz(a), [a])
    return A(lL.li, {
      layout: !0,
      className: 'chakra-toast',
      variants: u,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: b,
      onHoverEnd: S,
      custom: { position: a },
      style: h,
      children: A(Oe.div, {
        'role': 'status',
        'aria-atomic': 'true',
        'className': 'chakra-toast__inner',
        '__css': m,
        'children': En(r, { id: t, onClose: y }),
      }),
    })
  })
Ex.displayName = 'ToastComponent'
var Ly = {
    path: gt('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        A('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        A('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        A('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  _s = bt((e, t) => {
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
      c = Jt('chakra-icon', s),
      d = Ei('Icon', e),
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
      p = { ref: t, focusable: i, className: c, __css: f },
      b = n ?? Ly.viewBox
    if (r && typeof r != 'string') return A(Oe.svg, { as: r, ...p, ...u })
    const S = a ?? Ly.path
    return A(Oe.svg, { verticalAlign: 'middle', viewBox: b, ...p, ...u, children: S })
  })
_s.displayName = 'Icon'
function vL(e) {
  return A(_s, {
    viewBox: '0 0 24 24',
    ...e,
    children: A('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  })
}
function bL(e) {
  return A(_s, {
    viewBox: '0 0 24 24',
    ...e,
    children: A('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  })
}
function By(e) {
  return A(_s, {
    viewBox: '0 0 24 24',
    ...e,
    children: A('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  })
}
var SL = mC({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  rm = bt((e, t) => {
    const r = Ei('Spinner', e),
      {
        label: n = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = Ti(e),
      u = Jt('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${SL} ${i} linear infinite`,
        ...r,
      }
    return A(Oe.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && A(Oe.span, { srOnly: !0, children: n }),
    })
  })
rm.displayName = 'Spinner'
var [xL, wL] = Ci({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
  [kL, nm] = Ci({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  $x = {
    info: { icon: bL, colorScheme: 'blue' },
    warning: { icon: By, colorScheme: 'orange' },
    success: { icon: vL, colorScheme: 'green' },
    error: { icon: By, colorScheme: 'red' },
    loading: { icon: rm, colorScheme: 'blue' },
  }
function CL(e) {
  return $x[e].colorScheme
}
function _L(e) {
  return $x[e].icon
}
var Rx = bt(function (t, r) {
  const o = { display: 'inline', ...nm().description }
  return A(Oe.div, { ref: r, ...t, className: Jt('chakra-alert__desc', t.className), __css: o })
})
Rx.displayName = 'AlertDescription'
function zx(e) {
  const { status: t } = wL(),
    r = _L(t),
    n = nm(),
    o = t === 'loading' ? n.spinner : n.icon
  return A(Oe.span, {
    display: 'inherit',
    ...e,
    className: Jt('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || A(r, { h: '100%', w: '100%' }),
  })
}
zx.displayName = 'AlertIcon'
var Ax = bt(function (t, r) {
  const n = nm()
  return A(Oe.div, {
    ref: r,
    ...t,
    className: Jt('chakra-alert__title', t.className),
    __css: n.title,
  })
})
Ax.displayName = 'AlertTitle'
var Mx = bt(function (t, r) {
  var n
  const { status: o = 'info', addRole: i = !0, ...a } = Ti(t),
    s = (n = t.colorScheme) != null ? n : CL(o),
    l = Ez('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    }
  return A(xL, {
    value: { status: o },
    children: A(kL, {
      value: l,
      children: A(Oe.div, {
        role: i ? 'alert' : void 0,
        ref: r,
        ...a,
        className: Jt('chakra-alert', t.className),
        __css: u,
      }),
    }),
  })
})
Mx.displayName = 'Alert'
function PL(e) {
  return A(_s, {
    'focusable': 'false',
    'aria-hidden': !0,
    ...e,
    'children': A('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  })
}
var Dx = bt(function (t, r) {
  const n = Ei('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = Ti(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  return A(Oe.button, {
    'type': 'button',
    'aria-label': 'Close',
    'ref': r,
    'disabled': i,
    '__css': { ...l, ...n, ...a },
    ...s,
    'children': o || A(PL, { width: '1em', height: '1em' }),
  })
})
Dx.displayName = 'CloseButton'
var TL = {
    'top': [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom': [],
    'bottom-right': [],
  },
  Ea = EL(TL)
function EL(e) {
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
      const a = $L(o, i),
        { position: s, id: l } = a
      return (
        n((u) => {
          var c, d
          const p = s.includes('top')
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a]
          return { ...u, [s]: p }
        }),
        l
      )
    },
    update: (o, i) => {
      o &&
        n((a) => {
          const s = { ...a },
            { position: l, index: u } = Tg(s, o)
          return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: zL(i) }), s
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
        const a = dS(i, o)
        return a ? { ...i, [a]: i[a].map((s) => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
      })
    },
    isActive: (o) => !!Tg(Ea.getState(), o).position,
  }
}
var Fy = 0
function $L(e, t = {}) {
  var r, n
  Fy += 1
  const o = (r = t.id) != null ? r : Fy,
    i = (n = t.position) != null ? n : 'bottom'
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ea.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  }
}
var RL = (e) => {
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
  return gt(Mx, {
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
      A(zx, { children: u }),
      gt(Oe.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && A(Ax, { id: c == null ? void 0 : c.title, children: o }),
          s && A(Rx, { id: c == null ? void 0 : c.description, display: 'block', children: s }),
        ],
      }),
      i && A(Dx, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  })
}
function zL(e = {}) {
  const { render: t, toastComponent: r = RL } = e
  return (o) => (typeof t == 'function' ? t({ ...o, ...e }) : A(r, { ...o, ...e }))
}
var [AL, rI] = Ci({ name: 'ToastOptionsContext', strict: !1 }),
  ML = (e) => {
    const t = x.useSyncExternalStore(Ea.subscribe, Ea.getState, Ea.getState),
      { motionVariants: r, component: n = Ex, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s]
        return A(
          'ul',
          {
            'role': 'region',
            'aria-live': 'polite',
            'id': `chakra-toast-manager-${s}`,
            'style': qz(s),
            'children': A(gL, {
              initial: !1,
              children: l.map((u) => A(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        )
      })
    return A(tc, { ...o, children: a })
  },
  DL = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return gt(Yz, {
        theme: n,
        ...i,
        children: [
          A(AL, { value: o == null ? void 0 : o.defaultOptions, children: r }),
          A(ML, { ...o }),
        ],
      })
    },
  LL = DL(nS)
function BL(e, t) {
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
function FL(...e) {
  return (t) => {
    e.forEach((r) => {
      BL(r, t)
    })
  }
}
function IL(...e) {
  return x.useMemo(() => FL(...e), e)
}
function OL(e) {
  return x.Children.toArray(e).filter((t) => x.isValidElement(t))
}
var [VL, NL] = Ci({ strict: !1, name: 'ButtonGroupContext' }),
  jL = {
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
  WL = {
    horizontal: (e) => ({ '& > *:not(style) ~ *:not(style)': { marginStart: e } }),
    vertical: (e) => ({ '& > *:not(style) ~ *:not(style)': { marginTop: e } }),
  },
  Lx = bt(function (t, r) {
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
      f = Jt('chakra-button__group', a),
      p = x.useMemo(() => ({ size: n, colorScheme: o, variant: i, isDisabled: u }), [n, o, i, u])
    let b = { display: 'inline-flex', ...(l ? jL[c] : WL[c](s)) }
    const S = c === 'vertical'
    return A(VL, {
      value: p,
      children: A(Oe.div, {
        'ref': r,
        'role': 'group',
        '__css': b,
        'className': f,
        'data-attached': l ? '' : void 0,
        'data-orientation': c,
        'flexDir': S ? 'column' : void 0,
        ...d,
      }),
    })
  })
Lx.displayName = 'ButtonGroup'
function UL(e) {
  const [t, r] = x.useState(!e)
  return {
    ref: x.useCallback((i) => {
      i && r(i.tagName === 'BUTTON')
    }, []),
    type: t ? 'button' : void 0,
  }
}
function dh(e) {
  const { children: t, className: r, ...n } = e,
    o = x.isValidElement(t) ? x.cloneElement(t, { 'aria-hidden': !0, 'focusable': !1 }) : t,
    i = Jt('chakra-button__icon', r)
  return A(Oe.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  })
}
dh.displayName = 'ButtonIcon'
function fh(e) {
  const {
      label: t,
      placement: r,
      spacing: n = '0.5rem',
      children: o = A(rm, { color: 'currentColor', width: '1em', height: '1em' }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = Jt('chakra-button__spinner', i),
    u = r === 'start' ? 'marginEnd' : 'marginStart',
    c = x.useMemo(
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
  return A(Oe.div, { className: l, ...s, __css: c, children: o })
}
fh.displayName = 'ButtonSpinner'
var $a = bt((e, t) => {
  const r = NL(),
    n = Ei('Button', { ...r, ...e }),
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
      spinner: p,
      spinnerPlacement: b = 'start',
      className: S,
      as: y,
      ...m
    } = Ti(e),
    h = x.useMemo(() => {
      const z = { ...(n == null ? void 0 : n._focus), zIndex: 1 }
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
        ...(!!r && { _focus: z }),
      }
    }, [n, r]),
    { ref: g, type: w } = UL(y),
    _ = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s }
  return gt(Oe.button, {
    'ref': IL(t, g),
    'as': y,
    'type': f ?? w,
    'data-active': F0(a),
    'data-loading': F0(i),
    '__css': h,
    'className': Jt('chakra-button', S),
    ...m,
    'disabled': o || i,
    'children': [
      i &&
        b === 'start' &&
        A(fh, {
          className: 'chakra-button__spinner--start',
          label: c,
          placement: 'start',
          spacing: d,
          children: p,
        }),
      i ? c || A(Oe.span, { opacity: 0, children: A(Iy, { ..._ }) }) : A(Iy, { ..._ }),
      i &&
        b === 'end' &&
        A(fh, {
          className: 'chakra-button__spinner--end',
          label: c,
          placement: 'end',
          spacing: d,
          children: p,
        }),
    ],
  })
})
$a.displayName = 'Button'
function Iy(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e
  return gt(kh, {
    children: [
      t && A(dh, { marginEnd: o, children: t }),
      n,
      r && A(dh, { marginStart: o, children: r }),
    ],
  })
}
var Bx = bt((e, t) => {
  const { 'icon': r, 'children': n, 'isRound': o, 'aria-label': i, ...a } = e,
    s = r || n,
    l = x.isValidElement(s) ? x.cloneElement(s, { 'aria-hidden': !0, 'focusable': !1 }) : null
  return A($a, {
    'padding': '0',
    'borderRadius': o ? 'full' : void 0,
    'ref': t,
    'aria-label': i,
    ...a,
    'children': l,
  })
})
Bx.displayName = 'IconButton'
var Fx = Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
function Ix(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : yt(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null
}
function HL(e, t = Fx) {
  const r = {}
  return (
    e.forEach((n, o) => {
      const i = t[o]
      n != null && (r[i] = n)
    }),
    r
  )
}
var Ox = (e) =>
  A(Oe.div, {
    className: 'chakra-stack__item',
    ...e,
    __css: { display: 'inline-block', flex: '0 0 auto', minWidth: 0, ...e.__css },
  })
Ox.displayName = 'StackItem'
var hh = '& > *:not(style) ~ *:not(style)'
function GL(e) {
  const { spacing: t, direction: r } = e,
    n = {
      'column': { marginTop: t, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      'row': { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: t },
      'column-reverse': { marginTop: 0, marginEnd: 0, marginBottom: t, marginStart: 0 },
      'row-reverse': { marginTop: 0, marginEnd: t, marginBottom: 0, marginStart: 0 },
    }
  return { flexDirection: r, [hh]: Ix(r, (o) => n[o]) }
}
function KL(e) {
  const { spacing: t, direction: r } = e,
    n = {
      'column': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'column-reverse': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'row': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
      'row-reverse': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
    }
  return { '&': Ix(r, (o) => n[o]) }
}
var Vx = bt((e, t) => {
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
    p = r ? 'row' : n ?? 'column',
    b = x.useMemo(() => GL({ direction: p, spacing: a }), [p, a]),
    S = x.useMemo(() => KL({ spacing: a, direction: p }), [a, p]),
    y = !!u,
    m = !d && !y,
    h = x.useMemo(() => {
      const w = OL(l)
      return m
        ? w
        : w.map((_, z) => {
            const T = typeof _.key < 'u' ? _.key : z,
              $ = z + 1 === w.length,
              O = d ? A(Ox, { children: _ }, T) : _
            if (!y) return O
            const ue = x.cloneElement(u, { __css: S }),
              ze = $ ? null : ue
            return gt(x.Fragment, { children: [O, ze] }, T)
          })
    }, [u, S, y, m, d, l]),
    g = Jt('chakra-stack', c)
  return A(Oe.div, {
    ref: t,
    display: 'flex',
    alignItems: o,
    justifyContent: i,
    flexDirection: b.flexDirection,
    flexWrap: s,
    className: g,
    __css: y ? {} : { [hh]: b[hh] },
    ...f,
    children: h,
  })
})
Vx.displayName = 'Stack'
var ph = bt((e, t) => A(Vx, { align: 'center', ...e, direction: 'row', ref: t }))
ph.displayName = 'HStack'
var mc = bt(function (t, r) {
  const n = Ei('Heading', t),
    { className: o, ...i } = Ti(t)
  return A(Oe.h2, { ref: r, className: Jt('chakra-heading', t.className), ...i, __css: n })
})
mc.displayName = 'Heading'
var ds = Oe('div')
ds.displayName = 'Box'
var Nx = bt(function (t, r) {
  const { size: n, centerContent: o = !0, ...i } = t
  return A(ds, {
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
Nx.displayName = 'Square'
var YL = bt(function (t, r) {
  const { size: n, ...o } = t
  return A(Nx, { size: n, ref: r, borderRadius: '9999px', ...o })
})
YL.displayName = 'Circle'
var om = bt(function (t, r) {
  const { className: n, centerContent: o, ...i } = Ti(t),
    a = Ei('Container', t)
  return A(Oe.div, {
    ref: r,
    className: Jt('chakra-container', n),
    ...i,
    __css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
  })
})
om.displayName = 'Container'
var im = bt(function (t, r) {
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
  return A(Oe.div, { ref: r, __css: d, ...c })
})
im.displayName = 'Flex'
function QL(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t,
    { getWindow: o } = Kz(),
    i = Array.isArray(e) ? e : [e]
  let a = Array.isArray(n) ? n : [n]
  a = a.filter((u) => u != null)
  const [s, l] = x.useState(() =>
    i.map((u, c) => ({ media: u, matches: r ? !!a[c] : o().matchMedia(u).matches }))
  )
  return (
    x.useEffect(() => {
      const u = o()
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })))
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((p) => p.slice().map((b) => (b.media === f.media ? { ...b, matches: f.matches } : b)))
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
function XL(e, t, r = Fx) {
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
function qL(e) {
  var t, r
  const n = yt(e) ? e : { fallback: e ?? 'base' },
    i = wp().__breakpoints.details.map(({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace('@media screen and ', ''),
    })),
    a = i.map((u) => u.breakpoint === n.fallback),
    l = QL(
      i.map((u) => u.query),
      { fallback: a, ssr: n.ssr }
    ).findIndex((u) => u == !0)
  return (r = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback
}
function ZL(e, t) {
  var r
  const n = yt(t) ? t : { fallback: t ?? 'base' },
    o = qL(n),
    i = wp()
  if (!o) return
  const a = Array.from(((r = i.__breakpoints) == null ? void 0 : r.keys) || []),
    s = Array.isArray(e) ? Object.fromEntries(Object.entries(HL(e, a)).map(([l, u]) => [l, u])) : e
  return XL(s, o, a)
}
var mh = {},
  Oy = Ia
;(mh.createRoot = Oy.createRoot), (mh.hydrateRoot = Oy.hydrateRoot)
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ie.apply(this, arguments)
  )
}
var He
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(He || (He = {}))
const Vy = 'popstate'
function JL(e) {
  e === void 0 && (e = {})
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location
    return fs(
      '',
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function r(n, o) {
    return typeof o == 'string' ? o : ln(o)
  }
  return tB(t, r, null, e)
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function xi(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function eB() {
  return Math.random().toString(36).substr(2, 8)
}
function Ny(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function fs(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    ie(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? cn(t) : t,
      { state: r, key: (t && t.key) || n || eB() }
    )
  )
}
function ln(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function cn(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e)
  }
  return t
}
function tB(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = He.Pop,
    l = null,
    u = c()
  u == null && ((u = 0), a.replaceState(ie({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function d() {
    s = He.Pop
    let y = c(),
      m = y == null ? null : y - u
    ;(u = y), l && l({ action: s, location: S.location, delta: m })
  }
  function f(y, m) {
    s = He.Push
    let h = fs(S.location, y, m)
    r && r(h, y), (u = c() + 1)
    let g = Ny(h, u),
      w = S.createHref(h)
    try {
      a.pushState(g, '', w)
    } catch {
      o.location.assign(w)
    }
    i && l && l({ action: s, location: S.location, delta: 1 })
  }
  function p(y, m) {
    s = He.Replace
    let h = fs(S.location, y, m)
    r && r(h, y), (u = c())
    let g = Ny(h, u),
      w = S.createHref(h)
    a.replaceState(g, '', w), i && l && l({ action: s, location: S.location, delta: 0 })
  }
  function b(y) {
    let m = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof y == 'string' ? y : ln(y)
    return (
      Z(m, 'No window.location.(origin|href) available to create URL for href: ' + h), new URL(h, m)
    )
  }
  let S = {
    get action() {
      return s
    },
    get location() {
      return e(o, a)
    },
    listen(y) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Vy, d),
        (l = y),
        () => {
          o.removeEventListener(Vy, d), (l = null)
        }
      )
    },
    createHref(y) {
      return t(o, y)
    },
    createURL: b,
    encodeLocation(y) {
      let m = b(y)
      return { pathname: m.pathname, search: m.search, hash: m.hash }
    },
    push: f,
    replace: p,
    go(y) {
      return a.go(y)
    },
  }
  return S
}
var Ye
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(Ye || (Ye = {}))
const rB = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function nB(e) {
  return e.index === !0
}
function jx(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let a = [...r, i],
        s = typeof o.id == 'string' ? o.id : a.join('-')
      if (
        (Z(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        Z(
          !n[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        nB(o))
      ) {
        let l = ie({}, o, { hasErrorBoundary: t(o), id: s })
        return (n[s] = l), l
      } else {
        let l = ie({}, o, { id: s, hasErrorBoundary: t(o), children: void 0 })
        return (n[s] = l), o.children && (l.children = jx(o.children, t, a, n)), l
      }
    })
  )
}
function qo(e, t, r) {
  r === void 0 && (r = '/')
  let n = typeof t == 'string' ? cn(t) : t,
    o = Ps(n.pathname || '/', r)
  if (o == null) return null
  let i = Wx(e)
  oB(i)
  let a = null
  for (let s = 0; a == null && s < i.length; ++s) a = hB(i[s], gB(o))
  return a
}
function Wx(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    }
    l.relativePath.startsWith('/') &&
      (Z(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(n.length)))
    let u = tn([n, l.relativePath]),
      c = r.concat(l)
    i.children &&
      i.children.length > 0 &&
      (Z(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Wx(i.children, t, c, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: dB(u, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, a) => {
      var s
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a)
      else for (let l of Ux(i.path)) o(i, a, l)
    }),
    t
  )
}
function Ux(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '')
  if (n.length === 0) return o ? [i, ''] : [i]
  let a = Ux(n.join('/')),
    s = []
  return (
    s.push(...a.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function oB(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : fB(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  )
}
const iB = /^:\w+$/,
  aB = 3,
  sB = 2,
  lB = 1,
  uB = 10,
  cB = -2,
  jy = (e) => e === '*'
function dB(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(jy) && (n += cB),
    t && (n += sB),
    r.filter((o) => !jy(o)).reduce((o, i) => o + (iB.test(i) ? aB : i === '' ? lB : uB), n)
  )
}
function fB(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function hB(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = '/',
    i = []
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = pB({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, u)
    if (!c) return null
    Object.assign(n, c.params)
    let d = s.route
    i.push({
      params: n,
      pathname: tn([o, c.pathname]),
      pathnameBase: SB(tn([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (o = tn([o, c.pathnameBase]))
  }
  return i
}
function pB(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = mB(e.path, e.caseSensitive, e.end),
    o = t.match(r)
  if (!o) return null
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1)
  return {
    params: n.reduce((u, c, d) => {
      if (c === '*') {
        let f = s[d] || ''
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, '$1')
      }
      return (u[c] = yB(s[d] || '', c)), u
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  }
}
function mB(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    xi(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (a, s) => (n.push(s), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (n.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), n]
  )
}
function gB(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      xi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function yB(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (r) {
    return (
      xi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + r + ').')
      ),
      e
    )
  }
}
function Ps(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function vB(e, t) {
  t === void 0 && (t = '/')
  let { pathname: r, search: n = '', hash: o = '' } = typeof e == 'string' ? cn(e) : e
  return { pathname: r ? (r.startsWith('/') ? r : bB(r, t)) : t, search: xB(n), hash: wB(o) }
}
function bB(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function Id(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(n) + '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function gc(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0))
}
function am(e, t, r, n) {
  n === void 0 && (n = !1)
  let o
  typeof e == 'string'
    ? (o = cn(e))
    : ((o = ie({}, e)),
      Z(!o.pathname || !o.pathname.includes('?'), Id('?', 'pathname', 'search', o)),
      Z(!o.pathname || !o.pathname.includes('#'), Id('#', 'pathname', 'hash', o)),
      Z(!o.search || !o.search.includes('#'), Id('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s
  if (n || a == null) s = r
  else {
    let d = t.length - 1
    if (a.startsWith('..')) {
      let f = a.split('/')
      for (; f[0] === '..'; ) f.shift(), (d -= 1)
      o.pathname = f.join('/')
    }
    s = d >= 0 ? t[d] : '/'
  }
  let l = vB(o, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && r.endsWith('/')
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l
}
const tn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  SB = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  xB = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  wB = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class sm {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = o),
      n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n)
  }
}
function Hx(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Gx = ['post', 'put', 'patch', 'delete'],
  kB = new Set(Gx),
  CB = ['get', ...Gx],
  _B = new Set(CB),
  PB = new Set([301, 302, 303, 307, 308]),
  TB = new Set([307, 308]),
  Od = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  EB = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Wy = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Kx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yx =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  $B = !Yx,
  RB = (e) => !!e.hasErrorBoundary
function zB(e) {
  Z(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter')
  let t = e.detectErrorBoundary || RB,
    r = {},
    n = jx(e.routes, t, void 0, r),
    o,
    i = ie({ v7_normalizeFormMethod: !1 }, e.future),
    a = null,
    s = new Set(),
    l = null,
    u = null,
    c = null,
    d = e.hydrationData != null,
    f = qo(n, e.history.location, e.basename),
    p = null
  if (f == null) {
    let E = Tr(404, { pathname: e.history.location.pathname }),
      { matches: R, route: M } = Xy(n)
    ;(f = R), (p = { [M.id]: E })
  }
  let b =
      !f.some((E) => E.route.lazy) && (!f.some((E) => E.route.loader) || e.hydrationData != null),
    S,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: f,
      initialized: b,
      navigation: Od,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    m = He.Pop,
    h = !1,
    g,
    w = !1,
    _ = !1,
    z = [],
    T = [],
    $ = new Map(),
    j = 0,
    O = -1,
    ue = new Map(),
    ze = new Set(),
    Ve = new Map(),
    ce = new Map(),
    se = new Map(),
    Ze = !1
  function Tt() {
    return (
      (a = e.history.listen((E) => {
        let { action: R, location: M, delta: I } = E
        if (Ze) {
          Ze = !1
          return
        }
        xi(
          se.size === 0 || I != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let N = er({ currentLocation: y.location, nextLocation: M, historyAction: R })
        if (N && I != null) {
          ;(Ze = !0),
            e.history.go(I * -1),
            Vr(N, {
              state: 'blocked',
              location: M,
              proceed() {
                Vr(N, { state: 'proceeding', proceed: void 0, reset: void 0, location: M }),
                  e.history.go(I)
              },
              reset() {
                Or(N), V({ blockers: new Map(S.state.blockers) })
              },
            })
          return
        }
        return Fe(R, M)
      })),
      y.initialized || Fe(He.Pop, y.location),
      S
    )
  }
  function L() {
    a && a(),
      s.clear(),
      g && g.abort(),
      y.fetchers.forEach((E, R) => zi(R)),
      y.blockers.forEach((E, R) => Or(R))
  }
  function Y(E) {
    return s.add(E), () => s.delete(E)
  }
  function V(E) {
    ;(y = ie({}, y, E)), s.forEach((R) => R(y))
  }
  function U(E, R) {
    var M, I
    let N =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        Ur(y.navigation.formMethod) &&
        y.navigation.state === 'loading' &&
        ((M = E.state) == null ? void 0 : M._isRedirect) !== !0,
      Q
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (Q = R.actionData)
        : (Q = null)
      : N
      ? (Q = y.actionData)
      : (Q = null)
    let X = R.loaderData ? Qy(y.loaderData, R.loaderData, R.matches || [], R.errors) : y.loaderData
    for (let [W] of se) Or(W)
    let H =
      h === !0 ||
      (y.navigation.formMethod != null &&
        Ur(y.navigation.formMethod) &&
        ((I = E.state) == null ? void 0 : I._isRedirect) !== !0)
    o && ((n = o), (o = void 0)),
      V(
        ie({}, R, {
          actionData: Q,
          loaderData: X,
          historyAction: m,
          location: E,
          initialized: !0,
          navigation: Od,
          revalidation: 'idle',
          restoreScrollPosition: zs(E, R.matches || y.matches),
          preventScrollReset: H,
          blockers: new Map(y.blockers),
        })
      ),
      w ||
        m === He.Pop ||
        (m === He.Push
          ? e.history.push(E, E.state)
          : m === He.Replace && e.history.replace(E, E.state)),
      (m = He.Pop),
      (h = !1),
      (w = !1),
      (_ = !1),
      (z = []),
      (T = [])
  }
  async function ve(E, R) {
    if (typeof E == 'number') {
      e.history.go(E)
      return
    }
    let { path: M, submission: I, error: N } = Uy(E, i, R),
      Q = y.location,
      X = fs(y.location, M, R && R.state)
    X = ie({}, X, e.history.encodeLocation(X))
    let H = R && R.replace != null ? R.replace : void 0,
      W = He.Push
    H === !0
      ? (W = He.Replace)
      : H === !1 ||
        (I != null &&
          Ur(I.formMethod) &&
          I.formAction === y.location.pathname + y.location.search &&
          (W = He.Replace))
    let be = R && 'preventScrollReset' in R ? R.preventScrollReset === !0 : void 0,
      ne = er({ currentLocation: Q, nextLocation: X, historyAction: W })
    if (ne) {
      Vr(ne, {
        state: 'blocked',
        location: X,
        proceed() {
          Vr(ne, { state: 'proceeding', proceed: void 0, reset: void 0, location: X }), ve(E, R)
        },
        reset() {
          Or(ne), V({ blockers: new Map(y.blockers) })
        },
      })
      return
    }
    return await Fe(W, X, {
      submission: I,
      pendingError: N,
      preventScrollReset: be,
      replace: R && R.replace,
    })
  }
  function te() {
    if ((hn(), V({ revalidation: 'loading' }), y.navigation.state !== 'submitting')) {
      if (y.navigation.state === 'idle') {
        Fe(y.historyAction, y.location, { startUninterruptedRevalidation: !0 })
        return
      }
      Fe(m || y.historyAction, y.navigation.location, { overrideNavigation: y.navigation })
    }
  }
  async function Fe(E, R, M) {
    g && g.abort(),
      (g = null),
      (m = E),
      (w = (M && M.startUninterruptedRevalidation) === !0),
      xc(y.location, y.matches),
      (h = (M && M.preventScrollReset) === !0)
    let I = o || n,
      N = M && M.overrideNavigation,
      Q = qo(I, R, e.basename)
    if (!Q) {
      let je = Tr(404, { pathname: R.pathname }),
        { matches: Ae, route: Ot } = Xy(I)
      $o(), U(R, { matches: Ae, loaderData: {}, errors: { [Ot.id]: je } })
      return
    }
    if (BB(y.location, R) && !(M && M.submission && Ur(M.submission.formMethod))) {
      U(R, { matches: Q })
      return
    }
    g = new AbortController()
    let X = Zi(e.history, R, g.signal, M && M.submission),
      H,
      W
    if (M && M.pendingError) W = { [Zo(Q).route.id]: M.pendingError }
    else if (M && M.submission && Ur(M.submission.formMethod)) {
      let je = await xr(X, R, M.submission, Q, { replace: M.replace })
      if (je.shortCircuited) return
      ;(H = je.pendingActionData),
        (W = je.pendingActionError),
        (N = ie({ state: 'loading', location: R }, M.submission)),
        (X = new Request(X.url, { signal: X.signal }))
    }
    let {
      shortCircuited: be,
      loaderData: ne,
      errors: It,
    } = await Ne(X, R, Q, N, M && M.submission, M && M.fetcherSubmission, M && M.replace, H, W)
    be ||
      ((g = null),
      U(R, ie({ matches: Q }, H ? { actionData: H } : {}, { loaderData: ne, errors: It })))
  }
  async function xr(E, R, M, I, N) {
    hn()
    let Q = ie({ state: 'submitting', location: R }, M)
    V({ navigation: Q })
    let X,
      H = gh(I, R)
    if (!H.route.action && !H.route.lazy)
      X = {
        type: Ye.error,
        error: Tr(405, { method: E.method, pathname: R.pathname, routeId: H.route.id }),
      }
    else if (((X = await qi('action', E, H, I, r, t, S.basename)), E.signal.aborted))
      return { shortCircuited: !0 }
    if (ci(X)) {
      let W
      return (
        N && N.replace != null
          ? (W = N.replace)
          : (W = X.location === y.location.pathname + y.location.search),
        await lt(y, X, { submission: M, replace: W }),
        { shortCircuited: !0 }
      )
    }
    if (Ra(X)) {
      let W = Zo(I, H.route.id)
      return (
        (N && N.replace) !== !0 && (m = He.Push),
        { pendingActionData: {}, pendingActionError: { [W.route.id]: X.error } }
      )
    }
    if (uo(X)) throw Tr(400, { type: 'defer-action' })
    return { pendingActionData: { [H.route.id]: X.data } }
  }
  async function Ne(E, R, M, I, N, Q, X, H, W) {
    let be = I
    be ||
      (be = ie(
        {
          state: 'loading',
          location: R,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        N
      ))
    let ne =
        N || Q
          ? N || Q
          : be.formMethod && be.formAction && be.formData && be.formEncType
          ? {
              formMethod: be.formMethod,
              formAction: be.formAction,
              formData: be.formData,
              formEncType: be.formEncType,
            }
          : void 0,
      It = o || n,
      [je, Ae] = Hy(e.history, y, M, ne, R, _, z, T, Ve, It, e.basename, H, W)
    if (
      ($o(
        (xe) =>
          !(M && M.some((Nt) => Nt.route.id === xe)) || (je && je.some((Nt) => Nt.route.id === xe))
      ),
      je.length === 0 && Ae.length === 0)
    )
      return (
        U(R, ie({ matches: M, loaderData: {}, errors: W || null }, H ? { actionData: H } : {})),
        { shortCircuited: !0 }
      )
    if (!w) {
      Ae.forEach((Nt) => {
        let Nr = y.fetchers.get(Nt.key),
          Xn = {
            'state': 'loading',
            'data': Nr && Nr.data,
            'formMethod': void 0,
            'formAction': void 0,
            'formEncType': void 0,
            'formData': void 0,
            ' _hasFetcherDoneAnything ': !0,
          }
        y.fetchers.set(Nt.key, Xn)
      })
      let xe = H || y.actionData
      V(
        ie(
          { navigation: be },
          xe ? (Object.keys(xe).length === 0 ? { actionData: null } : { actionData: xe }) : {},
          Ae.length > 0 ? { fetchers: new Map(y.fetchers) } : {}
        )
      )
    }
    ;(O = ++j), Ae.forEach((xe) => $.set(xe.key, g))
    let { results: Ot, loaderResults: Vt, fetcherResults: Ai } = await fn(y.matches, M, je, Ae, E)
    if (E.signal.aborted) return { shortCircuited: !0 }
    Ae.forEach((xe) => $.delete(xe.key))
    let Qn = qy(Ot)
    if (Qn) return await lt(y, Qn, { replace: X }), { shortCircuited: !0 }
    let { loaderData: pn, errors: Mi } = Yy(y, M, je, Vt, W, Ae, Ai, ce)
    ce.forEach((xe, Nt) => {
      xe.subscribe((Nr) => {
        ;(Nr || xe.done) && ce.delete(Nt)
      })
    }),
      Sc()
    let Di = $s(O)
    return ie(
      { loaderData: pn, errors: Mi },
      Di || Ae.length > 0 ? { fetchers: new Map(y.fetchers) } : {}
    )
  }
  function Ft(E) {
    return y.fetchers.get(E) || EB
  }
  function Ir(E, R, M, I) {
    if ($B)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    $.has(E) && To(E)
    let Q = qo(o || n, M, e.basename)
    if (!Q) {
      Ri(E, R, Tr(404, { pathname: M }))
      return
    }
    let { path: X, submission: H } = Uy(M, i, I, !0),
      W = gh(Q, X)
    if (((h = (I && I.preventScrollReset) === !0), H && Ur(H.formMethod))) {
      dn(E, R, X, W, Q, H)
      return
    }
    Ve.set(E, { routeId: R, path: X }), wr(E, R, X, W, Q, H)
  }
  async function dn(E, R, M, I, N, Q) {
    if ((hn(), Ve.delete(E), !I.route.action && !I.route.lazy)) {
      let ut = Tr(405, { method: Q.formMethod, pathname: M, routeId: R })
      Ri(E, R, ut)
      return
    }
    let X = y.fetchers.get(E),
      H = ie({ state: 'submitting' }, Q, { 'data': X && X.data, ' _hasFetcherDoneAnything ': !0 })
    y.fetchers.set(E, H), V({ fetchers: new Map(y.fetchers) })
    let W = new AbortController(),
      be = Zi(e.history, M, W.signal, Q)
    $.set(E, W)
    let ne = await qi('action', be, I, N, r, t, S.basename)
    if (be.signal.aborted) {
      $.get(E) === W && $.delete(E)
      return
    }
    if (ci(ne)) {
      $.delete(E), ze.add(E)
      let ut = ie({ state: 'loading' }, Q, { 'data': void 0, ' _hasFetcherDoneAnything ': !0 })
      return (
        y.fetchers.set(E, ut),
        V({ fetchers: new Map(y.fetchers) }),
        lt(y, ne, { submission: Q, isFetchActionRedirect: !0 })
      )
    }
    if (Ra(ne)) {
      Ri(E, R, ne.error)
      return
    }
    if (uo(ne)) throw Tr(400, { type: 'defer-action' })
    let It = y.navigation.location || y.location,
      je = Zi(e.history, It, W.signal),
      Ae = o || n,
      Ot = y.navigation.state !== 'idle' ? qo(Ae, y.navigation.location, e.basename) : y.matches
    Z(Ot, "Didn't find any matches after fetcher action")
    let Vt = ++j
    ue.set(E, Vt)
    let Ai = ie({ state: 'loading', data: ne.data }, Q, { ' _hasFetcherDoneAnything ': !0 })
    y.fetchers.set(E, Ai)
    let [Qn, pn] = Hy(
      e.history,
      y,
      Ot,
      Q,
      It,
      _,
      z,
      T,
      Ve,
      Ae,
      e.basename,
      { [I.route.id]: ne.data },
      void 0
    )
    pn
      .filter((ut) => ut.key !== E)
      .forEach((ut) => {
        let Li = ut.key,
          As = y.fetchers.get(Li),
          Cc = {
            'state': 'loading',
            'data': As && As.data,
            'formMethod': void 0,
            'formAction': void 0,
            'formEncType': void 0,
            'formData': void 0,
            ' _hasFetcherDoneAnything ': !0,
          }
        y.fetchers.set(Li, Cc), $.set(Li, W)
      }),
      V({ fetchers: new Map(y.fetchers) })
    let { results: Mi, loaderResults: Di, fetcherResults: xe } = await fn(y.matches, Ot, Qn, pn, je)
    if (W.signal.aborted) return
    ue.delete(E), $.delete(E), pn.forEach((ut) => $.delete(ut.key))
    let Nt = qy(Mi)
    if (Nt) return lt(y, Nt)
    let { loaderData: Nr, errors: Xn } = Yy(y, y.matches, Qn, Di, void 0, pn, xe, ce),
      wc = {
        'state': 'idle',
        'data': ne.data,
        'formMethod': void 0,
        'formAction': void 0,
        'formEncType': void 0,
        'formData': void 0,
        ' _hasFetcherDoneAnything ': !0,
      }
    y.fetchers.set(E, wc)
    let kc = $s(Vt)
    y.navigation.state === 'loading' && Vt > O
      ? (Z(m, 'Expected pending action'),
        g && g.abort(),
        U(y.navigation.location, {
          matches: Ot,
          loaderData: Nr,
          errors: Xn,
          fetchers: new Map(y.fetchers),
        }))
      : (V(
          ie(
            { errors: Xn, loaderData: Qy(y.loaderData, Nr, Ot, Xn) },
            kc ? { fetchers: new Map(y.fetchers) } : {}
          )
        ),
        (_ = !1))
  }
  async function wr(E, R, M, I, N, Q) {
    let X = y.fetchers.get(E),
      H = ie(
        {
          state: 'loading',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        Q,
        { 'data': X && X.data, ' _hasFetcherDoneAnything ': !0 }
      )
    y.fetchers.set(E, H), V({ fetchers: new Map(y.fetchers) })
    let W = new AbortController(),
      be = Zi(e.history, M, W.signal)
    $.set(E, W)
    let ne = await qi('loader', be, I, N, r, t, S.basename)
    if (
      (uo(ne) && (ne = (await Zx(ne, be.signal, !0)) || ne),
      $.get(E) === W && $.delete(E),
      be.signal.aborted)
    )
      return
    if (ci(ne)) {
      await lt(y, ne)
      return
    }
    if (Ra(ne)) {
      let je = Zo(y.matches, R)
      y.fetchers.delete(E),
        V({ fetchers: new Map(y.fetchers), errors: { [je.route.id]: ne.error } })
      return
    }
    Z(!uo(ne), 'Unhandled fetcher deferred data')
    let It = {
      'state': 'idle',
      'data': ne.data,
      'formMethod': void 0,
      'formAction': void 0,
      'formEncType': void 0,
      'formData': void 0,
      ' _hasFetcherDoneAnything ': !0,
    }
    y.fetchers.set(E, It), V({ fetchers: new Map(y.fetchers) })
  }
  async function lt(E, R, M) {
    var I
    let { submission: N, replace: Q, isFetchActionRedirect: X } = M === void 0 ? {} : M
    R.revalidate && (_ = !0)
    let H = fs(
      E.location,
      R.location,
      ie({ _isRedirect: !0 }, X ? { _isFetchActionRedirect: !0 } : {})
    )
    if (
      (Z(H, 'Expected a location on the redirect navigation'),
      Kx.test(R.location) && Yx && typeof ((I = window) == null ? void 0 : I.location) < 'u')
    ) {
      let Ae = e.history.createURL(R.location),
        Ot = Ps(Ae.pathname, e.basename || '/') == null
      if (window.location.origin !== Ae.origin || Ot) {
        Q ? window.location.replace(R.location) : window.location.assign(R.location)
        return
      }
    }
    g = null
    let W = Q === !0 ? He.Replace : He.Push,
      { formMethod: be, formAction: ne, formEncType: It, formData: je } = E.navigation
    !N &&
      be &&
      ne &&
      je &&
      It &&
      (N = { formMethod: be, formAction: ne, formEncType: It, formData: je }),
      TB.has(R.status) && N && Ur(N.formMethod)
        ? await Fe(W, H, {
            submission: ie({}, N, { formAction: R.location }),
            preventScrollReset: h,
          })
        : X
        ? await Fe(W, H, {
            overrideNavigation: {
              state: 'loading',
              location: H,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: N,
            preventScrollReset: h,
          })
        : await Fe(W, H, {
            overrideNavigation: {
              state: 'loading',
              location: H,
              formMethod: N ? N.formMethod : void 0,
              formAction: N ? N.formAction : void 0,
              formEncType: N ? N.formEncType : void 0,
              formData: N ? N.formData : void 0,
            },
            preventScrollReset: h,
          })
  }
  async function fn(E, R, M, I, N) {
    let Q = await Promise.all([
        ...M.map((W) => qi('loader', N, W, R, r, t, S.basename)),
        ...I.map((W) =>
          W.matches && W.match
            ? qi('loader', Zi(e.history, W.path, N.signal), W.match, W.matches, r, t, S.basename)
            : { type: Ye.error, error: Tr(404, { pathname: W.path }) }
        ),
      ]),
      X = Q.slice(0, M.length),
      H = Q.slice(M.length)
    return (
      await Promise.all([
        Zy(E, M, X, N.signal, !1, y.loaderData),
        Zy(
          E,
          I.map((W) => W.match),
          H,
          N.signal,
          !0
        ),
      ]),
      { results: Q, loaderResults: X, fetcherResults: H }
    )
  }
  function hn() {
    ;(_ = !0),
      z.push(...$o()),
      Ve.forEach((E, R) => {
        $.has(R) && (T.push(R), To(R))
      })
  }
  function Ri(E, R, M) {
    let I = Zo(y.matches, R)
    zi(E), V({ errors: { [I.route.id]: M }, fetchers: new Map(y.fetchers) })
  }
  function zi(E) {
    $.has(E) && To(E), Ve.delete(E), ue.delete(E), ze.delete(E), y.fetchers.delete(E)
  }
  function To(E) {
    let R = $.get(E)
    Z(R, 'Expected fetch controller: ' + E), R.abort(), $.delete(E)
  }
  function Es(E) {
    for (let R of E) {
      let I = {
        'state': 'idle',
        'data': Ft(R).data,
        'formMethod': void 0,
        'formAction': void 0,
        'formEncType': void 0,
        'formData': void 0,
        ' _hasFetcherDoneAnything ': !0,
      }
      y.fetchers.set(R, I)
    }
  }
  function Sc() {
    let E = []
    for (let R of ze) {
      let M = y.fetchers.get(R)
      Z(M, 'Expected fetcher: ' + R), M.state === 'loading' && (ze.delete(R), E.push(R))
    }
    Es(E)
  }
  function $s(E) {
    let R = []
    for (let [M, I] of ue)
      if (I < E) {
        let N = y.fetchers.get(M)
        Z(N, 'Expected fetcher: ' + M), N.state === 'loading' && (To(M), ue.delete(M), R.push(M))
      }
    return Es(R), R.length > 0
  }
  function Eo(E, R) {
    let M = y.blockers.get(E) || Wy
    return se.get(E) !== R && se.set(E, R), M
  }
  function Or(E) {
    y.blockers.delete(E), se.delete(E)
  }
  function Vr(E, R) {
    let M = y.blockers.get(E) || Wy
    Z(
      (M.state === 'unblocked' && R.state === 'blocked') ||
        (M.state === 'blocked' && R.state === 'blocked') ||
        (M.state === 'blocked' && R.state === 'proceeding') ||
        (M.state === 'blocked' && R.state === 'unblocked') ||
        (M.state === 'proceeding' && R.state === 'unblocked'),
      'Invalid blocker state transition: ' + M.state + ' -> ' + R.state
    ),
      y.blockers.set(E, R),
      V({ blockers: new Map(y.blockers) })
  }
  function er(E) {
    let { currentLocation: R, nextLocation: M, historyAction: I } = E
    if (se.size === 0) return
    se.size > 1 && xi(!1, 'A router only supports one blocker at a time')
    let N = Array.from(se.entries()),
      [Q, X] = N[N.length - 1],
      H = y.blockers.get(Q)
    if (
      !(H && H.state === 'proceeding') &&
      X({ currentLocation: R, nextLocation: M, historyAction: I })
    )
      return Q
  }
  function $o(E) {
    let R = []
    return (
      ce.forEach((M, I) => {
        ;(!E || E(I)) && (M.cancel(), R.push(I), ce.delete(I))
      }),
      R
    )
  }
  function Rs(E, R, M) {
    if (((l = E), (c = R), (u = M || ((I) => I.key)), !d && y.navigation === Od)) {
      d = !0
      let I = zs(y.location, y.matches)
      I != null && V({ restoreScrollPosition: I })
    }
    return () => {
      ;(l = null), (c = null), (u = null)
    }
  }
  function xc(E, R) {
    if (l && u && c) {
      let M = R.map((N) => Jy(N, y.loaderData)),
        I = u(E, M) || E.key
      l[I] = c()
    }
  }
  function zs(E, R) {
    if (l && u && c) {
      let M = R.map((Q) => Jy(Q, y.loaderData)),
        I = u(E, M) || E.key,
        N = l[I]
      if (typeof N == 'number') return N
    }
    return null
  }
  function Ro(E) {
    o = E
  }
  return (
    (S = {
      get basename() {
        return e.basename
      },
      get state() {
        return y
      },
      get routes() {
        return n
      },
      initialize: Tt,
      subscribe: Y,
      enableScrollRestoration: Rs,
      navigate: ve,
      fetch: Ir,
      revalidate: te,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: Ft,
      deleteFetcher: zi,
      dispose: L,
      getBlocker: Eo,
      deleteBlocker: Or,
      _internalFetchControllers: $,
      _internalActiveDeferreds: ce,
      _internalSetRoutes: Ro,
    }),
    S
  )
}
function AB(e) {
  return e != null && 'formData' in e
}
function Uy(e, t, r, n) {
  n === void 0 && (n = !1)
  let o = typeof e == 'string' ? e : ln(e)
  if (!r || !AB(r)) return { path: o }
  if (r.formMethod && !OB(r.formMethod))
    return { path: o, error: Tr(405, { method: r.formMethod }) }
  let i
  if (r.formData) {
    let l = r.formMethod || 'get'
    if (
      ((i = {
        formMethod: t.v7_normalizeFormMethod ? l.toUpperCase() : l.toLowerCase(),
        formAction: qx(o),
        formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      Ur(i.formMethod))
    )
      return { path: o, submission: i }
  }
  let a = cn(o),
    s = Xx(r.formData)
  return (
    n && a.search && Jx(a.search) && s.append('index', ''),
    (a.search = '?' + s),
    { path: ln(a), submission: i }
  )
}
function MB(e, t) {
  let r = e
  if (t) {
    let n = e.findIndex((o) => o.route.id === t)
    n >= 0 && (r = e.slice(0, n))
  }
  return r
}
function Hy(e, t, r, n, o, i, a, s, l, u, c, d, f) {
  let p = f ? Object.values(f)[0] : d ? Object.values(d)[0] : void 0,
    b = e.createURL(t.location),
    S = e.createURL(o),
    y = i || b.toString() === S.toString() || b.search !== S.search,
    m = f ? Object.keys(f)[0] : void 0,
    g = MB(r, m).filter((_, z) => {
      if (_.route.lazy) return !0
      if (_.route.loader == null) return !1
      if (DB(t.loaderData, t.matches[z], _) || a.some((j) => j === _.route.id)) return !0
      let T = t.matches[z],
        $ = _
      return Gy(
        _,
        ie({ currentUrl: b, currentParams: T.params, nextUrl: S, nextParams: $.params }, n, {
          actionResult: p,
          defaultShouldRevalidate: y || Qx(T, $),
        })
      )
    }),
    w = []
  return (
    l.forEach((_, z) => {
      if (!r.some((O) => O.route.id === _.routeId)) return
      let T = qo(u, _.path, c)
      if (!T) {
        w.push(ie({ key: z }, _, { matches: null, match: null }))
        return
      }
      let $ = gh(T, _.path)
      if (s.includes(z)) {
        w.push(ie({ key: z, matches: T, match: $ }, _))
        return
      }
      Gy(
        $,
        ie(
          {
            currentUrl: b,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: S,
            nextParams: r[r.length - 1].params,
          },
          n,
          { actionResult: p, defaultShouldRevalidate: y }
        )
      ) && w.push(ie({ key: z, matches: T, match: $ }, _))
    }),
    [g, w]
  )
}
function DB(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0
  return n || o
}
function Qx(e, t) {
  let r = e.route.path
  return (
    e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function Gy(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t)
    if (typeof r == 'boolean') return r
  }
  return t.defaultShouldRevalidate
}
async function Ky(e, t, r) {
  if (!e.lazy) return
  let n = await e.lazy()
  if (!e.lazy) return
  let o = r[e.id]
  Z(o, 'No route found in manifest')
  let i = {}
  for (let a in n) {
    let l = o[a] !== void 0 && a !== 'hasErrorBoundary'
    xi(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !rB.has(a) && (i[a] = n[a])
  }
  Object.assign(o, i), Object.assign(o, { hasErrorBoundary: t(ie({}, o)), lazy: void 0 })
}
async function qi(e, t, r, n, o, i, a, s, l, u) {
  a === void 0 && (a = '/'), s === void 0 && (s = !1), l === void 0 && (l = !1)
  let c,
    d,
    f,
    p = (y) => {
      let m,
        h = new Promise((g, w) => (m = w))
      return (
        (f = () => m()),
        t.signal.addEventListener('abort', f),
        Promise.race([y({ request: t, params: r.params, context: u }), h])
      )
    }
  try {
    let y = r.route[e]
    if (r.route.lazy)
      if (y) d = (await Promise.all([p(y), Ky(r.route, i, o)]))[0]
      else if ((await Ky(r.route, i, o), (y = r.route[e]), y)) d = await p(y)
      else {
        if (e === 'action')
          throw Tr(405, {
            method: t.method,
            pathname: new URL(t.url).pathname,
            routeId: r.route.id,
          })
        return { type: Ye.data, data: void 0 }
      }
    else
      Z(y, 'Could not find the ' + e + ' to run on the "' + r.route.id + '" route'),
        (d = await p(y))
    Z(
      d !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + r.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (y) {
    ;(c = Ye.error), (d = y)
  } finally {
    f && t.signal.removeEventListener('abort', f)
  }
  if (IB(d)) {
    let y = d.status
    if (PB.has(y)) {
      let g = d.headers.get('Location')
      if (
        (Z(g, 'Redirects returned/thrown from loaders/actions must have a Location header'),
        Kx.test(g))
      ) {
        if (!s) {
          let w = new URL(t.url),
            _ = g.startsWith('//') ? new URL(w.protocol + g) : new URL(g),
            z = Ps(_.pathname, a) != null
          _.origin === w.origin && z && (g = _.pathname + _.search + _.hash)
        }
      } else {
        let w = n.slice(0, n.indexOf(r) + 1),
          _ = gc(w).map((T) => T.pathnameBase),
          z = am(g, _, new URL(t.url).pathname)
        if ((Z(ln(z), 'Unable to resolve redirect location: ' + g), a)) {
          let T = z.pathname
          z.pathname = T === '/' ? a : tn([a, T])
        }
        g = ln(z)
      }
      if (s) throw (d.headers.set('Location', g), d)
      return {
        type: Ye.redirect,
        status: y,
        location: g,
        revalidate: d.headers.get('X-Remix-Revalidate') !== null,
      }
    }
    if (l) throw { type: c || Ye.data, response: d }
    let m,
      h = d.headers.get('Content-Type')
    return (
      h && /\bapplication\/json\b/.test(h) ? (m = await d.json()) : (m = await d.text()),
      c === Ye.error
        ? { type: c, error: new sm(y, d.statusText, m), headers: d.headers }
        : { type: Ye.data, data: m, statusCode: d.status, headers: d.headers }
    )
  }
  if (c === Ye.error) return { type: c, error: d }
  if (FB(d)) {
    var b, S
    return {
      type: Ye.deferred,
      deferredData: d,
      statusCode: (b = d.init) == null ? void 0 : b.status,
      headers: ((S = d.init) == null ? void 0 : S.headers) && new Headers(d.init.headers),
    }
  }
  return { type: Ye.data, data: d }
}
function Zi(e, t, r, n) {
  let o = e.createURL(qx(t)).toString(),
    i = { signal: r }
  if (n && Ur(n.formMethod)) {
    let { formMethod: a, formEncType: s, formData: l } = n
    ;(i.method = a.toUpperCase()), (i.body = s === 'application/x-www-form-urlencoded' ? Xx(l) : l)
  }
  return new Request(o, i)
}
function Xx(e) {
  let t = new URLSearchParams()
  for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n)
  return t
}
function LB(e, t, r, n, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {}
  return (
    r.forEach((c, d) => {
      let f = t[d].route.id
      if ((Z(!ci(c), 'Cannot handle redirect results in processLoaderData'), Ra(c))) {
        let p = Zo(e, f),
          b = c.error
        n && ((b = Object.values(n)[0]), (n = void 0)),
          (a = a || {}),
          a[p.route.id] == null && (a[p.route.id] = b),
          (i[f] = void 0),
          l || ((l = !0), (s = Hx(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers)
      } else
        uo(c) ? (o.set(f, c.deferredData), (i[f] = c.deferredData.data)) : (i[f] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !l && (s = c.statusCode),
          c.headers && (u[f] = c.headers)
    }),
    n && ((a = n), (i[Object.keys(n)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  )
}
function Yy(e, t, r, n, o, i, a, s) {
  let { loaderData: l, errors: u } = LB(t, r, n, o, s)
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f } = i[c]
    Z(a !== void 0 && a[c] !== void 0, 'Did not find corresponding fetcher result')
    let p = a[c]
    if (Ra(p)) {
      let b = Zo(e.matches, f == null ? void 0 : f.route.id)
      ;(u && u[b.route.id]) || (u = ie({}, u, { [b.route.id]: p.error })), e.fetchers.delete(d)
    } else if (ci(p)) Z(!1, 'Unhandled fetcher revalidation redirect')
    else if (uo(p)) Z(!1, 'Unhandled fetcher deferred data')
    else {
      let b = {
        'state': 'idle',
        'data': p.data,
        'formMethod': void 0,
        'formAction': void 0,
        'formEncType': void 0,
        'formData': void 0,
        ' _hasFetcherDoneAnything ': !0,
      }
      e.fetchers.set(d, b)
    }
  }
  return { loaderData: l, errors: u }
}
function Qy(e, t, r, n) {
  let o = ie({}, t)
  for (let i of r) {
    let a = i.route.id
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break
  }
  return o
}
function Zo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  )
}
function Xy(e) {
  let t = e.find((r) => r.index || !r.path || r.path === '/') || { id: '__shim-error-route__' }
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t }
}
function Tr(e, t) {
  let { pathname: r, routeId: n, method: o, type: i } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((a = 'Bad Request'),
        o && r && n
          ? (s =
              'You made a ' +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action' && (s = 'defer() is not supported in actions'))
      : e === 403
      ? ((a = 'Forbidden'), (s = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((a = 'Not Found'), (s = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        o && r && n
          ? (s =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new sm(e || 500, a, new Error(s), !0)
  )
}
function qy(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t]
    if (ci(r)) return r
  }
}
function qx(e) {
  let t = typeof e == 'string' ? cn(e) : e
  return ln(ie({}, t, { hash: '' }))
}
function BB(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
}
function uo(e) {
  return e.type === Ye.deferred
}
function Ra(e) {
  return e.type === Ye.error
}
function ci(e) {
  return (e && e.type) === Ye.redirect
}
function FB(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function IB(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function OB(e) {
  return _B.has(e.toLowerCase())
}
function Ur(e) {
  return kB.has(e.toLowerCase())
}
async function Zy(e, t, r, n, o, i) {
  for (let a = 0; a < r.length; a++) {
    let s = r[a],
      l = t[a]
    if (!l) continue
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !Qx(u, l) && (i && i[l.route.id]) !== void 0
    uo(s) &&
      (o || c) &&
      (await Zx(s, n, o).then((d) => {
        d && (r[a] = d || r[a])
      }))
  }
}
async function Zx(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Ye.data, data: e.deferredData.unwrappedData }
      } catch (o) {
        return { type: Ye.error, error: o }
      }
    return { type: Ye.data, data: e.deferredData.data }
  }
}
function Jx(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function Jy(e, t) {
  let { route: r, pathname: n, params: o } = e
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle }
}
function gh(e, t) {
  let r = typeof t == 'string' ? cn(t).search : t.search
  if (e[e.length - 1].route.index && Jx(r || '')) return e[e.length - 1]
  let n = gc(e)
  return n[n.length - 1]
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function VB(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const NB = typeof Object.is == 'function' ? Object.is : VB,
  { useState: jB, useEffect: WB, useLayoutEffect: UB, useDebugValue: HB } = Aa
function GB(e, t, r) {
  const n = t(),
    [{ inst: o }, i] = jB({ inst: { value: n, getSnapshot: t } })
  return (
    UB(() => {
      ;(o.value = n), (o.getSnapshot = t), Vd(o) && i({ inst: o })
    }, [e, n, t]),
    WB(
      () => (
        Vd(o) && i({ inst: o }),
        e(() => {
          Vd(o) && i({ inst: o })
        })
      ),
      [e]
    ),
    HB(n),
    n
  )
}
function Vd(e) {
  const t = e.getSnapshot,
    r = e.value
  try {
    const n = t()
    return !NB(r, n)
  } catch {
    return !0
  }
}
function KB(e, t, r) {
  return t()
}
const YB =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  QB = !YB,
  XB = QB ? KB : GB,
  qB = 'useSyncExternalStore' in Aa ? ((e) => e.useSyncExternalStore)(Aa) : XB,
  lm = x.createContext(null),
  yc = x.createContext(null),
  Ts = x.createContext(null),
  vc = x.createContext(null),
  Po = x.createContext({ outlet: null, matches: [] }),
  ew = x.createContext(null)
function yh() {
  return (
    (yh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    yh.apply(this, arguments)
  )
}
function ZB(e, t) {
  let { relative: r } = t === void 0 ? {} : t
  $i() || Z(!1)
  let { basename: n, navigator: o } = x.useContext(Ts),
    { hash: i, pathname: a, search: s } = rw(e, { relative: r }),
    l = a
  return (
    n !== '/' && (l = a === '/' ? n : tn([n, a])), o.createHref({ pathname: l, search: s, hash: i })
  )
}
function $i() {
  return x.useContext(vc) != null
}
function bc() {
  return $i() || Z(!1), x.useContext(vc).location
}
function tw() {
  $i() || Z(!1)
  let { basename: e, navigator: t } = x.useContext(Ts),
    { matches: r } = x.useContext(Po),
    { pathname: n } = bc(),
    o = JSON.stringify(gc(r).map((s) => s.pathnameBase)),
    i = x.useRef(!1)
  return (
    x.useEffect(() => {
      i.current = !0
    }),
    x.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return
        if (typeof s == 'number') {
          t.go(s)
          return
        }
        let u = am(s, JSON.parse(o), n, l.relative === 'path')
        e !== '/' && (u.pathname = u.pathname === '/' ? e : tn([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l)
      },
      [e, t, o, n]
    )
  )
}
const JB = x.createContext(null)
function eF(e) {
  let t = x.useContext(Po).outlet
  return t && x.createElement(JB.Provider, { value: e }, t)
}
function rw(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = x.useContext(Po),
    { pathname: o } = bc(),
    i = JSON.stringify(gc(n).map((a) => a.pathnameBase))
  return x.useMemo(() => am(e, JSON.parse(i), o, r === 'path'), [e, i, o, r])
}
function tF(e, t) {
  $i() || Z(!1)
  let { navigator: r } = x.useContext(Ts),
    n = x.useContext(yc),
    { matches: o } = x.useContext(Po),
    i = o[o.length - 1],
    a = i ? i.params : {}
  i && i.pathname
  let s = i ? i.pathnameBase : '/'
  i && i.route
  let l = bc(),
    u
  if (t) {
    var c
    let S = typeof t == 'string' ? cn(t) : t
    s === '/' || ((c = S.pathname) != null && c.startsWith(s)) || Z(!1), (u = S)
  } else u = l
  let d = u.pathname || '/',
    f = s === '/' ? d : d.slice(s.length) || '/',
    p = qo(e, { pathname: f }),
    b = iF(
      p &&
        p.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: tn([
              s,
              r.encodeLocation ? r.encodeLocation(S.pathname).pathname : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? s
                : tn([
                    s,
                    r.encodeLocation ? r.encodeLocation(S.pathnameBase).pathname : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n || void 0
    )
  return t && b
    ? x.createElement(
        vc.Provider,
        {
          value: {
            location: yh({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: He.Pop,
          },
        },
        b
      )
    : b
}
function rF() {
  let e = uF(),
    t = Hx(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? x.createElement('pre', { style: o }, r) : null,
    i
  )
}
class nF extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error
      ? x.createElement(
          Po.Provider,
          { value: this.props.routeContext },
          x.createElement(ew.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children
  }
}
function oF(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = x.useContext(lm)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(Po.Provider, { value: t }, n)
  )
}
function iF(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches
    else return null
  let n = e,
    o = r == null ? void 0 : r.errors
  if (o != null) {
    let i = n.findIndex((a) => a.route.id && (o == null ? void 0 : o[a.route.id]))
    i >= 0 || Z(!1), (n = n.slice(0, Math.min(n.length, i + 1)))
  }
  return n.reduceRight((i, a, s) => {
    let l = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = null
    r &&
      (a.route.ErrorBoundary
        ? (u = x.createElement(a.route.ErrorBoundary, null))
        : a.route.errorElement
        ? (u = a.route.errorElement)
        : (u = x.createElement(rF, null)))
    let c = t.concat(n.slice(0, s + 1)),
      d = () => {
        let f = i
        return (
          l
            ? (f = u)
            : a.route.Component
            ? (f = x.createElement(a.route.Component, null))
            : a.route.element && (f = a.route.element),
          x.createElement(oF, { match: a, routeContext: { outlet: i, matches: c }, children: f })
        )
      }
    return r && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? x.createElement(nF, {
          location: r.location,
          component: u,
          error: l,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d()
  }, null)
}
var ev
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator')
})(ev || (ev = {}))
var wu
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator')
})(wu || (wu = {}))
function aF(e) {
  let t = x.useContext(yc)
  return t || Z(!1), t
}
function sF(e) {
  let t = x.useContext(Po)
  return t || Z(!1), t
}
function lF(e) {
  let t = sF(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || Z(!1), r.route.id
}
function uF() {
  var e
  let t = x.useContext(ew),
    r = aF(wu.UseRouteError),
    n = lF(wu.UseRouteError)
  return t || ((e = r.errors) == null ? void 0 : e[n])
}
function cF(e) {
  let { fallbackElement: t, router: r } = e,
    n = x.useCallback(() => r.state, [r]),
    o = qB(r.subscribe, n, n),
    i = x.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (l) => r.navigate(l),
        push: (l, u, c) =>
          r.navigate(l, {
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (l, u, c) =>
          r.navigate(l, {
            replace: !0,
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [r]
    ),
    a = r.basename || '/',
    s = x.useMemo(() => ({ router: r, navigator: i, static: !1, basename: a }), [r, i, a])
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      lm.Provider,
      { value: s },
      x.createElement(
        yc.Provider,
        { value: o },
        x.createElement(
          pF,
          {
            basename: r.basename,
            location: r.state.location,
            navigationType: r.state.historyAction,
            navigator: i,
          },
          r.state.initialized ? x.createElement(mF, null) : t
        )
      )
    ),
    null
  )
}
function dF(e) {
  let { to: t, replace: r, state: n, relative: o } = e
  $i() || Z(!1)
  let i = x.useContext(yc),
    a = tw()
  return (
    x.useEffect(() => {
      ;(i && i.navigation.state !== 'idle') || a(t, { replace: r, state: n, relative: o })
    }),
    null
  )
}
function fF(e) {
  return eF(e.context)
}
function hF(e) {
  Z(!1)
}
function pF(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = He.Pop,
    navigator: i,
    static: a = !1,
  } = e
  $i() && Z(!1)
  let s = t.replace(/^\/*/, '/'),
    l = x.useMemo(() => ({ basename: s, navigator: i, static: a }), [s, i, a])
  typeof n == 'string' && (n = cn(n))
  let { pathname: u = '/', search: c = '', hash: d = '', state: f = null, key: p = 'default' } = n,
    b = x.useMemo(() => {
      let S = Ps(u, s)
      return S == null
        ? null
        : { location: { pathname: S, search: c, hash: d, state: f, key: p }, navigationType: o }
    }, [s, u, c, d, f, p, o])
  return b == null
    ? null
    : x.createElement(
        Ts.Provider,
        { value: l },
        x.createElement(vc.Provider, { children: r, value: b })
      )
}
function mF(e) {
  let { children: t, location: r } = e,
    n = x.useContext(lm),
    o = n && !t ? n.router.routes : vh(t)
  return tF(o, r)
}
var tv
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error')
})(tv || (tv = {}))
new Promise(() => {})
function vh(e, t) {
  t === void 0 && (t = [])
  let r = []
  return (
    x.Children.forEach(e, (n, o) => {
      if (!x.isValidElement(n)) return
      let i = [...t, o]
      if (n.type === x.Fragment) {
        r.push.apply(r, vh(n.props.children, i))
        return
      }
      n.type !== hF && Z(!1), !n.props.index || !n.props.children || Z(!1)
      let a = {
        id: n.props.id || i.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      }
      n.props.children && (a.children = vh(n.props.children, i)), r.push(a)
    }),
    r
  )
}
function gF(e) {
  return !!e.ErrorBoundary || !!e.errorElement
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ku() {
  return (
    (ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ku.apply(this, arguments)
  )
}
function yF(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function vF(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function bF(e, t) {
  return e.button === 0 && (!t || t === '_self') && !vF(e)
}
const SF = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
]
function xF(e, t) {
  return zB({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: JL({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || wF(),
    routes: e,
    detectErrorBoundary: gF,
  }).initialize()
}
function wF() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = ku({}, t, { errors: kF(t.errors) })), t
}
function kF(e) {
  if (!e) return null
  let t = Object.entries(e),
    r = {}
  for (let [n, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      r[n] = new sm(o.status, o.statusText, o.data, o.internal === !0)
    else if (o && o.__type === 'Error') {
      let i = new Error(o.message)
      ;(i.stack = ''), (r[n] = i)
    } else r[n] = o
  return r
}
const CF =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  _F = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rv = x.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      d = yF(t, SF),
      { basename: f } = x.useContext(Ts),
      p,
      b = !1
    if (typeof u == 'string' && _F.test(u) && ((p = u), CF)) {
      let h = new URL(window.location.href),
        g = u.startsWith('//') ? new URL(h.protocol + u) : new URL(u),
        w = Ps(g.pathname, f)
      g.origin === h.origin && w != null ? (u = w + g.search + g.hash) : (b = !0)
    }
    let S = ZB(u, { relative: o }),
      y = PF(u, { replace: a, state: s, target: l, preventScrollReset: c, relative: o })
    function m(h) {
      n && n(h), h.defaultPrevented || y(h)
    }
    return x.createElement(
      'a',
      ku({}, d, { href: p || S, onClick: b || i ? n : m, ref: r, target: l })
    )
  })
var nv
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher')
})(nv || (nv = {}))
var ov
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(ov || (ov = {}))
function PF(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    s = tw(),
    l = bc(),
    u = rw(e, { relative: a })
  return x.useCallback(
    (c) => {
      if (bF(c, r)) {
        c.preventDefault()
        let d = n !== void 0 ? n : ln(l) === ln(u)
        s(e, { replace: d, state: o, preventScrollReset: i, relative: a })
      }
    },
    [l, s, u, n, o, r, e, i, a]
  )
}
function TF(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var Cu = (e, t, r) => {
    const n = TF(e, `colors.${t}`, t)
    try {
      return Ep(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  mt = (e, t) => (r) => {
    const n = Cu(r, e)
    return Hb(n, 1 - t)
  },
  Lo = (e, t) => (r) => {
    const n = Cu(r, e)
    return Ep(oE(n, t / 100))
  }
function q(e, t) {
  return (r) => (r.colorMode === 'dark' ? t : e)
}
const EF = { textTransform: 'normal', fontWeight: 'medium', borderRadius: '2xl' },
  $F = {
    lg: { fontSize: 'sm', px: '3', py: '1' },
    md: { fontSize: 'sm', lineHeight: '1.25rem', px: '2.5', py: '0.5' },
    sm: { fontSize: 'xs', lineHeight: '1.5', px: '2', py: '0.5' },
  },
  RF = {
    subtle: (e) => ({
      bg: q(Lo(`${e.colorScheme}.50`, 2)(e.theme), mt(`${e.colorScheme}.200`, 0.16)(e.theme))(e),
    }),
  },
  zF = { size: 'md', variant: 'subtle' },
  AF = { baseStyle: EF, defaultProps: zF, variants: RF, sizes: $F },
  MF = {
    ':focus:not(:focus-visible)': { boxShadow: 'none' },
    'fontWeight': 'semibold',
    'borderRadius': 'lg',
  },
  DF = { lg: { fontSize: 'md' }, xl: { h: '3.75rem', minW: '3.75rem', fontSize: 'lg', px: 7 } },
  LF = {
    'primary': (e) =>
      e.theme.components.Button.variants.solid({ ...e, variant: 'solid', colorScheme: 'brand' }),
    'primary-on-accent': () => ({
      bg: 'brand.50',
      color: 'brand.600',
      _hover: { bg: 'brand.100' },
      _active: { bg: 'brand.100' },
    }),
    'secondary': (e) =>
      e.theme.components.Button.variants.outline({ ...e, variant: 'outline', colorScheme: 'gray' }),
    'secondary-on-accent': {
      color: 'white',
      borderColor: 'brand.50',
      borderWidth: '1px',
      _hover: { bg: 'whiteAlpha.200' },
      _active: { bg: 'whiteAlpha.200' },
    },
    'outline': (e) => ({
      color: 'emphasized',
      bg: q('white', 'gray.800')(e),
      _hover: { bg: q(Lo('gray.50', 1)(e.theme), mt('gray.700', 0.4)(e.theme))(e) },
      _checked: { bg: q('gray.100', 'gray.700')(e) },
      _active: { bg: q('gray.100', 'gray.700')(e) },
    }),
    'ghost': (e) => ({
      color: 'emphasized',
      _hover: { bg: q(Lo('gray.50', 1)(e.theme), Lo('gray.700', 4)(e.theme))(e) },
      _active: { bg: q(Lo('gray.50', 1)(e.theme), Lo('gray.700', 4)(e.theme))(e) },
      _activeLink: { bg: q('gray.100', 'gray.700')(e) },
    }),
    'ghost-on-accent': (e) => ({
      color: 'brand.50',
      _hover: { bg: mt('brand.500', 0.67)(e.theme) },
      _activeLink: { color: 'white', bg: 'bg-accent-subtle' },
    }),
    'link': (e) =>
      e.colorScheme === 'gray'
        ? {
            color: 'muted',
            _hover: { textDecoration: 'none', color: 'default' },
            _active: { color: 'default' },
          }
        : {
            color: q(`${e.colorScheme}.600`, `${e.colorScheme}.200`)(e),
            _hover: {
              color: q(`${e.colorScheme}.700`, `${e.colorScheme}.300`)(e),
              textDecoration: 'none',
            },
            _active: { color: q(`${e.colorScheme}.700`, `${e.colorScheme}.300`)(e) },
          },
    'link-on-accent': () => ({
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: 'brand.50',
      _hover: { color: 'white' },
      _active: { color: 'white' },
    }),
  },
  BF = { baseStyle: MF, variants: LF, sizes: DF },
  FF = (e) => ({
    label: { color: 'muted', fontWeight: 'medium' },
    control: { bg: q('white', 'gray.800')(e), borderRadius: 'base' },
  }),
  IF = { md: { label: { fontSize: 'sm' } } },
  OF = { colorScheme: 'brand' },
  VF = { baseStyle: FF, sizes: IF, defaultProps: OF },
  NF = { _focus: { boxShadow: 'none' }, _focusVisible: { boxShadow: 'outline' } },
  jF = { baseStyle: NF },
  WF = { maxW: '7xl', px: { base: '4', md: '8' } },
  UF = { baseStyle: WF },
  HF = ['field', 'menu', 'option'],
  GF = {
    field: {
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 50ms ease',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
    menu: { minW: '3xs' },
  },
  KF = {
    outline: (e) => ({
      menu: {
        bg: q('white', 'gray.800')(e),
        boxShadow: 'sm',
        color: 'inherit',
        minW: '3xs',
        py: '2',
        borderRadius: 'md',
        borderWidth: '1px',
      },
      option: { _selected: { bg: q('gray.100', 'gray.700')(e) } },
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: q('white', 'gray.800')(e),
        _hover: { borderColor: q('gray.300', 'whiteAlpha.400')(e) },
        _disabled: { opacity: 0.4, cursor: 'not-allowed', borderColor: 'inherit' },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: {
          borderColor: Cu(e.theme, q('red.500', 'red.300')(e)),
          boxShadow: `0 0 0 1px ${Cu(e.theme, q('red.500', 'red.300')(e))}`,
        },
        _focus: {
          borderColor: q('brand.500', 'brand.200')(e),
          boxShadow: q(
            `0px 0px 0px 1px ${mt('brand.500', 1)(e.theme)}`,
            `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`
          )(e),
        },
        _expanded: {
          borderColor: q('brand.500', 'brand.200')(e),
          boxShadow: q(
            `0px 0px 0px 1px ${mt('brand.500', 1)(e.theme)}`,
            `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`
          )(e),
        },
      },
    }),
  },
  YF = {
    sm: {
      field: { px: 3, h: 8, fontSize: 'sm', borderRadius: 'sm' },
      menu: { fontSize: 'sm', borderRadius: 'sm' },
      option: { px: 3, h: 8, fontSize: 'sm' },
    },
    md: {
      field: { px: 4, h: 10, fontSize: 'md', borderRadius: 'md' },
      menu: { fontSize: 'md', borderRadius: 'md' },
      option: { px: 4, h: 10, fontSize: 'md' },
    },
    lg: {
      field: { px: 4, h: 12, fontSize: 'lg', borderRadius: 'md' },
      menu: { fontSize: 'lg', borderRadius: 'md' },
      option: { px: 4, h: 12, fontSize: 'lg' },
    },
  },
  QF = {
    parts: HF,
    baseStyle: GF,
    variants: KF,
    sizes: YF,
    defaultProps: { size: 'md', variant: 'outline', colorScheme: 'brand' },
  },
  XF = { baseStyle: { opacity: 1 } },
  qF = { color: 'emphasized', mb: '1.5', fontSize: 'sm' },
  ZF = {
    sm: { _peerPlaceholderShown: { fontSize: 'sm', top: '1.5', left: '4' } },
    md: { _peerPlaceholderShown: { fontSize: 'md', top: '2', left: '4' } },
    lg: { _peerPlaceholderShown: { fontSize: 'lg', top: '2.5', left: '4' } },
  },
  JF = {
    inline: () => ({ margin: 0, minW: '2xs' }),
    floating: () => ({
      position: 'absolute',
      transition: 'all 0.12s ease-in',
      pointerEvents: 'none',
      top: '-27px',
      left: '0',
      _peerPlaceholderShown: { fontWeight: 'normal', color: 'subtle' },
      _peerFocus: { fontSize: 'sm', fontWeight: 'medium', top: '-27px', left: '0', color: 'muted' },
    }),
  },
  e6 = { size: 'md' },
  t6 = { baseStyle: qF, sizes: ZF, variants: JF, defaultProps: e6 },
  r6 = { fontWeight: 'semibold' },
  n6 = {
    '2xl': { fontSize: '7xl', lineHeight: '5.625rem', letterSpacing: 'tight' },
    'xl': { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: 'tight' },
    'lg': { fontSize: '5xl', lineHeight: '3.75rem', letterSpacing: 'tight' },
    'md': { fontSize: '4xl', lineHeight: '2.75rem', letterSpacing: 'tight' },
    'sm': { fontSize: '3xl', lineHeight: '2.375rem' },
    'xs': { fontSize: '2xl', lineHeight: '2rem' },
  },
  o6 = { baseStyle: r6, sizes: n6 },
  i6 = {
    'outline': (e) => ({
      field: {
        borderRadius: 'lg',
        bg: q('white', 'gray.800')(e),
        _hover: { borderColor: q('gray.300', 'gray.600')(e) },
        _focus: {
          borderColor: q('brand.500', 'brand.200')(e),
          boxShadow: q(
            `0px 0px 0px 1px ${mt('brand.500', 1)(e.theme)}`,
            `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`
          )(e),
        },
      },
      addon: { borderRadius: 'lg', bg: q('gray.50', 'gray.700')(e) },
    }),
    'outline-on-accent': (e) => ({
      field: {
        bg: 'white',
        borderRadius: 'lg',
        color: 'gray.900',
        borderWidth: '1px',
        borderColor: 'brand.50',
        _placeholder: { color: 'gray.500' },
        _hover: { borderColor: 'brand.100' },
        _focus: {
          borderColor: 'brand.200',
          boxShadow: `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`,
        },
      },
    }),
    'filled': (e) =>
      e.colorScheme === 'gray'
        ? {
            field: {
              bg: q('white', 'gray.800')(e),
              _hover: { borderColor: q('gray.200', 'gray.700')(e), bg: q('white', 'gray.700')(e) },
              _focus: { borderColor: 'accent', bg: q('white', 'gray.800')(e) },
            },
          }
        : {
            field: {
              bg: 'bg-accent-subtle',
              color: 'on-accent',
              _placeholder: { color: 'on-accent' },
              _hover: { borderColor: 'brand.400', bg: 'bg-accent-subtle' },
              _focus: { bg: 'bg-accent-subtle', borderColor: 'brand.300' },
            },
          },
  },
  a6 = { lg: { field: { fontSize: 'md', borderRadius: 'lg' } } },
  s6 = { variants: i6, sizes: a6, defaultProps: { colorScheme: 'gray' } },
  l6 = {
    menu: () => ({ borderRadius: 'lg', _hover: { textDecoration: 'none', bg: 'bg-subtle' } }),
  },
  u6 = { variants: l6 },
  c6 = {
    content: {
      borderWidth: '1px',
      boxShadow: 'lg',
      borderRadius: 'lg',
      background: 'bg-surface',
      overflow: 'hidden',
    },
  },
  d6 = { baseStyle: c6 },
  f6 = { track: { borderRadius: 'base' } },
  h6 = {
    'solid': { track: { bg: 'bg-muted' } },
    'on-accent': { track: { bg: 'transparent' }, filledTrack: { bg: 'brand.50' } },
  },
  p6 = { colorScheme: 'brand', variant: 'solid' },
  m6 = { variants: h6, baseStyle: f6, defaultProps: p6 },
  g6 = (e) => ({
    borderWidth: '1px',
    borderRadius: 'lg',
    p: '4',
    bg: 'bg-surface',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _hover: { borderColor: q('gray.300', 'gray.600')(e) },
    _checked: {
      borderColor: q('brand.500', 'brand.200')(e),
      boxShadow: q(
        `0px 0px 0px 1px ${mt('brand.500', 1)(e.theme)}`,
        `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`
      )(e),
    },
  }),
  y6 = { baseStyle: g6 },
  v6 = {
    table: { bg: 'bg-surface', whiteSpace: 'nowrap' },
    th: {
      fontWeight: 'medium',
      textTransform: 'normal',
      letterSpacing: 'normal',
      borderTopWidth: '1px',
      whiteSpace: 'nowrap',
    },
  },
  b6 = {
    simple: (e) => ({ th: { color: 'muted', bg: q('gray.50', mt('gray.700', 0.4)(e.theme))(e) } }),
    striped: (e) => ({
      th: { color: 'muted', borderBottomWidth: '0px' },
      thead: { 'th,td': { borderWidth: '0px' } },
      tbody: {
        tr: {
          'th,td': { borderWidth: '0px' },
          '&:last-of-type': { 'th, td': { borderBottomWidth: '1px' } },
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '0px' },
            'td': { bg: q('gray.50', mt('gray.700', 0.4)(e.theme))(e) },
          },
        },
      },
    }),
  },
  S6 = { md: { th: { lineHeight: '1.25rem' }, td: { fontSize: 'sm' } } },
  x6 = { sizes: S6, baseStyle: v6, variants: b6 },
  w6 = {
    tab: {
      fontWeight: 'medium',
      color: 'muted',
      _focus: { boxShadow: 'none' },
      _focusVisible: { boxShadow: 'base' },
    },
  },
  k6 = (e) => {
    const { orientation: t, size: r } = e,
      n = t === 'vertical',
      o = t === 'vertical' ? 'borderStart' : 'borderBottom',
      i = n ? 'marginStart' : 'marginBottom',
      a = {
        'pt': '0',
        'pb': '4.5',
        'px': '1',
        'justifyContent': 'start',
        ':not(:last-child)': { me: '4' },
      },
      s = {
        'justifyContent': 'start',
        'px': r === 'lg' ? '3.5' : '3',
        ':not(:last-child)': { mb: '2' },
      }
    return {
      tablist: { [o]: '1px solid', borderColor: 'inherit' },
      tab: {
        color: 'muted',
        [o]: '2px solid transparent',
        [i]: '-1px',
        _selected: { color: 'accent', [o]: '2px solid' },
        _active: { bg: 'transparent' },
        ...(n ? s : a),
      },
    }
  },
  C6 = { tab: { _selected: { color: 'accent' } } },
  _6 = { 'with-line': k6, 'enclosed': C6 },
  P6 = {
    md: { tab: { fontSize: 'sm', lineHeight: '1.25rem', py: '2' } },
    lg: { tab: { fontSize: 'md', py: '2.5' } },
  },
  T6 = { baseStyle: w6, variants: _6, sizes: P6 },
  E6 = {
    outline: (e) => ({
      borderRadius: 'lg',
      bg: q('white', 'gray.800')(e),
      _hover: { borderColor: q('gray.300', 'gray.600')(e) },
      _focus: {
        borderColor: q('brand.500', 'brand.200')(e),
        boxShadow: q(
          `0px 0px 0px 1px ${mt('brand.500', 1)(e.theme)}`,
          `0px 0px 0px 1px ${mt('brand.200', 1)(e.theme)}`
        )(e),
      },
    }),
  },
  $6 = { variants: E6 },
  R6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Badge: AF,
        Button: BF,
        Checkbox: VF,
        CloseButton: jF,
        Container: UF,
        CustomSelect: QF,
        Divider: XF,
        FormLabel: t6,
        Heading: o6,
        Input: s6,
        Link: u6,
        Popover: d6,
        Progress: m6,
        RadioCard: y6,
        Table: x6,
        Tabs: T6,
        Textarea: $6,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  z6 = {
    heading: 'Roboto, InterVariable, -apple-system, system-ui, sans-serif',
    body: 'Roboto, InterVariable, -apple-system, system-ui, sans-serif',
  },
  A6 = {
    'xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
    'sm': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
    'md': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
    'lg': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
    'xl': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
    'xs-dark': '0px 1px 3px rgba(11, 12, 17, 0.9)',
    'sm-dark': '0px 2px 4px rgba(11, 12, 17, 0.9)',
    'md-dark': '0px 4px 8px rgba(11, 12, 17, 0.9)',
    'lg-dark': '0px 8px 16px rgba(11, 12, 17, 0.9)',
    'xl-dark': '0px 16px 24px rgba(11, 12, 17, 0.9)',
  },
  M6 = { 4.5: '1.125rem' },
  D6 = {
    global: (e) => ({
      'body': { color: 'default', bg: 'bg-canvas' },
      '*::placeholder': { opacity: 1, color: 'muted' },
      '*, *::before, &::after': { borderColor: q('gray.200', 'gray.700')(e) },
      'html,body': { height: '100%' },
      '#__next, #root': { display: 'flex', flexDirection: 'column', minH: '100%' },
    }),
  },
  L6 = {
    '7xl': { fontSize: '7xl', lineHeight: '5.75rem', letterSpacing: '-0.02em' },
    '6xl': { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: '-0.02em' },
    '5xl': { fontSize: '5xl', lineHeight: '3.75rem', letterSpacing: '-0.02em' },
    '4xl': { fontSize: '4xl', lineHeight: '2.75rem', letterSpacing: '-0.02em' },
    '3xl': { fontSize: '3xl', lineHeight: '2.375rem' },
    '2xl': { fontSize: '2xl', lineHeight: '2rem' },
    'xl': { fontSize: 'xl', lineHeight: '1.875rem' },
    'lg': { fontSize: 'lg', lineHeight: '1.75rem' },
    'md': { fontSize: 'md', lineHeight: '1.5rem' },
    'sm': { fontSize: 'sm', lineHeight: '1.25rem' },
    'xs': { fontSize: 'xs', lineHeight: '1.125rem' },
  },
  B6 = {
    colors: {
      'bg-canvas': { default: 'gray.50', _dark: 'gray.900' },
      'bg-surface': { default: 'white', _dark: 'gray.800' },
      'bg-subtle': { default: 'gray.50', _dark: 'gray.700' },
      'bg-muted': { default: 'gray.100', _dark: 'gray.600' },
      'default': { default: 'gray.900', _dark: 'white' },
      'inverted': { default: 'white', _dark: 'gray.900' },
      'emphasized': { default: 'gray.700', _dark: 'gray.100' },
      'muted': { default: 'gray.600', _dark: 'gray.300' },
      'subtle': { default: 'gray.500', _dark: 'gray.400' },
      'border': { default: 'gray.200', _dark: 'gray.700' },
      'accent': { default: 'brand.500', _dark: 'brand.200' },
      'success': { default: 'green.600', _dark: 'green.200' },
      'error': { default: 'red.600', _dark: 'red.200' },
      'bg-accent': 'brand.600',
      'bg-accent-subtle': 'brand.500',
      'bg-accent-muted': 'brand.400',
      'on-accent': 'white',
      'on-accent-muted': 'brand.50',
      'on-accent-subtle': 'brand.100',
    },
    shadows: {
      xs: {
        default: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 1px 2px rgba(45, 55, 72,  0.1)',
        _dark: '0px 0px 1px rgba(13, 14, 20, 1), 0px 1px 2px rgba(13, 14, 20, 0.9)',
      },
      sm: {
        default: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 2px 4px rgba(45, 55, 72,  0.1)',
        _dark: '0px 0px 1px rgba(13, 14, 20, 1), 0px 2px 4px rgba(13, 14, 20, 0.9)',
      },
      md: {
        default: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 4px 8px rgba(45, 55, 72,  0.1)',
        _dark: '0px 0px 1px rgba(13, 14, 20, 1), 0px 4px 8px rgba(13, 14, 20, 0.9)',
      },
      lg: {
        default: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 8px 16px rgba(45, 55, 72,  0.1)',
        _dark: '0px 0px 1px rgba(13, 14, 20, 1), 0px 8px 16px rgba(13, 14, 20, 0.9)',
      },
      xl: {
        default: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 16px 24px rgba(45, 55, 72,  0.1)',
        _dark: '0px 0px 1px rgba(13, 14, 20, 1), 0px 16px 24px rgba(13, 14, 20, 0.9)',
      },
    },
  },
  F6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        fonts: z6,
        semanticTokens: B6,
        shadows: A6,
        space: M6,
        styles: D6,
        textStyles: L6,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nw = yz({ ...F6, components: { ...R6 } })
var ow = 'https://static.elfsight.com/platform/platform.js'
function I6() {
  x.useEffect(function () {
    O6() || j6()
  }, [])
}
function O6() {
  return V6() || N6()
}
function V6() {
  return 'eapps' in window
}
function N6() {
  return !!document.querySelector('script[src="' + ow + '"]')
}
function j6() {
  var e = document.createElement('script')
  ;(e.src = ow), (e.defer = !0), document.head.appendChild(e)
}
function W6(e) {
  var t = e.widgetID
  return I6(), zt.createElement('div', { className: 'elfsight-app-' + t })
}
var iw = x.memo(W6)
const U6 = () =>
    gt(kh, {
      children: [
        A(mc, { as: 'h1', size: 'lg', textAlign: 'center', children: 'Contact' }),
        A(iw, { widgetID: '1d6f76ef-e10d-4d99-b958-0a49cca41cb9' }),
      ],
    }),
  H6 = '/assets/sedona-header-e1943e27.jpg',
  G6 = ({ children: e, ...t }) =>
    A(im, {
      borderRadius: '24px',
      backgroundImage: `url(${H6})`,
      backgroundSize: 'cover',
      height: '300px',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      ...t,
      children: A(mc, { size: '2xl', textShadow: 'dark-lg', children: e }),
    }),
  K6 = () =>
    gt(kh, {
      children: [
        A(G6, { borderBottomRadius: 0, children: 'Reviews' }),
        A(iw, { widgetID: 'd254839d-abb3-4085-b4a1-59a38451e70f' }),
      ],
    })
var aw = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  iv = zt.createContext && zt.createContext(aw),
  Vn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Vn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r]
              for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
          }),
        Vn.apply(this, arguments)
      )
    },
  Y6 =
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
function sw(e) {
  return (
    e &&
    e.map(function (t, r) {
      return zt.createElement(t.tag, Vn({ key: r }, t.attr), sw(t.child))
    })
  )
}
function lw(e) {
  return function (t) {
    return zt.createElement(Q6, Vn({ attr: Vn({}, e.attr) }, t), sw(e.child))
  }
}
function Q6(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      i = e.title,
      a = Y6(e, ['attr', 'size', 'title']),
      s = o || r.size || '1em',
      l
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      zt.createElement(
        'svg',
        Vn({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, n, a, {
          className: l,
          style: Vn(Vn({ color: e.color || r.color }, r.style), e.style),
          height: s,
          width: s,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        i && zt.createElement('title', null, i),
        e.children
      )
    )
  }
  return iv !== void 0
    ? zt.createElement(iv.Consumer, null, function (r) {
        return t(r)
      })
    : t(aw)
}
function X6(e) {
  return lw({
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
function q6(e) {
  return lw({
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
const Z6 = (e) => {
    const t = ZL({ base: !1, lg: !0 })
    return A(ds, {
      as: 'section',
      bg: 'white',
      mb: { base: 5 },
      ...e,
      children: A(ds, {
        as: 'nav',
        bg: 'bg-surface',
        boxShadow: 'sm',
        children: A(om, {
          py: { base: '4', lg: '5' },
          maxW: '6xl',
          children: gt(ph, {
            spacing: '10',
            justify: 'space-between',
            children: [
              A(mc, { fontSize: 'lg', children: 'Sedona Guest Services' }),
              t
                ? gt(im, {
                    justify: 'space-between',
                    flex: '1',
                    children: [
                      A(Lx, {
                        variant: 'link',
                        spacing: '8',
                        children: A($a, {
                          variant: 'link',
                          as: rv,
                          to: '/reviews',
                          children: 'Reviews',
                        }),
                      }),
                      gt(ph, {
                        spacing: '3',
                        children: [
                          A($a, {
                            leftIcon: A(q6, {}),
                            onClick: () => window.open('tel:928.985.0575'),
                            children: '928.985.0575',
                          }),
                          A($a, {
                            colorScheme: 'linkedin',
                            as: rv,
                            to: '/contact',
                            children: 'Contact',
                          }),
                        ],
                      }),
                    ],
                  })
                : A(Bx, {
                    'variant': 'ghost',
                    'icon': A(X6, { fontSize: '1.25rem' }),
                    'aria-label': 'Open Menu',
                  }),
            ],
          }),
        }),
      }),
    })
  },
  J6 = () =>
    gt(ds, {
      bg: 'linkedin.50',
      minH: '100vh',
      children: [A(Z6, {}), A(om, { maxW: '6xl', children: A(fF, {}) })],
    })
console.log('theme', nw)
const eI = xF([
  {
    path: '/',
    element: A(J6, {}),
    children: [
      { path: '/reviews', element: A(K6, {}) },
      { path: '/contact', element: A(U6, {}) },
      { path: '/', element: A(dF, { to: '/reviews', replace: !0 }) },
    ],
  },
])
mh.createRoot(document.getElementById('root')).render(
  A(zt.StrictMode, { children: A(LL, { theme: nw, children: A(cF, { router: eI }) }) })
)
