FROM denoland/deno:1.22.3

EXPOSE 8000

WORKDIR /app

USER deno

ADD . .

CMD ["task", "dev"]
