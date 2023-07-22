FROM mcr.microsoft.com/windows/servercore:1803 as installer

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]
RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/v12.4.0/node-v12.4.0-win-x64.zip";
RUN Expand-Archive nodejs.zip -DestinationPath C:\;
RUN Rename-Item "C:\\node-v12.4.0-win-x64" c:\nodejs
RUN cd c:\nodejs
RUN dir