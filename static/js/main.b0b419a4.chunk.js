(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},51:function(e,t,n){e.exports=n(95)},60:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(30),r=n.n(o),s=n(25),c=(n(60),n(18)),l=n.n(c),u=n(26),m=n(29),p=n.n(m);function d(e){return p.a.get("search?q=".concat(e)).then(function(e){return{response:e}}).catch(function(e){return{error:e}})}var h="UI_SA_GET_ITEMS_LIST",v=n(20),g=(n(79),n(50)),f=n(21);var b=n(24),_=Object(v.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SA_RE_SAVE_ITEMS_LIST":return t.items;case"UI_RE_ADD_ITEM":return e.push(t.item),e;case"UI_RE_REMOVE_ITEM":return Object(b.remove)(e,function(e){return e.id===t.item.id}),e;case"UI_RE_RESET_ITEMS_LIST":return[];case"UI_RE_TOGGLE_FAVOURITE_ITEM":case"UI_RE_EDIT_ITEM":default:return e}},searchItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SA_RE_SAVE_SEARCH_ITEMS_LIST":return t.items.map(function(e){return Object(f.a)({},e.data&&e.data[0],{imageUrl:e.links&&e.links[0].href,isFavourite:!1})});case h:case"UI_RE_RESET_ITEMS_LIST":return[];case"UI_RE_REMOVE_ITEM":return e.map(function(e){return e.id===t.item.id?Object(f.a)({},t.item,{isAdded:!1,isFavourite:!1}):e});case"UI_RE_ADD_ITEM":default:return e}}}),E=[],C=Object(g.a)();E.push(C);var O=Object(v.e)(_,v.a.apply(void 0,E)),y=function(e){return{type:"SA_RE_SAVE_ITEMS_LIST",items:e}},I=function(e){return{type:"SA_RE_SAVE_SEARCH_ITEMS_LIST",items:e}},j=l.a.mark(S),k=l.a.mark(w);function S(e){var t,n,a;return l.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(u.b)(d,e.query);case 2:t=i.sent,n=t.response,a=t.error,n&&(e.callback(null),O.dispatch(I(n.data.collection.items))),a&&e.callback("Error");case 7:case"end":return i.stop()}},j)}function w(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)(h,S);case 2:case"end":return e.stop()}},k)}var N=l.a.mark(T);function T(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)([Object(u.c)(w)]);case 2:case"end":return e.stop()}},N)}var A=n(47),D=n(6),x=n(7),P=n(10),F=n(8),U=n(3),R=n(9),M=n(48),L=n(23),V=n(12),W=(n(19),function(e){var t=e.imgClassName,n=Object(V.a)(e,["imgClassName"]);return i.a.createElement("img",Object.assign({className:"image ".concat(t)},n,{alt:""}))});W.defaultProps={imgClassName:""};var K=W,B=(n(81),function(e){var t=e.onClick,n=e.btnClassName,a=e.iconClassName,o=e.children,r=e.imageUrl,s=Object(V.a)(e,["onClick","btnClassName","iconClassName","children","imageUrl"]);return i.a.createElement("button",Object.assign({className:"button ".concat(n),onClick:Object(b.throttle)(t,350)},s),r&&i.a.createElement("img",{src:r,className:a,alt:""}),o)});B.defaultProps={btnClassName:"",imageUrl:"",onClick:function(){}};var G=B,J=function(e){var t=e.inputClassName,n=e.onChange,a=e.onKeyDown,o=Object(V.a)(e,["inputClassName","onChange","onKeyDown"]);return i.a.createElement("input",Object.assign({className:"text-input ".concat(t),onChange:n,onKeyDown:a},o))};J.defaultProps={inputClassName:"",onChange:function(){},onKeyDown:function(){}};var Y=J,H=(n(82),function(e){var t=e.loaderClassName;return i.a.createElement("div",{className:"loader ".concat(t)})}),q=(n(83),function(e){var t=e.isVisible,n=e.children,a=e.popupClassName,o=Object(V.a)(e,["isVisible","children","popupClassName"]);return i.a.createElement("div",Object.assign({className:t?"popup ".concat(a):"invisible"},o),n)});q.defaultProps={isVisible:!1};var z=q,$=function(e){var t=e.inputClassName,n=e.onChange,a=e.onKeyDown,o=Object(V.a)(e,["inputClassName","onChange","onKeyDown"]);return i.a.createElement("textarea",Object.assign({className:"text-input ".concat(t),onChange:n,onKeyDown:a},o))};$.defaultProps={inputClassName:"",onChange:function(){},onKeyDown:function(){}};var Q=$,X=(n(84),function(e){var t=e.options,n=e.onChange,a=Object(V.a)(e,["options","onChange"]);return i.a.createElement("select",Object.assign({className:"select",onChange:n},a),t&&t.map(function(e,t){return i.a.createElement("option",{key:t.toString(),value:e.value,className:"option"},e.name)}))});X.defaultProps={imgClassName:""};var Z=X,ee={Image:{DefaultImage:"images/default_image.png",Edit:"icon/edit.png",Delete:"icon/delete.png",ActiveFavourite:"icon/active_favourite.png",Favourite:"icon/favourite.png",Search:"icon/search.png",Save:"icon/save.png",Close:"icon/close.png",Consider:"icon/consider.png",Happy:"icon/happy.png",Add:"icon/add.png",AddWhite:"icon/add_white.png",Checked:"icon/checked.png",Back:"icon/back.png",Next:"icon/next.png",LikeWhite:"icon/like_white.png",Up:"icon/up.png",UpWhite:"icon/up_white.png",Down:"icon/down.png",DownWhite:"icon/down_white.png"}},te=function(){function e(){Object(D.a)(this,e)}return Object(x.a)(e,null,[{key:"isString",value:function(e){return"string"===typeof e||e instanceof String}},{key:"isStringAndNotEmpty",value:function(t){return!(!t||!e.isString(t))}},{key:"getDateFormat",value:function(e){var t=new Date(e);return["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()]+"-"+t.getDate()+"-"+t.getFullYear()}},{key:"checkAutoComplete",value:function(e,t){var n=t.split(" ");if(!t||1===n.length)return-1!==e.indexOf(n[0]);for(var a=n.length,i=-1!==e.indexOf(n[0]),o=1;o<a;o++)i=i&&-1!==e.indexOf(n[o]);return i}}]),e}(),ne=function(){function e(){Object(D.a)(this,e)}return Object(x.a)(e,null,[{key:"isAvailableUrl",value:function(e){return te.isStringAndNotEmpty(e)?e:ee.Image.DefaultImage}}]),e}(),ae=(n(85),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e)))._toggleFavourite=n._toggleFavourite.bind(Object(U.a)(n)),n._onRemovePress=n._onRemovePress.bind(Object(U.a)(n)),n._onEditPress=n._onEditPress.bind(Object(U.a)(n)),n._onAddPress=n._onAddPress.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"_toggleFavourite",value:function(){var e=this.props,t=e.data;(0,e.onToggleFavoriteItem)(t)}},{key:"_onRemovePress",value:function(){var e=this.props,t=e.data;(0,e.onRemoveItem)(t)}},{key:"_onAddPress",value:function(){var e=this.props,t=e.data,n=e.onAddItem;t.id=Date.now().toString(),n(t)}},{key:"_onEditPress",value:function(){var e=this.props,t=e.data;(0,e.onEditItem)(t)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.index,a=e.onAddItem;return i.a.createElement("div",{className:"item-container",key:n.toString()},i.a.createElement(K,{src:ne.isAvailableUrl(t.imageUrl),imgClassName:"shadow-item img-container",loading:"lazy"}),i.a.createElement("div",{className:"info-container"},i.a.createElement("p",null,t.center),i.a.createElement("p",null,te.getDateFormat(t.date_created))),i.a.createElement("h2",null,t.title),i.a.createElement("div",{className:"multiline-text txt-content"},t.description),a?i.a.createElement(G,{imageUrl:t.isAdded?ee.Image.Checked:ee.Image.Add,btnClassName:t.isAdded?"button-added":"button-add",onClick:this._onAddPress,iconClassName:"icon-add",disabled:t.isAdded},i.a.createElement("p",null,t.isAdded?"Added":"Add to collection")):i.a.createElement("div",{className:"button-container"},i.a.createElement(G,{imageUrl:t.isFavourite?ee.Image.ActiveFavourite:ee.Image.Favourite,onClick:this._toggleFavourite}),i.a.createElement(G,{imageUrl:ee.Image.Edit,btnClassName:"button-edit",onClick:this._onEditPress}),i.a.createElement(G,{imageUrl:ee.Image.Delete,onClick:this._onRemovePress})))}}]),t}(a.Component));ae.defaultTypes={onEditItem:function(){},onRemoveItem:function(){},onAddItem:function(){},onToggleFavoriteItem:function(){},isFavourite:!1,index:0};var ie=ae,oe=(n(86),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={searchKey:""},n._onTextChange=n._onTextChange.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"_onTextChange",value:function(e){this.setState({searchKey:e.target.value}),this.props.onTextChange&&this.props.onTextChange(e.target.value),13===e.keyCode&&this.props.onPressSearch(this.state.searchKey)}},{key:"render",value:function(){var e=this.props.onPressSearch,t=this.state.searchKey;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"search-container"},i.a.createElement(Y,{name:"searchKey",inputClassName:"input",placeholder:"Enter something",onChange:this._onTextChange,onKeyDown:this._onTextChange}),i.a.createElement(G,{imageUrl:ee.Image.Search,onClick:function(){return e(t)}})))}}]),t}(a.Component));oe.defaultTypes={onPressSearch:function(){},onTextChange:function(){}};var re=oe,se=(n(87),function(e){function t(){return Object(D.a)(this,t),Object(P.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.renderItem;return i.a.createElement("div",{className:"grid"},t.map(function(e,t){return n(e,t)}))}}]),t}(a.Component));se.defaultTypes={data:[]};var ce=se,le=(n(88),[{value:0,name:"Choose sort type"},{value:1,name:"Date"},{value:2,name:"Title"}]),ue=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={showFavourite:!1,sortOption:"",sortType:le[0],error:""},n._toggleMyFavourite=n._toggleMyFavourite.bind(Object(U.a)(n)),n._onOptionChange=n._onOptionChange.bind(Object(U.a)(n)),n._onTypeChange=n._onTypeChange.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"_toggleMyFavourite",value:function(){this.setState({showFavourite:!this.state.showFavourite});var e=this.state.showFavourite;this.props.onShowFavourite(!e)}},{key:"_onOptionChange",value:function(e){0!==this.state.sortType.value?(this.setState({sortOption:e,error:"",showFavourite:!1}),this.props.onOptionChange(this.state.sortType,e)):this.setState({sortOption:"",error:"Choose sort type first"})}},{key:"_onTypeChange",value:function(e){this.setState({sortType:le[Number(e.target.value)],sortOption:"0"===e.target.value?"":this.state.sortOption}),this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.state,n=t.showFavourite,a=t.sortOption,o=t.error;return i.a.createElement("div",{className:"option-container"},i.a.createElement(G,{btnClassName:"button-favourite ".concat(n?"btn-show":"btn-hide"),imageUrl:n?ee.Image.LikeWhite:ee.Image.Favourite,onClick:this._toggleMyFavourite},i.a.createElement("p",null,"My Favourite")),i.a.createElement(Z,{options:le,onChange:this._onTypeChange}),i.a.createElement(G,{imageUrl:"up"===a?ee.Image.UpWhite:ee.Image.Up,btnClassName:"button-up ".concat("up"===a?"button-active":null),onClick:function(){return e._onOptionChange("up")}}),i.a.createElement(G,{imageUrl:"down"===a?ee.Image.DownWhite:ee.Image.Down,btnClassName:"down"===a?"button-active":null,onClick:function(){return e._onOptionChange("down")}}),o&&i.a.createElement("div",{className:"text-error"},o))}}]),t}(a.Component);ue.defaultTypes={onShowFavourite:function(){},onOptionChange:function(){}};var me=ue,pe=(n(89),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={isVisible:!1},n.open=n.open.bind(Object(U.a)(n)),n.close=n.close.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"open",value:function(){this.setState({isVisible:!0})}},{key:"close",value:function(){this.setState({isVisible:!1})}},{key:"render",value:function(){var e=this.props,t=e.content,n=e.icon,a=e.onYesPress,o=e.showButton,r=this.state.isVisible;return i.a.createElement(z,{popupClassName:"common-popup",isVisible:r},n&&i.a.createElement(K,{src:n,imgClassName:"icon"}),i.a.createElement("div",{className:"text-content"},t),o&&i.a.createElement("div",{className:"button-container btn-container"},i.a.createElement(G,{btnClassName:"button-popup button-yes",onClick:a},i.a.createElement("p",null,"Confirm")),i.a.createElement(G,{btnClassName:"button-popup button-no",onClick:this.close},i.a.createElement("p",null,"Cancel"))))}}]),t}(a.Component));pe.defaultTypes={content:"",showButton:!1};var de=pe,he=(n(90),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={isVisible:!1,selectedData:null,image:"",title:"",center:"",description:""},n._selectedData=null,n.open=n.open.bind(Object(U.a)(n)),n.close=n.close.bind(Object(U.a)(n)),n._onTextChange=n._onTextChange.bind(Object(U.a)(n)),n._onSavePress=n._onSavePress.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"open",value:function(e){this._selectedData=e,this.setState({isVisible:!0,image:e.imageUrl,title:e.title,center:e.center,description:e.description})}},{key:"close",value:function(){this._selectedData=null,this.setState({isVisible:!1,image:"",title:"",center:"",description:""})}},{key:"_onTextChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"_onSavePress",value:function(){var e=this.state,t=e.image,n=e.title,a=e.center,i=e.description;if(this._selectedData){var o=Object(f.a)({},this._selectedData,{title:n,center:a,description:i,imageUrl:t});this.props.onYesPress(o),this.close()}}},{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.image,a=e.title,o=e.center,r=e.description,s=e.error;return i.a.createElement(z,{popupClassName:"form-popup",isVisible:t},i.a.createElement("h2",null,"Edit item"),s&&i.a.createElement("p",null,"Please fill all fields"),i.a.createElement("div",{className:"input-container"},i.a.createElement("p",null,"Title"),i.a.createElement(Y,{name:"title",inputClassName:"input-form",value:a,onChange:this._onTextChange,placeholder:"Enter title"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("p",null,"Thumbnail image"),i.a.createElement(Y,{name:"image",inputClassName:"input-form",value:n,onChange:this._onTextChange,placeholder:"Enter image url"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("p",null,"Center name"),i.a.createElement(Y,{type:"text",name:"center",inputClassName:"input-form",value:o,onChange:this._onTextChange,placeholder:"Enter center name"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("p",null,"Description"),i.a.createElement(Q,{name:"description",inputClassName:"input-form textarea-form",value:r,onChange:this._onTextChange,placeholder:"Enter description"})),i.a.createElement("div",{className:"button-container"},i.a.createElement(G,{imageUrl:ee.Image.Save,btnClassName:"button-save",onClick:this._onSavePress},i.a.createElement("p",null,"Save")),i.a.createElement(G,{btnClassName:"button-close",imageUrl:ee.Image.Close,onClick:this.close})))}}]),t}(a.Component));he.defaultTypes={onYesPress:function(){}};var ve,ge=he;var fe={setHistory:function(e){ve=e},navigate:function(e,t){var n="/".concat(e);ve.location.pathname!==n&&ve.push(n,t)},goBack:function(){ve.goBack()}},be=(n(91),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={selectedData:{},filteredData:e.items||[],isShowFavourite:!1,query:""},fe.setHistory(e.history),n._items=O.getState().items,n._onStoreChange=n._onStoreChange.bind(Object(U.a)(n)),n._removeItem=n._removeItem.bind(Object(U.a)(n)),n._editItem=n._editItem.bind(Object(U.a)(n)),n._openRemovePopup=n._openRemovePopup.bind(Object(U.a)(n)),n._openEditPopup=n._openEditPopup.bind(Object(U.a)(n)),n._toggleFavourite=n._toggleFavourite.bind(Object(U.a)(n)),n._onTextChange=n._onTextChange.bind(Object(U.a)(n)),n._onShowFavourite=n._onShowFavourite.bind(Object(U.a)(n)),n._onOptionChange=n._onOptionChange.bind(Object(U.a)(n)),n.renderItem=n.renderItem.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=O.subscribe(this._onStoreChange)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"_onStoreChange",value:function(){var e,t=O.getState().items;t&&(this._item=t,e=this.state.isShowFavourite?t.filter(function(e){return e.isFavourite}):t,this.setState({filteredData:e}))}},{key:"_openRemovePopup",value:function(e){this.setState({selectedData:e}),this._removePopup.open()}},{key:"_removeItem",value:function(){var e=this.props.removeItem,t=this.state.selectedData;this._removePopup.close(),e(t),this.setState({selectedData:{}})}},{key:"_openEditPopup",value:function(e){this.setState({selectedData:e}),this._editPopup.open(e)}},{key:"_editItem",value:function(e){Object.assign(this.state.selectedData,e),this.props.editItem(),this.forceUpdate(),this.setState({selectedData:{}})}},{key:"_toggleFavourite",value:function(e){var t=Object(f.a)({},e,{isFavourite:!e.isFavourite});Object.assign(e,t),this.props.toggleFavouriteItem(),this.forceUpdate()}},{key:"_onTextChange",value:function(e){var t=this.props.items.filter(function(t){return""===e||te.checkAutoComplete(t.title.toLowerCase(),e.toLowerCase())||te.checkAutoComplete(t.description.toLowerCase(),e.toLowerCase())});this.setState({query:e,filteredData:t})}},{key:"_onOptionChange",value:function(e,t){var n,a=this.props.items,i=this.state.filteredData;switch(e.value){case 0:n="";break;case 1:n="date_created";break;case 2:n="title";break;default:n=""}i=n&&t?Object(b.orderBy)(a,function(e){return e[n]},"up"===t?"asc":"desc"):a,this.setState({filteredData:i})}},{key:"_onShowFavourite",value:function(e){var t=this.props.items,n=this.state.filteredData;n=e?t.filter(function(e){return e.isFavourite}):t,this.setState({isShowFavourite:e,filteredData:n})}},{key:"renderItem",value:function(e,t){return i.a.createElement(ie,{key:t.toString(),index:t,data:e,onRemoveItem:this._openRemovePopup,onEditItem:this._openEditPopup,onToggleFavoriteItem:this._toggleFavourite})}},{key:"render",value:function(){var e=this,t=this.state.filteredData;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"My NASA Collection"),i.a.createElement(re,{onTextChange:this._onTextChange,onPressSearch:this._onTextChange}),i.a.createElement(me,{onShowFavourite:this._onShowFavourite,onOptionChange:this._onOptionChange}),i.a.createElement(ce,{data:t,renderItem:this.renderItem}),i.a.createElement(ge,{ref:function(t){e._editPopup=t},onYesPress:this._editItem}),i.a.createElement(de,{ref:function(t){e._removePopup=t},icon:ee.Image.Consider,content:"Are you sure you want to delete this item?",showButton:!0,onYesPress:this._removeItem}),i.a.createElement(G,{imageUrl:ee.Image.AddWhite,btnClassName:"button-add button-to-search",onClick:function(){return fe.navigate("search")}},i.a.createElement("p",null,"Add new item")))}}]),t}(a.Component)),_e=Object(s.b)(function(e){return{items:e.items}},{removeItem:function(e){return{type:"UI_RE_REMOVE_ITEM",item:e}},toggleFavouriteItem:function(){return{type:"UI_RE_TOGGLE_FAVOURITE_ITEM"}},editItem:function(){return{type:"UI_RE_EDIT_ITEM"}}})(be),Ee=(n(92),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state={loading:!1},fe.setHistory(e.history),n._onPressSearch=n._onPressSearch.bind(Object(U.a)(n)),n._onAddItem=n._onAddItem.bind(Object(U.a)(n)),n._handleGetListCallback=n._handleGetListCallback.bind(Object(U.a)(n)),n.renderItem=n.renderItem.bind(Object(U.a)(n)),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"_onPressSearch",value:function(e){e&&(this.props.getItemsList(e,this._handleGetListCallback),this.setState({loading:!0}))}},{key:"_handleGetListCallback",value:function(e){this.setState({loading:!1})}},{key:"_onAddItem",value:function(e){var t=this.props.addItem,n=Object(f.a)({},e,{isAdded:!0});Object.assign(e,n),t(n),this.forceUpdate()}},{key:"renderItem",value:function(e,t){return i.a.createElement(ie,{key:t.toString(),index:t,data:e,onAddItem:this._onAddItem})}},{key:"render",value:function(){var e=this.props.searchItems,t=this.state.loading;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Search from NASA"),i.a.createElement(re,{onPressSearch:this._onPressSearch}),i.a.createElement(ce,{data:e,renderItem:this.renderItem}),t&&i.a.createElement(H,{loaderClassName:"loader-container"}),i.a.createElement(G,{imageUrl:ee.Image.Back,btnClassName:"button-add button-back",onClick:function(){return fe.goBack()}},i.a.createElement("p",null,"Back to list")))}}]),t}(a.Component)),Ce=Object(s.b)(function(e){return{searchItems:e.searchItems,items:e.items}},{addItem:function(e){return{type:"UI_RE_ADD_ITEM",item:e}},getItemsList:function(e,t){return{type:h,query:e,callback:t}}})(Ee),Oe=(n(93),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e)))._onStoreChange=n._onStoreChange.bind(Object(U.a)(n)),n.bootstrap(),console.log("test","/react-nasa-web-exercise"),n}return Object(R.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){p.a.defaults.baseURL="https://images-api.nasa.gov/",p.a.defaults.headers.post["Content-Type"]="application/json",p.a.defaults.timeout=1e4,console.log("Axios has been setup"),this.unsubscribe=O.subscribe(this._onStoreChange)}},{key:"bootstrap",value:function(){var e=Object(A.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("items");case 2:(t=e.sent)&&O.dispatch(y(JSON.parse(t)));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"_onStoreChange",value:function(){var e=O.getState().items;e&&localStorage.setItem("items",JSON.stringify(e))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M.a,{basename:"/react-nasa-web-exercise"},i.a.createElement(L.c,null,i.a.createElement(L.a,{path:"/",exact:!0,component:_e}),i.a.createElement(L.a,{path:"/search",component:Ce}),i.a.createElement(L.a,{component:function(){return i.a.createElement("div",null,"404 Not found ")}}))))}}]),t}(a.Component)),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}C.run(T),r.a.render(i.a.createElement(s.a,{store:O},i.a.createElement(Oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-nasa-web-exercise",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-nasa-web-exercise","/service-worker.js");ye?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ie(t,e)})}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.b0b419a4.chunk.js.map