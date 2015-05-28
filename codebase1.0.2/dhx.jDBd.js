/*! dhx 2015-05-28 */
$dhx.jDBd={version:"1.0.3",data_sets:{},create:function(a){var b=$dhx.jDBd;if("Explorer"==$dhx.Browser.name&&$dhx.Browser.version<9)return console.log("You need IE 9 or greater. "),dhtmlx.message({type:"error",text:"You need IE 9 or greater."}),void b.showDirections("BROWSER_VERSION_OUT_TO_DATE");if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}),void(a.onFail&&a.onFail("data_set_name is missing when creating a dataset"));if("undefined"==typeof a.primary_key||0===a.primary_key.length)return dhtmlx.message({type:"error",text:"primary_key is missing when creating a dataset"}),void(a.onFail&&a.onFail("primary_key is missing when creating a dataset"));try{if(a.api_service=a.api_service||!1,a.api_service&&(a.api_service.end_point=a.api_service.end_point||!1,a.api_service.get_colletion_end_point=a.api_service.get_colletion_end_point||(a.api_service.end_point?a.api_service.end_point:!1),a.api_service.get_end_point=a.api_service.get_end_point||(a.api_service.end_point?a.api_service.end_point:!1),a.api_service.post_end_point=a.api_service.post_end_point||(a.api_service.end_point?a.api_service.end_point:!1),a.api_service.put_end_point=a.api_service.put_end_point||(a.api_service.end_point?a.api_service.end_point:!1),a.api_service.del_end_point=a.api_service.del_end_point||(a.api_service.end_point?a.api_service.end_point:!1),a.api_payload=a.api_payload||""),a.api_service.get_colletion_end_point||a.api_service.get_end_point||a.api_service.post_end_point||a.api_service.put_end_point||a.api_service.del_end_point||(a.api_service=!1),a.overwrite=a.overwrite||!1,"undefined"==typeof a.data&&(a.data=[]),$dhx.isArray(a.data)?a.data=a.data:a.data=[],a.sync=(a.sync&&$dhx.isArray(a.sync)?a.sync:[])||[],a.bind=(a.bind&&$dhx.isArray(a.bind)?a.bind:[])||[],a.cursorPosition=null,a.onSuccess=a.onSuccess||!1,a.onFail=a.onFail||!1,"undefined"!=typeof $dhx.jDBd.data_sets[a.data_set_name]&&1!=a.overwrite)return dhtmlx.message({type:"error",text:"the dataset"+a.data_set_name+" already exists. It was not overwrited."}),void(a.onSuccess&&a.onSuccess(b.data_sets[a.data_set_name]));if(a.api_service){if("disconnected"==$dhx.REST.API.auth_status)return dhtmlx.message({type:"error",text:"please login into REST.API before creating datasets"}),void(a.onFail&&a.onFail("please login into REST.API before creating datasets"));a.api_service.get_colletion_end_point?(a.api_service.api_payload=a.api_service.api_payload||"",$dhx.REST.API.get({resource:a.api_service.get_colletion_end_point,format:"json",payload:a.api_service.api_payload,onSuccess:function(c){var d=JSON.parse(c.response);"success"==d.status?($dhx.isArray(d[a.api_service.collection_name])?a.data=d[a.api_service.collection_name]:a.data=[],b._create(a)):b._create(a)},onFail:function(c){dhtmlx.message({type:"error",text:c}),b._create(a)}})):b._create(a)}else b._create(a)}catch(c){a.onFail&&a.onFail(c.stack),console.log(c.stack)}},_create:function(a){var b=$dhx.jDBd;a.data.sort(function(b,c){return b[a.primary_key]-c[a.primary_key]}),$dhx.jDBdStorage.storeObject(a.data_set_name+".data",a.data),b.data_sets[a.data_set_name]={data_set_name:a.data_set_name,primary_key:a.primary_key,api_service:a.api_service,onSuccess:a.onSuccess,onFail:a.onFail,_synced_components:[],_bound_components:[]},Object.defineProperty(b.data_sets[a.data_set_name],"data",{get:function(){return $dhx.jDBdStorage.get(a.data_set_name+".data")},set:function(b){$dhx.jDBdStorage.saveDatabase(a.data_set_name+".data",b)}}),a.sync.forEach(function(c,d,e){b.sync({data_set_name:a.data_set_name,component:c})}),a.bind.forEach(function(c,d,e){b.bind({data_set_name:a.data_set_name,component:c})}),a.onSuccess&&a.onSuccess(b.data_sets[a.data_set_name])},unbind:function(a){var b=$dhx.jDBd;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?(dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}),!1):"undefined"==typeof a.component?(dhtmlx.message({type:"error",text:"component is missing when syncing"}),!1):$dhx.isObject(a.component)?"undefined"!=typeof b.data_sets[a.data_set_name]?($dhx._enable_log&&console.log("called unbind for: "+a.component_id),"undefined"==typeof a.component_id?(dhtmlx.message({type:"error",text:"component_id was not set"}),!1):(b.data_sets[a.data_set_name]._bound_components.forEach(function(c,d,e){c.component_id==a.component_id&&b.data_sets[a.data_set_name]._bound_components.splice(d,1)}),!0)):(dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),!1):(dhtmlx.message({type:"error",text:"component is not an object"}),!1)},bind:function(a){var b=$dhx.jDBd,c=!1;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?(dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}),!1):"undefined"==typeof a.component?(dhtmlx.message({type:"error",text:"component is missing when syncing"}),!1):$dhx.isObject(a.component)?(a.api_service&&(a.api_service.get_end_point=a.api_service.get_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.post_end_point=a.api_service.post_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.put_end_point=a.api_service.put_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.del_end_point=a.api_service.del_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.api_payload=a.api_service.api_payload||""),a.api_service||b.data_sets[a.data_set_name].api_service&&(a.api_service=b.data_sets[a.data_set_name].api_service),a.api_service&&(a.api_service.get_end_point||a.api_service.post_end_point||a.api_service.put_end_point||a.api_service.del_end_point||(a.api_service=!1)),"undefined"!=typeof b.data_sets[a.data_set_name]?($dhx._enable_log&&console.log("called bind for: "+a.component_id),"undefined"==typeof a.component_id?(dhtmlx.message({type:"error",text:"component_id was not set"}),!1):(b.data_sets[a.data_set_name]._bound_components.forEach(function(c,d,e){c.component_id==a.component_id&&($dhx._enable_log&&console.log(c.component_id+" object already exist on memory, overwriting"),b.data_sets[a.data_set_name]._bound_components.splice(d,1))}),a.$init=a.$init||!1,$dhx._enable_log&&console.log("pushing: "+a.component_id),b.data_sets[a.data_set_name]._bound_components.push({component_id:a.component_id,component:a.component,$init:a.$init}),b.data_sets[a.data_set_name]._bound_components.forEach(function(d,e,f){if(d.component_id==a.component_id){var g=d.component;if("undefined"!=typeof g.mytype&&$dhx._enable_log&&console.log("tree can not be bound"),"undefined"!=typeof g.isTreeGrid&&$dhx._enable_log&&console.log("grid can not be bound"),"undefined"!=typeof g._changeFormId){if($dhx._enable_log&&console.log("this component is a form"),null!=b.data_sets[a.data_set_name].cursorPosition){var h=b.getCurrentRecord({data_set_name:a.data_set_name}),j={};for(i in h)h.hasOwnProperty(i)&&"id"!=i&&(j[i]=h[i]);a.$init&&a.$init(j),g.setFormData(j)}g.api_service=a.api_service,g.attachEvent("onButtonClick",function(a){"x_special_button_save"==a?g.save():"x_special_button_update"==a?g.update():"x_special_button_delete"==a&&g.erase()}),g.save=function(c,d,e){console.log(">>>>>>>>>>>>>>>>> save"),console.log(arguments),b._bound_form_save(a,g,c,d,e)},g.update=function(c,d,e){console.log(">>>>>>>>>>>>>>>>> update"),console.log(arguments),b._bound_form_update(a,g,c,d,e)},g.erase=function(c,d,e){b._bound_form_delete(a,g,c,d,e)},g.del=function(c,d,e){b._bound_form_delete(a,g,c,d,e)},c=!0}}}),c)):(dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),!1)):(dhtmlx.message({type:"error",text:"component is not an object"}),!1)},_bound_form_save:function(a,b,c,d,e){var f=$dhx.jDBd;c=c||b.getFormData(),d=d||!1,e=e||!1,a.api_service.api_payload.length>0&&(a.api_service.api_payload=a.api_service.api_payload+"&");var g=[];for(i in c)c.hasOwnProperty(i)&&(console.log(i),"data"!=i&&i!=f.data_sets[a.data_set_name].primary_key&&($dhx._enable_log&&console.log(i),g.push(c[i])));delete c[f.data_sets[a.data_set_name].primary_key],delete c.data,$dhx._enable_log&&console.log(c),b.lock(),console.log(a.api_service.api_payload),console.log(a.api_service.api_payload+"hash="+JSON.stringify(c)),$dhx.jDBd.insert({data_set_name:a.data_set_name,record:c,api_resource:a.api_service.post_end_point,api_payload:a.api_service.api_payload+"hash="+JSON.stringify(c),onSuccess:function(a){dhtmlx.message({text:"data saved"}),b.unlock(),d?d():""},onFail:function(a){dhtmlx.message({type:"error",text:"data was not saved"}),b.unlock(),e?e():""}})},_bound_form_update:function(a,b,c,d,e){var f=$dhx.jDBd;c=c||b.getFormData(),d=d||!1,e=e||!1,a.api_service.api_payload.length>0&&(a.api_service.api_payload=a.api_service.api_payload+"&"),$dhx._enable_log&&console.log(b.api_service.api_payload+"hash="+JSON.stringify(c)),b.lock(),console.log("================== _bound_form_update"),console.log("hash",c),$dhx.jDBd.update({data_set_name:a.data_set_name,record:c,record_id:c[f.data_sets[a.data_set_name].primary_key],api_resource:b.api_service.post_end_point+"/"+c[f.data_sets[a.data_set_name].primary_key],api_payload:b.api_service.api_payload+"hash="+JSON.stringify(c),onSuccess:function(a){dhtmlx.message({text:"data updated"}),b.unlock(),d?d():""},onFail:function(a){dhtmlx.message({type:"error",text:"data was not updated"}),b.unlock(),e?e():""}})},_bound_form_delete:function(a,b,c,d,e){var f=$dhx.jDBd;c=c||b.getFormData(),d=d||!1,e=e||!1,b.lock(),$dhx.jDBd.del({data_set_name:a.data_set_name,record_id:c[f.data_sets[a.data_set_name].primary_key],api_resource:b.api_service.post_end_point+"/"+c[f.data_sets[a.data_set_name].primary_key],onSuccess:function(a){dhtmlx.message({text:"data deleted"}),b.unlock(),d?d():""},onFail:function(a){dhtmlx.message({type:"error",text:"data was not deleted"}),b.unlock(),e?e():""}})},deleteCurrentRecord:function(a){var b=$dhx.jDBd,c=a.onSuccess||!1,d=a.onFail||!1,e=!0;0==a.live&&(e=!1),$dhx.showDirections("trying to delete ... "),$dhx.jDBd.del({data_set_name:a.data_set_name,record_id:b.getCursor({data_set_name:a.data_set_name}),live:e,onSuccess:function(a){dhtmlx.message({text:"data deleted"}),$dhx.hideDirections(),c?c():""},onFail:function(a){dhtmlx.message({type:"error",text:"data was not deleted"}),$dhx.hideDirections(),d?d():""}})},sync:function(a){var b=$dhx.jDBd,c=!1;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}),a.onFail&&a.onFail("data_set_name is missing when creating a dataset"),!1;if("undefined"==typeof a.component)return dhtmlx.message({type:"error",text:"component is missing when syncing"}),a.onFail&&a.onFail("component is missing when syncing"),!1;if(!$dhx.isObject(a.component))return dhtmlx.message({type:"error",text:"component is not an object"}),a.onFail&&a.onFail("component is not an object"),!1;if(a.api_service&&(a.api_service.get_end_point=a.api_service.get_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.post_end_point=a.api_service.post_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.put_end_point=a.api_service.put_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.del_end_point=a.api_service.del_end_point||(b.data_sets[a.data_set_name].api_service.end_point?b.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.api_payload=a.api_service.api_payload||""),a.api_service||b.data_sets[a.data_set_name].api_service&&(a.api_service=b.data_sets[a.data_set_name].api_service),a.api_service&&(a.api_service.get_end_point||a.api_service.post_end_point||a.api_service.put_end_point||a.api_service.del_end_point||(a.api_service=!1)),"undefined"==typeof a.filter&&(a.filter=!1),$dhx.isObject(a.filter)||(a.filter=!1),"undefined"==typeof a.order&&(a.order=!1),$dhx.isObject(a.order)||(a.order=!1),a.$init=a.$init||!1,"undefined"!=typeof b.data_sets[a.data_set_name]){if($dhx._enable_log&&console.log("called sync for: "+a.component_id),"undefined"==typeof a.component_id)return dhtmlx.message({type:"error",text:"component_id was not set"}),a.onFail&&a.onFail("component_id was not set"),!1;b.data_sets[a.data_set_name]._synced_components.forEach(function(c,d,e){c.component_id==a.component_id&&($dhx._enable_log&&console.log(c.component_id+" object already exist on memory, overwriting"),b.data_sets[a.data_set_name]._synced_components.splice(d,1))}),$dhx._enable_log&&console.log("pushing: "+a.component_id);var d={component_id:a.component_id,component:a.component};return"function"==typeof a.$init&&(d.$init=a.$init),b.data_sets[a.data_set_name]._synced_components.push(d),b.data_sets[a.data_set_name]._synced_components.forEach(function(d,e,f){if(d.component_id==a.component_id){var g=d.component;if("undefined"!=typeof g.mytype)a.onFail&&a.onFail("tree can not be synced"),c=!1;else if("undefined"!=typeof g._selOption){$dhx._enable_log&&console.log("this component is a combo"),g.clearAll(!0);var h=[];b.data_sets[a.data_set_name].data.forEach(function(b,c,d){var e={};for(i in b)b.hasOwnProperty(i)&&(e[i]=b[i]);a.$init&&a.$init(e),h.push([e.value,e.text])}),g.addOption(h),a.onSuccess&&a.onSuccess(),c=!0}else"undefined"!=typeof g.isTreeGrid?($dhx._enable_log&&console.log("this component is a grid"),g.clearAll(),g.api_service=a.api_service,g.attachEvent("onXLS",function(a){}),g.attachEvent("onXLE",function(b){a.onSuccess&&a.onSuccess()}),g.saveOnEdit&&g.attachEvent("onEditCell",function(c,d,e,f,h){if(0==c)return!0;if(1==c)return!0;if(2==c){if(f!=h){g.setRowTextBold(d);var i={};i[g.getColumnId(e)]=f,$dhx.jDBd.update({data_set_name:a.data_set_name,record:i,record_id:b.getCursor({data_set_name:a.data_set_name}),api_resource:g.api_service.post_end_point+"/"+i[b.data_sets[a.data_set_name].primary_key],api_payload:g.api_service.api_payload+"&hash="+JSON.stringify(i),onSuccess:function(b){return dhtmlx.message({text:"data updated"}),g.cells(d,e).setValue(f),g.setRowTextNormal(d),a.onSuccess?a.onSuccess():"",!0},onFail:function(b){return dhtmlx.message({type:"error",text:"data was not updated"}),g.cells(d,e).setValue(h),g.setRowTextNormal(d),a.onFail?a.onFail():"",!0}})}return!0}}),g.parse(b.getDataForGrid({data_set_name:a.data_set_name,filter:a.filter,$init:a.$init}),"json"),c=!0):"undefined"!=typeof g._changeFormId?(a.onFail&&a.onFail("form can not be synced"),c=!1):a.onFail&&a.onFail("unknow component when syncing")}}),c}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),a.onFail&&a.onFail("dataset "+a.data_set_name+" not found"),!1},getDataForGrid:function(a){$dhx._enable_log&&console.time("filter dataset");var b=$dhx.jDBd,c=[],a=a||{};return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}):("undefined"!=typeof b.data_sets[a.data_set_name]&&b.data_sets[a.data_set_name].data.forEach(function(d,e,f){if(a.filter)if("undefined"==typeof a.filter.length){var g=!1;for(property in a.filter)a.filter.hasOwnProperty(property)&&d[property]==a.filter[property]&&(g=!0);if(g){var h={};for(i in d)d.hasOwnProperty(i)&&(h[i]=d[i]);a.$init&&a.$init(h),c.push({id:h[b.data_sets[a.data_set_name].primary_key],data:h.data})}}else if(2==a.filter.length){var g=!1;if("undefined"!=typeof a.filter[0]&&"undefined"!=typeof a.filter[1]&&$dhx.isFunction(a.filter[0])&&(g=a.filter[0](d,a.filter[1])),g){var h={};for(i in d)d.hasOwnProperty(i)&&(h[i]=d[i]);a.$init&&a.$init(h),c.push({id:h[b.data_sets[a.data_set_name].primary_key],data:h.data})}}else{var h={};for(i in d)d.hasOwnProperty(i)&&(h[i]=d[i]);a.$init&&a.$init(h),c.push({id:h[b.data_sets[a.data_set_name].primary_key],data:h.data})}else{var h={};for(i in d)d.hasOwnProperty(i)&&(h[i]=d[i]);a.$init&&a.$init(h),c.push({id:h[b.data_sets[a.data_set_name].primary_key],data:h.data})}}),$dhx._enable_log&&console.timeEnd("filter dataset"),{rows:c})},get:function(a){var b=$dhx.jDBd;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}):"undefined"!=typeof b.data_sets[a.data_set_name]?b.data_sets[a.data_set_name].data:[]},getRecord:function(a){var b=$dhx.jDBd,c={},d=-1;if($dhx._enable_log&&console.time("get record"),"undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when trying to get a record"});if("undefined"==typeof a.record_id||0===a.record_id.length)return void dhtmlx.message({type:"error",text:"record_id is missing when trying to get a record"});a.primary_key=a.primary_key||b.data_sets[a.data_set_name].primary_key;var e=b.data_sets[a.data_set_name].data;if("undefined"!=typeof b.data_sets[a.data_set_name])for(var f=0;f<e.length;f++){var g=e[f];"undefined"!=typeof g[a.primary_key]&&g[a.primary_key]==a.record_id&&(d=f)}return $dhx._enable_log&&console.timeEnd("get record"),d>=0?e[d]:c},setCursor:function(a){var b=$dhx.jDBd,c=!1;return $dhx._enable_log&&console.log("XXXXXXXXXXXXXXXXXXX"),$dhx._enable_log&&console.log("set cursor for: ",a.data_set_name),"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}):"undefined"==typeof a.position?void dhtmlx.message({type:"error",text:"position is missing when creating a dataset"}):$dhx.isNumber(a.position)?"undefined"!=typeof b.data_sets[a.data_set_name]?(b.data_sets[a.data_set_name].data.forEach(function(d,e,f){d[b.data_sets[a.data_set_name].primary_key]==a.position&&($dhx._enable_log&&console.log("cursor from "+a.data_set_name+" was changed to the "+a.position+" record"),b.data_sets[a.data_set_name].cursorPosition=a.position,c=!0)}),c?(b.data_sets[a.data_set_name]._bound_components.forEach(function(c,d,e){var f=c.component;if("undefined"!=typeof f.mytype);else if("undefined"!=typeof f.isTreeGrid);else if("undefined"!=typeof f._changeFormId){$dhx._enable_log&&console.log("setting cursor for the bound form "+c.component_id);var g=b.getCurrentRecord({data_set_name:a.data_set_name}),h={};for(i in g)g.hasOwnProperty(i)&&(h[i]=g[i]);c.$init&&c.$init(h);try{f.setFormData(h)}catch(j){console.warn("Phisycal component is not available. Did you unbind the destroeyd bound components?")}}}),b.data_sets[a.data_set_name].cursorPosition):(dhtmlx.message({type:"error",text:"the dataset "+a.data_set_name+" has no index with value: "+a.position}),b.data_sets[a.data_set_name].cursorPosition)):(dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),!1):void dhtmlx.message({type:"error",text:"cursor position shall to be a valid number"})},getCursor:function(a){var b=$dhx.jDBd;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when creating a dataset"}):"undefined"!=typeof b.data_sets[a.data_set_name]?b.data_sets[a.data_set_name].cursorPosition:(dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),null)},getCurrentRecord:function(a){var b=$dhx.jDBd,c={},d=!1;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting current record"});if("undefined"!=typeof b.data_sets[a.data_set_name]){if(a.primary_key=b.data_sets[a.data_set_name].primary_key,a.cursorPosition=b.data_sets[a.data_set_name].cursorPosition,null==a.cursorPosition)return dhtmlx.message({type:"error",text:"the cursor position was not set yet"}),c;var e=b.data_sets[a.data_set_name].data;return e.length>0?(e.forEach(function(e,f,g){e[b.data_sets[a.data_set_name].primary_key]==a.cursorPosition&&(c=e,d=!0)}),d?c:(dhtmlx.message({type:"error",text:"record "+a.cursorPosition+" not found"}),c)):(dhtmlx.message({type:"error",text:"this "+a.data_set_name+" dataset has no records"}),c)}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),c},item:function(a){var b=$dhx.jDBd;return b.getRecord(a)},dataCount:function(a){var b=$dhx.jDBd;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when deleting a dataset"}):b.data_sets[a.data_set_name].data.length},exists:function(a){var b=$dhx.jDBd,c=!1;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing"});if("undefined"==typeof a.record_id)return void dhtmlx.message({type:"error",text:"record_id is missing"});if("undefined"!=typeof b.data_sets[a.data_set_name]){a.primary_key=a.primary_key||b.data_sets[a.data_set_name].primary_key;for(var d=b.data_sets[a.data_set_name].data,e=0;e<d.length;e++){var f=d[e];"undefined"!=typeof f[a.primary_key]&&f[a.primary_key]==a.record_id&&(c=!0)}}return c},filter:function(a){var b=$dhx.jDBd;return $dhx._enable_log&&console.log("filtering"),"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing"}):("undefined"==typeof a.filter&&(a.filter||!1),a.$init=a.$init||!1,b.data_sets[a.data_set_name]._synced_components.forEach(function(c,d,e){var f=c.component;if("undefined"!=typeof f.mytype)$dhx._enable_log&&console.log("this component is a tree");else if("undefined"!=typeof f.isTreeGrid){$dhx._enable_log&&console.log("this component is a grid"),f.clearAll();var g=b.getDataForGrid({data_set_name:a.data_set_name,filter:a.filter,$init:a.$init});f.parse(g,"json")}else"undefined"!=typeof f._changeFormId||"undefined"!=typeof f._selOption&&$dhx._enable_log&&console.log("this component is a combo")}),"filtered")},first:function(a){var b=$dhx.jDBd,c={};if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing getting first record"});if("undefined"!=typeof b.data_sets[a.data_set_name]){var d=b.data_sets[a.data_set_name].data;return d.length>0?(a.primary_key=a.primary_key||b.data_sets[a.data_set_name].primary_key,d[0][a.primary_key]):(dhtmlx.message({type:"error",text:"this "+a.data_set_name+" dataset has no records"}),c)}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),c},idByIndex:function(a){var b=$dhx.jDBd;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting id by index"});if("undefined"==typeof a.index)return void dhtmlx.message({type:"error",text:"index is missing when getting id by index"});if("undefined"!=typeof b.data_sets[a.data_set_name]){a.primary_key=b.data_sets[a.data_set_name].primary_key;var c=b.data_sets[a.data_set_name].data;return c.length>0?"undefined"!=typeof c[a.index]&&"undefined"!=typeof c[a.index][b.data_sets[a.data_set_name].primary_key]?c[a.index][b.data_sets[a.data_set_name].primary_key]:null:(dhtmlx.message({type:"error",text:"this "+a.data_set_name+" dataset has no records"}),null)}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),null},indexById:function(a){var b=$dhx.jDBd,c=-1;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting index by id"});if("undefined"==typeof a.record_id)return void dhtmlx.message({type:"error",text:"record_id is missing when getting index by id"});if("undefined"!=typeof b.data_sets[a.data_set_name]){a.primary_key=b.data_sets[a.data_set_name].primary_key;var d=b.data_sets[a.data_set_name].data;return d.length>0?(d.forEach(function(d,e,f){d[b.data_sets[a.data_set_name].primary_key]==a.record_id&&(c=e)}),c>-1?c:(dhtmlx.message({type:"error",text:"record "+a.record_id+" not found"}),null)):(dhtmlx.message({type:"error",text:"this "+a.data_set_name+" dataset has no records"}),null)}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),null},last:function(a){var b=$dhx.jDBd,c={};if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting last record"});if("undefined"!=typeof b.data_sets[a.data_set_name]){var d=b.data_sets[a.data_set_name].data;return d.length>0?(a.primary_key=a.primary_key||b.data_sets[a.data_set_name].primary_key,d[d.length-1][a.primary_key]):(dhtmlx.message({type:"error",text:"this "+a.data_set_name+" dataset has no records"}),c)}return dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),c},next:function(a){var b=$dhx.jDBd;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting last record"});var c=parseInt(b.getCursor({data_set_name:a.data_set_name})),d=b.indexById({data_set_name:a.data_set_name,record_id:c}),e=d+1,f=b.idByIndex({data_set_name:a.data_set_name,index:e});return null==f?(dhtmlx.message({type:"error",text:"there is no next record on this dataset"}),null):($dhx._enable_log&&console.log("exist, setting next cursor"),f)},previous:function(a){var b=$dhx.jDBd;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when getting previously record"});var c=parseInt(b.getCursor({data_set_name:a.data_set_name})),d=b.indexById({data_set_name:a.data_set_name,record_id:c}),e=d-1,f=b.idByIndex({data_set_name:a.data_set_name,index:e});return null==f?(dhtmlx.message({type:"error",text:"there is no previous record on this dataset"}),null):($dhx._enable_log&&console.log("exist, setting next cursor"),f)},remove:function(a){$dhx.jDBd;$dhx.jDBd.del(a)},add:function(a,b){$dhx.jDBd;$dhx.jDBd.insert(a,b)},sort:function(a,b,c){var d=$dhx.jDBd,e={};if(e.data_set_name=a,console.log(e.data_set_name),"undefined"==typeof e.data_set_name||0===e.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when sorting dataset"});var f=d.data_sets[e.data_set_name].data;try{f.sort(b)}catch(g){return void dhtmlx.message({type:"error",text:"could not sort data"})}d.data_sets[e.data_set_name]._synced_components.forEach(function(a,b,c){var f=a.component;"undefined"!=typeof f.mytype,"undefined"!=typeof f.isTreeGrid&&($dhx._enable_log&&console.log("this component is a grid"),f.parse(d.getDataForGrid({data_set_name:e.data_set_name,filter:e.filter,$init:e.$init}),"json")),"undefined"!=typeof f._changeFormId})},del:function(a){function b(b){var d=c.data_sets[a.data_set_name].data;d.splice(b,1),$dhx.jDBdStorage.saveDatabase(a.data_set_name+".data",d),c.data_sets[a.data_set_name]._synced_components.forEach(function(b,d,e){var f=b.component;$dhx._enable_log&&console.log(f),"undefined"!=typeof f.mytype,"undefined"!=typeof f.isTreeGrid&&($dhx._enable_log&&console.log("this component is a grid"),f.deleteRow(a.record_id),"undefined"!=typeof c.data_sets[a.data_set_name].data[0]?($dhx.jDBd.setCursor({data_set_name:a.data_set_name,position:c.data_sets[a.data_set_name].data[0][c.data_sets[a.data_set_name].primary_key]}),f.selectRow(f.getRowIndex(c.data_sets[a.data_set_name].data[0][c.data_sets[a.data_set_name].primary_key]),!0,!1,!0)):c.data_sets[a.data_set_name].cursorPosition=null),"undefined"!=typeof f._changeFormId}),a.onSuccess&&a.onSuccess(a.record_id)}var c=$dhx.jDBd;a.value;return"undefined"==typeof a.data_set_name||0===a.data_set_name.length?void dhtmlx.message({type:"error",text:"data_set_name is missing when deleting a dataset"}):"undefined"==typeof a.record_id||0===a.record_id.length?void dhtmlx.message({type:"error",text:"record_id is missing when deleting a dataset"}):(console.log(c.data_sets[a.data_set_name]),console.log(c.data_sets[a.data_set_name].api_service.api_payload),"undefined"==typeof a.live&&(a.live=!0),0==a.live?a.live=!1:a.live=!0,$dhx._enable_log&&console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.live),a.api_service&&(a.api_service.end_point=a.api_service.end_point||(c.data_sets[a.data_set_name].api_service.end_point?c.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.api_payload=a.api_payload||""),console.log(a.api_service),a.api_service||c.data_sets[a.data_set_name].api_service&&(a.api_service=c.data_sets[a.data_set_name].api_service),a.api_service&&(a.api_service.end_point||(a.api_service=!1)),a.api_payload=a.api_payload||"hash="+JSON.stringify(a.record),$dhx._enable_log&&console.log(" c.api_service >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.api_service),$dhx._enable_log&&console.log(c.data_sets[a.data_set_name].api_service),void("undefined"!=typeof c.data_sets[a.data_set_name]?(a.primary_key=a.primary_key||c.data_sets[a.data_set_name].primary_key,c.data_sets[a.data_set_name].data.forEach(function(c,d,e){if("undefined"!=typeof c[a.primary_key]&&c[a.primary_key]==a.record_id)if(a.api_service){if("disconnected"==$dhx.REST.API.auth_status)return dhtmlx.message({type:"error",text:"please login into REST.API before creating datasets"}),void(a.onFail&&a.onFail("please login into REST.API before creating datasets"));$dhx._enable_log&&console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.live),a.live?(console.log(a.api_payload),a.api_service.api_payload=a.api_service.api_payload||"",$dhx.REST.API.del({resource:a.api_service.end_point+"/"+a.record_id,format:"json",payload:a.api_payload,onSuccess:function(c){var e=JSON.parse(c.response);if("success"==e.status)try{b(d)}catch(f){dhtmlx.message({type:"error",text:"don't deleted. reason: "+e.response}),a.onFail&&a.onFail("don't deleted. reason: ",f.stack)}else dhtmlx.message({type:"error",text:"don't deleted. reason: "+e.response}),a.onFail&&a.onFail("don't deleted. reason: "+e.response)},onFail:function(b){var c=JSON.parse(b.response);dhtmlx.message({type:"error",text:c.response}),a.onFail&&a.onFail("don't deleted. reason: "+c.response)}})):b(d)}else b(d)})):(dhtmlx.message({type:"error",text:"dataset "+a.data_set_name+" not found"}),a.onFail&&a.onFail("don't deleted. reason: dataset "+a.data_set_name+" not found"))))},insert:function(a,b){function c(c){a.record[a.primary_key]=c;var e=d.data_sets[a.data_set_name].data;$dhx.isNumber(b)?e.splice(b,0,a.record):e.push(a.record),$dhx.jDBdStorage.saveDatabase(a.data_set_name+".data",e),d.data_sets[a.data_set_name]._synced_components.forEach(function(c,d,e){var f=c.component;if("undefined"!=typeof f.mytype);else if("undefined"!=typeof f.isTreeGrid){$dhx._enable_log&&console.log("this component is a grid");var g={};for(i in a.record)a.record.hasOwnProperty(i)&&(g[i]=a.record[i]);c.$init&&c.$init(g);var h=[];for(var i in g)g.hasOwnProperty(i)&&"undefined"!=typeof f.getColIndexById(i)&&$dhx.isNumber(f.getColIndexById(i))&&h.splice(f.getColIndexById(i),0,g[i]);$dhx.isNumber(b)?f.addRow(g[a.primary_key],h,b):f.addRow(g[a.primary_key],h),f.selectRow(f.getRowIndex(g[a.primary_key]),!0,!1,!0)}else if("undefined"!=typeof f._changeFormId);else if("undefined"!=typeof f._selOption){$dhx._enable_log&&console.log("this component is a combo");var j=[],g={};for(i in a.record)a.record.hasOwnProperty(i)&&(g[i]=a.record[i]);c.$init&&c.$init(g),j.push([g.value,g.text]);try{f.addOption(j),f.selectOption(f.getIndexByValue(g.value))}catch(k){$dhx._enable_log&&console.log(k.stack)}}}),a.onSuccess&&a.onSuccess(c)}var d=$dhx.jDBd,b=b||null;if("undefined"==typeof a.data_set_name||0===a.data_set_name.length)return void dhtmlx.message({
type:"error",text:"data_set_name is missing when inserting a record"});if("undefined"==typeof a.record)return void dhtmlx.message({type:"error",text:"record is missing when inserting a record"});if(console.log("XXXXXXXXXXXX insert"),console.log(a),a.primary_key=a.primary_key||d.data_sets[a.data_set_name].primary_key,"undefined"==typeof a.live&&(a.live=!0),0==a.live?a.live=!1:a.live=!0,$dhx._enable_log&&console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.live),a.api_service&&(a.api_service.end_point=a.api_service.end_point||(d.data_sets[a.data_set_name].api_service.end_point?d.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.api_payload=a.api_payload||"hash="+JSON.stringify(a.record)),console.log(a.api_service),a.api_service||d.data_sets[a.data_set_name].api_service&&(a.api_service=d.data_sets[a.data_set_name].api_service),a.api_service&&(a.api_service.end_point||(a.api_service=!1)),a.api_payload=a.api_payload||"hash="+JSON.stringify(a.record),a.api_service){if("disconnected"==$dhx.REST.API.auth_status)return dhtmlx.message({type:"error",text:"please login into REST.API before creating datasets"}),void(a.onFail&&a.onFail("please login into REST.API before creating datasets"));console.log(a.api_service.api_payload),a.api_service.end_point&&a.live?$dhx.REST.API.insert({resource:a.api_service.end_point,format:"json",payload:a.api_payload,onSuccess:function(b){var d=JSON.parse(b.response);if("success"==d.status){c(d[a.primary_key])}else dhtmlx.message({type:"error",text:"don't saved. reason: "+d.response}),a.onFail&&a.onFail("don't saved. reason: "+d.response)},onFail:function(b){dhtmlx.message({type:"error",text:b}),a.onFail&&a.onFail("don't saved. reason: "+b)}}):c((new Date).getTime())}else c((new Date).getTime())},update:function(a){function b(b){a.record[a.primary_key]=b;for(var d=c.data_sets[a.data_set_name].data,e=0;e<d.length;e++){var f=d[e];if("undefined"!=typeof f[a.primary_key]&&f[a.primary_key]==a.record_id)for(var g in a.record)a.record.hasOwnProperty(g)&&(d[e][g]=a.record[g])}$dhx.jDBdStorage.saveDatabase(a.data_set_name+".data",d),c.data_sets[a.data_set_name]._synced_components.forEach(function(b,d,e){var f=b.component;if("undefined"!=typeof f.mytype,"undefined"!=typeof f.isTreeGrid){$dhx._enable_log&&console.log("this component is a grid, lets update");var g=c.getCurrentRecord({data_set_name:a.data_set_name});$dhx._enable_log&&console.log(g);var h={};for(i in g)g.hasOwnProperty(i)&&(h[i]=g[i]);b.$init&&b.$init(h);for(var i in h)if(h.hasOwnProperty(i)&&"undefined"!=typeof f.getColIndexById(i)&&$dhx.isNumber(f.getColIndexById(i)))try{f.cells(a.record_id,f.getColIndexById(i)).setValue(h[i])}catch(j){$dhx._enable_log&&console.log(j.stack)}}"undefined"!=typeof f._changeFormId}),a.onSuccess&&a.onSuccess(b)}var c=$dhx.jDBd;if("undefined"==typeof a.data_set_name||0==a.data_set_name.length)return void dhtmlx.message({type:"error",text:"data_set_name is missing when updating a record"});if("undefined"==typeof a.record_id||0==a.record_id.length)return void dhtmlx.message({type:"error",text:"record_id is missing when updating a record"});if("undefined"==typeof a.record||0==a.record.length)return void dhtmlx.message({type:"error",text:"record is missing when updating a record"});if(a.primary_key=a.primary_key||c.data_sets[a.data_set_name].primary_key,"undefined"==typeof a.live&&(a.live=!0),0==a.live?a.live=!1:a.live=!0,$dhx._enable_log&&console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.live),a.api_service&&(a.api_service.end_point=a.api_service.end_point||(c.data_sets[a.data_set_name].api_service.end_point?c.data_sets[a.data_set_name].api_service.end_point:!1),a.api_service.api_payload=a.api_payload||"hash="+JSON.stringify(a.record)),console.log(a.api_service),a.api_service||c.data_sets[a.data_set_name].api_service&&(a.api_service=c.data_sets[a.data_set_name].api_service),a.api_service&&(a.api_service.end_point||(a.api_service=!1)),a.api_payload=a.api_payload||"hash="+JSON.stringify(a.record),$dhx._enable_log&&console.log(" c.api_service >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),$dhx._enable_log&&console.log(a.api_service),$dhx._enable_log&&console.log(a.api_service.post_end_point),$dhx._enable_log&&console.log(c.data_sets[a.data_set_name].api_service),a.api_service){if("disconnected"==$dhx.REST.API.auth_status)return dhtmlx.message({type:"error",text:"please login into REST.API before creating datasets"}),void(a.onFail&&a.onFail("please login into REST.API before creating datasets"));a.live?$dhx.REST.API.put({resource:a.api_service.end_point+"/"+a.record_id,format:"json",payload:a.api_payload,onSuccess:function(c){var d=JSON.parse(c.response);if("success"==d.status){b(d[a.primary_key])}else dhtmlx.message({type:"error",text:"don't saved. reason: "+d.response}),a.onFail&&a.onFail("don't saved. reason: "+d.response)},onFail:function(b){dhtmlx.message({type:"error",text:b}),a.onFail&&a.onFail("don't saved. reason: "+b)}}):b(a.record_id)}else b(a.record_id)}};