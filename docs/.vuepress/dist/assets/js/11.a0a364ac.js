(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"connecting-two-nodes-directly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-two-nodes-directly"}},[s._v("#")]),s._v(" Connecting two nodes directly")]),s._v(" "),a("p",[s._v("This guide is primarily for getting two nodes mining and connected to a swarm on a single machine for local development purposes. Some of the instructions can still apply to connecting to the testnet.")]),s._v(" "),a("p",[s._v("It is optionally possible to modify a copy of "),a("a",{attrs:{href:"https://github.com/filecoin-project/go-filecoin/blob/master/functional-tests/retrieval",target:"_blank",rel:"noopener noreferrer"}},[s._v("this script"),a("OutboundLink")],1),s._v(", which can be used to set up two local nodes and perform a file store/retrieval.")]),s._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[s._v("#")]),s._v(" Table of contents")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#initial-setup"}},[s._v("Initial setup")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#node-one"}},[s._v("Node one")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#node-two"}},[s._v("Node two")])])])])]),s._v(" "),a("h2",{attrs:{id:"initial-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[s._v("#")]),s._v(" Initial setup")]),s._v(" "),a("p",[s._v("Set the location of the filecoin source (substitute the path with the location of the cloned source tree):")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO_FILECOIN_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go/src/github.com/filecoin-project/go-filecoin\n")])])]),a("h3",{attrs:{id:"node-one"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-one"}},[s._v("#")]),s._v(" Node one")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Initialize "),a("code",[s._v("go-filecoin")]),s._v(" in the default directory, and use the genesis file from "),a("code",[s._v("go-filecoin")]),s._v(" source.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go-filecoin init --genesisfile ./fixtures/genesis.car\n")])])]),a("p",[s._v("These files will now be in "),a("code",[s._v("$HOME/.filecoin")]),s._v(".")])]),s._v(" "),a("li",[a("p",[s._v("Run the daemon:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go-filecoin daemon\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Get the address of Node 1 with "),a("code",[s._v("go-filecoin id")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ go-filecoin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addresses"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL"')]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/172.16.200.201/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AgentVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ProtocolVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PublicKey"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("For convenience, copy-paste the first address to export as a shell variable:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE1_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL    \n")])])])])]),s._v(" "),a("h3",{attrs:{id:"node-two"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-two"}},[s._v("#")]),s._v(" Node two")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("NOTICE:")]),s._v(" This section includes instructions for two nodes on the "),a("strong",[s._v("same machine")]),s._v(" for development/testing purposes. To connect two separate machines, the "),a("code",[s._v("--repodir")]),s._v(" flag can be removed from each command, unless a different path than the default filecoin repo directory in $HOME/.filecoin is being used for the configuration.")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("In a new terminal, choose a location for the second node's repository directory and supply its path to the intialization script with the "),a("code",[s._v("--repodir")]),s._v(" option:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go-filecoin init --genesisfile "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GO_FILECOIN_PATH")]),s._v("/fixtures/genesis.car --repodir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.filecoin2\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Edit the "),a("code",[s._v("config.json")]),s._v(" file and change the values for "),a("code",[s._v("api.address")]),s._v(" and "),a("code",[s._v("swarm.address")]),s._v(" to be different from the defaults (which are in use by the first node):")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                                                                                                                                                            \n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/3453"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                       \n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessControlAllowOrigin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//^^^^ change this to a different port/value                                                                                                                              ")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                            \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                           \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                            \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://127.0.0.1:8080"')]),s._v("                                                                                                                            \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                                                          \n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessControlAllowCredentials"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                     \n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"accessControlAllowMethods"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                                                                                              \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                                              \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                                                                                                                             \n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PUT"')]),s._v("                                                                                                                                               \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                                                                                                                                                           \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n...                                                                                 \n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"swarm"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                                                                                                                                                          \n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/0.0.0.0/tcp/6000"')]),s._v("                                                                                                                          \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//^^^^ change this to a different port/value                                                   ")]),s._v("\n...\n")])])])]),s._v(" "),a("li",[a("p",[s._v("In a new terminal, launch the daemon:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go-filecoin daemon --repodir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.filecoin2\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Fetch the address of node 2:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ go-filecoin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" --repodir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.filecoin2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addresses"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs"')]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/172.16.200.201/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AgentVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ProtocolVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PublicKey"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE2_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs    \n")])])])]),s._v(" "),a("li",[a("p",[s._v("Connect node 2 to node 1 using the address retrieved for node 1:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go-filecoin swarm connect "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE1_ADDR")]),s._v(" --repodir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.filecoin2\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Check your connected peers:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Peers of node 1")]),s._v("\ngo-filecoin swarm peers\n/ip4/127.0.0.1/tcp/6001/ipfs/QmXcUJ7YoFQEY7w8bpxuFvQtY9VHUkYfx6AZW6Bi2MDFbs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Peers of node 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# you can also run commands without specifying --repodir if you set FIL_PATH")]),s._v("\ngo-filecoin swarm peers --repodir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.filecoin2\n/ip4/127.0.0.1/tcp/6000/ipfs/QmVk7A2vEBFr9GyKyQ3wvDmTWj8M4H3jubHUDc3CktdoXL\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);