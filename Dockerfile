# Use the official Windows Server Core base image
FROM mcr.microsoft.com/windows/servercore/iis
# Set the working directory
RUN powershell -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

WORKDIR /inetpub/wwwroot

COPY ${source:-dist/} .