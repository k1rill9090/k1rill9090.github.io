"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[597],{"./src/homeworks/LangSwitcher/LangContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jr:()=>useLang,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LangContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({lang:"ru",toggleLang:null}),useLang=function useLang(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LangContext)},LangProvider=function LangProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.language),2),lang=_useState2[0],setLang=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LangContext.Provider,{value:{lang,toggleLang:function toggleLang(){setLang((function(prevLang){return"ru"===prevLang?"en":"ru"}))}},children})};LangProvider.displayName="LangProvider";const __WEBPACK_DEFAULT_EXPORT__=LangProvider;try{LangContext.displayName="LangContext",LangContext.__docgenInfo={description:"",displayName:"LangContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/LangSwitcher/LangContext.tsx#LangContext"]={docgenInfo:LangContext.__docgenInfo,name:"LangContext",path:"src/homeworks/LangSwitcher/LangContext.tsx#LangContext"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fg:()=>useTheme,f6:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({theme:"light",toggleTheme:null}),useTheme=function useTheme(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext)},ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("light"),2),theme=_useState2[0],setTheme=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ThemeContext.Provider,{value:{theme,toggleTheme:function toggleTheme(){setTheme((function(prevTheme){return"light"===prevTheme?"dark":"light"}))}},children})};ThemeProvider.displayName="ThemeProvider";try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/jsxCss/general/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Header_Header});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Header_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Header/Header.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Header_module.Z,options);const Header_Header_module=Header_module.Z&&Header_module.Z.locals?Header_module.Z.locals:void 0;var Logo=__webpack_require__("./src/homeworks/jsxCss/general/Logo/Logo.tsx"),ThemeContext=__webpack_require__("./src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext.tsx"),Switch_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/ThemeSwitcher/Switch/Switch.module.sass"),Switch_module_options={};Switch_module_options.styleTagTransform=styleTagTransform_default(),Switch_module_options.setAttributes=setAttributesWithoutAttributes_default(),Switch_module_options.insert=insertBySelector_default().bind(null,"head"),Switch_module_options.domAPI=styleDomAPI_default(),Switch_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_module.Z,Switch_module_options);const Switch_Switch_module=Switch_module.Z&&Switch_module.Z.locals?Switch_module.Z.locals:void 0;var LightMode=__webpack_require__("./node_modules/@mui/icons-material/esm/LightMode.js"),DarkMode=__webpack_require__("./node_modules/@mui/icons-material/esm/DarkMode.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Switch=function Switch(){var _useTheme=(0,ThemeContext.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return(0,jsx_runtime.jsx)("button",{className:Switch_Switch_module.root,onClick:function onClick(){return toggleTheme()},children:"light"===theme?(0,jsx_runtime.jsx)(DarkMode.Z,{}):(0,jsx_runtime.jsx)(LightMode.Z,{})})};Switch.displayName="Switch";const Switch_Switch=Switch;var LangContext=__webpack_require__("./src/homeworks/LangSwitcher/LangContext.tsx"),LangSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/LangSwitcher/LangSwitcher.module.sass"),LangSwitcher_module_options={};LangSwitcher_module_options.styleTagTransform=styleTagTransform_default(),LangSwitcher_module_options.setAttributes=setAttributesWithoutAttributes_default(),LangSwitcher_module_options.insert=insertBySelector_default().bind(null,"head"),LangSwitcher_module_options.domAPI=styleDomAPI_default(),LangSwitcher_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSwitcher_module.Z,LangSwitcher_module_options);const LangSwitcher_LangSwitcher_module=LangSwitcher_module.Z&&LangSwitcher_module.Z.locals?LangSwitcher_module.Z.locals:void 0;var LangSwitcher=function LangSwitcher(){var _useLang=(0,LangContext.Jr)(),lang=_useLang.lang,toggleLang=_useLang.toggleLang;return(0,jsx_runtime.jsx)("button",{className:LangSwitcher_LangSwitcher_module.lang,onClick:function onClick(){return toggleLang()},children:"ru"===lang?"en":"ru"})};LangSwitcher.displayName="LangSwitcher";const LangSwitcher_LangSwitcher=LangSwitcher;var Header=function Header(_ref){var children=_ref.children,theme=(0,ThemeContext.Fg)().theme;return(0,jsx_runtime.jsxs)("div",{className:Header_Header_module["header-".concat(theme)],children:[(0,jsx_runtime.jsxs)("div",{className:Header_Header_module.headerContent,children:[(0,jsx_runtime.jsx)("div",{className:Header_Header_module.logo,children:(0,jsx_runtime.jsx)(Logo.Z,{children:"Lorem"})}),(0,jsx_runtime.jsxs)("div",{className:Header_Header_module.children,children:[(0,jsx_runtime.jsx)(Switch_Switch,{}),(0,jsx_runtime.jsx)(LangSwitcher_LangSwitcher,{}),children]})]}),(0,jsx_runtime.jsx)("hr",{})]})};Header.displayName="Header";const Header_Header=Header;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/jsxCss/general/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/homeworks/jsxCss/general/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/jsxCss/general/Layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Layout_Layout});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/homeworks/jsxCss/general/Header/Header.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Layout/Layout.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Layout_module.Z,options);const Layout_Layout_module=Layout_module.Z&&Layout_module.Z.locals?Layout_module.Z.locals:void 0;var ThemeContext=__webpack_require__("./src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Layout=function Layout(_ref){var children=_ref.children,theme=(0,ThemeContext.Fg)().theme;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)([Layout_Layout_module.layout,Layout_Layout_module["layout-".concat(theme)]]),children:[(0,jsx_runtime.jsx)(Header.Z,{}),(0,jsx_runtime.jsx)("main",{children})]})};Layout.displayName="Layout";const Layout_Layout=Layout;try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/jsxCss/general/Layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/homeworks/jsxCss/general/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/jsxCss/general/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Logo_Logo});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Logo/Logo.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo_module.Z,options);const Logo_Logo_module=Logo_module.Z&&Logo_module.Z.locals?Logo_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(_ref){var children=_ref.children;return(0,jsx_runtime.jsxs)("div",{className:Logo_Logo_module.logo,children:[(0,jsx_runtime.jsx)("img",{src:__webpack_require__("./src/homeworks/jsxCss/general/Logo/logo.svg")}),(0,jsx_runtime.jsx)("div",{className:Logo_Logo_module.children,children})]})};Logo.displayName="Logo";const Logo_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/jsxCss/general/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/homeworks/jsxCss/general/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/LangSwitcher/LangSwitcher.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.umpV7R2Eg3Ex_c4Bn10v{background:none;border:none;font-family:"Montserrat",sans-serif;font-size:14px;cursor:pointer}',"",{version:3,sources:["webpack://./src/homeworks/LangSwitcher/LangSwitcher.module.sass"],names:[],mappings:"AAAA,sBACI,eAAA,CACA,WAAA,CACA,mCAAA,CACA,cAAA,CACA,cAAA",sourcesContent:[".lang\n    background: none\n    border: none\n    font-family: 'Montserrat', sans-serif\n    font-size: 14px\n    cursor: pointer"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={lang:"umpV7R2Eg3Ex_c4Bn10v"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/ThemeSwitcher/Switch/Switch.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Gt1aSvYRnoykOQgeTmJv{border:0;padding:0;background:none;cursor:pointer}","",{version:3,sources:["webpack://./src/homeworks/ThemeSwitcher/Switch/Switch.module.sass"],names:[],mappings:"AAAA,sBACE,QAAA,CACA,SAAA,CACA,eAAA,CACA,cAAA",sourcesContent:[".root\n  border: 0\n  padding: 0\n  background: none\n  cursor: pointer\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Gt1aSvYRnoykOQgeTmJv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Header/Header.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LIS46r1TrcLA68sZ0tV3{position:sticky;top:0;width:100%;background-color:rgba(229,247,254,.9098039216)}.vTTx0rLTCC_5C2rRBtEh{position:sticky;top:0;width:100%;background-color:rgba(88,88,88,.9098039216);color:#fff}.NkJh6V_2NDinOuTnnS7g{display:flex;flex-direction:row;padding-top:1rem;padding-left:3rem;padding-bottom:1rem}.EqfbyLRsgYDN4DVr4OlS hr{margin:0}.y_YM8tBdMctbnoe8zZXV{display:flex;flex-direction:row;align-items:center}.fr6kOTWFxUXpe7e6A0cQ{margin-right:100px}@media(max-width: 770px){.NkJh6V_2NDinOuTnnS7g{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem 0}.fr6kOTWFxUXpe7e6A0cQ{margin:0}}","",{version:3,sources:["webpack://./src/homeworks/jsxCss/general/Header/Header.module.sass"],names:[],mappings:"AAAA,sBACI,eAAA,CACA,KAAA,CACA,UAAA,CACA,8CAAA,CAEJ,sBACI,eAAA,CACA,KAAA,CACA,UAAA,CACA,2CAAA,CACA,UAAA,CAEJ,sBACI,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEJ,yBACI,QAAA,CAEJ,sBACI,YAAA,CACA,kBAAA,CACA,kBAAA,CAGJ,sBACI,kBAAA,CAEJ,yBACI,sBACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CAKJ,sBACI,QAAA,CAAA",sourcesContent:[".header-light\n    position: sticky\n    top: 0\n    width: 100%\n    background-color: #e5f7fee8\n\n.header-dark\n    position: sticky\n    top: 0\n    width: 100%\n    background-color: #585858e8\n    color: white\n\n.headerContent\n    display: flex\n    flex-direction: row\n    padding-top: 1rem\n    padding-left: 3rem\n    padding-bottom: 1rem\n\n.header hr\n    margin: 0\n    \n.children\n    display: flex\n    flex-direction: row\n    align-items: center\n    // padding: 10px\n\n.logo\n    margin-right: 100px\n\n@media (max-width: 770px)\n    .headerContent\n        display: flex\n        flex-direction: column\n        justify-content: center\n        align-items: center\n        padding: 1rem 0\n        // gap: 30px\n        // padding-bottom: 30px\n        // padding-top: 1rem\n        // padding-left: 3rem\n    .logo\n        margin: 0"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"header-light":"LIS46r1TrcLA68sZ0tV3","header-dark":"vTTx0rLTCC_5C2rRBtEh",headerContent:"NkJh6V_2NDinOuTnnS7g",header:"EqfbyLRsgYDN4DVr4OlS",children:"y_YM8tBdMctbnoe8zZXV",logo:"fr6kOTWFxUXpe7e6A0cQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Layout/Layout.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,".NkTpMs0bnxLXornID6ey{position:relative}.NkTpMs0bnxLXornID6ey main{width:50%;margin:0 auto}.m_qtmKTdX1ugLsB7rCB2{background-color:#fff;color:#000}.mndnlFW4zGuCIKFkBGIK{background-color:#000;color:#fff}","",{version:3,sources:["webpack://./src/homeworks/jsxCss/general/Layout/Layout.module.sass"],names:[],mappings:"AAEA,sBACI,iBAAA,CACA,2BACI,SAAA,CACA,aAAA,CAER,sBACI,qBAAA,CACA,UAAA,CAEJ,sBACI,qBAAA,CACA,UAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')\n\n.layout\n    position: relative\n    main\n        width: 50%\n        margin: 0 auto\n\n.layout-light\n    background-color: white\n    color: black\n\n.layout-dark\n    background-color: black\n    color: white\n\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"NkTpMs0bnxLXornID6ey","layout-light":"m_qtmKTdX1ugLsB7rCB2","layout-dark":"mndnlFW4zGuCIKFkBGIK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/jsxCss/general/Logo/Logo.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.vAmebf6XutDd2fdQZWcL{display:flex;flex-direction:row;align-items:center;gap:20px}.t_BIYwITeTFYi1822vju{font-family:"Montserrat",sans-serif}',"",{version:3,sources:["webpack://./src/homeworks/jsxCss/general/Logo/Logo.module.sass"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,QAAA,CAEJ,sBACI,mCAAA",sourcesContent:[".logo\n    display: flex\n    flex-direction: row\n    align-items: center\n    gap: 20px\n\n.children\n    font-family: 'Montserrat', sans-serif"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={logo:"vAmebf6XutDd2fdQZWcL",children:"t_BIYwITeTFYi1822vju"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/homeworks/jsxCss/general/Logo/logo.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/logo.61cb7ca6.svg"}}]);