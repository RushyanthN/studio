'use server';
/**
 * @fileOverview An AI agent that suggests compelling taglines or summaries based on user-provided information.
 *
 * - generateTagline - A function that generates a tagline or summary.
 * - GenerateTaglineInput - The input type for the generateTagline function.
 * - GenerateTaglineOutput - The return type for the generateTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglineInputSchema = z.object({
  userDetails: z
    .string()
    .describe('Details about the user, including their skills and experiences.'),
  themeSelection: z
    .string()
    .describe('The theme selected by the user for their portfolio.'),
  priorContent: z
    .string()
    .optional()
    .describe('The user\'s existing content, if any.'),
});
export type GenerateTaglineInput = z.infer<typeof GenerateTaglineInputSchema>;

const GenerateTaglineOutputSchema = z.object({
  tagline: z.string().describe('A compelling tagline or summary for the user.'),
});
export type GenerateTaglineOutput = z.infer<typeof GenerateTaglineOutputSchema>;

export async function generateTagline(input: GenerateTaglineInput): Promise<GenerateTaglineOutput> {
  return generateTaglineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTaglinePrompt',
  input: {schema: GenerateTaglineInputSchema},
  output: {schema: GenerateTaglineOutputSchema},
  prompt: `You are an AI assistant that helps users create compelling taglines or summaries for their online portfolios.

  Based on the user's details, selected theme, and prior content, suggest a unique and attention-grabbing tagline or summary that highlights their skills and experience.

  User Details: {{{userDetails}}}
  Theme Selection: {{{themeSelection}}}
  Prior Content: {{{priorContent}}}

  Tagline:`, // Ensure the AI generates a tagline.
});

const generateTaglineFlow = ai.defineFlow(
  {
    name: 'generateTaglineFlow',
    inputSchema: GenerateTaglineInputSchema,
    outputSchema: GenerateTaglineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
