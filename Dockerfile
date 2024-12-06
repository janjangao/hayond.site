FROM denoland/deno:alpine
MAINTAINER Jan Gao <focussellingcute30years@gmail.com>

WORKDIR /workdir

COPY  . .
RUN ls
RUN deno task build
RUN deno compile  -o ./main --include static/ --include _fresh/ --include deno.json --include fresh.gen.ts -A main.ts
RUN ls
RUN ls workdir

FROM scratch

COPY --from=0 /main .

EXPOSE 8000

ENTRYPOINT ["/main"]