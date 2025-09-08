/**
 * Document Type Definitions
 * Defines the structure and metadata of a document.
 * @module types/document
 * @version 1.0.0
 * @since 2024-10-01
 * @license MIT
 * @author Paul G.
 * @description This module provides TypeScript interfaces for document metadata and structure.
 */

/** IMetadata Interface
 * Represents the metadata of a document.
 * @interface IMetadata
 * @property {string} title - The title of the document.
 * @property {string | null} [author] - The author of the document.
 * @property {string | null} [description] - A brief description of the document.
 * @property {string[] | null} [keywords] - Keywords associated with the document.
 * @property {Date | null} [creationDate] - The creation date of the document.
 */
export type IMetadata = {
  title: string
  author?: string | null
  description?: string | null
  keywords?: Set<string> | null
  creationDate?: Date | null
}

/**
 * IStructure Interface
 * Represents the structure of a document.
 * @interface IStructure
 * @property {number} [numberOfPages] - The number of pages in the document.
 * @property {'A4' | 'A3' | 'Letter' | 'Legal'} [format] - The format of the document.
 * @property {'portrait' | 'landscape' | 'square'} [orientation] - The orientation of the document.
 */
export interface IStructure {
  numberOfPages?: number
  format?: 'A4' | 'A3' | 'Letter' | 'Legal'
  orientation?: 'portrait' | 'landscape' | 'square'
}
