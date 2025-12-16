FROM golang:1.18.0-bullseye

EXPOSE 80

WORKDIR /app

COPY app.go .

RUN go mod init main && \
    go build

CMD ["./main"]