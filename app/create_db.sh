#!/bin/bash
#set server environment
export NODE_ENV=development
DATABASE='node_workshop'
#create database
psql postgres -c "CREATE DATABASE $DATABASE with encoding 'UTF8'"
