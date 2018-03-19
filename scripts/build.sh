#!/usr/bin/env bash

yarn install
yarn run dev:link
cd ./dev
yarn link '@iarroyo/multi-part-library'
