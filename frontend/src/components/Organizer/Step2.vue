<template>
  <div class="bg-gray-100 p-4 sm:p-6 md:p-8 font-sans min-h-screen">

    <div class="max-w-5xl mx-auto">
      <header class="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Thời gian & Loại vé</h1>
      </header>

      <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg relative overflow-hidden">
        <TransitionGroup name="list" tag="div">
          <div v-for="session in sessions" :key="session.id" class="mb-4 border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden">
            <div
                @click="toggleSession(session.id)"
                class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            >
              <div class="flex items-center gap-4">
                <div v-if="editingSessionId === session.id" class="flex items-center gap-2">
                  <input
                      type="text" v-model="session.name" @click.stop @keyup.enter="finishEditingSessionName" @blur="finishEditingSessionName" ref="sessionNameInput"
                      class="text-xl font-bold text-gray-800 bg-gray-100 p-2 rounded-md border-2 border-purple-500 outline-none"
                  >
                  <button @click.stop="finishEditingSessionName" class="p-2 text-green-600 hover:bg-green-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </button>
                </div>
                <div v-else class="flex items-center gap-2">
                  <span class="text-xl font-bold text-gray-800 p-2">{{ session.name }}</span>
                  <button @click.stop="startEditingSessionName(session)" class="p-2 text-gray-500 hover:bg-gray-200 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                  </button>
                </div>

                <span v-if="activeSessionId !== session.id && getSessionTimeRange(session)" class="text-sm text-gray-500 hidden md:block">
                  {{ getSessionTimeRange(session) }}
                </span>
              </div>

              <div class="flex items-center gap-4">
                <button v-if="sessions.length > 1" @click.stop="removeSession(session.id)" class="p-2 rounded-md font-semibold text-red-600 hover:bg-red-100">
                  Xóa suất
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0" :class="{'rotate-180': activeSessionId === session.id}">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            <div v-if="activeSessionId === session.id" class="p-4 pt-0 border-t border-gray-200">
              <TransitionGroup name="list" tag="div" class="relative">
                <div v-for="(timeSlot, slotIndex) in session.timeSlots" :key="timeSlot.id" class="my-4 p-4 border rounded-lg" :class="activeTimeSlotId === timeSlot.id ? 'bg-purple-50 border-purple-200' : 'bg-white'">
                  <div @click="toggleTimeSlot(timeSlot.id)" class="flex justify-between items-center cursor-pointer">
                    <h3 class="font-bold text-gray-700">Khung giờ {{ slotIndex + 1 }}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-gray-400 transition-transform duration-300" :class="{'rotate-180': activeTimeSlotId === timeSlot.id}">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div v-if="activeTimeSlotId === timeSlot.id" class="mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">*Thời gian bắt đầu</label>
                        <input type="datetime-local" v-model="timeSlot.startTime" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
                      </div>
                      <div>
                        <label class="block text-sm font-bold text-gray-600 mb-1">*Thời gian kết thúc</label>
                        <input type="datetime-local" v-model="timeSlot.endTime" class="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
                      </div>
                    </div>
                    <TransitionGroup name="list-sub" tag="div" class="relative">
                      <div v-for="ticket in timeSlot.ticketTypes" :key="ticket.id" class="mt-4 p-4 bg-white rounded-lg border flex justify-between items-center">
                        <div>
                          <p class="font-semibold text-gray-800">{{ ticket.name }}</p>
                          <p class="text-sm text-gray-600">{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ticket.price) }} - SL: {{ ticket.totalQuantity }}</p>
                        </div>
                        <button @click="removeTicketType(timeSlot, ticket.id)" class="px-2 py-1 rounded-md text-xs text-red-500 hover:bg-red-100">Xóa</button>
                      </div>
                    </TransitionGroup>
                    <div class="mt-4 space-x-4">
                      <button @click="openAddTicketModal(timeSlot)" class="p-2 rounded-md text-sm font-semibold text-purple-600 hover:bg-purple-100">
                        + Thêm loại vé
                      </button>
                      <button v-if="session.timeSlots.length > 1" @click="removeTimeSlot(session, timeSlot.id)" class="p-2 rounded-md text-sm font-semibold text-red-600 hover:bg-red-100">
                        Xóa khung giờ
                      </button>
                    </div>
                  </div>
                </div>
              </TransitionGroup>
              <button @click="addTimeSlot(session)" class="mt-4 p-2 rounded-md text-sm font-semibold text-purple-600 hover:bg-purple-100">
                + Thêm khung giờ
              </button>
            </div>
          </div>
        </TransitionGroup>
        <div class="text-center mt-8">
          <button @click="addSession" class="px-6 py-3 border-2 border-dashed border-purple-500 text-purple-600 font-bold rounded-lg transition-all hover:bg-purple-100 hover:border-solid">
            + Tạo suất diễn
          </button>
        </div>
      </div>
    </div>
    <Transition name="modal-fade">
      <TicketTypeModal
          v-if="isModalOpen"
          @close="isModalOpen = false"
          @save="handleSaveTicket"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import TicketTypeModal from '../TicketTypeModal.vue';

