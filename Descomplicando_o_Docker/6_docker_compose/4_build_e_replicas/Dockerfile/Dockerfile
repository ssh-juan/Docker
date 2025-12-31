FROM cgr.dev/chainguard/python:latest-dev AS builder
WORKDIR /app
COPY . .
RUN pip install --user --no-cache-dir -r requirements.txt

FROM cgr.dev/chainguard/python:latest
WORKDIR /app
COPY --from=builder /app /app
COPY --from=builder /home/nonroot/.local /home/nonroot/.local
ENV PATH="/home/nonroot/.local/bin:${PATH}"
EXPOSE 5000
ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]