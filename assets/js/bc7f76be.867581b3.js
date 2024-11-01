"use strict";(self.webpackChunkkarunjosyin=self.webpackChunkkarunjosyin||[]).push([[745],{8533:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>c,assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(4848),o=s(8453);const t={},r=void 0,l={id:"CephBox/CephBox - DIY setup/Installing Ceph Cluster",title:"Installing Ceph Cluster",description:"Cephadm orchestrator module is used for the ceph cluster installation.",source:"@site/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster.md",sourceDirName:"CephBox/CephBox - DIY setup",slug:"/CephBox/CephBox - DIY setup/Installing Ceph Cluster",permalink:"/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up Raspberry Pi OS",permalink:"/docs/CephBox/CephBox - DIY setup/Setting up Raspberry Pi OS"}},a={},c=({children:e,color:n})=>(0,i.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e}),d=[{value:"Installing Cephadm",id:"installing-cephadm",level:2},{value:"Installing ceph-common repo",id:"installing-ceph-common-repo",level:2},{value:"Bootstrapping Ceph Cluster",id:"bootstrapping-ceph-cluster",level:2},{value:"Deploying RADOSGW service for S3",id:"deploying-radosgw-service-for-s3",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/cephadm/install/#distribution-specific-installations",children:"Cephadm orchestrator"})," module is used for the ceph cluster installation."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"ceph-common package for Ceph Reef or Squid is not available for Debian 12.7 ARM64 OS.\nWe can install a lower version(pacific) or stick to cephadm shell to monitor and administer the Ceph cluster"})}),"\n",(0,i.jsx)(n.admonition,{title:"Automated installation method",type:"tip",children:(0,i.jsxs)(n.p,{children:["We have automated Ceph Cluster installation in a bash script. You may run the script directly instead of doing the below steps manually: ",(0,i.jsx)(n.a,{href:"https://github.com/karunjosy/CephDrive/blob/main/scripts/install.sh",children:"Install Ceph Cluster"})]})}),"\n",(0,i.jsx)(n.h2,{id:"installing-cephadm",children:"Installing Cephadm"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install podman, lvm2 and chrony"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt-get -y install lvm2 podman chrony\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To install ",(0,i.jsx)(c,{color:"#1877F2",children:"Ceph Squid version (19.2.0)"}),", download it's associated  cephadm binary and make it executable"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /sbin/ && \ncurl --silent --remote-name --location https://download.ceph.com/rpm-squid/el9/noarch/cephadm\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'chmod +x /sbin/cephadm\necho "export PATH=/sbin:/bin:/usr/bin:/usr/sbin:/usr/local/sbin:/usr/local/bin" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add repo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cephadm add-repo --version 19.2.0\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pull the latest ceph image from Quay"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"podman pull quay.io/ceph/ceph:v19.2.0\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-ceph-common-repo",children:"Installing ceph-common repo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ceph-common package for Ceph Reef or Squid is not available for Debian 12.7 ARM64 OS. We can install a lower version(pacific) or stick to cephadm shell to monitor and administer the Ceph clusteras\ncephadm is backward compatible for most of the features. (You can safely skip this step)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt-get install ceph-common=16.2.11+ds-2 python3-ceph-argparse=16.2.11+ds-2 python3-ceph-common=16.2.11+ds-2 python3-cephfs=16.2.11+ds-2\ncephadm install ceph-common\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bootstrapping-ceph-cluster",children:"Bootstrapping Ceph Cluster"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Single node bootstrap example"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use this method only if you are testing Ceph Cluster on a single node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# cephadm --image quay.io/ceph/ceph:v19.2.0 bootstrap --mon-ip  <replace_with_node_IP> --single-host-defaults\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Normal Installation"})," (Creating Ceph cluster with 2 or more nodes)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prerequisites :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cephadm is installed in all nodes"}),"\n",(0,i.jsx)(n.li,{children:"Passwordless SSH is configured from the admin node to the other nodes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a initial-config.yaml file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'service_type: host\naddr: $node1_ip\nhostname: $node1_hostname\n---\nservice_type: host\naddr: $node2_ip\nhostname: $node2_hostname\n---\nservice_type: mon\nplacement:\nhost_pattern: "$node_NAME_PREFIX-[0-1]"\n---\nservice_type: osd\nservice_id: my_osds\nplacement:\nhost_pattern: "$VM_NAME_PREFIX-[0-2]"\ndata_devices:\nall: true\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the Bootstrap command from the first node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" # cephadm --image quay.io/ceph/ceph:v19.2.0 bootstrap --apply-spec initial-config.yaml --mon-ip  <replace_with_node_IP>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once bootstrap is complete you will see messages in terminal which will include the Dashboard URL and login credentials, for example;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Ceph Dashboard is now available at:\n\n    URL: https://rpi3:8443/\n    User: admin\n    Password: 9pbxkxkxkx\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-radosgw-service-for-s3",children:"Deploying RADOSGW service for S3"}),"\n",(0,i.jsx)(n.p,{children:"RGW service can be easily added from dashboard :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Login to Dashboard ",(0,i.jsx)(n.code,{children:"https://<IP>:8443"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to  ",(0,i.jsx)(c,{color:"#1877F2",children:" Administration >> Services >> + Create"})," and enter the details"]}),"\n",(0,i.jsx)("img",{src:"/img/rgwservice.png",alt:"Sample Image",width:"800",height:"500"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);