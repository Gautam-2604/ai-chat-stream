import OpenAI from "openai";
import type { AssistantStream } from "openai/lib/AssistantStream";

import type { Event, Channel, MessageResponse, StreamChat, ChannelResponse } from "stream-chat";

export class OpenAIResponseHandler{
    private message_text = ""
    private chunk_counter = 0
    private run_id = ""
    private is_done = false
    private last_update_time = 0

    constructor(
        private readonly openai: OpenAI,
        private readonly openaithread: OpenAI.Beta.Threads.Thread,
        private readonly assistantStream: AssistantStream,
        private readonly clientChat: StreamChat,
        private readonly channel: Channel,
        private readonly message: ChannelResponse,
        private readonly onDisposel:()=>void

    ){
        this.clientChat.on("ai_indicator.stop",this.handleStopGenerating)
    }
    run = async()=>{}
    dispose = async()=>{}
    private handleStopGenerating = async(event: Event)=>{

    }
    private handleStreamEvent = async(event: Event)=>{}
    private handleError = async(event: Event)=>{}
    private performWebSearch = async(event: Event)=>{}

}
