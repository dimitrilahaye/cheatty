#!/bin/bash

PROJECT=$1
INVENTORY=$2

PLAYBOOK="provision-${PROJECT}.yaml"

if [ "$INVENTORY" != "staging" ] && [ "$INVENTORY" != "production" ]; then
    echo "Invalid environment (staging | production)"

    exit 1
fi

if [ "$PROJECT" != "app" ] && [ "$PROJECT" != "api" ]; then
    echo "Invalid project (api | app)"

    exit 1
fi

ansible-playbook -i $INVENTORY -l $PROJECT $PLAYBOOK
