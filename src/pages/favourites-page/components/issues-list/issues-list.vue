<template>
  <div class="issues-list">
    <button type="button" class="issues-list__toggler" @click="onClickToggler">
      {{ isOpen ? "Hide issues" : "View issues" }}
      <icon-arrow
        class="issues-list__arrow"
        :class="{ 'issues-list__arrow--show': isOpen }"
      />
    </button>

    <div
      class="issues-list__issues-list-container"
      :class="{ 'mod-show': isOpen }"
    >
      <ul class="issues-list__issues-list">
        <li
          v-for="(issue, index) in issues"
          :key="index"
          class="issues-list__issues-item"
        >
          <a
            :href="issue.user.htmlUrl"
            target="_blank"
            class="issues-list__issues-name-link"
          >
            {{ issue.user.login }}
          </a>
          <div class="issues-list__issues-text">
            {{ issue.title }}
          </div>
        </li>
      </ul>

      <loader-skeleton v-if="loading" />
      <error-rest v-if="error" />
      <div v-if="isNoData">No issues</div>
    </div>
  </div>
</template>

<script>
import IconArrow from "@/assets/svg/icon-arrow.vue";
import { getIssues } from "@/api/rest/repo";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";
import LoaderSkeleton from "@/pages/favourites-page/components/issues-list/components/loader-skeleton/loader-skeleton.vue";

export default {
  name: "issues-list",
  components: { LoaderSkeleton, ErrorRest, IconArrow },
  props: ["repo"],
  data() {
    return {
      isOpen: false,
      issues: undefined,
      loading: false,
      error: false,
    };
  },
  methods: {
    onClickToggler() {
      this.isOpen = !this.isOpen;
      if (!this.issues) {
        this.getIssues();
      }
    },
    async getIssues() {
      this.loading = true;

      const ownerLogin = this.repo.owner.login;
      const repoName = this.repo.name;

      getIssues(ownerLogin, repoName)
        .then((response) => {
          this.issues = response;
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    isNoData() {
      return this.issues && !this.error && !this.issues.length;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
