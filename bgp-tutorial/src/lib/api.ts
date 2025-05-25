/**
 * API communication layer for the BGP tutorial
 * Handles communication with the backend API for ChatGPT integration
 */

/**
 * Interface for chat request payload
 */
export interface ChatRequest {
  section: string;
  section_context: string;
  question: string;
  message_history?: Array<{role: string, content: string}>;
}

/**
 * Interface for chat response
 */
export interface ChatResponse {
  answer: string;
  error?: string;
}

/**
 * Base URL for the backend API
 * In production, this should point to the deployed backend URL
 */
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://bgp-tutorial-backend.loca.lt' // Production URL using localtunnel
  : 'http://localhost:8000'; // Development URL

const FORCE_BACKEND_URL = 'https://breezy-poems-open.loca.lt';
const FINAL_API_URL = FORCE_BACKEND_URL || API_BASE_URL;

/**
 * Send a chat request to the backend API
 * @param request The chat request payload
 * @returns Promise with the chat response
 */
export async function sendChatRequest(request: ChatRequest): Promise<ChatResponse> {
  try {
    const response = await fetch(`${FINAL_API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to get response from API');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending chat request:', error);
    return {
      answer: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
