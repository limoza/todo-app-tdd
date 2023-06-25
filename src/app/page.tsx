'use client'
import React from 'react'
import reportAccessibility from '@/utils/reportAccessibility'
import { AppContents } from '@/components/AppContents'

export default function Home() {
  reportAccessibility(React)
  return <AppContents />
}
