"use strict";(self.webpackChunkkarunjosyin=self.webpackChunkkarunjosyin||[]).push([[6827],{2504:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var n=s(4848),t=s(8453);const d={},r=void 0,l={id:"CephBox/CephBox - DIY setup/Troubleshooting Doc",title:"Troubleshooting Doc",description:"Reset dashboard password",source:"@site/docs/CephBox/CephBox - DIY setup/Troubleshooting Doc.md",sourceDirName:"CephBox/CephBox - DIY setup",slug:"/CephBox/CephBox - DIY setup/Troubleshooting Doc",permalink:"/docs/CephBox/CephBox - DIY setup/Troubleshooting Doc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CephBox/CephBox - DIY setup/Troubleshooting Doc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automatic Setup",permalink:"/docs/CephBox/CephBox - DIY setup/Automatic Setup"},next:{title:"Meet the team",permalink:"/docs/CephBox/CephBox - DIY setup/Meet the team"}},c={},i=[{value:"Reset dashboard password",id:"reset-dashboard-password",level:3},{value:"Change replica size and min_size for the pools",id:"change-replica-size-and-min_size-for-the-pools",level:3},{value:"Install s3cmd to set CORS",id:"install-s3cmd-to-set-cors",level:3}];function a(e){const o={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"reset-dashboard-password",children:"Reset dashboard password"}),"\n",(0,n.jsxs)(o.p,{children:["From ",(0,n.jsx)(o.code,{children:"cephadm shell"})," run"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'# echo "<replace_with_ your_password>" > dashboard_password.yml\n# ceph dashboard ac-user-set-password admin -i dashboard_password.yml\n'})}),"\n",(0,n.jsx)(o.h3,{id:"change-replica-size-and-min_size-for-the-pools",children:"Change replica size and min_size for the pools"}),"\n",(0,n.jsx)(o.p,{children:"If you are using 2 nodes, you need to change the pool size and min_size"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"# ceph osd pool set <poolname> size <num-replicas>\n# ceph osd pool set <poolname> min_size <num-replicas>\n"})}),"\n",(0,n.jsx)(o.p,{children:"Or if you want to change the setting for global"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"# ceph config set global osd_pool_default_min_size 1\n# ceph config set global osd_pool_default_size 2\n"})}),"\n",(0,n.jsx)(o.h3,{id:"install-s3cmd-to-set-cors",children:"Install s3cmd to set CORS"}),"\n",(0,n.jsx)(o.p,{children:"Install s3cmd"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"apt-get install s3cmd\n"})}),"\n",(0,n.jsx)(o.p,{children:"Configure s3md. Replace $ACCESS_KEY, $SECRET_KEY, $ENDPOINT_URL"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"cat > .s3cfg <<EOL\n[default]\naccess_key = $ACCESS_KEY\nsecret_key = $SECRET_KEY\nhost_base = ${ENDPOINT_URL}:${ENDPOINT_PORT}\nhost_bucket = ${ENDPOINT_URL}\nuse_https = No\nsignature_v2 = No\nEOL\n"})}),"\n",(0,n.jsx)(o.p,{children:"Create cors.xml file"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"<CORSConfiguration>\n    <CORSRule>\n        <AllowedOrigin>*</AllowedOrigin>\n        <AllowedMethod>GET</AllowedMethod>\n        <AllowedMethod>HEAD</AllowedMethod>\n        <AllowedMethod>POST</AllowedMethod>\n        <AllowedMethod>PUT</AllowedMethod>\n        <AllowedMethod>DELETE</AllowedMethod>\n        <AllowedHeader>*</AllowedHeader>\n        <ExposeHeader>Etag</ExposeHeader>\n        <MaxAgeSeconds>3000</MaxAgeSeconds>\n    </CORSRule>\n</CORSConfiguration>\n"})}),"\n",(0,n.jsx)(o.p,{children:"apply it to the bucket using s3cmd"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"s3cmd setcors cors.xml s3://<bucket_name>\n"})})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>l});var n=s(6540);const t={},d=n.createContext(t);function r(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);