/* Copyright (C) 2018-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {Stream} from 'xstream';
import MAIL_TO_BUG_REPORT from '../../components/mail-to-bug-report';

interface Actions {
  emailBugReport$: Stream<any>;
}

export default function linking(actions: Actions) {
  return actions.emailBugReport$.mapTo(MAIL_TO_BUG_REPORT);
}
