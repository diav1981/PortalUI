FROM mcr.microsoft.com/windows/servercore:1803 as build-stage

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]

RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/v12.4.0/node-v12.4.0-win-x64.zip"; `
RUN Expand-Archive nodejs.zip -DestinationPath C:\; `
RUN Rename-Item "C:\\node-v12.4.0-win-x64" c:\nodejs

FROM mcr.microsoft.com/windows/nanoserver:1803

WORKDIR C:\nodejs
COPY --from=installer C:\nodejs\ .
RUN SETX PATH C:\nodejs
RUN npm config set registry https://registry.npmjs.org/

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build