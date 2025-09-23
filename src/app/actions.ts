
'use server';

import { z } from 'zod';
import { generateTagline, type GenerateTaglineInput } from '@/ai/flows/ai-powered-tagline-generation';

const formSchema = z.object({
  userDetails: z.string().min(10, { message: "Please provide more details about yourself (at least 10 characters)." }),
  priorContent: z.string().optional(),
});

export interface ActionState {
  tagline?: string;
  error?: string;
}

export async function generateTaglineAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const validatedFields = formSchema.safeParse({
    userDetails: formData.get('userDetails'),
    priorContent: formData.get('priorContent'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.userDetails?.[0] || 'Invalid input.',
    };
  }

  const input: GenerateTaglineInput = {
    ...validatedFields.data,
    themeSelection: 'Modern, creative, and professional',
  };

  try {
    const result = await generateTagline(input);
    if (result.tagline) {
      return { tagline: result.tagline };
    }
    return { error: 'Failed to generate tagline. Please try again.' };
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred while generating the tagline.' };
  }
}
