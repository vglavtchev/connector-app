#!/bin/bash

# Set environment
eval $(minikube docker-env)

# Start minikube cluster
/usr/local/bin/minikube start --vm-driver=hyperkit