const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
const activeSessionId = ref(null);
const activeTimeSlotId = ref(null);
const editingSessionId = ref(null);
const sessionNameInput = ref(null);

const sessions = ref([
  {
    id: uid(), name: 'Suất diễn chính',
    timeSlots: [{ id: uid(), startTime: '', endTime: '', ticketTypes: [] }]
  }
]);
if (sessions.value.length > 0) {
  activeSessionId.value = sessions.value[0].id;
  if (sessions.value[0].timeSlots.length > 0) {
    activeTimeSlotId.value = sessions.value[0].timeSlots[0].id;
  }
}
const getNextSessionNumber = () => {

  const existingNumbers = sessions.value
      .map(session => {
        const match = session.name.match(/\d+$/);
        return match ? parseInt(match[0], 10) : 0;
      });
  if (existingNumbers.length === 0) {
    return 1;
  }
  const maxNumber = Math.max(...existingNumbers);
  return maxNumber + 1;
};

const addSession = () => {
  const newNumber = getNextSessionNumber();
  const newSession = {
    id: uid(),
    name: `Suất diễn ${newNumber}`,
    timeSlots: [{ id: uid(), startTime: '', endTime: '', ticketTypes: [] }]
  };
  sessions.value.push(newSession);
  activeSessionId.value = newSession.id;
  activeTimeSlotId.value = newSession.timeSlots[0].id;
};
const toggleSession = (sessionId) => {
  if (editingSessionId.value === sessionId) return;
  activeSessionId.value = activeSessionId.value === sessionId ? null : sessionId;
};
const toggleTimeSlot = (timeSlotId) => { activeTimeSlotId.value = activeTimeSlotId.value === timeSlotId ? null : timeSlotId; };

const startEditingSessionName = async (session) => {
  editingSessionId.value = session.id;
  await nextTick();
  if (sessionNameInput.value) {
    sessionNameInput.value.focus();
  }
};
const finishEditingSessionName = () => {
  editingSessionId.value = null;
};

const getSessionTimeRange = (session) => {
  const timeSlots = session.timeSlots;
  if (!timeSlots || timeSlots.length === 0) return '';
  const validDates = timeSlots.map(ts => new Date(ts.startTime)).filter(d => !isNaN(d.getTime()));
  if (validDates.length === 0) return '';
  const minDate = new Date(Math.min(...validDates));
  const maxDate = new Date(Math.max(...validDates));
  const formatDate = (date) => {
    if (isNaN(date.getTime())) return '...';
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  return `Từ ${formatDate(minDate)} - Đến ${formatDate(maxDate)}`;
};

const addTimeSlot = (session) => {
  const newTimeSlot = { id: uid(), startTime: '', endTime: '', ticketTypes: [] };
  session.timeSlots.push(newTimeSlot);
  activeTimeSlotId.value = newTimeSlot.id;
};

const removeSession = (sessionId) => { sessions.value = sessions.value.filter(s => s.id !== sessionId); };
const removeTimeSlot = (session, timeSlotId) => { session.timeSlots = session.timeSlots.filter(ts => ts.id !== timeSlotId); };
const removeTicketType = (timeSlot, ticketId) => { timeSlot.ticketTypes = timeSlot.ticketTypes.filter(t => t.id !== ticketId); };
const isModalOpen = ref(false);
const activeTimeSlot = ref(null);
const openAddTicketModal = (timeSlot) => { activeTimeSlot.value = timeSlot; isModalOpen.value = true; };
const handleSaveTicket = (newTicketData) => { if (activeTimeSlot.value) { activeTimeSlot.value.ticketTypes.push({ id: uid(), ...newTicketData }); } isModalOpen.value = false; };

</script>

<style scoped>
.font-sans { font-family: 'Inter', sans-serif; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.list-enter-active, .list-leave-active { transition: all 0.5s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(20px); }
.list-move { transition: transform 0.5s ease; }
.list-sub-enter-active, .list-sub-leave-active { transition: all 0.4s ease; }
.list-sub-enter-from, .list-sub-leave-to { opacity: 0; transform: scale(0.95); }
.list-sub-move { transition: transform 0.4s ease; }
.list-leave-active, .list-sub-leave-active { position: absolute; width: calc(100% - 2rem); }
</style>