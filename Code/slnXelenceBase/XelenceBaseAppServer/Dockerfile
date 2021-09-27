#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build
WORKDIR /src

COPY ["SolutionTemplateAppServer/SolutionTemplateAppServer.csproj", "SolutionTemplateAppServer/"]
RUN dotnet restore "SolutionTemplateAppServer/SolutionTemplateAppServer.csproj"
COPY . .
WORKDIR "/src/SolutionTemplateAppServer"

RUN dotnet build "SolutionTemplateAppServer.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SolutionTemplateAppServer.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

RUN apk add libc6-compat
RUN wget -O azcopy_v10.tar.gz https://aka.ms/downloadazcopy-v10-linux && tar -xf azcopy_v10.tar.gz --strip-components=1
RUN cp ./azcopy /usr/bin/

RUN apk add --no-cache icu-libs

# Disable the invariant mode (set in base image)
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

ENTRYPOINT ["dotnet", "SolutionTemplateAppServer.dll"]