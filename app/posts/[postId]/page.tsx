import React from 'react'

export default function WhatEver({params,}: {
  params: {postId: string};
}) {
  return <h1>Product Details {params.postId}</h1>;
}