import { expectTypeOf, describe, it } from 'vitest'
import type { IDocument, IMetadata, IStructure } from '../src/core/types/document.type'
import { Document } from '../src/core/setting/document'

const meta: IMetadata = {
  title: 'Sample Document',
  author: 'Paul Goma',
  description: 'A brief description of the document.',
  keywords: ['sample', 'document', 'typescript'],
  creationDate: new Date('2025-09-07'),
}

const struct: IStructure = {
  numberOfPages: 10,
  format: 'A4',
  orientation: 'portrait',
}

const doc = new Document(meta, struct)

describe('Document types defintions', () => {
  it('Metadata interface', () => {
    // ✅ Vérifie que doc est bien typé
    expectTypeOf<IDocument>(doc).toEqualTypeOf<IDocument>()
    // ✅ Vérifie les propriétés internes
    expectTypeOf<IDocument>(doc).toHaveProperty('metadata').toMatchObjectType<IMetadata>()
    // ✅ Vérifie les types des champs de metadata
    expectTypeOf<IMetadata>(doc.metadata).toHaveProperty('title').toBeString()
    expectTypeOf<IMetadata>(doc.metadata)
      .toHaveProperty('author')
      .toEqualTypeOf<string | null | undefined>()
    expectTypeOf<IMetadata>(doc.metadata)
      .toHaveProperty('description')
      .toEqualTypeOf<string | null | undefined>()
    expectTypeOf<IMetadata>(doc.metadata)
      .toHaveProperty('keywords')
      .toEqualTypeOf<string[] | null | undefined>()
    expectTypeOf<IMetadata>(doc.metadata)
      .toHaveProperty('creationDate')
      .toEqualTypeOf<Date | undefined | null>()
    // ✅ Vérifie les types des champs de structure
    expectTypeOf<IStructure>(doc.structure)
      .toHaveProperty('numberOfPages')
      .toEqualTypeOf<number | undefined>()
    expectTypeOf<IStructure>(doc.structure)
      .toHaveProperty('format')
      .toEqualTypeOf<'A4' | 'A3' | 'Letter' | 'Legal' | undefined>()
    expectTypeOf<IStructure>(doc.structure)
      .toHaveProperty('orientation')
      .toEqualTypeOf<'portrait' | 'landscape' | 'square' | undefined>()
  })
})
