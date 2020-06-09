(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+F0Y":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return o}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/ilp-packets.mdx"}});var l={_frontmatter:b},c=r.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interledger-packets"},"Interledger Packets"),Object(a.b)("p",null,"ILP uses an ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/interledger/rfcs/blob/master/0030-notes-on-oer-encoding/0030-notes-on-oer-encoding.md"}),"OER-encoded"),"\nbinary packet framework to ensure the most compact representation of money while in transit."),Object(a.b)("p",null,"There are three types of packet: ",Object(a.b)("inlineCode",{parentName:"p"},"PREPARE"),", ",Object(a.b)("inlineCode",{parentName:"p"},"FULFILL"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"REJECT"),"."),Object(a.b)("p",null,"You can discover the details of each one in the ILPv4 RFC under ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/interledger/rfcs/blob/master/0027-interledger-protocol-4/0027-interledger-protocol-4.md#packet-format"}),"Packet Format"),", but this page details concrete representations of each."),Object(a.b)("h2",{id:"prepare-packet"},"Prepare Packet"),Object(a.b)("p",null,"This is an actual binary ",Object(a.b)("inlineCode",{parentName:"p"},"PREPARE")," packet, hex-encoded:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"0C430000000000000001323032303035313631343137353232303566687AADF862BD776C8FC18B8E9F8E20089714856EE233B3902A591D0D5F292508746573742E626F6200\n")),Object(a.b)("p",null,"It contains the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Packet Type"),": ",Object(a.b)("inlineCode",{parentName:"li"},"12")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"amount"),": ",Object(a.b)("inlineCode",{parentName:"li"},"1")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"expiresAt"),": ",Object(a.b)("inlineCode",{parentName:"li"},"2020-05-16T14:19:40.768Z")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"executionCondition"),": ",Object(a.b)("inlineCode",{parentName:"li"},"Zmh6rfhivXdsj8GLjp+OIAiXFIVu4jOzkCpZHQ1fKSU=")," (ASN1.OER, Base64-encoded)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"destination"),": ",Object(a.b)("inlineCode",{parentName:"li"},"test.alice")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data"),": ",Object(a.b)("inlineCode",{parentName:"li"},"[empty]"))),Object(a.b)("h2",{id:"fulfill-packet"},"Fulfill Packet"),Object(a.b)("p",null,"This is the corresponding binary ",Object(a.b)("inlineCode",{parentName:"p"},"FULFILL")," packet, hex-encoded:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"0D21000000000000000000000000000000000000000000000000000000000000000000\n")),Object(a.b)("p",null,"It contains the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Packet Type"),": ",Object(a.b)("inlineCode",{parentName:"li"},"13")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"fulfillment"),": ",Object(a.b)("inlineCode",{parentName:"li"},"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=")," (ASN1.OER, Base64-encoded)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data"),": ",Object(a.b)("inlineCode",{parentName:"li"},"[empty]"))),Object(a.b)("h2",{id:"reject-packet"},"Reject Packet"),Object(a.b)("p",null,"This is the corresponding binary ",Object(a.b)("inlineCode",{parentName:"p"},"REJECT")," packet, hex-encoded:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"0E114630320B746573742E636F6E6E69650000\n")),Object(a.b)("p",null,"It contains the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Packet Type"),": ",Object(a.b)("inlineCode",{parentName:"li"},"14")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Message"),": ",Object(a.b)("inlineCode",{parentName:"li"},"[empty]")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Error Code"),": ",Object(a.b)("inlineCode",{parentName:"li"},"F02 Rejeced")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Triggered By"),": ",Object(a.b)("inlineCode",{parentName:"li"},"test.connie")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data"),": ",Object(a.b)("inlineCode",{parentName:"li"},"[empty]"))))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/ilp-packets.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-ilp-packets-mdx-878d8bad79d51e23442c.js.map