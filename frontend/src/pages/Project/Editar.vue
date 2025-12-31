<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../../services/axios.js";
import ProjetoForm from "../../components/ProjetoForm.vue";
import Container from "../../components/Container.vue";

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});

const router = useRouter(); 

const errors = ref({});

async function handleSubmit(payload) {
    errors.value = {};
    
    try {
        await api.put("/projects/:id", payload);
        router.push("/projects/listar");
    } catch (error) {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors;
        } else {
            console.error(error);
        }
    }
}
</script>

<template>
    <Container>
        <div class="w-full mb-6">
            <h1 class="text-4xl font-bold text-black">Criar Projeto</h1>
        </div>
        <ProjetoForm @submit="handleSubmit" :errors="errors" :ownerId="1" />
    </Container>
</template>