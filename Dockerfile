FROM denoland/deno:alpine
MAINTAINER Jan Gao <focussellingcute30years@gmail.com>

WORKDIR /workdir
COPY  . .
RUN deno task build
RUN deno compile  -o ./main --include static/ --include _fresh/ --include deno.json --include fresh.gen.ts -A main.ts

# FROM gcr.io/distroless/cc
FROM gcr.io/distroless/base-nossl

COPY --from=0 /workdir/main .

EXPOSE 8000

CMD ["./main"]

