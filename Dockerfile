# Use the official Windows Server Core base image
FROM mcr.microsoft.com/windows/servercore:1803

# Set the working directory
WORKDIR /site

# Copy your website files to the container
COPY dist/ .

# Install IIS
RUN dism /online /enable-feature /all /featurename:IIS-WebServer /NoRestart

# Create an IIS site
RUN powershell -NoProfile -Command \
    Import-module IISAdministration; \
    New-IISSite -Name "MySite" -PhysicalPath C:\site -BindingInformation "*:80:"

# Start the IIS service
RUN powershell -NoProfile -Command \
    Start-Service W3SVC

# Expose the port that IIS listens on
EXPOSE 80
