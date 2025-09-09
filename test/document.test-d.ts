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

  it('getStructure method', () => {
    // getStructure is a function
    expectTypeOf<{ (): IStructure }>(doc.getStructure).toBeFunction()
    // getStructure returns IStructure
    expectTypeOf<{ (): IStructure }>(doc.getStructure).returns.toEqualTypeOf<IStructure>()
  })

  it('setFormat method', () => {
    // setFormat is a function
    expectTypeOf<{ (format: 'A4' | 'A3' | 'Letter' | 'Legal'): void }>(doc.setFormat).toBeFunction()
    // setFormat returns void
    expectTypeOf<{ (format: 'A4' | 'A3' | 'Letter' | 'Legal'): void }>(
      doc.setFormat,
    ).returns.toBeVoid()
    // setFormat accepts a specific string argument
    expectTypeOf<{ (format: 'A4' | 'A3' | 'Letter' | 'Legal'): void }>(doc.setFormat)
      .parameter(0)
      .toEqualTypeOf<'A4' | 'A3' | 'Letter' | 'Legal'>()
  })

  it('setOrientation method', () => {
    // setOrientation is a function
    expectTypeOf<{ (orientation: 'portrait' | 'landscape' | 'square'): void }>(
      doc.setOrientation,
    ).toBeFunction()
    // setOrientation returns void
    expectTypeOf<{ (orientation: 'portrait' | 'landscape' | 'square'): void }>(
      doc.setOrientation,
    ).returns.toBeVoid()
    // setOrientation accepts a specific string argument
    expectTypeOf<{ (orientation: 'portrait' | 'landscape' | 'square'): void }>(doc.setOrientation)
      .parameter(0)
      .toEqualTypeOf<'portrait' | 'landscape' | 'square'>()
  })

  it('getNumberOfPages method', () => {
    // getNumberOfPages is a function
    expectTypeOf<{ (): number }>(doc.getNumberOfPages).toBeFunction()
    // getNumberOfPages returns number
    expectTypeOf<{ (): number }>(doc.getNumberOfPages).returns.toBeNumber()
  })

  it('addPage method', () => {
    // addPage is a function
    expectTypeOf<{ (number: number): void }>(doc.addPage).toBeFunction()
    // addPage returns void
    expectTypeOf<{ (number: number): void }>(doc.addPage).returns.toBeVoid()
    // addPage accepts a number argument
    expectTypeOf<{ (number: number): void }>(doc.addPage).parameter(0).toEqualTypeOf<number>()
  })

  it('deletePage method', () => {
    // deletePage is a function
    expectTypeOf<{ (pageIndex: number): void }>(doc.deletePage).toBeFunction()
    // deletePage returns void
    expectTypeOf<{ (pageIndex: number): void }>(doc.deletePage).returns.toBeVoid()
    // deletePage accepts a number argument
    expectTypeOf<{ (pageIndex: number): void }>(doc.deletePage).parameter(0).toEqualTypeOf<number>()
  })
})
