"use strict";(self.webpackChunkkarunjosyin=self.webpackChunkkarunjosyin||[]).push([[8176],{8119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(4848),s=t(8453);const r={},i=void 0,l={id:"CephBox/CephBox - DIY setup/Setup Ente Photos app",title:"Setup Ente Photos app",description:"Ente Photos app is a fully open source, end-to-end encrypted platform  to store your photos(an open source alternative to Apple and Google Photos).Ente photos can be also used to Self-host and integrate with any S3 compatible storage platform like Ceph RGW.",source:"@site/docs/CephBox/CephBox - DIY setup/Setup Ente Photos app.md",sourceDirName:"CephBox/CephBox - DIY setup",slug:"/CephBox/CephBox - DIY setup/Setup Ente Photos app",permalink:"/docs/CephBox/CephBox - DIY setup/Setup Ente Photos app",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CephBox/CephBox - DIY setup/Setup Ente Photos app.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing Ceph Cluster",permalink:"/docs/CephBox/CephBox - DIY setup/Installing Ceph Cluster"},next:{title:"Troubleshooting Doc",permalink:"/docs/CephBox/CephBox - DIY setup/Troubleshooting Doc"}},c={},d=[{value:"Ente desktop app and mobile app",id:"ente-desktop-app-and-mobile-app",level:3},{value:"Deploying Ente Musuem server with Postgress",id:"deploying-ente-musuem-server-with-postgress",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/ente-io/ente",children:"Ente"})," Photos app is a fully open source, end-to-end encrypted platform  to store your photos(an open source alternative to Apple and Google Photos).Ente photos can be also used to ",(0,o.jsx)(n.a,{href:"https://help.ente.io/self-hosting/",children:"Self-host"})," and integrate with any S3 compatible storage platform like Ceph RGW."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Huge shout-out to the Ente team for their awesomeness!"})}),"\n",(0,o.jsx)(n.p,{children:"We are using Ente Photos app to store our photos integrating with the Ceph Cluster that we have built."}),"\n",(0,o.jsx)(n.p,{children:"Okay, now some basics of Ente architecture..."}),"\n",(0,o.jsx)(n.p,{children:"There are three major Components in Ente platform:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ente desktop and mobile app"})," --\x3e This is the user interface"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ente Musuem server with Postgress"})," --\x3e Stateless API server which manages the access of data"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ceph RGW external"})," --\x3e This is where the actual data is stored in S3 buckets"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For the uploads to work, all three of them need to be able to reach each other. This is because the client uploads directly to the object storage. The interaction goes something like this:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Client wants to upload, it asks museum where it should upload to."}),"\n",(0,o.jsx)(n.li,{children:"Museum creates pre-signed URLs for the S3 bucket that was configured."}),"\n",(0,o.jsx)(n.li,{children:"Client directly uploads to the S3 buckets using these URLs."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Read more about Museum and Ente architecture ",(0,o.jsx)(n.a,{href:"https://help.ente.io/self-hosting/guides/configuring-s3",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"ente-desktop-app-and-mobile-app",children:"Ente desktop app and mobile app"}),"\n",(0,o.jsxs)(n.p,{children:["Download the desktop app from ",(0,o.jsx)(n.a,{href:"https://ente.photos/",children:"https://ente.photos/"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can install Ente mobile app  from playstore"}),"\n",(0,o.jsxs)(n.p,{children:["By default if you login it will connect to their production server endpoint.\nFor self-hosting, we need to provide our local endpoint.\nNow here is the trick:\nTap ",(0,o.jsx)(n.strong,{children:"7 times on the onboarding screen"})," to bring up a page where you can configure the endpoint the app should be connecting to."]}),"\n",(0,o.jsx)(n.h3,{id:"deploying-ente-musuem-server-with-postgress",children:"Deploying Ente Musuem server with Postgress"}),"\n",(0,o.jsxs)(n.p,{children:["Reference : ",(0,o.jsx)(n.a,{href:"https://github.com/ente-io/ente/blob/main/server/docs/docker.md",children:"https://github.com/ente-io/ente/blob/main/server/docs/docker.md"})]}),"\n",(0,o.jsx)(n.p,{children:"Steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In one of the Raspberry Pi machine create a directory where you'll run Ente"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    mkdir ente && cd ente\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the starter ",(0,o.jsx)(n.em,{children:"compose.yaml"})," and  its support files from the repository onto your directory. You can do it by hand, or use (e.g.) curl"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# compose.yaml\ncurl -LO https://raw.githubusercontent.com/ente-io/ente/main/server/compose.yaml\n\nmkdir -p scripts/compose\ncd scripts/compose\n\n# scripts/compose/credentials.yaml\ncurl -LO https://raw.githubusercontent.com/ente-io/ente/main/server/scripts/compose/credentials.yaml\n\ncd ../..\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note : The above files are default to get Musuem server running with Minio as backend. We have to modify the files to make it work with Ceph RGW."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Modify compose.yaml as"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'services:\n  museum:\n    image: ghcr.io/ente-io/server\n    ports:\n      - 8080:8080 # API\n      - 2112:2112 # Prometheus metrics\n    depends_on:\n      postgres:\n        condition: service_healthy\n    environment:\n      # Pass-in the config to connect to the DB and MinIO\n      ENTE_CREDENTIALS_FILE: /credentials.yaml\n    volumes:\n      - custom-logs:/var/logs\n      - ./museum.yaml:/museum.yaml:ro\n      - ./scripts/compose/credentials.yaml:/credentials.yaml:ro\n      - ./data:/data:ro\n    networks:\n      - internal\n\n  postgres:\n    image: postgres:15\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_USER: pguser\n      POSTGRES_PASSWORD: pgpass\n      POSTGRES_DB: ente_db\n    # Wait for postgres to be accept connections before starting museum.\n    healthcheck:\n      test:\n        [\n          "CMD",\n          "pg_isready",\n          "-q",\n          "-d",\n          "ente_db",\n          "-U",\n          "pguser"\n        ]\n      start_period: 40s\n      start_interval: 1s\n    volumes:\n      - postgres-data:/var/lib/postgresql/data\n    networks:\n      - internal\nvolumes:\n  custom-logs:\n  postgres-data:\n  \n\n\nnetworks:\n  internal:\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Edit the scripts/compose/credentials.yaml to add these details:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"db:\n    host: postgres\n    port: 5432\n    name: ente_db\n    user: pguser\n    password: pgpass\n\ns3:\n    are_local_buckets: true\n    b2-eu-cen:\n        key: <access_key>\n        secret: <secret_key>\n        endpoint: 10.x.x.x:80 \n        region: eu-central-2\n            bucket: test\n"})}),"\n",(0,o.jsx)(n.p,{children:"Modify the above file to include the access credetials of your Ceph RGW bucket"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install docker and docker-compose if not present"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"docker-compose :"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# apt install docker.io -y\n\n# curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\n#  chmod +x /usr/local/bin/docker-compose\n#  docker-compose --version\nDocker Compose version v2.29.7\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"docker engine install"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# apt install ca-certificates curl gnupg\n#  install -m 0755 -d /etc/apt/keyrings\n# curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n# sudo chmod a+r /etc/apt/keyrings/docker.gpg\n# echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n# apt update\n# apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n# docker version\n Version:           27.3.1\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Set CORS for the bucket"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# cat cors.xml\n<CORSConfiguration>\n    <CORSRule>\n        <AllowedOrigin>*</AllowedOrigin>\n        <AllowedMethod>GET</AllowedMethod>\n        <AllowedMethod>HEAD</AllowedMethod>\n        <AllowedMethod>POST</AllowedMethod>\n        <AllowedMethod>PUT</AllowedMethod>\n        <AllowedMethod>DELETE</AllowedMethod>\n        <AllowedHeader>*</AllowedHeader>\n        <ExposeHeader>Etag</ExposeHeader>\n        <MaxAgeSeconds>3000</MaxAgeSeconds>\n    </CORSRule>\n</CORSConfiguration>\n"})}),"\n",(0,o.jsx)(n.p,{children:"and run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"s3cmd setcors cors.xml s3://test\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["From the ",(0,o.jsx)(n.em,{children:"ente"})," directory run"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker-compose up\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the mobile or desktop app and tap 7 times and enter the endpoint"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"https://192.168.0.11:8080\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"And upload your first photo!"}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);