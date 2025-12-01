#!/bin/bash
# Script to update the Giant Museum web application "manually" in Minikube

# Build Docker image inside Minikube
eval $(minikube docker-env)
docker build -t giantmuseumweb:latest .

# Restart deployment
kubectl rollout restart deployment/giantmuseumweb-giantmuseumweb -n giantmuseumweb

# Optionally open the service
minikube service -n giantmuseumweb giantmuseumweb-giantmuseumweb
