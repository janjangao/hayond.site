FROM denoland/deno:alpine
MAINTAINER Jan Gao <focussellingcute30years@gmail.com>

COPY  . .
RUN deno task build

EXPOSE 8000

ENTRYPOINT deno task preview