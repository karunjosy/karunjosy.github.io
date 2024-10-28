"use strict";(self.webpackChunkkarunjosyin=self.webpackChunkkarunjosyin||[]).push([[745],{224:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>a,assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=s(4848),o=s(8453);const i={},l=void 0,c={id:"CephBox/CephBox - DIY setup/Installing Ceph Cluster",title:"Installing Ceph Cluster",description:"Cephadm orchestrator module is used for the ceph cluster installation.",source:"@site/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster.md",sourceDirName:"CephBox/CephBox - DIY setup",slug:"/CephBox/CephBox - DIY setup/Installing Ceph Cluster",permalink:"/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test2",permalink:"/docs/CephBox/CephBox - DIY setup/test2"}},r={},a=({children:e,color:n})=>(0,t.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e}),p=[{value:"Installing Cephadm and ceph-common",id:"installing-cephadm-and-ceph-common",level:3},{value:"Bootstrapping",id:"bootstrapping",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Cephadm orchestrator module is used for the ceph cluster installation.\nReference: ",(0,t.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/cephadm/install/#distribution-specific-installations",children:"https://docs.ceph.com/en/latest/cephadm/install/#distribution-specific-installations"})]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"ceph-common package for Ceph reef is not available for Debian 12.7 ARM64 OS.\nWe can install a lower version(pacific) or stick to cephadm shell to monitor and administer the Ceph cluster"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-cephadm-and-ceph-common",children:"Installing Cephadm and ceph-common"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install podman and lvm2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt-get -y install podman\napt-get -y install lvm2\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To install ",(0,t.jsx)(a,{color:"#1877F2",children:"Ceph Reef version (18.2.4)"}),", install it's associated  cephadm binary"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl --silent --remote-name --location https://download.ceph.com/rpm-reef/el9/noarch/cephadm\nchmod +x cephadm\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add repo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./cephadm add-repo --release reef\n./cephadm install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Move it to /bin"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cp cephadm /bin\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"install and pull image"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cephadm shell\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"install ceph-common"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt-get install ceph-common=16.2.11+ds-2 python3-ceph-argparse=16.2.11+ds-2 python3-ceph-common=16.2.11+ds-2 python3-cephfs=16.2.11+ds-2\ncephadm add-repo --release reef\ncephadm install ceph-common\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bootstrapping",children:"Bootstrapping"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["single node bootstrap example","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# cephadm --image quay.io/ceph/ceph:v18.2.4 bootstrap --mon-ip  192.168.0.113 --single-host-defaults\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(6540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);