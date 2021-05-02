#!/bin/bash

PROJECT=$1
ENVIRONMENT=$2

INVENTORY="${ENVIRONMENT}-${PROJECT}"

PLAYBOOK="provision-${PROJECT}.yaml"

if [ "$ENVIRONMENT" != "staging" ] && [ "$ENVIRONMENT" != "production" ]; then
    echo "Invalid environment (staging | production)"

    exit 1
fi

if [ "$PROJECT" != "app" ] && [ "$PROJECT" != "api" ]; then
    echo "Invalid project (api | app)"

    exit 1
fi

ansible-playbook -i $INVENTORY $PLAYBOOK
