
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generated code - Do not edit																					 //
//																												 //
// This is a SOAP adapter that was auto-generated by Worklight for invocation of specific SOAP-based services.   //
// The adapter may invoke more than one service as long as they are all from the same enpdpoint (server host).   //
// Each adapter procedure matches a single operation for the same endpoint server and accepts:                   //
//   params  - Serialized JSON representation of the XML-based SOAP body to be sent to the service               //
//   headers - Custom HTTP headers to be specified when invoking the remote service. It is a JSON object with    //
//             the headers names and values. E.g. { 'name1' : 'value1', 'name2' : 'value2' }                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getOrderStatusVS_ZqtcSalesorderSearch(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://www.w3.org/2003/05/soap-envelope';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'ZqtcSalesorderSearch': { nsPrefix: 'tns', type: 'tns:ZqtcSalesorderSearch' }				
		},
		
		types: {
			'tns:ZttqtcProdh': {
				children: [
					{'item': { type: 'tns:ZttqtcProdhLines' }}	
				]
			},

			'tns:ZttqtcProdhLines': {
				children: [
					{'Prodh': {  }}	
				]
			},

			'tns:ZqtcSalesorderSearch': {
				children: [
					{'AgreementId': {  }},	
					{'AvnetPo': {  }},	
					{'Country': {  }},	
					{'CustPartNo': {  }},	
					{'CustomerId': {  }},	
					{'CustomerPo': {  }},	
					{'CustomerRefid': {  }},	
					{'DeliveryDoc': {  }},	
					{'EdFromDate': {  }},	
					{'EdToDate': {  }},	
					{'EndUserName': {  }},	
					{'EndUserPo': {  }},	
					{'FromDate': {  }},	
					{'InvoiceNo': {  }},	
					{'ManfPartNo': {  }},	
					{'Manufacturer': {  }},	
					{'OrderType': { type: 'tns:ZttqtcChar4' }},	
					{'Prodhierarchy': { type: 'tns:ZttqtcProdh' }},	
					{'ReleaseNo': {  }},	
					{'SalesOrder': {  }},	
					{'SearchType': {  }},	
					{'SerialNumber': {  }},	
					{'ShipToName': {  }},	
					{'State': {  }},	
					{'SupContractNo': {  }},	
					{'SupProposalNo': {  }},	
					{'ToDate': {  }},	
					{'VendSaleOrder': {  }}	
				]
			},

			'tns:ZttqtcChar4': {
				children: [
					{'item': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:n0="urn:sap-com:document:sap:rfc:functions" xmlns:n1="urn:sap-com:document:sap:rfc:functions" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:tns="urn:sap-com:document:sap:soap:functions:mc-style" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:wsoap12="http://schemas.xmlsoap.org/wsdl/soap12/" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'urn:sap-com:document:sap:soap:functions:mc-style:ZWS_QTC_SALESORDER_SEARCH:ZqtcSalesorderSearchRequest';
    return invokeWebService(request, headers, soapAction);
}


	
function buildBody(params, namespaces, mappings, soapEnvNS){
    var body =
        '<soap:Envelope xmlns:soap="' + soapEnvNS + '">\n' +
        '<soap:Body>\n';
	
	var fixedParams = {};
	for (var paramName in params) {
		if (mappings['roots'][paramName]) { //There is mapping for this param
    		var root = mappings['roots'][paramName];
    		var name = paramName;
    		if (root['nsPrefix'])
    			name = root['nsPrefix'] + ':' + paramName;
    		fixedParams[name] = handleMappings(params[paramName], root['type'], mappings['types']); 
		}
		else {
			fixedParams[paramName] = params[paramName];
		}
	}

    body = jsonToXml(fixedParams, body, namespaces);
		
    body += 
        '</soap:Body>\n' +
        '</soap:Envelope>\n';
    return body;
}

function handleMappings(jsonObj, type, mappings) {
	var fixedObj = {};
	var typeMap = mappings[type]['children']; //Get the object that defines the mappings for the specific type
	
	// loop through the types and see if there is an input param defined
	for(var i = 0; i < typeMap.length; i++) {
		var childType = typeMap[i];
		
		for(var key in childType) {
			if(jsonObj[key] !== null) { // input param exists
				var childName = key;
				if (childType[key]['nsPrefix'])
					childName = childType[key]['nsPrefix'] + ':' + key;
			
				if (!childType[key]['type']) //Simple type element
					fixedObj[childName] = jsonObj[key];
				else if (typeof jsonObj[key] === 'object' && jsonObj[key].length != undefined) { //Array of complex type elements
					fixedObj[childName] = [];
					for (var i=0; i<jsonObj[key].length; i++)
						fixedObj[childName][i] = handleMappings(jsonObj[key][i], childType[key]['type'], mappings);
				}
				else if (typeof jsonObj[key] === 'object') //Complex type element
					fixedObj[childName] = handleMappings(jsonObj[key], childType[key]['type'], mappings);
				else if (childType[key]['type'] == '@') //Attribute
					fixedObj['@' + childName] = jsonObj[key];
			}
		}
    }
	
	return fixedObj;
}

function getAttributes(jsonObj) {
	var attrStr = '';
	for(var attr in jsonObj) {
		if (attr.charAt(0) == '@') {
		    var val = jsonObj[attr];
			attrStr += ' ' + attr.substring(1);
			attrStr += '="' + xmlEscape(val) + '"';
		}
	}
	return attrStr;
}

function jsonToXml(jsonObj, xmlStr, namespaces) {
	var toAppend = '';
	for(var attr in jsonObj) {
		if (attr.charAt(0) != '@') {
		    var val = jsonObj[attr];
			if (typeof val  === 'object'  &&  val.length != undefined) {
				for(var i=0; i<val.length; i++) {
					toAppend += "<" + attr + getAttributes(val[i]);
					if (namespaces != null)
						toAppend += ' ' + namespaces;
					toAppend += ">\n";
					toAppend = jsonToXml(val[i], toAppend);
					toAppend += "</" + attr + ">\n";
				}
			}
			else {
				toAppend += "<" + attr;
			    if (typeof val  === 'object') {
					toAppend += getAttributes(val);
					if (namespaces != null)
						toAppend += ' ' + namespaces;
					toAppend += ">\n";
					toAppend = jsonToXml(val, toAppend);
				}
				else {
					toAppend += ">" + xmlEscape(val);
				}
				toAppend += "</" + attr + ">\n";
			}
		}
	}
	return xmlStr += toAppend;
}


function invokeWebService(body, headers, soapAction){
    var input = {
        method : 'post',
        returnedContentType : 'xml',
        path : '/ws/getOrderStatusVS',
        body: {
            content : body.toString(),
            contentType : 'text/xml; charset=utf-8'
        }
    };
    
    //Adding custom HTTP headers if they were provided as parameter to the procedure call
    //Always add header for SOAP action 
    headers = headers || {};
    if (soapAction != 'null')
    	headers.SOAPAction = soapAction;
    input['headers'] = headers;
        
    return WL.Server.invokeHttp(input);
}

function xmlEscape(obj) {
    if(typeof obj !== 'string') {
    	return obj;
    }
    return obj.replace(/&/g, '&amp;')
           .replace(/"/g, '&quot;')
           .replace(/'/g, '&apos;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;');
}

