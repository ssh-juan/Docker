FROM cgr.dev/chainguard/python:latest-dev AS builder
WORKDIR /app
COPY . .
RUN pip install --user --no-cache-dir -r requirements.txt

#FROM cgr.dev/chainguard/python:latest
COPY app.py .

EXPOSE 5000
ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]