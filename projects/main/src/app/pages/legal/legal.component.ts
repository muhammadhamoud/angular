import {  Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ROI-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalComponent {
  file_path_name: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Get the route parameter value (e.g., 'privacy' or 'terms')
      const fileName = params['file_name'];
      this.file_path_name = `assets/content/legal/${fileName}_`;
    });
  }

}
