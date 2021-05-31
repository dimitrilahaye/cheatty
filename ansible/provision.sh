#!/bin/bash

INVENTORY=$1

PLAYBOOK="provision.yaml"

if [ "$INVENTORY" != "staging" ] && [ "$INVENTORY" != "production" ]; then
    echo "Invalid environment (staging | production)"

    exit 1
fi

ansible-playbook -i $INVENTORY $PLAYBOOK
