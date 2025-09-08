import { expectTypeOf, describe, it } from 'vitest'
import type { IMetadata, IStructure } from '../src/core/types/document.type'
import { Document } from '../src/core/setting/document'

const meta: IMetadata = {
  title: 'Sample Document',
  author: 'Paul Goma',
  description: 'A brief description of the document.',
  keywords: new Set(['sample', 'document', 'typescript']),
  creationDate: new Date('2025-09-07'),
}

const struct: IStructure = {
  numberOfPages: 10,
  format: 'A4',
  orientation: 'portrait',
}

const doc = new Document(meta, struct)

describe('Document method types', () => {
  it('getMetadata method', () => {
    // getMetadata is a function
    expectTypeOf<{ (): IMetadata }>(doc.getMetadata).toBeFunction()
    // getMetadata returns IMetadata
    expectTypeOf<{ (): IMetadata }>(doc.getMetadata).returns.toEqualTypeOf<IMetadata>()
  })

  it('setTitle method', () => {
    // setTitle is a function
    expectTypeOf<{ (title: string): void }>(doc.setTitle).toBeFunction()
    // setTitle returns void
    expectTypeOf<{ (title: string): void }>(doc.setTitle).returns.toBeVoid()
    // setTitle accepts a string argument
    expectTypeOf<{ (title: string): void }>(doc.setTitle).parameter(0).toEqualTypeOf<string>()
  })

  it('setDescription method', () => {
    // setDescription is a function
    expectTypeOf<{ (description: string): void }>(doc.setDescription).toBeFunction()
    // setDescription returns void
    expectTypeOf<{ (description: string): void }>(doc.setDescription).returns.toBeVoid()
    // setDescription accepts a string argument
    expectTypeOf<{ (description: string): void }>(doc.setDescription)
      .parameter(0)
      .toEqualTypeOf<string>()
  })

  it('addKeywords method', () => {
    // addKeywords is a function
    expectTypeOf<{ (keywords: string[]): void }>(doc.addKeywords).toBeFunction()
    // addKeywords returns void
    expectTypeOf<{ (keywords: string[]): void }>(doc.addKeywords).returns.toBeVoid()
    // addKeywords accepts a string[] argument
    expectTypeOf<{ (keywords: string[]): void }>(doc.addKeywords)
      .parameter(0)
      .toEqualTypeOf<string[]>()
  })
})
