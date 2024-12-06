FROM denoland/deno:alpine
MAINTAINER Jan Gao <focussellingcute30years@gmail.com>

COPY  . .
RUN deno task build
RUN deno compile --include static/ --include _fresh/ --include deno.json --include fresh.gen.ts -A main.ts

FROM scratch

COPY --from=0 /main .

EXPOSE 8000

ENTRYPOINT ["/main"]